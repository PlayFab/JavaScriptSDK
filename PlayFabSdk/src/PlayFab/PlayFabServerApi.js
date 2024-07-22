/// <reference path="../typings/PlayFab/PlayFabServerApi.d.ts" />

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

PlayFab.ServerApi = {
    ForgetAllCredentials: function () {
        PlayFab._internalSettings.sessionTicket = null;
        PlayFab._internalSettings.entityToken = null;
    },

    AddCharacterVirtualCurrency: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/AddCharacterVirtualCurrency", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AddFriend: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/AddFriend", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AddGenericID: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/AddGenericID", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AddPlayerTag: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/AddPlayerTag", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AddSharedGroupMembers: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/AddSharedGroupMembers", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AddUserVirtualCurrency: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/AddUserVirtualCurrency", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AuthenticateSessionTicket: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/AuthenticateSessionTicket", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AwardSteamAchievement: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/AwardSteamAchievement", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    BanUsers: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/BanUsers", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ConsumeItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/ConsumeItem", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    CreateSharedGroup: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/CreateSharedGroup", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteCharacterFromUser: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/DeleteCharacterFromUser", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeletePlayer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/DeletePlayer", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeletePushNotificationTemplate: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/DeletePushNotificationTemplate", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteSharedGroup: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/DeleteSharedGroup", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    EvaluateRandomResultTable: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/EvaluateRandomResultTable", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ExecuteCloudScript: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/ExecuteCloudScript", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetAllSegments: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetAllSegments", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetAllUsersCharacters: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetAllUsersCharacters", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCatalogItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetCatalogItems", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCharacterData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetCharacterData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCharacterInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetCharacterInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCharacterInventory: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetCharacterInventory", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCharacterLeaderboard: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetCharacterLeaderboard", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCharacterReadOnlyData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetCharacterReadOnlyData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCharacterStatistics: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetCharacterStatistics", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetContentDownloadUrl: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetContentDownloadUrl", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetFriendLeaderboard: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetFriendLeaderboard", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetFriendsList: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetFriendsList", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetLeaderboard: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetLeaderboard", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetLeaderboardAroundCharacter: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetLeaderboardAroundCharacter", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetLeaderboardAroundUser: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetLeaderboardAroundUser", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetLeaderboardForUserCharacters: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetLeaderboardForUserCharacters", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerCombinedInfo: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayerCombinedInfo", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerProfile: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayerProfile", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerSegments: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayerSegments", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayersInSegment: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayersInSegment", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerStatistics: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayerStatistics", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerStatisticVersions: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayerStatisticVersions", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerTags: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayerTags", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromFacebookIDs: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayFabIDsFromFacebookIDs", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromFacebookInstantGamesIds: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayFabIDsFromFacebookInstantGamesIds", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromGenericIDs: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayFabIDsFromGenericIDs", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromNintendoServiceAccountIds: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayFabIDsFromNintendoServiceAccountIds", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromNintendoSwitchDeviceIds: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayFabIDsFromNintendoSwitchDeviceIds", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromPSNAccountIDs: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayFabIDsFromPSNAccountIDs", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromPSNOnlineIDs: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayFabIDsFromPSNOnlineIDs", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromSteamIDs: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayFabIDsFromSteamIDs", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromTwitchIDs: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayFabIDsFromTwitchIDs", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromXboxLiveIDs: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPlayFabIDsFromXboxLiveIDs", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPublisherData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetPublisherData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetRandomResultTables: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetRandomResultTables", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetServerCustomIDsFromPlayFabIDs: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetServerCustomIDsFromPlayFabIDs", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetSharedGroupData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetSharedGroupData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetStoreItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetStoreItems", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetTime: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetTime", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetTitleData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetTitleData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetTitleInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetTitleInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetTitleNews: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetTitleNews", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserAccountInfo: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetUserAccountInfo", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserBans: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetUserBans", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetUserData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetUserInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserInventory: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetUserInventory", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserPublisherData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetUserPublisherData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserPublisherInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetUserPublisherInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserPublisherReadOnlyData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetUserPublisherReadOnlyData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserReadOnlyData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GetUserReadOnlyData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GrantCharacterToUser: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GrantCharacterToUser", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GrantItemsToCharacter: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GrantItemsToCharacter", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GrantItemsToUser: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GrantItemsToUser", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GrantItemsToUsers: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/GrantItemsToUsers", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LinkNintendoServiceAccount: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LinkNintendoServiceAccount", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LinkNintendoServiceAccountSubject: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LinkNintendoServiceAccountSubject", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LinkNintendoSwitchDeviceId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LinkNintendoSwitchDeviceId", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LinkPSNAccount: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LinkPSNAccount", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LinkPSNId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LinkPSNId", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LinkServerCustomId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LinkServerCustomId", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LinkSteamId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LinkSteamId", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LinkXboxAccount: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LinkXboxAccount", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LoginWithPSN: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LoginWithPSN", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LoginWithServerCustomId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LoginWithServerCustomId", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LoginWithSteamId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LoginWithSteamId", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LoginWithXbox: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LoginWithXbox", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    LoginWithXboxId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/LoginWithXboxId", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ModifyItemUses: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/ModifyItemUses", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    MoveItemToCharacterFromCharacter: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/MoveItemToCharacterFromCharacter", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    MoveItemToCharacterFromUser: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/MoveItemToCharacterFromUser", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    MoveItemToUserFromCharacter: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/MoveItemToUserFromCharacter", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RedeemCoupon: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/RedeemCoupon", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RemoveFriend: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/RemoveFriend", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RemoveGenericID: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/RemoveGenericID", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RemovePlayerTag: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/RemovePlayerTag", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RemoveSharedGroupMembers: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/RemoveSharedGroupMembers", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ReportPlayer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/ReportPlayer", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RevokeAllBansForUser: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/RevokeAllBansForUser", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RevokeBans: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/RevokeBans", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RevokeInventoryItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/RevokeInventoryItem", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RevokeInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/RevokeInventoryItems", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SavePushNotificationTemplate: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SavePushNotificationTemplate", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SendCustomAccountRecoveryEmail: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SendCustomAccountRecoveryEmail", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SendEmailFromTemplate: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SendEmailFromTemplate", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SendPushNotification: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SendPushNotification", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SendPushNotificationFromTemplate: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SendPushNotificationFromTemplate", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetFriendTags: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SetFriendTags", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetPlayerSecret: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SetPlayerSecret", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetPublisherData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SetPublisherData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetTitleData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SetTitleData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetTitleInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SetTitleInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SubtractCharacterVirtualCurrency: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SubtractCharacterVirtualCurrency", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SubtractUserVirtualCurrency: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/SubtractUserVirtualCurrency", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UnlinkNintendoServiceAccount: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UnlinkNintendoServiceAccount", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UnlinkNintendoSwitchDeviceId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UnlinkNintendoSwitchDeviceId", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UnlinkPSNAccount: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UnlinkPSNAccount", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UnlinkServerCustomId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UnlinkServerCustomId", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UnlinkSteamId: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UnlinkSteamId", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UnlinkXboxAccount: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UnlinkXboxAccount", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UnlockContainerInstance: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UnlockContainerInstance", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UnlockContainerItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UnlockContainerItem", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateAvatarUrl: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateAvatarUrl", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateBans: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateBans", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateCharacterData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateCharacterData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateCharacterInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateCharacterInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateCharacterReadOnlyData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateCharacterReadOnlyData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateCharacterStatistics: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateCharacterStatistics", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdatePlayerStatistics: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdatePlayerStatistics", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateSharedGroupData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateSharedGroupData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateUserData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateUserInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserInventoryItemCustomData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateUserInventoryItemCustomData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserPublisherData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateUserPublisherData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserPublisherInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateUserPublisherInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserPublisherReadOnlyData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserReadOnlyData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/UpdateUserReadOnlyData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    WriteCharacterEvent: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/WriteCharacterEvent", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    WritePlayerEvent: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/WritePlayerEvent", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    WriteTitleEvent: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Server/WriteTitleEvent", request, "X-SecretKey", callback, customData, extraHeaders);
    },

};

var PlayFabServerSDK = PlayFab.ServerApi;

