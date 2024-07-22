/// <reference path="Playfab.d.ts" />

declare module PlayFabAdminModule {
    export interface IPlayFabAdmin {
        ForgetAllCredentials(): void;

        /**
         * Abort an ongoing task instance.
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/aborttaskinstance
         */
        AbortTaskInstance(request: PlayFabAdminModels.AbortTaskInstanceRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>>;
        /**
         * Update news item to include localized version
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addlocalizednews
         */
        AddLocalizedNews(request: PlayFabAdminModels.AddLocalizedNewsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.AddLocalizedNewsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.AddLocalizedNewsResult>>;
        /**
         * Adds a new news item to the title's news feed
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addnews
         */
        AddNews(request: PlayFabAdminModels.AddNewsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.AddNewsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.AddNewsResult>>;
        /**
         * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
         * https://docs.microsoft.com/rest/api/playfab/admin/playstream/addplayertag
         */
        AddPlayerTag(request: PlayFabAdminModels.AddPlayerTagRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.AddPlayerTagResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.AddPlayerTagResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Increments the specified virtual currency by the stated amount
         * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/adduservirtualcurrency
         */
        AddUserVirtualCurrency(request: PlayFabAdminModels.AddUserVirtualCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ModifyUserVirtualCurrencyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.ModifyUserVirtualCurrencyResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Adds one or more virtual currencies to the set defined for the title. Virtual Currencies have a maximum
         * value of 2,147,483,647 when granted to a player. Any value over that will be discarded.
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/addvirtualcurrencytypes
         */
        AddVirtualCurrencyTypes(request: PlayFabAdminModels.AddVirtualCurrencyTypesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.BlankResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.BlankResult>>;
        /**
         * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/banusers
         */
        BanUsers(request: PlayFabAdminModels.BanUsersRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.BanUsersResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.BanUsersResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Checks the global count for the limited edition item.
         * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/checklimitededitionitemavailability
         */
        CheckLimitedEditionItemAvailability(request: PlayFabAdminModels.CheckLimitedEditionItemAvailabilityRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CheckLimitedEditionItemAvailabilityResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.CheckLimitedEditionItemAvailabilityResult>>;
        /**
         * Create an ActionsOnPlayersInSegment task, which iterates through all players in a segment to execute action.
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createactionsonplayersinsegmenttask
         */
        CreateActionsOnPlayersInSegmentTask(request: PlayFabAdminModels.CreateActionsOnPlayerSegmentTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CreateTaskResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.CreateTaskResult>>;
        /**
         * Create a CloudScript task, which can run a CloudScript on a schedule.
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createcloudscripttask
         */
        CreateCloudScriptTask(request: PlayFabAdminModels.CreateCloudScriptTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CreateTaskResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.CreateTaskResult>>;
        /**
         * Create a Insights Scheduled Scaling task, which can scale Insights Performance Units on a schedule
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/createinsightsscheduledscalingtask
         */
        CreateInsightsScheduledScalingTask(request: PlayFabAdminModels.CreateInsightsScheduledScalingTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CreateTaskResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.CreateTaskResult>>;
        /**
         * Registers a relationship between a title and an Open ID Connect provider.
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/createopenidconnection
         */
        CreateOpenIdConnection(request: PlayFabAdminModels.CreateOpenIdConnectionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>>;
        /**
         * Creates a new Player Shared Secret Key. It may take up to 5 minutes for this key to become generally available after
         * this API returns.
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/createplayersharedsecret
         */
        CreatePlayerSharedSecret(request: PlayFabAdminModels.CreatePlayerSharedSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CreatePlayerSharedSecretResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.CreatePlayerSharedSecretResult>>;
        /**
         * Adds a new player statistic configuration to the title, optionally allowing the developer to specify a reset interval
         * and an aggregation method.
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/createplayerstatisticdefinition
         */
        CreatePlayerStatisticDefinition(request: PlayFabAdminModels.CreatePlayerStatisticDefinitionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CreatePlayerStatisticDefinitionResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.CreatePlayerStatisticDefinitionResult>>;
        /**
         * Creates a new player segment by defining the conditions on player properties. Also, create actions to target the player
         * segments for a title.
         * https://docs.microsoft.com/rest/api/playfab/admin/segments/createsegment
         */
        CreateSegment(request: PlayFabAdminModels.CreateSegmentRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CreateSegmentResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.CreateSegmentResponse>>;
        /**
         * Delete a content file from the title. When deleting a file that does not exist, it returns success.
         * https://docs.microsoft.com/rest/api/playfab/admin/content/deletecontent
         */
        DeleteContent(request: PlayFabAdminModels.DeleteContentRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.BlankResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.BlankResult>>;
        /**
         * Removes a master player account entirely from all titles and deletes all associated data
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemasterplayeraccount
         */
        DeleteMasterPlayerAccount(request: PlayFabAdminModels.DeleteMasterPlayerAccountRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteMasterPlayerAccountResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteMasterPlayerAccountResult>>;
        /**
         * Deletes PlayStream and telemetry event data associated with the master player account from PlayFab storage
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemasterplayereventdata
         */
        DeleteMasterPlayerEventData(request: PlayFabAdminModels.DeleteMasterPlayerEventDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteMasterPlayerEventDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteMasterPlayerEventDataResult>>;
        /**
         * Deletes a player's subscription
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletemembershipsubscription
         */
        DeleteMembershipSubscription(request: PlayFabAdminModels.DeleteMembershipSubscriptionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteMembershipSubscriptionResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteMembershipSubscriptionResult>>;
        /**
         * Removes a relationship between a title and an OpenID Connect provider.
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/deleteopenidconnection
         */
        DeleteOpenIdConnection(request: PlayFabAdminModels.DeleteOpenIdConnectionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>>;
        /**
         * Removes a user's player account from a title and deletes all associated data
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/deleteplayer
         */
        DeletePlayer(request: PlayFabAdminModels.DeletePlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeletePlayerResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.DeletePlayerResult>>;
        /**
         * Deletes an existing Player Shared Secret Key. It may take up to 5 minutes for this delete to be reflected after this API
         * returns.
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/deleteplayersharedsecret
         */
        DeletePlayerSharedSecret(request: PlayFabAdminModels.DeletePlayerSharedSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeletePlayerSharedSecretResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.DeletePlayerSharedSecretResult>>;
        /**
         * Deletes an existing player segment and its associated action(s) for a title.
         * https://docs.microsoft.com/rest/api/playfab/admin/segments/deletesegment
         */
        DeleteSegment(request: PlayFabAdminModels.DeleteSegmentRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteSegmentsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteSegmentsResponse>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Deletes an existing virtual item store
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/deletestore
         */
        DeleteStore(request: PlayFabAdminModels.DeleteStoreRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteStoreResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteStoreResult>>;
        /**
         * Delete a task.
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/deletetask
         */
        DeleteTask(request: PlayFabAdminModels.DeleteTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>>;
        /**
         * Permanently deletes a title and all associated configuration
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/deletetitle
         */
        DeleteTitle(request: PlayFabAdminModels.DeleteTitleRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteTitleResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteTitleResult>>;
        /**
         * Deletes a specified set of title data overrides.
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/deletetitledataoverride
         */
        DeleteTitleDataOverride(request: PlayFabAdminModels.DeleteTitleDataOverrideRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteTitleDataOverrideResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteTitleDataOverrideResult>>;
        /**
         * Exports all associated data of a master player account
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/exportmasterplayerdata
         */
        ExportMasterPlayerData(request: PlayFabAdminModels.ExportMasterPlayerDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ExportMasterPlayerDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.ExportMasterPlayerDataResult>>;
        /**
         * Starts an export for the player profiles in a segment. This API creates a snapshot of all the player profiles which
         * match the segment definition at the time of the API call. Profiles which change while an export is in progress will not
         * be reflected in the results.
         * https://docs.microsoft.com/rest/api/playfab/admin/playstream/exportplayersinsegment
         */
        ExportPlayersInSegment(request: PlayFabAdminModels.ExportPlayersInSegmentRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ExportPlayersInSegmentResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.ExportPlayersInSegmentResult>>;
        /**
         * Get information about a ActionsOnPlayersInSegment task instance.
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/getactionsonplayersinsegmenttaskinstance
         */
        GetActionsOnPlayersInSegmentTaskInstance(request: PlayFabAdminModels.GetTaskInstanceRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetActionsOnPlayersInSegmentTaskInstanceResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetActionsOnPlayersInSegmentTaskInstanceResult>>;
        /**
         * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
         * GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
         * https://docs.microsoft.com/rest/api/playfab/admin/playstream/getallsegments
         */
        GetAllSegments(request: PlayFabAdminModels.GetAllSegmentsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetAllSegmentsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetAllSegmentsResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getcatalogitems
         */
        GetCatalogItems(request: PlayFabAdminModels.GetCatalogItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetCatalogItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetCatalogItemsResult>>;
        /**
         * Gets the contents and information of a specific Cloud Script revision.
         * https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/getcloudscriptrevision
         */
        GetCloudScriptRevision(request: PlayFabAdminModels.GetCloudScriptRevisionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetCloudScriptRevisionResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetCloudScriptRevisionResult>>;
        /**
         * Get detail information about a CloudScript task instance.
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/getcloudscripttaskinstance
         */
        GetCloudScriptTaskInstance(request: PlayFabAdminModels.GetTaskInstanceRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetCloudScriptTaskInstanceResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetCloudScriptTaskInstanceResult>>;
        /**
         * Lists all the current cloud script versions. For each version, information about the current published and latest
         * revisions is also listed.
         * https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/getcloudscriptversions
         */
        GetCloudScriptVersions(request: PlayFabAdminModels.GetCloudScriptVersionsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetCloudScriptVersionsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetCloudScriptVersionsResult>>;
        /**
         * List all contents of the title and get statistics such as size
         * https://docs.microsoft.com/rest/api/playfab/admin/content/getcontentlist
         */
        GetContentList(request: PlayFabAdminModels.GetContentListRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetContentListResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetContentListResult>>;
        /**
         * Retrieves the pre-signed URL for uploading a content file. A subsequent HTTP PUT to the returned URL uploads the
         * content. Also, please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN
         * rates apply.
         * https://docs.microsoft.com/rest/api/playfab/admin/content/getcontentuploadurl
         */
        GetContentUploadUrl(request: PlayFabAdminModels.GetContentUploadUrlRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetContentUploadUrlResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetContentUploadUrlResult>>;
        /**
         * Retrieves a download URL for the requested report
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getdatareport
         */
        GetDataReport(request: PlayFabAdminModels.GetDataReportRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetDataReportResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetDataReportResult>>;
        /**
         * Get the list of titles that the player has played
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayedtitlelist
         */
        GetPlayedTitleList(request: PlayFabAdminModels.GetPlayedTitleListRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayedTitleListResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayedTitleListResult>>;
        /**
         * Gets a player's ID from an auth token.
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayeridfromauthtoken
         */
        GetPlayerIdFromAuthToken(request: PlayFabAdminModels.GetPlayerIdFromAuthTokenRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerIdFromAuthTokenResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerIdFromAuthTokenResult>>;
        /**
         * Retrieves the player's profile
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/getplayerprofile
         */
        GetPlayerProfile(request: PlayFabAdminModels.GetPlayerProfileRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerProfileResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerProfileResult>>;
        /**
         * List all segments that a player currently belongs to at this moment in time.
         * https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayersegments
         */
        GetPlayerSegments(request: PlayFabAdminModels.GetPlayersSegmentsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerSegmentsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerSegmentsResult>>;
        /**
         * Returns all Player Shared Secret Keys including disabled and expired.
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/getplayersharedsecrets
         */
        GetPlayerSharedSecrets(request: PlayFabAdminModels.GetPlayerSharedSecretsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerSharedSecretsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerSharedSecretsResult>>;
        /**
         * Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match
         * the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span
         * on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected
         * in the results. AB Test segments are currently not supported by this operation. NOTE: This API is limited to being
         * called 30 times in one minute. You will be returned an error if you exceed this threshold.
         * https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayersinsegment
         */
        GetPlayersInSegment(request: PlayFabAdminModels.GetPlayersInSegmentRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayersInSegmentResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayersInSegmentResult>>;
        /**
         * Retrieves the configuration information for all player statistics defined in the title, regardless of whether they have
         * a reset interval.
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayerstatisticdefinitions
         */
        GetPlayerStatisticDefinitions(request: PlayFabAdminModels.GetPlayerStatisticDefinitionsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerStatisticDefinitionsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerStatisticDefinitionsResult>>;
        /**
         * Retrieves the information on the available versions of the specified statistic.
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getplayerstatisticversions
         */
        GetPlayerStatisticVersions(request: PlayFabAdminModels.GetPlayerStatisticVersionsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerStatisticVersionsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerStatisticVersionsResult>>;
        /**
         * Get all tags with a given Namespace (optional) from a player profile.
         * https://docs.microsoft.com/rest/api/playfab/admin/playstream/getplayertags
         */
        GetPlayerTags(request: PlayFabAdminModels.GetPlayerTagsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerTagsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerTagsResult>>;
        /**
         * Gets the requested policy.
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/getpolicy
         */
        GetPolicy(request: PlayFabAdminModels.GetPolicyRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPolicyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPolicyResponse>>;
        /**
         * Retrieves the key-value store of custom publisher settings
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getpublisherdata
         */
        GetPublisherData(request: PlayFabAdminModels.GetPublisherDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPublisherDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPublisherDataResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Retrieves the random drop table configuration for the title
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getrandomresulttables
         */
        GetRandomResultTables(request: PlayFabAdminModels.GetRandomResultTablesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetRandomResultTablesResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetRandomResultTablesResult>>;
        /**
         * Retrieves the result of an export started by ExportPlayersInSegment API. If the ExportPlayersInSegment is successful and
         * complete, this API returns the IndexUrl from which the index file can be downloaded. The index file has a list of urls
         * from which the files containing the player profile data can be downloaded. Otherwise, it returns the current 'State' of
         * the export
         * https://docs.microsoft.com/rest/api/playfab/admin/playstream/getsegmentexport
         */
        GetSegmentExport(request: PlayFabAdminModels.GetPlayersInSegmentExportRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayersInSegmentExportResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayersInSegmentExportResponse>>;
        /**
         * Get detail information of a segment and its associated definition(s) and action(s) for a title.
         * https://docs.microsoft.com/rest/api/playfab/admin/segments/getsegments
         */
        GetSegments(request: PlayFabAdminModels.GetSegmentsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetSegmentsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetSegmentsResponse>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Retrieves the set of items defined for the specified store, including all prices defined
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/getstoreitems
         */
        GetStoreItems(request: PlayFabAdminModels.GetStoreItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetStoreItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetStoreItemsResult>>;
        /**
         * Query for task instances by task, status, or time range.
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/gettaskinstances
         */
        GetTaskInstances(request: PlayFabAdminModels.GetTaskInstancesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetTaskInstancesResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetTaskInstancesResult>>;
        /**
         * Get definition information on a specified task or all tasks within a title.
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/gettasks
         */
        GetTasks(request: PlayFabAdminModels.GetTasksRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetTasksResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetTasksResult>>;
        /**
         * Retrieves the key-value store of custom title settings which can be read by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/gettitledata
         */
        GetTitleData(request: PlayFabAdminModels.GetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetTitleDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetTitleDataResult>>;
        /**
         * Retrieves the key-value store of custom title settings which cannot be read by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/gettitleinternaldata
         */
        GetTitleInternalData(request: PlayFabAdminModels.GetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetTitleDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetTitleDataResult>>;
        /**
         * Retrieves the relevant details for a specified user, based upon a match against a supplied unique identifier
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/getuseraccountinfo
         */
        GetUserAccountInfo(request: PlayFabAdminModels.LookupUserAccountInfoRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.LookupUserAccountInfoResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.LookupUserAccountInfoResult>>;
        /**
         * Gets all bans for a user.
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/getuserbans
         */
        GetUserBans(request: PlayFabAdminModels.GetUserBansRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserBansResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserBansResult>>;
        /**
         * Retrieves the title-specific custom data for the user which is readable and writable by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserdata
         */
        GetUserData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>>;
        /**
         * Retrieves the title-specific custom data for the user which cannot be accessed by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserinternaldata
         */
        GetUserInternalData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Retrieves the specified user's current inventory of virtual goods
         * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/getuserinventory
         */
        GetUserInventory(request: PlayFabAdminModels.GetUserInventoryRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserInventoryResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserInventoryResult>>;
        /**
         * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherdata
         */
        GetUserPublisherData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>>;
        /**
         * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherinternaldata
         */
        GetUserPublisherInternalData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>>;
        /**
         * Retrieves the publisher-specific custom data for the user which can only be read by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserpublisherreadonlydata
         */
        GetUserPublisherReadOnlyData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>>;
        /**
         * Retrieves the title-specific custom data for the user which can only be read by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/getuserreadonlydata
         */
        GetUserReadOnlyData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Adds the specified items to the specified user inventories
         * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/grantitemstousers
         */
        GrantItemsToUsers(request: PlayFabAdminModels.GrantItemsToUsersRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GrantItemsToUsersResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.GrantItemsToUsersResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Increases the global count for the given scarce resource.
         * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/incrementlimitededitionitemavailability
         */
        IncrementLimitedEditionItemAvailability(request: PlayFabAdminModels.IncrementLimitedEditionItemAvailabilityRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.IncrementLimitedEditionItemAvailabilityResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.IncrementLimitedEditionItemAvailabilityResult>>;
        /**
         * Resets the indicated statistic, removing all player entries for it and backing up the old values.
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/incrementplayerstatisticversion
         */
        IncrementPlayerStatisticVersion(request: PlayFabAdminModels.IncrementPlayerStatisticVersionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.IncrementPlayerStatisticVersionResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.IncrementPlayerStatisticVersionResult>>;
        /**
         * Retrieves a list of all Open ID Connect providers registered to a title.
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/listopenidconnection
         */
        ListOpenIdConnection(request: PlayFabAdminModels.ListOpenIdConnectionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ListOpenIdConnectionResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.ListOpenIdConnectionResponse>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Retuns the list of all defined virtual currencies for the title
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/listvirtualcurrencytypes
         */
        ListVirtualCurrencyTypes(request: PlayFabAdminModels.ListVirtualCurrencyTypesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ListVirtualCurrencyTypesResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.ListVirtualCurrencyTypesResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Attempts to process an order refund through the original real money payment provider.
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/refundpurchase
         */
        RefundPurchase(request: PlayFabAdminModels.RefundPurchaseRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RefundPurchaseResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.RefundPurchaseResponse>>;
        /**
         * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
         * https://docs.microsoft.com/rest/api/playfab/admin/playstream/removeplayertag
         */
        RemovePlayerTag(request: PlayFabAdminModels.RemovePlayerTagRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RemovePlayerTagResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.RemovePlayerTagResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Removes one or more virtual currencies from the set defined for the title.
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/removevirtualcurrencytypes
         */
        RemoveVirtualCurrencyTypes(request: PlayFabAdminModels.RemoveVirtualCurrencyTypesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.BlankResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.BlankResult>>;
        /**
         * Completely removes all statistics for the specified character, for the current game
         * https://docs.microsoft.com/rest/api/playfab/admin/characters/resetcharacterstatistics
         */
        ResetCharacterStatistics(request: PlayFabAdminModels.ResetCharacterStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ResetCharacterStatisticsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.ResetCharacterStatisticsResult>>;
        /**
         * Reset a player's password for a given title.
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/resetpassword
         */
        ResetPassword(request: PlayFabAdminModels.ResetPasswordRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ResetPasswordResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.ResetPasswordResult>>;
        /**
         * Completely removes all statistics for the specified user, for the current game
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/resetuserstatistics
         */
        ResetUserStatistics(request: PlayFabAdminModels.ResetUserStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ResetUserStatisticsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.ResetUserStatisticsResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Attempts to resolve a dispute with the original order's payment provider.
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/resolvepurchasedispute
         */
        ResolvePurchaseDispute(request: PlayFabAdminModels.ResolvePurchaseDisputeRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ResolvePurchaseDisputeResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.ResolvePurchaseDisputeResponse>>;
        /**
         * Revoke all active bans for a user.
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/revokeallbansforuser
         */
        RevokeAllBansForUser(request: PlayFabAdminModels.RevokeAllBansForUserRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeAllBansForUserResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeAllBansForUserResult>>;
        /**
         * Revoke all active bans specified with BanId.
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/revokebans
         */
        RevokeBans(request: PlayFabAdminModels.RevokeBansRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeBansResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeBansResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Revokes access to an item in a user's inventory
         * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/revokeinventoryitem
         */
        RevokeInventoryItem(request: PlayFabAdminModels.RevokeInventoryItemRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeInventoryResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeInventoryResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Revokes access for up to 25 items across multiple users and characters.
         * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/revokeinventoryitems
         */
        RevokeInventoryItems(request: PlayFabAdminModels.RevokeInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeInventoryItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeInventoryItemsResult>>;
        /**
         * Run a task immediately regardless of its schedule.
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/runtask
         */
        RunTask(request: PlayFabAdminModels.RunTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RunTaskResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.RunTaskResult>>;
        /**
         * Forces an email to be sent to the registered email address for the user's account, with a link allowing the user to
         * change the password.If an account recovery email template ID is provided, an email using the custom email template will
         * be used.
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/sendaccountrecoveryemail
         */
        SendAccountRecoveryEmail(request: PlayFabAdminModels.SendAccountRecoveryEmailRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SendAccountRecoveryEmailResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.SendAccountRecoveryEmailResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Creates the catalog configuration of all virtual goods for the specified catalog version
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setcatalogitems
         */
        SetCatalogItems(request: PlayFabAdminModels.UpdateCatalogItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateCatalogItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateCatalogItemsResult>>;
        /**
         * Sets the override expiration for a membership subscription
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/setmembershipoverride
         */
        SetMembershipOverride(request: PlayFabAdminModels.SetMembershipOverrideRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetMembershipOverrideResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.SetMembershipOverrideResult>>;
        /**
         * Sets or resets the player's secret. Player secrets are used to sign API requests.
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/setplayersecret
         */
        SetPlayerSecret(request: PlayFabAdminModels.SetPlayerSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetPlayerSecretResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.SetPlayerSecretResult>>;
        /**
         * Sets the currently published revision of a title Cloud Script
         * https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/setpublishedrevision
         */
        SetPublishedRevision(request: PlayFabAdminModels.SetPublishedRevisionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetPublishedRevisionResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.SetPublishedRevisionResult>>;
        /**
         * Updates the key-value store of custom publisher settings
         * https://docs.microsoft.com/rest/api/playfab/admin/shared-group-data/setpublisherdata
         */
        SetPublisherData(request: PlayFabAdminModels.SetPublisherDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetPublisherDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.SetPublisherDataResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Sets all the items in one virtual store
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setstoreitems
         */
        SetStoreItems(request: PlayFabAdminModels.UpdateStoreItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateStoreItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateStoreItemsResult>>;
        /**
         * Creates and updates the key-value store of custom title settings which can be read by the client. For example, a
         * developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths,
         * movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new
         * build.
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitledata
         */
        SetTitleData(request: PlayFabAdminModels.SetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetTitleDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.SetTitleDataResult>>;
        /**
         * Set and delete key-value pairs in a title data override instance.
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitledataandoverrides
         */
        SetTitleDataAndOverrides(request: PlayFabAdminModels.SetTitleDataAndOverridesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetTitleDataAndOverridesResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.SetTitleDataAndOverridesResult>>;
        /**
         * Updates the key-value store of custom title settings which cannot be read by the client. These values can be used to
         * tweak settings used by game servers and Cloud Scripts without the need to update and re-deploy.
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/settitleinternaldata
         */
        SetTitleInternalData(request: PlayFabAdminModels.SetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetTitleDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.SetTitleDataResult>>;
        /**
         * Sets the Amazon Resource Name (ARN) for iOS and Android push notifications. Documentation on the exact restrictions can
         * be found at: http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html. Currently, Amazon device
         * Messaging is not supported.
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/setuppushnotification
         */
        SetupPushNotification(request: PlayFabAdminModels.SetupPushNotificationRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetupPushNotificationResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.SetupPushNotificationResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Decrements the specified virtual currency by the stated amount
         * https://docs.microsoft.com/rest/api/playfab/admin/player-item-management/subtractuservirtualcurrency
         */
        SubtractUserVirtualCurrency(request: PlayFabAdminModels.SubtractUserVirtualCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ModifyUserVirtualCurrencyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.ModifyUserVirtualCurrencyResult>>;
        /**
         * Updates information of a list of existing bans specified with Ban Ids.
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/updatebans
         */
        UpdateBans(request: PlayFabAdminModels.UpdateBansRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateBansResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateBansResult>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Updates the catalog configuration for virtual goods in the specified catalog version
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updatecatalogitems
         */
        UpdateCatalogItems(request: PlayFabAdminModels.UpdateCatalogItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateCatalogItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateCatalogItemsResult>>;
        /**
         * Creates a new Cloud Script revision and uploads source code to it. Note that at this time, only one file should be
         * submitted in the revision.
         * https://docs.microsoft.com/rest/api/playfab/admin/server-side-cloud-script/updatecloudscript
         */
        UpdateCloudScript(request: PlayFabAdminModels.UpdateCloudScriptRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateCloudScriptResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateCloudScriptResult>>;
        /**
         * Modifies data and credentials for an existing relationship between a title and an Open ID Connect provider
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/updateopenidconnection
         */
        UpdateOpenIdConnection(request: PlayFabAdminModels.UpdateOpenIdConnectionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>>;
        /**
         * Updates a existing Player Shared Secret Key. It may take up to 5 minutes for this update to become generally available
         * after this API returns.
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/updateplayersharedsecret
         */
        UpdatePlayerSharedSecret(request: PlayFabAdminModels.UpdatePlayerSharedSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdatePlayerSharedSecretResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdatePlayerSharedSecretResult>>;
        /**
         * Updates a player statistic configuration for the title, optionally allowing the developer to specify a reset interval.
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateplayerstatisticdefinition
         */
        UpdatePlayerStatisticDefinition(request: PlayFabAdminModels.UpdatePlayerStatisticDefinitionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdatePlayerStatisticDefinitionResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdatePlayerStatisticDefinitionResult>>;
        /**
         * Changes a policy for a title
         * https://docs.microsoft.com/rest/api/playfab/admin/authentication/updatepolicy
         */
        UpdatePolicy(request: PlayFabAdminModels.UpdatePolicyRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdatePolicyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdatePolicyResponse>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Updates the random drop table configuration for the title
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updaterandomresulttables
         */
        UpdateRandomResultTables(request: PlayFabAdminModels.UpdateRandomResultTablesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateRandomResultTablesResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateRandomResultTablesResult>>;
        /**
         * Updates an existing player segment and its associated definition(s) and action(s) for a title.
         * https://docs.microsoft.com/rest/api/playfab/admin/segments/updatesegment
         */
        UpdateSegment(request: PlayFabAdminModels.UpdateSegmentRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateSegmentResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateSegmentResponse>>;
        /**
         * _NOTE: This is a Legacy Economy API, and is in bugfix-only mode. All new Economy features are being developed only for
         * version 2._ Updates an existing virtual item store with new or modified items
         * https://docs.microsoft.com/rest/api/playfab/admin/title-wide-data-management/updatestoreitems
         */
        UpdateStoreItems(request: PlayFabAdminModels.UpdateStoreItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateStoreItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateStoreItemsResult>>;
        /**
         * Update an existing task.
         * https://docs.microsoft.com/rest/api/playfab/admin/scheduledtask/updatetask
         */
        UpdateTask(request: PlayFabAdminModels.UpdateTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResponse>>;
        /**
         * Updates the title-specific custom data for the user which is readable and writable by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserdata
         */
        UpdateUserData(request: PlayFabAdminModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>>;
        /**
         * Updates the title-specific custom data for the user which cannot be accessed by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserinternaldata
         */
        UpdateUserInternalData(request: PlayFabAdminModels.UpdateUserInternalDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>>;
        /**
         * Updates the publisher-specific custom data for the user which is readable and writable by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherdata
         */
        UpdateUserPublisherData(request: PlayFabAdminModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>>;
        /**
         * Updates the publisher-specific custom data for the user which cannot be accessed by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherinternaldata
         */
        UpdateUserPublisherInternalData(request: PlayFabAdminModels.UpdateUserInternalDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>>;
        /**
         * Updates the publisher-specific custom data for the user which can only be read by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserpublisherreadonlydata
         */
        UpdateUserPublisherReadOnlyData(request: PlayFabAdminModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>>;
        /**
         * Updates the title-specific custom data for the user which can only be read by the client
         * https://docs.microsoft.com/rest/api/playfab/admin/player-data-management/updateuserreadonlydata
         */
        UpdateUserReadOnlyData(request: PlayFabAdminModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>>;
        /**
         * Updates the title specific display name for a user
         * https://docs.microsoft.com/rest/api/playfab/admin/account-management/updateusertitledisplayname
         */
        UpdateUserTitleDisplayName(request: PlayFabAdminModels.UpdateUserTitleDisplayNameRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserTitleDisplayNameResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserTitleDisplayNameResult>>;

    }
}

declare module PlayFabAdminModels {
    export interface AbortTaskInstanceRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** ID of a task instance that is being aborted. */
        TaskInstanceId: string;

    }

    export interface Action {
        /** Action content to add inventory item v2 */
        AddInventoryItemV2Content?: AddInventoryItemV2Content;
        /** Action content to ban player */
        BanPlayerContent?: BanPlayerContent;
        /** Action content to delete inventory item v2 */
        DeleteInventoryItemV2Content?: DeleteInventoryItemV2Content;
        /** Action content to delete player */
        DeletePlayerContent?: DeletePlayerContent;
        /** Action content to execute cloud script */
        ExecuteCloudScriptContent?: ExecuteCloudScriptContent;
        /** Action content to execute azure function */
        ExecuteFunctionContent?: ExecuteFunctionContent;
        /** Action content to grant item */
        GrantItemContent?: GrantItemContent;
        /** Action content to grant virtual currency */
        GrantVirtualCurrencyContent?: GrantVirtualCurrencyContent;
        /** Action content to increment player statistic */
        IncrementPlayerStatisticContent?: IncrementPlayerStatisticContent;
        /** Action content to send push notification */
        PushNotificationContent?: PushNotificationContent;
        /** Action content to send email */
        SendEmailContent?: SendEmailContent;
        /** Action content to subtract inventory item v2 */
        SubtractInventoryItemV2Content?: SubtractInventoryItemV2Content;

    }

    export interface ActionsOnPlayersInSegmentTaskParameter {
        /** List of actions to perform on each player in a segment. Each action object can contain only one action type. */
        Actions?: Action[];
        /** ID of the segment to perform actions on. */
        SegmentId: string;

    }

    export interface ActionsOnPlayersInSegmentTaskSummary {
        /** UTC timestamp when the task completed. */
        CompletedAt?: string;
        /** Error message for last processing attempt, if an error occured. */
        ErrorMessage?: string;
        /** Flag indicating if the error was fatal, if false job will be retried. */
        ErrorWasFatal?: boolean;
        /** Estimated time remaining in seconds. */
        EstimatedSecondsRemaining?: number;
        /** Progress represented as percentage. */
        PercentComplete?: number;
        /** If manually scheduled, ID of user who scheduled the task. */
        ScheduledByUserId?: string;
        /** UTC timestamp when the task started. */
        StartedAt: string;
        /** Current status of the task instance. */
        Status?: string;
        /** Identifier of the task this instance belongs to. */
        TaskIdentifier?: NameIdentifier;
        /** ID of the task instance. */
        TaskInstanceId?: string;
        /** Total players in segment when task was started. */
        TotalPlayersInSegment?: number;
        /** Total number of players that have had the actions applied to. */
        TotalPlayersProcessed?: number;

    }

    export interface AdCampaignAttribution {
        /** UTC time stamp of attribution */
        AttributedAt: string;
        /** Attribution campaign identifier */
        CampaignId?: string;
        /** Attribution network name */
        Platform?: string;

    }

    export interface AdCampaignAttributionModel {
        /** UTC time stamp of attribution */
        AttributedAt: string;
        /** Attribution campaign identifier */
        CampaignId?: string;
        /** Attribution network name */
        Platform?: string;

    }

    export interface AdCampaignSegmentFilter {
        /** Campaign id. */
        CampaignId?: string;
        /** Campaign source. */
        CampaignSource?: string;
        /** Campaign comparison. */
        Comparison?: string;

    }

    export interface AddInventoryItemsV2SegmentAction {
        /** Amount of the item to be granted to a player */
        Amount?: number;
        /** The collection id for where the item will be granted in the player inventory */
        CollectionId?: string;
        /** The duration in seconds of the subscription to be granted to a player */
        DurationInSeconds?: number;
        /** The id of item to be granted to the player */
        ItemId?: string;
        /** The stack id for where the item will be granted in the player inventory */
        StackId?: string;

    }

    export interface AddInventoryItemV2Content {
        /** Amount of the item to be granted to a player */
        Amount?: number;
        /** The collection id for where the item will be granted in the player inventory */
        CollectionId?: string;
        /** The duration in seconds of the subscription to be granted to a player */
        DurationInSeconds?: number;
        /** The id of item to be granted to the player */
        ItemId?: string;
        /** The stack id for where the item will be granted in the player inventory */
        StackId?: string;

    }

    export interface AddLocalizedNewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Localized body text of the news. */
        Body: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Language of the news item. */
        Language: string;
        /** Unique id of the updated news item. */
        NewsId: string;
        /** Localized title (headline) of the news item. */
        Title: string;

    }

    export interface AddLocalizedNewsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface AddNewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Default body text of the news. */
        Body: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Time this news was published. If not set, defaults to now. */
        Timestamp?: string;
        /** Default title (headline) of the news item. */
        Title: string;

    }

    export interface AddNewsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique id of the new news item */
        NewsId?: string;

    }

    export interface AddPlayerTagRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /** Unique tag for player profile. */
        TagName: string;

    }

    export interface AddPlayerTagResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface AddUserVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Amount to be added to the user balance of the specified virtual currency. Maximum VC balance is Int32 (2,147,483,647).
         * Any increase over this value will be discarded.
         */
        Amount: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** PlayFab unique identifier of the user whose virtual currency balance is to be increased. */
        PlayFabId: string;
        /** Name of the virtual currency which is to be incremented. */
        VirtualCurrency: string;

    }

    export interface AddVirtualCurrencyTypesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * List of virtual currencies and their initial deposits (the amount a user is granted when signing in for the first time)
         * to the title
         */
        VirtualCurrencies: VirtualCurrencyData[];

    }

    export interface AllPlayersSegmentFilter {

    }

    export interface ApiCondition {
        /** Require that API calls contain an RSA encrypted payload or signed headers. */
        HasSignatureOrEncryption?: string;

    }

    type AuthTokenType = "Email"


    export interface BanInfo {
        /** The active state of this ban. Expired bans may still have this value set to true but they will have no effect. */
        Active: boolean;
        /** The unique Ban Id associated with this ban. */
        BanId?: string;
        /** The time when this ban was applied. */
        Created?: string;
        /** The time when this ban expires. Permanent bans do not have expiration date. */
        Expires?: string;
        /** The IP address on which the ban was applied. May affect multiple players. */
        IPAddress?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;
        /** The reason why this ban was applied. */
        Reason?: string;
        /** The family type of the suer that is included in the ban. */
        UserFamilyType?: string;

    }

    export interface BanPlayerContent {
        /** Duration(in hours) to ban a player. If not provided, the player will be banned permanently. */
        BanDurationHours?: number;
        /** Reason to ban a player */
        BanReason?: string;

    }

    export interface BanPlayerSegmentAction {
        /** Ban hours duration. */
        BanHours?: number;
        /** Reason for ban. */
        ReasonForBan?: string;

    }

    export interface BanRequest {
        /** The duration in hours for the ban. Leave this blank for a permanent ban. */
        DurationInHours?: number;
        /** IP address to be banned. May affect multiple players. */
        IPAddress?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /** The reason for this ban. Maximum 140 characters. */
        Reason?: string;
        /** The family type of the user that should be included in the ban if applicable. May affect multiple players. */
        UserFamilyType?: string;

    }

    export interface BanUsersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** List of ban requests to be applied. Maximum 100. */
        Bans: BanRequest[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface BanUsersResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Information on the bans that were applied */
        BanData?: BanInfo[];

    }

    export interface BlankResult extends PlayFabModule.IPlayFabResultCommon  {

    }

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

    export interface CheckLimitedEditionItemAvailabilityRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Which catalog is being updated. If null, uses the default catalog. */
        CatalogVersion?: string;
        /** The item to check for. */
        ItemId: string;

    }

    export interface CheckLimitedEditionItemAvailabilityResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The amount of the specified resource remaining. */
        Amount: number;

    }

    export interface ChurnPredictionSegmentFilter {
        /** Comparison */
        Comparison?: string;
        /** RiskLevel */
        RiskLevel?: string;

    }

    type ChurnRiskLevel = "NoData"

        | "LowRisk"
        | "MediumRisk"
        | "HighRisk";

    export interface CloudScriptFile {
        /** Contents of the Cloud Script javascript. Must be string-escaped javascript. */
        FileContents: string;
        /**
         * Name of the javascript file. These names are not used internally by the server, they are only for developer
         * organizational purposes.
         */
        Filename: string;

    }

    export interface CloudScriptTaskParameter {
        /** Argument to pass to the CloudScript function. */
        Argument?: any;
        /** Name of the CloudScript function to execute. */
        FunctionName?: string;

    }

    export interface CloudScriptTaskSummary {
        /** UTC timestamp when the task completed. */
        CompletedAt?: string;
        /** Estimated time remaining in seconds. */
        EstimatedSecondsRemaining?: number;
        /** Progress represented as percentage. */
        PercentComplete?: number;
        /** Result of CloudScript execution */
        Result?: ExecuteCloudScriptResult;
        /** If manually scheduled, ID of user who scheduled the task. */
        ScheduledByUserId?: string;
        /** UTC timestamp when the task started. */
        StartedAt: string;
        /** Current status of the task instance. */
        Status?: string;
        /** Identifier of the task this instance belongs to. */
        TaskIdentifier?: NameIdentifier;
        /** ID of the task instance. */
        TaskInstanceId?: string;

    }

    export interface CloudScriptVersionStatus {
        /** Most recent revision for this Cloud Script version */
        LatestRevision: number;
        /** Published code revision for this Cloud Script version */
        PublishedRevision: number;
        /** Version number */
        Version: number;

    }

    type Conditionals = "Any"

        | "True"
        | "False";

    export interface ContactEmailInfo {
        /** The email address */
        EmailAddress?: string;
        /** The name of the email info data */
        Name?: string;
        /** The verification status of the email */
        VerificationStatus?: string;

    }

    export interface ContactEmailInfoModel {
        /** The email address */
        EmailAddress?: string;
        /** The name of the email info data */
        Name?: string;
        /** The verification status of the email */
        VerificationStatus?: string;

    }

    export interface ContentInfo {
        /** Key of the content */
        Key?: string;
        /** Last modified time */
        LastModified: string;
        /** Size of the content in bytes */
        Size: number;

    }

    type ContinentCode = "AF"

        | "AN"
        | "AS"
        | "EU"
        | "NA"
        | "OC"
        | "SA"
        | "Unknown";

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
        | "ZW"
        | "Unknown";

    export interface CreateActionsOnPlayerSegmentTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Description the task */
        Description?: string;
        /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
        IsActive: boolean;
        /** Name of the task. This is a unique identifier for tasks in the title. */
        Name: string;
        /** Task details related to segment and action */
        Parameter: ActionsOnPlayersInSegmentTaskParameter;
        /** Cron expression for the run schedule of the task. The expression should be in UTC. */
        Schedule?: string;

    }

    export interface CreateCloudScriptTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Description the task */
        Description?: string;
        /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
        IsActive: boolean;
        /** Name of the task. This is a unique identifier for tasks in the title. */
        Name: string;
        /** Task details related to CloudScript */
        Parameter: CloudScriptTaskParameter;
        /** Cron expression for the run schedule of the task. The expression should be in UTC. */
        Schedule?: string;

    }

    export interface CreateInsightsScheduledScalingTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Description the task */
        Description?: string;
        /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
        IsActive: boolean;
        /** Name of the task. This is a unique identifier for tasks in the title. */
        Name: string;
        /** Task details related to Insights Scaling */
        Parameter: InsightsScalingTaskParameter;
        /** Cron expression for the run schedule of the task. The expression should be in UTC. */
        Schedule?: string;

    }

    export interface CreateOpenIdConnectionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The client ID given by the ID provider. */
        ClientId: string;
        /** The client secret given by the ID provider. */
        ClientSecret: string;
        /** A name for the connection that identifies it within the title. */
        ConnectionId: string;
        /** Ignore 'nonce' claim in identity tokens. */
        IgnoreNonce?: boolean;
        /**
         * The discovery document URL to read issuer information from. This must be the absolute URL to the JSON OpenId
         * Configuration document and must be accessible from the internet. If you don't know it, try your issuer URL followed by
         * "/.well-known/openid-configuration". For example, if the issuer is https://example.com, try
         * https://example.com/.well-known/openid-configuration
         */
        IssuerDiscoveryUrl?: string;
        /** Manually specified information for an OpenID Connect issuer. */
        IssuerInformation?: OpenIdIssuerInformation;
        /** Override the issuer name for user indexing and lookup. */
        IssuerOverride?: string;

    }

    export interface CreatePlayerSharedSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Friendly name for this key */
        FriendlyName?: string;

    }

    export interface CreatePlayerSharedSecretResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The player shared secret to use when calling Client/GetTitlePublicKey */
        SecretKey?: string;

    }

    export interface CreatePlayerStatisticDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** the aggregation method to use in updating the statistic (defaults to last) */
        AggregationMethod?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** unique name of the statistic */
        StatisticName: string;
        /** interval at which the values of the statistic for all players are reset (resets begin at the next interval boundary) */
        VersionChangeInterval?: string;

    }

    export interface CreatePlayerStatisticDefinitionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** created statistic definition */
        Statistic?: PlayerStatisticDefinition;

    }

    export interface CreateSegmentRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Segment model with all of the segment properties data. */
        SegmentModel: SegmentModel;

    }

    export interface CreateSegmentResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Error message. */
        ErrorMessage?: string;
        /** Segment id. */
        SegmentId?: string;

    }

    export interface CreateTaskResult extends PlayFabModule.IPlayFabResultCommon  {
        /** ID of the task */
        TaskId?: string;

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

    export interface DeleteContentRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Key of the content item to be deleted */
        Key: string;

    }

    export interface DeleteInventoryItemsV2SegmentAction {
        /** The collection id for where the item will be removed from the player inventory */
        CollectionId?: string;
        /** The id of item to be removed from the player */
        ItemId?: string;
        /** The stack id for where the item will be removed from the player inventory */
        StackId?: string;

    }

    export interface DeleteInventoryItemV2Content {
        /** The collection id for where the item will be removed from the player inventory */
        CollectionId?: string;
        /** The id of item to be removed from the player */
        ItemId?: string;
        /** The stack id for where the item will be removed from the player inventory */
        StackId?: string;

    }

    export interface DeleteMasterPlayerAccountRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Developer created string to identify a user without PlayFab ID */
        MetaData?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface DeleteMasterPlayerAccountResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * A notification email with this job receipt Id will be sent to the title notification email address when deletion is
         * complete.
         */
        JobReceiptId?: string;
        /** List of titles from which the player's data will be deleted. */
        TitleIds?: string[];

    }

    export interface DeleteMasterPlayerEventDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface DeleteMasterPlayerEventDataResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteMembershipSubscriptionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Id of the membership to apply the override expiration date to. */
        MembershipId: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /** Id of the subscription that should be deleted from the membership. */
        SubscriptionId: string;

    }

    export interface DeleteMembershipSubscriptionResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteOpenIdConnectionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** unique name of the connection */
        ConnectionId: string;

    }

    export interface DeletePlayerContent {

    }

    export interface DeletePlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface DeletePlayerResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeletePlayerSegmentAction {

    }

    export interface DeletePlayerSharedSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The shared secret key to delete */
        SecretKey?: string;

    }

    export interface DeletePlayerSharedSecretResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeletePlayerStatisticSegmentAction {
        /** Statistic name. */
        StatisticName?: string;

    }

    export interface DeleteSegmentRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Segment id. */
        SegmentId: string;

    }

    export interface DeleteSegmentsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Error message. */
        ErrorMessage?: string;

    }

    export interface DeleteStoreRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** catalog version of the store to delete. If null, uses the default catalog. */
        CatalogVersion?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** unqiue identifier for the store which is to be deleted */
        StoreId: string;

    }

    export interface DeleteStoreResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Specify either the task ID or the name of task to be deleted. */
        Identifier?: NameIdentifier;

    }

    export interface DeleteTitleDataOverrideRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Name of the override. */
        OverrideLabel: string;

    }

    export interface DeleteTitleDataOverrideResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteTitleRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    export interface DeleteTitleResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    type EffectType = "Allow"

        | "Deny";

    export interface EmailNotificationSegmentAction {
        /** Email template id. */
        EmailTemplateId?: string;
        /** Email template name. */
        EmailTemplateName?: string;

    }

    type EmailVerificationStatus = "Unverified"

        | "Pending"
        | "Confirmed";

    export interface EmptyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string;

    }

    export interface ExecuteAzureFunctionSegmentAction {
        /** Azure function. */
        AzureFunction?: string;
        /** Azure function parameter. */
        FunctionParameter?: any;
        /** Generate play stream event. */
        GenerateFunctionExecutedEvents: boolean;

    }

    export interface ExecuteCloudScriptContent {
        /** Arguments(JSON) to be passed into the cloudscript method */
        CloudScriptMethodArguments: string;
        /** Cloudscript method name */
        CloudScriptMethodName: string;
        /** Publish cloudscript results as playstream event */
        PublishResultsToPlayStream: boolean;

    }

    export interface ExecuteCloudScriptResult {
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

    export interface ExecuteCloudScriptSegmentAction {
        /** Cloud script function. */
        CloudScriptFunction?: string;
        /** Generate play stream event. */
        CloudScriptPublishResultsToPlayStream: boolean;
        /** Cloud script function parameter. */
        FunctionParameter?: any;
        /** Cloud script function parameter json text. */
        FunctionParameterJson?: string;

    }

    export interface ExecuteFunctionContent {
        /** Arguments(JSON) to be passed into the cloudscript azure function */
        CloudScriptFunctionArguments: string;
        /** Cloudscript azure function name */
        CloudScriptFunctionName: string;
        /** Publish results from executing the azure function as playstream event */
        PublishResultsToPlayStream: boolean;

    }

    export interface ExportMasterPlayerDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface ExportMasterPlayerDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * An email with this job receipt Id containing the export download link will be sent to the title notification email
         * address when the export is complete.
         */
        JobReceiptId?: string;

    }

    export interface ExportPlayersInSegmentRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique identifier of the requested segment. */
        SegmentId: string;

    }

    export interface ExportPlayersInSegmentResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique identifier of the export for the requested Segment. */
        ExportId?: string;
        /** Unique identifier of the requested Segment. */
        SegmentId?: string;

    }

    export interface FirstLoginDateSegmentFilter {
        /** First player login date comparison. */
        Comparison?: string;
        /** First player login date. */
        LogInDate: string;

    }

    export interface FirstLoginTimespanSegmentFilter {
        /** First player login duration comparison. */
        Comparison?: string;
        /** First player login duration. */
        DurationInMinutes: number;

    }

    type GenericErrorCodes = "Success"

        | "UnkownError"
        | "InvalidParams"
        | "AccountNotFound"
        | "AccountBanned"
        | "InvalidUsernameOrPassword"
        | "InvalidTitleId"
        | "InvalidEmailAddress"
        | "EmailAddressNotAvailable"
        | "InvalidUsername"
        | "InvalidPassword"
        | "UsernameNotAvailable"
        | "InvalidSteamTicket"
        | "AccountAlreadyLinked"
        | "LinkedAccountAlreadyClaimed"
        | "InvalidFacebookToken"
        | "AccountNotLinked"
        | "FailedByPaymentProvider"
        | "CouponCodeNotFound"
        | "InvalidContainerItem"
        | "ContainerNotOwned"
        | "KeyNotOwned"
        | "InvalidItemIdInTable"
        | "InvalidReceipt"
        | "ReceiptAlreadyUsed"
        | "ReceiptCancelled"
        | "GameNotFound"
        | "GameModeNotFound"
        | "InvalidGoogleToken"
        | "UserIsNotPartOfDeveloper"
        | "InvalidTitleForDeveloper"
        | "TitleNameConflicts"
        | "UserisNotValid"
        | "ValueAlreadyExists"
        | "BuildNotFound"
        | "PlayerNotInGame"
        | "InvalidTicket"
        | "InvalidDeveloper"
        | "InvalidOrderInfo"
        | "RegistrationIncomplete"
        | "InvalidPlatform"
        | "UnknownError"
        | "SteamApplicationNotOwned"
        | "WrongSteamAccount"
        | "TitleNotActivated"
        | "RegistrationSessionNotFound"
        | "NoSuchMod"
        | "FileNotFound"
        | "DuplicateEmail"
        | "ItemNotFound"
        | "ItemNotOwned"
        | "ItemNotRecycleable"
        | "ItemNotAffordable"
        | "InvalidVirtualCurrency"
        | "WrongVirtualCurrency"
        | "WrongPrice"
        | "NonPositiveValue"
        | "InvalidRegion"
        | "RegionAtCapacity"
        | "ServerFailedToStart"
        | "NameNotAvailable"
        | "InsufficientFunds"
        | "InvalidDeviceID"
        | "InvalidPushNotificationToken"
        | "NoRemainingUses"
        | "InvalidPaymentProvider"
        | "PurchaseInitializationFailure"
        | "DuplicateUsername"
        | "InvalidBuyerInfo"
        | "NoGameModeParamsSet"
        | "BodyTooLarge"
        | "ReservedWordInBody"
        | "InvalidTypeInBody"
        | "InvalidRequest"
        | "ReservedEventName"
        | "InvalidUserStatistics"
        | "NotAuthenticated"
        | "StreamAlreadyExists"
        | "ErrorCreatingStream"
        | "StreamNotFound"
        | "InvalidAccount"
        | "PurchaseDoesNotExist"
        | "InvalidPurchaseTransactionStatus"
        | "APINotEnabledForGameClientAccess"
        | "NoPushNotificationARNForTitle"
        | "BuildAlreadyExists"
        | "BuildPackageDoesNotExist"
        | "CustomAnalyticsEventsNotEnabledForTitle"
        | "InvalidSharedGroupId"
        | "NotAuthorized"
        | "MissingTitleGoogleProperties"
        | "InvalidItemProperties"
        | "InvalidPSNAuthCode"
        | "InvalidItemId"
        | "PushNotEnabledForAccount"
        | "PushServiceError"
        | "ReceiptDoesNotContainInAppItems"
        | "ReceiptContainsMultipleInAppItems"
        | "InvalidBundleID"
        | "JavascriptException"
        | "InvalidSessionTicket"
        | "UnableToConnectToDatabase"
        | "InternalServerError"
        | "InvalidReportDate"
        | "ReportNotAvailable"
        | "DatabaseThroughputExceeded"
        | "InvalidGameTicket"
        | "ExpiredGameTicket"
        | "GameTicketDoesNotMatchLobby"
        | "LinkedDeviceAlreadyClaimed"
        | "DeviceAlreadyLinked"
        | "DeviceNotLinked"
        | "PartialFailure"
        | "PublisherNotSet"
        | "ServiceUnavailable"
        | "VersionNotFound"
        | "RevisionNotFound"
        | "InvalidPublisherId"
        | "DownstreamServiceUnavailable"
        | "APINotIncludedInTitleUsageTier"
        | "DAULimitExceeded"
        | "APIRequestLimitExceeded"
        | "InvalidAPIEndpoint"
        | "BuildNotAvailable"
        | "ConcurrentEditError"
        | "ContentNotFound"
        | "CharacterNotFound"
        | "CloudScriptNotFound"
        | "ContentQuotaExceeded"
        | "InvalidCharacterStatistics"
        | "PhotonNotEnabledForTitle"
        | "PhotonApplicationNotFound"
        | "PhotonApplicationNotAssociatedWithTitle"
        | "InvalidEmailOrPassword"
        | "FacebookAPIError"
        | "InvalidContentType"
        | "KeyLengthExceeded"
        | "DataLengthExceeded"
        | "TooManyKeys"
        | "FreeTierCannotHaveVirtualCurrency"
        | "MissingAmazonSharedKey"
        | "AmazonValidationError"
        | "InvalidPSNIssuerId"
        | "PSNInaccessible"
        | "ExpiredAuthToken"
        | "FailedToGetEntitlements"
        | "FailedToConsumeEntitlement"
        | "TradeAcceptingUserNotAllowed"
        | "TradeInventoryItemIsAssignedToCharacter"
        | "TradeInventoryItemIsBundle"
        | "TradeStatusNotValidForCancelling"
        | "TradeStatusNotValidForAccepting"
        | "TradeDoesNotExist"
        | "TradeCancelled"
        | "TradeAlreadyFilled"
        | "TradeWaitForStatusTimeout"
        | "TradeInventoryItemExpired"
        | "TradeMissingOfferedAndAcceptedItems"
        | "TradeAcceptedItemIsBundle"
        | "TradeAcceptedItemIsStackable"
        | "TradeInventoryItemInvalidStatus"
        | "TradeAcceptedCatalogItemInvalid"
        | "TradeAllowedUsersInvalid"
        | "TradeInventoryItemDoesNotExist"
        | "TradeInventoryItemIsConsumed"
        | "TradeInventoryItemIsStackable"
        | "TradeAcceptedItemsMismatch"
        | "InvalidKongregateToken"
        | "FeatureNotConfiguredForTitle"
        | "NoMatchingCatalogItemForReceipt"
        | "InvalidCurrencyCode"
        | "NoRealMoneyPriceForCatalogItem"
        | "TradeInventoryItemIsNotTradable"
        | "TradeAcceptedCatalogItemIsNotTradable"
        | "UsersAlreadyFriends"
        | "LinkedIdentifierAlreadyClaimed"
        | "CustomIdNotLinked"
        | "TotalDataSizeExceeded"
        | "DeleteKeyConflict"
        | "InvalidXboxLiveToken"
        | "ExpiredXboxLiveToken"
        | "ResettableStatisticVersionRequired"
        | "NotAuthorizedByTitle"
        | "NoPartnerEnabled"
        | "InvalidPartnerResponse"
        | "APINotEnabledForGameServerAccess"
        | "StatisticNotFound"
        | "StatisticNameConflict"
        | "StatisticVersionClosedForWrites"
        | "StatisticVersionInvalid"
        | "APIClientRequestRateLimitExceeded"
        | "InvalidJSONContent"
        | "InvalidDropTable"
        | "StatisticVersionAlreadyIncrementedForScheduledInterval"
        | "StatisticCountLimitExceeded"
        | "StatisticVersionIncrementRateExceeded"
        | "ContainerKeyInvalid"
        | "CloudScriptExecutionTimeLimitExceeded"
        | "NoWritePermissionsForEvent"
        | "CloudScriptFunctionArgumentSizeExceeded"
        | "CloudScriptAPIRequestCountExceeded"
        | "CloudScriptAPIRequestError"
        | "CloudScriptHTTPRequestError"
        | "InsufficientGuildRole"
        | "GuildNotFound"
        | "OverLimit"
        | "EventNotFound"
        | "InvalidEventField"
        | "InvalidEventName"
        | "CatalogNotConfigured"
        | "OperationNotSupportedForPlatform"
        | "SegmentNotFound"
        | "StoreNotFound"
        | "InvalidStatisticName"
        | "TitleNotQualifiedForLimit"
        | "InvalidServiceLimitLevel"
        | "ServiceLimitLevelInTransition"
        | "CouponAlreadyRedeemed"
        | "GameServerBuildSizeLimitExceeded"
        | "GameServerBuildCountLimitExceeded"
        | "VirtualCurrencyCountLimitExceeded"
        | "VirtualCurrencyCodeExists"
        | "TitleNewsItemCountLimitExceeded"
        | "InvalidTwitchToken"
        | "TwitchResponseError"
        | "ProfaneDisplayName"
        | "UserAlreadyAdded"
        | "InvalidVirtualCurrencyCode"
        | "VirtualCurrencyCannotBeDeleted"
        | "IdentifierAlreadyClaimed"
        | "IdentifierNotLinked"
        | "InvalidContinuationToken"
        | "ExpiredContinuationToken"
        | "InvalidSegment"
        | "InvalidSessionId"
        | "SessionLogNotFound"
        | "InvalidSearchTerm"
        | "TwoFactorAuthenticationTokenRequired"
        | "GameServerHostCountLimitExceeded"
        | "PlayerTagCountLimitExceeded"
        | "RequestAlreadyRunning"
        | "ActionGroupNotFound"
        | "MaximumSegmentBulkActionJobsRunning"
        | "NoActionsOnPlayersInSegmentJob"
        | "DuplicateStatisticName"
        | "ScheduledTaskNameConflict"
        | "ScheduledTaskCreateConflict"
        | "InvalidScheduledTaskName"
        | "InvalidTaskSchedule"
        | "SteamNotEnabledForTitle"
        | "LimitNotAnUpgradeOption"
        | "NoSecretKeyEnabledForCloudScript"
        | "TaskNotFound"
        | "TaskInstanceNotFound"
        | "InvalidIdentityProviderId"
        | "MisconfiguredIdentityProvider"
        | "InvalidScheduledTaskType"
        | "BillingInformationRequired"
        | "LimitedEditionItemUnavailable"
        | "InvalidAdPlacementAndReward"
        | "AllAdPlacementViewsAlreadyConsumed"
        | "GoogleOAuthNotConfiguredForTitle"
        | "GoogleOAuthError"
        | "UserNotFriend"
        | "InvalidSignature"
        | "InvalidPublicKey"
        | "GoogleOAuthNoIdTokenIncludedInResponse"
        | "StatisticUpdateInProgress"
        | "LeaderboardVersionNotAvailable"
        | "StatisticAlreadyHasPrizeTable"
        | "PrizeTableHasOverlappingRanks"
        | "PrizeTableHasMissingRanks"
        | "PrizeTableRankStartsAtZero"
        | "InvalidStatistic"
        | "ExpressionParseFailure"
        | "ExpressionInvokeFailure"
        | "ExpressionTooLong"
        | "DataUpdateRateExceeded"
        | "RestrictedEmailDomain"
        | "EncryptionKeyDisabled"
        | "EncryptionKeyMissing"
        | "EncryptionKeyBroken"
        | "NoSharedSecretKeyConfigured"
        | "SecretKeyNotFound"
        | "PlayerSecretAlreadyConfigured"
        | "APIRequestsDisabledForTitle"
        | "InvalidSharedSecretKey"
        | "PrizeTableHasNoRanks"
        | "ProfileDoesNotExist"
        | "ContentS3OriginBucketNotConfigured"
        | "InvalidEnvironmentForReceipt"
        | "EncryptedRequestNotAllowed"
        | "SignedRequestNotAllowed"
        | "RequestViewConstraintParamsNotAllowed"
        | "BadPartnerConfiguration"
        | "XboxBPCertificateFailure"
        | "XboxXASSExchangeFailure"
        | "InvalidEntityId"
        | "StatisticValueAggregationOverflow"
        | "EmailMessageFromAddressIsMissing"
        | "EmailMessageToAddressIsMissing"
        | "SmtpServerAuthenticationError"
        | "SmtpServerLimitExceeded"
        | "SmtpServerInsufficientStorage"
        | "SmtpServerCommunicationError"
        | "SmtpServerGeneralFailure"
        | "EmailClientTimeout"
        | "EmailClientCanceledTask"
        | "EmailTemplateMissing"
        | "InvalidHostForTitleId"
        | "EmailConfirmationTokenDoesNotExist"
        | "EmailConfirmationTokenExpired"
        | "AccountDeleted"
        | "PlayerSecretNotConfigured"
        | "InvalidSignatureTime"
        | "NoContactEmailAddressFound"
        | "InvalidAuthToken"
        | "AuthTokenDoesNotExist"
        | "AuthTokenExpired"
        | "AuthTokenAlreadyUsedToResetPassword"
        | "MembershipNameTooLong"
        | "MembershipNotFound"
        | "GoogleServiceAccountInvalid"
        | "GoogleServiceAccountParseFailure"
        | "EntityTokenMissing"
        | "EntityTokenInvalid"
        | "EntityTokenExpired"
        | "EntityTokenRevoked"
        | "InvalidProductForSubscription"
        | "XboxInaccessible"
        | "SubscriptionAlreadyTaken"
        | "SmtpAddonNotEnabled"
        | "APIConcurrentRequestLimitExceeded"
        | "XboxRejectedXSTSExchangeRequest"
        | "VariableNotDefined"
        | "TemplateVersionNotDefined"
        | "FileTooLarge"
        | "TitleDeleted"
        | "TitleContainsUserAccounts"
        | "TitleDeletionPlayerCleanupFailure"
        | "EntityFileOperationPending"
        | "NoEntityFileOperationPending"
        | "EntityProfileVersionMismatch"
        | "TemplateVersionTooOld"
        | "MembershipDefinitionInUse"
        | "PaymentPageNotConfigured"
        | "FailedLoginAttemptRateLimitExceeded"
        | "EntityBlockedByGroup"
        | "RoleDoesNotExist"
        | "EntityIsAlreadyMember"
        | "DuplicateRoleId"
        | "GroupInvitationNotFound"
        | "GroupApplicationNotFound"
        | "OutstandingInvitationAcceptedInstead"
        | "OutstandingApplicationAcceptedInstead"
        | "RoleIsGroupDefaultMember"
        | "RoleIsGroupAdmin"
        | "RoleNameNotAvailable"
        | "GroupNameNotAvailable"
        | "EmailReportAlreadySent"
        | "EmailReportRecipientBlacklisted"
        | "EventNamespaceNotAllowed"
        | "EventEntityNotAllowed"
        | "InvalidEntityType"
        | "NullTokenResultFromAad"
        | "InvalidTokenResultFromAad"
        | "NoValidCertificateForAad"
        | "InvalidCertificateForAad"
        | "DuplicateDropTableId"
        | "MultiplayerServerError"
        | "MultiplayerServerTooManyRequests"
        | "MultiplayerServerNoContent"
        | "MultiplayerServerBadRequest"
        | "MultiplayerServerUnauthorized"
        | "MultiplayerServerForbidden"
        | "MultiplayerServerNotFound"
        | "MultiplayerServerConflict"
        | "MultiplayerServerInternalServerError"
        | "MultiplayerServerUnavailable"
        | "ExplicitContentDetected"
        | "PIIContentDetected"
        | "InvalidScheduledTaskParameter"
        | "PerEntityEventRateLimitExceeded"
        | "TitleDefaultLanguageNotSet"
        | "EmailTemplateMissingDefaultVersion"
        | "FacebookInstantGamesIdNotLinked"
        | "InvalidFacebookInstantGamesSignature"
        | "FacebookInstantGamesAuthNotConfiguredForTitle"
        | "EntityProfileConstraintValidationFailed"
        | "TelemetryIngestionKeyPending"
        | "TelemetryIngestionKeyNotFound"
        | "StatisticChildNameInvalid"
        | "DataIntegrityError"
        | "VirtualCurrencyCannotBeSetToOlderVersion"
        | "VirtualCurrencyMustBeWithinIntegerRange"
        | "EmailTemplateInvalidSyntax"
        | "EmailTemplateMissingCallback"
        | "PushNotificationTemplateInvalidPayload"
        | "InvalidLocalizedPushNotificationLanguage"
        | "MissingLocalizedPushNotificationMessage"
        | "PushNotificationTemplateMissingPlatformPayload"
        | "PushNotificationTemplatePayloadContainsInvalidJson"
        | "PushNotificationTemplateContainsInvalidIosPayload"
        | "PushNotificationTemplateContainsInvalidAndroidPayload"
        | "PushNotificationTemplateIosPayloadMissingNotificationBody"
        | "PushNotificationTemplateAndroidPayloadMissingNotificationBody"
        | "PushNotificationTemplateNotFound"
        | "PushNotificationTemplateMissingDefaultVersion"
        | "PushNotificationTemplateInvalidSyntax"
        | "PushNotificationTemplateNoCustomPayloadForV1"
        | "NoLeaderboardForStatistic"
        | "TitleNewsMissingDefaultLanguage"
        | "TitleNewsNotFound"
        | "TitleNewsDuplicateLanguage"
        | "TitleNewsMissingTitleOrBody"
        | "TitleNewsInvalidLanguage"
        | "EmailRecipientBlacklisted"
        | "InvalidGameCenterAuthRequest"
        | "GameCenterAuthenticationFailed"
        | "CannotEnablePartiesForTitle"
        | "PartyError"
        | "PartyRequests"
        | "PartyNoContent"
        | "PartyBadRequest"
        | "PartyUnauthorized"
        | "PartyForbidden"
        | "PartyNotFound"
        | "PartyConflict"
        | "PartyInternalServerError"
        | "PartyUnavailable"
        | "PartyTooManyRequests"
        | "PushNotificationTemplateMissingName"
        | "CannotEnableMultiplayerServersForTitle"
        | "WriteAttemptedDuringExport"
        | "MultiplayerServerTitleQuotaCoresExceeded"
        | "AutomationRuleNotFound"
        | "EntityAPIKeyLimitExceeded"
        | "EntityAPIKeyNotFound"
        | "EntityAPIKeyOrSecretInvalid"
        | "EconomyServiceUnavailable"
        | "EconomyServiceInternalError"
        | "QueryRateLimitExceeded"
        | "EntityAPIKeyCreationDisabledForEntity"
        | "ForbiddenByEntityPolicy"
        | "UpdateInventoryRateLimitExceeded"
        | "StudioCreationRateLimited"
        | "StudioCreationInProgress"
        | "DuplicateStudioName"
        | "StudioNotFound"
        | "StudioDeleted"
        | "StudioDeactivated"
        | "StudioActivated"
        | "TitleCreationRateLimited"
        | "TitleCreationInProgress"
        | "DuplicateTitleName"
        | "TitleActivationRateLimited"
        | "TitleActivationInProgress"
        | "TitleDeactivated"
        | "TitleActivated"
        | "CloudScriptAzureFunctionsExecutionTimeLimitExceeded"
        | "CloudScriptAzureFunctionsArgumentSizeExceeded"
        | "CloudScriptAzureFunctionsReturnSizeExceeded"
        | "CloudScriptAzureFunctionsHTTPRequestError"
        | "VirtualCurrencyBetaGetError"
        | "VirtualCurrencyBetaCreateError"
        | "VirtualCurrencyBetaInitialDepositSaveError"
        | "VirtualCurrencyBetaSaveError"
        | "VirtualCurrencyBetaDeleteError"
        | "VirtualCurrencyBetaRestoreError"
        | "VirtualCurrencyBetaSaveConflict"
        | "VirtualCurrencyBetaUpdateError"
        | "InsightsManagementDatabaseNotFound"
        | "InsightsManagementOperationNotFound"
        | "InsightsManagementErrorPendingOperationExists"
        | "InsightsManagementSetPerformanceLevelInvalidParameter"
        | "InsightsManagementSetStorageRetentionInvalidParameter"
        | "InsightsManagementGetStorageUsageInvalidParameter"
        | "InsightsManagementGetOperationStatusInvalidParameter"
        | "DuplicatePurchaseTransactionId"
        | "EvaluationModePlayerCountExceeded"
        | "GetPlayersInSegmentRateLimitExceeded"
        | "CloudScriptFunctionNameSizeExceeded"
        | "PaidInsightsFeaturesNotEnabled"
        | "CloudScriptAzureFunctionsQueueRequestError"
        | "EvaluationModeTitleCountExceeded"
        | "InsightsManagementTitleNotInFlight"
        | "LimitNotFound"
        | "LimitNotAvailableViaAPI"
        | "InsightsManagementSetStorageRetentionBelowMinimum"
        | "InsightsManagementSetStorageRetentionAboveMaximum"
        | "AppleNotEnabledForTitle"
        | "InsightsManagementNewActiveEventExportLimitInvalid"
        | "InsightsManagementSetPerformanceRateLimited"
        | "PartyRequestsThrottledFromRateLimiter"
        | "XboxServiceTooManyRequests"
        | "NintendoSwitchNotEnabledForTitle"
        | "RequestMultiplayerServersThrottledFromRateLimiter"
        | "TitleDataOverrideNotFound"
        | "DuplicateKeys"
        | "WasNotCreatedWithCloudRoot"
        | "LegacyMultiplayerServersDeprecated"
        | "VirtualCurrencyCurrentlyUnavailable"
        | "SteamUserNotFound"
        | "ElasticSearchOperationFailed"
        | "NotImplemented"
        | "PublisherNotFound"
        | "PublisherDeleted"
        | "ApiDisabledForMigration"
        | "ResourceNameUpdateNotAllowed"
        | "ApiNotEnabledForTitle"
        | "DuplicateTitleNameForPublisher"
        | "AzureTitleCreationInProgress"
        | "TitleConstraintsPublisherDeletion"
        | "InvalidPlayerAccountPoolId"
        | "PlayerAccountPoolNotFound"
        | "PlayerAccountPoolDeleted"
        | "TitleCleanupInProgress"
        | "AzureResourceConcurrentOperationInProgress"
        | "TitlePublisherUpdateNotAllowed"
        | "AzureResourceManagerNotSupportedInStamp"
        | "ApiNotIncludedInAzurePlayFabFeatureSet"
        | "GoogleServiceAccountFailedAuth"
        | "GoogleAPIServiceUnavailable"
        | "GoogleAPIServiceUnknownError"
        | "NoValidIdentityForAad"
        | "PlayerIdentityLinkNotFound"
        | "PhotonApplicationIdAlreadyInUse"
        | "CloudScriptUnableToDeleteProductionRevision"
        | "CustomIdNotFound"
        | "AutomationInvalidInput"
        | "AutomationInvalidRuleName"
        | "AutomationRuleAlreadyExists"
        | "AutomationRuleLimitExceeded"
        | "InvalidGooglePlayGamesServerAuthCode"
        | "PlayStreamConnectionFailed"
        | "InvalidEventContents"
        | "InsightsV1Deprecated"
        | "AnalysisSubscriptionNotFound"
        | "AnalysisSubscriptionFailed"
        | "AnalysisSubscriptionFoundAlready"
        | "AnalysisSubscriptionManagementInvalidInput"
        | "InvalidGameCenterId"
        | "InvalidNintendoSwitchAccountId"
        | "EntityAPIKeysNotSupported"
        | "IpAddressBanned"
        | "EntityLineageBanned"
        | "NamespaceMismatch"
        | "InvalidServiceConfiguration"
        | "InvalidNamespaceMismatch"
        | "LeaderboardColumnLengthMismatch"
        | "InvalidStatisticScore"
        | "LeaderboardColumnsNotSpecified"
        | "LeaderboardMaxSizeTooLarge"
        | "InvalidAttributeStatisticsSpecified"
        | "LeaderboardNotFound"
        | "TokenSigningKeyNotFound"
        | "LeaderboardNameConflict"
        | "LinkedStatisticColumnMismatch"
        | "NoLinkedStatisticToLeaderboard"
        | "StatDefinitionAlreadyLinkedToLeaderboard"
        | "LinkingStatsNotAllowedForEntityType"
        | "LeaderboardCountLimitExceeded"
        | "LeaderboardSizeLimitExceeded"
        | "LeaderboardDefinitionModificationNotAllowedWhileLinked"
        | "StatisticDefinitionModificationNotAllowedWhileLinked"
        | "LeaderboardUpdateNotAllowedWhileLinked"
        | "CloudScriptAzureFunctionsEventHubRequestError"
        | "ExternalEntityNotAllowedForTier"
        | "InvalidBaseTimeForInterval"
        | "EntityTypeMismatchWithStatDefinition"
        | "SpecifiedVersionLeaderboardNotFound"
        | "LeaderboardColumnLengthMismatchWithStatDefinition"
        | "DuplicateColumnNameFound"
        | "LinkedStatisticColumnNotFound"
        | "LinkedStatisticColumnRequired"
        | "MultipleLinkedStatisticsNotAllowed"
        | "MaxQueryableVerionsValueNotAllowedForTier"
        | "MatchmakingEntityInvalid"
        | "MatchmakingPlayerAttributesInvalid"
        | "MatchmakingQueueNotFound"
        | "MatchmakingMatchNotFound"
        | "MatchmakingTicketNotFound"
        | "MatchmakingAlreadyJoinedTicket"
        | "MatchmakingTicketAlreadyCompleted"
        | "MatchmakingQueueConfigInvalid"
        | "MatchmakingMemberProfileInvalid"
        | "NintendoSwitchDeviceIdNotLinked"
        | "MatchmakingNotEnabled"
        | "MatchmakingPlayerAttributesTooLarge"
        | "MatchmakingNumberOfPlayersInTicketTooLarge"
        | "MatchmakingAttributeInvalid"
        | "MatchmakingPlayerHasNotJoinedTicket"
        | "MatchmakingRateLimitExceeded"
        | "MatchmakingTicketMembershipLimitExceeded"
        | "MatchmakingUnauthorized"
        | "MatchmakingQueueLimitExceeded"
        | "MatchmakingRequestTypeMismatch"
        | "MatchmakingBadRequest"
        | "PubSubFeatureNotEnabledForTitle"
        | "PubSubTooManyRequests"
        | "PubSubConnectionNotFoundForEntity"
        | "PubSubConnectionHandleInvalid"
        | "PubSubSubscriptionLimitExceeded"
        | "TitleConfigNotFound"
        | "TitleConfigUpdateConflict"
        | "TitleConfigSerializationError"
        | "CatalogApiNotImplemented"
        | "CatalogEntityInvalid"
        | "CatalogTitleIdMissing"
        | "CatalogPlayerIdMissing"
        | "CatalogClientIdentityInvalid"
        | "CatalogOneOrMoreFilesInvalid"
        | "CatalogItemMetadataInvalid"
        | "CatalogItemIdInvalid"
        | "CatalogSearchParameterInvalid"
        | "CatalogFeatureDisabled"
        | "CatalogConfigInvalid"
        | "CatalogItemTypeInvalid"
        | "CatalogBadRequest"
        | "CatalogTooManyRequests"
        | "InvalidCatalogItemConfiguration"
        | "ExportInvalidStatusUpdate"
        | "ExportInvalidPrefix"
        | "ExportBlobContainerDoesNotExist"
        | "ExportNotFound"
        | "ExportCouldNotUpdate"
        | "ExportInvalidStorageType"
        | "ExportAmazonBucketDoesNotExist"
        | "ExportInvalidBlobStorage"
        | "ExportKustoException"
        | "ExportKustoConnectionFailed"
        | "ExportUnknownError"
        | "ExportCantEditPendingExport"
        | "ExportLimitExports"
        | "ExportLimitEvents"
        | "ExportInvalidPartitionStatusModification"
        | "ExportCouldNotCreate"
        | "ExportNoBackingDatabaseFound"
        | "ExportCouldNotDelete"
        | "ExportCannotDetermineEventQuery"
        | "ExportInvalidQuerySchemaModification"
        | "ExportQuerySchemaMissingRequiredColumns"
        | "ExportCannotParseQuery"
        | "ExportControlCommandsNotAllowed"
        | "ExportQueryMissingTableReference"
        | "ExportInsightsV1Deprecated"
        | "ExplorerBasicInvalidQueryName"
        | "ExplorerBasicInvalidQueryDescription"
        | "ExplorerBasicInvalidQueryConditions"
        | "ExplorerBasicInvalidQueryStartDate"
        | "ExplorerBasicInvalidQueryEndDate"
        | "ExplorerBasicInvalidQueryGroupBy"
        | "ExplorerBasicInvalidQueryAggregateType"
        | "ExplorerBasicInvalidQueryAggregateProperty"
        | "ExplorerBasicLoadQueriesError"
        | "ExplorerBasicLoadQueryError"
        | "ExplorerBasicCreateQueryError"
        | "ExplorerBasicDeleteQueryError"
        | "ExplorerBasicUpdateQueryError"
        | "ExplorerBasicSavedQueriesLimit"
        | "ExplorerBasicSavedQueryNotFound"
        | "TenantShardMapperShardNotFound"
        | "TitleNotEnabledForParty"
        | "PartyVersionNotFound"
        | "MultiplayerServerBuildReferencedByMatchmakingQueue"
        | "MultiplayerServerBuildReferencedByBuildAlias"
        | "MultiplayerServerBuildAliasReferencedByMatchmakingQueue"
        | "PartySerializationError"
        | "ExperimentationExperimentStopped"
        | "ExperimentationExperimentRunning"
        | "ExperimentationExperimentNotFound"
        | "ExperimentationExperimentNeverStarted"
        | "ExperimentationExperimentDeleted"
        | "ExperimentationClientTimeout"
        | "ExperimentationInvalidVariantConfiguration"
        | "ExperimentationInvalidVariableConfiguration"
        | "ExperimentInvalidId"
        | "ExperimentationNoScorecard"
        | "ExperimentationTreatmentAssignmentFailed"
        | "ExperimentationTreatmentAssignmentDisabled"
        | "ExperimentationInvalidDuration"
        | "ExperimentationMaxExperimentsReached"
        | "ExperimentationExperimentSchedulingInProgress"
        | "ExperimentationInvalidEndDate"
        | "ExperimentationInvalidStartDate"
        | "ExperimentationMaxDurationExceeded"
        | "ExperimentationExclusionGroupNotFound"
        | "ExperimentationExclusionGroupInsufficientCapacity"
        | "ExperimentationExclusionGroupCannotDelete"
        | "ExperimentationExclusionGroupInvalidTrafficAllocation"
        | "ExperimentationExclusionGroupInvalidName"
        | "MaxActionDepthExceeded"
        | "TitleNotOnUpdatedPricingPlan"
        | "SegmentManagementTitleNotInFlight"
        | "SegmentManagementNoExpressionTree"
        | "SegmentManagementTriggerActionCountOverLimit"
        | "SegmentManagementSegmentCountOverLimit"
        | "SegmentManagementInvalidSegmentId"
        | "SegmentManagementInvalidInput"
        | "SegmentManagementInvalidSegmentName"
        | "DeleteSegmentRateLimitExceeded"
        | "CreateSegmentRateLimitExceeded"
        | "UpdateSegmentRateLimitExceeded"
        | "GetSegmentsRateLimitExceeded"
        | "AsyncExportNotInFlight"
        | "AsyncExportNotFound"
        | "AsyncExportRateLimitExceeded"
        | "AnalyticsSegmentCountOverLimit"
        | "SnapshotNotFound"
        | "InventoryApiNotImplemented"
        | "LobbyDoesNotExist"
        | "LobbyRateLimitExceeded"
        | "LobbyPlayerAlreadyJoined"
        | "LobbyNotJoinable"
        | "LobbyMemberCannotRejoin"
        | "LobbyCurrentPlayersMoreThanMaxPlayers"
        | "LobbyPlayerNotPresent"
        | "LobbyBadRequest"
        | "LobbyPlayerMaxLobbyLimitExceeded"
        | "LobbyNewOwnerMustBeConnected"
        | "LobbyCurrentOwnerStillConnected"
        | "LobbyMemberIsNotOwner"
        | "LobbyServerMismatch"
        | "LobbyServerNotFound"
        | "LobbyDifferentServerAlreadyJoined"
        | "LobbyServerAlreadyJoined"
        | "LobbyIsNotClientOwned"
        | "LobbyDoesNotUseConnections"
        | "EventSamplingInvalidRatio"
        | "EventSamplingInvalidEventNamespace"
        | "EventSamplingInvalidEventName"
        | "EventSamplingRatioNotFound"
        | "TelemetryKeyNotFound"
        | "TelemetryKeyInvalidName"
        | "TelemetryKeyAlreadyExists"
        | "TelemetryKeyInvalid"
        | "TelemetryKeyCountOverLimit"
        | "TelemetryKeyDeactivated"
        | "TelemetryKeyLongInsightsRetentionNotAllowed"
        | "EventSinkConnectionInvalid"
        | "EventSinkConnectionUnauthorized"
        | "EventSinkRegionInvalid"
        | "EventSinkLimitExceeded"
        | "EventSinkSasTokenInvalid"
        | "EventSinkNotFound"
        | "EventSinkNameInvalid"
        | "EventSinkSasTokenPermissionInvalid"
        | "EventSinkSecretInvalid"
        | "EventSinkTenantNotFound"
        | "EventSinkAadNotFound"
        | "EventSinkDatabaseNotFound"
        | "EventSinkTitleUnauthorized"
        | "EventSinkInsufficientRoleAssignment"
        | "EventSinkContainerNotFound"
        | "EventSinkTenantIdInvalid"
        | "OperationCanceled"
        | "InvalidDisplayNameRandomSuffixLength"
        | "AllowNonUniquePlayerDisplayNamesDisableNotAllowed"
        | "PartitionedEventInvalid"
        | "PartitionedEventCountOverLimit"
        | "ManageEventNamespaceInvalid"
        | "ManageEventNameInvalid"
        | "ManagedEventNotFound"
        | "ManageEventsInvalidRatio"
        | "ManagedEventInvalid"
        | "PlayerCustomPropertiesPropertyNameTooLong"
        | "PlayerCustomPropertiesPropertyNameIsInvalid"
        | "PlayerCustomPropertiesStringPropertyValueTooLong"
        | "PlayerCustomPropertiesValueIsInvalidType"
        | "PlayerCustomPropertiesVersionMismatch"
        | "PlayerCustomPropertiesPropertyCountTooHigh"
        | "PlayerCustomPropertiesDuplicatePropertyName"
        | "PlayerCustomPropertiesPropertyDoesNotExist"
        | "AddonAlreadyExists"
        | "AddonDoesntExist"
        | "CopilotDisabled"
        | "CopilotInvalidRequest"
        | "TrueSkillUnauthorized"
        | "TrueSkillInvalidTitleId"
        | "TrueSkillInvalidScenarioId"
        | "TrueSkillInvalidModelId"
        | "TrueSkillInvalidModelName"
        | "TrueSkillInvalidPlayerIds"
        | "TrueSkillInvalidEntityKey"
        | "TrueSkillInvalidConditionKey"
        | "TrueSkillInvalidConditionValue"
        | "TrueSkillInvalidConditionAffinityWeight"
        | "TrueSkillInvalidEventName"
        | "TrueSkillMatchResultCreated"
        | "TrueSkillMatchResultAlreadySubmitted"
        | "TrueSkillBadPlayerIdInMatchResult"
        | "TrueSkillInvalidBotIdInMatchResult"
        | "TrueSkillDuplicatePlayerInMatchResult"
        | "TrueSkillNoPlayerInMatchResultTeam"
        | "TrueSkillPlayersInMatchResultExceedingLimit"
        | "TrueSkillInvalidPreMatchPartyInMatchResult"
        | "TrueSkillInvalidTimestampInMatchResult"
        | "TrueSkillStartTimeMissingInMatchResult"
        | "TrueSkillEndTimeMissingInMatchResult"
        | "TrueSkillInvalidPlayerSecondsPlayedInMatchResult"
        | "TrueSkillNoTeamInMatchResult"
        | "TrueSkillNotEnoughTeamsInMatchResult"
        | "TrueSkillInvalidRanksInMatchResult"
        | "TrueSkillNoWinnerInMatchResult"
        | "TrueSkillMissingRequiredCondition"
        | "TrueSkillMissingRequiredEvent"
        | "TrueSkillUnknownEventName"
        | "TrueSkillInvalidEventCount"
        | "TrueSkillUnknownConditionKey"
        | "TrueSkillUnknownConditionValue"
        | "TrueSkillScenarioConfigDoesNotExist"
        | "TrueSkillUnknownModelId"
        | "TrueSkillNoModelInScenario"
        | "TrueSkillNotSupportedForTitle"
        | "TrueSkillModelIsNotActive"
        | "TrueSkillUnauthorizedToQueryOtherPlayerSkills"
        | "TrueSkillInvalidMaxIterations"
        | "TrueSkillEndTimeBeforeStartTime"
        | "TrueSkillInvalidJobId"
        | "TrueSkillInvalidMetadataId"
        | "TrueSkillMissingBuildVerison"
        | "TrueSkillJobAlreadyExists"
        | "TrueSkillJobNotFound"
        | "TrueSkillOperationCanceled"
        | "TrueSkillActiveModelLimitExceeded"
        | "TrueSkillTotalModelLimitExceeded"
        | "TrueSkillUnknownInitialModelId"
        | "TrueSkillUnauthorizedForJob"
        | "TrueSkillInvalidScenarioName"
        | "TrueSkillConditionStateIsRequired"
        | "TrueSkillEventStateIsRequired"
        | "TrueSkillDuplicateEvent"
        | "TrueSkillDuplicateCondition"
        | "TrueSkillInvalidAnomalyThreshold"
        | "TrueSkillConditionKeyLimitExceeded"
        | "TrueSkillConditionValuePerKeyLimitExceeded"
        | "TrueSkillInvalidTimestamp"
        | "TrueSkillEventLimitExceeded"
        | "TrueSkillInvalidPlayers"
        | "TrueSkillTrueSkillPlayerNull"
        | "TrueSkillInvalidPlayerId"
        | "TrueSkillInvalidSquadSize"
        | "TrueSkillConditionSetNotInModel"
        | "GameSaveManifestNotFound"
        | "GameSaveManifestVersionAlreadyExists"
        | "GameSaveConflictUpdatingManifest"
        | "StateShareForbidden"
        | "StateShareTitleNotInFlight"
        | "StateShareStateNotFound"
        | "StateShareLinkNotFound"
        | "StateShareStateRedemptionLimitExceeded"
        | "StateShareStateRedemptionLimitNotUpdated"
        | "StateShareCreatedStatesLimitExceeded"
        | "StateShareIdMissingOrMalformed";

    export interface GetActionsOnPlayersInSegmentTaskInstanceResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Parameter of this task instance */
        Parameter?: ActionsOnPlayersInSegmentTaskParameter;
        /** Status summary of the actions-on-players-in-segment task instance */
        Summary?: ActionsOnPlayersInSegmentTaskSummary;

    }

    export interface GetAllSegmentsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    export interface GetAllSegmentsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of segments for this title. */
        Segments?: GetSegmentResult[];

    }

    export interface GetCatalogItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Which catalog is being requested. If null, uses the default catalog. */
        CatalogVersion?: string;

    }

    export interface GetCatalogItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of items which can be purchased. */
        Catalog?: CatalogItem[];

    }

    export interface GetCloudScriptRevisionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Revision number. If left null, defaults to the latest revision */
        Revision?: number;
        /** Version number. If left null, defaults to the latest version */
        Version?: number;

    }

    export interface GetCloudScriptRevisionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Time this revision was created */
        CreatedAt: string;
        /** List of Cloud Script files in this revision. */
        Files?: CloudScriptFile[];
        /** True if this is the currently published revision */
        IsPublished: boolean;
        /** Revision number. */
        Revision: number;
        /** Version number. */
        Version: number;

    }

    export interface GetCloudScriptTaskInstanceResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Parameter of this task instance */
        Parameter?: CloudScriptTaskParameter;
        /** Status summary of the CloudScript task instance */
        Summary?: CloudScriptTaskSummary;

    }

    export interface GetCloudScriptVersionsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    export interface GetCloudScriptVersionsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** List of versions */
        Versions?: CloudScriptVersionStatus[];

    }

    export interface GetContentListRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Limits the response to keys that begin with the specified prefix. You can use prefixes to list contents under a folder,
         * or for a specified version, etc.
         */
        Prefix?: string;

    }

    export interface GetContentListResult extends PlayFabModule.IPlayFabResultCommon  {
        /** List of content items. */
        Contents?: ContentInfo[];
        /** Number of content items returned. We currently have a maximum of 1000 items limit. */
        ItemCount: number;
        /** The total size of listed contents in bytes. */
        TotalSize: number;

    }

    export interface GetContentUploadUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * A standard MIME type describing the format of the contents. The same MIME type has to be set in the header when
         * uploading the content. If not specified, the MIME type is 'binary/octet-stream' by default.
         */
        ContentType?: string;
        /** Key of the content item to upload, usually formatted as a path, e.g. images/a.png */
        Key: string;

    }

    export interface GetContentUploadUrlResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * URL for uploading content via HTTP PUT method. The URL requires the 'x-ms-blob-type' header to have the value
         * 'BlockBlob'. The URL will expire in approximately one hour.
         */
        URL?: string;

    }

    export interface GetDataReportRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Reporting year (UTC) */
        Day: number;
        /** Reporting month (UTC) */
        Month: number;
        /** Report name */
        ReportName: string;
        /** Reporting year (UTC) */
        Year: number;

    }

    export interface GetDataReportResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The URL where the requested report can be downloaded. This can be any PlayFab generated reports. The full list of
         * reports can be found at: https://docs.microsoft.com/en-us/gaming/playfab/features/analytics/reports/quickstart.
         */
        DownloadUrl?: string;

    }

    export interface GetPlayedTitleListRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface GetPlayedTitleListResult extends PlayFabModule.IPlayFabResultCommon  {
        /** List of titles the player has played */
        TitleIds?: string[];

    }

    export interface GetPlayerIdFromAuthTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The auth token of the player requesting the password reset. */
        Token: string;
        /** The type of auth token of the player requesting the password reset. */
        TokenType: string;

    }

    export interface GetPlayerIdFromAuthTokenResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The player ID from the token passed in */
        PlayFabId?: string;

    }

    export interface GetPlayerProfileRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: PlayerProfileViewConstraints;

    }

    export interface GetPlayerProfileResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The profile of the player. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
         * exist.
         */
        PlayerProfile?: PlayerProfileModel;

    }

    export interface GetPlayerSegmentsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of segments the requested player currently belongs to. */
        Segments?: GetSegmentResult[];

    }

    export interface GetPlayerSharedSecretsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    export interface GetPlayerSharedSecretsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The player shared secret to use when calling Client/GetTitlePublicKey */
        SharedSecrets?: SharedSecret[];

    }

    export interface GetPlayersInSegmentExportRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique identifier of the export for the requested Segment. */
        ExportId: string;

    }

    export interface GetPlayersInSegmentExportResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Url from which the index file can be downloaded. */
        IndexUrl?: string;
        /** Shows the current status of the export */
        State?: string;

    }

    export interface GetPlayersInSegmentRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Continuation token if retrieving subsequent pages of results. */
        ContinuationToken?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * If set to true, the profiles are loaded asynchronously and the response will include a continuation token and
         * approximate profile count until the first batch of profiles is loaded. Use this parameter to help avoid network
         * timeouts.
         */
        GetProfilesAsync?: boolean;
        /**
         * Maximum is 10,000. The value 0 will prevent loading any profiles and return only the count of profiles matching this
         * segment.
         */
        MaxBatchSize?: number;
        /**
         * Number of seconds to keep the continuation token active. After token expiration it is not possible to continue paging
         * results. Default is 300 (5 minutes). Maximum is 5,400 (90 minutes).
         */
        SecondsToLive?: number;
        /** Unique identifier for this segment. */
        SegmentId: string;

    }

    export interface GetPlayersInSegmentResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Continuation token to use to retrieve subsequent pages of results. If token returns null there are no more results. */
        ContinuationToken?: string;
        /** Array of player profiles in this segment. */
        PlayerProfiles?: PlayerProfile[];
        /** Count of profiles matching this segment. */
        ProfilesInSegment: number;

    }

    export interface GetPlayersSegmentsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface GetPlayerStatisticDefinitionsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    export interface GetPlayerStatisticDefinitionsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** the player statistic definitions for the title */
        Statistics?: PlayerStatisticDefinition[];

    }

    export interface GetPlayerStatisticVersionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** unique name of the statistic */
        StatisticName?: string;

    }

    export interface GetPlayerStatisticVersionsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** version change history of the statistic */
        StatisticVersions?: PlayerStatisticVersion[];

    }

    export interface GetPlayerTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Optional namespace to filter results by */
        Namespace?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface GetPlayerTagsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /** Canonical tags (including namespace and tag's name) for the requested user */
        Tags: string[];

    }

    export interface GetPolicyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The name of the policy to read. Only supported name is 'ApiPolicy'. */
        PolicyName?: string;

    }

    export interface GetPolicyResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The name of the policy read. */
        PolicyName?: string;
        /** Policy version. */
        PolicyVersion: number;
        /** The statements in the requested policy. */
        Statements?: PermissionStatement[];

    }

    export interface GetPublisherDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** array of keys to get back data from the Publisher data blob, set by the admin tools */
        Keys: string[];

    }

    export interface GetPublisherDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** a dictionary object of key / value pairs */
        Data?: { [key: string]: string | null };

    }

    export interface GetRandomResultTablesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** catalog version to fetch tables from. Use default catalog version if null */
        CatalogVersion?: string;

    }

    export interface GetRandomResultTablesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** array of random result tables currently available */
        Tables?: { [key: string]: RandomResultTableListing };

    }

    export interface GetSegmentResult {
        /** Identifier of the segments AB Test, if it is attached to one. */
        ABTestParent?: string;
        /** Unique identifier for this segment. */
        Id: string;
        /** Segment name. */
        Name?: string;

    }

    export interface GetSegmentsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Segment ids to filter title segments. */
        SegmentIds: string[];

    }

    export interface GetSegmentsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Error message. */
        ErrorMessage?: string;
        /** List of title segments. */
        Segments?: SegmentModel[];

    }

    export interface GetStoreItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version to store items from. Use default catalog version if null */
        CatalogVersion?: string;
        /** Unqiue identifier for the store which is being requested. */
        StoreId: string;

    }

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

    export interface GetTaskInstanceRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** ID of the requested task instance. */
        TaskInstanceId: string;

    }

    export interface GetTaskInstancesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Optional range-from filter for task instances' StartedAt timestamp. */
        StartedAtRangeFrom?: string;
        /** Optional range-to filter for task instances' StartedAt timestamp. */
        StartedAtRangeTo?: string;
        /** Optional filter for task instances that are of a specific status. */
        StatusFilter?: string;
        /**
         * Name or ID of the task whose instances are being queried. If not specified, return all task instances that satisfy
         * conditions set by other filters.
         */
        TaskIdentifier?: NameIdentifier;

    }

    export interface GetTaskInstancesResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * Basic status summaries of the queried task instances. Empty If no task instances meets the filter criteria. To get
         * detailed status summary, use Get*TaskInstance API according to task type (e.g.
         * GetActionsOnPlayersInSegmentTaskInstance).
         */
        Summaries?: TaskInstanceBasicSummary[];

    }

    export interface GetTasksRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Provide either the task ID or the task name to get a specific task. If not specified, return all defined tasks. */
        Identifier?: NameIdentifier;

    }

    export interface GetTasksResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Result tasks. Empty if there is no task found. */
        Tasks?: ScheduledTask[];

    }

    export interface GetTitleDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Specific keys to search for in the title data (leave null to get all keys) */
        Keys?: string[];
        /**
         * Optional field that specifies the name of an override. This value is ignored when used by the game client; otherwise,
         * the overrides are applied automatically to the title data.
         */
        OverrideLabel?: string;

    }

    export interface GetTitleDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** a dictionary object of key / value pairs */
        Data?: { [key: string]: string | null };

    }

    export interface GetUserBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface GetUserBansResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Information about the bans */
        BanData?: BanInfo[];

    }

    export interface GetUserDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The version that currently exists according to the caller. The call will return the data for all of the keys if the
         * version in the system is greater than this.
         */
        IfChangedFromDataVersion?: number;
        /** Specific keys to search for in the custom user data. */
        Keys?: string[];
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface GetUserDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** User specific data for this title. */
        Data?: { [key: string]: UserDataRecord };
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number;
        /** PlayFab unique identifier of the user whose custom data is being returned. */
        PlayFabId?: string;

    }

    export interface GetUserInventoryRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface GetUserInventoryResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of inventory items belonging to the user. */
        Inventory?: ItemInstance[];
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;
        /** Array of virtual currency balance(s) belonging to the user. */
        VirtualCurrency?: { [key: string]: number };
        /** Array of remaining times and timestamps for virtual currencies. */
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };

    }

    export interface GrantedItemInstance {
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
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /**
         * A set of custom key-value pairs on the instance of the inventory item, which is not to be confused with the catalog
         * item's custom data.
         */
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
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;
        /** Timestamp for when this instance was purchased. */
        PurchaseDate?: string;
        /** Total number of remaining uses, if this is a consumable item. */
        RemainingUses?: number;
        /** Result of this operation. */
        Result: boolean;
        /** Currency type for the cost of the catalog item. Not available when granting items. */
        UnitCurrency?: string;
        /** Cost of the catalog item in the given currency. Not available when granting items. */
        UnitPrice: number;
        /** The number of uses that were added or removed to this item in this call. */
        UsesIncrementedBy?: number;

    }

    export interface GrantItemContent {
        /** The catalog version of the item to be granted to the player */
        CatalogVersion?: string;
        /** The id of item to be granted to the player */
        ItemId?: string;
        /** Quantity of the item to be granted to a player */
        ItemQuantity: number;

    }

    export interface GrantItemSegmentAction {
        /** Item catalog id. */
        CatelogId?: string;
        /** Item id. */
        ItemId?: string;
        /** Item quantity. */
        Quantity: number;

    }

    export interface GrantItemsToUsersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version from which items are to be granted. */
        CatalogVersion?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Array of items to grant and the users to whom the items are to be granted. */
        ItemGrants: ItemGrant[];

    }

    export interface GrantItemsToUsersResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of items granted to users. */
        ItemGrantResults?: GrantedItemInstance[];

    }

    export interface GrantVirtualCurrencyContent {
        /** Amount of currency to be granted to a player */
        CurrencyAmount: number;
        /** Code of the currency to be granted to a player */
        CurrencyCode: string;

    }

    export interface GrantVirtualCurrencySegmentAction {
        /** Virtual currency amount. */
        Amount: number;
        /** Virtual currency code. */
        CurrencyCode?: string;

    }

    export interface IncrementLimitedEditionItemAvailabilityRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Amount to increase availability by. */
        Amount: number;
        /** Which catalog is being updated. If null, uses the default catalog. */
        CatalogVersion?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The item which needs more availability. */
        ItemId: string;

    }

    export interface IncrementLimitedEditionItemAvailabilityResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface IncrementPlayerStatisticContent {
        /** Amount(in whole number) to increase the player statistic by */
        StatisticChangeBy: number;
        /** Name of the player statistic to be incremented */
        StatisticName: string;

    }

    export interface IncrementPlayerStatisticSegmentAction {
        /** Increment value. */
        IncrementValue: number;
        /** Statistic name. */
        StatisticName?: string;

    }

    export interface IncrementPlayerStatisticVersionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** unique name of the statistic */
        StatisticName?: string;

    }

    export interface IncrementPlayerStatisticVersionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** version change history of the statistic */
        StatisticVersion?: PlayerStatisticVersion;

    }

    export interface InsightsScalingTaskParameter {
        /** Insights Performance Level to scale to. */
        Level: number;

    }

    export interface ItemGrant {
        /** String detailing any additional information concerning this operation. */
        Annotation?: string;
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null };
        /** Unique identifier of the catalog item to be granted to the user. */
        ItemId: string;
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[];
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

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
        /**
         * A set of custom key-value pairs on the instance of the inventory item, which is not to be confused with the catalog
         * item's custom data.
         */
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
        /** Currency type for the cost of the catalog item. Not available when granting items. */
        UnitCurrency?: string;
        /** Cost of the catalog item in the given currency. Not available when granting items. */
        UnitPrice: number;
        /** The number of uses that were added or removed to this item in this call. */
        UsesIncrementedBy?: number;

    }

    export interface LastLoginDateSegmentFilter {
        /** Last player login date comparison. */
        Comparison?: string;
        /** Last player login date. */
        LogInDate: string;

    }

    export interface LastLoginTimespanSegmentFilter {
        /** Last player login duration comparison. */
        Comparison?: string;
        /** Last player login duration. */
        DurationInMinutes: number;

    }

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

    export interface LinkedUserAccountHasEmailSegmentFilter {
        /** Login provider comparison. */
        Comparison?: string;
        /** Login provider. */
        LoginProvider?: string;

    }

    export interface LinkedUserAccountSegmentFilter {
        /** Login provider. */
        LoginProvider?: string;

    }

    export interface ListOpenIdConnectionRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    export interface ListOpenIdConnectionResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of Open ID Connections */
        Connections?: OpenIdConnection[];

    }

    export interface ListVirtualCurrencyTypesRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    export interface ListVirtualCurrencyTypesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** List of virtual currency names defined for this title */
        VirtualCurrencies?: VirtualCurrencyData[];

    }

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

    export interface LocationSegmentFilter {
        /** Segment country code. */
        CountryCode?: string;

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
        | "WindowsHello"
        | "GameServer"
        | "CustomServer"
        | "NintendoSwitch"
        | "FacebookInstantGames"
        | "OpenIdConnect"
        | "Apple"
        | "NintendoSwitchAccount"
        | "GooglePlayGames"
        | "XboxMobileStore";

    export interface LogStatement {
        /** Optional object accompanying the message as contextual information */
        Data?: any;
        /** 'Debug', 'Info', or 'Error' */
        Level?: string;
        Message?: string;

    }

    export interface LookupUserAccountInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** User email address attached to their account */
        Email?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;
        /** Title specific username to match against existing user accounts */
        TitleDisplayName?: string;
        /** PlayFab username for the account (3-20 characters) */
        Username?: string;

    }

    export interface LookupUserAccountInfoResult extends PlayFabModule.IPlayFabResultCommon  {
        /** User info for the user matching the request */
        UserInfo?: UserAccountInfo;

    }

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

    export interface NameIdentifier {
        /** Id Identifier, if present */
        Id?: string;
        /** Name Identifier, if present */
        Name?: string;

    }

    export interface OpenIdConnection {
        /** The client ID given by the ID provider. */
        ClientId?: string;
        /** The client secret given by the ID provider. */
        ClientSecret?: string;
        /** A name for the connection to identify it within the title. */
        ConnectionId?: string;
        /** Shows if data about the connection will be loaded from the issuer's discovery document */
        DiscoverConfiguration: boolean;
        /** Ignore 'nonce' claim in identity tokens. */
        IgnoreNonce?: boolean;
        /** Information for an OpenID Connect provider. */
        IssuerInformation?: OpenIdIssuerInformation;
        /** Override the issuer name for user indexing and lookup. */
        IssuerOverride?: string;

    }

    export interface OpenIdIssuerInformation {
        /** Authorization endpoint URL to direct users to for signin. */
        AuthorizationUrl: string;
        /** The URL of the issuer of the tokens. This must match the exact URL of the issuer field in tokens. */
        Issuer: string;
        /** JSON Web Key Set for validating the signature of tokens. */
        JsonWebKeySet: any;
        /** Token endpoint URL for code verification. */
        TokenUrl: string;

    }

    export interface PermissionStatement {
        /** The action this statement effects. The only supported action is 'Execute'. */
        Action: string;
        /** Additional conditions to be applied for API Resources. */
        ApiConditions?: ApiCondition;
        /** A comment about the statement. Intended solely for bookkeeping and debugging. */
        Comment?: string;
        /** The effect this statement will have. It could be either Allow or Deny */
        Effect: string;
        /** The principal this statement will effect. The only supported principal is '*'. */
        Principal: string;
        /**
         * The resource this statements effects. The only supported resources look like 'pfrn:api--*' for all apis, or
         * 'pfrn:api--/Client/ConfirmPurchase' for specific apis.
         */
        Resource: string;

    }

    export interface PlayerChurnPredictionSegmentFilter {
        /** Comparison */
        Comparison?: string;
        /** RiskLevel */
        RiskLevel?: string;

    }

    export interface PlayerChurnPredictionTimeSegmentFilter {
        /** Comparison */
        Comparison?: string;
        /** DurationInDays */
        DurationInDays: number;

    }

    export interface PlayerChurnPreviousPredictionSegmentFilter {
        /** Comparison */
        Comparison?: string;
        /** RiskLevel */
        RiskLevel?: string;

    }

    export interface PlayerLinkedAccount {
        /** Linked account's email */
        Email?: string;
        /** Authentication platform */
        Platform?: string;
        /** Platform user identifier */
        PlatformUserId?: string;
        /** Linked account's username */
        Username?: string;

    }

    export interface PlayerLocation {
        /** City of the player's geographic location. */
        City?: string;
        /** The two-character continent code for this location */
        ContinentCode: string;
        /** The two-character ISO 3166-1 country code for the country associated with the location */
        CountryCode: string;
        /** Latitude coordinate of the player's geographic location. */
        Latitude?: number;
        /** Longitude coordinate of the player's geographic location. */
        Longitude?: number;

    }

    export interface PlayerProfile {
        /** Array of ad campaigns player has been attributed to */
        AdCampaignAttributions?: AdCampaignAttribution[];
        /** Image URL of the player's avatar. */
        AvatarUrl?: string;
        /** Banned until UTC Date. If permanent ban this is set for 20 years after the original ban date. */
        BannedUntil?: string;
        /** The prediction of the player to churn within the next seven days. */
        ChurnPrediction?: string;
        /** Array of contact email addresses associated with the player */
        ContactEmailAddresses?: ContactEmailInfo[];
        /** Player record created */
        Created?: string;
        /** Player Display Name */
        DisplayName?: string;
        /** Last login */
        LastLogin?: string;
        /** Array of third party accounts linked to this player */
        LinkedAccounts?: PlayerLinkedAccount[];
        /** Dictionary of player's locations by type. */
        Locations?: { [key: string]: PlayerLocation };
        /** Player account origination */
        Origination?: string;
        /** List of player variants for experimentation */
        PlayerExperimentVariants?: string[];
        /** PlayFab Player ID */
        PlayerId?: string;
        /** Array of player statistics */
        PlayerStatistics?: PlayerStatistic[];
        /** Publisher this player belongs to */
        PublisherId?: string;
        /** Array of configured push notification end points */
        PushNotificationRegistrations?: PushNotificationRegistration[];
        /** Dictionary of player's statistics using only the latest version's value */
        Statistics?: { [key: string]: number };
        /** List of player's tags for segmentation. */
        Tags?: string[];
        /** Title ID this profile applies to */
        TitleId?: string;
        /** A sum of player's total purchases in USD across all currencies. */
        TotalValueToDateInUSD?: number;
        /** Dictionary of player's total purchases by currency. */
        ValuesToDate?: { [key: string]: number };
        /** Dictionary of player's virtual currency balances */
        VirtualCurrencyBalances?: { [key: string]: number };

    }

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
        /**
         * List of experiment variants for the player. Note that these variants are not guaranteed to be up-to-date when returned
         * during login because the player profile is updated only after login. Instead, use the LoginResult.TreatmentAssignment
         * property during login to get the correct variants and variables.
         */
        ExperimentVariants?: string[];
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
         * whole number of cents (1/100 USD). For example, 999 indicates nine dollars and ninety-nine cents.
         */
        TotalValueToDateInUSD?: number;
        /** List of the player's lifetime purchase totals, summed by real-money currency */
        ValuesToDate?: ValueToDateModel[];

    }

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
        /** Whether to show player's experiment variants. Defaults to false */
        ShowExperimentVariants: boolean;
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

    export interface PlayerStatistic {
        /** Statistic ID */
        Id?: string;
        /** Statistic name */
        Name?: string;
        /** Current statistic value */
        StatisticValue: number;
        /** Statistic version (0 if not a versioned statistic) */
        StatisticVersion: number;

    }

    export interface PlayerStatisticDefinition {
        /** the aggregation method to use in updating the statistic (defaults to last) */
        AggregationMethod?: string;
        /** current active version of the statistic, incremented each time the statistic resets */
        CurrentVersion: number;
        /** unique name of the statistic */
        StatisticName?: string;
        /** interval at which the values of the statistic for all players are reset automatically */
        VersionChangeInterval?: string;

    }

    export interface PlayerStatisticVersion {
        /** time when the statistic version became active */
        ActivationTime: string;
        /** URL for the downloadable archive of player statistic values, if available */
        ArchiveDownloadUrl?: string;
        /** time when the statistic version became inactive due to statistic version incrementing */
        DeactivationTime?: string;
        /** time at which the statistic version was scheduled to become active, based on the configured ResetInterval */
        ScheduledActivationTime?: string;
        /** time at which the statistic version was scheduled to become inactive, based on the configured ResetInterval */
        ScheduledDeactivationTime?: string;
        /** name of the statistic when the version became active */
        StatisticName?: string;
        /** status of the statistic version */
        Status?: string;
        /** version of the statistic */
        Version: number;

    }

    export interface PushNotificationContent {
        /** Text of message to send. */
        Message?: string;
        /** Id of the push notification template. */
        PushNotificationTemplateId?: string;
        /** Subject of message to send (may not be displayed in all platforms) */
        Subject?: string;

    }

    type PushNotificationPlatform = "ApplePushNotificationService"

        | "GoogleCloudMessaging";

    export interface PushNotificationRegistration {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string;
        /** Push notification platform */
        Platform?: string;

    }

    export interface PushNotificationRegistrationModel {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string;
        /** Push notification platform */
        Platform?: string;

    }

    export interface PushNotificationSegmentAction {
        /** Push notification template id. */
        PushNotificationTemplateId?: string;

    }

    export interface PushNotificationSegmentFilter {
        /** Push notification device platform. */
        PushNotificationDevicePlatform?: string;

    }

    type PushSetupPlatform = "GCM"

        | "APNS"
        | "APNS_SANDBOX";

    export interface RandomResultTable {
        /** Child nodes that indicate what kind of drop table item this actually is. */
        Nodes: ResultTableNode[];
        /** Unique name for this drop table */
        TableId: string;

    }

    export interface RandomResultTableListing {
        /** Catalog version this table is associated with */
        CatalogVersion?: string;
        /** Child nodes that indicate what kind of drop table item this actually is. */
        Nodes: ResultTableNode[];
        /** Unique name for this drop table */
        TableId: string;

    }

    export interface RefundPurchaseRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique order ID for the purchase in question. */
        OrderId: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /**
         * The Reason parameter should correspond with the payment providers reason field, if they require one such as Facebook. In
         * the case of Facebook this must match one of their refund or dispute resolution enums (See:
         * https://developers.facebook.com/docs/payments/implementation-guide/handling-disputes-refunds)
         */
        Reason?: string;

    }

    export interface RefundPurchaseResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The order's updated purchase status. */
        PurchaseStatus?: string;

    }

    export interface RemovePlayerTagRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /** Unique tag for player profile. */
        TagName: string;

    }

    export interface RemovePlayerTagResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface RemoveVirtualCurrencyTypesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** List of virtual currencies to delete */
        VirtualCurrencies: VirtualCurrencyData[];

    }

    export interface ResetCharacterStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface ResetCharacterStatisticsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface ResetPasswordRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The new password for the player. */
        Password: string;
        /** The token of the player requesting the password reset. */
        Token: string;

    }

    export interface ResetPasswordResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface ResetUserStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface ResetUserStatisticsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    type ResolutionOutcome = "Revoke"

        | "Reinstate"
        | "Manual";

    export interface ResolvePurchaseDisputeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique order ID for the purchase in question. */
        OrderId: string;
        /**
         * Enum for the desired purchase result state after notifying the payment provider. Valid values are Revoke, Reinstate and
         * Manual. Manual will cause no change to the order state.
         */
        Outcome: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /**
         * The Reason parameter should correspond with the payment providers reason field, if they require one such as Facebook. In
         * the case of Facebook this must match one of their refund or dispute resolution enums (See:
         * https://developers.facebook.com/docs/payments/implementation-guide/handling-disputes-refunds)
         */
        Reason?: string;

    }

    export interface ResolvePurchaseDisputeResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The order's updated purchase status. */
        PurchaseStatus?: string;

    }

    export interface ResultTableNode {
        /** Either an ItemId, or the TableId of another random result table */
        ResultItem: string;
        /** Whether this entry in the table is an item or a link to another table */
        ResultItemType: string;
        /** How likely this is to be rolled - larger numbers add more weight */
        Weight: number;

    }

    type ResultTableNodeType = "ItemId"

        | "TableId";

    export interface RevokeAllBansForUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface RevokeAllBansForUserResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Information on the bans that were revoked. */
        BanData?: BanInfo[];

    }

    export interface RevokeBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Ids of the bans to be revoked. Maximum 100. */
        BanIds: string[];

    }

    export interface RevokeBansResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Information on the bans that were revoked */
        BanData?: BanInfo[];

    }

    export interface RevokeInventoryItem {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface RevokeInventoryItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface RevokeInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Array of player items to revoke, between 1 and 25 items. */
        Items: RevokeInventoryItem[];

    }

    export interface RevokeInventoryItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Collection of any errors that occurred during processing. */
        Errors?: RevokeItemError[];

    }

    export interface RevokeInventoryResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface RevokeItemError {
        /** Specific error that was encountered. */
        Error?: string;
        /** Item information that failed to be revoked. */
        Item?: RevokeInventoryItem;

    }

    export interface RunTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Provide either the task ID or the task name to run a task. */
        Identifier?: NameIdentifier;

    }

    export interface RunTaskResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * ID of the task instance that is started. This can be used in Get*TaskInstance (e.g. GetCloudScriptTaskInstance) API call
         * to retrieve status for the task instance.
         */
        TaskInstanceId?: string;

    }

    export interface ScheduledTask {
        /** Description the task */
        Description?: string;
        /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
        IsActive: boolean;
        /** UTC time of last run */
        LastRunTime?: string;
        /** Name of the task. This is a unique identifier for tasks in the title. */
        Name: string;
        /** UTC time of next run */
        NextRunTime?: string;
        /**
         * Task parameter. Different types of task have different parameter structure. See each task type's create API
         * documentation for the details.
         */
        Parameter?: any;
        /** Cron expression for the run schedule of the task. The expression should be in UTC. */
        Schedule?: string;
        /** ID of the task */
        TaskId?: string;
        /** Task type. */
        Type?: string;

    }

    type ScheduledTaskType = "CloudScript"

        | "ActionsOnPlayerSegment"
        | "CloudScriptAzureFunctions"
        | "InsightsScheduledScaling";

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

    export interface SegmentAndDefinition {
        /** Filter property for ad campaign filter. */
        AdCampaignFilter?: AdCampaignSegmentFilter;
        /** property for all player filter. */
        AllPlayersFilter?: AllPlayersSegmentFilter;
        /** Filter property for player churn risk level. */
        ChurnPredictionFilter?: ChurnPredictionSegmentFilter;
        /** Filter property for first login date. */
        FirstLoginDateFilter?: FirstLoginDateSegmentFilter;
        /** Filter property for first login timespan. */
        FirstLoginFilter?: FirstLoginTimespanSegmentFilter;
        /** Filter property for last login date. */
        LastLoginDateFilter?: LastLoginDateSegmentFilter;
        /** Filter property for last login timespan. */
        LastLoginFilter?: LastLoginTimespanSegmentFilter;
        /** Filter property for linked in user account. */
        LinkedUserAccountFilter?: LinkedUserAccountSegmentFilter;
        /** Filter property for linked in user account has email. */
        LinkedUserAccountHasEmailFilter?: LinkedUserAccountHasEmailSegmentFilter;
        /** Filter property for location. */
        LocationFilter?: LocationSegmentFilter;
        /** Filter property for current player churn value. */
        PlayerChurnPredictionFilter?: PlayerChurnPredictionSegmentFilter;
        /** Filter property for player churn timespan. */
        PlayerChurnPredictionTimeFilter?: PlayerChurnPredictionTimeSegmentFilter;
        /** Filter property for previous player churn value. */
        PlayerChurnPreviousPredictionFilter?: PlayerChurnPreviousPredictionSegmentFilter;
        /** Filter property for push notification. */
        PushNotificationFilter?: PushNotificationSegmentFilter;
        /** Filter property for statistics. */
        StatisticFilter?: StatisticSegmentFilter;
        /** Filter property for tags. */
        TagFilter?: TagSegmentFilter;
        /** Filter property for total value to date in USD. */
        TotalValueToDateInUSDFilter?: TotalValueToDateInUSDSegmentFilter;
        /** Filter property for user origination. */
        UserOriginationFilter?: UserOriginationSegmentFilter;
        /** Filter property for value to date. */
        ValueToDateFilter?: ValueToDateSegmentFilter;
        /** Filter property for virtual currency. */
        VirtualCurrencyBalanceFilter?: VirtualCurrencyBalanceSegmentFilter;

    }

    type SegmentCountryCode = "AF"

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

    type SegmentCurrency = "AED"

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

    type SegmentFilterComparison = "GreaterThan"

        | "LessThan"
        | "EqualTo"
        | "NotEqualTo"
        | "GreaterThanOrEqual"
        | "LessThanOrEqual"
        | "Exists"
        | "Contains"
        | "NotContains";

    type SegmentLoginIdentityProvider = "Unknown"

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
        | "WindowsHello"
        | "GameServer"
        | "CustomServer"
        | "NintendoSwitch"
        | "FacebookInstantGames"
        | "OpenIdConnect"
        | "Apple"
        | "NintendoSwitchAccount"
        | "GooglePlayGames";

    export interface SegmentModel {
        /** Segment description. */
        Description?: string;
        /** Segment actions for current entered segment players. */
        EnteredSegmentActions?: SegmentTrigger[];
        /** Segment last updated date time. */
        LastUpdateTime: string;
        /** Segment actions for current left segment players. */
        LeftSegmentActions?: SegmentTrigger[];
        /** Segment name. */
        Name?: string;
        /** Segment id in hex. */
        SegmentId?: string;
        /** Segment or definitions. This includes segment and definitions and filters. */
        SegmentOrDefinitions?: SegmentOrDefinition[];

    }

    export interface SegmentOrDefinition {
        /** List of segment and definitions. */
        SegmentAndDefinitions?: SegmentAndDefinition[];

    }

    type SegmentPushNotificationDevicePlatform = "ApplePushNotificationService"

        | "GoogleCloudMessaging";

    export interface SegmentTrigger {
        /** Add inventory item v2 segment trigger action. */
        AddInventoryItemsV2Action?: AddInventoryItemsV2SegmentAction;
        /** Ban player segment trigger action. */
        BanPlayerAction?: BanPlayerSegmentAction;
        /** Delete inventory item v2 segment trigger action. */
        DeleteInventoryItemsV2Action?: DeleteInventoryItemsV2SegmentAction;
        /** Delete player segment trigger action. */
        DeletePlayerAction?: DeletePlayerSegmentAction;
        /** Delete player statistic segment trigger action. */
        DeletePlayerStatisticAction?: DeletePlayerStatisticSegmentAction;
        /** Email notification segment trigger action. */
        EmailNotificationAction?: EmailNotificationSegmentAction;
        /** Execute azure function segment trigger action. */
        ExecuteAzureFunctionAction?: ExecuteAzureFunctionSegmentAction;
        /** Execute cloud script segment trigger action. */
        ExecuteCloudScriptAction?: ExecuteCloudScriptSegmentAction;
        /** Grant item segment trigger action. */
        GrantItemAction?: GrantItemSegmentAction;
        /** Grant virtual currency segment trigger action. */
        GrantVirtualCurrencyAction?: GrantVirtualCurrencySegmentAction;
        /** Increment player statistic segment trigger action. */
        IncrementPlayerStatisticAction?: IncrementPlayerStatisticSegmentAction;
        /** Push notification segment trigger action. */
        PushNotificationAction?: PushNotificationSegmentAction;
        /** Subtract inventory item v2 segment trigger action. */
        SubtractInventoryItemsV2Action?: SubtractInventoryItemsV2SegmentAction;

    }

    export interface SendAccountRecoveryEmailRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** User email address attached to their account */
        Email: string;
        /** The email template id of the account recovery email template to send. */
        EmailTemplateId?: string;

    }

    export interface SendAccountRecoveryEmailResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface SendEmailContent {
        /** The email template id of the email template to send. */
        EmailTemplateId: string;

    }

    export interface SetMembershipOverrideRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Expiration time for the membership in DateTime format, will override any subscription expirations. */
        ExpirationTime: string;
        /** Id of the membership to apply the override expiration date to. */
        MembershipId: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface SetMembershipOverrideResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface SetPlayerSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface SetPlayerSecretResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface SetPublishedRevisionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Revision to make the current published revision */
        Revision: number;
        /** Version number */
        Version: number;

    }

    export interface SetPublishedRevisionResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface SetPublisherDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
         * name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
         */
        Key: string;
        /** new value to set. Set to null to remove a value */
        Value?: string;

    }

    export interface SetPublisherDataResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface SetTitleDataAndOverridesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * List of titleData key-value pairs to set/delete. Use an empty value to delete an existing key; use a non-empty value to
         * create/update a key.
         */
        KeyValues: TitleDataKeyValue[];
        /** Name of the override. */
        OverrideLabel?: string;

    }

    export interface SetTitleDataAndOverridesResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface SetTitleDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
         * name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
         */
        Key: string;
        /** new value to set. Set to null to remove a value */
        Value?: string;

    }

    export interface SetTitleDataResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface SetupPushNotificationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Credential is the Private Key for APNS/APNS_SANDBOX, and the API Key for GCM */
        Credential: string;
        /** for APNS, this is the PlatformPrincipal (SSL Certificate) */
        Key?: string;
        /** This field is deprecated and any usage of this will cause the API to fail. */
        Name?: string;
        /**
         * replace any existing ARN with the newly generated one. If this is set to false, an error will be returned if
         * notifications have already setup for this platform.
         */
        OverwriteOldARN: boolean;
        /**
         * supported notification platforms are Apple Push Notification Service (APNS and APNS_SANDBOX) for iOS and Google Cloud
         * Messaging (GCM) for Android
         */
        Platform: string;

    }

