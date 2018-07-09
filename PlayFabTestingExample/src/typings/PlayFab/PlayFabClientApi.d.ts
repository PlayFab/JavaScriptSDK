/// <reference path="Playfab.d.ts" />

declare module PlayFabClientModule {
    export interface IPlayFabClient {
        IsClientLoggedIn(): boolean;

        ForgetAllCredentials(): void;

        /**
         * Accepts an open trade (one that has not yet been accepted or cancelled), if the locally signed-in player is in the
         * allowed player list for the trade, or it is open to all players. If the call is successful, the offered and accepted
         * items will be swapped between the two players' inventories.
         * https://api.playfab.com/Documentation/Client/method/AcceptTrade
         */
        AcceptTrade(request: PlayFabClientModels.AcceptTradeRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.AcceptTradeResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds the PlayFab user, based upon a match against a supplied unique identifier, to the friend list of the local user. At
         * least one of FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
         * https://api.playfab.com/Documentation/Client/method/AddFriend
         */
        AddFriend(request: PlayFabClientModels.AddFriendRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.AddFriendResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab
         * ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as
         * authentication credentials, as the intent is that it is easily accessible by other players.
         * https://api.playfab.com/Documentation/Client/method/AddGenericID
         */
        AddGenericID(request: PlayFabClientModels.AddGenericIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.AddGenericIDResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds or updates a contact email to the player's profile.
         * https://api.playfab.com/Documentation/Client/method/AddOrUpdateContactEmail
         */
        AddOrUpdateContactEmail(request: PlayFabClientModels.AddOrUpdateContactEmailRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.AddOrUpdateContactEmailResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users
         * in the group can add new members. Shared Groups are designed for sharing data between a very small number of players,
         * please see our guide: https://api.playfab.com/docs/tutorials/landing-players/shared-groups
         * https://api.playfab.com/Documentation/Client/method/AddSharedGroupMembers
         */
        AddSharedGroupMembers(request: PlayFabClientModels.AddSharedGroupMembersRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.AddSharedGroupMembersResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds playfab username/password auth to an existing account created via an anonymous auth method, e.g. automatic device
         * ID login.
         * https://api.playfab.com/Documentation/Client/method/AddUsernamePassword
         */
        AddUsernamePassword(request: PlayFabClientModels.AddUsernamePasswordRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.AddUsernamePasswordResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Increments the user's balance of the specified virtual currency by the stated amount
         * https://api.playfab.com/Documentation/Client/method/AddUserVirtualCurrency
         */
        AddUserVirtualCurrency(request: PlayFabClientModels.AddUserVirtualCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ModifyUserVirtualCurrencyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Registers the Android device to receive push notifications
         * https://api.playfab.com/Documentation/Client/method/AndroidDevicePushNotificationRegistration
         */
        AndroidDevicePushNotificationRegistration(request: PlayFabClientModels.AndroidDevicePushNotificationRegistrationRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.AndroidDevicePushNotificationRegistrationResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Attributes an install for advertisment.
         * https://api.playfab.com/Documentation/Client/method/AttributeInstall
         */
        AttributeInstall(request: PlayFabClientModels.AttributeInstallRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.AttributeInstallResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Cancels an open trade (one that has not yet been accepted or cancelled). Note that only the player who created the trade
         * can cancel it via this API call, to prevent griefing of the trade system (cancelling trades in order to prevent other
         * players from accepting them, for trades that can be claimed by more than one player).
         * https://api.playfab.com/Documentation/Client/method/CancelTrade
         */
        CancelTrade(request: PlayFabClientModels.CancelTradeRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.CancelTradeResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Confirms with the payment provider that the purchase was approved (if applicable) and adjusts inventory and virtual
         * currency balances as appropriate
         * https://api.playfab.com/Documentation/Client/method/ConfirmPurchase
         */
        ConfirmPurchase(request: PlayFabClientModels.ConfirmPurchaseRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ConfirmPurchaseResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's inventory.
         * https://api.playfab.com/Documentation/Client/method/ConsumeItem
         */
        ConsumeItem(request: PlayFabClientModels.ConsumeItemRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ConsumeItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the
         * group. Upon creation, the current user will be the only member of the group. Shared Groups are designed for sharing data
         * between a very small number of players, please see our guide:
         * https://api.playfab.com/docs/tutorials/landing-players/shared-groups
         * https://api.playfab.com/Documentation/Client/method/CreateSharedGroup
         */
        CreateSharedGroup(request: PlayFabClientModels.CreateSharedGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.CreateSharedGroupResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Executes a CloudScript function, with the 'currentPlayerId' set to the PlayFab ID of the authenticated player.
         * https://api.playfab.com/Documentation/Client/method/ExecuteCloudScript
         */
        ExecuteCloudScript(request: PlayFabClientModels.ExecuteCloudScriptRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ExecuteCloudScriptResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the user's PlayFab account details
         * https://api.playfab.com/Documentation/Client/method/GetAccountInfo
         */
        GetAccountInfo(request: PlayFabClientModels.GetAccountInfoRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetAccountInfoResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be
         * evaluated with the parent PlayFabId to guarantee uniqueness.
         * https://api.playfab.com/Documentation/Client/method/GetAllUsersCharacters
         */
        GetAllUsersCharacters(request: PlayFabClientModels.ListUsersCharactersRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ListUsersCharactersResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
         * https://api.playfab.com/Documentation/Client/method/GetCatalogItems
         */
        GetCatalogItems(request: PlayFabClientModels.GetCatalogItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetCatalogItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the title-specific custom data for the character which is readable and writable by the client
         * https://api.playfab.com/Documentation/Client/method/GetCharacterData
         */
        GetCharacterData(request: PlayFabClientModels.GetCharacterDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetCharacterDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the specified character's current inventory of virtual goods
         * https://api.playfab.com/Documentation/Client/method/GetCharacterInventory
         */
        GetCharacterInventory(request: PlayFabClientModels.GetCharacterInventoryRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetCharacterInventoryResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
         * https://api.playfab.com/Documentation/Client/method/GetCharacterLeaderboard
         */
        GetCharacterLeaderboard(request: PlayFabClientModels.GetCharacterLeaderboardRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetCharacterLeaderboardResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the title-specific custom data for the character which can only be read by the client
         * https://api.playfab.com/Documentation/Client/method/GetCharacterReadOnlyData
         */
        GetCharacterReadOnlyData(request: PlayFabClientModels.GetCharacterDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetCharacterDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the details of all title-specific statistics for the user
         * https://api.playfab.com/Documentation/Client/method/GetCharacterStatistics
         */
        GetCharacterStatistics(request: PlayFabClientModels.GetCharacterStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetCharacterStatisticsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned
         * URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the
         * content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded,
         * the query to retrieve the data will fail. See this post for more information:
         * https://community.playfab.com/hc/en-us/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also,
         * please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
         * https://api.playfab.com/Documentation/Client/method/GetContentDownloadUrl
         */
        GetContentDownloadUrl(request: PlayFabClientModels.GetContentDownloadUrlRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetContentDownloadUrlResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get details about all current running game servers matching the given parameters.
         * https://api.playfab.com/Documentation/Client/method/GetCurrentGames
         */
        GetCurrentGames(request: PlayFabClientModels.CurrentGamesRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.CurrentGamesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a list of ranked friends of the current player for the given statistic, starting from the indicated point in
         * the leaderboard
         * https://api.playfab.com/Documentation/Client/method/GetFriendLeaderboard
         */
        GetFriendLeaderboard(request: PlayFabClientModels.GetFriendLeaderboardRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetLeaderboardResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a list of ranked friends of the current player for the given statistic, centered on the requested PlayFab
         * user. If PlayFabId is empty or null will return currently logged in user.
         * https://api.playfab.com/Documentation/Client/method/GetFriendLeaderboardAroundPlayer
         */
        GetFriendLeaderboardAroundPlayer(request: PlayFabClientModels.GetFriendLeaderboardAroundPlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetFriendLeaderboardAroundPlayerResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the current friend list for the local user, constrained to users who have PlayFab accounts. Friends from
         * linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
         * https://api.playfab.com/Documentation/Client/method/GetFriendsList
         */
        GetFriendsList(request: PlayFabClientModels.GetFriendsListRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetFriendsListResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get details about the regions hosting game servers matching the given parameters.
         * https://api.playfab.com/Documentation/Client/method/GetGameServerRegions
         */
        GetGameServerRegions(request: PlayFabClientModels.GameServerRegionsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GameServerRegionsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
         * https://api.playfab.com/Documentation/Client/method/GetLeaderboard
         */
        GetLeaderboard(request: PlayFabClientModels.GetLeaderboardRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetLeaderboardResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a list of ranked characters for the given statistic, centered on the requested Character ID
         * https://api.playfab.com/Documentation/Client/method/GetLeaderboardAroundCharacter
         */
        GetLeaderboardAroundCharacter(request: PlayFabClientModels.GetLeaderboardAroundCharacterRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetLeaderboardAroundCharacterResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a list of ranked users for the given statistic, centered on the requested player. If PlayFabId is empty or
         * null will return currently logged in user.
         * https://api.playfab.com/Documentation/Client/method/GetLeaderboardAroundPlayer
         */
        GetLeaderboardAroundPlayer(request: PlayFabClientModels.GetLeaderboardAroundPlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetLeaderboardAroundPlayerResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a list of all of the user's characters for the given statistic.
         * https://api.playfab.com/Documentation/Client/method/GetLeaderboardForUserCharacters
         */
        GetLeaderboardForUserCharacters(request: PlayFabClientModels.GetLeaderboardForUsersCharactersRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetLeaderboardForUsersCharactersResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * For payments flows where the provider requires playfab (the fulfiller) to initiate the transaction, but the client
         * completes the rest of the flow. In the Xsolla case, the token returned here will be passed to Xsolla by the client to
         * create a cart. Poll GetPurchase using the returned OrderId once you've completed the payment.
         * https://api.playfab.com/Documentation/Client/method/GetPaymentToken
         */
        GetPaymentToken(request: PlayFabClientModels.GetPaymentTokenRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPaymentTokenResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets a Photon custom authentication token that can be used to securely join the player into a Photon room. See
         * https://api.playfab.com/docs/using-photon-with-playfab/ for more details.
         * https://api.playfab.com/Documentation/Client/method/GetPhotonAuthenticationToken
         */
        GetPhotonAuthenticationToken(request: PlayFabClientModels.GetPhotonAuthenticationTokenRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPhotonAuthenticationTokenResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves all of the user's different kinds of info.
         * https://api.playfab.com/Documentation/Client/method/GetPlayerCombinedInfo
         */
        GetPlayerCombinedInfo(request: PlayFabClientModels.GetPlayerCombinedInfoRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayerCombinedInfoResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the player's profile
         * https://api.playfab.com/Documentation/Client/method/GetPlayerProfile
         */
        GetPlayerProfile(request: PlayFabClientModels.GetPlayerProfileRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayerProfileResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * List all segments that a player currently belongs to at this moment in time.
         * https://api.playfab.com/Documentation/Client/method/GetPlayerSegments
         */
        GetPlayerSegments(request: PlayFabClientModels.GetPlayerSegmentsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayerSegmentsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the indicated statistics (current version and values for all statistics, if none are specified), for the local
         * player.
         * https://api.playfab.com/Documentation/Client/method/GetPlayerStatistics
         */
        GetPlayerStatistics(request: PlayFabClientModels.GetPlayerStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayerStatisticsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the information on the available versions of the specified statistic.
         * https://api.playfab.com/Documentation/Client/method/GetPlayerStatisticVersions
         */
        GetPlayerStatisticVersions(request: PlayFabClientModels.GetPlayerStatisticVersionsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayerStatisticVersionsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get all tags with a given Namespace (optional) from a player profile.
         * https://api.playfab.com/Documentation/Client/method/GetPlayerTags
         */
        GetPlayerTags(request: PlayFabClientModels.GetPlayerTagsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayerTagsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets all trades the player has either opened or accepted, optionally filtered by trade status.
         * https://api.playfab.com/Documentation/Client/method/GetPlayerTrades
         */
        GetPlayerTrades(request: PlayFabClientModels.GetPlayerTradesRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayerTradesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
         * https://api.playfab.com/Documentation/Client/method/GetPlayFabIDsFromFacebookIDs
         */
        GetPlayFabIDsFromFacebookIDs(request: PlayFabClientModels.GetPlayFabIDsFromFacebookIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayFabIDsFromFacebookIDsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the unique PlayFab identifiers for the given set of Game Center identifiers (referenced in the Game Center
         * Programming Guide as the Player Identifier).
         * https://api.playfab.com/Documentation/Client/method/GetPlayFabIDsFromGameCenterIDs
         */
        GetPlayFabIDsFromGameCenterIDs(request: PlayFabClientModels.GetPlayFabIDsFromGameCenterIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayFabIDsFromGameCenterIDsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the
         * service name plus the service-specific ID for the player, as specified by the title when the generic identifier was
         * added to the player account.
         * https://api.playfab.com/Documentation/Client/method/GetPlayFabIDsFromGenericIDs
         */
        GetPlayFabIDsFromGenericIDs(request: PlayFabClientModels.GetPlayFabIDsFromGenericIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayFabIDsFromGenericIDsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the unique PlayFab identifiers for the given set of Google identifiers. The Google identifiers are the IDs for
         * the user accounts, available as "id" in the Google+ People API calls.
         * https://api.playfab.com/Documentation/Client/method/GetPlayFabIDsFromGoogleIDs
         */
        GetPlayFabIDsFromGoogleIDs(request: PlayFabClientModels.GetPlayFabIDsFromGoogleIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayFabIDsFromGoogleIDsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the unique PlayFab identifiers for the given set of Kongregate identifiers. The Kongregate identifiers are the
         * IDs for the user accounts, available as "user_id" from the Kongregate API methods(ex:
         * http://developers.kongregate.com/docs/client/getUserId).
         * https://api.playfab.com/Documentation/Client/method/GetPlayFabIDsFromKongregateIDs
         */
        GetPlayFabIDsFromKongregateIDs(request: PlayFabClientModels.GetPlayFabIDsFromKongregateIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayFabIDsFromKongregateIDsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile
         * IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
         * https://api.playfab.com/Documentation/Client/method/GetPlayFabIDsFromSteamIDs
         */
        GetPlayFabIDsFromSteamIDs(request: PlayFabClientModels.GetPlayFabIDsFromSteamIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayFabIDsFromSteamIDsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the unique PlayFab identifiers for the given set of Twitch identifiers. The Twitch identifiers are the IDs for
         * the user accounts, available as "_id" from the Twitch API methods (ex:
         * https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser).
         * https://api.playfab.com/Documentation/Client/method/GetPlayFabIDsFromTwitchIDs
         */
        GetPlayFabIDsFromTwitchIDs(request: PlayFabClientModels.GetPlayFabIDsFromTwitchIDsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPlayFabIDsFromTwitchIDsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the key-value store of custom publisher settings
         * https://api.playfab.com/Documentation/Client/method/GetPublisherData
         */
        GetPublisherData(request: PlayFabClientModels.GetPublisherDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPublisherDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a purchase along with its current PlayFab status. Returns inventory items from the purchase that are still
         * active.
         * https://api.playfab.com/Documentation/Client/method/GetPurchase
         */
        GetPurchase(request: PlayFabClientModels.GetPurchaseRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetPurchaseResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves data stored in a shared group object, as well as the list of members in the group. Non-members of the group
         * may use this to retrieve group data, including membership, but they will not receive data for keys marked as private.
         * Shared Groups are designed for sharing data between a very small number of players, please see our guide:
         * https://api.playfab.com/docs/tutorials/landing-players/shared-groups
         * https://api.playfab.com/Documentation/Client/method/GetSharedGroupData
         */
        GetSharedGroupData(request: PlayFabClientModels.GetSharedGroupDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetSharedGroupDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the set of items defined for the specified store, including all prices defined
         * https://api.playfab.com/Documentation/Client/method/GetStoreItems
         */
        GetStoreItems(request: PlayFabClientModels.GetStoreItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetStoreItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the current server time
         * https://api.playfab.com/Documentation/Client/method/GetTime
         */
        GetTime(request: PlayFabClientModels.GetTimeRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetTimeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the key-value store of custom title settings
         * https://api.playfab.com/Documentation/Client/method/GetTitleData
         */
        GetTitleData(request: PlayFabClientModels.GetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetTitleDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the title news feed, as configured in the developer portal
         * https://api.playfab.com/Documentation/Client/method/GetTitleNews
         */
        GetTitleNews(request: PlayFabClientModels.GetTitleNewsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetTitleNewsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Returns the title's base 64 encoded RSA CSP blob.
         * https://api.playfab.com/Documentation/Client/method/GetTitlePublicKey
         */
        GetTitlePublicKey(request: PlayFabClientModels.GetTitlePublicKeyRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetTitlePublicKeyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the current status of an existing trade.
         * https://api.playfab.com/Documentation/Client/method/GetTradeStatus
         */
        GetTradeStatus(request: PlayFabClientModels.GetTradeStatusRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetTradeStatusResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the title-specific custom data for the user which is readable and writable by the client
         * https://api.playfab.com/Documentation/Client/method/GetUserData
         */
        GetUserData(request: PlayFabClientModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the user's current inventory of virtual goods
         * https://api.playfab.com/Documentation/Client/method/GetUserInventory
         */
        GetUserInventory(request: PlayFabClientModels.GetUserInventoryRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetUserInventoryResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
         * https://api.playfab.com/Documentation/Client/method/GetUserPublisherData
         */
        GetUserPublisherData(request: PlayFabClientModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the publisher-specific custom data for the user which can only be read by the client
         * https://api.playfab.com/Documentation/Client/method/GetUserPublisherReadOnlyData
         */
        GetUserPublisherReadOnlyData(request: PlayFabClientModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the title-specific custom data for the user which can only be read by the client
         * https://api.playfab.com/Documentation/Client/method/GetUserReadOnlyData
         */
        GetUserReadOnlyData(request: PlayFabClientModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Requests a challenge from the server to be signed by Windows Hello Passport service to authenticate.
         * https://api.playfab.com/Documentation/Client/method/GetWindowsHelloChallenge
         */
        GetWindowsHelloChallenge(request: PlayFabClientModels.GetWindowsHelloChallengeRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GetWindowsHelloChallengeResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated
         * with the parent PlayFabId to guarantee uniqueness.
         * https://api.playfab.com/Documentation/Client/method/GrantCharacterToUser
         */
        GrantCharacterToUser(request: PlayFabClientModels.GrantCharacterToUserRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.GrantCharacterToUserResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Links the Android device identifier to the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/LinkAndroidDeviceID
         */
        LinkAndroidDeviceID(request: PlayFabClientModels.LinkAndroidDeviceIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LinkAndroidDeviceIDResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Links the custom identifier, generated by the title, to the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/LinkCustomID
         */
        LinkCustomID(request: PlayFabClientModels.LinkCustomIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LinkCustomIDResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Links the Facebook account associated with the provided Facebook access token to the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/LinkFacebookAccount
         */
        LinkFacebookAccount(request: PlayFabClientModels.LinkFacebookAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LinkFacebookAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Links the Game Center account associated with the provided Game Center ID to the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/LinkGameCenterAccount
         */
        LinkGameCenterAccount(request: PlayFabClientModels.LinkGameCenterAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LinkGameCenterAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Links the currently signed-in user account to their Google account, using their Google account credentials
         * https://api.playfab.com/Documentation/Client/method/LinkGoogleAccount
         */
        LinkGoogleAccount(request: PlayFabClientModels.LinkGoogleAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LinkGoogleAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Links the vendor-specific iOS device identifier to the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/LinkIOSDeviceID
         */
        LinkIOSDeviceID(request: PlayFabClientModels.LinkIOSDeviceIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LinkIOSDeviceIDResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Links the Kongregate identifier to the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/LinkKongregate
         */
        LinkKongregate(request: PlayFabClientModels.LinkKongregateAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LinkKongregateAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Links the Steam account associated with the provided Steam authentication ticket to the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/LinkSteamAccount
         */
        LinkSteamAccount(request: PlayFabClientModels.LinkSteamAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LinkSteamAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Links the Twitch account associated with the token to the user's PlayFab account.
         * https://api.playfab.com/Documentation/Client/method/LinkTwitch
         */
        LinkTwitch(request: PlayFabClientModels.LinkTwitchAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LinkTwitchAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Link Windows Hello authentication to the current PlayFab Account
         * https://api.playfab.com/Documentation/Client/method/LinkWindowsHello
         */
        LinkWindowsHello(request: PlayFabClientModels.LinkWindowsHelloAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LinkWindowsHelloAccountResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user in using the Android device identifier, returning a session identifier that can subsequently be used for
         * API calls which require an authenticated user
         * https://api.playfab.com/Documentation/Client/method/LoginWithAndroidDeviceID
         */
        LoginWithAndroidDeviceID(request: PlayFabClientModels.LoginWithAndroidDeviceIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user in using a custom unique identifier generated by the title, returning a session identifier that can
         * subsequently be used for API calls which require an authenticated user
         * https://api.playfab.com/Documentation/Client/method/LoginWithCustomID
         */
        LoginWithCustomID(request: PlayFabClientModels.LoginWithCustomIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user into the PlayFab account, returning a session identifier that can subsequently be used for API calls
         * which require an authenticated user. Unlike most other login API calls, LoginWithEmailAddress does not permit the
         * creation of new accounts via the CreateAccountFlag. Email addresses may be used to create accounts via
         * RegisterPlayFabUser.
         * https://api.playfab.com/Documentation/Client/method/LoginWithEmailAddress
         */
        LoginWithEmailAddress(request: PlayFabClientModels.LoginWithEmailAddressRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user in using a Facebook access token, returning a session identifier that can subsequently be used for API
         * calls which require an authenticated user
         * https://api.playfab.com/Documentation/Client/method/LoginWithFacebook
         */
        LoginWithFacebook(request: PlayFabClientModels.LoginWithFacebookRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user in using an iOS Game Center player identifier, returning a session identifier that can subsequently be
         * used for API calls which require an authenticated user
         * https://api.playfab.com/Documentation/Client/method/LoginWithGameCenter
         */
        LoginWithGameCenter(request: PlayFabClientModels.LoginWithGameCenterRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user in using their Google account credentials
         * https://api.playfab.com/Documentation/Client/method/LoginWithGoogleAccount
         */
        LoginWithGoogleAccount(request: PlayFabClientModels.LoginWithGoogleAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user in using the vendor-specific iOS device identifier, returning a session identifier that can subsequently
         * be used for API calls which require an authenticated user
         * https://api.playfab.com/Documentation/Client/method/LoginWithIOSDeviceID
         */
        LoginWithIOSDeviceID(request: PlayFabClientModels.LoginWithIOSDeviceIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user in using a Kongregate player account.
         * https://api.playfab.com/Documentation/Client/method/LoginWithKongregate
         */
        LoginWithKongregate(request: PlayFabClientModels.LoginWithKongregateRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user into the PlayFab account, returning a session identifier that can subsequently be used for API calls
         * which require an authenticated user. Unlike most other login API calls, LoginWithPlayFab does not permit the creation of
         * new accounts via the CreateAccountFlag. Username/Password credentials may be used to create accounts via
         * RegisterPlayFabUser, or added to existing accounts using AddUsernamePassword.
         * https://api.playfab.com/Documentation/Client/method/LoginWithPlayFab
         */
        LoginWithPlayFab(request: PlayFabClientModels.LoginWithPlayFabRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user in using a Steam authentication ticket, returning a session identifier that can subsequently be used for
         * API calls which require an authenticated user
         * https://api.playfab.com/Documentation/Client/method/LoginWithSteam
         */
        LoginWithSteam(request: PlayFabClientModels.LoginWithSteamRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Signs the user in using a Twitch access token.
         * https://api.playfab.com/Documentation/Client/method/LoginWithTwitch
         */
        LoginWithTwitch(request: PlayFabClientModels.LoginWithTwitchRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Completes the Windows Hello login flow by returning the signed value of the challange from GetWindowsHelloChallenge.
         * Windows Hello has a 2 step client to server authentication scheme. Step one is to request from the server a challenge
         * string. Step two is to request the user sign the string via Windows Hello and then send the signed value back to the
         * server.
         * https://api.playfab.com/Documentation/Client/method/LoginWithWindowsHello
         */
        LoginWithWindowsHello(request: PlayFabClientModels.LoginWithWindowsHelloRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Attempts to locate a game session matching the given parameters. If the goal is to match the player into a specific
         * active session, only the LobbyId is required. Otherwise, the BuildVersion, GameMode, and Region are all required
         * parameters. Note that parameters specified in the search are required (they are not weighting factors). If a slot is
         * found in a server instance matching the parameters, the slot will be assigned to that player, removing it from the
         * availabe set. In that case, the information on the game session will be returned, otherwise the Status returned will be
         * GameNotFound.
         * https://api.playfab.com/Documentation/Client/method/Matchmake
         */
        Matchmake(request: PlayFabClientModels.MatchmakeRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.MatchmakeResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Opens a new outstanding trade. Note that a given item instance may only be in one open trade at a time.
         * https://api.playfab.com/Documentation/Client/method/OpenTrade
         */
        OpenTrade(request: PlayFabClientModels.OpenTradeRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.OpenTradeResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Selects a payment option for purchase order created via StartPurchase
         * https://api.playfab.com/Documentation/Client/method/PayForPurchase
         */
        PayForPurchase(request: PlayFabClientModels.PayForPurchaseRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.PayForPurchaseResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Buys a single item with virtual currency. You must specify both the virtual currency to use to purchase, as well as what
         * the client believes the price to be. This lets the server fail the purchase if the price has changed.
         * https://api.playfab.com/Documentation/Client/method/PurchaseItem
         */
        PurchaseItem(request: PlayFabClientModels.PurchaseItemRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.PurchaseItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the
         * Economy->Catalogs tab in the PlayFab Game Manager.
         * https://api.playfab.com/Documentation/Client/method/RedeemCoupon
         */
        RedeemCoupon(request: PlayFabClientModels.RedeemCouponRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.RedeemCouponResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Registers the iOS device to receive push notifications
         * https://api.playfab.com/Documentation/Client/method/RegisterForIOSPushNotification
         */
        RegisterForIOSPushNotification(request: PlayFabClientModels.RegisterForIOSPushNotificationRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.RegisterForIOSPushNotificationResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Registers a new Playfab user account, returning a session identifier that can subsequently be used for API calls which
         * require an authenticated user. You must supply either a username or an email address.
         * https://api.playfab.com/Documentation/Client/method/RegisterPlayFabUser
         */
        RegisterPlayFabUser(request: PlayFabClientModels.RegisterPlayFabUserRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.RegisterPlayFabUserResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Registers a new PlayFab user account using Windows Hello authentication, returning a session ticket that can
         * subsequently be used for API calls which require an authenticated user
         * https://api.playfab.com/Documentation/Client/method/RegisterWithWindowsHello
         */
        RegisterWithWindowsHello(request: PlayFabClientModels.RegisterWithWindowsHelloRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.LoginResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes a contact email from the player's profile.
         * https://api.playfab.com/Documentation/Client/method/RemoveContactEmail
         */
        RemoveContactEmail(request: PlayFabClientModels.RemoveContactEmailRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.RemoveContactEmailResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes a specified user from the friend list of the local user
         * https://api.playfab.com/Documentation/Client/method/RemoveFriend
         */
        RemoveFriend(request: PlayFabClientModels.RemoveFriendRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.RemoveFriendResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes the specified generic service identifier from the player's PlayFab account.
         * https://api.playfab.com/Documentation/Client/method/RemoveGenericID
         */
        RemoveGenericID(request: PlayFabClientModels.RemoveGenericIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.RemoveGenericIDResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the
         * group can remove members. If as a result of the call, zero users remain with access, the group and its associated data
         * will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our
         * guide: https://api.playfab.com/docs/tutorials/landing-players/shared-groups
         * https://api.playfab.com/Documentation/Client/method/RemoveSharedGroupMembers
         */
        RemoveSharedGroupMembers(request: PlayFabClientModels.RemoveSharedGroupMembersRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.RemoveSharedGroupMembersResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Write a PlayStream event to describe the provided player device information. This API method is not designed to be
         * called directly by developers. Each PlayFab client SDK will eventually report this information automatically.
         * https://api.playfab.com/Documentation/Client/method/ReportDeviceInfo
         */
        ReportDeviceInfo(request: PlayFabClientModels.DeviceInfoRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Submit a report for another player (due to bad bahavior, etc.), so that customer service representatives for the title
         * can take action concerning potentially toxic players.
         * https://api.playfab.com/Documentation/Client/method/ReportPlayer
         */
        ReportPlayer(request: PlayFabClientModels.ReportPlayerClientRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ReportPlayerClientResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Restores all in-app purchases based on the given restore receipt
         * https://api.playfab.com/Documentation/Client/method/RestoreIOSPurchases
         */
        RestoreIOSPurchases(request: PlayFabClientModels.RestoreIOSPurchasesRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.RestoreIOSPurchasesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Forces an email to be sent to the registered email address for the user's account, with a link allowing the user to
         * change the password.If an account recovery email template ID is provided, an email using the custom email template will
         * be used.
         * https://api.playfab.com/Documentation/Client/method/SendAccountRecoveryEmail
         */
        SendAccountRecoveryEmail(request: PlayFabClientModels.SendAccountRecoveryEmailRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.SendAccountRecoveryEmailResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the tag list for a specified user in the friend list of the local user
         * https://api.playfab.com/Documentation/Client/method/SetFriendTags
         */
        SetFriendTags(request: PlayFabClientModels.SetFriendTagsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.SetFriendTagsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's
         * secret use the Admin or Server API method SetPlayerSecret.
         * https://api.playfab.com/Documentation/Client/method/SetPlayerSecret
         */
        SetPlayerSecret(request: PlayFabClientModels.SetPlayerSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.SetPlayerSecretResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Start a new game server with a given configuration, add the current player and return the connection information.
         * https://api.playfab.com/Documentation/Client/method/StartGame
         */
        StartGame(request: PlayFabClientModels.StartGameRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.StartGameResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates an order for a list of items from the title catalog
         * https://api.playfab.com/Documentation/Client/method/StartPurchase
         */
        StartPurchase(request: PlayFabClientModels.StartPurchaseRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.StartPurchaseResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make a VC
         * balance negative with this API.
         * https://api.playfab.com/Documentation/Client/method/SubtractUserVirtualCurrency
         */
        SubtractUserVirtualCurrency(request: PlayFabClientModels.SubtractUserVirtualCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ModifyUserVirtualCurrencyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unlinks the related Android device identifier from the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/UnlinkAndroidDeviceID
         */
        UnlinkAndroidDeviceID(request: PlayFabClientModels.UnlinkAndroidDeviceIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlinkAndroidDeviceIDResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unlinks the related custom identifier from the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/UnlinkCustomID
         */
        UnlinkCustomID(request: PlayFabClientModels.UnlinkCustomIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlinkCustomIDResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unlinks the related Facebook account from the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/UnlinkFacebookAccount
         */
        UnlinkFacebookAccount(request: PlayFabClientModels.UnlinkFacebookAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlinkFacebookAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unlinks the related Game Center account from the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/UnlinkGameCenterAccount
         */
        UnlinkGameCenterAccount(request: PlayFabClientModels.UnlinkGameCenterAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlinkGameCenterAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unlinks the related Google account from the user's PlayFab account
         * (https://developers.google.com/android/reference/com/google/android/gms/auth/GoogleAuthUtil#public-methods).
         * https://api.playfab.com/Documentation/Client/method/UnlinkGoogleAccount
         */
        UnlinkGoogleAccount(request: PlayFabClientModels.UnlinkGoogleAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlinkGoogleAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unlinks the related iOS device identifier from the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/UnlinkIOSDeviceID
         */
        UnlinkIOSDeviceID(request: PlayFabClientModels.UnlinkIOSDeviceIDRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlinkIOSDeviceIDResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unlinks the related Kongregate identifier from the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/UnlinkKongregate
         */
        UnlinkKongregate(request: PlayFabClientModels.UnlinkKongregateAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlinkKongregateAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unlinks the related Steam account from the user's PlayFab account
         * https://api.playfab.com/Documentation/Client/method/UnlinkSteamAccount
         */
        UnlinkSteamAccount(request: PlayFabClientModels.UnlinkSteamAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlinkSteamAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unlinks the related Twitch account from the user's PlayFab account.
         * https://api.playfab.com/Documentation/Client/method/UnlinkTwitch
         */
        UnlinkTwitch(request: PlayFabClientModels.UnlinkTwitchAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlinkTwitchAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unlink Windows Hello authentication from the current PlayFab Account
         * https://api.playfab.com/Documentation/Client/method/UnlinkWindowsHello
         */
        UnlinkWindowsHello(request: PlayFabClientModels.UnlinkWindowsHelloAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlinkWindowsHelloAccountResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Opens the specified container, with the specified key (when required), and returns the contents of the opened container.
         * If the container (and key when relevant) are consumable (RemainingUses > 0), their RemainingUses will be decremented,
         * consistent with the operation of ConsumeItem.
         * https://api.playfab.com/Documentation/Client/method/UnlockContainerInstance
         */
        UnlockContainerInstance(request: PlayFabClientModels.UnlockContainerInstanceRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlockContainerItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Searches target inventory for an ItemInstance matching the given CatalogItemId, if necessary unlocks it using an
         * appropriate key, and returns the contents of the opened container. If the container (and key when relevant) are
         * consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
         * https://api.playfab.com/Documentation/Client/method/UnlockContainerItem
         */
        UnlockContainerItem(request: PlayFabClientModels.UnlockContainerItemRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UnlockContainerItemResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update the avatar URL of the player
         * https://api.playfab.com/Documentation/Client/method/UpdateAvatarUrl
         */
        UpdateAvatarUrl(request: PlayFabClientModels.UpdateAvatarUrlRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates and updates the title-specific custom data for the user's character which is readable and writable by the client
         * https://api.playfab.com/Documentation/Client/method/UpdateCharacterData
         */
        UpdateCharacterData(request: PlayFabClientModels.UpdateCharacterDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UpdateCharacterDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the values of the specified title-specific statistics for the specific character. By default, clients are not
         * permitted to update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
         * https://api.playfab.com/Documentation/Client/method/UpdateCharacterStatistics
         */
        UpdateCharacterStatistics(request: PlayFabClientModels.UpdateCharacterStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UpdateCharacterStatisticsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the values of the specified title-specific statistics for the user. By default, clients are not permitted to
         * update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
         * https://api.playfab.com/Documentation/Client/method/UpdatePlayerStatistics
         */
        UpdatePlayerStatistics(request: PlayFabClientModels.UpdatePlayerStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UpdatePlayerStatisticsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated
         * or added in this call will be readable by users not in the group. By default, data permissions are set to Private.
         * Regardless of the permission setting, only members of the group can update the data. Shared Groups are designed for
         * sharing data between a very small number of players, please see our guide:
         * https://api.playfab.com/docs/tutorials/landing-players/shared-groups
         * https://api.playfab.com/Documentation/Client/method/UpdateSharedGroupData
         */
        UpdateSharedGroupData(request: PlayFabClientModels.UpdateSharedGroupDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UpdateSharedGroupDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates and updates the title-specific custom data for the user which is readable and writable by the client
         * https://api.playfab.com/Documentation/Client/method/UpdateUserData
         */
        UpdateUserData(request: PlayFabClientModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates and updates the publisher-specific custom data for the user which is readable and writable by the client
         * https://api.playfab.com/Documentation/Client/method/UpdateUserPublisherData
         */
        UpdateUserPublisherData(request: PlayFabClientModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the title specific display name for the user
         * https://api.playfab.com/Documentation/Client/method/UpdateUserTitleDisplayName
         */
        UpdateUserTitleDisplayName(request: PlayFabClientModels.UpdateUserTitleDisplayNameRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.UpdateUserTitleDisplayNameResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Validates with Amazon that the receipt for an Amazon App Store in-app purchase is valid and that it matches the
         * purchased catalog item
         * https://api.playfab.com/Documentation/Client/method/ValidateAmazonIAPReceipt
         */
        ValidateAmazonIAPReceipt(request: PlayFabClientModels.ValidateAmazonReceiptRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ValidateAmazonReceiptResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Validates a Google Play purchase and gives the corresponding item to the player.
         * https://api.playfab.com/Documentation/Client/method/ValidateGooglePlayPurchase
         */
        ValidateGooglePlayPurchase(request: PlayFabClientModels.ValidateGooglePlayPurchaseRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ValidateGooglePlayPurchaseResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Validates with the Apple store that the receipt for an iOS in-app purchase is valid and that it matches the purchased
         * catalog item
         * https://api.playfab.com/Documentation/Client/method/ValidateIOSReceipt
         */
        ValidateIOSReceipt(request: PlayFabClientModels.ValidateIOSReceiptRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ValidateIOSReceiptResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Validates with Windows that the receipt for an Windows App Store in-app purchase is valid and that it matches the
         * purchased catalog item
         * https://api.playfab.com/Documentation/Client/method/ValidateWindowsStoreReceipt
         */
        ValidateWindowsStoreReceipt(request: PlayFabClientModels.ValidateWindowsReceiptRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.ValidateWindowsReceiptResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Writes a character-based event into PlayStream.
         * https://api.playfab.com/Documentation/Client/method/WriteCharacterEvent
         */
        WriteCharacterEvent(request: PlayFabClientModels.WriteClientCharacterEventRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.WriteEventResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Writes a player-based event into PlayStream.
         * https://api.playfab.com/Documentation/Client/method/WritePlayerEvent
         */
        WritePlayerEvent(request: PlayFabClientModels.WriteClientPlayerEventRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.WriteEventResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Writes a title-based event into PlayStream.
         * https://api.playfab.com/Documentation/Client/method/WriteTitleEvent
         */
        WriteTitleEvent(request: PlayFabClientModels.WriteTitleEventRequest, callback: PlayFabModule.ApiCallback<PlayFabClientModels.WriteEventResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabClientModels {
    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AcceptTradeRequest */
    export interface AcceptTradeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Items from the accepting player's inventory in exchange for the offered items in the trade. In the case of a gift, this
         * will be null.
         */
        AcceptedInventoryInstanceIds?: string[];
        /** Player who opened the trade. */
        OfferingPlayerId: string;
        /** Trade identifier. */
        TradeId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AcceptTradeResponse */
    export interface AcceptTradeResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Details about trade which was just accepted. */
        Trade?: TradeInfo;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AdCampaignAttributionModel */
    export interface AdCampaignAttributionModel {
        /** UTC time stamp of attribution */
        AttributedAt: string;
        /** Attribution campaign identifier */
        CampaignId?: string;
        /** Attribution network name */
        Platform?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddFriendRequest */
    export interface AddFriendRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Email address of the user to attempt to add to the local user's friend list. */
        FriendEmail?: string;
        /** PlayFab identifier of the user to attempt to add to the local user's friend list. */
        FriendPlayFabId?: string;
        /** Title-specific display name of the user to attempt to add to the local user's friend list. */
        FriendTitleDisplayName?: string;
        /** PlayFab username of the user to attempt to add to the local user's friend list. */
        FriendUsername?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddFriendResult */
    export interface AddFriendResult extends PlayFabModule.IPlayFabResultCommon  {
        /** True if the friend request was processed successfully. */
        Created: boolean;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddGenericIDRequest */
    export interface AddGenericIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Generic service identifier to add to the player account. */
        GenericId: GenericServiceId;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddGenericIDResult */
    export interface AddGenericIDResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddOrUpdateContactEmailRequest */
    export interface AddOrUpdateContactEmailRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The new contact email to associate with the player. */
        EmailAddress: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddOrUpdateContactEmailResult */
    export interface AddOrUpdateContactEmailResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddSharedGroupMembersRequest */
    export interface AddSharedGroupMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabIds: string[];
        /** Unique identifier for the shared group. */
        SharedGroupId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddSharedGroupMembersResult */
    export interface AddSharedGroupMembersResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddUsernamePasswordRequest */
    export interface AddUsernamePasswordRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** User email address attached to their account */
        Email: string;
        /** Password for the PlayFab account (6-100 characters) */
        Password: string;
        /** PlayFab username for the account (3-20 characters) */
        Username: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddUsernamePasswordResult */
    export interface AddUsernamePasswordResult extends PlayFabModule.IPlayFabResultCommon  {
        /** PlayFab unique user name. */
        Username?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AddUserVirtualCurrencyRequest */
    export interface AddUserVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Amount to be added to the user balance of the specified virtual currency. */
        Amount: number;
        /** Name of the virtual currency which is to be incremented. */
        VirtualCurrency: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AndroidDevicePushNotificationRegistrationRequest */
    export interface AndroidDevicePushNotificationRegistrationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Message to display when confirming push notification. */
        ConfirmationMessage?: string;
        /**
         * Registration ID provided by the Google Cloud Messaging service when the title registered to receive push notifications
         * (see the GCM documentation, here: http://developer.android.com/google/gcm/client.html).
         */
        DeviceToken: string;
        /** If true, send a test push message immediately after sucessful registration. Defaults to false. */
        SendPushNotificationConfirmation?: boolean;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AndroidDevicePushNotificationRegistrationResult */
    export interface AndroidDevicePushNotificationRegistrationResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AttributeInstallRequest */
    export interface AttributeInstallRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The adid for this device. */
        Adid?: string;
        /** The IdentifierForAdvertisers for iOS Devices. */
        Idfa?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.AttributeInstallResult */
    export interface AttributeInstallResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CancelTradeRequest */
    export interface CancelTradeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Trade identifier. */
        TradeId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CancelTradeResponse */
    export interface CancelTradeResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Details about trade which was just canceled. */
        Trade?: TradeInfo;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CartItem */
    export interface CartItem {
        /** Description of the catalog item. */
        Description?: string;
        /** Display name for the catalog item. */
        DisplayName?: string;
        /** Class name to which catalog item belongs. */
        ItemClass?: string;
        /** Unique identifier for the catalog item. */
        ItemId?: string;
        /** Unique instance identifier for this catalog item. */
        ItemInstanceId?: string;
        /** Cost of the catalog item for each applicable real world currency. */
        RealCurrencyPrices?: { [key: string]: number };
        /** Amount of each applicable virtual currency which will be received as a result of purchasing this catalog item. */
        VCAmount?: { [key: string]: number };
        /** Cost of the catalog item for each applicable virtual currency. */
        VirtualCurrencyPrices?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CatalogItem */
    export interface CatalogItem {
        /**
         * defines the bundle properties for the item - bundles are items which contain other items, including random drop tables
         * and virtual currencies
         */
        Bundle?: CatalogItemBundleInfo;
        /** if true, then an item instance of this type can be used to grant a character to a user. */
        CanBecomeCharacter: boolean;
        /** catalog version for this item */
        CatalogVersion?: string;
        /** defines the consumable properties (number of uses, timeout) for the item */
        Consumable?: CatalogItemConsumableInfo;
        /**
         * defines the container properties for the item - what items it contains, including random drop tables and virtual
         * currencies, and what item (if any) is required to open it via the UnlockContainerItem API
         */
        Container?: CatalogItemContainerInfo;
        /** game specific custom data */
        CustomData?: string;
        /** text description of item, to show in-game */
        Description?: string;
        /** text name for the item, to show in-game */
        DisplayName?: string;
        /**
         * If the item has IsLImitedEdition set to true, and this is the first time this ItemId has been defined as a limited
         * edition item, this value determines the total number of instances to allocate for the title. Once this limit has been
         * reached, no more instances of this ItemId can be created, and attempts to purchase or grant it will return a Result of
         * false for that ItemId. If the item has already been defined to have a limited edition count, or if this value is less
         * than zero, it will be ignored.
         */
        InitialLimitedEditionCount: number;
        /** BETA: If true, then only a fixed number can ever be granted. */
        IsLimitedEdition: boolean;
        /**
         * if true, then only one item instance of this type will exist and its remaininguses will be incremented instead.
         * RemainingUses will cap out at Int32.Max (2,147,483,647). All subsequent increases will be discarded
         */
        IsStackable: boolean;
        /** if true, then an item instance of this type can be traded between players using the trading APIs */
        IsTradable: boolean;
        /** class to which the item belongs */
        ItemClass?: string;
        /** unique identifier for this item */
        ItemId: string;
        /**
         * URL to the item image. For Facebook purchase to display the image on the item purchase page, this must be set to an HTTP
         * URL.
         */
        ItemImageUrl?: string;
        /** override prices for this item for specific currencies */
        RealCurrencyPrices?: { [key: string]: number };
        /** list of item tags */
        Tags?: string[];
        /** price of this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies) */
        VirtualCurrencyPrices?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CatalogItemBundleInfo */
    export interface CatalogItemBundleInfo {
        /** unique ItemId values for all items which will be added to the player inventory when the bundle is added */
        BundledItems?: string[];
        /**
         * unique TableId values for all RandomResultTable objects which are part of the bundle (random tables will be resolved and
         * add the relevant items to the player inventory when the bundle is added)
         */
        BundledResultTables?: string[];
        /** virtual currency types and balances which will be added to the player inventory when the bundle is added */
        BundledVirtualCurrencies?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CatalogItemConsumableInfo */
    export interface CatalogItemConsumableInfo {
        /** number of times this object can be used, after which it will be removed from the player inventory */
        UsageCount?: number;
        /**
         * duration in seconds for how long the item will remain in the player inventory - once elapsed, the item will be removed
         * (recommended minimum value is 5 seconds, as lower values can cause the item to expire before operations depending on
         * this item's details have completed)
         */
        UsagePeriod?: number;
        /**
         * all inventory item instances in the player inventory sharing a non-null UsagePeriodGroup have their UsagePeriod values
         * added together, and share the result - when that period has elapsed, all the items in the group will be removed
         */
        UsagePeriodGroup?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CatalogItemContainerInfo */
    export interface CatalogItemContainerInfo {
        /** unique ItemId values for all items which will be added to the player inventory, once the container has been unlocked */
        ItemContents?: string[];
        /**
         * ItemId for the catalog item used to unlock the container, if any (if not specified, a call to UnlockContainerItem will
         * open the container, adding the contents to the player inventory and currency balances)
         */
        KeyItemId?: string;
        /**
         * unique TableId values for all RandomResultTable objects which are part of the container (once unlocked, random tables
         * will be resolved and add the relevant items to the player inventory)
         */
        ResultTableContents?: string[];
        /** virtual currency types and balances which will be added to the player inventory when the container is unlocked */
        VirtualCurrencyContents?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CharacterInventory */
    export interface CharacterInventory {
        /** The id of this character. */
        CharacterId?: string;
        /** The inventory of this character. */
        Inventory?: ItemInstance[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CharacterLeaderboardEntry */
    export interface CharacterLeaderboardEntry {
        /** PlayFab unique identifier of the character that belongs to the user for this leaderboard entry. */
        CharacterId?: string;
        /** Title-specific display name of the character for this leaderboard entry. */
        CharacterName?: string;
        /** Name of the character class for this entry. */
        CharacterType?: string;
        /** Title-specific display name of the user for this leaderboard entry. */
        DisplayName?: string;
        /** PlayFab unique identifier of the user for this leaderboard entry. */
        PlayFabId?: string;
        /** User's overall position in the leaderboard. */
        Position: number;
        /** Specific value of the user's statistic. */
        StatValue: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CharacterResult */
    export interface CharacterResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The id for this character on this player. */
        CharacterId?: string;
        /** The name of this character. */
        CharacterName?: string;
        /** The type-string that was given to this character on creation. */
        CharacterType?: string;

    }

    type CloudScriptRevisionOption = "Live"
        | "Latest"
        | "Specific";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CollectionFilter */
    export interface CollectionFilter {
        /** List of Exclude rules, with any of which if a collection matches, it is excluded by the filter. */
        Excludes?: Container_Dictionary_String_String[];
        /**
         * List of Include rules, with any of which if a collection matches, it is included by the filter, unless it is excluded by
         * one of the Exclude rule
         */
        Includes?: Container_Dictionary_String_String[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ConfirmPurchaseRequest */
    export interface ConfirmPurchaseRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Purchase order identifier returned from StartPurchase. */
        OrderId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ConfirmPurchaseResult */
    export interface ConfirmPurchaseResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of items purchased. */
        Items?: ItemInstance[];
        /** Purchase order identifier. */
        OrderId?: string;
        /** Date and time of the purchase. */
        PurchaseDate: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ConsumeItemRequest */
    export interface ConsumeItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /** Number of uses to consume from the item. */
        ConsumeCount: number;
        /** Unique instance identifier of the item to be consumed. */
        ItemInstanceId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ConsumeItemResult */
    export interface ConsumeItemResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique instance identifier of the item with uses consumed. */
        ItemInstanceId?: string;
        /** Number of uses remaining on the item. */
        RemainingUses: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ContactEmailInfoModel */
    export interface ContactEmailInfoModel {
        /** The email address */
        EmailAddress?: string;
        /** The name of the email info data */
        Name?: string;
        /** The verification status of the email */
        VerificationStatus?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.Container_Dictionary_String_String */
    export interface Container_Dictionary_String_String {
        /** Content of data */
        Data?: { [key: string]: string | null };

    }

    type ContinentCode = "AF"
        | "AN"
        | "AS"
        | "EU"
        | "NA"
        | "OC"
        | "SA";

    type CountryCode = "AF"
        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BQ"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KP"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SX"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "SS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "US"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CreateSharedGroupRequest */
    export interface CreateSharedGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique identifier for the shared group (a random identifier will be assigned, if one is not specified). */
        SharedGroupId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CreateSharedGroupResult */
    export interface CreateSharedGroupResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique identifier for the shared group. */
        SharedGroupId?: string;

    }

    type Currency = "AED"
        | "AFN"
        | "ALL"
        | "AMD"
        | "ANG"
        | "AOA"
        | "ARS"
        | "AUD"
        | "AWG"
        | "AZN"
        | "BAM"
        | "BBD"
        | "BDT"
        | "BGN"
        | "BHD"
        | "BIF"
        | "BMD"
        | "BND"
        | "BOB"
        | "BRL"
        | "BSD"
        | "BTN"
        | "BWP"
        | "BYR"
        | "BZD"
        | "CAD"
        | "CDF"
        | "CHF"
        | "CLP"
        | "CNY"
        | "COP"
        | "CRC"
        | "CUC"
        | "CUP"
        | "CVE"
        | "CZK"
        | "DJF"
        | "DKK"
        | "DOP"
        | "DZD"
        | "EGP"
        | "ERN"
        | "ETB"
        | "EUR"
        | "FJD"
        | "FKP"
        | "GBP"
        | "GEL"
        | "GGP"
        | "GHS"
        | "GIP"
        | "GMD"
        | "GNF"
        | "GTQ"
        | "GYD"
        | "HKD"
        | "HNL"
        | "HRK"
        | "HTG"
        | "HUF"
        | "IDR"
        | "ILS"
        | "IMP"
        | "INR"
        | "IQD"
        | "IRR"
        | "ISK"
        | "JEP"
        | "JMD"
        | "JOD"
        | "JPY"
        | "KES"
        | "KGS"
        | "KHR"
        | "KMF"
        | "KPW"
        | "KRW"
        | "KWD"
        | "KYD"
        | "KZT"
        | "LAK"
        | "LBP"
        | "LKR"
        | "LRD"
        | "LSL"
        | "LYD"
        | "MAD"
        | "MDL"
        | "MGA"
        | "MKD"
        | "MMK"
        | "MNT"
        | "MOP"
        | "MRO"
        | "MUR"
        | "MVR"
        | "MWK"
        | "MXN"
        | "MYR"
        | "MZN"
        | "NAD"
        | "NGN"
        | "NIO"
        | "NOK"
        | "NPR"
        | "NZD"
        | "OMR"
        | "PAB"
        | "PEN"
        | "PGK"
        | "PHP"
        | "PKR"
        | "PLN"
        | "PYG"
        | "QAR"
        | "RON"
        | "RSD"
        | "RUB"
        | "RWF"
        | "SAR"
        | "SBD"
        | "SCR"
        | "SDG"
        | "SEK"
        | "SGD"
        | "SHP"
        | "SLL"
        | "SOS"
        | "SPL"
        | "SRD"
        | "STD"
        | "SVC"
        | "SYP"
        | "SZL"
        | "THB"
        | "TJS"
        | "TMT"
        | "TND"
        | "TOP"
        | "TRY"
        | "TTD"
        | "TVD"
        | "TWD"
        | "TZS"
        | "UAH"
        | "UGX"
        | "USD"
        | "UYU"
        | "UZS"
        | "VEF"
        | "VND"
        | "VUV"
        | "WST"
        | "XAF"
        | "XCD"
        | "XDR"
        | "XOF"
        | "XPF"
        | "YER"
        | "ZAR"
        | "ZMW"
        | "ZWD";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CurrentGamesRequest */
    export interface CurrentGamesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Build to match against. */
        BuildVersion?: string;
        /** Game mode to look for. */
        GameMode?: string;
        /** Region to check for Game Server Instances. */
        Region?: string;
        /** Statistic name to find statistic-based matches. */
        StatisticName?: string;
        /** Filter to include and/or exclude Game Server Instances associated with certain tags. */
        TagFilter?: CollectionFilter;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.CurrentGamesResult */
    export interface CurrentGamesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** number of games running */
        GameCount: number;
        /** array of games found */
        Games?: GameInfo[];
        /** total number of players across all servers */
        PlayerCount: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.DeviceInfoRequest */
    export interface DeviceInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Information posted to the PlayStream Event. Currently arbitrary, and specific to the environment sending it. */
        Info?: { [key: string]: any };

    }

    type EmailVerificationStatus = "Unverified"
        | "Pending"
        | "Confirmed";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.EmptyResult */
    export interface EmptyResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.EntityKey */
    export interface EntityKey {
        /** Entity profile ID. */
        Id: string;
        /** Entity type. Optional to be used but one of EntityType or EntityTypeString must be set. */
        Type?: string;
        /** Entity type. Optional to be used but one of EntityType or EntityTypeString must be set. */
        TypeString?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.EntityTokenResponse */
    export interface EntityTokenResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The token used to set X-EntityToken for all entity based API calls. */
        EntityToken?: string;
        /** The time the token will expire, if it is an expiring token, in UTC. */
        TokenExpiration?: string;

    }

    type EntityTypes = "title"
        | "master_player_account"
        | "title_player_account"
        | "character"
        | "group"
        | "service";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ExecuteCloudScriptRequest */
    export interface ExecuteCloudScriptRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The name of the CloudScript function to execute */
        FunctionName: string;
        /** Object that is passed in to the function as the first argument */
        FunctionParameter?: any;
        /**
         * Generate a 'player_executed_cloudscript' PlayStream event containing the results of the function execution and other
         * contextual information. This event will show up in the PlayStream debugger console for the player in Game Manager.
         */
        GeneratePlayStreamEvent?: boolean;
        /**
         * Option for which revision of the CloudScript to execute. 'Latest' executes the most recently created revision, 'Live'
         * executes the current live, published revision, and 'Specific' executes the specified revision. The default value is
         * 'Specific', if the SpeificRevision parameter is specified, otherwise it is 'Live'.
         */
        RevisionSelection?: string;
        /** The specivic revision to execute, when RevisionSelection is set to 'Specific' */
        SpecificRevision?: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ExecuteCloudScriptResult */
    export interface ExecuteCloudScriptResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Number of PlayFab API requests issued by the CloudScript function */
        APIRequestsIssued: number;
        /** Information about the error, if any, that occurred during execution */
        Error?: ScriptExecutionError;
        ExecutionTimeSeconds: number;
        /** The name of the function that executed */
        FunctionName?: string;
        /** The object returned from the CloudScript function, if any */
        FunctionResult?: any;
        /**
         * Flag indicating if the FunctionResult was too large and was subsequently dropped from this event. This only occurs if
         * the total event size is larger than 350KB.
         */
        FunctionResultTooLarge?: boolean;
        /** Number of external HTTP requests issued by the CloudScript function */
        HttpRequestsIssued: number;
        /**
         * Entries logged during the function execution. These include both entries logged in the function code using log.info()
         * and log.error() and error entries for API and HTTP request failures.
         */
        Logs?: LogStatement[];
        /**
         * Flag indicating if the logs were too large and were subsequently dropped from this event. This only occurs if the total
         * event size is larger than 350KB after the FunctionResult was removed.
         */
        LogsTooLarge?: boolean;
        MemoryConsumedBytes: number;
        /**
         * Processor time consumed while executing the function. This does not include time spent waiting on API calls or HTTP
         * requests.
         */
        ProcessorTimeSeconds: number;
        /** The revision of the CloudScript that executed */
        Revision: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.FacebookPlayFabIdPair */
    export interface FacebookPlayFabIdPair {
        /** Unique Facebook identifier for a user. */
        FacebookId?: string;
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook identifier. */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.FriendInfo */
    export interface FriendInfo {
        /** Unique lobby identifier of the Game Server Instance to which this player is currently connected. */
        CurrentMatchmakerLobbyId?: string;
        /** Available Facebook information (if the user and PlayFab friend are also connected in Facebook). */
        FacebookInfo?: UserFacebookInfo;
        /** PlayFab unique identifier for this friend. */
        FriendPlayFabId?: string;
        /** Available Game Center information (if the user and PlayFab friend are also connected in Game Center). */
        GameCenterInfo?: UserGameCenterInfo;
        /** The profile of the user, if requested. */
        Profile?: PlayerProfileModel;
        /** Available PSN information, if the user and PlayFab friend are both connected to PSN. */
        PSNInfo?: UserPsnInfo;
        /** Available Steam information (if the user and PlayFab friend are also connected in Steam). */
        SteamInfo?: UserSteamInfo;
        /** Tags which have been associated with this friend. */
        Tags?: string[];
        /** Title-specific display name for this friend. */
        TitleDisplayName?: string;
        /** PlayFab unique username for this friend. */
        Username?: string;
        /** Available Xbox information, if the user and PlayFab friend are both connected to Xbox Live. */
        XboxInfo?: UserXboxInfo;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GameCenterPlayFabIdPair */
    export interface GameCenterPlayFabIdPair {
        /** Unique Game Center identifier for a user. */
        GameCenterId?: string;
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Game Center identifier. */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GameInfo */
    export interface GameInfo {
        /** build version this server is running */
        BuildVersion?: string;
        /** game mode this server is running */
        GameMode?: string;
        /** game session custom data */
        GameServerData?: string;
        /** game specific string denoting server configuration */
        GameServerStateEnum?: string;
        /** last heartbeat of the game server instance, used in external game server provider mode */
        LastHeartbeat?: string;
        /** unique lobby identifier for this game server */
        LobbyID?: string;
        /** maximum players this server can support */
        MaxPlayers?: number;
        /** array of current player IDs on this server */
        PlayerUserIds?: string[];
        /** region to which this server is associated */
        Region?: string;
        /** duration in seconds this server has been running */
        RunTime: number;
        /** IPV4 address of the server */
        ServerHostname?: string;
        /** IPV6 address of the server */
        ServerIPV6Address?: string;
        /** port number to use for non-http communications with the server */
        ServerPort?: number;
        /** stastic used to match this game in player statistic matchmaking */
        StatisticName?: string;
        /** game session tags */
        Tags?: { [key: string]: string | null };

    }

    type GameInstanceState = "Open"
        | "Closed";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GameServerRegionsRequest */
    export interface GameServerRegionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** version of game server for which stats are being requested */
        BuildVersion: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GameServerRegionsResult */
    export interface GameServerRegionsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** array of regions found matching the request parameters */
        Regions?: RegionInfo[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GenericPlayFabIdPair */
    export interface GenericPlayFabIdPair {
        /** Unique generic service identifier for a user. */
        GenericId?: GenericServiceId;
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the given generic identifier. */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GenericServiceId */
    export interface GenericServiceId {
        /** Name of the service for which the player has a unique identifier. */
        ServiceName: string;
        /** Unique identifier of the player in that service. */
        UserId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetAccountInfoRequest */
    export interface GetAccountInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** User email address for the account to find (if no Username is specified). */
        Email?: string;
        /**
         * Unique PlayFab identifier of the user whose info is being requested. Optional, defaults to the authenticated user if no
         * other lookup identifier set.
         */
        PlayFabId?: string;
        /**
         * Title-specific username for the account to find (if no Email is set). Note that if the non-unique Title Display Names
         * option is enabled for the title, attempts to look up users by Title Display Name will always return AccountNotFound.
         */
        TitleDisplayName?: string;
        /** PlayFab Username for the account to find (if no PlayFabId is specified). */
        Username?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetAccountInfoResult */
    export interface GetAccountInfoResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Account information for the local user. */
        AccountInfo?: UserAccountInfo;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetCatalogItemsRequest */
    export interface GetCatalogItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Which catalog is being requested. If null, uses the default catalog. */
        CatalogVersion?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetCatalogItemsResult */
    export interface GetCatalogItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of items which can be purchased. */
        Catalog?: CatalogItem[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetCharacterDataRequest */
    export interface GetCharacterDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string;
        /**
         * The version that currently exists according to the caller. The call will return the data for all of the keys if the
         * version in the system is greater than this.
         */
        IfChangedFromDataVersion?: number;
        /** Specific keys to search for in the custom user data. */
        Keys?: string[];
        /** Unique PlayFab identifier of the user to load data for. Optional, defaults to yourself if not set. */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetCharacterDataResult */
    export interface GetCharacterDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /** User specific data for this title. */
        Data?: { [key: string]: UserDataRecord };
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetCharacterInventoryRequest */
    export interface GetCharacterInventoryRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Used to limit results to only those from a specific catalog version. */
        CatalogVersion?: string;
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetCharacterInventoryResult */
    export interface GetCharacterInventoryResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique identifier of the character for this inventory. */
        CharacterId?: string;
        /** Array of inventory items belonging to the character. */
        Inventory?: ItemInstance[];
        /** Array of virtual currency balance(s) belonging to the character. */
        VirtualCurrency?: { [key: string]: number };
        /** Array of remaining times and timestamps for virtual currencies. */
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetCharacterLeaderboardRequest */
    export interface GetCharacterLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Optional character type on which to filter the leaderboard entries. */
        CharacterType?: string;
        /** Maximum number of entries to retrieve. Default 10, maximum 100. */
        MaxResultsCount?: number;
        /** First entry in the leaderboard to be retrieved. */
        StartPosition: number;
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetCharacterLeaderboardResult */
    export interface GetCharacterLeaderboardResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Ordered list of leaderboard entries. */
        Leaderboard?: CharacterLeaderboardEntry[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetCharacterStatisticsRequest */
    export interface GetCharacterStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetCharacterStatisticsResult */
    export interface GetCharacterStatisticsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested character statistics. */
        CharacterStatistics?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetContentDownloadUrlRequest */
    export interface GetContentDownloadUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** HTTP method to fetch item - GET or HEAD. Use HEAD when only fetching metadata. Default is GET. */
        HttpMethod?: string;
        /** Key of the content item to fetch, usually formatted as a path, e.g. images/a.png */
        Key: string;
        /**
         * True to download through CDN. CDN provides higher download bandwidth and lower latency. However, if you want the latest,
         * non-cached version of the content during development, set this to false. Default is true.
         */
        ThruCDN?: boolean;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetContentDownloadUrlResult */
    export interface GetContentDownloadUrlResult extends PlayFabModule.IPlayFabResultCommon  {
        /** URL for downloading content via HTTP GET or HEAD method. The URL will expire in approximately one hour. */
        URL?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetFriendLeaderboardAroundPlayerRequest */
    export interface GetFriendLeaderboardAroundPlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Indicates whether Facebook friends should be included in the response. Default is true. */
        IncludeFacebookFriends?: boolean;
        /** Indicates whether Steam service friends should be included in the response. Default is true. */
        IncludeSteamFriends?: boolean;
        /** Maximum number of entries to retrieve. Default 10, maximum 100. */
        MaxResultsCount?: number;
        /** PlayFab unique identifier of the user to center the leaderboard around. If null will center on the logged in user. */
        PlayFabId?: string;
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: number;
        /** Statistic used to rank players for this leaderboard. */
        StatisticName: string;
        /** The version of the leaderboard to get. */
        Version?: number;
        /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
        XboxToken?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetFriendLeaderboardAroundPlayerResult */
    export interface GetFriendLeaderboardAroundPlayerResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Ordered listing of users and their positions in the requested leaderboard. */
        Leaderboard?: PlayerLeaderboardEntry[];
        /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
        NextReset?: string;
        /** The version of the leaderboard returned. */
        Version: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetFriendLeaderboardRequest */
    export interface GetFriendLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Indicates whether Facebook friends should be included in the response. Default is true. */
        IncludeFacebookFriends?: boolean;
        /** Indicates whether Steam service friends should be included in the response. Default is true. */
        IncludeSteamFriends?: boolean;
        /** Maximum number of entries to retrieve. Default 10, maximum 100. */
        MaxResultsCount?: number;
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: number;
        /** Position in the leaderboard to start this listing (defaults to the first entry). */
        StartPosition: number;
        /** Statistic used to rank friends for this leaderboard. */
        StatisticName: string;
        /** The version of the leaderboard to get. */
        Version?: number;
        /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
        XboxToken?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetFriendsListRequest */
    export interface GetFriendsListRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Indicates whether Facebook friends should be included in the response. Default is true. */
        IncludeFacebookFriends?: boolean;
        /** Indicates whether Steam service friends should be included in the response. Default is true. */
        IncludeSteamFriends?: boolean;
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: number;
        /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
        XboxToken?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetFriendsListResult */
    export interface GetFriendsListResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of friends found. */
        Friends?: FriendInfo[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetLeaderboardAroundCharacterRequest */
    export interface GetLeaderboardAroundCharacterRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID for a specific character on which to center the leaderboard. */
        CharacterId: string;
        /** Optional character type on which to filter the leaderboard entries. */
        CharacterType?: string;
        /** Maximum number of entries to retrieve. Default 10, maximum 100. */
        MaxResultsCount?: number;
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetLeaderboardAroundCharacterResult */
    export interface GetLeaderboardAroundCharacterResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Ordered list of leaderboard entries. */
        Leaderboard?: CharacterLeaderboardEntry[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetLeaderboardAroundPlayerRequest */
    export interface GetLeaderboardAroundPlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Maximum number of entries to retrieve. Default 10, maximum 100. */
        MaxResultsCount?: number;
        /** PlayFab unique identifier of the user to center the leaderboard around. If null will center on the logged in user. */
        PlayFabId?: string;
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: number;
        /** Statistic used to rank players for this leaderboard. */
        StatisticName: string;
        /** The version of the leaderboard to get. */
        Version?: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetLeaderboardAroundPlayerResult */
    export interface GetLeaderboardAroundPlayerResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Ordered listing of users and their positions in the requested leaderboard. */
        Leaderboard?: PlayerLeaderboardEntry[];
        /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
        NextReset?: string;
        /** The version of the leaderboard returned. */
        Version: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetLeaderboardForUsersCharactersRequest */
    export interface GetLeaderboardForUsersCharactersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Maximum number of entries to retrieve. */
        MaxResultsCount: number;
        /** Unique identifier for the title-specific statistic for the leaderboard. */
        StatisticName: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetLeaderboardForUsersCharactersResult */
    export interface GetLeaderboardForUsersCharactersResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Ordered list of leaderboard entries. */
        Leaderboard?: CharacterLeaderboardEntry[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetLeaderboardRequest */
    export interface GetLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Maximum number of entries to retrieve. Default 10, maximum 100. */
        MaxResultsCount?: number;
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: number;
        /** Position in the leaderboard to start this listing (defaults to the first entry). */
        StartPosition: number;
        /** Statistic used to rank players for this leaderboard. */
        StatisticName: string;
        /** The version of the leaderboard to get. */
        Version?: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetLeaderboardResult */
    export interface GetLeaderboardResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Ordered listing of users and their positions in the requested leaderboard. */
        Leaderboard?: PlayerLeaderboardEntry[];
        /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
        NextReset?: string;
        /** The version of the leaderboard returned. */
        Version: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPaymentTokenRequest */
    export interface GetPaymentTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The name of service to provide the payment token. Allowed Values are: xsolla */
        TokenProvider: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPaymentTokenResult */
    export interface GetPaymentTokenResult extends PlayFabModule.IPlayFabResultCommon  {
        /** PlayFab's purchase order identifier. */
        OrderId?: string;
        /** The token from provider. */
        ProviderToken?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPhotonAuthenticationTokenRequest */
    export interface GetPhotonAuthenticationTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The Photon applicationId for the game you wish to log into. */
        PhotonApplicationId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPhotonAuthenticationTokenResult */
    export interface GetPhotonAuthenticationTokenResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Photon authentication token for this game-session. */
        PhotonCustomAuthenticationToken?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerCombinedInfoRequest */
    export interface GetPlayerCombinedInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters: GetPlayerCombinedInfoRequestParams;
        /** PlayFabId of the user whose data will be returned. If not filled included, we return the data for the calling player. */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerCombinedInfoRequestParams */
    export interface GetPlayerCombinedInfoRequestParams {
        /** Whether to get character inventories. Defaults to false. */
        GetCharacterInventories: boolean;
        /** Whether to get the list of characters. Defaults to false. */
        GetCharacterList: boolean;
        /** Whether to get player profile. Defaults to false. */
        GetPlayerProfile: boolean;
        /** Whether to get player statistics. Defaults to false. */
        GetPlayerStatistics: boolean;
        /** Whether to get title data. Defaults to false. */
        GetTitleData: boolean;
        /** Whether to get the player's account Info. Defaults to false */
        GetUserAccountInfo: boolean;
        /** Whether to get the player's custom data. Defaults to false */
        GetUserData: boolean;
        /** Whether to get the player's inventory. Defaults to false */
        GetUserInventory: boolean;
        /** Whether to get the player's read only data. Defaults to false */
        GetUserReadOnlyData: boolean;
        /** Whether to get the player's virtual currency balances. Defaults to false */
        GetUserVirtualCurrency: boolean;
        /** Specific statistics to retrieve. Leave null to get all keys. Has no effect if GetPlayerStatistics is false */
        PlayerStatisticNames?: string[];
        /** Specifies the properties to return from the player profile. Defaults to returning the player's display name. */
        ProfileConstraints?: number;
        /** Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetTitleData is false */
        TitleDataKeys?: string[];
        /** Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserData is false */
        UserDataKeys?: string[];
        /**
         * Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserReadOnlyData is
         * false
         */
        UserReadOnlyDataKeys?: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerCombinedInfoResult */
    export interface GetPlayerCombinedInfoResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Results for requested info. */
        InfoResultPayload?: GetPlayerCombinedInfoResultPayload;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerCombinedInfoResultPayload */
    export interface GetPlayerCombinedInfoResultPayload {
        /** Account information for the user. This is always retrieved. */
        AccountInfo?: UserAccountInfo;
        /** Inventories for each character for the user. */
        CharacterInventories?: CharacterInventory[];
        /** List of characters for the user. */
        CharacterList?: CharacterResult[];
        /**
         * The profile of the players. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
         * exist.
         */
        PlayerProfile?: PlayerProfileModel;
        /** List of statistics for this player. */
        PlayerStatistics?: StatisticValue[];
        /** Title data for this title. */
        TitleData?: { [key: string]: string | null };
        /** User specific custom data. */
        UserData?: { [key: string]: UserDataRecord };
        /** The version of the UserData that was returned. */
        UserDataVersion: number;
        /** Array of inventory items in the user's current inventory. */
        UserInventory?: ItemInstance[];
        /** User specific read-only data. */
        UserReadOnlyData?: { [key: string]: UserDataRecord };
        /** The version of the Read-Only UserData that was returned. */
        UserReadOnlyDataVersion: number;
        /** Dictionary of virtual currency balance(s) belonging to the user. */
        UserVirtualCurrency?: { [key: string]: number };
        /** Dictionary of remaining times and timestamps for virtual currencies. */
        UserVirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerProfileRequest */
    export interface GetPlayerProfileRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerProfileResult */
    export interface GetPlayerProfileResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The profile of the player. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
         * exist.
         */
        PlayerProfile?: PlayerProfileModel;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerSegmentsRequest */
    export interface GetPlayerSegmentsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerSegmentsResult */
    export interface GetPlayerSegmentsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of segments the requested player currently belongs to. */
        Segments?: GetSegmentResult[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerStatisticsRequest */
    export interface GetPlayerStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** statistics to return (current version will be returned for each) */
        StatisticNames?: string[];
        /**
         * statistics to return, if StatisticNames is not set (only statistics which have a version matching that provided will be
         * returned)
         */
        StatisticNameVersions?: StatisticNameVersion[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerStatisticsResult */
    export interface GetPlayerStatisticsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** User statistics for the requested user. */
        Statistics?: StatisticValue[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerStatisticVersionsRequest */
    export interface GetPlayerStatisticVersionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** unique name of the statistic */
        StatisticName?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerStatisticVersionsResult */
    export interface GetPlayerStatisticVersionsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** version change history of the statistic */
        StatisticVersions?: PlayerStatisticVersion[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerTagsRequest */
    export interface GetPlayerTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Optional namespace to filter results by */
        Namespace?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerTagsResult */
    export interface GetPlayerTagsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /** Canonical tags (including namespace and tag's name) for the requested user */
        Tags: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerTradesRequest */
    export interface GetPlayerTradesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Returns only trades with the given status. If null, returns all trades. */
        StatusFilter?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayerTradesResponse */
    export interface GetPlayerTradesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** History of trades which this player has accepted. */
        AcceptedTrades?: TradeInfo[];
        /** The trades for this player which are currently available to be accepted. */
        OpenedTrades?: TradeInfo[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromFacebookIDsRequest */
    export interface GetPlayFabIDsFromFacebookIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Array of unique Facebook identifiers for which the title needs to get PlayFab identifiers. */
        FacebookIDs: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromFacebookIDsResult */
    export interface GetPlayFabIDsFromFacebookIDsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Mapping of Facebook identifiers to PlayFab identifiers. */
        Data?: FacebookPlayFabIdPair[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromGameCenterIDsRequest */
    export interface GetPlayFabIDsFromGameCenterIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Array of unique Game Center identifiers (the Player Identifier) for which the title needs to get PlayFab identifiers. */
        GameCenterIDs: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromGameCenterIDsResult */
    export interface GetPlayFabIDsFromGameCenterIDsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Mapping of Game Center identifiers to PlayFab identifiers. */
        Data?: GameCenterPlayFabIdPair[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromGenericIDsRequest */
    export interface GetPlayFabIDsFromGenericIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Array of unique generic service identifiers for which the title needs to get PlayFab identifiers. Currently limited to a
         * maximum of 10 in a single request.
         */
        GenericIDs: GenericServiceId[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromGenericIDsResult */
    export interface GetPlayFabIDsFromGenericIDsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Mapping of generic service identifiers to PlayFab identifiers. */
        Data?: GenericPlayFabIdPair[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromGoogleIDsRequest */
    export interface GetPlayFabIDsFromGoogleIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Array of unique Google identifiers (Google+ user IDs) for which the title needs to get PlayFab identifiers. */
        GoogleIDs: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromGoogleIDsResult */
    export interface GetPlayFabIDsFromGoogleIDsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Mapping of Google identifiers to PlayFab identifiers. */
        Data?: GooglePlayFabIdPair[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromKongregateIDsRequest */
    export interface GetPlayFabIDsFromKongregateIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Array of unique Kongregate identifiers (Kongregate's user_id) for which the title needs to get PlayFab identifiers. */
        KongregateIDs: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromKongregateIDsResult */
    export interface GetPlayFabIDsFromKongregateIDsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Mapping of Kongregate identifiers to PlayFab identifiers. */
        Data?: KongregatePlayFabIdPair[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromSteamIDsRequest */
    export interface GetPlayFabIDsFromSteamIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Array of unique Steam identifiers (Steam profile IDs) for which the title needs to get PlayFab identifiers. */
        SteamStringIDs?: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromSteamIDsResult */
    export interface GetPlayFabIDsFromSteamIDsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Mapping of Steam identifiers to PlayFab identifiers. */
        Data?: SteamPlayFabIdPair[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromTwitchIDsRequest */
    export interface GetPlayFabIDsFromTwitchIDsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Array of unique Twitch identifiers (Twitch's _id) for which the title needs to get PlayFab identifiers. */
        TwitchIds: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPlayFabIDsFromTwitchIDsResult */
    export interface GetPlayFabIDsFromTwitchIDsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Mapping of Twitch identifiers to PlayFab identifiers. */
        Data?: TwitchPlayFabIdPair[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPublisherDataRequest */
    export interface GetPublisherDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** array of keys to get back data from the Publisher data blob, set by the admin tools */
        Keys: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPublisherDataResult */
    export interface GetPublisherDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** a dictionary object of key / value pairs */
        Data?: { [key: string]: string | null };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPurchaseRequest */
    export interface GetPurchaseRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Purchase order identifier. */
        OrderId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetPurchaseResult */
    export interface GetPurchaseResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Purchase order identifier. */
        OrderId?: string;
        /** Payment provider used for transaction (If not VC) */
        PaymentProvider?: string;
        /** Date and time of the purchase. */
        PurchaseDate: string;
        /** Provider transaction ID (If not VC) */
        TransactionId?: string;
        /** PlayFab transaction status */
        TransactionStatus?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetSegmentResult */
    export interface GetSegmentResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Identifier of the segments AB Test, if it is attached to one. */
        ABTestParent?: string;
        /** Unique identifier for this segment. */
        Id: string;
        /** Segment name. */
        Name?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetSharedGroupDataRequest */
    export interface GetSharedGroupDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** If true, return the list of all members of the shared group. */
        GetMembers?: boolean;
        /**
         * Specific keys to retrieve from the shared group (if not specified, all keys will be returned, while an empty array
         * indicates that no keys should be returned).
         */
        Keys?: string[];
        /** Unique identifier for the shared group. */
        SharedGroupId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetSharedGroupDataResult */
    export interface GetSharedGroupDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Data for the requested keys. */
        Data?: { [key: string]: SharedGroupDataRecord };
        /** List of PlayFabId identifiers for the members of this group, if requested. */
        Members?: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetStoreItemsRequest */
    export interface GetStoreItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** catalog version to store items from. Use default catalog version if null */
        CatalogVersion?: string;
        /** Unqiue identifier for the store which is being requested. */
        StoreId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetStoreItemsResult */
    export interface GetStoreItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The base catalog that this store is a part of. */
        CatalogVersion?: string;
        /** Additional data about the store. */
        MarketingData?: StoreMarketingModel;
        /** How the store was last updated (Admin or a third party). */
        Source?: string;
        /** Array of items which can be purchased from this store. */
        Store?: StoreItem[];
        /** The ID of this store. */
        StoreId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetTimeRequest */
    export interface GetTimeRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetTimeResult */
    export interface GetTimeResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Current server time when the request was received, in UTC */
        Time: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetTitleDataRequest */
    export interface GetTitleDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Specific keys to search for in the title data (leave null to get all keys) */
        Keys?: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetTitleDataResult */
    export interface GetTitleDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** a dictionary object of key / value pairs */
        Data?: { [key: string]: string | null };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetTitleNewsRequest */
    export interface GetTitleNewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Limits the results to the last n entries. Defaults to 10 if not set. */
        Count?: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetTitleNewsResult */
    export interface GetTitleNewsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of news items. */
        News?: TitleNewsItem[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetTitlePublicKeyRequest */
    export interface GetTitlePublicKeyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId: string;
        /** The shared secret key for this title */
        TitleSharedSecret: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetTitlePublicKeyResult */
    export interface GetTitlePublicKeyResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Base64 encoded RSA CSP byte array blob containing the title's public RSA key */
        RSAPublicKey?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetTradeStatusRequest */
    export interface GetTradeStatusRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Player who opened trade. */
        OfferingPlayerId: string;
        /** Trade identifier as returned by OpenTradeOffer. */
        TradeId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetTradeStatusResponse */
    export interface GetTradeStatusResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Information about the requested trade. */
        Trade?: TradeInfo;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetUserDataRequest */
    export interface GetUserDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The version that currently exists according to the caller. The call will return the data for all of the keys if the
         * version in the system is greater than this.
         */
        IfChangedFromDataVersion?: number;
        /** List of unique keys to load from. */
        Keys?: string[];
        /**
         * Unique PlayFab identifier of the user to load data for. Optional, defaults to yourself if not set. When specified to a
         * PlayFab id of another player, then this will only return public keys for that account.
         */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetUserDataResult */
    export interface GetUserDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** User specific data for this title. */
        Data?: { [key: string]: UserDataRecord };
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetUserInventoryRequest */
    export interface GetUserInventoryRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetUserInventoryResult */
    export interface GetUserInventoryResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of inventory items belonging to the user. */
        Inventory?: ItemInstance[];
        /** Array of virtual currency balance(s) belonging to the user. */
        VirtualCurrency?: { [key: string]: number };
        /** Array of remaining times and timestamps for virtual currencies. */
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetWindowsHelloChallengeRequest */
    export interface GetWindowsHelloChallengeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** SHA256 hash of the PublicKey generated by Windows Hello. */
        PublicKeyHint: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GetWindowsHelloChallengeResponse */
    export interface GetWindowsHelloChallengeResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Server generated challenge to be signed by the user. */
        Challenge?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GooglePlayFabIdPair */
    export interface GooglePlayFabIdPair {
        /** Unique Google identifier for a user. */
        GoogleId?: string;
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Google identifier. */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GrantCharacterToUserRequest */
    export interface GrantCharacterToUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version from which items are to be granted. */
        CatalogVersion?: string;
        /** Non-unique display name of the character being granted (1-20 characters in length). */
        CharacterName: string;
        /**
         * Catalog item identifier of the item in the user's inventory that corresponds to the character in the catalog to be
         * created.
         */
        ItemId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.GrantCharacterToUserResult */
    export interface GrantCharacterToUserResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique identifier tagged to this character. */
        CharacterId?: string;
        /** Type of character that was created. */
        CharacterType?: string;
        /** Indicates whether this character was created successfully. */
        Result: boolean;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ItemInstance */
    export interface ItemInstance {
        /** Game specific comment associated with this instance when it was added to the user inventory. */
        Annotation?: string;
        /** Array of unique items that were awarded when this catalog item was purchased. */
        BundleContents?: string[];
        /**
         * Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or
         * container.
         */
        BundleParent?: string;
        /** Catalog version for the inventory item, when this instance was created. */
        CatalogVersion?: string;
        /** A set of custom key-value pairs on the inventory item. */
        CustomData?: { [key: string]: string | null };
        /** CatalogItem.DisplayName at the time this item was purchased. */
        DisplayName?: string;
        /** Timestamp for when this instance will expire. */
        Expiration?: string;
        /** Class name for the inventory item, as defined in the catalog. */
        ItemClass?: string;
        /** Unique identifier for the inventory item, as defined in the catalog. */
        ItemId?: string;
        /** Unique item identifier for this specific instance of the item. */
        ItemInstanceId?: string;
        /** Timestamp for when this instance was purchased. */
        PurchaseDate?: string;
        /** Total number of remaining uses, if this is a consumable item. */
        RemainingUses?: number;
        /** Currency type for the cost of the catalog item. */
        UnitCurrency?: string;
        /** Cost of the catalog item in the given currency. */
        UnitPrice: number;
        /** The number of uses that were added or removed to this item in this call. */
        UsesIncrementedBy?: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ItemPurchaseRequest */
    export interface ItemPurchaseRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Title-specific text concerning this purchase. */
        Annotation?: string;
        /** Unique ItemId of the item to purchase. */
        ItemId: string;
        /** How many of this item to purchase. */
        Quantity: number;
        /** Items to be upgraded as a result of this purchase (upgraded items are hidden, as they are "replaced" by the new items). */
        UpgradeFromItems?: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.KongregatePlayFabIdPair */
    export interface KongregatePlayFabIdPair {
        /** Unique Kongregate identifier for a user. */
        KongregateId?: string;
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Kongregate identifier. */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkAndroidDeviceIDRequest */
    export interface LinkAndroidDeviceIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Specific model of the user's device. */
        AndroidDevice?: string;
        /** Android device identifier for the user's device. */
        AndroidDeviceId: string;
        /** If another user is already linked to the device, unlink the other user and re-link. */
        ForceLink?: boolean;
        /** Specific Operating System version for the user's device. */
        OS?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkAndroidDeviceIDResult */
    export interface LinkAndroidDeviceIDResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkCustomIDRequest */
    export interface LinkCustomIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Custom unique identifier for the user, generated by the title. */
        CustomId: string;
        /** If another user is already linked to the custom ID, unlink the other user and re-link. */
        ForceLink?: boolean;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkCustomIDResult */
    export interface LinkCustomIDResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkedPlatformAccountModel */
    export interface LinkedPlatformAccountModel {
        /** Linked account email of the user on the platform, if available */
        Email?: string;
        /** Authentication platform */
        Platform?: string;
        /** Unique account identifier of the user on the platform */
        PlatformUserId?: string;
        /** Linked account username of the user on the platform, if available */
        Username?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkFacebookAccountRequest */
    export interface LinkFacebookAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique identifier from Facebook for the user. */
        AccessToken: string;
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkFacebookAccountResult */
    export interface LinkFacebookAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkGameCenterAccountRequest */
    export interface LinkGameCenterAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean;
        /** Game Center identifier for the player account to be linked. */
        GameCenterId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkGameCenterAccountResult */
    export interface LinkGameCenterAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkGoogleAccountRequest */
    export interface LinkGoogleAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean;
        /**
         * Server authentication code obtained on the client by calling getServerAuthCode()
         * (https://developers.google.com/identity/sign-in/android/offline-access) from Google Play for the user.
         */
        ServerAuthCode?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkGoogleAccountResult */
    export interface LinkGoogleAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkIOSDeviceIDRequest */
    export interface LinkIOSDeviceIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Vendor-specific iOS identifier for the user's device. */
        DeviceId: string;
        /** Specific model of the user's device. */
        DeviceModel?: string;
        /** If another user is already linked to the device, unlink the other user and re-link. */
        ForceLink?: boolean;
        /** Specific Operating System version for the user's device. */
        OS?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkIOSDeviceIDResult */
    export interface LinkIOSDeviceIDResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkKongregateAccountRequest */
    export interface LinkKongregateAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Valid session auth ticket issued by Kongregate */
        AuthTicket: string;
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean;
        /** Numeric user ID assigned by Kongregate */
        KongregateId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkKongregateAccountResult */
    export interface LinkKongregateAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkSteamAccountRequest */
    export interface LinkSteamAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean;
        /**
         * Authentication token for the user, returned as a byte array from Steam, and converted to a string (for example, the byte
         * 0x08 should become "08").
         */
        SteamTicket: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkSteamAccountResult */
    export interface LinkSteamAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkTwitchAccountRequest */
    export interface LinkTwitchAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Valid token issued by Twitch */
        AccessToken: string;
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkTwitchAccountResult */
    export interface LinkTwitchAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkWindowsHelloAccountRequest */
    export interface LinkWindowsHelloAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Device name. */
        DeviceName?: string;
        /** If another user is already linked to the account, unlink the other user and re-link. */
        ForceLink?: boolean;
        /** PublicKey generated by Windows Hello. */
        PublicKey: string;
        /** Player's user named used by Windows Hello. */
        UserName: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LinkWindowsHelloAccountResponse */
    export interface LinkWindowsHelloAccountResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ListUsersCharactersRequest */
    export interface ListUsersCharactersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ListUsersCharactersResult */
    export interface ListUsersCharactersResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list of characters. */
        Characters?: CharacterResult[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LocationModel */
    export interface LocationModel {
        /** City name. */
        City?: string;
        /** The two-character continent code for this location */
        ContinentCode?: string;
        /** The two-character ISO 3166-1 country code for the country associated with the location */
        CountryCode?: string;
        /** Latitude coordinate of the geographic location. */
        Latitude?: number;
        /** Longitude coordinate of the geographic location. */
        Longitude?: number;

    }

    type LoginIdentityProvider = "Unknown"
        | "PlayFab"
        | "Custom"
        | "GameCenter"
        | "GooglePlay"
        | "Steam"
        | "XBoxLive"
        | "PSN"
        | "Kongregate"
        | "Facebook"
        | "IOSDevice"
        | "AndroidDevice"
        | "Twitch"
        | "WindowsHello";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginResult */
    export interface LoginResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * If LoginTitlePlayerAccountEntity flag is set on the login request the title_player_account will also be logged in and
         * returned.
         */
        EntityToken?: EntityTokenResponse;
        /** Results for requested info. */
        InfoResultPayload?: GetPlayerCombinedInfoResultPayload;
        /** The time of this user's previous login. If there was no previous login, then it's DateTime.MinValue */
        LastLoginTime?: string;
        /** True if the account was newly created on this login. */
        NewlyCreated: boolean;
        /** Player's unique PlayFabId. */
        PlayFabId?: string;
        /** Unique token authorizing the user and game at the server level, for the current session. */
        SessionTicket?: string;
        /** Settings specific to this user. */
        SettingsForUser?: UserSettings;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithAndroidDeviceIDRequest */
    export interface LoginWithAndroidDeviceIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Specific model of the user's device. */
        AndroidDevice?: string;
        /** Android device identifier for the user's device. */
        AndroidDeviceId?: string;
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Specific Operating System version for the user's device. */
        OS?: string;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithCustomIDRequest */
    export interface LoginWithCustomIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean;
        /** Custom unique identifier for the user, generated by the title. */
        CustomId?: string;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithEmailAddressRequest */
    export interface LoginWithEmailAddressRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Email address for the account. */
        Email: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Password for the PlayFab account (6-100 characters) */
        Password: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithFacebookRequest */
    export interface LoginWithFacebookRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique identifier from Facebook for the user. */
        AccessToken: string;
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithGameCenterRequest */
    export interface LoginWithGameCenterRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Unique Game Center player id. */
        PlayerId?: string;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithGoogleAccountRequest */
    export interface LoginWithGoogleAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /**
         * OAuth 2.0 server authentication code obtained on the client by calling the getServerAuthCode()
         * (https://developers.google.com/identity/sign-in/android/offline-access) Google client API.
         */
        ServerAuthCode?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithIOSDeviceIDRequest */
    export interface LoginWithIOSDeviceIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean;
        /** Vendor-specific iOS identifier for the user's device. */
        DeviceId?: string;
        /** Specific model of the user's device. */
        DeviceModel?: string;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Specific Operating System version for the user's device. */
        OS?: string;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithKongregateRequest */
    export interface LoginWithKongregateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Token issued by Kongregate's client API for the user. */
        AuthTicket?: string;
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Numeric user ID assigned by Kongregate */
        KongregateId?: string;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithPlayFabRequest */
    export interface LoginWithPlayFabRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Password for the PlayFab account (6-100 characters) */
        Password: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;
        /** PlayFab username for the account. */
        Username: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithSteamRequest */
    export interface LoginWithSteamRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /**
         * Authentication token for the user, returned as a byte array from Steam, and converted to a string (for example, the byte
         * 0x08 should become "08").
         */
        SteamTicket?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithTwitchRequest */
    export interface LoginWithTwitchRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Token issued by Twitch's API for the user. */
        AccessToken?: string;
        /** Automatically create a PlayFab account if one is not currently linked to this ID. */
        CreateAccount?: boolean;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LoginWithWindowsHelloRequest */
    export interface LoginWithWindowsHelloRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The signed response from the user for the Challenge. */
        ChallengeSignature: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** SHA256 hash of the PublicKey generated by Windows Hello. */
        PublicKeyHint: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.LogStatement */
    export interface LogStatement {
        /** Optional object accompanying the message as contextual information */
        Data?: any;
        /** 'Debug', 'Info', or 'Error' */
        Level?: string;
        Message?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.MatchmakeRequest */
    export interface MatchmakeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Build version to match against. [Note: Required if LobbyId is not specified] */
        BuildVersion?: string;
        /** Character to use for stats based matching. Leave null to use account stats. */
        CharacterId?: string;
        /** Game mode to match make against. [Note: Required if LobbyId is not specified] */
        GameMode?: string;
        /** Lobby identifier to match make against. This is used to select a specific Game Server Instance. */
        LobbyId?: string;
        /** Region to match make against. [Note: Required if LobbyId is not specified] */
        Region?: string;
        /** Start a game session if one with an open slot is not found. Defaults to true. */
        StartNewIfNoneFound?: boolean;
        /** Player statistic to use in finding a match. May be null for no stat-based matching. */
        StatisticName?: string;
        /** Filter to include and/or exclude Game Server Instances associated with certain Tags */
        TagFilter?: CollectionFilter;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.MatchmakeResult */
    export interface MatchmakeResult extends PlayFabModule.IPlayFabResultCommon  {
        /** timestamp for when the server will expire, if applicable */
        Expires?: string;
        /** unique lobby identifier of the server matched */
        LobbyID?: string;
        /** time in milliseconds the application is configured to wait on matchmaking results */
        PollWaitTimeMS?: number;
        /** IPV4 address of the server */
        ServerHostname?: string;
        /** IPV6 address of the server */
        ServerIPV6Address?: string;
        /** port number to use for non-http communications with the server */
        ServerPort?: number;
        /** result of match making process */
        Status?: string;
        /** server authorization ticket (used by RedeemMatchmakerTicket to validate user insertion into the game) */
        Ticket?: string;

    }

    type MatchmakeStatus = "Complete"
        | "Waiting"
        | "GameNotFound"
        | "NoAvailableSlots"
        | "SessionClosed";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.MembershipModel */
    export interface MembershipModel {
        /** Whether this membership is active. That is, whether the MembershipExpiration time has been reached. */
        IsActive: boolean;
        /** The time this membership expires */
        MembershipExpiration: string;
        /** The id of the membership */
        MembershipId?: string;
        /**
         * Membership expirations can be explicitly overridden (via game manager or the admin api). If this membership has been
         * overridden, this will be the new expiration time.
         */
        OverrideExpiration?: string;
        /** The list of subscriptions that this player has for this membership */
        Subscriptions?: SubscriptionModel[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ModifyUserVirtualCurrencyResult */
    export interface ModifyUserVirtualCurrencyResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Balance of the virtual currency after modification. */
        Balance: number;
        /**
         * Amount added or subtracted from the user's virtual currency. Maximum VC balance is Int32 (2,147,483,647). Any increase
         * over this value will be discarded.
         */
        BalanceChange: number;
        /** User currency was subtracted from. */
        PlayFabId?: string;
        /** Name of the virtual currency which was modified. */
        VirtualCurrency?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.OpenTradeRequest */
    export interface OpenTradeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Players who are allowed to accept the trade. If null, the trade may be accepted by any player. If empty, the trade may
         * not be accepted by any player.
         */
        AllowedPlayerIds?: string[];
        /** Player inventory items offered for trade. If not set, the trade is effectively a gift request */
        OfferedInventoryInstanceIds?: string[];
        /** Catalog items accepted for the trade. If not set, the trade is effectively a gift. */
        RequestedCatalogItemIds?: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.OpenTradeResponse */
    export interface OpenTradeResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The information about the trade that was just opened. */
        Trade?: TradeInfo;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.PayForPurchaseRequest */
    export interface PayForPurchaseRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Currency to use to fund the purchase. */
        Currency: string;
        /** Purchase order identifier returned from StartPurchase. */
        OrderId: string;
        /** Payment provider to use to fund the purchase. */
        ProviderName: string;
        /** Payment provider transaction identifier. Required for Facebook Payments. */
        ProviderTransactionId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.PayForPurchaseResult */
    export interface PayForPurchaseResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Local credit applied to the transaction (provider specific). */
        CreditApplied: number;
        /** Purchase order identifier. */
        OrderId?: string;
        /** Provider used for the transaction. */
        ProviderData?: string;
        /** A token generated by the provider to authenticate the request (provider-specific). */
        ProviderToken?: string;
        /** URL to the purchase provider page that details the purchase. */
        PurchaseConfirmationPageURL?: string;
        /** Currency for the transaction, may be a virtual currency or real money. */
        PurchaseCurrency?: string;
        /** Cost of the transaction. */
        PurchasePrice: number;
        /** Status of the transaction. */
        Status?: string;
        /** Virtual currencies granted by the transaction, if any. */
        VCAmount?: { [key: string]: number };
        /** Current virtual currency balances for the user. */
        VirtualCurrency?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.PaymentOption */
    export interface PaymentOption {
        /** Specific currency to use to fund the purchase. */
        Currency?: string;
        /** Amount of the specified currency needed for the purchase. */
        Price: number;
        /** Name of the purchase provider for this option. */
        ProviderName?: string;
        /** Amount of existing credit the user has with the provider. */
        StoreCredit: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.PlayerLeaderboardEntry */
    export interface PlayerLeaderboardEntry {
        /** Title-specific display name of the user for this leaderboard entry. */
        DisplayName?: string;
        /** PlayFab unique identifier of the user for this leaderboard entry. */
        PlayFabId?: string;
        /** User's overall position in the leaderboard. */
        Position: number;
        /** The profile of the user, if requested. */
        Profile?: PlayerProfileModel;
        /** Specific value of the user's statistic. */
        StatValue: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.PlayerProfileModel */
    export interface PlayerProfileModel {
        /** List of advertising campaigns the player has been attributed to */
        AdCampaignAttributions?: AdCampaignAttributionModel[];
        /** URL of the player's avatar image */
        AvatarUrl?: string;
        /** If the player is currently banned, the UTC Date when the ban expires */
        BannedUntil?: string;
        /** List of all contact email info associated with the player account */
        ContactEmailAddresses?: ContactEmailInfoModel[];
        /** Player record created */
        Created?: string;
        /** Player display name */
        DisplayName?: string;
        /** UTC time when the player most recently logged in to the title */
        LastLogin?: string;
        /** List of all authentication systems linked to this player account */
        LinkedAccounts?: LinkedPlatformAccountModel[];
        /** List of geographic locations from which the player has logged in to the title */
        Locations?: LocationModel[];
        /** List of memberships for the player, along with whether are expired. */
        Memberships?: MembershipModel[];
        /** Player account origination */
        Origination?: string;
        /** PlayFab player account unique identifier */
        PlayerId?: string;
        /** Publisher this player belongs to */
        PublisherId?: string;
        /** List of configured end points registered for sending the player push notifications */
        PushNotificationRegistrations?: PushNotificationRegistrationModel[];
        /** List of leaderboard statistic values for the player */
        Statistics?: StatisticModel[];
        /** List of player's tags for segmentation */
        Tags?: TagModel[];
        /** Title ID this player profile applies to */
        TitleId?: string;
        /**
         * Sum of the player's purchases made with real-money currencies, converted to US dollars equivalent and represented as a
         * whole number of cents (1/100 USD).       For example, 999 indicates nine dollars and ninety-nine cents.
         */
        TotalValueToDateInUSD?: number;
        /** List of the player's lifetime purchase totals, summed by real-money currency */
        ValuesToDate?: ValueToDateModel[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.PlayerProfileViewConstraints */
    export interface PlayerProfileViewConstraints {
        /** Whether to show player's avatar URL. Defaults to false */
        ShowAvatarUrl: boolean;
        /** Whether to show the banned until time. Defaults to false */
        ShowBannedUntil: boolean;
        /** Whether to show campaign attributions. Defaults to false */
        ShowCampaignAttributions: boolean;
        /** Whether to show contact email addresses. Defaults to false */
        ShowContactEmailAddresses: boolean;
        /** Whether to show the created date. Defaults to false */
        ShowCreated: boolean;
        /** Whether to show the display name. Defaults to false */
        ShowDisplayName: boolean;
        /** Whether to show the last login time. Defaults to false */
        ShowLastLogin: boolean;
        /** Whether to show the linked accounts. Defaults to false */
        ShowLinkedAccounts: boolean;
        /** Whether to show player's locations. Defaults to false */
        ShowLocations: boolean;
        /** Whether to show player's membership information. Defaults to false */
        ShowMemberships: boolean;
        /** Whether to show origination. Defaults to false */
        ShowOrigination: boolean;
        /** Whether to show push notification registrations. Defaults to false */
        ShowPushNotificationRegistrations: boolean;
        /** Reserved for future development */
        ShowStatistics: boolean;
        /** Whether to show tags. Defaults to false */
        ShowTags: boolean;
        /** Whether to show the total value to date in usd. Defaults to false */
        ShowTotalValueToDateInUsd: boolean;
        /** Whether to show the values to date. Defaults to false */
        ShowValuesToDate: boolean;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.PlayerStatisticVersion */
    export interface PlayerStatisticVersion {
        /** time when the statistic version became active */
        ActivationTime: string;
        /** time when the statistic version became inactive due to statistic version incrementing */
        DeactivationTime?: string;
        /** time at which the statistic version was scheduled to become active, based on the configured ResetInterval */
        ScheduledActivationTime?: string;
        /** time at which the statistic version was scheduled to become inactive, based on the configured ResetInterval */
        ScheduledDeactivationTime?: string;
        /** name of the statistic when the version became active */
        StatisticName?: string;
        /** version of the statistic */
        Version: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.PurchaseItemRequest */
    export interface PurchaseItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version for the items to be purchased (defaults to most recent version. */
        CatalogVersion?: string;
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /** Unique identifier of the item to purchase. */
        ItemId: string;
        /** Price the client expects to pay for the item (in case a new catalog or store was uploaded, with new prices). */
        Price: number;
        /** Store to buy this item through. If not set, prices default to those in the catalog. */
        StoreId?: string;
        /** Virtual currency to use to purchase the item. */
        VirtualCurrency: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.PurchaseItemResult */
    export interface PurchaseItemResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Details for the items purchased. */
        Items?: ItemInstance[];

    }

    type PushNotificationPlatform = "ApplePushNotificationService"
        | "GoogleCloudMessaging";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.PushNotificationRegistrationModel */
    export interface PushNotificationRegistrationModel {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string;
        /** Push notification platform */
        Platform?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RedeemCouponRequest */
    export interface RedeemCouponRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version of the coupon. If null, uses the default catalog */
        CatalogVersion?: string;
        /** Optional identifier for the Character that should receive the item. If null, item is added to the player */
        CharacterId?: string;
        /** Generated coupon code to redeem. */
        CouponCode: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RedeemCouponResult */
    export interface RedeemCouponResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Items granted to the player as a result of redeeming the coupon. */
        GrantedItems?: ItemInstance[];

    }

    type Region = "USCentral"
        | "USEast"
        | "EUWest"
        | "Singapore"
        | "Japan"
        | "Brazil"
        | "Australia";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RegionInfo */
    export interface RegionInfo {
        /** indicates whether the server specified is available in this region */
        Available: boolean;
        /** name of the region */
        Name?: string;
        /** url to ping to get roundtrip time */
        PingUrl?: string;
        /** unique identifier for the region */
        Region?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RegisterForIOSPushNotificationRequest */
    export interface RegisterForIOSPushNotificationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Message to display when confirming push notification. */
        ConfirmationMessage?: string;
        /** Unique token generated by the Apple Push Notification service when the title registered to receive push notifications. */
        DeviceToken: string;
        /** If true, send a test push message immediately after sucessful registration. Defaults to false. */
        SendPushNotificationConfirmation?: boolean;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RegisterForIOSPushNotificationResult */
    export interface RegisterForIOSPushNotificationResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RegisterPlayFabUserRequest */
    export interface RegisterPlayFabUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An optional parameter for setting the display name for this title (3-25 characters). */
        DisplayName?: string;
        /** User email address attached to their account */
        Email?: string;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Password for the PlayFab account (6-100 characters) */
        Password?: string;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /**
         * An optional parameter that specifies whether both the username and email parameters are required. If true, both
         * parameters are required; if false, the user must supply either the username or email parameter. The default value is
         * true.
         */
        RequireBothUsernameAndEmail?: boolean;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;
        /** PlayFab username for the account (3-20 characters) */
        Username?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RegisterPlayFabUserResult */
    export interface RegisterPlayFabUserResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * If LoginTitlePlayerAccountEntity flag is set on the login request the title_player_account will also be logged in and
         * returned.
         */
        EntityToken?: EntityTokenResponse;
        /** PlayFab unique identifier for this newly created account. */
        PlayFabId?: string;
        /** Unique token identifying the user and game at the server level, for the current session. */
        SessionTicket?: string;
        /** Settings specific to this user. */
        SettingsForUser?: UserSettings;
        /** PlayFab unique user name. */
        Username?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RegisterWithWindowsHelloRequest */
    export interface RegisterWithWindowsHelloRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Device name. */
        DeviceName?: string;
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Flags for which pieces of info to return for the user. */
        InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
        /** Flag to automatically login the player's title_player_account and return the associated entity token. */
        LoginTitlePlayerAccountEntity?: boolean;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /** PublicKey generated by Windows Hello. */
        PublicKey?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId: string;
        /** Player's user name used by Windows Hello. */
        UserName?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RemoveContactEmailRequest */
    export interface RemoveContactEmailRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RemoveContactEmailResult */
    export interface RemoveContactEmailResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RemoveFriendRequest */
    export interface RemoveFriendRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** PlayFab identifier of the friend account which is to be removed. */
        FriendPlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RemoveFriendResult */
    export interface RemoveFriendResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RemoveGenericIDRequest */
    export interface RemoveGenericIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Generic service identifier to be removed from the player. */
        GenericId: GenericServiceId;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RemoveGenericIDResult */
    export interface RemoveGenericIDResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RemoveSharedGroupMembersRequest */
    export interface RemoveSharedGroupMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabIds: string[];
        /** Unique identifier for the shared group. */
        SharedGroupId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RemoveSharedGroupMembersResult */
    export interface RemoveSharedGroupMembersResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ReportPlayerClientRequest */
    export interface ReportPlayerClientRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Optional additional comment by reporting player. */
        Comment?: string;
        /** Unique PlayFab identifier of the reported player. */
        ReporteeId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ReportPlayerClientResult */
    export interface ReportPlayerClientResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The number of remaining reports which may be filed today. */
        SubmissionsRemaining: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RestoreIOSPurchasesRequest */
    export interface RestoreIOSPurchasesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Base64 encoded receipt data, passed back by the App Store as a result of a successful purchase. */
        ReceiptData: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.RestoreIOSPurchasesResult */
    export interface RestoreIOSPurchasesResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ScriptExecutionError */
    export interface ScriptExecutionError {
        /**
         * Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded,
         * CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError
         */
        Error?: string;
        /** Details about the error */
        Message?: string;
        /** Point during the execution of the script at which the error occurred, if any */
        StackTrace?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.SendAccountRecoveryEmailRequest */
    export interface SendAccountRecoveryEmailRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** User email address attached to their account */
        Email: string;
        /** The email template id of the account recovery email template to send. */
        EmailTemplateId?: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.SendAccountRecoveryEmailResult */
    export interface SendAccountRecoveryEmailResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.SetFriendTagsRequest */
    export interface SetFriendTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** PlayFab identifier of the friend account to which the tag(s) should be applied. */
        FriendPlayFabId: string;
        /** Array of tags to set on the friend account. */
        Tags: string[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.SetFriendTagsResult */
    export interface SetFriendTagsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.SetPlayerSecretRequest */
    export interface SetPlayerSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
        EncryptedRequest?: string;
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.SetPlayerSecretResult */
    export interface SetPlayerSecretResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.SharedGroupDataRecord */
    export interface SharedGroupDataRecord {
        /** Timestamp for when this data was last updated. */
        LastUpdated: string;
        /** Unique PlayFab identifier of the user to last update this value. */
        LastUpdatedBy?: string;
        /** Indicates whether this data can be read by all users (public) or only members of the group (private). */
        Permission?: string;
        /** Data stored for the specified group data key. */
        Value?: string;

    }

    type SourceType = "Admin"
        | "BackEnd"
        | "GameClient"
        | "GameServer"
        | "Partner"
        | "Custom"
        | "API";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.StartGameRequest */
    export interface StartGameRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** version information for the build of the game server which is to be started */
        BuildVersion: string;
        /** character to use for stats based matching. Leave null to use account stats */
        CharacterId?: string;
        /** custom command line argument when starting game server process */
        CustomCommandLineData?: string;
        /** the title-defined game mode this server is to be running (defaults to 0 if there is only one mode) */
        GameMode: string;
        /** the region to associate this server with for match filtering */
        Region: string;
        /** player statistic for others to use in finding this game. May be null for no stat-based matching */
        StatisticName?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.StartGameResult */
    export interface StartGameResult extends PlayFabModule.IPlayFabResultCommon  {
        /** timestamp for when the server should expire, if applicable */
        Expires?: string;
        /** unique identifier for the lobby of the server started */
        LobbyID?: string;
        /** password required to log into the server */
        Password?: string;
        /** server IPV4 address */
        ServerHostname?: string;
        /** server IPV6 address */
        ServerIPV6Address?: string;
        /** port on the server to be used for communication */
        ServerPort?: number;
        /** unique identifier for the server */
        Ticket?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.StartPurchaseRequest */
    export interface StartPurchaseRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version for the items to be purchased. Defaults to most recent catalog. */
        CatalogVersion?: string;
        /** Array of items to purchase. */
        Items: ItemPurchaseRequest[];
        /** Store through which to purchase items. If not set, prices will be pulled from the catalog itself. */
        StoreId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.StartPurchaseResult */
    export interface StartPurchaseResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Cart items to be purchased. */
        Contents?: CartItem[];
        /** Purchase order identifier. */
        OrderId?: string;
        /** Available methods by which the user can pay. */
        PaymentOptions?: PaymentOption[];
        /** Current virtual currency totals for the user. */
        VirtualCurrencyBalances?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.StatisticModel */
    export interface StatisticModel {
        /** Statistic name */
        Name?: string;
        /** Statistic value */
        Value: number;
        /** Statistic version (0 if not a versioned statistic) */
        Version: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.StatisticNameVersion */
    export interface StatisticNameVersion {
        /** unique name of the statistic */
        StatisticName: string;
        /** the version of the statistic to be returned */
        Version: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.StatisticUpdate */
    export interface StatisticUpdate {
        /** unique name of the statistic */
        StatisticName: string;
        /** statistic value for the player */
        Value: number;
        /**
         * for updates to an existing statistic value for a player, the version of the statistic when it was loaded. Null when
         * setting the statistic value for the first time.
         */
        Version?: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.StatisticValue */
    export interface StatisticValue {
        /** unique name of the statistic */
        StatisticName?: string;
        /** statistic value for the player */
        Value: number;
        /** for updates to an existing statistic value for a player, the version of the statistic when it was loaded */
        Version: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.SteamPlayFabIdPair */
    export interface SteamPlayFabIdPair {
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Steam identifier. */
        PlayFabId?: string;
        /** Unique Steam identifier for a user. */
        SteamStringId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.StoreItem */
    export interface StoreItem {
        /** Store specific custom data. The data only exists as part of this store; it is not transferred to item instances */
        CustomData?: any;
        /** Intended display position for this item. Note that 0 is the first position */
        DisplayPosition?: number;
        /**
         * Unique identifier of the item as it exists in the catalog - note that this must exactly match the ItemId from the
         * catalog
         */
        ItemId: string;
        /** Override prices for this item for specific currencies */
        RealCurrencyPrices?: { [key: string]: number };
        /** Override prices for this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies) */
        VirtualCurrencyPrices?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.StoreMarketingModel */
    export interface StoreMarketingModel {
        /** Tagline for a store. */
        Description?: string;
        /** Display name of a store as it will appear to users. */
        DisplayName?: string;
        /** Custom data about a store. */
        Metadata?: any;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.SubscriptionModel */
    export interface SubscriptionModel {
        /** When this subscription expires. */
        Expiration: string;
        /** The time the subscription was orignially purchased */
        InitialSubscriptionTime: string;
        /** Whether this subscription is currently active. That is, if Expiration > now. */
        IsActive: boolean;
        /** The status of this subscription, according to the subscription provider. */
        Status?: string;
        /** The id for this subscription */
        SubscriptionId?: string;
        /** The item id for this subscription from the primary catalog */
        SubscriptionItemId?: string;
        /** The provider for this subscription. Apple or Google Play are supported today. */
        SubscriptionProvider?: string;

    }

    type SubscriptionProviderStatus = "NoError"
        | "Cancelled"
        | "UnknownError"
        | "BillingError"
        | "ProductUnavailable"
        | "CustomerDidNotAcceptPriceChange"
        | "FreeTrial"
        | "PaymentPending";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.SubtractUserVirtualCurrencyRequest */
    export interface SubtractUserVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Amount to be subtracted from the user balance of the specified virtual currency. */
        Amount: number;
        /** Name of the virtual currency which is to be decremented. */
        VirtualCurrency: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.TagModel */
    export interface TagModel {
        /** Full value of the tag, including namespace */
        TagValue?: string;

    }

    type TitleActivationStatus = "None"
        | "ActivatedTitleKey"
        | "PendingSteam"
        | "ActivatedSteam"
        | "RevokedSteam";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.TitleNewsItem */
    export interface TitleNewsItem {
        /** News item text. */
        Body?: string;
        /** Unique identifier of news item. */
        NewsId?: string;
        /** Date and time when the news items was posted. */
        Timestamp: string;
        /** Title of the news item. */
        Title?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.TradeInfo */
    export interface TradeInfo {
        /** Item instances from the accepting player that are used to fulfill the trade. If null, no one has accepted the trade. */
        AcceptedInventoryInstanceIds?: string[];
        /** The PlayFab ID of the player who accepted the trade. If null, no one has accepted the trade. */
        AcceptedPlayerId?: string;
        /** An optional list of players allowed to complete this trade. If null, anybody can complete the trade. */
        AllowedPlayerIds?: string[];
        /** If set, The UTC time when this trade was canceled. */
        CancelledAt?: string;
        /** If set, The UTC time when this trade was fulfilled. */
        FilledAt?: string;
        /** If set, The UTC time when this trade was made invalid. */
        InvalidatedAt?: string;
        /** The catalogItem Ids of the item instances being offered. */
        OfferedCatalogItemIds?: string[];
        /** The itemInstance Ids that are being offered. */
        OfferedInventoryInstanceIds?: string[];
        /** The PlayFabId for the offering player. */
        OfferingPlayerId?: string;
        /** The UTC time when this trade was created. */
        OpenedAt?: string;
        /** The catalogItem Ids requested in exchange. */
        RequestedCatalogItemIds?: string[];
        /** Describes the current state of this trade. */
        Status?: string;
        /** The identifier for this trade. */
        TradeId?: string;

    }

    type TradeStatus = "Invalid"
        | "Opening"
        | "Open"
        | "Accepting"
        | "Accepted"
        | "Filled"
        | "Cancelled";

    type TransactionStatus = "CreateCart"
        | "Init"
        | "Approved"
        | "Succeeded"
        | "FailedByProvider"
        | "DisputePending"
        | "RefundPending"
        | "Refunded"
        | "RefundFailed"
        | "ChargedBack"
        | "FailedByUber"
        | "FailedByPlayFab"
        | "Revoked"
        | "TradePending"
        | "Traded"
        | "Upgraded"
        | "StackPending"
        | "Stacked"
        | "Other"
        | "Failed";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.TwitchPlayFabIdPair */
    export interface TwitchPlayFabIdPair {
        /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Twitch identifier. */
        PlayFabId?: string;
        /** Unique Twitch identifier for a user. */
        TwitchId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkAndroidDeviceIDRequest */
    export interface UnlinkAndroidDeviceIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Android device identifier for the user's device. If not specified, the most recently signed in Android Device ID will be
         * used.
         */
        AndroidDeviceId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkAndroidDeviceIDResult */
    export interface UnlinkAndroidDeviceIDResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkCustomIDRequest */
    export interface UnlinkCustomIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Custom unique identifier for the user, generated by the title. If not specified, the most recently signed in Custom ID
         * will be used.
         */
        CustomId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkCustomIDResult */
    export interface UnlinkCustomIDResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkFacebookAccountRequest */
    export interface UnlinkFacebookAccountRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkFacebookAccountResult */
    export interface UnlinkFacebookAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkGameCenterAccountRequest */
    export interface UnlinkGameCenterAccountRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkGameCenterAccountResult */
    export interface UnlinkGameCenterAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkGoogleAccountRequest */
    export interface UnlinkGoogleAccountRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkGoogleAccountResult */
    export interface UnlinkGoogleAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkIOSDeviceIDRequest */
    export interface UnlinkIOSDeviceIDRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Vendor-specific iOS identifier for the user's device. If not specified, the most recently signed in iOS Device ID will
         * be used.
         */
        DeviceId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkIOSDeviceIDResult */
    export interface UnlinkIOSDeviceIDResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkKongregateAccountRequest */
    export interface UnlinkKongregateAccountRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkKongregateAccountResult */
    export interface UnlinkKongregateAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkSteamAccountRequest */
    export interface UnlinkSteamAccountRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkSteamAccountResult */
    export interface UnlinkSteamAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkTwitchAccountRequest */
    export interface UnlinkTwitchAccountRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkTwitchAccountResult */
    export interface UnlinkTwitchAccountResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkWindowsHelloAccountRequest */
    export interface UnlinkWindowsHelloAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** SHA256 hash of the PublicKey generated by Windows Hello. */
        PublicKeyHint: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlinkWindowsHelloAccountResponse */
    export interface UnlinkWindowsHelloAccountResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlockContainerInstanceRequest */
    export interface UnlockContainerInstanceRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Specifies the catalog version that should be used to determine container contents. If unspecified, uses catalog
         * associated with the item instance.
         */
        CatalogVersion?: string;
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /** ItemInstanceId of the container to unlock. */
        ContainerItemInstanceId: string;
        /**
         * ItemInstanceId of the key that will be consumed by unlocking this container. If the container requires a key, this
         * parameter is required.
         */
        KeyItemInstanceId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlockContainerItemRequest */
    export interface UnlockContainerItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Specifies the catalog version that should be used to determine container contents. If unspecified, uses default/primary
         * catalog.
         */
        CatalogVersion?: string;
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /** Catalog ItemId of the container type to unlock. */
        ContainerItemId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UnlockContainerItemResult */
    export interface UnlockContainerItemResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Items granted to the player as a result of unlocking the container. */
        GrantedItems?: ItemInstance[];
        /** Unique instance identifier of the container unlocked. */
        UnlockedItemInstanceId?: string;
        /** Unique instance identifier of the key used to unlock the container, if applicable. */
        UnlockedWithItemInstanceId?: string;
        /** Virtual currency granted to the player as a result of unlocking the container. */
        VirtualCurrency?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateAvatarUrlRequest */
    export interface UpdateAvatarUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** URL of the avatar image. If empty, it removes the existing avatar URL. */
        ImageUrl: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateCharacterDataRequest */
    export interface UpdateCharacterDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string;
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null };
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[];
        /** Permission to be applied to all user data keys written in this request. Defaults to "private" if not set. */
        Permission?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateCharacterDataResult */
    export interface UpdateCharacterDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateCharacterStatisticsRequest */
    export interface UpdateCharacterStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string;
        /** Statistics to be updated with the provided values. */
        CharacterStatistics?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateCharacterStatisticsResult */
    export interface UpdateCharacterStatisticsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdatePlayerStatisticsRequest */
    export interface UpdatePlayerStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Statistics to be updated with the provided values */
        Statistics: StatisticUpdate[];

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdatePlayerStatisticsResult */
    export interface UpdatePlayerStatisticsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateSharedGroupDataRequest */
    export interface UpdateSharedGroupDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null };
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[];
        /** Permission to be applied to all user data keys in this request. */
        Permission?: string;
        /** Unique identifier for the shared group. */
        SharedGroupId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateSharedGroupDataResult */
    export interface UpdateSharedGroupDataResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateUserDataRequest */
    export interface UpdateUserDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null };
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[];
        /**
         * Permission to be applied to all user data keys written in this request. Defaults to "private" if not set. This is used
         * for requests by one player for information about another player; those requests will only return Public keys.
         */
        Permission?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateUserDataResult */
    export interface UpdateUserDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateUserTitleDisplayNameRequest */
    export interface UpdateUserTitleDisplayNameRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** New title display name for the user - must be between 3 and 25 characters. */
        DisplayName: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UpdateUserTitleDisplayNameResult */
    export interface UpdateUserTitleDisplayNameResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Current title display name for the user (this will be the original display name if the rename attempt failed). */
        DisplayName?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserAccountInfo */
    export interface UserAccountInfo {
        /** User Android device information, if an Android device has been linked */
        AndroidDeviceInfo?: UserAndroidDeviceInfo;
        /** Timestamp indicating when the user account was created */
        Created: string;
        /** Custom ID information, if a custom ID has been assigned */
        CustomIdInfo?: UserCustomIdInfo;
        /** User Facebook information, if a Facebook account has been linked */
        FacebookInfo?: UserFacebookInfo;
        /** User Gamecenter information, if a Gamecenter account has been linked */
        GameCenterInfo?: UserGameCenterInfo;
        /** User Google account information, if a Google account has been linked */
        GoogleInfo?: UserGoogleInfo;
        /** User iOS device information, if an iOS device has been linked */
        IosDeviceInfo?: UserIosDeviceInfo;
        /** User Kongregate account information, if a Kongregate account has been linked */
        KongregateInfo?: UserKongregateInfo;
        /** Unique identifier for the user account */
        PlayFabId?: string;
        /** Personal information for the user which is considered more sensitive */
        PrivateInfo?: UserPrivateAccountInfo;
        /** User PSN account information, if a PSN account has been linked */
        PsnInfo?: UserPsnInfo;
        /** User Steam information, if a Steam account has been linked */
        SteamInfo?: UserSteamInfo;
        /** Title-specific information for the user account */
        TitleInfo?: UserTitleInfo;
        /** User Twitch account information, if a Twitch account has been linked */
        TwitchInfo?: UserTwitchInfo;
        /** User account name in the PlayFab service */
        Username?: string;
        /** User XBox account information, if a XBox account has been linked */
        XboxInfo?: UserXboxInfo;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserAndroidDeviceInfo */
    export interface UserAndroidDeviceInfo {
        /** Android device ID */
        AndroidDeviceId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserCustomIdInfo */
    export interface UserCustomIdInfo {
        /** Custom ID */
        CustomId?: string;

    }

    type UserDataPermission = "Private"
        | "Public";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserDataRecord */
    export interface UserDataRecord {
        /** Timestamp for when this data was last updated. */
        LastUpdated: string;
        /**
         * Indicates whether this data can be read by all users (public) or only the user (private). This is used for GetUserData
         * requests being made by one player about another player.
         */
        Permission?: string;
        /** Data stored for the specified user data key. */
        Value?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserFacebookInfo */
    export interface UserFacebookInfo {
        /** Facebook identifier */
        FacebookId?: string;
        /** Facebook full name */
        FullName?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserGameCenterInfo */
    export interface UserGameCenterInfo {
        /** Gamecenter identifier */
        GameCenterId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserGoogleInfo */
    export interface UserGoogleInfo {
        /** Email address of the Google account */
        GoogleEmail?: string;
        /** Gender information of the Google account */
        GoogleGender?: string;
        /** Google ID */
        GoogleId?: string;
        /** Locale of the Google account */
        GoogleLocale?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserIosDeviceInfo */
    export interface UserIosDeviceInfo {
        /** iOS device ID */
        IosDeviceId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserKongregateInfo */
    export interface UserKongregateInfo {
        /** Kongregate ID */
        KongregateId?: string;
        /** Kongregate Username */
        KongregateName?: string;

    }

    type UserOrigination = "Organic"
        | "Steam"
        | "Google"
        | "Amazon"
        | "Facebook"
        | "Kongregate"
        | "GamersFirst"
        | "Unknown"
        | "IOS"
        | "LoadTest"
        | "Android"
        | "PSN"
        | "GameCenter"
        | "CustomId"
        | "XboxLive"
        | "Parse"
        | "Twitch"
        | "WindowsHello";

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserPrivateAccountInfo */
    export interface UserPrivateAccountInfo {
        /** user email address */
        Email?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserPsnInfo */
    export interface UserPsnInfo {
        /** PSN account ID */
        PsnAccountId?: string;
        /** PSN online ID */
        PsnOnlineId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserSettings */
    export interface UserSettings {
        /** Boolean for whether this player is eligible for gathering device info. */
        GatherDeviceInfo: boolean;
        /** Boolean for whether this player should report OnFocus play-time tracking. */
        GatherFocusInfo: boolean;
        /** Boolean for whether this player is eligible for ad tracking. */
        NeedsAttribution: boolean;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserSteamInfo */
    export interface UserSteamInfo {
        /** what stage of game ownership the user is listed as being in, from Steam */
        SteamActivationStatus?: string;
        /** the country in which the player resides, from Steam data */
        SteamCountry?: string;
        /** currency type set in the user Steam account */
        SteamCurrency?: string;
        /** Steam identifier */
        SteamId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserTitleInfo */
    export interface UserTitleInfo {
        /** URL to the player's avatar. */
        AvatarUrl?: string;
        /**
         * timestamp indicating when the user was first associated with this game (this can differ significantly from when the user
         * first registered with PlayFab)
         */
        Created: string;
        /** name of the user, as it is displayed in-game */
        DisplayName?: string;
        /**
         * timestamp indicating when the user first signed into this game (this can differ from the Created timestamp, as other
         * events, such as issuing a beta key to the user, can associate the title to the user)
         */
        FirstLogin?: string;
        /** boolean indicating whether or not the user is currently banned for a title */
        isBanned?: boolean;
        /** timestamp for the last user login for this title */
        LastLogin?: string;
        /** source by which the user first joined the game, if known */
        Origination?: string;
        /** Title player account entity for this user */
        TitlePlayerAccount?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserTwitchInfo */
    export interface UserTwitchInfo {
        /** Twitch ID */
        TwitchId?: string;
        /** Twitch Username */
        TwitchUserName?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.UserXboxInfo */
    export interface UserXboxInfo {
        /** XBox user ID */
        XboxUserId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ValidateAmazonReceiptRequest */
    export interface ValidateAmazonReceiptRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version to use when granting receipt item. If null, defaults to primary catalog. */
        CatalogVersion?: string;
        /** Currency used for the purchase. */
        CurrencyCode: string;
        /** Amount of the stated currency paid for the object. */
        PurchasePrice: number;
        /** ReceiptId returned by the Amazon App Store in-app purchase API */
        ReceiptId: string;
        /** AmazonId of the user making the purchase as returned by the Amazon App Store in-app purchase API */
        UserId: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ValidateAmazonReceiptResult */
    export interface ValidateAmazonReceiptResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ValidateGooglePlayPurchaseRequest */
    export interface ValidateGooglePlayPurchaseRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Currency used for the purchase. */
        CurrencyCode?: string;
        /** Amount of the stated currency paid for the object. */
        PurchasePrice?: number;
        /** Original JSON string returned by the Google Play IAB API. */
        ReceiptJson: string;
        /** Signature returned by the Google Play IAB API. */
        Signature: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ValidateGooglePlayPurchaseResult */
    export interface ValidateGooglePlayPurchaseResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ValidateIOSReceiptRequest */
    export interface ValidateIOSReceiptRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Currency used for the purchase. */
        CurrencyCode: string;
        /** Amount of the stated currency paid for the object. */
        PurchasePrice: number;
        /** Base64 encoded receipt data, passed back by the App Store as a result of a successful purchase. */
        ReceiptData: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ValidateIOSReceiptResult */
    export interface ValidateIOSReceiptResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ValidateWindowsReceiptRequest */
    export interface ValidateWindowsReceiptRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version to use when granting receipt item. If null, defaults to primary catalog. */
        CatalogVersion?: string;
        /** Currency used for the purchase. */
        CurrencyCode: string;
        /** Amount of the stated currency paid for the object. */
        PurchasePrice: number;
        /** XML Receipt returned by the Windows App Store in-app purchase API */
        Receipt: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ValidateWindowsReceiptResult */
    export interface ValidateWindowsReceiptResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.ValueToDateModel */
    export interface ValueToDateModel {
        /** ISO 4217 code of the currency used in the purchases */
        Currency?: string;
        /**
         * Total value of the purchases in a whole number of 1/100 monetary units. For example, 999 indicates nine dollars and
         * ninety-nine cents when Currency is 'USD')
         */
        TotalValue: number;
        /**
         * Total value of the purchases in a string representation of decimal monetary units. For example, '9.99' indicates nine
         * dollars and ninety-nine cents when Currency is 'USD'.
         */
        TotalValueAsDecimal?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.VirtualCurrencyRechargeTime */
    export interface VirtualCurrencyRechargeTime {
        /**
         * Maximum value to which the regenerating currency will automatically increment. Note that it can exceed this value
         * through use of the AddUserVirtualCurrency API call. However, it will not regenerate automatically until it has fallen
         * below this value.
         */
        RechargeMax: number;
        /** Server timestamp in UTC indicating the next time the virtual currency will be incremented. */
        RechargeTime: string;
        /** Time remaining (in seconds) before the next recharge increment of the virtual currency. */
        SecondsToRecharge: number;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.WriteClientCharacterEventRequest */
    export interface WriteClientCharacterEventRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
        Body?: { [key: string]: any };
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string;
        /**
         * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
         * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
         */
        EventName: string;
        /** The time (in UTC) associated with this event. The value dafaults to the current time. */
        Timestamp?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.WriteClientPlayerEventRequest */
    export interface WriteClientPlayerEventRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Custom data properties associated with the event. Each property consists of a name (string) and a value (JSON object). */
        Body?: { [key: string]: any };
        /**
         * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
         * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
         */
        EventName: string;
        /** The time (in UTC) associated with this event. The value dafaults to the current time. */
        Timestamp?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.WriteEventResponse */
    export interface WriteEventResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The unique identifier of the event. The values of this identifier consist of ASCII characters and are not constrained to
         * any particular format.
         */
        EventId?: string;

    }

    /** https://api.playfab.com/Documentation/Client/datatype/PlayFab.Client.Models/PlayFab.Client.Models.WriteTitleEventRequest */
    export interface WriteTitleEventRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
        Body?: { [key: string]: any };
        /**
         * The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it
         * commonly follows the subject_verb_object pattern (e.g. player_logged_in).
         */
        EventName: string;
        /** The time (in UTC) associated with this event. The value dafaults to the current time. */
        Timestamp?: string;

    }


}
