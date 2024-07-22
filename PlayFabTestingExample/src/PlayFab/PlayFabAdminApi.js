/// <reference path="../typings/PlayFab/PlayFabAdminApi.d.ts" />

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

PlayFab.AdminApi = {
    ForgetAllCredentials: function () {
        PlayFab._internalSettings.sessionTicket = null;
        PlayFab._internalSettings.entityToken = null;
    },

    AbortTaskInstance: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/AbortTaskInstance", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AddLocalizedNews: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/AddLocalizedNews", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AddNews: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/AddNews", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AddPlayerTag: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/AddPlayerTag", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AddUserVirtualCurrency: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/AddUserVirtualCurrency", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    AddVirtualCurrencyTypes: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/AddVirtualCurrencyTypes", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    BanUsers: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/BanUsers", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    CheckLimitedEditionItemAvailability: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/CheckLimitedEditionItemAvailability", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    CreateActionsOnPlayersInSegmentTask: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/CreateActionsOnPlayersInSegmentTask", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    CreateCloudScriptTask: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/CreateCloudScriptTask", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    CreateInsightsScheduledScalingTask: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/CreateInsightsScheduledScalingTask", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    CreateOpenIdConnection: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/CreateOpenIdConnection", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    CreatePlayerSharedSecret: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/CreatePlayerSharedSecret", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    CreatePlayerStatisticDefinition: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/CreatePlayerStatisticDefinition", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    CreateSegment: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/CreateSegment", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteContent: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeleteContent", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteMasterPlayerAccount: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeleteMasterPlayerAccount", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteMasterPlayerEventData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeleteMasterPlayerEventData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteMembershipSubscription: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeleteMembershipSubscription", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteOpenIdConnection: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeleteOpenIdConnection", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeletePlayer: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeletePlayer", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeletePlayerSharedSecret: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeletePlayerSharedSecret", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteSegment: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeleteSegment", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteStore: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeleteStore", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteTask: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeleteTask", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteTitle: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeleteTitle", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    DeleteTitleDataOverride: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/DeleteTitleDataOverride", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ExportMasterPlayerData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/ExportMasterPlayerData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ExportPlayersInSegment: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/ExportPlayersInSegment", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetActionsOnPlayersInSegmentTaskInstance: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetActionsOnPlayersInSegmentTaskInstance", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetAllSegments: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetAllSegments", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCatalogItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetCatalogItems", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCloudScriptRevision: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetCloudScriptRevision", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCloudScriptTaskInstance: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetCloudScriptTaskInstance", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetCloudScriptVersions: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetCloudScriptVersions", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetContentList: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetContentList", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetContentUploadUrl: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetContentUploadUrl", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetDataReport: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetDataReport", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayedTitleList: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPlayedTitleList", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerIdFromAuthToken: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPlayerIdFromAuthToken", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerProfile: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPlayerProfile", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerSegments: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPlayerSegments", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerSharedSecrets: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPlayerSharedSecrets", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayersInSegment: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPlayersInSegment", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerStatisticDefinitions: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPlayerStatisticDefinitions", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerStatisticVersions: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPlayerStatisticVersions", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPlayerTags: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPlayerTags", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPolicy: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPolicy", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetPublisherData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetPublisherData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetRandomResultTables: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetRandomResultTables", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetSegmentExport: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetSegmentExport", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetSegments: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetSegments", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetStoreItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetStoreItems", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetTaskInstances: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetTaskInstances", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetTasks: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetTasks", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetTitleData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetTitleData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetTitleInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetTitleInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserAccountInfo: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetUserAccountInfo", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserBans: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetUserBans", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetUserData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetUserInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserInventory: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetUserInventory", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserPublisherData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetUserPublisherData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserPublisherInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetUserPublisherInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserPublisherReadOnlyData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetUserPublisherReadOnlyData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GetUserReadOnlyData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GetUserReadOnlyData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    GrantItemsToUsers: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/GrantItemsToUsers", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    IncrementLimitedEditionItemAvailability: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/IncrementLimitedEditionItemAvailability", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    IncrementPlayerStatisticVersion: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/IncrementPlayerStatisticVersion", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ListOpenIdConnection: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/ListOpenIdConnection", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ListVirtualCurrencyTypes: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/ListVirtualCurrencyTypes", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RefundPurchase: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/RefundPurchase", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RemovePlayerTag: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/RemovePlayerTag", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RemoveVirtualCurrencyTypes: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/RemoveVirtualCurrencyTypes", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ResetCharacterStatistics: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/ResetCharacterStatistics", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ResetPassword: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/ResetPassword", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ResetUserStatistics: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/ResetUserStatistics", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    ResolvePurchaseDispute: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/ResolvePurchaseDispute", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RevokeAllBansForUser: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/RevokeAllBansForUser", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RevokeBans: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/RevokeBans", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RevokeInventoryItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/RevokeInventoryItem", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RevokeInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/RevokeInventoryItems", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    RunTask: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/RunTask", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SendAccountRecoveryEmail: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SendAccountRecoveryEmail", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetCatalogItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SetCatalogItems", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetMembershipOverride: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SetMembershipOverride", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetPlayerSecret: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SetPlayerSecret", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetPublishedRevision: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SetPublishedRevision", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetPublisherData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SetPublisherData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetStoreItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SetStoreItems", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetTitleData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SetTitleData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetTitleDataAndOverrides: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SetTitleDataAndOverrides", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetTitleInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SetTitleInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SetupPushNotification: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SetupPushNotification", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    SubtractUserVirtualCurrency: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/SubtractUserVirtualCurrency", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateBans: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateBans", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateCatalogItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateCatalogItems", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateCloudScript: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateCloudScript", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateOpenIdConnection: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateOpenIdConnection", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdatePlayerSharedSecret: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdatePlayerSharedSecret", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdatePlayerStatisticDefinition: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdatePlayerStatisticDefinition", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdatePolicy: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdatePolicy", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateRandomResultTables: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateRandomResultTables", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateSegment: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateSegment", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateStoreItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateStoreItems", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateTask: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateTask", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateUserData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateUserInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserPublisherData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateUserPublisherData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserPublisherInternalData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateUserPublisherInternalData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserPublisherReadOnlyData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserReadOnlyData: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateUserReadOnlyData", request, "X-SecretKey", callback, customData, extraHeaders);
    },

    UpdateUserTitleDisplayName: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Admin/UpdateUserTitleDisplayName", request, "X-SecretKey", callback, customData, extraHeaders);
    },

};

var PlayFabAdminSDK = PlayFab.AdminApi;

