/// <reference path="../typings/PlayFab/PlayFabAdminApi.d.ts" />

var PlayFab = typeof PlayFab != "undefined" ? PlayFab : {};

if(!PlayFab.settings) {
    PlayFab.settings = {
        titleId: null, // You must set this value for PlayFabSdk to work properly (Found in the Game Manager for your title, at the PlayFab Website)
        developerSecretKey: null, // For security reasons you must never expose this value to the client or players - You must set this value for Server-APIs to work properly (Found in the Game Manager for your title, at the PlayFab Website)
        advertisingIdType: null,
        advertisingIdValue: null,
        GlobalHeaderInjection: null,

        // disableAdvertising is provided for completeness, but changing it is not suggested
        // Disabling this may prevent your advertising-related PlayFab marketplace partners from working correctly
        disableAdvertising: false,
        AD_TYPE_IDFA: "Idfa",
        AD_TYPE_ANDROID_ID: "Adid"
    }
}

if(!PlayFab._internalSettings) {
    PlayFab._internalSettings = {
        entityToken: null,
        sdkVersion: "1.35.181114",
        requestGetParams: {
            sdk: "JavaScriptSDK-1.35.181114"
        },
        sessionTicket: null,
        verticalName: null, // The name of a customer vertical. This is only for customers running a private cluster. Generally you shouldn't touch this
        productionServerUrl: ".playfabapi.com",
        errorTitleId: "Must be have PlayFab.settings.titleId set to call this method",
        errorLoggedIn: "Must be logged in to call this method",
        errorEntityToken: "You must successfully call GetEntityToken before calling this",
        errorSecretKey: "Must have PlayFab.settings.developerSecretKey set to call this method",

        GetServerUrl: function () {
            if (!(PlayFab._internalSettings.productionServerUrl.substring(0, 4) === "http")) {
                if (PlayFab._internalSettings.verticalName) {
                    return "https://" + PlayFab._internalSettings.verticalName + PlayFab._internalSettings.productionServerUrl;
                } else {
                    return "https://" + PlayFab.settings.titleId + PlayFab._internalSettings.productionServerUrl;
                }
            } else {
                return PlayFab._internalSettings.productionServerUrl;
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
            if (callback != null && typeof (callback) != "function")
                throw "Callback must be null of a function";

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

                var result;
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

                if (result.code === 200)
                    callback(result, null);
                else
                    callback(null, result);
            }

            xhr.onerror = function () {
                if (callback == null)
                    return;

                var result;
                try {
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

                callback(null, result);
            }

            xhr.send(requestBody);
        }
    }
}

PlayFab.buildIdentifier = "jbuild_javascriptsdk__sdk-slave2016-3_0";
PlayFab.sdkVersion = "1.35.181114";
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
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/AbortTaskInstance", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AddNews: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/AddNews", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AddPlayerTag: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/AddPlayerTag", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AddServerBuild: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/AddServerBuild", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AddUserVirtualCurrency: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/AddUserVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AddVirtualCurrencyTypes: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/AddVirtualCurrencyTypes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    BanUsers: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/BanUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    CheckLimitedEditionItemAvailability: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/CheckLimitedEditionItemAvailability", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    CreateActionsOnPlayersInSegmentTask: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/CreateActionsOnPlayersInSegmentTask", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    CreateCloudScriptTask: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/CreateCloudScriptTask", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    CreatePlayerSharedSecret: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/CreatePlayerSharedSecret", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    CreatePlayerStatisticDefinition: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/CreatePlayerStatisticDefinition", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeleteContent: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/DeleteContent", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeleteMasterPlayerAccount: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/DeleteMasterPlayerAccount", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeletePlayer: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/DeletePlayer", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeletePlayerSharedSecret: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/DeletePlayerSharedSecret", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeleteStore: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/DeleteStore", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeleteTask: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/DeleteTask", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeleteTitle: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/DeleteTitle", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ExportMasterPlayerData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/ExportMasterPlayerData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetActionsOnPlayersInSegmentTaskInstance: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetActionsOnPlayersInSegmentTaskInstance", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetAllSegments: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetAllSegments", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCatalogItems: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCloudScriptRevision: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetCloudScriptRevision", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCloudScriptTaskInstance: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetCloudScriptTaskInstance", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCloudScriptVersions: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetCloudScriptVersions", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetContentList: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetContentList", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetContentUploadUrl: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetContentUploadUrl", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetDataReport: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetDataReport", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetMatchmakerGameInfo: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetMatchmakerGameInfo", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetMatchmakerGameModes: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetMatchmakerGameModes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayedTitleList: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPlayedTitleList", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerIdFromAuthToken: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPlayerIdFromAuthToken", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerProfile: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPlayerProfile", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerSegments: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPlayerSegments", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerSharedSecrets: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPlayerSharedSecrets", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayersInSegment: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPlayersInSegment", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerStatisticDefinitions: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPlayerStatisticDefinitions", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerStatisticVersions: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPlayerStatisticVersions", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerTags: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPlayerTags", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPolicy: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPolicy", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPublisherData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetRandomResultTables: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetRandomResultTables", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetServerBuildInfo: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetServerBuildInfo", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetServerBuildUploadUrl: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetServerBuildUploadUrl", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetStoreItems: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetStoreItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetTaskInstances: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetTaskInstances", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetTasks: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetTasks", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetTitleData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetTitleData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetTitleInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetTitleInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserAccountInfo: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetUserAccountInfo", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserBans: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetUserBans", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetUserData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetUserInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserInventory: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetUserInventory", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserPublisherData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetUserPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserPublisherInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetUserPublisherInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserPublisherReadOnlyData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetUserPublisherReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserReadOnlyData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GetUserReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GrantItemsToUsers: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/GrantItemsToUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    IncrementLimitedEditionItemAvailability: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/IncrementLimitedEditionItemAvailability", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    IncrementPlayerStatisticVersion: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/IncrementPlayerStatisticVersion", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ListServerBuilds: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/ListServerBuilds", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ListVirtualCurrencyTypes: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/ListVirtualCurrencyTypes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ModifyMatchmakerGameModes: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/ModifyMatchmakerGameModes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ModifyServerBuild: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/ModifyServerBuild", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RefundPurchase: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/RefundPurchase", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RemovePlayerTag: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/RemovePlayerTag", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RemoveServerBuild: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/RemoveServerBuild", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RemoveVirtualCurrencyTypes: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/RemoveVirtualCurrencyTypes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ResetCharacterStatistics: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/ResetCharacterStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ResetPassword: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/ResetPassword", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ResetUserStatistics: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/ResetUserStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ResolvePurchaseDispute: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/ResolvePurchaseDispute", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RevokeAllBansForUser: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/RevokeAllBansForUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RevokeBans: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/RevokeBans", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RevokeInventoryItem: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/RevokeInventoryItem", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RevokeInventoryItems: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/RevokeInventoryItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RunTask: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/RunTask", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SendAccountRecoveryEmail: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/SendAccountRecoveryEmail", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetCatalogItems: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/SetCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetPlayerSecret: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/SetPlayerSecret", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetPublishedRevision: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/SetPublishedRevision", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetPublisherData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/SetPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetStoreItems: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/SetStoreItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetTitleData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/SetTitleData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetTitleInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/SetTitleInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetupPushNotification: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/SetupPushNotification", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SubtractUserVirtualCurrency: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/SubtractUserVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateBans: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateBans", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateCatalogItems: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateCloudScript: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateCloudScript", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdatePlayerSharedSecret: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdatePlayerSharedSecret", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdatePlayerStatisticDefinition: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdatePlayerStatisticDefinition", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdatePolicy: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdatePolicy", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateRandomResultTables: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateRandomResultTables", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateStoreItems: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateStoreItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateTask: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateTask", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateUserData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateUserInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserPublisherData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateUserPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserPublisherInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateUserPublisherInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserPublisherReadOnlyData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserReadOnlyData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateUserReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserTitleDisplayName: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Admin/UpdateUserTitleDisplayName", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },
};

var PlayFabAdminSDK = PlayFab.AdminApi;

