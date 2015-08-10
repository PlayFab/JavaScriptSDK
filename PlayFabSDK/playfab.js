var exports = {};
exports.sdk_version = "1.0.0";
exports.api_version = "1.1.0";

var settings = {};
exports.settings = settings;
settings.use_development_environment = false;
settings.development_environment_url = ".playfabsandbox.com";
settings.production_environment_url = ".playfabapi.com";
settings.logic_server_url = null;
settings.title_id = null;
settings.session_ticket = null;
settings.developer_secret_key = null;
settings.global_error_handler = null;

function get_server_url()
{
	var baseUrl = settings.use_development_environment ? settings.development_environment_url : settings.production_environment_url;
	if(baseUrl.substring(0, 4) == "http")
		return baseUrl;
	return "https://"+settings.title_id+baseUrl;
}

function get_logic_server_url()
{
	return settings.logic_server_url;
}

function make_request(urlStr, request, authType, authValue, callback)
{
	if(request == null)
		request = {};
	var requestBody = JSON.stringify(request);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", urlStr, true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	if(authType!=null)xhr.setRequestHeader(authType, authValue);
	xhr.setRequestHeader('X-PlayFabSDK', "JavaScriptSDK-" + exports.sdk_version + "-" + exports.api_version);

	xhr.onreadystatechange=function() {
		if (xhr.readyState === 4){   //if complete
			if(xhr.status === 200){  //check if "OK" (200)
				//success
			} else {
				if(callback != null)
				{
					callback({
						code: 0,
						status: "Connection error",
						error: "Connection error",
						errorCode: 1,
						errorMessage: xhr.responseText
					}, null);
				}
				return;
			}
		}
	}

	xhr.onloadend = function () {
		// done
		var replyEnvelope = JSON.parse(xhr.responseText);
		if(replyEnvelope.error || !replyEnvelope.data)
		{
			if(callback != null)
			{
				callback(replyEnvelope, null);
			}
		}
		else
		{
			if(callback != null)
			{
				callback(null, replyEnvelope.data);
			}
		}
	};
	xhr.send(requestBody);
}






exports.client = {};


