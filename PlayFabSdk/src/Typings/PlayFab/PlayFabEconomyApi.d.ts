/// <reference path="Playfab.d.ts" />

declare module PlayFabEconomyModule {
    export interface IPlayFabEconomy {
        ForgetAllCredentials(): void;

        /**
         * Creates a new item in the working catalog using provided metadata.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createdraftitem
         */
        CreateDraftItem(request: PlayFabEconomyModels.CreateDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateDraftItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates one or more upload URLs which can be used by the client to upload raw file data.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/createuploadurls
         */
        CreateUploadUrls(request: PlayFabEconomyModels.CreateUploadUrlsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.CreateUploadUrlsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes all reviews, helpfulness votes, and ratings submitted by the entity specified.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteentityitemreviews
         */
        DeleteEntityItemReviews(request: PlayFabEconomyModels.DeleteEntityItemReviewsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteEntityItemReviewsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes an item from working catalog and all published versions from the public catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/deleteitem
         */
        DeleteItem(request: PlayFabEconomyModels.DeleteItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.DeleteItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the configuration for the catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getcatalogconfig
         */
        GetCatalogConfig(request: PlayFabEconomyModels.GetCatalogConfigRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetCatalogConfigResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves an item from the working catalog. This item represents the current working state of the item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitem
         */
        GetDraftItem(request: PlayFabEconomyModels.GetDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a paginated list of the items from the draft catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getdraftitems
         */
        GetDraftItems(request: PlayFabEconomyModels.GetDraftItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetDraftItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a paginated list of the items from the draft catalog created by the Entity.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getentitydraftitems
         */
        GetEntityDraftItems(request: PlayFabEconomyModels.GetEntityDraftItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetEntityDraftItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the submitted review for the specified item by the authenticated entity.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getentityitemreview
         */
        GetEntityItemReview(request: PlayFabEconomyModels.GetEntityItemReviewRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetEntityItemReviewResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves an item from the public catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitem
         */
        GetItem(request: PlayFabEconomyModels.GetItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the moderation state for an item, including the concern category and string reason.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemmoderationstate
         */
        GetItemModerationState(request: PlayFabEconomyModels.GetItemModerationStateRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemModerationStateResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the status of a publish of an item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitempublishstatus
         */
        GetItemPublishStatus(request: PlayFabEconomyModels.GetItemPublishStatusRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemPublishStatusResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a paginated set of reviews associated with the specified item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviews
         */
        GetItemReviews(request: PlayFabEconomyModels.GetItemReviewsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemReviewsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a summary of all reviews associated with the specified item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/getitemreviewsummary
         */
        GetItemReviewSummary(request: PlayFabEconomyModels.GetItemReviewSummaryRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.GetItemReviewSummaryResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Initiates a publish of an item from the working catalog to the public catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/publishdraftitem
         */
        PublishDraftItem(request: PlayFabEconomyModels.PublishDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.PublishDraftItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Submit a report for an item, indicating in what way the item is inappropriate.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportitem
         */
        ReportItem(request: PlayFabEconomyModels.ReportItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReportItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Submit a report for a review
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reportitemreview
         */
        ReportItemReview(request: PlayFabEconomyModels.ReportItemReviewRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReportItemReviewResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates or updates a review for the specified item.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/reviewitem
         */
        ReviewItem(request: PlayFabEconomyModels.ReviewItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.ReviewItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Executes a search against the public catalog using the provided search parameters and returns a set of paginated
         * results.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/searchitems
         */
        SearchItems(request: PlayFabEconomyModels.SearchItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SearchItemsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets the moderation state for an item, including the concern category and string reason.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/setitemmoderationstate
         */
        SetItemModerationState(request: PlayFabEconomyModels.SetItemModerationStateRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SetItemModerationStateResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Submit a vote for a review, indicating whether the review was helpful or unhelpful.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/submititemreviewvote
         */
        SubmitItemReviewVote(request: PlayFabEconomyModels.SubmitItemReviewVoteRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.SubmitItemReviewVoteResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Submit a request to takedown one or more reviews.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/takedownitemreviews
         */
        TakedownItemReviews(request: PlayFabEconomyModels.TakedownItemReviewsRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.TakedownItemReviewsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the configuration for the catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatecatalogconfig
         */
        UpdateCatalogConfig(request: PlayFabEconomyModels.UpdateCatalogConfigRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateCatalogConfigResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update the metadata for an item in the working catalog.
         * https://docs.microsoft.com/rest/api/playfab/economy/catalog/updatedraftitem
         */
        UpdateDraftItem(request: PlayFabEconomyModels.UpdateDraftItemRequest, callback: PlayFabModule.ApiCallback<PlayFabEconomyModels.UpdateDraftItemResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabEconomyModels {
    export interface CatalogAlternateId {
        /** Type of the alternate ID. */
        Type?: string;
        /** Value of the alternate ID. */
        Value?: string;

    }

    export interface CatalogConfig {
        /** A list of player entity keys that will have admin permissions. */
        AdminEntities?: EntityKey[];
        /** A list of display properties to index. */
        DisplayPropertyIndexInfos?: DisplayPropertyIndexInfo[];
        /** Flag defining whether catalog is enabled. */
        IsCatalogEnabled: boolean;
        /** A set of player entity keys that are allowed to review content. */
        ReviewerEntities?: EntityKey[];
        /** The set of configuration that only applies to user generated contents. */
        UserGeneratedContent?: UserGeneratedContentSpecificConfig;

    }

    export interface CatalogItem {
        /** The alternate IDs associated with this item. */
        AlternateIds?: CatalogAlternateId[];
        /** The set of contents associated with this item. */
        Contents?: Content[];
        /** The client-defined type of the item. */
        ContentType?: string;
        /** The date and time when this item was created. */
        CreationDate?: string;
        /** The ID of the creator of this catalog item. */
        CreatorEntity?: EntityKey;
        /**
         * A dictionary of localized descriptions. Key is language code and localized string is the value. The neutral locale is
         * required.
         */
        Description?: { [key: string]: string | null };
        /** Game specific properties for display purposes. This is an arbitrary JSON blob. */
        DisplayProperties?: any;
        /** The user provided version of the item for display purposes. */
        DisplayVersion?: string;
        /** The date of when the item will cease to be available. If not provided then the product will be available indefinitely. */
        EndDate?: string;
        /** The current ETag value that can be used for optimistic concurrency in the If-None-Match header. */
        ETag?: string;
        /** The unique ID of the item. */
        Id?: string;
        /** The images associated with this item. Images can be thumbnails or screenshots. */
        Images?: Image[];
        /** Indicates if the item is hidden. */
        IsHidden?: boolean;
        /** A dictionary of localized keywords. Key is language code and localized list of keywords is the value. */
        Keywords?: { [key: string]: KeywordSet };
        /** The date and time this item was last updated. */
        LastModifiedDate?: string;
        /** The moderation state for this item. */
        Moderation?: ModerationState;
        /** Rating summary for this item. */
        Rating?: Rating;
        /** The date of when the item will be available. If not provided then the product will appear immediately. */
        StartDate?: string;
        /** The list of tags that are associated with this item. */
        Tags?: string[];
        /**
         * A dictionary of localized titles. Key is language code and localized string is the value. The neutral locale is
         * required.
         */
        Title?: { [key: string]: string | null };
        /** The high-level type of the item. */
        Type?: string;

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
        /** The maximum client version that this content is compatible with. */
        MaxClientVersion?: string;
        /** The minimum client version that this content is compatible with. */
        MinClientVersion?: string;
        /** The Azure CDN URL for retrieval of the catalog item binary content. */
        Url?: string;

    }

    export interface CreateDraftItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Metadata describing the new catalog item to be created. */
        Item?: CatalogItem;
        /** Whether the item should be published immediately. */
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

    export interface DeleteEntityItemReviewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    export interface DeleteEntityItemReviewsResponse extends PlayFabModule.IPlayFabResultCommon  {

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
        /** Number of items to retrieve. Maximum page size is 10. */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;

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
        /** Scan results for any items that failed content scans. */
        FailedScanResults?: ScanResult[];
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
        /** Number of items to retrieve. Maximum page size is 200. If not specified, defaults to 10. */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The unique ID of the item. */
        Id?: string;
        /** An OData orderBy used to order the results of the query. */
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

    type HelpfulnessVote = "None"
        | "UnHelpful"
        | "Helpful";

    export interface Image {
        /** The image unique ID. */
        Id?: string;
        /** The client-defined type of this image. */
        Type?: string;
        /** The URL for retrieval of the image. */
        Url?: string;

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
        /** The number of negative helpfulness votes for this review. */
        HelpfulNegative: number;
        /** Total number of helpfulness votes for this review. */
        HelpfulnessVotes: number;
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
        /** Number of items to retrieve. Maximum page size is 225. Default value is 10. */
        Count: number;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** An OData filter used to refine the search query. */
        Filter?: string;
        /** An OData orderBy used to order the results of the search query. */
        OrderBy?: string;
        /** The text to search for. */
        Search?: string;
        /**
         * An OData select query option used to augment the search results. If not defined, the default search result metadata will
         * be returned.
         */
        Select?: string;

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

    export interface TakedownItemReviewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The set of reviews to take down. */
        Reviews?: ReviewTakedown[];

    }

    export interface TakedownItemReviewsResponse extends PlayFabModule.IPlayFabResultCommon  {

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
        /** Whether the item should be published immediately. */
        Publish: boolean;

    }

    export interface UpdateDraftItemResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Updated metadata describing the catalog item just updated. */
        Item?: CatalogItem;

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
        /** The set of content types that will be used for validation and if no values are provided then anything is allowed. */
        ContentTypes?: string[];
        /** The set of tags that will be used for validation and if no values are provided then anything is allowed. */
        Tags?: string[];

    }


}