    export interface SetupPushNotificationResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Amazon Resource Name for the created notification topic. */
        ARN?: string;

    }

    export interface SharedSecret {
        /** Flag to indicate if this key is disabled */
        Disabled: boolean;
        /** Friendly name for this key */
        FriendlyName?: string;
        /** The player shared secret to use when calling Client/GetTitlePublicKey */
        SecretKey?: string;

    }

    type SourceType = "Admin"

        | "BackEnd"
        | "GameClient"
        | "GameServer"
        | "Partner"
        | "Custom"
        | "API";

    type StatisticAggregationMethod = "Last"

        | "Min"
        | "Max"
        | "Sum";

    export interface StatisticModel {
        /** Statistic name */
        Name?: string;
        /** Statistic value */
        Value: number;
        /** Statistic version (0 if not a versioned statistic) */
        Version: number;

    }

    type StatisticResetIntervalOption = "Never"

        | "Hour"
        | "Day"
        | "Week"
        | "Month";

    export interface StatisticSegmentFilter {
        /** Statistic filter comparison. */
        Comparison?: string;
        /** Statistic filter value. */
        FilterValue?: string;
        /** Statistic name. */
        Name?: string;
        /** Use current version of statistic? */
        UseCurrentVersion?: boolean;
        /** Statistic version. */
        Version?: number;

    }

