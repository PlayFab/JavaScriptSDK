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

PlayFab.ClientApi = {
    GetPhotonAuthenticationToken: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPhotonAuthenticationToken", request, callback);
    },

    LoginWithAndroidDeviceID: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithAndroidDeviceID", request, overloadCallback);
    },

    LoginWithCustomID: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithCustomID", request, overloadCallback);
    },

    LoginWithEmailAddress: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithEmailAddress", request, overloadCallback);
    },

    LoginWithFacebook: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithFacebook", request, overloadCallback);
    },

    LoginWithGoogleAccount: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithGoogleAccount", request, overloadCallback);
    },

    LoginWithIOSDeviceID: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithIOSDeviceID", request, overloadCallback);
    },

    LoginWithKongregate: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithKongregate", request, overloadCallback);
    },

    LoginWithPlayFab: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithPlayFab", request, overloadCallback);
    },

    LoginWithSteam: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LoginWithSteam", request, overloadCallback);
    },

    RegisterPlayFabUser: function (request, callback) {
        request.TitleId = PlayFab.settings.titleId != null ? PlayFab.settings.titleId : request.TitleId; if (request.TitleId == null) throw "Must be have PlayFab.settings.titleId set to call this method";

        var overloadCallback = function (result, error) {
            if (result != null && result.SessionTicket != null) { PlayFab._internalSettings.sessionTicket = result.SessionTicket; }
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RegisterPlayFabUser", request, overloadCallback);
    },

    AddUsernamePassword: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AddUsernamePassword", request, callback);
    },

    GetAccountInfo: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetAccountInfo", request, callback);
    },

    GetPlayFabIDsFromFacebookIDs: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPlayFabIDsFromFacebookIDs", request, callback);
    },

    GetPlayFabIDsFromGameCenterIDs: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPlayFabIDsFromGameCenterIDs", request, callback);
    },

    GetPlayFabIDsFromGoogleIDs: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPlayFabIDsFromGoogleIDs", request, callback);
    },

    GetPlayFabIDsFromSteamIDs: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPlayFabIDsFromSteamIDs", request, callback);
    },

    GetUserCombinedInfo: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserCombinedInfo", request, callback);
    },

    LinkAndroidDeviceID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkAndroidDeviceID", request, callback);
    },

    LinkCustomID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkCustomID", request, callback);
    },

    LinkFacebookAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkFacebookAccount", request, callback);
    },

    LinkGameCenterAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkGameCenterAccount", request, callback);
    },

    LinkGoogleAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkGoogleAccount", request, callback);
    },

    LinkIOSDeviceID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkIOSDeviceID", request, callback);
    },

    LinkKongregate: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkKongregate", request, callback);
    },

    LinkSteamAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LinkSteamAccount", request, callback);
    },

    SendAccountRecoveryEmail: function (request, callback) {
        
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/SendAccountRecoveryEmail", request, callback);
    },

    UnlinkAndroidDeviceID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkAndroidDeviceID", request, callback);
    },

    UnlinkCustomID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkCustomID", request, callback);
    },

    UnlinkFacebookAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkFacebookAccount", request, callback);
    },

    UnlinkGameCenterAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkGameCenterAccount", request, callback);
    },

    UnlinkGoogleAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkGoogleAccount", request, callback);
    },

    UnlinkIOSDeviceID: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkIOSDeviceID", request, callback);
    },

    UnlinkKongregate: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkKongregate", request, callback);
    },

    UnlinkSteamAccount: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlinkSteamAccount", request, callback);
    },

    UpdateUserTitleDisplayName: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateUserTitleDisplayName", request, callback);
    },

    GetFriendLeaderboard: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetFriendLeaderboard", request, callback);
    },

    GetLeaderboard: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetLeaderboard", request, callback);
    },

    GetLeaderboardAroundCurrentUser: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetLeaderboardAroundCurrentUser", request, callback);
    },

    GetUserData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserData", request, callback);
    },

    GetUserPublisherData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserPublisherData", request, callback);
    },

    GetUserPublisherReadOnlyData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserPublisherReadOnlyData", request, callback);
    },

    GetUserReadOnlyData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserReadOnlyData", request, callback);
    },

    GetUserStatistics: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserStatistics", request, callback);
    },

    UpdateUserData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateUserData", request, callback);
    },

    UpdateUserPublisherData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateUserPublisherData", request, callback);
    },

    UpdateUserStatistics: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateUserStatistics", request, callback);
    },

    GetCatalogItems: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCatalogItems", request, callback);
    },

    GetStoreItems: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetStoreItems", request, callback);
    },

    GetTitleData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetTitleData", request, callback);
    },

    GetTitleNews: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetTitleNews", request, callback);
    },

    AddUserVirtualCurrency: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AddUserVirtualCurrency", request, callback);
    },

    ConfirmPurchase: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/ConfirmPurchase", request, callback);
    },

    ConsumeItem: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/ConsumeItem", request, callback);
    },

    GetCharacterInventory: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCharacterInventory", request, callback);
    },

    GetPurchase: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPurchase", request, callback);
    },

    GetUserInventory: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetUserInventory", request, callback);
    },

    PayForPurchase: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/PayForPurchase", request, callback);
    },

    PurchaseItem: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/PurchaseItem", request, callback);
    },

    RedeemCoupon: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RedeemCoupon", request, callback);
    },

    ReportPlayer: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/ReportPlayer", request, callback);
    },

    StartPurchase: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/StartPurchase", request, callback);
    },

    SubtractUserVirtualCurrency: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/SubtractUserVirtualCurrency", request, callback);
    },

    UnlockContainerItem: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UnlockContainerItem", request, callback);
    },

    AddFriend: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AddFriend", request, callback);
    },

    GetFriendsList: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetFriendsList", request, callback);
    },

    RemoveFriend: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RemoveFriend", request, callback);
    },

    SetFriendTags: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/SetFriendTags", request, callback);
    },

    RegisterForIOSPushNotification: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RegisterForIOSPushNotification", request, callback);
    },

    RestoreIOSPurchases: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RestoreIOSPurchases", request, callback);
    },

    ValidateIOSReceipt: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/ValidateIOSReceipt", request, callback);
    },

    GetCurrentGames: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCurrentGames", request, callback);
    },

    GetGameServerRegions: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetGameServerRegions", request, callback);
    },

    Matchmake: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/Matchmake", request, callback);
    },

    StartGame: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/StartGame", request, callback);
    },

    AndroidDevicePushNotificationRegistration: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AndroidDevicePushNotificationRegistration", request, callback);
    },

    ValidateGooglePlayPurchase: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/ValidateGooglePlayPurchase", request, callback);
    },

    LogEvent: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/LogEvent", request, callback);
    },

    AddSharedGroupMembers: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AddSharedGroupMembers", request, callback);
    },

    CreateSharedGroup: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/CreateSharedGroup", request, callback);
    },

    GetPublisherData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPublisherData", request, callback);
    },

    GetSharedGroupData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetSharedGroupData", request, callback);
    },

    RemoveSharedGroupMembers: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/RemoveSharedGroupMembers", request, callback);
    },

    UpdateSharedGroupData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateSharedGroupData", request, callback);
    },

    GetCloudScriptUrl: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        var overloadCallback = function (result, error) {
            PlayFab._internalSettings.logicServerUrl = result.Url;
            if (callback != null && typeof (callback) == "function")
                callback(result, error);
        };
        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCloudScriptUrl", request, overloadCallback);
    },

    RunCloudScript: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getLogicServerUrl(), request, callback);
    },

    GetContentDownloadUrl: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetContentDownloadUrl", request, callback);
    },

    GetAllUsersCharacters: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetAllUsersCharacters", request, callback);
    },

    GetCharacterLeaderboard: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCharacterLeaderboard", request, callback);
    },

    GetLeaderboardAroundCharacter: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetLeaderboardAroundCharacter", request, callback);
    },

    GetLeaderboardForUserCharacters: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetLeaderboardForUserCharacters", request, callback);
    },

    GrantCharacterToUser: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GrantCharacterToUser", request, callback);
    },

    GetCharacterData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCharacterData", request, callback);
    },

    GetCharacterReadOnlyData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetCharacterReadOnlyData", request, callback);
    },

    UpdateCharacterData: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/UpdateCharacterData", request, callback);
    },

    AcceptTrade: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/AcceptTrade", request, callback);
    },

    CancelTrade: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/CancelTrade", request, callback);
    },

    GetPlayerTrades: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetPlayerTrades", request, callback);
    },

    GetTradeStatus: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/GetTradeStatus", request, callback);
    },

    OpenTrade: function (request, callback) {
        if (PlayFab._internalSettings.sessionTicket == null) throw "Must be logged in to call this method";

        PlayFab._internalSettings.executeRequest(PlayFab._internalSettings.getServerUrl() + "/Client/OpenTrade", request, callback);
    },

};

var PlayFabClientSDK = PlayFab.ClientApi;