exports.client.GetPhotonAuthenticationToken = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetPhotonAuthenticationToken", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.LoginWithAndroidDeviceID = function(request, callback)
{
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithAndroidDeviceID", request, null, null, function(error, result)
	{
		if(result != null)
		settings.session_ticket = result.SessionTicket != null ? result.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};


exports.client.LoginWithEmailAddress = function(request, callback)
{
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithEmailAddress", request, null, null, function(error, result)
	{
		if(result != null)
		settings.session_ticket = result.SessionTicket != null ? result.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};


exports.client.LoginWithFacebook = function(request, callback)
{
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithFacebook", request, null, null, function(error, result)
	{
		if(result != null)
		settings.session_ticket = result.SessionTicket != null ? result.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};


exports.client.LoginWithGoogleAccount = function(request, callback)
{
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithGoogleAccount", request, null, null, function(error, result)
	{
		if(result != null)
		settings.session_ticket = result.SessionTicket != null ? result.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};


exports.client.LoginWithIOSDeviceID = function(request, callback)
{
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithIOSDeviceID", request, null, null, function(error, result)
	{
		if(result != null)
		settings.session_ticket = result.SessionTicket != null ? result.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};


exports.client.LoginWithKongregate = function(request, callback)
{
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithKongregate", request, null, null, function(error, result)
	{
		if(result != null)
		settings.session_ticket = result.SessionTicket != null ? result.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};


exports.client.LoginWithPlayFab = function(request, callback)
{
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithPlayFab", request, null, null, function(error, result)
	{
		if(result != null)
		settings.session_ticket = result.SessionTicket != null ? result.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};


exports.client.LoginWithSteam = function(request, callback)
{
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/LoginWithSteam", request, null, null, function(error, result)
	{
		if(result != null)
		settings.session_ticket = result.SessionTicket != null ? result.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};


exports.client.RegisterPlayFabUser = function(request, callback)
{
	request.TitleId = settings.title_id != null ? settings.title_id : request.TitleId; if(request.TitleId == null) throw "Must be have settings.title_id set to call this method";

	make_request(get_server_url() + "/Client/RegisterPlayFabUser", request, null, null, function(error, result)
	{
		if(result != null)
		settings.session_ticket = result.SessionTicket != null ? result.session_ticket : settings.session_ticket;

		if(callback != null)
			callback(error, result);
	});
};


exports.client.AddUsernamePassword = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AddUsernamePassword", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetAccountInfo = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetAccountInfo", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetPlayFabIDsFromFacebookIDs = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetPlayFabIDsFromFacebookIDs", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetPlayFabIDsFromGameCenterIDs = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetPlayFabIDsFromGameCenterIDs", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetPlayFabIDsFromGoogleIDs = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetPlayFabIDsFromGoogleIDs", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetPlayFabIDsFromSteamIDs = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetPlayFabIDsFromSteamIDs", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetUserCombinedInfo = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserCombinedInfo", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.LinkAndroidDeviceID = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkAndroidDeviceID", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.LinkFacebookAccount = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkFacebookAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.LinkGameCenterAccount = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkGameCenterAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.LinkGoogleAccount = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkGoogleAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.LinkIOSDeviceID = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkIOSDeviceID", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.LinkKongregate = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkKongregate", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.LinkSteamAccount = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LinkSteamAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.SendAccountRecoveryEmail = function(request, callback)
{
	
	make_request(get_server_url() + "/Client/SendAccountRecoveryEmail", request, null, null, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UnlinkAndroidDeviceID = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkAndroidDeviceID", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UnlinkFacebookAccount = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkFacebookAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UnlinkGameCenterAccount = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkGameCenterAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UnlinkGoogleAccount = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkGoogleAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UnlinkIOSDeviceID = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkIOSDeviceID", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UnlinkKongregate = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkKongregate", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UnlinkSteamAccount = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlinkSteamAccount", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UpdateUserTitleDisplayName = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateUserTitleDisplayName", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetFriendLeaderboard = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetFriendLeaderboard", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetLeaderboard = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetLeaderboard", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetLeaderboardAroundCurrentUser = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetLeaderboardAroundCurrentUser", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetUserData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetUserPublisherData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserPublisherData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetUserPublisherReadOnlyData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserPublisherReadOnlyData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetUserReadOnlyData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserReadOnlyData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetUserStatistics = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserStatistics", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UpdateUserData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateUserData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UpdateUserPublisherData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateUserPublisherData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UpdateUserStatistics = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateUserStatistics", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetCatalogItems = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetCatalogItems", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetStoreItems = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetStoreItems", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetTitleData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetTitleData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetTitleNews = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetTitleNews", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.AddUserVirtualCurrency = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AddUserVirtualCurrency", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.ConfirmPurchase = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/ConfirmPurchase", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.ConsumeItem = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/ConsumeItem", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetCharacterInventory = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetCharacterInventory", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetPurchase = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetPurchase", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetUserInventory = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetUserInventory", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.PayForPurchase = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/PayForPurchase", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.PurchaseItem = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/PurchaseItem", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.RedeemCoupon = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RedeemCoupon", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.ReportPlayer = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/ReportPlayer", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.StartPurchase = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/StartPurchase", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.SubtractUserVirtualCurrency = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/SubtractUserVirtualCurrency", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UnlockContainerItem = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UnlockContainerItem", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.AddFriend = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AddFriend", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetFriendsList = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetFriendsList", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.RemoveFriend = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RemoveFriend", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.SetFriendTags = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/SetFriendTags", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.RegisterForIOSPushNotification = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RegisterForIOSPushNotification", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.RestoreIOSPurchases = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RestoreIOSPurchases", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.ValidateIOSReceipt = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/ValidateIOSReceipt", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetCurrentGames = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetCurrentGames", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetGameServerRegions = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetGameServerRegions", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.Matchmake = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/Matchmake", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.StartGame = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/StartGame", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.AndroidDevicePushNotificationRegistration = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AndroidDevicePushNotificationRegistration", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.ValidateGooglePlayPurchase = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/ValidateGooglePlayPurchase", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.LogEvent = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/LogEvent", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.AddSharedGroupMembers = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AddSharedGroupMembers", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.CreateSharedGroup = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/CreateSharedGroup", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetPublisherData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetPublisherData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetSharedGroupData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetSharedGroupData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.RemoveSharedGroupMembers = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/RemoveSharedGroupMembers", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UpdateSharedGroupData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateSharedGroupData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetCloudScriptUrl = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetCloudScriptUrl", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		settings.logic_server_url = result.Url;

		if(callback != null)
			callback(error, result);
	});
};


exports.client.RunCloudScript = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_logic_server_url() + "/Client/RunCloudScript", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetContentDownloadUrl = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetContentDownloadUrl", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetCharacterLeaderboard = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetCharacterLeaderboard", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetLeaderboardAroundCharacter = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetLeaderboardAroundCharacter", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetLeaderboardForUserCharacters = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetLeaderboardForUserCharacters", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GrantCharacterToUser = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GrantCharacterToUser", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetCharacterData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetCharacterData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetCharacterReadOnlyData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetCharacterReadOnlyData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.UpdateCharacterData = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/UpdateCharacterData", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.AcceptTrade = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/AcceptTrade", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.CancelTrade = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/CancelTrade", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetPlayerTrades = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetPlayerTrades", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.GetTradeStatus = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/GetTradeStatus", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};


exports.client.OpenTrade = function(request, callback)
{
	if (settings.session_ticket == null) throw "Must be logged in to call this method";

	make_request(get_server_url() + "/Client/OpenTrade", request, "X-Authorization", settings.session_ticket, function(error, result)
	{
		if(result != null)
		
		if(callback != null)
			callback(error, result);
	});
};



