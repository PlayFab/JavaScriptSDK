/// <reference path="Playfab.d.ts" />

declare module PlayFabLeaderboardsModule {
    export interface IPlayFabLeaderboards {
        ForgetAllCredentials(): void;

        /**
         * Creates a new leaderboard definition.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/leaderboards/createleaderboarddefinition
         */
        CreateLeaderboardDefinition(request: PlayFabLeaderboardsModels.CreateLeaderboardDefinitionRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>>;
        /**
         * Create a new entity statistic definition.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/createstatisticdefinition
         */
        CreateStatisticDefinition(request: PlayFabLeaderboardsModels.CreateStatisticDefinitionRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>>;
        /**
         * Deletes a leaderboard definition.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/leaderboards/deleteleaderboarddefinition
         */
        DeleteLeaderboardDefinition(request: PlayFabLeaderboardsModels.DeleteLeaderboardDefinitionRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>>;
        /**
         * Deletes the specified entries from the given leaderboard.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/leaderboards/deleteleaderboardentries
         */
        DeleteLeaderboardEntries(request: PlayFabLeaderboardsModels.DeleteLeaderboardEntriesRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>>;
        /**
         * Delete an entity statistic definition. Will delete all statistics on entity profiles and leaderboards.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/deletestatisticdefinition
         */
        DeleteStatisticDefinition(request: PlayFabLeaderboardsModels.DeleteStatisticDefinitionRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>>;
        /**
         * Delete statistics on an entity profile. This will remove all rankings from associated leaderboards.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/deletestatistics
         */
        DeleteStatistics(request: PlayFabLeaderboardsModels.DeleteStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.DeleteStatisticsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.DeleteStatisticsResponse>>;
        /**
         * Get the friend leaderboard for the specified entity. A maximum of 100 friend entries are listed in the leaderboard.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getfriendleaderboardforentity
         */
        GetFriendLeaderboardForEntity(request: PlayFabLeaderboardsModels.GetFriendLeaderboardForEntityRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse>>;
        /**
         * Get the leaderboard for a specific entity type and statistic.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getleaderboard
         */
        GetLeaderboard(request: PlayFabLeaderboardsModels.GetEntityLeaderboardRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse>>;
        /**
         * Get the leaderboard around a specific entity.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getleaderboardaroundentity
         */
        GetLeaderboardAroundEntity(request: PlayFabLeaderboardsModels.GetLeaderboardAroundEntityRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse>>;
        /**
         * Gets the specified leaderboard definition.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/leaderboards/getleaderboarddefinition
         */
        GetLeaderboardDefinition(request: PlayFabLeaderboardsModels.GetLeaderboardDefinitionRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetLeaderboardDefinitionResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetLeaderboardDefinitionResponse>>;
        /**
         * Get the leaderboard limited to a set of entities.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getleaderboardforentities
         */
        GetLeaderboardForEntities(request: PlayFabLeaderboardsModels.GetLeaderboardForEntitiesRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetEntityLeaderboardResponse>>;
        /**
         * Get current statistic definition information
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getstatisticdefinition
         */
        GetStatisticDefinition(request: PlayFabLeaderboardsModels.GetStatisticDefinitionRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetStatisticDefinitionResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetStatisticDefinitionResponse>>;
        /**
         * Get all current statistic definitions information
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getstatisticdefinitions
         */
        GetStatisticDefinitions(request: PlayFabLeaderboardsModels.GetStatisticDefinitionsRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetStatisticDefinitionsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetStatisticDefinitionsResponse>>;
        /**
         * Gets statistics for the specified entity.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getstatistics
         */
        GetStatistics(request: PlayFabLeaderboardsModels.GetStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetStatisticsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetStatisticsResponse>>;
        /**
         * Gets statistics for the specified collection of entities.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/getstatisticsforentities
         */
        GetStatisticsForEntities(request: PlayFabLeaderboardsModels.GetStatisticsForEntitiesRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetStatisticsForEntitiesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.GetStatisticsForEntitiesResponse>>;
        /**
         * Increment a leaderboard version.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/leaderboards/incrementleaderboardversion
         */
        IncrementLeaderboardVersion(request: PlayFabLeaderboardsModels.IncrementLeaderboardVersionRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.IncrementLeaderboardVersionResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.IncrementLeaderboardVersionResponse>>;
        /**
         * Increment an entity statistic definition version.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/incrementstatisticversion
         */
        IncrementStatisticVersion(request: PlayFabLeaderboardsModels.IncrementStatisticVersionRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.IncrementStatisticVersionResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.IncrementStatisticVersionResponse>>;
        /**
         * Lists the leaderboard definitions defined for the Title.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/leaderboards/listleaderboarddefinitions
         */
        ListLeaderboardDefinitions(request: PlayFabLeaderboardsModels.ListLeaderboardDefinitionsRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.ListLeaderboardDefinitionsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.ListLeaderboardDefinitionsResponse>>;
        /**
         * Get all current statistic definitions information
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/liststatisticdefinitions
         */
        ListStatisticDefinitions(request: PlayFabLeaderboardsModels.ListStatisticDefinitionsRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.ListStatisticDefinitionsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.ListStatisticDefinitionsResponse>>;
        /**
         * Unlinks a leaderboard definition from it's linked statistic definition.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/leaderboards/unlinkleaderboardfromstatistic
         */
        UnlinkLeaderboardFromStatistic(request: PlayFabLeaderboardsModels.UnlinkLeaderboardFromStatisticRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>>;
        /**
         * Adds or updates entries on the specified leaderboard.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/leaderboards/updateleaderboardentries
         */
        UpdateLeaderboardEntries(request: PlayFabLeaderboardsModels.UpdateLeaderboardEntriesRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.EmptyResponse>>;
        /**
         * Update statistics on an entity profile. Depending on the statistic definition, this may result in entity being ranked on
         * various leaderboards.
         * https://docs.microsoft.com/rest/api/playfab/leaderboards/statistics-and-leaderboards/updatestatistics
         */
        UpdateStatistics(request: PlayFabLeaderboardsModels.UpdateStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.UpdateStatisticsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabLeaderboardsModels.UpdateStatisticsResponse>>;

    }
}

declare module PlayFabLeaderboardsModels {
    export interface CreateLeaderboardDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Leaderboard columns describing the sort directions, cannot be changed after creation. */
        Columns: LeaderboardColumn[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * The entity type being represented on the leaderboard. If it doesn't correspond to the PlayFab entity types, use
         * 'external' as the type.
         */
        EntityType: string;
        /** A name for the leaderboard, unique per title. */
        Name: string;
        /** Maximum number of entries on this leaderboard */
        SizeLimit: number;
        /** The version reset configuration for the leaderboard definition. */
        VersionConfiguration: VersionConfiguration;

    }

    export interface CreateStatisticDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The columns for the statistic defining the aggregation method for each column. */
        Columns?: StatisticColumn[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity type allowed to have score(s) for this statistic. */
        EntityType?: string;
        /** Name of the statistic. Must be less than 50 characters. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.'. */
        Name: string;
        /** The version reset configuration for the statistic definition. */
        VersionConfiguration?: VersionConfiguration;

    }

    export interface DeleteLeaderboardDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The name of the leaderboard definition to delete. */
        Name: string;

    }

    export interface DeleteLeaderboardEntriesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The unique Ids of the entries to delete from the leaderboard. */
        EntityIds?: string[];
        /** The name of the leaderboard. */
        Name: string;

    }

    export interface DeleteStatisticDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Name of the statistic to delete. */
        Name: string;

    }

    export interface DeleteStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** Collection of statistics to remove from this entity. */
        Statistics: StatisticDelete[];

    }

    export interface DeleteStatisticsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;

    }

    export interface EmptyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string;

    }

    export interface EntityLeaderboardEntry {
        /** Entity's display name. */
        DisplayName?: string;
        /** Entity identifier. */
        Entity?: EntityKey;
        /** The time at which the last update to the entry was recorded on the server. */
        LastUpdated: string;
        /** An opaque blob of data stored on the leaderboard entry. Note that the metadata is not used for ranking purposes. */
        Metadata?: string;
        /** Position on the leaderboard. */
        Rank: number;
        /** Scores for the entry. */
        Scores?: string[];

    }

    export interface EntityStatistics {
        /** Entity key */
        EntityKey?: EntityKey;
        /** All statistics for the given entitykey */
        Statistics?: EntityStatisticValue[];

    }

    export interface EntityStatisticValue {
        /** Metadata associated with the Statistic. */
        Metadata?: string;
        /** Statistic name */
        Name?: string;
        /** Statistic scores */
        Scores?: string[];
        /** Statistic version */
        Version: number;

    }

    type ExternalFriendSources = "None"

        | "Steam"
        | "Facebook"
        | "Xbox"
        | "Psn"
        | "All";

    export interface GetEntityLeaderboardRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Name of the leaderboard. */
        LeaderboardName: string;
        /** Maximum number of results to return from the leaderboard. Minimum 1, maximum 1,000. */
        PageSize: number;
        /** Index position to start from. 1 is beginning of leaderboard. */
        StartingPosition?: number;
        /** Optional version of the leaderboard, defaults to current version. */
        Version?: number;

    }

    export interface GetEntityLeaderboardResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Leaderboard columns describing the sort directions, */
        Columns?: LeaderboardColumn[];
        /** Individual entity rankings in the leaderboard, in sorted order by rank. */
        Rankings?: EntityLeaderboardEntry[];
        /** Version of the leaderboard being returned. */
        Version: number;

    }

    export interface GetFriendLeaderboardForEntityRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /**
         * Indicates which other platforms' friends should be included in the response. In HTTP, it is represented as a
         * comma-separated list of platforms.
         */
        ExternalFriendSources?: string;
        /** Name of the leaderboard. */
        LeaderboardName: string;
        /** Optional version of the leaderboard, defaults to current version. */
        Version?: number;
        /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
        XboxToken?: string;

    }

    export interface GetLeaderboardAroundEntityRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** Name of the leaderboard. */
        LeaderboardName: string;
        /**
         * Number of surrounding entries to return (in addition to specified entity). In general, the number of ranks above and
         * below will be split into half. For example, if the specified value is 10, 5 ranks above and 5 ranks below will be
         * retrieved. However, the numbers will get skewed in either direction when the specified entity is towards the top or
         * bottom of the leaderboard. Also, the number of entries returned can be lower than the value specified for entries at the
         * bottom of the leaderboard.
         */
        MaxSurroundingEntries: number;
        /** Optional version of the leaderboard, defaults to current. */
        Version?: number;

    }

    export interface GetLeaderboardDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The name of the leaderboard to retrieve the definition for. */
        Name: string;

    }

    export interface GetLeaderboardDefinitionResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Sort direction of the leaderboard columns, cannot be changed after creation. */
        Columns: LeaderboardColumn[];
        /** Created time, in UTC */
        Created: string;
        /**
         * The entity type being represented on the leaderboard. If it doesn't correspond to the PlayFab entity types, use
         * 'external' as the type.
         */
        EntityType: string;
        /** Last time, in UTC, leaderboard version was incremented. */
        LastResetTime?: string;
        /** A name for the leaderboard, unique per title. */
        Name: string;
        /** Maximum number of entries on this leaderboard */
        SizeLimit: number;
        /** Latest Leaderboard version. */
        Version: number;
        /** The version reset configuration for the leaderboard definition. */
        VersionConfiguration: VersionConfiguration;

    }

    export interface GetLeaderboardForEntitiesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Collection of Entity IDs to include in the leaderboard. */
        EntityIds: string[];
        /** Name of the leaderboard. */
        LeaderboardName: string;
        /** Optional version of the leaderboard, defaults to current. */
        Version?: number;

    }

    export interface GetStatisticDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Name of the statistic. Must be less than 50 characters. */
        Name: string;

    }

    export interface GetStatisticDefinitionResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The columns for the statistic defining the aggregation method for each column. */
        Columns?: StatisticColumn[];
        /** Created time, in UTC */
        Created: string;
        /** The entity type that can have this statistic. */
        EntityType?: string;
        /** Last time, in UTC, statistic version was incremented. */
        LastResetTime?: string;
        /** The list of leaderboards that are linked to this statistic definition. */
        LinkedLeaderboardNames?: string[];
        /** Name of the statistic. */
        Name?: string;
        /** Statistic version. */
        Version: number;
        /** The version reset configuration for the leaderboard definition. */
        VersionConfiguration?: VersionConfiguration;

    }

    export interface GetStatisticDefinitionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface GetStatisticDefinitionsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** List of statistic definitions for the title. */
        StatisticDefinitions?: StatisticDefinition[];

    }

    export interface GetStatisticsForEntitiesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Collection of Entity IDs to retrieve statistics for. */
        Entities: EntityKey[];

    }

    export interface GetStatisticsForEntitiesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** A mapping of statistic name to the columns defined in the corresponding definition. */
        ColumnDetails?: { [key: string]: StatisticColumnCollection };
        /** List of entities mapped to their statistics. Only the latest version of a statistic is returned. */
        EntitiesStatistics?: EntityStatistics[];

    }

    export interface GetStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetStatisticsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** A mapping of statistic name to the columns defined in the corresponding definition. */
        ColumnDetails?: { [key: string]: StatisticColumnCollection };
        /** The entity id and type. */
        Entity?: EntityKey;
        /** List of statistics keyed by Name. Only the latest version of a statistic is returned. */
        Statistics?: { [key: string]: EntityStatisticValue };

    }

    export interface IncrementLeaderboardVersionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The name of the leaderboard to increment the version for. */
        Name: string;

    }

    export interface IncrementLeaderboardVersionResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** New Leaderboard version. */
        Version: number;

    }