    type StatisticVersionArchivalStatus = "NotScheduled"

        | "Scheduled"
        | "Queued"
        | "InProgress"
        | "Complete";

    type StatisticVersionStatus = "Active"

        | "SnapshotPending"
        | "Snapshot"
        | "ArchivalPending"
        | "Archived";

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

    export interface StoreMarketingModel {
        /** Tagline for a store. */
        Description?: string;
        /** Display name of a store as it will appear to users. */
        DisplayName?: string;
        /** Custom data about a store. */
        Metadata?: any;

    }

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

    export interface SubtractInventoryItemsV2SegmentAction {
        /** Amount of the item to removed from the player */
        Amount?: number;
        /** The collection id for where the item will be removed from the player inventory */
        CollectionId?: string;
        /** The duration in seconds to be removed from the subscription in the players inventory */
        DurationInSeconds?: number;
        /** The id of item to be removed from the player */
        ItemId?: string;
        /** The stack id for where the item will be removed from the player inventory */
        StackId?: string;

    }

    export interface SubtractInventoryItemV2Content {
        /** Amount of the item to removed from the player */
        Amount?: number;
        /** The collection id for where the item will be removed from the player inventory */
        CollectionId?: string;
        /** The duration in seconds to be removed from the subscription in the players inventory */
        DurationInSeconds?: number;
        /** The id of item to be removed from the player */
        ItemId?: string;
        /** The stack id for where the item will be removed from the player inventory */
        StackId?: string;

    }

