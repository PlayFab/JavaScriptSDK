/// <reference path="Playfab.d.ts" />

declare module PlayFabEconomyModule {
    export interface IPlayFabEconomy {
        ForgetAllCredentials(): void;

        /**
         * Add inventory items. Up to 10,000 stacks of items can be added to a single inventory collection. Stack size is uncapped.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/addinventoryitems
         */
        AddInventoryItems(request: PlayFabEconomyModels.AddInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.AddInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.AddInventoryItemsResponse>>;
        /**
         * Creates a new item in the working catalog using provided metadata.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createdraftitem
         */
        CreateDraftItem(request: PlayFabEconomyModels.CreateDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateDraftItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateDraftItemResponse>>;
        /**
         * Creates one or more upload URLs which can be used by the client to upload raw file data. Content URls and uploaded
         * content will be garbage collected after 24 hours if not attached to a draft or published item. Detailed pricing info
         * around uploading content can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/pricing/meters/catalog-meters
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createuploadurls
         */
        CreateUploadUrls(request: PlayFabEconomyModels.CreateUploadUrlsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateUploadUrlsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateUploadUrlsResponse>>;
        /**
         * Deletes all reviews, helpfulness votes, and ratings submitted by the entity specified.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteentityitemreviews
         */
        DeleteEntityItemReviews(request: PlayFabEconomyModels.DeleteEntityItemReviewsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteEntityItemReviewsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteEntityItemReviewsResponse>>;
        /**
         * Delete an Inventory Collection. More information about Inventory Collections can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/inventory/collections
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/deleteinventorycollection
         */
        DeleteInventoryCollection(request: PlayFabEconomyModels.DeleteInventoryCollectionRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteInventoryCollectionResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteInventoryCollectionResponse>>;
        /**
         * Delete inventory items
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/deleteinventoryitems
         */
        DeleteInventoryItems(request: PlayFabEconomyModels.DeleteInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteInventoryItemsResponse>>;
        /**
         * Removes an item from working catalog and all published versions from the public catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteitem
         */
        DeleteItem(request: PlayFabEconomyModels.DeleteItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteItemResponse>>;
        /**
         * Execute a list of Inventory Operations. A maximum list of 50 operations can be performed by a single request. There is
         * also a limit to 300 items that can be modified/added in a single request. For example, adding a bundle with 50 items
         * counts as 50 items modified. All operations must be done within a single inventory collection. This API has a reduced
         * RPS compared to an individual inventory operation with Player Entities limited to 60 requests in 90 seconds.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/executeinventoryoperations
         */
        ExecuteInventoryOperations(request: PlayFabEconomyModels.ExecuteInventoryOperationsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ExecuteInventoryOperationsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.ExecuteInventoryOperationsResponse>>;
        /**
         * Transfer a list of inventory items. A maximum list of 50 operations can be performed by a single request. When the
         * response code is 202, one or more operations did not complete within the timeframe of the request. You can identify the
         * pending operations by looking for OperationStatus = 'InProgress'. You can check on the operation status at anytime
         * within 1 day of the request by passing the TransactionToken to the GetInventoryOperationStatus API.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/executetransferoperations
         */
        ExecuteTransferOperations(request: PlayFabEconomyModels.ExecuteTransferOperationsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ExecuteTransferOperationsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.ExecuteTransferOperationsResponse>>;
        /**
         * Gets the configuration for the catalog. Only Title Entities can call this API. There is a limit of 100 requests in 10
         * seconds for this API. More information about the Catalog Config can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/settings
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getcatalogconfig
         */
        GetCatalogConfig(request: PlayFabEconomyModels.GetCatalogConfigRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetCatalogConfigResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetCatalogConfigResponse>>;
        /**
         * Retrieves an item from the working catalog. This item represents the current working state of the item. GetDraftItem
         * does not work off a cache of the Catalog and should be used when trying to get recent item updates. However, please note
         * that item references data is cached and may take a few moments for changes to propagate.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitem
         */
        GetDraftItem(request: PlayFabEconomyModels.GetDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemResponse>>;
        /**
         * Retrieves a paginated list of the items from the draft catalog. Up to 50 IDs can be retrieved in a single request.
         * GetDraftItems does not work off a cache of the Catalog and should be used when trying to get recent item updates.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitems
         */
        GetDraftItems(request: PlayFabEconomyModels.GetDraftItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemsResponse>>;
        /**
         * Retrieves a paginated list of the items from the draft catalog created by the Entity. Up to 50 items can be returned at
         * once. You can use continuation tokens to paginate through results that return greater than the limit.
         * GetEntityDraftItems does not work off a cache of the Catalog and should be used when trying to get recent item updates.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getentitydraftitems
         */
        GetEntityDraftItems(request: PlayFabEconomyModels.GetEntityDraftItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetEntityDraftItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetEntityDraftItemsResponse>>;
        /**
         * Gets the submitted review for the specified item by the authenticated entity. Individual ratings and reviews data update
         * in near real time with delays within a few seconds.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getentityitemreview
         */
        GetEntityItemReview(request: PlayFabEconomyModels.GetEntityItemReviewRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetEntityItemReviewResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetEntityItemReviewResponse>>;
        /**
         * Get Inventory Collection Ids. Up to 50 Ids can be returned at once (or 250 with response compression enabled). You can
         * use continuation tokens to paginate through results that return greater than the limit. It can take a few seconds for
         * new collection Ids to show up.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventorycollectionids
         */
        GetInventoryCollectionIds(request: PlayFabEconomyModels.GetInventoryCollectionIdsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetInventoryCollectionIdsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetInventoryCollectionIdsResponse>>;
        /**
         * Get current inventory items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventoryitems
         */
        GetInventoryItems(request: PlayFabEconomyModels.GetInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetInventoryItemsResponse>>;
        /**
         * Get the status of an inventory operation using an OperationToken. You can check on the operation status at anytime
         * within 1 day of the request by passing the TransactionToken to the this API.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getinventoryoperationstatus
         */
        GetInventoryOperationStatus(request: PlayFabEconomyModels.GetInventoryOperationStatusRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetInventoryOperationStatusResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetInventoryOperationStatusResponse>>;
        /**
         * Retrieves an item from the public catalog. GetItem does not work off a cache of the Catalog and should be used when
         * trying to get recent item updates. However, please note that item references data is cached and may take a few moments
         * for changes to propagate.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitem
         */
        GetItem(request: PlayFabEconomyModels.GetItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemResponse>>;
        /**
         * Search for a given item and return a set of bundles and stores containing the item. Up to 50 items can be returned at
         * once. You can use continuation tokens to paginate through results that return greater than the limit. This API is
         * intended for tooling/automation scenarios and has a reduced RPS with Player Entities limited to 30 requests in 300
         * seconds and Title Entities limited to 100 requests in 10 seconds.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemcontainers
         */
        GetItemContainers(request: PlayFabEconomyModels.GetItemContainersRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemContainersResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemContainersResponse>>;
        /**
         * Gets the moderation state for an item, including the concern category and string reason. More information about
         * moderation states can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/ugc/moderation
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemmoderationstate
         */
        GetItemModerationState(request: PlayFabEconomyModels.GetItemModerationStateRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemModerationStateResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemModerationStateResponse>>;
        /**
         * Gets the status of a publish of an item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitempublishstatus
         */
        GetItemPublishStatus(request: PlayFabEconomyModels.GetItemPublishStatusRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemPublishStatusResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemPublishStatusResponse>>;
        /**
         * Get a paginated set of reviews associated with the specified item. Individual ratings and reviews data update in near
         * real time with delays within a few seconds.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviews
         */
        GetItemReviews(request: PlayFabEconomyModels.GetItemReviewsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemReviewsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemReviewsResponse>>;
        /**
         * Get a summary of all ratings and reviews associated with the specified item. Summary ratings data is cached with update
         * data coming within 15 minutes.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviewsummary
         */
        GetItemReviewSummary(request: PlayFabEconomyModels.GetItemReviewSummaryRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemReviewSummaryResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemReviewSummaryResponse>>;
        /**
         * Retrieves items from the public catalog. Up to 50 items can be returned at once. GetItems does not work off a cache of
         * the Catalog and should be used when trying to get recent item updates. However, please note that item references data is
         * cached and may take a few moments for changes to propagate.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitems
         */
        GetItems(request: PlayFabEconomyModels.GetItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemsResponse>>;
        /**
         * Gets the access tokens.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/getmicrosoftstoreaccesstokens
         */
        GetMicrosoftStoreAccessTokens(request: PlayFabEconomyModels.GetMicrosoftStoreAccessTokensRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetMicrosoftStoreAccessTokensResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetMicrosoftStoreAccessTokensResponse>>;
        /**
         * Get transaction history for a player. Up to 250 Events can be returned at once. You can use continuation tokens to
         * paginate through results that return greater than the limit. Getting transaction history has a lower RPS limit than
         * getting a Player's inventory with Player Entities having a limit of 30 requests in 300 seconds.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/gettransactionhistory
         */
        GetTransactionHistory(request: PlayFabEconomyModels.GetTransactionHistoryRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetTransactionHistoryResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.GetTransactionHistoryResponse>>;
        /**
         * Initiates a publish of an item from the working catalog to the public catalog. You can use the GetItemPublishStatus API
         * to track the state of the item publish.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/publishdraftitem
         */
        PublishDraftItem(request: PlayFabEconomyModels.PublishDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PublishDraftItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.PublishDraftItemResponse>>;
        /**
         * Purchase an item or bundle. Up to 10,000 stacks of items can be added to a single inventory collection. Stack size is
         * uncapped.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/purchaseinventoryitems
         */
        PurchaseInventoryItems(request: PlayFabEconomyModels.PurchaseInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PurchaseInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.PurchaseInventoryItemsResponse>>;
        /**
         * Redeem items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemappleappstoreinventoryitems
         */
        RedeemAppleAppStoreInventoryItems(request: PlayFabEconomyModels.RedeemAppleAppStoreInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemAppleAppStoreInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemAppleAppStoreInventoryItemsResponse>>;
        /**
         * Redeem items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemgoogleplayinventoryitems
         */
        RedeemGooglePlayInventoryItems(request: PlayFabEconomyModels.RedeemGooglePlayInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemGooglePlayInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemGooglePlayInventoryItemsResponse>>;
        /**
         * Redeem items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemmicrosoftstoreinventoryitems
         */
        RedeemMicrosoftStoreInventoryItems(request: PlayFabEconomyModels.RedeemMicrosoftStoreInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemMicrosoftStoreInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemMicrosoftStoreInventoryItemsResponse>>;
        /**
         * Redeem items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemnintendoeshopinventoryitems
         */
        RedeemNintendoEShopInventoryItems(request: PlayFabEconomyModels.RedeemNintendoEShopInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemNintendoEShopInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemNintendoEShopInventoryItemsResponse>>;
        /**
         * Redeem items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemplaystationstoreinventoryitems
         */
        RedeemPlayStationStoreInventoryItems(request: PlayFabEconomyModels.RedeemPlayStationStoreInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemPlayStationStoreInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemPlayStationStoreInventoryItemsResponse>>;
        /**
         * Redeem items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/redeemsteaminventoryitems
         */
        RedeemSteamInventoryItems(request: PlayFabEconomyModels.RedeemSteamInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemSteamInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.RedeemSteamInventoryItemsResponse>>;
        /**
         * Submit a report for an item, indicating in what way the item is inappropriate.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportitem
         */
        ReportItem(request: PlayFabEconomyModels.ReportItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReportItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.ReportItemResponse>>;
        /**
         * Submit a report for a review
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportitemreview
         */
        ReportItemReview(request: PlayFabEconomyModels.ReportItemReviewRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReportItemReviewResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.ReportItemReviewResponse>>;
        /**
         * Creates or updates a review for the specified item. More information around the caching surrounding item ratings and
         * reviews can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/ratings#ratings-design-and-caching
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reviewitem
         */
        ReviewItem(request: PlayFabEconomyModels.ReviewItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReviewItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.ReviewItemResponse>>;
        /**
         * Executes a search against the public catalog using the provided search parameters and returns a set of paginated
         * results. SearchItems uses a cache of the catalog with item updates taking up to a few minutes to propagate. You should
         * use the GetItem API for when trying to immediately get recent item updates. More information about the Search API can be
         * found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/search
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchitems
         */
        SearchItems(request: PlayFabEconomyModels.SearchItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchItemsResponse>>;
        /**
         * Sets the moderation state for an item, including the concern category and string reason. More information about
         * moderation states can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/ugc/moderation
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/setitemmoderationstate
         */
        SetItemModerationState(request: PlayFabEconomyModels.SetItemModerationStateRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SetItemModerationStateResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.SetItemModerationStateResponse>>;
        /**
         * Submit a vote for a review, indicating whether the review was helpful or unhelpful.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/submititemreviewvote
         */
        SubmitItemReviewVote(request: PlayFabEconomyModels.SubmitItemReviewVoteRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SubmitItemReviewVoteResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.SubmitItemReviewVoteResponse>>;
        /**
         * Subtract inventory items.
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/subtractinventoryitems
         */
        SubtractInventoryItems(request: PlayFabEconomyModels.SubtractInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SubtractInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.SubtractInventoryItemsResponse>>;
        /**
         * Submit a request to takedown one or more reviews.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/takedownitemreviews
         */
        TakedownItemReviews(request: PlayFabEconomyModels.TakedownItemReviewsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.TakedownItemReviewsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.TakedownItemReviewsResponse>>;
        /**
         * Transfer inventory items. When transferring across collections, a 202 response indicates that the transfer did not
         * complete within the timeframe of the request. You can identify the pending operations by looking for OperationStatus =
         * 'InProgress'. You can check on the operation status at anytime within 1 day of the request by passing the
         * TransactionToken to the GetInventoryOperationStatus API. More information about item transfer scenarios can be found
         * here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/inventory/?tabs=inventory-game-manager#transfer-inventory-items
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/transferinventoryitems
         */
        TransferInventoryItems(request: PlayFabEconomyModels.TransferInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.TransferInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.TransferInventoryItemsResponse>>;
        /**
         * Updates the configuration for the catalog. Only Title Entities can call this API. There is a limit of 10 requests in 10
         * seconds for this API. More information about the Catalog Config can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/settings
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatecatalogconfig
         */
        UpdateCatalogConfig(request: PlayFabEconomyModels.UpdateCatalogConfigRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateCatalogConfigResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateCatalogConfigResponse>>;
        /**
         * Update the metadata for an item in the working catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatedraftitem
         */
        UpdateDraftItem(request: PlayFabEconomyModels.UpdateDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateDraftItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateDraftItemResponse>>;
        /**
         * Update inventory items
         * https://docs.microsoft.com/rest/api/playfab/economy/inventory/updateinventoryitems
         */
        UpdateInventoryItems(request: PlayFabEconomyModels.UpdateInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateInventoryItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateInventoryItemsResponse>>;

    }
}

declare module PlayFabEconomyModels {
    export interface AddInventoryItemsOperation {
        /** The amount to add to the current item amount. */
        Amount?: number;
        /** The duration to add to the current item expiration date. */
        DurationInSeconds?: number;
        /** The inventory item the operation applies to. */
        Item?: InventoryItemReference;
        /** The values to apply to a stack newly created by this operation. */
        NewStackValues?: InitialValues;

    }

    export interface AddInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The amount to add for the current item. */
        Amount?: number;
        /**
         * The id of the entity's collection to perform this action on. (Default="default"). The number of inventory collections is
         * unlimited.
         */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The duration to add to the current item expiration date. */
        DurationInSeconds?: number;
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /**
         * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
         * be garbage collected eventually.
         */
        IdempotencyId?: string;
        /** The inventory item the request applies to. */
        Item?: InventoryItemReference;
        /** The values to apply to a stack newly created by this request. */
        NewStackValues?: InitialValues;

    }

    export interface AddInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /** The idempotency id used in the request. */
        IdempotencyId?: string;
        /** The ids of transactions that occurred as a result of the request. */
        TransactionIds?: string[];

    }

    export interface AlternateId {
        /** Type of the alternate ID. */
        Type?: string;
        /** Value of the alternate ID. */
        Value?: string;

    }

    export interface CatalogAlternateId {
        /** Type of the alternate ID. */
        Type?: string;
        /** Value of the alternate ID. */
        Value?: string;

    }

    export interface CatalogConfig {
        /** A list of player entity keys that will have admin permissions. There is a maximum of 64 entities that can be added. */
        AdminEntities?: EntityKey[];
        /** The set of configuration that only applies to catalog items. */
        Catalog?: CatalogSpecificConfig;
        /** A list of deep link formats. Up to 10 can be added. */
        DeepLinkFormats?: DeepLinkFormat[];
        /**
         * A list of display properties to index. Up to 5 mappings can be added per Display Property Type. More info on display
         * properties can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/content-types-tags-and-properties#displayproperties
         */
        DisplayPropertyIndexInfos?: DisplayPropertyIndexInfo[];
        /** The set of configuration that only applies to Files. */
        File?: FileConfig;
        /** The set of configuration that only applies to Images. */
        Image?: ImageConfig;
        /** Flag defining whether catalog is enabled. */
        IsCatalogEnabled: boolean;
        /**
         * A list of Platforms that can be applied to catalog items. Each platform can have a maximum character length of 40 and up
         * to 128 platforms can be listed.
         */
        Platforms?: string[];
        /** The set of configuration that only applies to Ratings and Reviews. */
        Review?: ReviewConfig;
        /** A set of player entity keys that are allowed to review content. There is a maximum of 128 entities that can be added. */
        ReviewerEntities?: EntityKey[];
        /** The set of configuration that only applies to user generated contents. */
        UserGeneratedContent?: UserGeneratedContentSpecificConfig;

    }

    export interface CatalogItem {
        /**
         * The alternate IDs associated with this item. An alternate ID can be set to 'FriendlyId' or any of the supported
         * marketplace names.
         */
        AlternateIds?: CatalogAlternateId[];
        /** The set of content/files associated with this item. Up to 100 files can be added to an item. */
        Contents?: Content[];
        /** The client-defined type of the item. */
        ContentType?: string;
        /** The date and time when this item was created. */
        CreationDate?: string;
        /** The ID of the creator of this catalog item. */
        CreatorEntity?: EntityKey;
        /** The set of platform specific deep links for this item. */
        DeepLinks?: DeepLink[];
        /**
         * The Stack Id that will be used as default for this item in Inventory when an explicit one is not provided. This
         * DefaultStackId can be a static stack id or '{guid}', which will generate a unique stack id for the item. If null,
         * Inventory's default stack id will be used.
         */
        DefaultStackId?: string;
        /**
         * A dictionary of localized descriptions. Key is language code and localized string is the value. The NEUTRAL locale is
         * required. Descriptions have a 10000 character limit per country code.
         */
        Description?: { [key: string]: string | null };
        /**
         * Game specific properties for display purposes. This is an arbitrary JSON blob. The Display Properties field has a 10000
         * byte limit per item.
         */
        DisplayProperties?: any;
        /** The user provided version of the item for display purposes. Maximum character length of 50. */
        DisplayVersion?: string;
        /** The date of when the item will cease to be available. If not provided then the product will be available indefinitely. */
        EndDate?: string;
        /** The current ETag value that can be used for optimistic concurrency in the If-None-Match header. */
        ETag?: string;
        /** The unique ID of the item. */
        Id?: string;
        /**
         * The images associated with this item. Images can be thumbnails or screenshots. Up to 100 images can be added to an item.
         * Only .png, .jpg, .gif, and .bmp file types can be uploaded
         */
        Images?: Image[];
        /** Indicates if the item is hidden. */
        IsHidden?: boolean;
        /**
         * The item references associated with this item. For example, the items in a Bundle/Store/Subscription. Every item can
         * have up to 50 item references.
         */
        ItemReferences?: CatalogItemReference[];
        /**
         * A dictionary of localized keywords. Key is language code and localized list of keywords is the value. Keywords have a 50
         * character limit per keyword and up to 32 keywords can be added per country code.
         */
        Keywords?: { [key: string]: KeywordSet };
        /** The date and time this item was last updated. */
        LastModifiedDate?: string;
        /** The moderation state for this item. */
        Moderation?: ModerationState;
        /** The platforms supported by this item. */
        Platforms?: string[];
        /** The prices the item can be purchased for. */
        PriceOptions?: CatalogPriceOptions;
        /** Rating summary for this item. */
        Rating?: Rating;
        /** The date of when the item will be available. If not provided then the product will appear immediately. */
        StartDate?: string;
        /** Optional details for stores items. */
        StoreDetails?: StoreDetails;
        /** The list of tags that are associated with this item. Up to 32 tags can be added to an item. */
        Tags?: string[];
        /**
         * A dictionary of localized titles. Key is language code and localized string is the value. The NEUTRAL locale is
         * required. Titles have a 512 character limit per country code.
         */
        Title?: { [key: string]: string | null };
        /**
         * The high-level type of the item. The following item types are supported: bundle, catalogItem, currency, store, ugc,
         * subscription.
         */
        Type?: string;

    }

    export interface CatalogItemReference {
        /** The amount of the catalog item. */
        Amount?: number;
        /** The unique ID of the catalog item. */
        Id?: string;
        /** The prices the catalog item can be purchased for. */
        PriceOptions?: CatalogPriceOptions;

    }

    export interface CatalogPrice {
        /** The amounts of the catalog item price. Each price can have up to 15 item amounts. */
        Amounts?: CatalogPriceAmount[];
        /** The per-unit amount this price can be used to purchase. */
        UnitAmount?: number;
        /** The per-unit duration this price can be used to purchase. The maximum duration is 100 years. */
        UnitDurationInSeconds?: number;

    }

    export interface CatalogPriceAmount {
        /** The amount of the price. */
        Amount: number;
        /** The Item Id of the price. */
        ItemId?: string;

    }

    export interface CatalogPriceAmountOverride {
        /** The exact value that should be utilized in the override. */
        FixedValue?: number;
        /** The id of the item this override should utilize. */
        ItemId?: string;
        /**
         * The multiplier that will be applied to the base Catalog value to determine what value should be utilized in the
         * override.
         */
        Multiplier?: number;

    }

    export interface CatalogPriceOptions {
        /** Prices of the catalog item. An item can have up to 15 prices */
        Prices?: CatalogPrice[];

    }

    export interface CatalogPriceOptionsOverride {
        /** The prices utilized in the override. */
        Prices?: CatalogPriceOverride[];

    }

    export interface CatalogPriceOverride {
        /** The currency amounts utilized in the override for a singular price. */
        Amounts?: CatalogPriceAmountOverride[];

    }

    export interface CatalogSpecificConfig {
        /**
         * The set of content types that will be used for validation. Each content type can have a maximum character length of 40
         * and up to 128 types can be listed.
         */
        ContentTypes?: string[];
        /**
         * The set of tags that will be used for validation. Each tag can have a maximum character length of 32 and up to 1024 tags
         * can be listed.
         */
        Tags?: string[];

    }

    export interface CategoryRatingConfig {
        /** Name of the category. */
        Name?: string;

    }

    type ConcernCategory = "None"

        | "OffensiveContent"
        | "ChildExploitation"
        | "MalwareOrVirus"
        | "PrivacyConcerns"
        | "MisleadingApp"
        | "PoorPerformance"
        | "ReviewResponse"
        | "SpamAdvertising"
        | "Profanity";

    export interface Content {
        /** The content unique ID. */
        Id?: string;
        /**
         * The maximum client version that this content is compatible with. Client Versions can be up to 3 segments separated by
         * periods(.) and each segment can have a maximum value of 65535.
         */
        MaxClientVersion?: string;
        /**
         * The minimum client version that this content is compatible with. Client Versions can be up to 3 segments separated by
         * periods(.) and each segment can have a maximum value of 65535.
         */
        MinClientVersion?: string;
        /**
         * The list of tags that are associated with this content. Tags must be defined in the Catalog Config before being used in
         * content.
         */
        Tags?: string[];
        /** The client-defined type of the content. Content Types must be defined in the Catalog Config before being used. */
        Type?: string;
        /** The Azure CDN URL for retrieval of the catalog item binary content. */
        Url?: string;

    }

    export interface ContentFeed {

    }

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

    export interface CreateDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Metadata describing the new catalog item to be created. */
        Item?: CatalogItem;
        /** Whether the item should be published immediately. This value is optional, defaults to false. */
        Publish: boolean;

    }

    export interface CreateDraftItemResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Updated metadata describing the catalog item just created. */
        Item?: CatalogItem;

    }

    export interface CreateUploadUrlsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Description of the files to be uploaded by the client. */
        Files?: UploadInfo[];

    }

    export interface CreateUploadUrlsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** List of URLs metadata for the files to be uploaded by the client. */
        UploadUrls?: UploadUrlMetadata[];

    }

    export interface DeepLink {
        /** Target platform for this deep link. */
        Platform?: string;
        /** The deep link for this platform. */
        Url?: string;

    }

    export interface DeepLinkFormat {
        /** The format of the deep link to return. The format should contain '{id}' to represent where the item ID should be placed. */
        Format?: string;
        /** The target platform for the deep link. */
        Platform?: string;

    }

    export interface DeleteEntityItemReviewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface DeleteEntityItemReviewsResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteInventoryCollectionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The inventory collection id the request applies to. */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity the request is about. Set to the caller by default. */
        Entity?: EntityKey;
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;

    }

    export interface DeleteInventoryCollectionResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteInventoryItemsOperation {
        /** The inventory item the operation applies to. */
        Item?: InventoryItemReference;

    }

    export interface DeleteInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The id of the entity's collection to perform this action on. (Default="default"). The number of inventory collections is
         * unlimited.
         */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /**
         * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
         * be garbage collected eventually.
         */
        IdempotencyId?: string;
        /** The inventory item the request applies to. */
        Item?: InventoryItemReference;

    }

    export interface DeleteInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** ETags are used for concurrency checking when updating resources. */
        ETag?: string;
        /** The idempotency id used in the request. */
        IdempotencyId?: string;
        /** The ids of transactions that occurred as a result of the request. */
        TransactionIds?: string[];

    }

    export interface DeleteItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The unique ID of the item. */
        Id?: string;

    }

    export interface DeleteItemResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DisplayPropertyIndexInfo {
        /** The property name in the 'DisplayProperties' property to be indexed. */
        Name?: string;
        /** The type of the property to be indexed. */
        Type?: string;

    }

    type DisplayPropertyType = "None"

        | "QueryDateTime"
        | "QueryDouble"
        | "QueryString"
        | "SearchString";

    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string;

    }

    export interface ExecuteInventoryOperationsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The id of the entity's collection to perform this action on. (Default="default"). The number of inventory collections is
         * unlimited.
         */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /**
         * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
         * be garbage collected eventually.
         */
        IdempotencyId?: string;
        /**
         * The operations to run transactionally. The operations will be executed in-order sequentially and will succeed or fail as
         * a batch. Up to 50 operations can be added.
         */
        Operations?: InventoryOperation[];

    }

    export interface ExecuteInventoryOperationsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /** The idempotency id used in the request. */
        IdempotencyId?: string;
        /** The ids of the transactions that occurred as a result of the request. */
        TransactionIds?: string[];

    }

    export interface ExecuteTransferOperationsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The inventory collection id the request is transferring from. (Default="default") */
        GivingCollectionId?: string;
        /** The entity the request is transferring from. Set to the caller by default. */
        GivingEntity?: EntityKey;
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        GivingETag?: string;
        /** The idempotency id for the request. */
        IdempotencyId?: string;
        /**
         * The transfer operations to run transactionally. The operations will be executed in-order sequentially and will succeed
         * or fail as a batch. Up to 50 operations can be added.
         */
        Operations?: TransferInventoryItemsOperation[];
        /** The inventory collection id the request is transferring to. (Default="default") */
        ReceivingCollectionId?: string;
        /** The entity the request is transferring to. Set to the caller by default. */
        ReceivingEntity?: EntityKey;

    }

    export interface ExecuteTransferOperationsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * ETags are used for concurrency checking when updating resources (before transferring from). This value will be empty if
         * the operation has not completed yet. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        GivingETag?: string;
        /** The ids of transactions that occurred as a result of the request's giving action. */
        GivingTransactionIds?: string[];
        /** The Idempotency ID for this request. */
        IdempotencyId?: string;
        /**
         * The transfer operation status. Possible values are 'InProgress' or 'Completed'. If the operation has completed, the
         * response code will be 200. Otherwise, it will be 202.
         */
        OperationStatus?: string;
        /**
         * The token that can be used to get the status of the transfer operation. This will only have a value if OperationStatus
         * is 'InProgress'.
         */
        OperationToken?: string;
        /**
         * ETags are used for concurrency checking when updating resources (before transferring to). This value will be empty if
         * the operation has not completed yet.
         */
        ReceivingETag?: string;
        /** The ids of transactions that occurred as a result of the request's receiving action. */
        ReceivingTransactionIds?: string[];

    }

    export interface FileConfig {
        /**
         * The set of content types that will be used for validation. Each content type can have a maximum character length of 40
         * and up to 128 types can be listed.
         */
        ContentTypes?: string[];
        /**
         * The set of tags that will be used for validation. Each tag can have a maximum character length of 32 and up to 1024 tags
         * can be listed.
         */
        Tags?: string[];

    }

    export interface FilterOptions {
        /**
         * The OData filter utilized. Mutually exclusive with 'IncludeAllItems'. More info about Filter Complexity limits can be
         * found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/search#limits
         */
        Filter?: string;
        /** The flag that overrides the filter and allows for returning all catalog items. Mutually exclusive with 'Filter'. */
        IncludeAllItems?: boolean;

    }

    export interface GetCatalogConfigRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface GetCatalogConfigResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The catalog configuration. */
        Config?: CatalogConfig;

    }

    export interface GetDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The unique ID of the item. */
        Id?: string;

    }

    export interface GetDraftItemResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Full metadata of the catalog item requested. */
        Item?: CatalogItem;

    }

    export interface GetDraftItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** List of item alternate IDs. */
        AlternateIds?: CatalogAlternateId[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** List of Item Ids. */
        Ids?: string[];

    }

    export interface GetDraftItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** An opaque token used to retrieve the next page of items, if any are available. */
        ContinuationToken?: string;
        /** A set of items created by the entity. */
        Items?: CatalogItem[];

    }

    export interface GetEntityDraftItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * An opaque token used to retrieve the next page of items created by the caller, if any are available. Should be null on
         * initial request.
         */
        ContinuationToken?: string;
        /** Number of items to retrieve. This value is optional. Default value is 10. */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * OData Filter to refine the items returned. CatalogItem properties 'type' can be used in the filter. For example: "type
         * eq 'ugc'"
         */
        Filter?: string;

    }

    export interface GetEntityDraftItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** An opaque token used to retrieve the next page of items, if any are available. */
        ContinuationToken?: string;
        /** A set of items created by the entity. */
        Items?: CatalogItem[];

    }

    export interface GetEntityItemReviewRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The unique ID of the item. */
        Id?: string;

    }

    export interface GetEntityItemReviewResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The review the entity submitted for the requested item. */
        Review?: Review;

    }

    export interface GetInventoryCollectionIdsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An opaque token used to retrieve the next page of collection ids, if any are available. */
        ContinuationToken?: string;
        /** Number of items to retrieve. This value is optional. The default value is 10 */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity the request is about. Set to the caller by default. */
        Entity?: EntityKey;

    }

    export interface GetInventoryCollectionIdsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested inventory collection ids. */
        CollectionIds?: string[];
        /** An opaque token used to retrieve the next page of collection ids, if any are available. */
        ContinuationToken?: string;

    }

    export interface GetInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The id of the entity's collection to perform this action on. (Default="default") */
        CollectionId?: string;
        /**
         * An opaque token used to retrieve the next page of items in the inventory, if any are available. Should be null on
         * initial request.
         */
        ContinuationToken?: string;
        /** Number of items to retrieve. This value is optional. Maximum page size is 50. The default value is 10 */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * OData Filter to refine the items returned. InventoryItem properties 'type', 'id', and 'stackId' can be used in the
         * filter. For example: "type eq 'currency'"
         */
        Filter?: string;

    }

    export interface GetInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** An opaque token used to retrieve the next page of items, if any are available. */
        ContinuationToken?: string;
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /** The requested inventory items. */
        Items?: InventoryItem[];

    }

    export interface GetInventoryOperationStatusRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The id of the entity's collection to perform this action on. (Default="default") */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface GetInventoryOperationStatusResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The inventory operation status. */
        OperationStatus?: string;

    }

    export interface GetItemContainersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /**
         * An opaque token used to retrieve the next page of items in the inventory, if any are available. Should be null on
         * initial request.
         */
        ContinuationToken?: string;
        /** Number of items to retrieve. This value is optional. Default value is 10. */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The unique ID of the item. */
        Id?: string;

    }

    export interface GetItemContainersResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** List of Bundles and Stores containing the requested items. */
        Containers?: CatalogItem[];
        /** An opaque token used to retrieve the next page of items, if any are available. */
        ContinuationToken?: string;

    }

    export interface GetItemModerationStateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The unique ID of the item. */
        Id?: string;

    }

    export interface GetItemModerationStateResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The current moderation state for the requested item. */
        State?: ModerationState;

    }

    export interface GetItemPublishStatusRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The unique ID of the item. */
        Id?: string;

    }

    export interface GetItemPublishStatusResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** High level status of the published item. */
        Result?: string;
        /** Descriptive message about the current status of the publish. */
        StatusMessage?: string;

    }

    export interface GetItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The unique ID of the item. */
        Id?: string;

    }

    export interface GetItemResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The item result. */
        Item?: CatalogItem;

    }

    export interface GetItemReviewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** An opaque token used to retrieve the next page of items, if any are available. */
        ContinuationToken?: string;
        /** Number of items to retrieve. This value is optional. Default value is 10. */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The unique ID of the item. */
        Id?: string;
        /**
         * An OData orderBy used to order the results of the query. Possible values are Helpfulness, Rating, and Submitted (For
         * example: "Submitted desc")
         */
        OrderBy?: string;

    }

    export interface GetItemReviewsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** An opaque token used to retrieve the next page of items, if any are available. */
        ContinuationToken?: string;
        /** The paginated set of results. */
        Reviews?: Review[];

    }

    export interface GetItemReviewSummaryRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The unique ID of the item. */
        Id?: string;

    }

    export interface GetItemReviewSummaryResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The least favorable review for this item. */
        LeastFavorableReview?: Review;
        /** The most favorable review for this item. */
        MostFavorableReview?: Review;
        /** The summary of ratings associated with this item. */
        Rating?: Rating;
        /** The total number of reviews associated with this item. */
        ReviewsCount: number;

    }

    export interface GetItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** List of item alternate IDs. */
        AlternateIds?: CatalogAlternateId[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** List of Item Ids. */
        Ids?: string[];

    }

    export interface GetItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Metadata of set of items. */
        Items?: CatalogItem[];

    }

    export interface GetMicrosoftStoreAccessTokensRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface GetMicrosoftStoreAccessTokensResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The collections access token for calling https://onestore.microsoft.com/b2b/keys/create/collections to obtain a
         * CollectionsIdKey for the user
         */
        CollectionsAccessToken?: string;
        /** The date the collections access token expires */
        CollectionsAccessTokenExpirationDate: string;

    }

    export interface GetTransactionHistoryRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The id of the entity's collection to perform this action on. (Default="default") */
        CollectionId?: string;
        /** An opaque token used to retrieve the next page of items, if any are available. Should be null on initial request. */
        ContinuationToken?: string;
        /** Number of items to retrieve. This value is optional. The default value is 10 */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * An OData filter used to refine the TransactionHistory. Transaction properties 'timestamp', 'transactionid', 'apiname'
         * and 'operationtype' can be used in the filter. Properties 'transactionid', 'apiname', and 'operationtype' cannot be used
         * together in a single request. The 'timestamp' property can be combined with 'apiname' or 'operationtype' in a single
         * request. For example: "timestamp ge 2023-06-20T23:30Z" or "transactionid eq '10'" or "(timestamp ge 2023-06-20T23:30Z)
         * and (apiname eq 'AddInventoryItems')". By default, a 6 month timespan from the current date is used.
         */
        Filter?: string;
        /**
         * An OData orderby to order TransactionHistory results. The only supported values are 'timestamp asc' or 'timestamp desc'.
         * Default orderby is 'timestamp asc'
         */
        OrderBy?: string;

    }

    export interface GetTransactionHistoryResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** An opaque token used to retrieve the next page of items, if any are available. Should be null on initial request. */
        ContinuationToken?: string;
        /** The requested inventory transactions. */
        Transactions?: Transaction[];

    }

    export interface GooglePlayProductPurchase {
        /** The Product ID (SKU) of the InApp product purchased from the Google Play store. */
        ProductId?: string;
        /** The token provided to the player's device when the product was purchased */
        Token?: string;

    }

    type HelpfulnessVote = "None"

        | "UnHelpful"
        | "Helpful";

    export interface Image {
        /** The image unique ID. */
        Id?: string;
        /**
         * The client-defined tag associated with this image. Tags must be defined in the Catalog Config before being used in
         * images
         */
        Tag?: string;
        /** Images can be defined as either a "thumbnail" or "screenshot". There can only be one "thumbnail" image per item. */
        Type?: string;
        /** The URL for retrieval of the image. */
        Url?: string;

    }

    export interface ImageConfig {
        /**
         * The set of tags that will be used for validation. Each tag can have a maximum character length of 32 and up to 1024 tags
         * can be listed.
         */
        Tags?: string[];

    }

    export interface InitialValues {
        /** Game specific properties for display purposes. The Display Properties field has a 1000 byte limit. */
        DisplayProperties?: any;

    }

    export interface InventoryItem {
        /** The amount of the item. */
        Amount?: number;
        /**
         * Game specific properties for display purposes. This is an arbitrary JSON blob. The Display Properties field has a 1000
         * byte limit.
         */
        DisplayProperties?: any;
        /** Only used for subscriptions. The date of when the item will expire in UTC. */
        ExpirationDate?: string;
        /** The id of the item. This should correspond to the item id in the catalog. */
        Id?: string;
        /** The stack id of the item. */
        StackId?: string;
        /** The type of the item. This should correspond to the item type in the catalog. */
        Type?: string;

    }

    export interface InventoryItemReference {
        /** The inventory item alternate id the request applies to. */
        AlternateId?: AlternateId;
        /** The inventory item id the request applies to. */
        Id?: string;
        /** The inventory stack id the request should redeem to. (Default="default") */
        StackId?: string;

    }

    export interface InventoryOperation {
        /** The add operation. */
        Add?: AddInventoryItemsOperation;
        /** The delete operation. */
        Delete?: DeleteInventoryItemsOperation;
        /** The purchase operation. */
        Purchase?: PurchaseInventoryItemsOperation;
        /** The subtract operation. */
        Subtract?: SubtractInventoryItemsOperation;
        /** The transfer operation. */
        Transfer?: TransferInventoryItemsOperation;
        /** The update operation. */
        Update?: UpdateInventoryItemsOperation;

    }

    export interface KeywordSet {
        /** A list of localized keywords. */
        Values?: string[];

    }

    export interface ModerationState {
        /** The date and time this moderation state was last updated. */
        LastModifiedDate?: string;
        /** The current stated reason for the associated item being moderated. */
        Reason?: string;
        /** The current moderation status for the associated item. */
        Status?: string;

    }

    type ModerationStatus = "Unknown"

        | "AwaitingModeration"
        | "Approved"
        | "Rejected";

    export interface PayoutDetails {

    }

    export interface Permissions {
        /**
         * The list of ids of Segments that the a player can be in to purchase from the store. When a value is provided, the player
         * must be in at least one of the segments listed for the purchase to be allowed.
         */
        SegmentIds?: string[];

    }

    export interface PublishDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * ETag of the catalog item to published from the working catalog to the public catalog. Used for optimistic concurrency.
         * If the provided ETag does not match the ETag in the current working catalog, the request will be rejected. If not
         * provided, the current version of the document in the working catalog will be published.
         */
        ETag?: string;
        /** The unique ID of the item. */
        Id?: string;

    }