    export interface IncrementStatisticVersionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Name of the statistic to increment the version of. */
        Name: string;

    }

    export interface IncrementStatisticVersionResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** New statistic version. */
        Version: number;

    }

    export interface LeaderboardColumn {
        /**
         * If the value for this column is sourced from a statistic, details of the linked column. Null if the leaderboard is not
         * linked.
         */
        LinkedStatisticColumn?: LinkedStatisticColumn;
        /** A name for the leaderboard column, unique per leaderboard definition. */
        Name: string;
        /** The sort direction for this column. */
        SortDirection: string;

    }

    export interface LeaderboardDefinition {
        /** Sort direction of the leaderboard columns, cannot be changed after creation. */
        Columns: LeaderboardColumn[];
        /** Created time, in UTC */
        Created: string;
        /**
         * The entity type being represented on the leaderboard. If it doesn't correspond to the PlayFab entity types, use
         * 'external' as the type.
         */
        EntityType: string;
        /** Last time, in UTC, leaderboard version was incremented. */
        LastResetTime?: string;
        /** A name for the leaderboard, unique per title. */
        Name: string;
        /** Maximum number of entries on this leaderboard */
        SizeLimit: number;
        /** Latest Leaderboard version. */
        Version: number;
        /** The version reset configuration for the leaderboard definition. */
        VersionConfiguration: VersionConfiguration;

    }

    export interface LeaderboardEntryUpdate {
        /** The unique Id for the entry. If using PlayFab Entities, this would be the entityId of the entity. */
        EntityId: string;
        /**
         * Arbitrary metadata to store along side the leaderboard entry, will be returned by all Leaderboard APIs. Must be less
         * than 50 UTF8 encoded characters.
         */
        Metadata?: string;
        /**
         * The scores for the leaderboard. The number of values provided here must match the number of columns in the Leaderboard
         * definition.
         */
        Scores?: string[];

    }

    type LeaderboardSortDirection = "Descending"

        | "Ascending";

    export interface LinkedStatisticColumn {
        /** The name of the statistic column that this leaderboard column is sourced from. */
        LinkedStatisticColumnName: string;
        /** The name of the statistic. */
        LinkedStatisticName: string;

    }

    export interface ListLeaderboardDefinitionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface ListLeaderboardDefinitionsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** List of leaderboard definitions for the title. */
        LeaderboardDefinitions?: LeaderboardDefinition[];

    }

    export interface ListStatisticDefinitionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface ListStatisticDefinitionsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** List of statistic definitions for the title. */
        StatisticDefinitions?: StatisticDefinition[];

    }

    type ResetInterval = "Manual"

        | "Hour"
        | "Day"
        | "Week"
        | "Month";

    type StatisticAggregationMethod = "Last"

        | "Min"
        | "Max"
        | "Sum";

    export interface StatisticColumn {
        /** Aggregation method for calculating new value of a statistic. */
        AggregationMethod: string;
        /** Name of the statistic column, as originally configured. */
        Name: string;

    }

    export interface StatisticColumnCollection {
        /** Columns for the statistic defining the aggregation method for each column. */
        Columns?: StatisticColumn[];

    }

    export interface StatisticDefinition {
        /** The columns for the statistic defining the aggregation method for each column. */
        Columns?: StatisticColumn[];
        /** Created time, in UTC */
        Created: string;
        /** The entity type that can have this statistic. */
        EntityType?: string;
        /** Last time, in UTC, statistic version was incremented. */
        LastResetTime?: string;
        /** The list of leaderboards that are linked to this statistic definition. */
        LinkedLeaderboardNames?: string[];
        /** Name of the statistic. */
        Name?: string;
        /** Statistic version. */
        Version: number;
        /** The version reset configuration for the leaderboard definition. */
        VersionConfiguration?: VersionConfiguration;

    }

    export interface StatisticDelete {
        /** Name of the statistic, as originally configured. */
        Name: string;

    }

    export interface StatisticUpdate {
        /**
         * Arbitrary metadata to store along side the statistic, will be returned by all Leaderboard APIs. Must be less than 50
         * UTF8 encoded characters.
         */
        Metadata?: string;
        /** Name of the statistic, as originally configured. */
        Name: string;
        /**
         * Statistic scores for the entity. This will be used in accordance with the aggregation method configured for the
         * statistics.The maximum value allowed for each individual score is 9223372036854775807. The minimum value for each
         * individual score is -9223372036854775807The values are formatted as strings to avoid interop issues with client
         * libraries unable to handle 64bit integers.
         */
        Scores?: string[];
        /** Optional field to indicate the version of the statistic to set. When empty defaults to the statistic's current version. */
        Version?: number;

    }

    export interface UnlinkLeaderboardFromStatisticRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The name of the leaderboard definition to unlink. */
        Name: string;
        /** The name of the statistic definition to unlink. */
        StatisticName: string;

    }

    export interface UpdateLeaderboardEntriesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entries to add or update on the leaderboard. */
        Entries?: LeaderboardEntryUpdate[];
        /** The name of the leaderboard. */
        LeaderboardName: string;

    }

    export interface UpdateStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** Collection of statistics to update, maximum 50. */
        Statistics: StatisticUpdate[];

    }

    export interface UpdateStatisticsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** A mapping of statistic name to the columns defined in the corresponding definition. */
        ColumnDetails?: { [key: string]: StatisticColumnCollection };
        /** The entity id and type. */
        Entity?: EntityKey;
        /** Updated entity profile statistics. */
        Statistics?: { [key: string]: EntityStatisticValue };

    }

    export interface VersionConfiguration {
        /** The maximum number of versions of this leaderboard/statistic that can be queried. */
        MaxQueryableVersions: number;
        /**
         * Reset interval that statistics or leaderboards will reset on. When using Manual intervalthe reset can only be increased
         * by calling the Increase version API. When using Hour interval the resetwill occur at the start of the next hour UTC
         * time. When using Day interval the reset will occur at thestart of the next day in UTC time. When using the Week interval
         * the reset will occur at the start ofthe next Monday in UTC time. When using Month interval the reset will occur at the
         * start of the nextmonth in UTC time.
         */
        ResetInterval: string;

    }


}
