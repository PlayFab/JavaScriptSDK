var PlayFabClientSDK = new function(){
	
	var internalSettings = {
		session_ticket: null,
		sdk_version: "1.1.0",
		api_version: "1.1.0",
		production_environment_url: ".playfabapi.com"
	}

    var getServerUrl = function () {
        return "https://" + PlayFabClientSDK.settings.title_id + internalSettings.production_environment_url;
    }

     var getLogicServerUrl = function () {
        throw "Not Implemented!";
    }

    var executeRequest = function (url, data, callback) {
		if(callback != null && typeof (callback) != "function"){
			throw "Callback must be null of a function";
		}
	
        if (data == null){
            data = {};
		}
		
		var startTime = new Date();
		
		var requestBody = JSON.stringify(data);
		
        var xhr = new XMLHttpRequest();
        xhr.open("POST", getServerUrl() + url, true);

        xhr.setRequestHeader('Content-Type', 'application/json');

        if (internalSettings.session_ticket != null) {
            xhr.setRequestHeader("X-Authorization", internalSettings.session_ticket);
        }

        xhr.setRequestHeader('X-PlayFabSDK', "JavaScriptSDK-" + internalSettings.sdk_version + "-" + internalSettings.api_version);

        xhr.onloadend = function () {
            if (callback != null) {
				var result = JSON.parse(xhr.responseText);
				
				result.CallBackTimeMS = new Date() - startTime;
				
                callback(result);
            }
        }

        xhr.onerror = function () {
            if (callback != null) {
                var result = JSON.parse(xhr.responseText);
				
				result.CallBackTimeMS = new Date() - startTime;
				
                callback(result);
            }
        }

        xhr.send(requestBody);
    }
	
	return {
	    settings: {
			title_id: null,
		},
	
	
	GetPhotonAuthenticationToken: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetPhotonAuthenticationToken", request, callback);
	},
	
	LoginWithAndroidDeviceID: function(request, callback)
	{
		request.TitleId = PlayFabClientSDK.settings.title_id != null ? PlayFabClientSDK.settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

		
		
		var overloadCallback = function(result){
			if(result.data && result.data.SessionTicket){ internalSettings.session_ticket = result.data.SessionTicket; }

			if (callback != null && typeof (callback) == "function") {
				callback(result);
			}
		};
		
		executeRequest("/Client/LoginWithAndroidDeviceID", request, overloadCallback);
	},
	
	LoginWithCustomID: function(request, callback)
	{
		request.TitleId = PlayFabClientSDK.settings.title_id != null ? PlayFabClientSDK.settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

		
		
		var overloadCallback = function(result){
			if(result.data && result.data.SessionTicket){ internalSettings.session_ticket = result.data.SessionTicket; }

			if (callback != null && typeof (callback) == "function") {
				callback(result);
			}
		};
		
		executeRequest("/Client/LoginWithCustomID", request, overloadCallback);
	},
	
	LoginWithEmailAddress: function(request, callback)
	{
		request.TitleId = PlayFabClientSDK.settings.title_id != null ? PlayFabClientSDK.settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

		
		
		var overloadCallback = function(result){
			if(result.data && result.data.SessionTicket){ internalSettings.session_ticket = result.data.SessionTicket; }

			if (callback != null && typeof (callback) == "function") {
				callback(result);
			}
		};
		
		executeRequest("/Client/LoginWithEmailAddress", request, overloadCallback);
	},
	
	LoginWithFacebook: function(request, callback)
	{
		request.TitleId = PlayFabClientSDK.settings.title_id != null ? PlayFabClientSDK.settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

		
		
		var overloadCallback = function(result){
			if(result.data && result.data.SessionTicket){ internalSettings.session_ticket = result.data.SessionTicket; }

			if (callback != null && typeof (callback) == "function") {
				callback(result);
			}
		};
		
		executeRequest("/Client/LoginWithFacebook", request, overloadCallback);
	},
	
	LoginWithGoogleAccount: function(request, callback)
	{
		request.TitleId = PlayFabClientSDK.settings.title_id != null ? PlayFabClientSDK.settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

		
		
		var overloadCallback = function(result){
			if(result.data && result.data.SessionTicket){ internalSettings.session_ticket = result.data.SessionTicket; }

			if (callback != null && typeof (callback) == "function") {
				callback(result);
			}
		};
		
		executeRequest("/Client/LoginWithGoogleAccount", request, overloadCallback);
	},
	
	LoginWithIOSDeviceID: function(request, callback)
	{
		request.TitleId = PlayFabClientSDK.settings.title_id != null ? PlayFabClientSDK.settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

		
		
		var overloadCallback = function(result){
			if(result.data && result.data.SessionTicket){ internalSettings.session_ticket = result.data.SessionTicket; }

			if (callback != null && typeof (callback) == "function") {
				callback(result);
			}
		};
		
		executeRequest("/Client/LoginWithIOSDeviceID", request, overloadCallback);
	},
	
	LoginWithKongregate: function(request, callback)
	{
		request.TitleId = PlayFabClientSDK.settings.title_id != null ? PlayFabClientSDK.settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

		
		
		var overloadCallback = function(result){
			if(result.data && result.data.SessionTicket){ internalSettings.session_ticket = result.data.SessionTicket; }

			if (callback != null && typeof (callback) == "function") {
				callback(result);
			}
		};
		
		executeRequest("/Client/LoginWithKongregate", request, overloadCallback);
	},
	
	LoginWithPlayFab: function(request, callback)
	{
		request.TitleId = PlayFabClientSDK.settings.title_id != null ? PlayFabClientSDK.settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

		
		
		var overloadCallback = function(result){
			if(result.data && result.data.SessionTicket){ internalSettings.session_ticket = result.data.SessionTicket; }

			if (callback != null && typeof (callback) == "function") {
				callback(result);
			}
		};
		
		executeRequest("/Client/LoginWithPlayFab", request, overloadCallback);
	},
	
	LoginWithSteam: function(request, callback)
	{
		request.TitleId = PlayFabClientSDK.settings.title_id != null ? PlayFabClientSDK.settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

		
		
		var overloadCallback = function(result){
			if(result.data && result.data.SessionTicket){ internalSettings.session_ticket = result.data.SessionTicket; }

			if (callback != null && typeof (callback) == "function") {
				callback(result);
			}
		};
		
		executeRequest("/Client/LoginWithSteam", request, overloadCallback);
	},
	
	RegisterPlayFabUser: function(request, callback)
	{
		request.TitleId = PlayFabClientSDK.settings.title_id != null ? PlayFabClientSDK.settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

		
		
		var overloadCallback = function(result){
			if(result.data && result.data.SessionTicket){ internalSettings.session_ticket = result.data.SessionTicket; }

			if (callback != null && typeof (callback) == "function") {
				callback(result);
			}
		};
		
		executeRequest("/Client/RegisterPlayFabUser", request, overloadCallback);
	},
	
	AddUsernamePassword: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/AddUsernamePassword", request, callback);
	},
	
	GetAccountInfo: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetAccountInfo", request, callback);
	},
	
	GetPlayFabIDsFromFacebookIDs: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetPlayFabIDsFromFacebookIDs", request, callback);
	},
	
	GetPlayFabIDsFromGameCenterIDs: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetPlayFabIDsFromGameCenterIDs", request, callback);
	},
	
	GetPlayFabIDsFromGoogleIDs: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetPlayFabIDsFromGoogleIDs", request, callback);
	},
	
	GetPlayFabIDsFromSteamIDs: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetPlayFabIDsFromSteamIDs", request, callback);
	},
	
	GetUserCombinedInfo: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetUserCombinedInfo", request, callback);
	},
	
	LinkAndroidDeviceID: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/LinkAndroidDeviceID", request, callback);
	},
	
	LinkCustomID: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/LinkCustomID", request, callback);
	},
	
	LinkFacebookAccount: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/LinkFacebookAccount", request, callback);
	},
	
	LinkGameCenterAccount: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/LinkGameCenterAccount", request, callback);
	},
	
	LinkGoogleAccount: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/LinkGoogleAccount", request, callback);
	},
	
	LinkIOSDeviceID: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/LinkIOSDeviceID", request, callback);
	},
	
	LinkKongregate: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/LinkKongregate", request, callback);
	},
	
	LinkSteamAccount: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/LinkSteamAccount", request, callback);
	},
	
	SendAccountRecoveryEmail: function(request, callback)
	{
		
		
		executeRequest("/Client/SendAccountRecoveryEmail", request, callback);
	},
	
	UnlinkAndroidDeviceID: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UnlinkAndroidDeviceID", request, callback);
	},
	
	UnlinkCustomID: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UnlinkCustomID", request, callback);
	},
	
	UnlinkFacebookAccount: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UnlinkFacebookAccount", request, callback);
	},
	
	UnlinkGameCenterAccount: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UnlinkGameCenterAccount", request, callback);
	},
	
	UnlinkGoogleAccount: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UnlinkGoogleAccount", request, callback);
	},
	
	UnlinkIOSDeviceID: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UnlinkIOSDeviceID", request, callback);
	},
	
	UnlinkKongregate: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UnlinkKongregate", request, callback);
	},
	
	UnlinkSteamAccount: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UnlinkSteamAccount", request, callback);
	},
	
	UpdateUserTitleDisplayName: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UpdateUserTitleDisplayName", request, callback);
	},
	
	GetFriendLeaderboard: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetFriendLeaderboard", request, callback);
	},
	
	GetLeaderboard: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetLeaderboard", request, callback);
	},
	
	GetLeaderboardAroundCurrentUser: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetLeaderboardAroundCurrentUser", request, callback);
	},
	
	GetUserData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetUserData", request, callback);
	},
	
	GetUserPublisherData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetUserPublisherData", request, callback);
	},
	
	GetUserPublisherReadOnlyData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetUserPublisherReadOnlyData", request, callback);
	},
	
	GetUserReadOnlyData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetUserReadOnlyData", request, callback);
	},
	
	GetUserStatistics: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetUserStatistics", request, callback);
	},
	
	UpdateUserData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UpdateUserData", request, callback);
	},
	
	UpdateUserPublisherData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UpdateUserPublisherData", request, callback);
	},
	
	UpdateUserStatistics: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UpdateUserStatistics", request, callback);
	},
	
	GetCatalogItems: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetCatalogItems", request, callback);
	},
	
	GetStoreItems: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetStoreItems", request, callback);
	},
	
	GetTitleData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetTitleData", request, callback);
	},
	
	GetTitleNews: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetTitleNews", request, callback);
	},
	
	AddUserVirtualCurrency: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/AddUserVirtualCurrency", request, callback);
	},
	
	ConfirmPurchase: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/ConfirmPurchase", request, callback);
	},
	
	ConsumeItem: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/ConsumeItem", request, callback);
	},
	
	GetCharacterInventory: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetCharacterInventory", request, callback);
	},
	
	GetPurchase: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetPurchase", request, callback);
	},
	
	GetUserInventory: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetUserInventory", request, callback);
	},
	
	PayForPurchase: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/PayForPurchase", request, callback);
	},
	
	PurchaseItem: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/PurchaseItem", request, callback);
	},
	
	RedeemCoupon: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/RedeemCoupon", request, callback);
	},
	
	ReportPlayer: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/ReportPlayer", request, callback);
	},
	
	StartPurchase: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/StartPurchase", request, callback);
	},
	
	SubtractUserVirtualCurrency: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/SubtractUserVirtualCurrency", request, callback);
	},
	
	UnlockContainerItem: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UnlockContainerItem", request, callback);
	},
	
	AddFriend: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/AddFriend", request, callback);
	},
	
	GetFriendsList: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetFriendsList", request, callback);
	},
	
	RemoveFriend: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/RemoveFriend", request, callback);
	},
	
	SetFriendTags: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/SetFriendTags", request, callback);
	},
	
	RegisterForIOSPushNotification: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/RegisterForIOSPushNotification", request, callback);
	},
	
	RestoreIOSPurchases: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/RestoreIOSPurchases", request, callback);
	},
	
	ValidateIOSReceipt: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/ValidateIOSReceipt", request, callback);
	},
	
	GetCurrentGames: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetCurrentGames", request, callback);
	},
	
	GetGameServerRegions: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetGameServerRegions", request, callback);
	},
	
	Matchmake: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/Matchmake", request, callback);
	},
	
	StartGame: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/StartGame", request, callback);
	},
	
	AndroidDevicePushNotificationRegistration: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/AndroidDevicePushNotificationRegistration", request, callback);
	},
	
	ValidateGooglePlayPurchase: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/ValidateGooglePlayPurchase", request, callback);
	},
	
	LogEvent: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/LogEvent", request, callback);
	},
	
	AddSharedGroupMembers: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/AddSharedGroupMembers", request, callback);
	},
	
	CreateSharedGroup: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/CreateSharedGroup", request, callback);
	},
	
	GetPublisherData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetPublisherData", request, callback);
	},
	
	GetSharedGroupData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetSharedGroupData", request, callback);
	},
	
	RemoveSharedGroupMembers: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/RemoveSharedGroupMembers", request, callback);
	},
	
	UpdateSharedGroupData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UpdateSharedGroupData", request, callback);
	},
	
	GetCloudScriptUrl: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetCloudScriptUrl", request, callback);
	},
	
	RunCloudScript: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/RunCloudScript", request, callback);
	},
	
	GetContentDownloadUrl: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetContentDownloadUrl", request, callback);
	},
	
	GetAllUsersCharacters: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetAllUsersCharacters", request, callback);
	},
	
	GetCharacterLeaderboard: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetCharacterLeaderboard", request, callback);
	},
	
	GetLeaderboardAroundCharacter: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetLeaderboardAroundCharacter", request, callback);
	},
	
	GetLeaderboardForUserCharacters: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetLeaderboardForUserCharacters", request, callback);
	},
	
	GrantCharacterToUser: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GrantCharacterToUser", request, callback);
	},
	
	GetCharacterData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetCharacterData", request, callback);
	},
	
	GetCharacterReadOnlyData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetCharacterReadOnlyData", request, callback);
	},
	
	UpdateCharacterData: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/UpdateCharacterData", request, callback);
	},
	
	AcceptTrade: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/AcceptTrade", request, callback);
	},
	
	CancelTrade: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/CancelTrade", request, callback);
	},
	
	GetPlayerTrades: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetPlayerTrades", request, callback);
	},
	
	GetTradeStatus: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/GetTradeStatus", request, callback);
	},
	
	OpenTrade: function(request, callback)
	{
		if (internalSettings.session_ticket == null) throw "Must be logged in to call this method";

		
		executeRequest("/Client/OpenTrade", request, callback);
	},
	
	}
}();