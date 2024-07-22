/// <reference path="../typings/PlayFab/PlayFabMultiplayerApi.d.ts" />

var PlayFab = typeof PlayFab != "undefined" ? PlayFab : {};

if(!PlayFab.settings) {
    PlayFab.settings = {
        titleId: null, // You must set this value for PlayFabSdk to work properly (Found in the Game Manager for your title, at the PlayFab Website)
        developerSecretKey: null, // For security reasons you must never expose this value to the client or players - You must set this value for Server-APIs to work properly (Found in the Game Manager for your title, at the PlayFab Website)
        GlobalHeaderInjection: null,
        productionServerUrl: ".playfabapi.com"
    }
}

if(!PlayFab._internalSettings) {
    PlayFab._internalSettings = {
        entityToken: null,
        sdkVersion: "1.175.240719",
        requestGetParams: {
            sdk: "JavaScriptSDK-1.175.240719"
        },
        sessionTicket: null,
        verticalName: null, // The name of a customer vertical. This is only for customers running a private cluster. Generally you shouldn't touch this
        errorTitleId: "Must be have PlayFab.settings.titleId set to call this method",
        errorLoggedIn: "Must be logged in to call this method",
        errorEntityToken: "You must successfully call GetEntityToken before calling this",
        errorSecretKey: "Must have PlayFab.settings.developerSecretKey set to call this method",

        GetServerUrl: function () {
            if (!(PlayFab.settings.productionServerUrl.substring(0, 4) === "http")) {
                if (PlayFab._internalSettings.verticalName) {
                    return "https://" + PlayFab._internalSettings.verticalName + PlayFab.settings.productionServerUrl;
                } else {
                    return "https://" + PlayFab.settings.titleId + PlayFab.settings.productionServerUrl;
                }
            } else {
                return PlayFab.settings.productionServerUrl;
            }
        },

        InjectHeaders: function (xhr, headersObj) {
            if (!headersObj)
                return;

            for (var headerKey in headersObj)
            {
                try {
                    xhr.setRequestHeader(gHeaderKey, headersObj[headerKey]);
                } catch (e) {
                    console.log("Failed to append header: " + headerKey + " = " + headersObj[headerKey] + "Error: " + e);
                }
            }
        },

        ExecuteRequest: function (url, request, authkey, authValue, callback, customData, extraHeaders) {
            var resultPromise = new Promise(function (resolve, reject) {
                if (callback != null && typeof (callback) !== "function")
                    throw "Callback must be null or a function";

                if (request == null)
                    request = {};

                var startTime = new Date();
                var requestBody = JSON.stringify(request);

                var urlArr = [url];
                var getParams = PlayFab._internalSettings.requestGetParams;
                if (getParams != null) {
                    var firstParam = true;
                    for (var key in getParams) {
                        if (firstParam) {
                            urlArr.push("?");
                            firstParam = false;
                        } else {
                            urlArr.push("&");
                        }
                        urlArr.push(key);
                        urlArr.push("=");
                        urlArr.push(getParams[key]);
                    }
                }

                var completeUrl = urlArr.join("");

                var xhr = new XMLHttpRequest();
                // window.console.log("URL: " + completeUrl);
                xhr.open("POST", completeUrl, true);

                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.setRequestHeader("X-PlayFabSDK", "JavaScriptSDK-" + PlayFab._internalSettings.sdkVersion);
                if (authkey != null)
                    xhr.setRequestHeader(authkey, authValue);
                PlayFab._internalSettings.InjectHeaders(xhr, PlayFab.settings.GlobalHeaderInjection);
                PlayFab._internalSettings.InjectHeaders(xhr, extraHeaders);

                xhr.onloadend = function () {
                    if (callback == null)
                        return;

                    var result = PlayFab._internalSettings.GetPlayFabResponse(request, xhr, startTime, customData);
                    if (result.code === 200) {
                        callback(result, null);
                    } else {
                        callback(null, result);
                    }
                }

                xhr.onerror = function () {
                    if (callback == null)
                        return;

                    var result = PlayFab._internalSettings.GetPlayFabResponse(request, xhr, startTime, customData);
                    callback(null, result);
                }

                xhr.send(requestBody);
                xhr.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        var xhrResult = PlayFab._internalSettings.GetPlayFabResponse(request, this, startTime, customData);
                        if (this.status === 200) {
                            resolve(xhrResult);
                        } else {
                            reject(xhrResult);
                        }
                    }
                };
            });
            // Return a Promise so that calls to various API methods can be handled asynchronously
            return resultPromise;
        },

        GetPlayFabResponse: function(request, xhr, startTime, customData) {
            var result = null;
            try {
                // window.console.log("parsing json result: " + xhr.responseText);
                result = JSON.parse(xhr.responseText);
            } catch (e) {
                result = {
                    code: 503, // Service Unavailable
                    status: "Service Unavailable",
                    error: "Connection error",
                    errorCode: 2, // PlayFabErrorCode.ConnectionError
                    errorMessage: xhr.responseText
                };
            }

            result.CallBackTimeMS = new Date() - startTime;
            result.Request = request;
            result.CustomData = customData;
            return result;
        },

        authenticationContext: {
            PlayFabId: null,
            EntityId: null,
            EntityType: null,
            SessionTicket: null,
            EntityToken: null
        },

        UpdateAuthenticationContext: function (authenticationContext, result) {
            var authenticationContextUpdates = {};
            if(result.data.PlayFabId !== null) {
                PlayFab._internalSettings.authenticationContext.PlayFabId = result.data.PlayFabId;
                authenticationContextUpdates.PlayFabId = result.data.PlayFabId;
            }
            if(result.data.SessionTicket !== null) {
                PlayFab._internalSettings.authenticationContext.SessionTicket = result.data.SessionTicket;
                authenticationContextUpdates.SessionTicket = result.data.SessionTicket;
            }
            if (result.data.EntityToken !== null) {
                PlayFab._internalSettings.authenticationContext.EntityId = result.data.EntityToken.Entity.Id;
                authenticationContextUpdates.EntityId = result.data.EntityToken.Entity.Id;
                PlayFab._internalSettings.authenticationContext.EntityType = result.data.EntityToken.Entity.Type;
                authenticationContextUpdates.EntityType = result.data.EntityToken.Entity.Type;
                PlayFab._internalSettings.authenticationContext.EntityToken = result.data.EntityToken.EntityToken;
                authenticationContextUpdates.EntityToken = result.data.EntityToken.EntityToken;
            }
            // Update the authenticationContext with values from the result
            authenticationContext = Object.assign(authenticationContext, authenticationContextUpdates);
            return authenticationContext;
        },

        AuthInfoMap: {
            "X-EntityToken": {
                authAttr: "entityToken",
                authError: "errorEntityToken"
            },
            "X-Authorization": {
                authAttr: "sessionTicket",
                authError: "errorLoggedIn"
            },
            "X-SecretKey": {
                authAttr: "developerSecretKey",
                authError: "errorSecretKey"
            }
        },

        GetAuthInfo: function (request, authKey) {
            // Use the most-recently saved authKey, unless one was provided in the request via the AuthenticationContext
            var authError = PlayFab._internalSettings.AuthInfoMap[authKey].authError;
            var authAttr = PlayFab._internalSettings.AuthInfoMap[authKey].authAttr;
            var defaultAuthValue = null;
            if (authAttr === "entityToken")
                defaultAuthValue = PlayFab._internalSettings.entityToken;
            else if (authAttr === "sessionTicket")
                defaultAuthValue = PlayFab._internalSettings.sessionTicket;
            else if (authAttr === "developerSecretKey")
                defaultAuthValue = PlayFab.settings.developerSecretKey;
            var authValue = request.AuthenticationContext ? request.AuthenticationContext[authAttr] : defaultAuthValue;
            return {"authKey": authKey, "authValue": authValue, "authError": authError};
        },

        ExecuteRequestWrapper: function (apiURL, request, authKey, callback, customData, extraHeaders) {
            var authValue = null;
            if (authKey !== null){
                var authInfo = PlayFab._internalSettings.GetAuthInfo(request, authKey=authKey);
                var authKey = authInfo.authKey, authValue = authInfo.authValue, authError = authInfo.authError;

                if (!authValue) throw authError;
            }
            return PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + apiURL, request, authKey, authValue, callback, customData, extraHeaders);
        }
    }
}