    export interface PublishDraftItemResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    type PublishResult = "Unknown"

        | "Pending"
        | "Succeeded"
        | "Failed"
        | "Canceled";

    export interface PurchaseInventoryItemsOperation {
        /** The amount to purchase. */
        Amount?: number;
        /**
         * Indicates whether stacks reduced to an amount of 0 during the operation should be deleted from the inventory. (Default =
         * false)
         */
        DeleteEmptyStacks: boolean;
        /** The duration to purchase. */
        DurationInSeconds?: number;
        /** The inventory item the operation applies to. */
        Item?: InventoryItemReference;
        /** The values to apply to a stack newly created by this operation. */
        NewStackValues?: InitialValues;
        /**
         * The per-item price the item is expected to be purchased at. This must match a value configured in the Catalog or
         * specified Store.
         */
        PriceAmounts?: PurchasePriceAmount[];
        /** The id of the Store to purchase the item from. */
        StoreId?: string;

    }

    export interface PurchaseInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The amount to purchase. */
        Amount?: number;
        /**
         * The id of the entity's collection to perform this action on. (Default="default"). The number of inventory collections is
         * unlimited.
         */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory.
         * (Default=false)
         */
        DeleteEmptyStacks: boolean;
        /** The duration to purchase. */
        DurationInSeconds?: number;
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /**
         * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
         * be garbage collected eventually.
         */
        IdempotencyId?: string;
        /** The inventory item the request applies to. */
        Item?: InventoryItemReference;
        /** The values to apply to a stack newly created by this request. */
        NewStackValues?: InitialValues;
        /**
         * The per-item price the item is expected to be purchased at. This must match a value configured in the Catalog or
         * specified Store.
         */
        PriceAmounts?: PurchasePriceAmount[];
        /** The id of the Store to purchase the item from. */
        StoreId?: string;

    }

