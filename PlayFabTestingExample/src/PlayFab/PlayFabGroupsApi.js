/// <reference path="../typings/PlayFab/PlayFabGroupsApi.d.ts" />

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

PlayFab.GroupsApi = {
    ForgetAllCredentials: function () {
        PlayFab._internalSettings.sessionTicket = null;
        PlayFab._internalSettings.entityToken = null;
    },

    AcceptGroupApplication: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/AcceptGroupApplication", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    AcceptGroupInvitation: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/AcceptGroupInvitation", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    AddMembers: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/AddMembers", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    ApplyToGroup: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/ApplyToGroup", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    BlockEntity: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/BlockEntity", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    ChangeMemberRole: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/ChangeMemberRole", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    CreateGroup: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/CreateGroup", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    CreateRole: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/CreateRole", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    DeleteGroup: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/DeleteGroup", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    DeleteRole: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/DeleteRole", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    GetGroup: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/GetGroup", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    InviteToGroup: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/InviteToGroup", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    IsMember: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/IsMember", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    ListGroupApplications: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/ListGroupApplications", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    ListGroupBlocks: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/ListGroupBlocks", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    ListGroupInvitations: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/ListGroupInvitations", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    ListGroupMembers: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/ListGroupMembers", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    ListMembership: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/ListMembership", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    ListMembershipOpportunities: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/ListMembershipOpportunities", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    RemoveGroupApplication: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/RemoveGroupApplication", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    RemoveGroupInvitation: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/RemoveGroupInvitation", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    RemoveMembers: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/RemoveMembers", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    UnblockEntity: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/UnblockEntity", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    UpdateGroup: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/UpdateGroup", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },

    UpdateRole: function (request, callback, customData, extraHeaders) {
        if (!PlayFab._internalSettings.entityToken) throw PlayFab._internalSettings.errorEntityToken;
        PlayFab._internalSettings.ExecuteRequest(PlayFab._internalSettings.GetServerUrl() + "/Group/UpdateRole", request, "X-EntityToken", PlayFab._internalSettings.entityToken, callback, customData, extraHeaders);
    },
};

var PlayFabGroupsSDK = PlayFab.GroupsApi;