PlayFab.buildIdentifier = "adobuild_javascriptsdk_115";
PlayFab.sdkVersion = "1.175.240719";
PlayFab.GenerateErrorReport = function (error) {
    if (error == null)
        return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
};

PlayFab.MultiplayerApi = {
    ForgetAllCredentials: function () {
        PlayFab._internalSettings.sessionTicket = null;
        PlayFab._internalSettings.entityToken = null;
    },

    CancelAllMatchmakingTicketsForPlayer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/CancelAllMatchmakingTicketsForPlayer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CancelAllServerBackfillTicketsForPlayer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/CancelAllServerBackfillTicketsForPlayer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CancelMatchmakingTicket: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/CancelMatchmakingTicket", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CancelServerBackfillTicket: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/CancelServerBackfillTicket", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateBuildAlias: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/CreateBuildAlias", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateBuildWithCustomContainer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/CreateBuildWithCustomContainer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateBuildWithManagedContainer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/CreateBuildWithManagedContainer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateBuildWithProcessBasedServer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/CreateBuildWithProcessBasedServer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateLobby: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/CreateLobby", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateMatchmakingTicket: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/CreateMatchmakingTicket", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateRemoteUser: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/CreateRemoteUser", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateServerBackfillTicket: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/CreateServerBackfillTicket", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateServerMatchmakingTicket: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/CreateServerMatchmakingTicket", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateTitleMultiplayerServersQuotaChange: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/CreateTitleMultiplayerServersQuotaChange", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteAsset: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/DeleteAsset", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteBuild: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/DeleteBuild", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteBuildAlias: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/DeleteBuildAlias", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteBuildRegion: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/DeleteBuildRegion", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteCertificate: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/DeleteCertificate", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteContainerImageRepository: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/DeleteContainerImageRepository", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteLobby: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/DeleteLobby", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteRemoteUser: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/DeleteRemoteUser", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteSecret: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/DeleteSecret", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    EnableMultiplayerServersForTitle: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/EnableMultiplayerServersForTitle", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    FindFriendLobbies: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/FindFriendLobbies", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    FindLobbies: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/FindLobbies", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetAssetDownloadUrl: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetAssetDownloadUrl", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetAssetUploadUrl: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetAssetUploadUrl", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetBuild: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetBuild", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetBuildAlias: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetBuildAlias", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetContainerRegistryCredentials: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetContainerRegistryCredentials", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetLobby: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/GetLobby", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetMatch: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/GetMatch", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetMatchmakingQueue: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/GetMatchmakingQueue", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetMatchmakingTicket: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/GetMatchmakingTicket", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetMultiplayerServerDetails: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetMultiplayerServerDetails", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetMultiplayerServerLogs: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetMultiplayerServerLogs", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetMultiplayerSessionLogsBySessionId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetMultiplayerSessionLogsBySessionId", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetQueueStatistics: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/GetQueueStatistics", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetRemoteLoginEndpoint: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetRemoteLoginEndpoint", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetServerBackfillTicket: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/GetServerBackfillTicket", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetTitleEnabledForMultiplayerServersStatus: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetTitleEnabledForMultiplayerServersStatus", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetTitleMultiplayerServersQuotaChange: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetTitleMultiplayerServersQuotaChange", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetTitleMultiplayerServersQuotas: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/GetTitleMultiplayerServersQuotas", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    InviteToLobby: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/InviteToLobby", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    JoinArrangedLobby: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/JoinArrangedLobby", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    JoinLobby: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/JoinLobby", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    JoinLobbyAsServer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/JoinLobbyAsServer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    JoinMatchmakingTicket: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/JoinMatchmakingTicket", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    LeaveLobby: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/LeaveLobby", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    LeaveLobbyAsServer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/LeaveLobbyAsServer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListArchivedMultiplayerServers: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListArchivedMultiplayerServers", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListAssetSummaries: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListAssetSummaries", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListBuildAliases: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListBuildAliases", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListBuildSummariesV2: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListBuildSummariesV2", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListCertificateSummaries: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListCertificateSummaries", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListContainerImages: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListContainerImages", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListContainerImageTags: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListContainerImageTags", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListMatchmakingQueues: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/ListMatchmakingQueues", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListMatchmakingTicketsForPlayer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/ListMatchmakingTicketsForPlayer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListMultiplayerServers: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListMultiplayerServers", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListPartyQosServers: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListPartyQosServers", request, null, callback, customData, extraHeaders);
    },

    ListQosServersForTitle: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListQosServersForTitle", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListSecretSummaries: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListSecretSummaries", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListServerBackfillTicketsForPlayer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/ListServerBackfillTicketsForPlayer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListTitleMultiplayerServersQuotaChanges: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListTitleMultiplayerServersQuotaChanges", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ListVirtualMachineSummaries: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ListVirtualMachineSummaries", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RemoveMatchmakingQueue: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/RemoveMatchmakingQueue", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RemoveMember: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/RemoveMember", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RequestMultiplayerServer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/RequestMultiplayerServer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RequestPartyService: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Party/RequestPartyService", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RolloverContainerRegistryCredentials: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/RolloverContainerRegistryCredentials", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SetMatchmakingQueue: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/SetMatchmakingQueue", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ShutdownMultiplayerServer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/ShutdownMultiplayerServer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SubscribeToLobbyResource: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/SubscribeToLobbyResource", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SubscribeToMatchmakingResource: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/SubscribeToMatchmakingResource", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UnsubscribeFromLobbyResource: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/UnsubscribeFromLobbyResource", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UnsubscribeFromMatchmakingResource: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Match/UnsubscribeFromMatchmakingResource", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UntagContainerImage: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/UntagContainerImage", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateBuildAlias: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/UpdateBuildAlias", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateBuildName: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/UpdateBuildName", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateBuildRegion: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/UpdateBuildRegion", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateBuildRegions: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/UpdateBuildRegions", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateLobby: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/UpdateLobby", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateLobbyAsServer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Lobby/UpdateLobbyAsServer", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UploadCertificate: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/UploadCertificate", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UploadSecret: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/MultiplayerServer/UploadSecret", request, "X-EntityToken", callback, customData, extraHeaders);
    },

};

var PlayFabMultiplayerSDK = PlayFab.MultiplayerApi;

