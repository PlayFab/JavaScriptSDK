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
        sdkVersion: "0.1.151026",
        apiVersion: "1.8.20151026",
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

PlayFab.AdminApi = {
    GetUserAccountInfo: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetUserAccountInfo", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    ResetUsers: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/ResetUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SendAccountRecoveryEmail: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/SendAccountRecoveryEmail", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserTitleDisplayName: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateUserTitleDisplayName", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    DeleteUsers: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/DeleteUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetDataReport: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetDataReport", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetUserData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetUserInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetUserPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserPublisherInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetUserPublisherInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserPublisherReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetUserPublisherReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetUserReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    ResetUserStatistics: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/ResetUserStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateUserData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateUserInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateUserPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserPublisherInternalData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateUserPublisherInternalData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserPublisherReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateUserPublisherReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateUserReadOnlyData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateUserReadOnlyData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    AddNews: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/AddNews", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    AddVirtualCurrencyTypes: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/AddVirtualCurrencyTypes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetCatalogItems: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetRandomResultTables: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetRandomResultTables", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetStoreItems: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetStoreItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetTitleData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetTitleData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    ListVirtualCurrencyTypes: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/ListVirtualCurrencyTypes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SetCatalogItems: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/SetCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SetStoreItems: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/SetStoreItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SetTitleData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/SetTitleData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SetupPushNotification: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/SetupPushNotification", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateCatalogItems: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateCatalogItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateRandomResultTables: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateRandomResultTables", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateStoreItems: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateStoreItems", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    AddUserVirtualCurrency: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/AddUserVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetUserInventory: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetUserInventory", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GrantItemsToUsers: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GrantItemsToUsers", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    RevokeInventoryItem: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/RevokeInventoryItem", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SubtractUserVirtualCurrency: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/SubtractUserVirtualCurrency", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetMatchmakerGameInfo: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetMatchmakerGameInfo", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetMatchmakerGameModes: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetMatchmakerGameModes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    ModifyMatchmakerGameModes: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/ModifyMatchmakerGameModes", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    AddServerBuild: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/AddServerBuild", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetServerBuildInfo: function (request, callback) {
        
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetServerBuildInfo", request, null, null, callback);
    },

    GetServerBuildUploadUrl: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetServerBuildUploadUrl", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    ListServerBuilds: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/ListServerBuilds", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    ModifyServerBuild: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/ModifyServerBuild", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    RemoveServerBuild: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/RemoveServerBuild", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SetPublisherData: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/SetPublisherData", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetCloudScriptRevision: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetCloudScriptRevision", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetCloudScriptVersions: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetCloudScriptVersions", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    SetPublishedRevision: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/SetPublishedRevision", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    UpdateCloudScript: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/UpdateCloudScript", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    DeleteContent: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/DeleteContent", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetContentList: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetContentList", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    GetContentUploadUrl: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/GetContentUploadUrl", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

    ResetCharacterStatistics: function (request, callback) {
        if (PlayFab.settings.developerSecretKey == null) throw "Must have PlayFab.settings.developerSecretKey set to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Admin/ResetCharacterStatistics", request, "X-SecretKey", PlayFab.settings.developerSecretKey, callback);
    },

};

var PlayFabAdminSDK = PlayFab.AdminApi;