    export interface PurchaseInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /** The idempotency id used in the request. */
        IdempotencyId?: string;
        /** The ids of transactions that occurred as a result of the request. */
        TransactionIds?: string[];

    }

    export interface PurchaseOverride {

    }

    export interface PurchaseOverridesInfo {

    }

    export interface PurchasePriceAmount {
        /** The amount of the inventory item to use in the purchase . */
        Amount: number;
        /** The inventory item id to use in the purchase . */
        ItemId?: string;
        /** The inventory stack id the to use in the purchase. Set to "default" by default */
        StackId?: string;

    }

    export interface Rating {
        /** The average rating for this item. */
        Average?: number;
        /** The total count of 1 star ratings for this item. */
        Count1Star?: number;
        /** The total count of 2 star ratings for this item. */
        Count2Star?: number;
        /** The total count of 3 star ratings for this item. */
        Count3Star?: number;
        /** The total count of 4 star ratings for this item. */
        Count4Star?: number;
        /** The total count of 5 star ratings for this item. */
        Count5Star?: number;
        /** The total count of ratings for this item. */
        TotalCount?: number;

    }

    export interface RealMoneyPriceDetails {

    }

    export interface RedeemAppleAppStoreInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The id of the entity's collection to perform this action on. (Default="default") */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The receipt provided by the Apple marketplace upon successful purchase. */
        Receipt?: string;

    }

    export interface RedeemAppleAppStoreInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of failed redemptions from the external marketplace. */
        Failed?: RedemptionFailure[];
        /** The list of successful redemptions from the external marketplace. */
        Succeeded?: RedemptionSuccess[];
        /** The Transaction IDs associated with the inventory modifications */
        TransactionIds?: string[];

    }

    export interface RedeemGooglePlayInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The id of the entity's collection to perform this action on. (Default="default") */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The list of purchases to redeem */
        Purchases?: GooglePlayProductPurchase[];

    }

    export interface RedeemGooglePlayInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of failed redemptions from the external marketplace. */
        Failed?: RedemptionFailure[];
        /** The list of successful redemptions from the external marketplace. */
        Succeeded?: RedemptionSuccess[];
        /** The Transaction IDs associated with the inventory modifications */
        TransactionIds?: string[];

    }

    export interface RedeemMicrosoftStoreInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The id of the entity's collection to perform this action on. (Default="default") */
        CollectionId?: string;
        /** The OneStore Collections Id Key used for AAD authentication. */
        CollectionsIdKey?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * Xbox Token used for delegated business partner authentication. Token provided by the Xbox Live SDK method
         * GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", "").
         */
        XboxToken?: string;

    }

    export interface RedeemMicrosoftStoreInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of failed redemptions from the external marketplace. */
        Failed?: RedemptionFailure[];
        /** The list of successful redemptions from the external marketplace. */
        Succeeded?: RedemptionSuccess[];
        /** The Transaction IDs associated with the inventory modifications */
        TransactionIds?: string[];

    }

    export interface RedeemNintendoEShopInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The id of the entity's collection to perform this action on. (Default="default") */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The Nintendo provided token authorizing redemption */
        NintendoServiceAccountIdToken?: string;

    }

    export interface RedeemNintendoEShopInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of failed redemptions from the external marketplace. */
        Failed?: RedemptionFailure[];
        /** The list of successful redemptions from the external marketplace. */
        Succeeded?: RedemptionSuccess[];
        /** The Transaction IDs associated with the inventory modifications */
        TransactionIds?: string[];

    }

    export interface RedeemPlayStationStoreInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Auth code returned by PlayStation :tm: Network OAuth system. */
        AuthorizationCode?: string;
        /** The id of the entity's collection to perform this action on. (Default="default") */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** Redirect URI supplied to PlayStation :tm: Network when requesting an auth code. */
        RedirectUri?: string;
        /** Optional Service Label to pass into the request. */
        ServiceLabel?: string;

    }

    export interface RedeemPlayStationStoreInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of failed redemptions from the external marketplace. */
        Failed?: RedemptionFailure[];
        /** The list of successful redemptions from the external marketplace. */
        Succeeded?: RedemptionSuccess[];
        /** The Transaction IDs associated with the inventory modifications */
        TransactionIds?: string[];

    }

    export interface RedeemSteamInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The id of the entity's collection to perform this action on. (Default="default") */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface RedeemSteamInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of failed redemptions from the external marketplace. */
        Failed?: RedemptionFailure[];
        /** The list of successful redemptions from the external marketplace. */
        Succeeded?: RedemptionSuccess[];
        /** The Transaction IDs associated with the inventory modifications */
        TransactionIds?: string[];

    }

    export interface RedemptionFailure {
        /** The marketplace failure code. */
        FailureCode?: string;
        /** The marketplace error details explaining why the offer failed to redeem. */
        FailureDetails?: string;
        /** The transaction id in the external marketplace. */
        MarketplaceTransactionId?: string;
        /** The ID of the offer being redeemed. */
        OfferId?: string;

    }

    export interface RedemptionSuccess {
        /** The transaction id in the external marketplace. */
        MarketplaceTransactionId?: string;
        /** The ID of the offer being redeemed. */
        OfferId?: string;
        /** The timestamp for when the redeem was completed. */
        SuccessTimestamp: string;

    }

    export interface ReportItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** Category of concern for this report. */
        ConcernCategory?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The unique ID of the item. */
        Id?: string;
        /** The string reason for this report. */
        Reason?: string;

    }

    export interface ReportItemResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface ReportItemReviewRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID of the item associated with the review. */
        AlternateId?: CatalogAlternateId;
        /** The reason this review is being reported. */
        ConcernCategory?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The string ID of the item associated with the review. */
        ItemId?: string;
        /** The string reason for this report. */
        Reason?: string;
        /** The ID of the review to submit a report for. */
        ReviewId?: string;

    }

    export interface ReportItemReviewResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface Review {
        /** The star rating associated with each selected category in this review. */
        CategoryRatings?: { [key: string]: number };
        /** The number of negative helpfulness votes for this review. */
        HelpfulNegative: number;
        /** The number of positive helpfulness votes for this review. */
        HelpfulPositive: number;
        /** Indicates whether the review author has the item installed. */
        IsInstalled: boolean;
        /** The ID of the item being reviewed. */
        ItemId?: string;
        /** The version of the item being reviewed. */
        ItemVersion?: string;
        /** The locale for which this review was submitted in. */
        Locale?: string;
        /** Star rating associated with this review. */
        Rating: number;
        /** The ID of the author of the review. */
        ReviewerEntity?: EntityKey;
        /** Deprecated. Use ReviewerEntity instead. This property will be removed in a future release. */
        ReviewerId?: string;
        /** The ID of the review. */
        ReviewId?: string;
        /** The full text of this review. */
        ReviewText?: string;
        /** The date and time this review was last submitted. */
        Submitted: string;
        /** The title of this review. */
        Title?: string;

    }

    export interface ReviewConfig {
        /** A set of categories that can be applied toward ratings and reviews. */
        CategoryRatings?: CategoryRatingConfig[];

    }

    export interface ReviewItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The unique ID of the item. */
        Id?: string;
        /** The review to submit. */
        Review?: Review;

    }

    export interface ReviewItemResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface ReviewTakedown {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The ID of the item associated with the review to take down. */
        ItemId?: string;
        /** The ID of the review to take down. */
        ReviewId?: string;

    }

    export interface ScanResult {
        /** The URL of the item which failed the scan. */
        Url?: string;

    }

    export interface SearchItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An opaque token used to retrieve the next page of items, if any are available. */
        ContinuationToken?: string;
        /** Number of items to retrieve. This value is optional. Maximum page size is 50. Default value is 10. */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * An OData filter used to refine the search query (For example: "type eq 'ugc'"). More info about Filter Complexity limits
         * can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/search#limits
         */
        Filter?: string;
        /** The locale to be returned in the result. */
        Language?: string;
        /** An OData orderBy used to order the results of the search query. For example: "rating/average asc" */
        OrderBy?: string;
        /** The text to search for. */
        Search?: string;
        /**
         * An OData select query option used to augment the search results. If not defined, the default search result metadata will
         * be returned.
         */
        Select?: string;
        /** The store to restrict the search request to. */
        Store?: StoreReference;

    }

    export interface SearchItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** An opaque token used to retrieve the next page of items, if any are available. */
        ContinuationToken?: string;
        /** The paginated set of results for the search query. */
        Items?: CatalogItem[];

    }

    export interface SetItemModerationStateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID associated with this item. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The unique ID of the item. */
        Id?: string;
        /** The reason for the moderation state change for the associated item. */
        Reason?: string;
        /** The status to set for the associated item. */
        Status?: string;

    }

    export interface SetItemModerationStateResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface StoreDetails {
        /** The options for the filter in filter-based stores. These options are mutually exclusive with item references. */
        FilterOptions?: FilterOptions;
        /** The permissions that control which players can purchase from the store. */
        Permissions?: Permissions;
        /** The global prices utilized in the store. These options are mutually exclusive with price options in item references. */
        PriceOptionsOverride?: CatalogPriceOptionsOverride;

    }

    export interface StoreReference {
        /** An alternate ID of the store. */
        AlternateId?: CatalogAlternateId;
        /** The unique ID of the store. */
        Id?: string;

    }

    export interface SubmitItemReviewVoteRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An alternate ID of the item associated with the review. */
        AlternateId?: CatalogAlternateId;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The string ID of the item associated with the review. */
        ItemId?: string;
        /** The ID of the review to submit a helpfulness vote for. */
        ReviewId?: string;
        /** The helpfulness vote of the review. */
        Vote?: string;

    }

    export interface SubmitItemReviewVoteResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface SubscriptionDetails {
        /** The length of time that the subscription will last in seconds. */
        DurationInSeconds: number;

    }

    export interface SubtractInventoryItemsOperation {
        /** The amount to subtract from the current item amount. */
        Amount?: number;
        /**
         * Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory. (Default =
         * false).
         */
        DeleteEmptyStacks: boolean;
        /** The duration to subtract from the current item expiration date. */
        DurationInSeconds?: number;
        /** The inventory item the operation applies to. */
        Item?: InventoryItemReference;

    }

    export interface SubtractInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The amount to subtract for the current item. */
        Amount?: number;
        /**
         * The id of the entity's collection to perform this action on. (Default="default"). The number of inventory collections is
         * unlimited.
         */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory.
         * (Default=false)
         */
        DeleteEmptyStacks: boolean;
        /** The duration to subtract from the current item expiration date. */
        DurationInSeconds?: number;
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /**
         * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
         * be garbage collected eventually.
         */
        IdempotencyId?: string;
        /** The inventory item the request applies to. */
        Item?: InventoryItemReference;

    }

    export interface SubtractInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /** The idempotency id used in the request. */
        IdempotencyId?: string;
        /** The ids of transactions that occurred as a result of the request. */
        TransactionIds?: string[];

    }

    export interface TakedownItemReviewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The set of reviews to take down. */
        Reviews?: ReviewTakedown[];

    }

    export interface TakedownItemReviewsResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface Transaction {
        /** The API call that caused this transaction. */
        ApiName?: string;
        /** The type of item that the the operation occurred on. */
        ItemType?: string;
        /** The operations that occurred. */
        Operations?: TransactionOperation[];
        /** The type of operation that was run. */
        OperationType?: string;
        /** Additional details about the transaction. Null if it was not a purchase operation. */
        PurchaseDetails?: TransactionPurchaseDetails;
        /** Additional details about the transaction. Null if it was not a redeem operation. */
        RedeemDetails?: TransactionRedeemDetails;
        /** The time this transaction occurred in UTC. */
        Timestamp: string;
        /** The id of the transaction. This should be treated like an opaque token. */
        TransactionId?: string;
        /** Additional details about the transaction. Null if it was not a transfer operation. */
        TransferDetails?: TransactionTransferDetails;

    }

    export interface TransactionOperation {
        /** The amount of items in this transaction. */
        Amount?: number;
        /** The duration modified in this transaction. */
        DurationInSeconds?: number;
        /** The friendly id of the items in this transaction. */
        ItemFriendlyId?: string;
        /** The item id of the items in this transaction. */
        ItemId?: string;
        /** The type of item that the operation occurred on. */
        ItemType?: string;
        /** The stack id of the items in this transaction. */
        StackId?: string;
        /** The type of the operation that occurred. */
        Type?: string;

    }

    export interface TransactionPurchaseDetails {
        /** The friendly id of the Store the item was purchased from or null. */
        StoreFriendlyId?: string;
        /** The id of the Store the item was purchased from or null. */
        StoreId?: string;

    }

    export interface TransactionRedeemDetails {
        /** The marketplace that the offer is being redeemed from. */
        Marketplace?: string;
        /** The transaction Id returned from the marketplace. */
        MarketplaceTransactionId?: string;
        /** The offer Id of the item being redeemed. */
        OfferId?: string;

    }

    export interface TransactionTransferDetails {
        /** The collection id the items were transferred from or null if it was the current collection. */
        GivingCollectionId?: string;
        /** The entity the items were transferred from or null if it was the current entity. */
        GivingEntity?: EntityKey;
        /** The collection id the items were transferred to or null if it was the current collection. */
        ReceivingCollectionId?: string;
        /** The entity the items were transferred to or null if it was the current entity. */
        ReceivingEntity?: EntityKey;
        /** The id of the transfer that occurred. */
        TransferId?: string;

    }

    export interface TransferInventoryItemsOperation {
        /** The amount to transfer. */
        Amount?: number;
        /**
         * Indicates whether stacks reduced to an amount of 0 during the operation should be deleted from the inventory. (Default =
         * false)
         */
        DeleteEmptyStacks: boolean;
        /** The inventory item the operation is transferring from. */
        GivingItem?: InventoryItemReference;
        /** The values to apply to a stack newly created by this operation. */
        NewStackValues?: InitialValues;
        /** The inventory item the operation is transferring to. */
        ReceivingItem?: InventoryItemReference;

    }

    export interface TransferInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The amount to transfer . */
        Amount?: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * Indicates whether stacks reduced to an amount of 0 during the request should be deleted from the inventory. (Default =
         * false)
         */
        DeleteEmptyStacks: boolean;
        /** The inventory collection id the request is transferring from. (Default="default") */
        GivingCollectionId?: string;
        /** The entity the request is transferring from. Set to the caller by default. */
        GivingEntity?: EntityKey;
        /**
         * ETags are used for concurrency checking when updating resources (before transferring from). More information about using
         * ETags can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        GivingETag?: string;
        /** The inventory item the request is transferring from. */
        GivingItem?: InventoryItemReference;
        /** The idempotency id for the request. */
        IdempotencyId?: string;
        /** The values to apply to a stack newly created by this request. */
        NewStackValues?: InitialValues;
        /** The inventory collection id the request is transferring to. (Default="default") */
        ReceivingCollectionId?: string;
        /** The entity the request is transferring to. Set to the caller by default. */
        ReceivingEntity?: EntityKey;
        /** The inventory item the request is transferring to. */
        ReceivingItem?: InventoryItemReference;

    }

    export interface TransferInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * ETags are used for concurrency checking when updating resources (after transferring from). More information about using
         * ETags can be found here: https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        GivingETag?: string;
        /** The ids of transactions that occurred as a result of the request's giving action. */
        GivingTransactionIds?: string[];
        /** The idempotency id for the request. */
        IdempotencyId?: string;
        /**
         * The transfer operation status. Possible values are 'InProgress' or 'Completed'. If the operation has completed, the
         * response code will be 200. Otherwise, it will be 202.
         */
        OperationStatus?: string;
        /**
         * The token that can be used to get the status of the transfer operation. This will only have a value if OperationStatus
         * is 'InProgress'.
         */
        OperationToken?: string;
        /** The ids of transactions that occurred as a result of the request's receiving action. */
        ReceivingTransactionIds?: string[];

    }

    export interface UpdateCatalogConfigRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The updated catalog configuration. */
        Config?: CatalogConfig;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface UpdateCatalogConfigResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface UpdateDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Updated metadata describing the catalog item to be updated. */
        Item?: CatalogItem;
        /** Whether the item should be published immediately. This value is optional, defaults to false. */
        Publish: boolean;

    }

    export interface UpdateDraftItemResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Updated metadata describing the catalog item just updated. */
        Item?: CatalogItem;

    }

    export interface UpdateInventoryItemsOperation {
        /** The inventory item to update with the specified values. */
        Item?: InventoryItem;

    }

    export interface UpdateInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The id of the entity's collection to perform this action on. (Default="default"). The number of inventory collections is
         * unlimited.
         */
        CollectionId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /**
         * The Idempotency ID for this request. Idempotency IDs can be used to prevent operation replay in the medium term but will
         * be garbage collected eventually.
         */
        IdempotencyId?: string;
        /** The inventory item to update with the specified values. */
        Item?: InventoryItem;

    }

    export interface UpdateInventoryItemsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * ETags are used for concurrency checking when updating resources. More information about using ETags can be found here:
         * https://learn.microsoft.com/en-us/gaming/playfab/features/economy-v2/catalog/etags
         */
        ETag?: string;
        /** The idempotency id used in the request. */
        IdempotencyId?: string;
        /** The ids of transactions that occurred as a result of the request. */
        TransactionIds?: string[];

    }

    export interface UploadInfo {
        /** Name of the file to be uploaded. */
        FileName?: string;

    }

    export interface UploadUrlMetadata {
        /** Name of the file for which this upload URL was requested. */
        FileName?: string;
        /** Unique ID for the binary content to be uploaded to the target URL. */
        Id?: string;
        /** URL for the binary content to be uploaded to. */
        Url?: string;

    }

    export interface UserGeneratedContentSpecificConfig {
        /** The set of content types that will be used for validation. */
        ContentTypes?: string[];
        /** The set of tags that will be used for validation. */
        Tags?: string[];

    }


}
