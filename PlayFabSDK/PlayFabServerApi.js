var PlayFab = typeof PlayFab != 'undefined' ? PlayFab : {};

if(!PlayFab.settings) {
    PlayFab.settings = {
        titleID: null,
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

        executeRequest: function (completeUrl, data, callback) {
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

            if (PlayFab._internalSettings.sessionTicket != null) {
                xhr.setRequestHeader("X-Authorization", PlayFab._internalSettings.sessionTicket);
            }

            xhr.setRequestHeader('X-PlayFabSDK', "JavaScriptSDK-" + PlayFab._internalSettings.sdkVersion + "-" + PlayFab._internalSettings.apiVersion);

            xhr.onloadend = function () {
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

                if (result.code == 200)
                    callback(result.data, null);
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

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/AuthenticateSessionTicket", request, callback);
    },

    GetPlayFabIDsFromFacebookIDs: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetPlayFabIDsFromFacebookIDs", request, callback);
    },

    GetUserAccountInfo: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserAccountInfo", request, callback);
    },

    SendPushNotification: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SendPushNotification", request, callback);
    },

    GetLeaderboard: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetLeaderboard", request, callback);
    },

    GetLeaderboardAroundUser: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetLeaderboardAroundUser", request, callback);
    },

    GetUserData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserData", request, callback);
    },

    GetUserInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserInternalData", request, callback);
    },

    GetUserPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserPublisherData", request, callback);
    },

    GetUserPublisherInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserPublisherInternalData", request, callback);
    },

    GetUserPublisherReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserPublisherReadOnlyData", request, callback);
    },

    GetUserReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserReadOnlyData", request, callback);
    },

    GetUserStatistics: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserStatistics", request, callback);
    },

    UpdateUserData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserData", request, callback);
    },

    UpdateUserInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserInternalData", request, callback);
    },

    UpdateUserPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserPublisherData", request, callback);
    },

    UpdateUserPublisherInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserPublisherInternalData", request, callback);
    },

    UpdateUserPublisherReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserPublisherReadOnlyData", request, callback);
    },

    UpdateUserReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserReadOnlyData", request, callback);
    },

    UpdateUserStatistics: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserStatistics", request, callback);
    },

    GetCatalogItems: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCatalogItems", request, callback);
    },

    GetTitleData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetTitleData", request, callback);
    },

    GetTitleInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetTitleInternalData", request, callback);
    },

    GetTitleNews: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetTitleNews", request, callback);
    },

    SetTitleData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SetTitleData", request, callback);
    },

    SetTitleInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SetTitleInternalData", request, callback);
    },

    AddCharacterVirtualCurrency: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/AddCharacterVirtualCurrency", request, callback);
    },

    AddUserVirtualCurrency: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/AddUserVirtualCurrency", request, callback);
    },

    GetCharacterInventory: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterInventory", request, callback);
    },

    GetUserInventory: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetUserInventory", request, callback);
    },

    GrantItemsToCharacter: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GrantItemsToCharacter", request, callback);
    },

    GrantItemsToUser: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GrantItemsToUser", request, callback);
    },

    GrantItemsToUsers: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GrantItemsToUsers", request, callback);
    },

    ModifyItemUses: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/ModifyItemUses", request, callback);
    },

    MoveItemToCharacterFromCharacter: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/MoveItemToCharacterFromCharacter", request, callback);
    },

    MoveItemToCharacterFromUser: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/MoveItemToCharacterFromUser", request, callback);
    },

    MoveItemToUserFromCharacter: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/MoveItemToUserFromCharacter", request, callback);
    },

    ReportPlayer: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/ReportPlayer", request, callback);
    },

    SubtractCharacterVirtualCurrency: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SubtractCharacterVirtualCurrency", request, callback);
    },

    SubtractUserVirtualCurrency: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SubtractUserVirtualCurrency", request, callback);
    },

    UpdateUserInventoryItemCustomData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateUserInventoryItemCustomData", request, callback);
    },

    NotifyMatchmakerPlayerLeft: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/NotifyMatchmakerPlayerLeft", request, callback);
    },

    RedeemMatchmakerTicket: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/RedeemMatchmakerTicket", request, callback);
    },

    AwardSteamAchievement: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/AwardSteamAchievement", request, callback);
    },

    LogEvent: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/LogEvent", request, callback);
    },

    AddSharedGroupMembers: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/AddSharedGroupMembers", request, callback);
    },

    CreateSharedGroup: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/CreateSharedGroup", request, callback);
    },

    DeleteSharedGroup: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/DeleteSharedGroup", request, callback);
    },

    GetPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetPublisherData", request, callback);
    },

    GetSharedGroupData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetSharedGroupData", request, callback);
    },

    RemoveSharedGroupMembers: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/RemoveSharedGroupMembers", request, callback);
    },

    SetPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/SetPublisherData", request, callback);
    },

    UpdateSharedGroupData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateSharedGroupData", request, callback);
    },

    GetContentDownloadUrl: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetContentDownloadUrl", request, callback);
    },

    DeleteCharacterFromUser: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/DeleteCharacterFromUser", request, callback);
    },

    GetAllUsersCharacters: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetAllUsersCharacters", request, callback);
    },

    GetCharacterLeaderboard: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterLeaderboard", request, callback);
    },

    GetCharacterStatistics: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterStatistics", request, callback);
    },

    GetLeaderboardAroundCharacter: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetLeaderboardAroundCharacter", request, callback);
    },

    GetLeaderboardForUserCharacters: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetLeaderboardForUserCharacters", request, callback);
    },

    GrantCharacterToUser: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GrantCharacterToUser", request, callback);
    },

    UpdateCharacterStatistics: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateCharacterStatistics", request, callback);
    },

    GetCharacterData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterData", request, callback);
    },

    GetCharacterInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterInternalData", request, callback);
    },

    GetCharacterReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/GetCharacterReadOnlyData", request, callback);
    },

    UpdateCharacterData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateCharacterData", request, callback);
    },

    UpdateCharacterInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateCharacterInternalData", request, callback);
    },

    UpdateCharacterReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Server/UpdateCharacterReadOnlyData", request, callback);
    },

};

var PlayFabServerSDK = PlayFab.ServerApi;
