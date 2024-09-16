/// <reference path="../typings/PlayFab/PlayFabEconomyApi.d.ts" />

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
        sdkVersion: "1.180.240913",
        requestGetParams: {
            sdk: "JavaScriptSDK-1.180.240913"
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

PlayFab.buildIdentifier = "adobuild_javascriptsdk_114";
PlayFab.sdkVersion = "1.180.240913";
PlayFab.GenerateErrorReport = function (error) {
    if (error == null)
        return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
};

PlayFab.EconomyApi = {
    ForgetAllCredentials: function () {
        PlayFab._internalSettings.sessionTicket = null;
        PlayFab._internalSettings.entityToken = null;
    },

    AddInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/AddInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateDraftItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CreateDraftItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    CreateUploadUrls: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/CreateUploadUrls", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteEntityItemReviews: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteEntityItemReviews", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteInventoryCollection: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/DeleteInventoryCollection", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/DeleteInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    DeleteItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/DeleteItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ExecuteInventoryOperations: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/ExecuteInventoryOperations", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ExecuteTransferOperations: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/ExecuteTransferOperations", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetCatalogConfig: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetCatalogConfig", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetDraftItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetDraftItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetDraftItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetDraftItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetEntityDraftItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetEntityDraftItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetEntityItemReview: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetEntityItemReview", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetInventoryCollectionIds: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/GetInventoryCollectionIds", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/GetInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetInventoryOperationStatus: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/GetInventoryOperationStatus", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetItemContainers: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetItemContainers", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetItemModerationState: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetItemModerationState", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetItemPublishStatus: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetItemPublishStatus", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetItemReviews: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetItemReviews", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetItemReviewSummary: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetItemReviewSummary", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/GetItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetMicrosoftStoreAccessTokens: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/GetMicrosoftStoreAccessTokens", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    GetTransactionHistory: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/GetTransactionHistory", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    PublishDraftItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/PublishDraftItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    PurchaseInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/PurchaseInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RedeemAppleAppStoreInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/RedeemAppleAppStoreInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RedeemGooglePlayInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/RedeemGooglePlayInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RedeemMicrosoftStoreInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/RedeemMicrosoftStoreInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RedeemNintendoEShopInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/RedeemNintendoEShopInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RedeemPlayStationStoreInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/RedeemPlayStationStoreInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    RedeemSteamInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/RedeemSteamInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ReportItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/ReportItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ReportItemReview: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/ReportItemReview", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    ReviewItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/ReviewItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SearchItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SearchItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SetItemModerationState: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SetItemModerationState", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SubmitItemReviewVote: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/SubmitItemReviewVote", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    SubtractInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/SubtractInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    TakedownItemReviews: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/TakedownItemReviews", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    TransferInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/TransferInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateCatalogConfig: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/UpdateCatalogConfig", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateDraftItem: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Catalog/UpdateDraftItem", request, "X-EntityToken", callback, customData, extraHeaders);
    },

    UpdateInventoryItems: function (request, callback, customData, extraHeaders) {
        return PlayFab._internalSettings.ExecuteRequestWrapper("/Inventory/UpdateInventoryItems", request, "X-EntityToken", callback, customData, extraHeaders);
    },

};

var PlayFabEconomySDK = PlayFab.EconomyApi;