    export interface SubtractUserVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Amount to be subtracted from the user balance of the specified virtual currency. */
        Amount: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** PlayFab unique identifier of the user whose virtual currency balance is to be decreased. */
        PlayFabId: string;
        /** Name of the virtual currency which is to be decremented. */
        VirtualCurrency: string;

    }

    export interface TagModel {
        /** Full value of the tag, including namespace */
        TagValue?: string;

    }

    export interface TagSegmentFilter {
        /** Tag comparison. */
        Comparison?: string;
        /** Tag value. */
        TagValue?: string;

    }

    export interface TaskInstanceBasicSummary {
        /** UTC timestamp when the task completed. */
        CompletedAt?: string;
        /** Error message for last processing attempt, if an error occured. */
        ErrorMessage?: string;
        /** Estimated time remaining in seconds. */
        EstimatedSecondsRemaining?: number;
        /** Progress represented as percentage. */
        PercentComplete?: number;
        /** If manually scheduled, ID of user who scheduled the task. */
        ScheduledByUserId?: string;
        /** UTC timestamp when the task started. */
        StartedAt: string;
        /** Current status of the task instance. */
        Status?: string;
        /** Identifier of the task this instance belongs to. */
        TaskIdentifier?: NameIdentifier;
        /** ID of the task instance. */
        TaskInstanceId?: string;
        /** Type of the task. */
        Type?: string;

    }

    type TaskInstanceStatus = "Succeeded"

        | "Starting"
        | "InProgress"
        | "Failed"
        | "Aborted"
        | "Stalled";

    type TitleActivationStatus = "None"

        | "ActivatedTitleKey"
        | "PendingSteam"
        | "ActivatedSteam"
        | "RevokedSteam";

    export interface TitleDataKeyValue {
        /**
         * Key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
         * name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
         */
        Key?: string;
        /** New value to set. Set to null to remove a value */
        Value?: string;

    }

    export interface TotalValueToDateInUSDSegmentFilter {
        /** Total value to date USD amount. */
        Amount?: string;
        /** Total value to date USD comparison. */
        Comparison?: string;

    }

    export interface UpdateBanRequest {
        /** The updated active state for the ban. Null for no change. */
        Active?: boolean;
        /** The id of the ban to be updated. */
        BanId: string;
        /** The updated expiration date for the ban. Null for no change. */
        Expires?: string;
        /** The updated IP address for the ban. Null for no change. */
        IPAddress?: string;
        /** Whether to make this ban permanent. Set to true to make this ban permanent. This will not modify Active state. */
        Permanent?: boolean;
        /** The updated reason for the ban to be updated. Maximum 140 characters. Null for no change. */
        Reason?: string;
        /** The updated family type of the user that should be included in the ban. Null for no change. */
        UserFamilyType?: string;

    }

    export interface UpdateBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** List of bans to be updated. Maximum 100. */
        Bans: UpdateBanRequest[];

    }

    export interface UpdateBansResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Information on the bans that were updated */
        BanData?: BanInfo[];

    }

    export interface UpdateCatalogItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Array of catalog items to be submitted. Note that while CatalogItem has a parameter for CatalogVersion, it is not
         * required and ignored in this call.
         */
        Catalog?: CatalogItem[];
        /** Which catalog is being updated. If null, uses the default catalog. */
        CatalogVersion?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * Should this catalog be set as the default catalog. Defaults to true. If there is currently no default catalog, this will
         * always set it.
         */
        SetAsDefaultCatalog?: boolean;

    }

    export interface UpdateCatalogItemsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface UpdateCloudScriptRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** PlayFab user ID of the developer initiating the request. */
        DeveloperPlayFabId?: string;
        /** List of Cloud Script files to upload to create the new revision. Must have at least one file. */
        Files: CloudScriptFile[];
        /** Immediately publish the new revision */
        Publish: boolean;

    }

    export interface UpdateCloudScriptResult extends PlayFabModule.IPlayFabResultCommon  {
        /** New revision number created */
        Revision: number;
        /** Cloud Script version updated */
        Version: number;

    }

    export interface UpdateOpenIdConnectionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The client ID given by the ID provider. */
        ClientId?: string;
        /** The client secret given by the ID provider. */
        ClientSecret?: string;
        /** A name for the connection that identifies it within the title. */
        ConnectionId: string;
        /** Ignore 'nonce' claim in identity tokens. */
        IgnoreNonce?: boolean;
        /** The issuer URL or discovery document URL to read issuer information from */
        IssuerDiscoveryUrl?: string;
        /** Manually specified information for an OpenID Connect issuer. */
        IssuerInformation?: OpenIdIssuerInformation;
        /** Override the issuer name for user indexing and lookup. */
        IssuerOverride?: string;

    }

    export interface UpdatePlayerSharedSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Disable or Enable this key */
        Disabled: boolean;
        /** Friendly name for this key */
        FriendlyName?: string;
        /** The shared secret key to update */
        SecretKey?: string;

    }

    export interface UpdatePlayerSharedSecretResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface UpdatePlayerStatisticDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** the aggregation method to use in updating the statistic (defaults to last) */
        AggregationMethod?: string;
        /** unique name of the statistic */
        StatisticName: string;
        /**
         * interval at which the values of the statistic for all players are reset (changes are effective at the next occurance of
         * the new interval boundary)
         */
        VersionChangeInterval?: string;

    }

    export interface UpdatePlayerStatisticDefinitionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** updated statistic definition */
        Statistic?: PlayerStatisticDefinition;

    }

    export interface UpdatePolicyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Whether to overwrite or append to the existing policy. */
        OverwritePolicy: boolean;
        /** The name of the policy being updated. Only supported name is 'ApiPolicy' */
        PolicyName: string;
        /** Version of the policy to update. Must be the latest (as returned by GetPolicy). */
        PolicyVersion: number;
        /** The new statements to include in the policy. */
        Statements: PermissionStatement[];

    }

    export interface UpdatePolicyResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The name of the policy that was updated. */
        PolicyName?: string;
        /** The statements included in the new version of the policy. */
        Statements?: PermissionStatement[];

    }

    export interface UpdateRandomResultTablesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** which catalog is being updated. If null, update the current default catalog version */
        CatalogVersion?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * array of random result tables to make available (Note: specifying an existing TableId will result in overwriting that
         * table, while any others will be added to the available set)
         */
        Tables?: RandomResultTable[];

    }

    export interface UpdateRandomResultTablesResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface UpdateSegmentRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Segment model with all of the segment properties data. */
        SegmentModel: SegmentModel;

    }

    export interface UpdateSegmentResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Error message. */
        ErrorMessage?: string;
        /** Segment id. */
        SegmentId?: string;

    }

    export interface UpdateStoreItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version of the store to update. If null, uses the default catalog. */
        CatalogVersion?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Additional data about the store */
        MarketingData?: StoreMarketingModel;
        /** Array of store items - references to catalog items, with specific pricing - to be added */
        Store?: StoreItem[];
        /** Unique identifier for the store which is to be updated */
        StoreId: string;

    }

    export interface UpdateStoreItemsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface UpdateTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Description the task */
        Description?: string;
        /** Specify either the task ID or the name of the task to be updated. */
        Identifier?: NameIdentifier;
        /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
        IsActive: boolean;
        /** Name of the task. This is a unique identifier for tasks in the title. */
        Name: string;
        /** Parameter object specific to the task type. See each task type's create API documentation for details. */
        Parameter?: any;
        /** Cron expression for the run schedule of the task. The expression should be in UTC. */
        Schedule?: string;
        /** Task type. */
        Type: string;

    }

    export interface UpdateUserDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
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
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface UpdateUserDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number;

    }

    export interface UpdateUserInternalDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
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
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    export interface UpdateUserTitleDisplayNameRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** New title display name for the user - must be between 3 and 25 characters */
        DisplayName: string;
        /** PlayFab unique identifier of the user whose title specific display name is to be changed */
        PlayFabId: string;

    }

    export interface UpdateUserTitleDisplayNameResult extends PlayFabModule.IPlayFabResultCommon  {
        /** current title display name for the user (this will be the original display name if the rename attempt failed) */
        DisplayName?: string;

    }

    export interface UserAccountInfo {
        /** User Android device information, if an Android device has been linked */
        AndroidDeviceInfo?: UserAndroidDeviceInfo;
        /** Sign in with Apple account information, if an Apple account has been linked */
        AppleAccountInfo?: UserAppleIdInfo;
        /** Timestamp indicating when the user account was created */
        Created: string;
        /** Custom ID information, if a custom ID has been assigned */
        CustomIdInfo?: UserCustomIdInfo;
        /** User Facebook information, if a Facebook account has been linked */
        FacebookInfo?: UserFacebookInfo;
        /** Facebook Instant Games account information, if a Facebook Instant Games account has been linked */
        FacebookInstantGamesIdInfo?: UserFacebookInstantGamesIdInfo;
        /** User Gamecenter information, if a Gamecenter account has been linked */
        GameCenterInfo?: UserGameCenterInfo;
        /** User Google account information, if a Google account has been linked */
        GoogleInfo?: UserGoogleInfo;
        /** User Google Play Games account information, if a Google Play Games account has been linked */
        GooglePlayGamesInfo?: UserGooglePlayGamesInfo;
        /** User iOS device information, if an iOS device has been linked */
        IosDeviceInfo?: UserIosDeviceInfo;
        /** User Kongregate account information, if a Kongregate account has been linked */
        KongregateInfo?: UserKongregateInfo;
        /** Nintendo Switch account information, if a Nintendo Switch account has been linked */
        NintendoSwitchAccountInfo?: UserNintendoSwitchAccountIdInfo;
        /** Nintendo Switch device information, if a Nintendo Switch device has been linked */
        NintendoSwitchDeviceIdInfo?: UserNintendoSwitchDeviceIdInfo;
        /** OpenID Connect information, if any OpenID Connect accounts have been linked */
        OpenIdInfo?: UserOpenIdInfo[];
        /** Unique identifier for the user account */
        PlayFabId?: string;
        /** Personal information for the user which is considered more sensitive */
        PrivateInfo?: UserPrivateAccountInfo;
        /** User PlayStation :tm: Network account information, if a PlayStation :tm: Network account has been linked */
        PsnInfo?: UserPsnInfo;
        /** Server Custom ID information, if a server custom ID has been assigned */
        ServerCustomIdInfo?: UserServerCustomIdInfo;
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

    export interface UserAndroidDeviceInfo {
        /** Android device ID */
        AndroidDeviceId?: string;

    }

    export interface UserAppleIdInfo {
        /** Apple subject ID */
        AppleSubjectId?: string;

    }

    export interface UserCustomIdInfo {
        /** Custom ID */
        CustomId?: string;

    }

    type UserDataPermission = "Private"

        | "Public";

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

    export interface UserFacebookInfo {
        /** Facebook identifier */
        FacebookId?: string;
        /** Facebook full name */
        FullName?: string;

    }

    export interface UserFacebookInstantGamesIdInfo {
        /** Facebook Instant Games ID */
        FacebookInstantGamesId?: string;

    }

    type UserFamilyType = "None"

        | "Xbox"
        | "Steam";

    export interface UserGameCenterInfo {
        /** Gamecenter identifier */
        GameCenterId?: string;

    }

    export interface UserGoogleInfo {
        /** Email address of the Google account */
        GoogleEmail?: string;
        /** Gender information of the Google account */
        GoogleGender?: string;
        /** Google ID */
        GoogleId?: string;
        /** Locale of the Google account */
        GoogleLocale?: string;
        /** Name of the Google account user */
        GoogleName?: string;

    }

    export interface UserGooglePlayGamesInfo {
        /** Avatar image url of the Google Play Games player */
        GooglePlayGamesPlayerAvatarImageUrl?: string;
        /** Display name of the Google Play Games player */
        GooglePlayGamesPlayerDisplayName?: string;
        /** Google Play Games player ID */
        GooglePlayGamesPlayerId?: string;

    }

    export interface UserIosDeviceInfo {
        /** iOS device ID */
        IosDeviceId?: string;

    }

    export interface UserKongregateInfo {
        /** Kongregate ID */
        KongregateId?: string;
        /** Kongregate Username */
        KongregateName?: string;

    }

    export interface UserNintendoSwitchAccountIdInfo {
        /** Nintendo Switch account subject ID */
        NintendoSwitchAccountSubjectId?: string;

    }

    export interface UserNintendoSwitchDeviceIdInfo {
        /** Nintendo Switch Device ID */
        NintendoSwitchDeviceId?: string;

    }

    export interface UserOpenIdInfo {
        /** OpenID Connection ID */
        ConnectionId?: string;
        /** OpenID Issuer */
        Issuer?: string;
        /** OpenID Subject */
        Subject?: string;

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
        | "ServerCustomId"
        | "NintendoSwitchDeviceId"
        | "FacebookInstantGamesId"
        | "OpenIdConnect"
        | "Apple"
        | "NintendoSwitchAccount"
        | "GooglePlayGames"
        | "XboxMobileStore";

    export interface UserOriginationSegmentFilter {
        /** User login provider. */
        LoginProvider?: string;

    }

    export interface UserPrivateAccountInfo {
        /** user email address */
        Email?: string;

    }

    export interface UserPsnInfo {
        /** PlayStation :tm: Network account ID */
        PsnAccountId?: string;
        /** PlayStation :tm: Network online ID */
        PsnOnlineId?: string;

    }

    export interface UserServerCustomIdInfo {
        /** Custom ID */
        CustomId?: string;

    }

    export interface UserSteamInfo {
        /** what stage of game ownership the user is listed as being in, from Steam */
        SteamActivationStatus?: string;
        /** the country in which the player resides, from Steam data */
        SteamCountry?: string;
        /** currency type set in the user Steam account */
        SteamCurrency?: string;
        /** Steam identifier */
        SteamId?: string;
        /** Steam display name */
        SteamName?: string;

    }

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

    export interface UserTwitchInfo {
        /** Twitch ID */
        TwitchId?: string;
        /** Twitch Username */
        TwitchUserName?: string;

    }

    export interface UserXboxInfo {
        /** XBox user ID */
        XboxUserId?: string;
        /** XBox user sandbox */
        XboxUserSandbox?: string;

    }

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

    export interface ValueToDateSegmentFilter {
        /** Value to date amount. */
        Amount?: string;
        /** Value to date comparison. */
        Comparison?: string;
        /** Currency using for filter. */
        Currency?: string;

    }

    export interface VirtualCurrencyBalanceSegmentFilter {
        /** Total amount. */
        Amount: number;
        /** Amount comparison. */
        Comparison?: string;
        /** Currency code. */
        CurrencyCode?: string;

    }

    export interface VirtualCurrencyData {
        /** unique two-character identifier for this currency type (e.g.: "CC") */
        CurrencyCode: string;
        /** friendly name to show in the developer portal, reports, etc. */
        DisplayName?: string;
        /** amount to automatically grant users upon first login to the title */
        InitialDeposit?: number;
        /** maximum amount to which the currency will recharge (cannot exceed MaxAmount, but can be less) */
        RechargeMax?: number;
        /** rate at which the currency automatically be added to over time, in units per day (24 hours) */
        RechargeRate?: number;

    }

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


}
