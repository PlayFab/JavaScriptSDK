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
        sdkVersion: "0.2.151109",
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

            xhr.setRequestHeader('X-PlayFabSDK', "JavaScriptSDK-" + PlayFab._internalSettings.sdkVersion);

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

PlayFab.ClientApi = {
    GetPhotonAuthenticationToken: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPhotonAuthenticationToken", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    LoginWithAndroidDeviceID: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.data.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.data.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithAndroidDeviceID", request, null, null, overloadCallback);
    },

    LoginWithCustomID: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.data.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.data.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithCustomID", request, null, null, overloadCallback);
    },

    LoginWithEmailAddress: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.data.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.data.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithEmailAddress", request, null, null, overloadCallback);
    },

    LoginWithFacebook: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.data.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.data.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithFacebook", request, null, null, overloadCallback);
    },

    LoginWithGoogleAccount: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.data.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.data.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithGoogleAccount", request, null, null, overloadCallback);
    },

    LoginWithIOSDeviceID: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.data.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.data.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithIOSDeviceID", request, null, null, overloadCallback);
    },

    LoginWithKongregate: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.data.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.data.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithKongregate", request, null, null, overloadCallback);
    },

    LoginWithPlayFab: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.data.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.data.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithPlayFab", request, null, null, overloadCallback);
    },

    LoginWithSteam: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.data.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.data.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithSteam", request, null, null, overloadCallback);
    },

    RegisterPlayFabUser: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.data.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.data.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RegisterPlayFabUser", request, null, null, overloadCallback);
    },

    AddUsernamePassword: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AddUsernamePassword", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetAccountInfo: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetAccountInfo", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetPlayFabIDsFromFacebookIDs: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPlayFabIDsFromFacebookIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetPlayFabIDsFromGameCenterIDs: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPlayFabIDsFromGameCenterIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetPlayFabIDsFromGoogleIDs: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPlayFabIDsFromGoogleIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetPlayFabIDsFromSteamIDs: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPlayFabIDsFromSteamIDs", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetUserCombinedInfo: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserCombinedInfo", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    LinkAndroidDeviceID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkAndroidDeviceID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    LinkCustomID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkCustomID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    LinkFacebookAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkFacebookAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    LinkGameCenterAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkGameCenterAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    LinkGoogleAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkGoogleAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    LinkIOSDeviceID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkIOSDeviceID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    LinkKongregate: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkKongregate", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    LinkSteamAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkSteamAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    SendAccountRecoveryEmail: function (request, callback) {
        
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/SendAccountRecoveryEmail", request, null, null, callback);
    },

    UnlinkAndroidDeviceID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkAndroidDeviceID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UnlinkCustomID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkCustomID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UnlinkFacebookAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkFacebookAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UnlinkGameCenterAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkGameCenterAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UnlinkGoogleAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkGoogleAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UnlinkIOSDeviceID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkIOSDeviceID", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UnlinkKongregate: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkKongregate", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UnlinkSteamAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkSteamAccount", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UpdateUserTitleDisplayName: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateUserTitleDisplayName", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetFriendLeaderboard: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetFriendLeaderboard", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetLeaderboard: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetLeaderboard", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetLeaderboardAroundCurrentUser: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetLeaderboardAroundCurrentUser", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetUserData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetUserPublisherData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserPublisherData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetUserPublisherReadOnlyData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserPublisherReadOnlyData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetUserReadOnlyData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserReadOnlyData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetUserStatistics: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserStatistics", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UpdateUserData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateUserData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UpdateUserPublisherData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateUserPublisherData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UpdateUserStatistics: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateUserStatistics", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetCatalogItems: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCatalogItems", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetStoreItems: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetStoreItems", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetTitleData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetTitleData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetTitleNews: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetTitleNews", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    AddUserVirtualCurrency: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AddUserVirtualCurrency", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    ConfirmPurchase: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/ConfirmPurchase", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    ConsumeItem: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/ConsumeItem", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetCharacterInventory: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCharacterInventory", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetPurchase: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPurchase", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetUserInventory: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserInventory", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    PayForPurchase: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/PayForPurchase", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    PurchaseItem: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/PurchaseItem", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    RedeemCoupon: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RedeemCoupon", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    ReportPlayer: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/ReportPlayer", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    StartPurchase: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/StartPurchase", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    SubtractUserVirtualCurrency: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/SubtractUserVirtualCurrency", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UnlockContainerItem: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlockContainerItem", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    AddFriend: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AddFriend", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetFriendsList: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetFriendsList", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    RemoveFriend: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RemoveFriend", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    SetFriendTags: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/SetFriendTags", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    RegisterForIOSPushNotification: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RegisterForIOSPushNotification", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    RestoreIOSPurchases: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RestoreIOSPurchases", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    ValidateIOSReceipt: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/ValidateIOSReceipt", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetCurrentGames: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCurrentGames", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetGameServerRegions: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetGameServerRegions", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    Matchmake: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/Matchmake", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    StartGame: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/StartGame", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    AndroidDevicePushNotificationRegistration: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AndroidDevicePushNotificationRegistration", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    ValidateGooglePlayPurchase: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/ValidateGooglePlayPurchase", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    LogEvent: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LogEvent", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    AddSharedGroupMembers: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AddSharedGroupMembers", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    CreateSharedGroup: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/CreateSharedGroup", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetPublisherData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPublisherData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetSharedGroupData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetSharedGroupData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    RemoveSharedGroupMembers: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RemoveSharedGroupMembers", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UpdateSharedGroupData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateSharedGroupData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetCloudScriptUrl: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        var overloadCallback = function (result, error) {
            PlayFab._internalSettings.logicServerUrl = result.data.Url;
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCloudScriptUrl", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, overloadCallback);
    },

    RunCloudScript: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getLogicServerUrl() + "/Client/RunCloudScript", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetContentDownloadUrl: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetContentDownloadUrl", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetAllUsersCharacters: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetAllUsersCharacters", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetCharacterLeaderboard: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCharacterLeaderboard", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetLeaderboardAroundCharacter: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetLeaderboardAroundCharacter", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetLeaderboardForUserCharacters: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetLeaderboardForUserCharacters", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GrantCharacterToUser: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GrantCharacterToUser", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetCharacterData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCharacterData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetCharacterReadOnlyData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCharacterReadOnlyData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    UpdateCharacterData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateCharacterData", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    AcceptTrade: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AcceptTrade", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    CancelTrade: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/CancelTrade", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetPlayerTrades: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPlayerTrades", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    GetTradeStatus: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetTradeStatus", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

    OpenTrade: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/OpenTrade", request, "X-Authorization", PlayFab._internalSettings.sessionTicket, callback);
    },

};

var PlayFabClientSDK = PlayFab.ClientApi;
