/// <reference path="../typings/PlayFab/PlayFabServerApi.d.ts" />

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

PlayFab.ServerApi = {
    ForgetAllCredentials: function () {
        PlayFab._internalSettings.sessionTicket = null;
        PlayFab._internalSettings.entityToken = null;
    },

    AddCharacterVirtualCurrency: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/AddCharacterVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AddFriend: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/AddFriend", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AddPlayerTag: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/AddPlayerTag", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AddSharedGroupMembers: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/AddSharedGroupMembers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AddUserVirtualCurrency: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/AddUserVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AuthenticateSessionTicket: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/AuthenticateSessionTicket", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    AwardSteamAchievement: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/AwardSteamAchievement", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    BanUsers: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/BanUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ConsumeItem: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/ConsumeItem", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    CreateSharedGroup: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/CreateSharedGroup", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeleteCharacterFromUser: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/DeleteCharacterFromUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeletePlayer: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/DeletePlayer", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeleteSharedGroup: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/DeleteSharedGroup", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    DeregisterGame: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/DeregisterGame", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    EvaluateRandomResultTable: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/EvaluateRandomResultTable", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ExecuteCloudScript: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/ExecuteCloudScript", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetAllSegments: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetAllSegments", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetAllUsersCharacters: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetAllUsersCharacters", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCatalogItems: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCharacterData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetCharacterData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCharacterInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetCharacterInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCharacterInventory: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetCharacterInventory", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCharacterLeaderboard: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetCharacterLeaderboard", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCharacterReadOnlyData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetCharacterReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetCharacterStatistics: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetCharacterStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetContentDownloadUrl: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetContentDownloadUrl", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetFriendLeaderboard: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetFriendLeaderboard", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetFriendsList: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetFriendsList", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetLeaderboard: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetLeaderboard", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetLeaderboardAroundCharacter: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetLeaderboardAroundCharacter", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetLeaderboardAroundUser: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetLeaderboardAroundUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetLeaderboardForUserCharacters: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetLeaderboardForUserCharacters", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerCombinedInfo: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayerCombinedInfo", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerProfile: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayerProfile", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerSegments: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayerSegments", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayersInSegment: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayersInSegment", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerStatistics: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayerStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerStatisticVersions: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayerStatisticVersions", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayerTags: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayerTags", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromFacebookIDs: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayFabIDsFromFacebookIDs", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromFacebookInstantGamesIds: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayFabIDsFromFacebookInstantGamesIds", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromNintendoSwitchDeviceIds: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayFabIDsFromNintendoSwitchDeviceIds", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromSteamIDs: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayFabIDsFromSteamIDs", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPlayFabIDsFromXboxLiveIDs: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPlayFabIDsFromXboxLiveIDs", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetPublisherData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetRandomResultTables: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetRandomResultTables", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetServerCustomIDsFromPlayFabIDs: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetServerCustomIDsFromPlayFabIDs", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetSharedGroupData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetSharedGroupData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetTime: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetTime", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetTitleData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetTitleData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetTitleInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetTitleInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetTitleNews: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetTitleNews", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserAccountInfo: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetUserAccountInfo", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserBans: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetUserBans", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetUserData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetUserInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserInventory: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetUserInventory", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserPublisherData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetUserPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserPublisherInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetUserPublisherInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserPublisherReadOnlyData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetUserPublisherReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GetUserReadOnlyData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GetUserReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GrantCharacterToUser: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GrantCharacterToUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GrantItemsToCharacter: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GrantItemsToCharacter", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GrantItemsToUser: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GrantItemsToUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    GrantItemsToUsers: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/GrantItemsToUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    LinkXboxAccount: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/LinkXboxAccount", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    LoginWithServerCustomId: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/LoginWithServerCustomId", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    LoginWithXbox: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/LoginWithXbox", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ModifyItemUses: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/ModifyItemUses", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    MoveItemToCharacterFromCharacter: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/MoveItemToCharacterFromCharacter", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    MoveItemToCharacterFromUser: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/MoveItemToCharacterFromUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    MoveItemToUserFromCharacter: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/MoveItemToUserFromCharacter", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    NotifyMatchmakerPlayerLeft: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/NotifyMatchmakerPlayerLeft", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RedeemCoupon: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RedeemCoupon", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RedeemMatchmakerTicket: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RedeemMatchmakerTicket", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RefreshGameServerInstanceHeartbeat: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RefreshGameServerInstanceHeartbeat", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RegisterGame: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RegisterGame", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RemoveFriend: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RemoveFriend", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RemovePlayerTag: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RemovePlayerTag", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RemoveSharedGroupMembers: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RemoveSharedGroupMembers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    ReportPlayer: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/ReportPlayer", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RevokeAllBansForUser: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RevokeAllBansForUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RevokeBans: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RevokeBans", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RevokeInventoryItem: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RevokeInventoryItem", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    RevokeInventoryItems: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/RevokeInventoryItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SendCustomAccountRecoveryEmail: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SendCustomAccountRecoveryEmail", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SendEmailFromTemplate: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SendEmailFromTemplate", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SendPushNotification: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SendPushNotification", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetFriendTags: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SetFriendTags", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetGameServerInstanceData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SetGameServerInstanceData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetGameServerInstanceState: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SetGameServerInstanceState", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetGameServerInstanceTags: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SetGameServerInstanceTags", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetPlayerSecret: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SetPlayerSecret", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetPublisherData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SetPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetTitleData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SetTitleData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SetTitleInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SetTitleInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SubtractCharacterVirtualCurrency: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SubtractCharacterVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    SubtractUserVirtualCurrency: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/SubtractUserVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UnlinkXboxAccount: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UnlinkXboxAccount", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UnlockContainerInstance: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UnlockContainerInstance", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UnlockContainerItem: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UnlockContainerItem", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateAvatarUrl: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateAvatarUrl", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateBans: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateBans", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateCharacterData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateCharacterData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateCharacterInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateCharacterInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateCharacterReadOnlyData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateCharacterReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateCharacterStatistics: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateCharacterStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdatePlayerStatistics: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdatePlayerStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateSharedGroupData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateSharedGroupData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateUserData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateUserInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserInventoryItemCustomData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateUserInventoryItemCustomData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserPublisherData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateUserPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserPublisherInternalData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateUserPublisherInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserPublisherReadOnlyData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    UpdateUserReadOnlyData: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/UpdateUserReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    WriteCharacterEvent: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/WriteCharacterEvent", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    WritePlayerEvent: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/WritePlayerEvent", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },

    WriteTitleEvent: function (request, callback, customData, extraHeaders) {
        if (!PlayFab.settings.developerSecretKey) throw PlayFab._internalSettings.errorSecretKey;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Server/WriteTitleEvent", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback, customData, extraHeaders);
    },
};

var PlayFabServerSDK = PlayFab.ServerApi;

