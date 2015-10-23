var PlayFab = typeof PlayFab != 'undefined' ? PlayFab : {};

if(!PlayFab.settings) {
    PlayFab.settings = {
        titleId: null,
        developerSecretKey: null // For security reasons you must never expose this value to the client or players
    }
}

if(!PlayFab._internalSettings) {
    PlayFab._internalSettings = {
        sessionTicket: null,
        sdkVersion: "0.0.151019",
        apiVersion: "1.7.20151019",
        productionServerUrl: ".playfabapi.com",
        logicServerUrl: null,

        getServerUrl: function () {
            return "https://" + PlayFab.settings.titleId + PlayFab._internalSettings.productionServerUrl;
        },

        getLogicServerUrl: function () {
            return PlayFab._internalSettings.logicServerUrl;
        },

        executeRequest: function (completeUrl, data, authkey, authValue, callback) {
            if (callback != null && typeof (callback) != "function") {
                throw "Callback must be null of a function";
            }

            if (data == null) {
                data = {};
            }

            var startTime = new Date();

            var requestBody = JSON.stringify(data);

            var xhr = new XMLHttpRequest();completeUrl
            // window.console.log("URL: " + completeUrl);
            xhr.open("POST", completeUrl, true);

            xhr.setRequestHeader('Content-Type', 'application/json');

            if (authkey != null)
                xhr.setRequestHeader(authkey, authValue);

            xhr.setRequestHeader('X-PlayFabSDK', "JavaScriptSDK-" + PlayFab._internalSettings.sdkVersion + "-" + PlayFab._internalSettings.apiVersion);

            xhr.onloadend = function () {
                if (callback == null)
                    return;

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

                if (result.code == 200)
                    callback(result, null);
                else
                    callback(null, result);
            }

            xhr.onerror = function () {
                if (callback == null)
                    return;

                var result = null;
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
                callback(null, result);
            }

            xhr.send(requestBody);
        }
    }
}

PlayFab.ServerApi = {
    AuthenticateSessionTicket: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/AuthenticateSessionTicket", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetPlayFabIDsFromFacebookIDs: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetPlayFabIDsFromFacebookIDs", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserAccountInfo: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserAccountInfo", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SendPushNotification: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SendPushNotification", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetLeaderboard: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetLeaderboard", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetLeaderboardAroundUser: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetLeaderboardAroundUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserPublisherInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserPublisherInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserPublisherReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserPublisherReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserStatistics: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserPublisherInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserPublisherInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserPublisherReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserStatistics: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetCatalogItems: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetTitleData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetTitleData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetTitleInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetTitleInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetTitleNews: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetTitleNews", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SetTitleData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SetTitleData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SetTitleInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SetTitleInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    AddCharacterVirtualCurrency: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/AddCharacterVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    AddUserVirtualCurrency: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/AddUserVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetCharacterInventory: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterInventory", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserInventory: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserInventory", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GrantItemsToCharacter: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GrantItemsToCharacter", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GrantItemsToUser: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GrantItemsToUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GrantItemsToUsers: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GrantItemsToUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    ModifyItemUses: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/ModifyItemUses", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    MoveItemToCharacterFromCharacter: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/MoveItemToCharacterFromCharacter", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    MoveItemToCharacterFromUser: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/MoveItemToCharacterFromUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    MoveItemToUserFromCharacter: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/MoveItemToUserFromCharacter", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    ReportPlayer: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/ReportPlayer", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SubtractCharacterVirtualCurrency: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SubtractCharacterVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SubtractUserVirtualCurrency: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SubtractUserVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserInventoryItemCustomData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserInventoryItemCustomData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    NotifyMatchmakerPlayerLeft: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/NotifyMatchmakerPlayerLeft", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    RedeemMatchmakerTicket: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/RedeemMatchmakerTicket", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    AwardSteamAchievement: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/AwardSteamAchievement", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    LogEvent: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/LogEvent", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    AddSharedGroupMembers: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/AddSharedGroupMembers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    CreateSharedGroup: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/CreateSharedGroup", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    DeleteSharedGroup: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/DeleteSharedGroup", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetSharedGroupData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetSharedGroupData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    RemoveSharedGroupMembers: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/RemoveSharedGroupMembers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SetPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SetPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateSharedGroupData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateSharedGroupData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetContentDownloadUrl: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetContentDownloadUrl", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    DeleteCharacterFromUser: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/DeleteCharacterFromUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetAllUsersCharacters: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetAllUsersCharacters", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetCharacterLeaderboard: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterLeaderboard", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetCharacterStatistics: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetLeaderboardAroundCharacter: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetLeaderboardAroundCharacter", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetLeaderboardForUserCharacters: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetLeaderboardForUserCharacters", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GrantCharacterToUser: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GrantCharacterToUser", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateCharacterStatistics: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateCharacterStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetCharacterData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetCharacterInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetCharacterReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateCharacterData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateCharacterData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateCharacterInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateCharacterInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateCharacterReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateCharacterReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

};

var PlayFabServerSDK = PlayFab.ServerApi;
