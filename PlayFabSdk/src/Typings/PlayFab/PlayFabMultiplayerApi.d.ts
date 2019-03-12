/// <reference path="Playfab.d.ts" />

declare module PlayFabMultiplayerModule {
    export interface IPlayFabMultiplayer {
        ForgetAllCredentials(): void;

        /**
         * Cancel all active tickets the player is a member of in a given queue.
         * https://api.playfab.com/Documentation/Multiplayer/method/CancelAllMatchmakingTicketsForPlayer
         */
        CancelAllMatchmakingTicketsForPlayer(request: PlayFabMultiplayerModels.CancelAllMatchmakingTicketsForPlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CancelAllMatchmakingTicketsForPlayerResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Cancel a matchmaking ticket.
         * https://api.playfab.com/Documentation/Multiplayer/method/CancelMatchmakingTicket
         */
        CancelMatchmakingTicket(request: PlayFabMultiplayerModels.CancelMatchmakingTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CancelMatchmakingTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a multiplayer server build with a custom container.
         * https://api.playfab.com/Documentation/Multiplayer/method/CreateBuildWithCustomContainer
         */
        CreateBuildWithCustomContainer(request: PlayFabMultiplayerModels.CreateBuildWithCustomContainerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateBuildWithCustomContainerResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a multiplayer server build with a managed container.
         * https://api.playfab.com/Documentation/Multiplayer/method/CreateBuildWithManagedContainer
         */
        CreateBuildWithManagedContainer(request: PlayFabMultiplayerModels.CreateBuildWithManagedContainerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateBuildWithManagedContainerResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Create a matchmaking ticket as a client.
         * https://api.playfab.com/Documentation/Multiplayer/method/CreateMatchmakingTicket
         */
        CreateMatchmakingTicket(request: PlayFabMultiplayerModels.CreateMatchmakingTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateMatchmakingTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a remote user to log on to a VM for a multiplayer server build.
         * https://api.playfab.com/Documentation/Multiplayer/method/CreateRemoteUser
         */
        CreateRemoteUser(request: PlayFabMultiplayerModels.CreateRemoteUserRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateRemoteUserResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Create a matchmaking ticket as a server. The matchmaking service automatically starts matching the ticket against other
         * matchmaking tickets.
         * https://api.playfab.com/Documentation/Multiplayer/method/CreateServerMatchmakingTicket
         */
        CreateServerMatchmakingTicket(request: PlayFabMultiplayerModels.CreateServerMatchmakingTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateMatchmakingTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes a multiplayer server game asset for a title.
         * https://api.playfab.com/Documentation/Multiplayer/method/DeleteAsset
         */
        DeleteAsset(request: PlayFabMultiplayerModels.DeleteAssetRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes a multiplayer server build.
         * https://api.playfab.com/Documentation/Multiplayer/method/DeleteBuild
         */
        DeleteBuild(request: PlayFabMultiplayerModels.DeleteBuildRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes a multiplayer server game certificate.
         * https://api.playfab.com/Documentation/Multiplayer/method/DeleteCertificate
         */
        DeleteCertificate(request: PlayFabMultiplayerModels.DeleteCertificateRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes a remote user to log on to a VM for a multiplayer server build.
         * https://api.playfab.com/Documentation/Multiplayer/method/DeleteRemoteUser
         */
        DeleteRemoteUser(request: PlayFabMultiplayerModels.DeleteRemoteUserRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Enables the multiplayer server feature for a title.
         * https://api.playfab.com/Documentation/Multiplayer/method/EnableMultiplayerServersForTitle
         */
        EnableMultiplayerServersForTitle(request: PlayFabMultiplayerModels.EnableMultiplayerServersForTitleRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EnableMultiplayerServersForTitleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the URL to upload assets to.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetAssetUploadUrl
         */
        GetAssetUploadUrl(request: PlayFabMultiplayerModels.GetAssetUploadUrlRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetAssetUploadUrlResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets a multiplayer server build.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetBuild
         */
        GetBuild(request: PlayFabMultiplayerModels.GetBuildRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetBuildResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the credentials to the container registry.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetContainerRegistryCredentials
         */
        GetContainerRegistryCredentials(request: PlayFabMultiplayerModels.GetContainerRegistryCredentialsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetContainerRegistryCredentialsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a match.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetMatch
         */
        GetMatch(request: PlayFabMultiplayerModels.GetMatchRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMatchResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a matchmaking queue configuration.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetMatchmakingQueue
         */
        GetMatchmakingQueue(request: PlayFabMultiplayerModels.GetMatchmakingQueueRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMatchmakingQueueResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get a matchmaking ticket by ticket Id.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetMatchmakingTicket
         */
        GetMatchmakingTicket(request: PlayFabMultiplayerModels.GetMatchmakingTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMatchmakingTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets multiplayer server session details for a build.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetMultiplayerServerDetails
         */
        GetMultiplayerServerDetails(request: PlayFabMultiplayerModels.GetMultiplayerServerDetailsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMultiplayerServerDetailsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get the statistics for a queue.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetQueueStatistics
         */
        GetQueueStatistics(request: PlayFabMultiplayerModels.GetQueueStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetQueueStatisticsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets a remote login endpoint to a VM that is hosting a multiplayer server build.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetRemoteLoginEndpoint
         */
        GetRemoteLoginEndpoint(request: PlayFabMultiplayerModels.GetRemoteLoginEndpointRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetRemoteLoginEndpointResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the status of whether a title is enabled for the multiplayer server feature.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetTitleEnabledForMultiplayerServersStatus
         */
        GetTitleEnabledForMultiplayerServersStatus(request: PlayFabMultiplayerModels.GetTitleEnabledForMultiplayerServersStatusRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetTitleEnabledForMultiplayerServersStatusResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Join a matchmaking ticket.
         * https://api.playfab.com/Documentation/Multiplayer/method/JoinMatchmakingTicket
         */
        JoinMatchmakingTicket(request: PlayFabMultiplayerModels.JoinMatchmakingTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.JoinMatchmakingTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists archived multiplayer server sessions for a build.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListArchivedMultiplayerServers
         */
        ListArchivedMultiplayerServers(request: PlayFabMultiplayerModels.ListMultiplayerServersRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMultiplayerServersResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists multiplayer server game assets for a title.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListAssetSummaries
         */
        ListAssetSummaries(request: PlayFabMultiplayerModels.ListAssetSummariesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListAssetSummariesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists summarized details of all multiplayer server builds for a title.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListBuildSummaries
         */
        ListBuildSummaries(request: PlayFabMultiplayerModels.ListBuildSummariesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListBuildSummariesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists multiplayer server game certificates for a title.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListCertificateSummaries
         */
        ListCertificateSummaries(request: PlayFabMultiplayerModels.ListCertificateSummariesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListCertificateSummariesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists custom container images for a title.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListContainerImages
         */
        ListContainerImages(request: PlayFabMultiplayerModels.ListContainerImagesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListContainerImagesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists the tags for a custom container image.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListContainerImageTags
         */
        ListContainerImageTags(request: PlayFabMultiplayerModels.ListContainerImageTagsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListContainerImageTagsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * List all matchmaking queue configs.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListMatchmakingQueues
         */
        ListMatchmakingQueues(request: PlayFabMultiplayerModels.ListMatchmakingQueuesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMatchmakingQueuesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * List all matchmaking ticket Ids the user is a member of.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListMatchmakingTicketsForPlayer
         */
        ListMatchmakingTicketsForPlayer(request: PlayFabMultiplayerModels.ListMatchmakingTicketsForPlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMatchmakingTicketsForPlayerResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists multiplayer server sessions for a build.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListMultiplayerServers
         */
        ListMultiplayerServers(request: PlayFabMultiplayerModels.ListMultiplayerServersRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMultiplayerServersResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists quality of service servers.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListQosServers
         */
        ListQosServers(request: PlayFabMultiplayerModels.ListQosServersRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListQosServersResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists virtual machines for a title.
         * https://api.playfab.com/Documentation/Multiplayer/method/ListVirtualMachineSummaries
         */
        ListVirtualMachineSummaries(request: PlayFabMultiplayerModels.ListVirtualMachineSummariesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListVirtualMachineSummariesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Remove a matchmaking queue config.
         * https://api.playfab.com/Documentation/Multiplayer/method/RemoveMatchmakingQueue
         */
        RemoveMatchmakingQueue(request: PlayFabMultiplayerModels.RemoveMatchmakingQueueRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RemoveMatchmakingQueueResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Request a multiplayer server session. Accepts tokens for title and if game client accesss is enabled, allows game client
         * to request a server with player entity token.
         * https://api.playfab.com/Documentation/Multiplayer/method/RequestMultiplayerServer
         */
        RequestMultiplayerServer(request: PlayFabMultiplayerModels.RequestMultiplayerServerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RequestMultiplayerServerResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Rolls over the credentials to the container registry.
         * https://api.playfab.com/Documentation/Multiplayer/method/RolloverContainerRegistryCredentials
         */
        RolloverContainerRegistryCredentials(request: PlayFabMultiplayerModels.RolloverContainerRegistryCredentialsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RolloverContainerRegistryCredentialsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Create or update a matchmaking queue configuration.
         * https://api.playfab.com/Documentation/Multiplayer/method/SetMatchmakingQueue
         */
        SetMatchmakingQueue(request: PlayFabMultiplayerModels.SetMatchmakingQueueRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.SetMatchmakingQueueResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Shuts down a multiplayer server session.
         * https://api.playfab.com/Documentation/Multiplayer/method/ShutdownMultiplayerServer
         */
        ShutdownMultiplayerServer(request: PlayFabMultiplayerModels.ShutdownMultiplayerServerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates a multiplayer server build's regions.
         * https://api.playfab.com/Documentation/Multiplayer/method/UpdateBuildRegions
         */
        UpdateBuildRegions(request: PlayFabMultiplayerModels.UpdateBuildRegionsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Uploads a multiplayer server game certificate.
         * https://api.playfab.com/Documentation/Multiplayer/method/UploadCertificate
         */
        UploadCertificate(request: PlayFabMultiplayerModels.UploadCertificateRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabMultiplayerModels {
    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.AssetReference */
    export interface AssetReference {
        /** The asset's file name. This is a filename with the .zip, .tar, or .tar.gz extension. */
        FileName?: string;
        /** The asset's mount path. */
        MountPath?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.AssetReferenceParams */
    export interface AssetReferenceParams {
        /** The asset's file name. */
        FileName: string;
        /** The asset's mount path. */
        MountPath: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.AssetSummary */
    export interface AssetSummary {
        /** The asset's file name. This is a filename with the .zip, .tar, or .tar.gz extension. */
        FileName?: string;
        /** The metadata associated with the asset. */
        Metadata?: { [key: string]: string | null };

    }

    type AzureRegion = "AustraliaEast"
        | "AustraliaSoutheast"
        | "BrazilSouth"
        | "CentralUs"
        | "EastAsia"
        | "EastUs"
        | "EastUs2"
        | "JapanEast"
        | "JapanWest"
        | "NorthCentralUs"
        | "NorthEurope"
        | "SouthCentralUs"
        | "SoutheastAsia"
        | "WestEurope"
        | "WestUs"
        | "ChinaEast2"
        | "ChinaNorth2";

    type AzureVmSize = "Standard_D1_v2"
        | "Standard_D2_v2"
        | "Standard_D3_v2"
        | "Standard_D4_v2"
        | "Standard_D5_v2"
        | "Standard_A1_v2"
        | "Standard_A2_v2"
        | "Standard_A4_v2"
        | "Standard_A8_v2"
        | "Standard_F1"
        | "Standard_F2"
        | "Standard_F4"
        | "Standard_F8"
        | "Standard_F16"
        | "Standard_F2s_v2"
        | "Standard_F4s_v2"
        | "Standard_F8s_v2"
        | "Standard_F16s_v2"
        | "Standard_A1"
        | "Standard_A2"
        | "Standard_A3"
        | "Standard_A4";

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.BuildRegion */
    export interface BuildRegion {
        /** The current multiplayer server stats for the region. */
        CurrentServerStats?: CurrentServerStats;
        /** The maximum number of multiplayer servers for the region. */
        MaxServers: number;
        /** The build region. */
        Region?: string;
        /** The number of standby multiplayer servers for the region. */
        StandbyServers: number;
        /**
         * The status of multiplayer servers in the build region. Valid values are - Unknown, Initialized, Deploying, Deployed,
         * Unhealthy.
         */
        Status?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.BuildRegionParams */
    export interface BuildRegionParams {
        /** The maximum number of multiplayer servers for the region. */
        MaxServers: number;
        /** The build region. */
        Region: string;
        /** The number of standby multiplayer servers for the region. */
        StandbyServers: number;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.BuildSummary */
    export interface BuildSummary {
        /** The guid string build ID of the build. */
        BuildId?: string;
        /** The build name. */
        BuildName?: string;
        /** The time the build was created in UTC. */
        CreationTime?: string;
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null };

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CancelAllMatchmakingTicketsForPlayerRequest */
    export interface CancelAllMatchmakingTicketsForPlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity key of the player whose tickets should be canceled. */
        Entity?: EntityKey;
        /** The Id of the queue from which a player's tickets should be canceled. */
        QueueName: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CancelAllMatchmakingTicketsForPlayerResult */
    export interface CancelAllMatchmakingTicketsForPlayerResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    type CancellationReason = "Requested"
        | "Internal"
        | "Timeout";

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CancelMatchmakingTicketRequest */
    export interface CancelMatchmakingTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The Id of the queue to join. */
        QueueName: string;
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CancelMatchmakingTicketResult */
    export interface CancelMatchmakingTicketResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.Certificate */
    export interface Certificate {
        /** Base64 encoded string contents of the certificate. */
        Base64EncodedValue: string;
        /** A name for the certificate. This is used to reference certificates in build configurations. */
        Name: string;
        /**
         * If required for your PFX certificate, use this field to provide a password that will be used to install the certificate
         * on the container.
         */
        Password?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CertificateSummary */
    export interface CertificateSummary {
        /** The name of the certificate. */
        Name?: string;
        /** The thumbprint for the certificate. */
        Thumbprint?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ConnectedPlayer */
    export interface ConnectedPlayer {
        /** The player ID of the player connected to the multiplayer server. */
        PlayerId?: string;

    }

    type ContainerFlavor = "ManagedWindowsServerCore"
        | "CustomLinux"
        | "ManagedWindowsServerCorePreview";

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ContainerImageReference */
    export interface ContainerImageReference {
        /** The container image name. */
        ImageName: string;
        /** The container tag. */
        Tag?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CreateBuildWithCustomContainerRequest */
    export interface CreateBuildWithCustomContainerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The build name. */
        BuildName: string;
        /** The flavor of container to create a build from. */
        ContainerFlavor?: string;
        /** The name of the container repository. */
        ContainerRepositoryName: string;
        /** The container command to run when the multiplayer server has been allocated, including any arguments. */
        ContainerRunCommand?: string;
        /** The tag for the container. */
        ContainerTag?: string;
        /** The list of game assets related to the build. */
        GameAssetReferences?: AssetReferenceParams[];
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReferenceParams[];
        /**
         * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
         * Game Server SDK (GSDK).
         */
        Metadata?: { [key: string]: string | null };
        /** The number of multiplayer servers to host on a single VM. */
        MultiplayerServerCountPerVm: number;
        /** The ports to map the build on. */
        Ports: Port[];
        /** The region configurations for the build. */
        RegionConfigurations: BuildRegionParams[];
        /** The VM size to create the build on. */
        VmSize?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CreateBuildWithCustomContainerResponse */
    export interface CreateBuildWithCustomContainerResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The guid string build ID. Must be unique for every build. */
        BuildId?: string;
        /** The build name. */
        BuildName?: string;
        /** The flavor of container of the build. */
        ContainerFlavor?: string;
        /** The container command to run when the multiplayer server has been allocated, including any arguments. */
        ContainerRunCommand?: string;
        /** The time the build was created in UTC. */
        CreationTime?: string;
        /** The custom game container image reference information. */
        CustomGameContainerImage?: ContainerImageReference;
        /** The game assets for the build. */
        GameAssetReferences?: AssetReference[];
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReference[];
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null };
        /** The number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm: number;
        /** The ports the build is mapped on. */
        Ports?: Port[];
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[];
        /** The VM size the build was created on. */
        VmSize?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CreateBuildWithManagedContainerRequest */
    export interface CreateBuildWithManagedContainerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The build name. */
        BuildName: string;
        /** The flavor of container to create a build from. */
        ContainerFlavor?: string;
        /** The list of game assets related to the build. */
        GameAssetReferences: AssetReferenceParams[];
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReferenceParams[];
        /**
         * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
         * Game Server SDK (GSDK).
         */
        Metadata?: { [key: string]: string | null };
        /** The number of multiplayer servers to host on a single VM. */
        MultiplayerServerCountPerVm: number;
        /** The ports to map the build on. */
        Ports: Port[];
        /** The region configurations for the build. */
        RegionConfigurations: BuildRegionParams[];
        /** The command to run when the multiplayer server is started, including any arguments. */
        StartMultiplayerServerCommand: string;
        /** The VM size to create the build on. */
        VmSize?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CreateBuildWithManagedContainerResponse */
    export interface CreateBuildWithManagedContainerResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The guid string build ID. Must be unique for every build. */
        BuildId?: string;
        /** The build name. */
        BuildName?: string;
        /** The flavor of container of the build. */
        ContainerFlavor?: string;
        /** The time the build was created in UTC. */
        CreationTime?: string;
        /** The game assets for the build. */
        GameAssetReferences?: AssetReference[];
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReference[];
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null };
        /** The number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm: number;
        /** The ports the build is mapped on. */
        Ports?: Port[];
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[];
        /** The command to run when the multiplayer server has been allocated, including any arguments. */
        StartMultiplayerServerCommand?: string;
        /** The VM size the build was created on. */
        VmSize?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CreateMatchmakingTicketRequest */
    export interface CreateMatchmakingTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The User who created this ticket. */
        Creator: MatchmakingPlayer;
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number;
        /** A list of Entity Keys of other users to match with. */
        MembersToMatchWith?: EntityKey[];
        /** The Id of a match queue. */
        QueueName: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CreateMatchmakingTicketResult */
    export interface CreateMatchmakingTicketResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CreateRemoteUserRequest */
    export interface CreateRemoteUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of to create the remote user for. */
        BuildId: string;
        /** The expiration time for the remote user created. Defaults to expiring in one day if not specified. */
        ExpirationTime?: string;
        /** The region of virtual machine to create the remote user for. */
        Region: string;
        /** The username to create the remote user with. */
        Username: string;
        /** The virtual machine ID the multiplayer server is located on. */
        VmId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CreateRemoteUserResponse */
    export interface CreateRemoteUserResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The expiration time for the remote user created. */
        ExpirationTime?: string;
        /** The generated password for the remote user that was created. */
        Password?: string;
        /** The username for the remote user that was created. */
        Username?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CreateServerMatchmakingTicketRequest */
    export interface CreateServerMatchmakingTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number;
        /** The users who will be part of this ticket. */
        Members: MatchmakingPlayer[];
        /** The Id of a match queue. */
        QueueName: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.CurrentServerStats */
    export interface CurrentServerStats {
        /** The number of active multiplayer servers. */
        Active: number;
        /** The number of multiplayer servers still downloading game resources (such as assets). */
        Propping: number;
        /** The number of standingby multiplayer servers. */
        StandingBy: number;
        /** The total number of multiplayer servers. */
        Total: number;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.DeleteAssetRequest */
    export interface DeleteAssetRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The filename of the asset to delete. */
        FileName: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.DeleteBuildRequest */
    export interface DeleteBuildRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the build to delete. */
        BuildId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.DeleteCertificateRequest */
    export interface DeleteCertificateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The name of the certificate. */
        Name: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.DeleteRemoteUserRequest */
    export interface DeleteRemoteUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer server where the remote user is to delete. */
        BuildId: string;
        /** The region of the multiplayer server where the remote user is to delete. */
        Region: string;
        /** The username of the remote user to delete. */
        Username: string;
        /** The virtual machine ID the multiplayer server is located on. */
        VmId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.EmptyResponse */
    export interface EmptyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.EnableMultiplayerServersForTitleRequest */
    export interface EnableMultiplayerServersForTitleRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.EnableMultiplayerServersForTitleResponse */
    export interface EnableMultiplayerServersForTitleResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The enabled status for the multiplayer server features for the title. */
        Status?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.EntityKey */
    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GameCertificateReference */
    export interface GameCertificateReference {
        /**
         * An alias for the game certificate. The game server will reference this alias via GSDK config to retrieve the game
         * certificate. This alias is used as an identifier in game server code to allow a new certificate with different Name
         * field to be uploaded without the need to change any game server code to reference the new Name.
         */
        GsdkAlias?: string;
        /**
         * The name of the game certificate. This name should match the name of a certificate that was previously uploaded to this
         * title.
         */
        Name?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GameCertificateReferenceParams */
    export interface GameCertificateReferenceParams {
        /**
         * An alias for the game certificate. The game server will reference this alias via GSDK config to retrieve the game
         * certificate. This alias is used as an identifier in game server code to allow a new certificate with different Name
         * field to be uploaded without the need to change any game server code to reference the new Name.
         */
        GsdkAlias: string;
        /**
         * The name of the game certificate. This name should match the name of a certificate that was previously uploaded to this
         * title.
         */
        Name: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetAssetUploadUrlRequest */
    export interface GetAssetUploadUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The asset's file name to get the upload URL for. */
        FileName: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetAssetUploadUrlResponse */
    export interface GetAssetUploadUrlResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The asset's upload URL. */
        AssetUploadUrl?: string;
        /** The asset's file name to get the upload URL for. */
        FileName?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetBuildRequest */
    export interface GetBuildRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the build to get. */
        BuildId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetBuildResponse */
    export interface GetBuildResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The guid string build ID of the build. */
        BuildId?: string;
        /** The build name. */
        BuildName?: string;
        /** The current build status. Valid values are - Deploying, Deployed, DeletingRegion, Unhealthy. */
        BuildStatus?: string;
        /** The flavor of container of he build. */
        ContainerFlavor?: string;
        /**
         * The container command to run when the multiplayer server has been allocated, including any arguments. This only applies
         * to custom builds. If the build is a managed build, this field will be null.
         */
        ContainerRunCommand?: string;
        /** The time the build was created in UTC. */
        CreationTime?: string;
        /** The custom game container image for a custom build. */
        CustomGameContainerImage?: ContainerImageReference;
        /** The game assets for the build. */
        GameAssetReferences?: AssetReference[];
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReference[];
        /**
         * Metadata of the build. The keys are case insensitive. The build metadata is made available to the server through Game
         * Server SDK (GSDK).
         */
        Metadata?: { [key: string]: string | null };
        /** The number of multiplayer servers to hosted on a single VM of the build. */
        MultiplayerServerCountPerVm: number;
        /** The ports the build is mapped on. */
        Ports?: Port[];
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[];
        /**
         * The command to run when the multiplayer server has been allocated, including any arguments. This only applies to managed
         * builds. If the build is a custom build, this field will be null.
         */
        StartMultiplayerServerCommand?: string;
        /** The VM size the build was created on. */
        VmSize?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetContainerRegistryCredentialsRequest */
    export interface GetContainerRegistryCredentialsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetContainerRegistryCredentialsResponse */
    export interface GetContainerRegistryCredentialsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The url of the container registry. */
        DnsName?: string;
        /** The password for accessing the container registry. */
        Password?: string;
        /** The username for accessing the container registry. */
        Username?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetMatchmakingQueueRequest */
    export interface GetMatchmakingQueueRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The Id of the matchmaking queue to retrieve. */
        QueueName?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetMatchmakingQueueResult */
    export interface GetMatchmakingQueueResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The matchmaking queue config. */
        MatchmakingQueue?: MatchmakingQueueConfig;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetMatchmakingTicketRequest */
    export interface GetMatchmakingTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
         * object.
         */
        EscapeObject: boolean;
        /** The Id of the queue to find a match for. */
        QueueName: string;
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetMatchmakingTicketResult */
    export interface GetMatchmakingTicketResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state. */
        CancellationReason?: string;
        /** The server date and time at which ticket was created. */
        Created: string;
        /** The Creator's entity key. */
        Creator: EntityKey;
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number;
        /** The Id of a match. */
        MatchId?: string;
        /** A list of Users that have joined this ticket. */
        Members: MatchmakingPlayer[];
        /** A list of PlayFab Ids of Users to match with. */
        MembersToMatchWith?: EntityKey[];
        /** The Id of a match queue. */
        QueueName: string;
        /**
         * The current ticket status. Possible values are: WaitingForPlayers, WaitingForMatch, WaitingForServer, Canceled and
         * Matched.
         */
        Status: string;
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetMatchRequest */
    export interface GetMatchRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
         * object.
         */
        EscapeObject: boolean;
        /** The Id of a match. */
        MatchId: string;
        /** The Id of the queue to join. */
        QueueName: string;
        /** Determines whether the matchmaking attributes for each user should be returned in the response for match request. */
        ReturnMemberAttributes: boolean;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetMatchResult */
    export interface GetMatchResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Id of a match. */
        MatchId: string;
        /** A list of Users that are matched together, along with their team assignments. */
        Members: MatchmakingPlayerWithTeamAssignment[];
        /**
         * A list of regions that the match could be played in sorted by preference. This value is only set if the queue has a
         * region selection rule.
         */
        RegionPreferences?: string[];
        /** The details of the server that the match has been allocated to. */
        ServerDetails?: ServerDetails;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetMultiplayerServerDetailsRequest */
    export interface GetMultiplayerServerDetailsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer server to get details for. */
        BuildId: string;
        /** The region the multiplayer server is located in to get details for. */
        Region: string;
        /**
         * The title generated guid string session ID of the multiplayer server to get details for. This is to keep track of
         * multiplayer server sessions.
         */
        SessionId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetMultiplayerServerDetailsResponse */
    export interface GetMultiplayerServerDetailsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The connected players in the multiplayer server. */
        ConnectedPlayers?: ConnectedPlayer[];
        /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
        FQDN?: string;
        /** The IPv4 address of the virtual machine that is hosting this multiplayer server. */
        IPV4Address?: string;
        /** The time (UTC) at which a change in the multiplayer server state was observed. */
        LastStateTransitionTime?: string;
        /** The ports the multiplayer server uses. */
        Ports?: Port[];
        /** The region the multiplayer server is located in. */
        Region?: string;
        /** The string server ID of the multiplayer server generated by PlayFab. */
        ServerId?: string;
        /** The guid string session ID of the multiplayer server. */
        SessionId?: string;
        /** The state of the multiplayer server. */
        State?: string;
        /** The virtual machine ID that the multiplayer server is located on. */
        VmId?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetQueueStatisticsRequest */
    export interface GetQueueStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The name of the queue. */
        QueueName: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetQueueStatisticsResult */
    export interface GetQueueStatisticsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The current number of players in the matchmaking queue, who are waiting to be matched. */
        NumberOfPlayersMatching?: number;
        /** Statistics representing the time (in seconds) it takes for tickets to find a match. */
        TimeToMatchStatisticsInSeconds?: Statistics;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetRemoteLoginEndpointRequest */
    export interface GetRemoteLoginEndpointRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer server to get remote login information for. */
        BuildId: string;
        /** The region of the multiplayer server to get remote login information for. */
        Region: string;
        /** The virtual machine ID the multiplayer server is located on. */
        VmId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetRemoteLoginEndpointResponse */
    export interface GetRemoteLoginEndpointResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The remote login IPV4 address of multiplayer server. */
        IPV4Address?: string;
        /** The remote login port of multiplayer server. */
        Port: number;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetTitleEnabledForMultiplayerServersStatusRequest */
    export interface GetTitleEnabledForMultiplayerServersStatusRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetTitleEnabledForMultiplayerServersStatusResponse */
    export interface GetTitleEnabledForMultiplayerServersStatusResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The enabled status for the multiplayer server features for the title. */
        Status?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.JoinMatchmakingTicketRequest */
    export interface JoinMatchmakingTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The User who wants to join the ticket. Their Id must be listed in PlayFabIdsToMatchWith. */
        Member: MatchmakingPlayer;
        /** The Id of the queue to join. */
        QueueName: string;
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.JoinMatchmakingTicketResult */
    export interface JoinMatchmakingTicketResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListAssetSummariesRequest */
    export interface ListAssetSummariesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListAssetSummariesResponse */
    export interface ListAssetSummariesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of asset summaries. */
        AssetSummaries?: AssetSummary[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListBuildSummariesRequest */
    export interface ListBuildSummariesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListBuildSummariesResponse */
    export interface ListBuildSummariesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of build summaries for a title. */
        BuildSummaries?: BuildSummary[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListCertificateSummariesRequest */
    export interface ListCertificateSummariesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListCertificateSummariesResponse */
    export interface ListCertificateSummariesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of game certificates. */
        CertificateSummaries?: CertificateSummary[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListContainerImagesRequest */
    export interface ListContainerImagesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListContainerImagesResponse */
    export interface ListContainerImagesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of container images. */
        Images?: string[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListContainerImageTagsRequest */
    export interface ListContainerImageTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The container images we want to list tags for. */
        ImageName?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListContainerImageTagsResponse */
    export interface ListContainerImageTagsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of tags for a particular container image. */
        Tags?: string[];

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListMatchmakingQueuesRequest */
    export interface ListMatchmakingQueuesRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListMatchmakingQueuesResult */
    export interface ListMatchmakingQueuesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of matchmaking queue configs for this title. */
        MatchMakingQueues?: MatchmakingQueueConfig[];

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListMatchmakingTicketsForPlayerRequest */
    export interface ListMatchmakingTicketsForPlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity key for which to find the ticket Ids. */
        Entity?: EntityKey;
        /** The Id of the queue to find a match for. */
        QueueName: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListMatchmakingTicketsForPlayerResult */
    export interface ListMatchmakingTicketsForPlayerResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of ticket Ids the user is a member of. */
        TicketIds: string[];

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListMultiplayerServersRequest */
    export interface ListMultiplayerServersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer servers to list. */
        BuildId: string;
        /** The page size for the request. */
        PageSize?: number;
        /** The region the multiplayer servers to list. */
        Region: string;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListMultiplayerServersResponse */
    export interface ListMultiplayerServersResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of multiplayer server summary details. */
        MultiplayerServerSummaries?: MultiplayerServerSummary[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListQosServersRequest */
    export interface ListQosServersRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListQosServersResponse */
    export interface ListQosServersResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The page size on the response. */
        PageSize: number;
        /** The list of QoS servers. */
        QosServers?: QosServer[];
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListVirtualMachineSummariesRequest */
    export interface ListVirtualMachineSummariesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the virtual machines to list. */
        BuildId: string;
        /** The page size for the request. */
        PageSize?: number;
        /** The region of the virtual machines to list. */
        Region: string;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ListVirtualMachineSummariesResponse */
    export interface ListVirtualMachineSummariesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;
        /** The list of virtual machine summaries. */
        VirtualMachines?: VirtualMachineSummary[];

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.MatchmakingPlayer */
    export interface MatchmakingPlayer {
        /** The user's attributes custom to the title. */
        Attributes?: MatchmakingPlayerAttributes;
        /** The entity key of the matchmaking user. */
        Entity: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.MatchmakingPlayerAttributes */
    export interface MatchmakingPlayerAttributes {
        /** A data object representing a user's attributes. */
        DataObject?: any;
        /** An escaped data object representing a user's attributes. */
        EscapedDataObject?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.MatchmakingPlayerWithTeamAssignment */
    export interface MatchmakingPlayerWithTeamAssignment {
        /**
         * The user's attributes custom to the title. These attributes will be null unless the request has ReturnMemberAttributes
         * flag set to true.
         */
        Attributes?: MatchmakingPlayerAttributes;
        /** The entity key of the matchmaking user. */
        Entity: EntityKey;
        /** The Id of the team the User has been assigned to by matchmaking. */
        TeamId?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.MatchmakingQueueConfig */
    export interface MatchmakingQueueConfig {
        /** This is the buildId that will be used to allocate the multiplayer server for the match. */
        BuildId?: string;
        /** Maximum number of players in a match. */
        MaxMatchSize: number;
        /** Minimum number of players in a match. */
        MinMatchSize: number;
        /** Unique identifier for a Queue. Chosen by the developer. */
        Name: string;
        /** List of rules used to find an optimal match. */
        Rules?: MatchmakingQueueRule[];
        /** Boolean flag to enable server allocation for the queue. */
        ServerAllocationEnabled: boolean;
        /** Controls which statistics are visible to players. */
        StatisticsVisibilityToPlayers?: StatisticsVisibilityToPlayers;
        /** The team configuration for a match. This may be null if there are no teams. */
        Teams?: MatchmakingQueueTeam[];

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.MatchmakingQueueRule */
    export interface MatchmakingQueueRule {
        /** Friendly name chosen by developer. */
        Name: string;
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number;
        /** Type of rule being described. */
        Type: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.MatchmakingQueueTeam */
    export interface MatchmakingQueueTeam {
        /** The maximum number of players required for the team. */
        MaxTeamSize: number;
        /** The minimum number of players required for the team. */
        MinTeamSize: number;
        /** A name to identify the team. This is case insensitive. */
        Name: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.MultiplayerServerSummary */
    export interface MultiplayerServerSummary {
        /** The connected players in the multiplayer server. */
        ConnectedPlayers?: ConnectedPlayer[];
        /** The time (UTC) at which a change in the multiplayer server state was observed. */
        LastStateTransitionTime?: string;
        /** The region the multiplayer server is located in. */
        Region?: string;
        /** The string server ID of the multiplayer server generated by PlayFab. */
        ServerId?: string;
        /** The title generated guid string session ID of the multiplayer server. */
        SessionId?: string;
        /** The state of the multiplayer server. */
        State?: string;
        /** The virtual machine ID that the multiplayer server is located on. */
        VmId?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.Port */
    export interface Port {
        /** The name for the port. */
        Name: string;
        /** The number for the port. */
        Num: number;
        /** The protocol for the port. */
        Protocol: string;

    }

    type ProtocolType = "TCP"
        | "UDP";

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.QosServer */
    export interface QosServer {
        /** The region the QoS server is located in. */
        Region?: string;
        /** The QoS server URL. */
        ServerUrl?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.RemoveMatchmakingQueueRequest */
    export interface RemoveMatchmakingQueueRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The Id of the matchmaking queue to remove. */
        QueueName?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.RemoveMatchmakingQueueResult */
    export interface RemoveMatchmakingQueueResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.RequestMultiplayerServerRequest */
    export interface RequestMultiplayerServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer server to request. */
        BuildId: string;
        /**
         * Initial list of players (potentially matchmade) allowed to connect to the game. This list is passed to the game server
         * when requested (via GSDK) and can be used to validate players connecting to it.
         */
        InitialPlayers?: string[];
        /**
         * The preferred regions to request a multiplayer server from. The Multiplayer Service will iterate through the regions in
         * the specified order and allocate a server from the first one that has servers available.
         */
        PreferredRegions: string[];
        /**
         * Data encoded as a string that is passed to the game server when requested. This can be used to to communicate
         * information such as game mode or map through the request flow.
         */
        SessionCookie?: string;
        /** A guid string session ID created track the multiplayer server session over its life. */
        SessionId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.RequestMultiplayerServerResponse */
    export interface RequestMultiplayerServerResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The connected players in the multiplayer server. */
        ConnectedPlayers?: ConnectedPlayer[];
        /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
        FQDN?: string;
        /** The IPv4 address of the virtual machine that is hosting this multiplayer server. */
        IPV4Address?: string;
        /** The time (UTC) at which a change in the multiplayer server state was observed. */
        LastStateTransitionTime?: string;
        /** The ports the multiplayer server uses. */
        Ports?: Port[];
        /** The region the multiplayer server is located in. */
        Region?: string;
        /** The string server ID of the multiplayer server generated by PlayFab. */
        ServerId?: string;
        /** The guid string session ID of the multiplayer server. */
        SessionId?: string;
        /** The state of the multiplayer server. */
        State?: string;
        /** The virtual machine ID that the multiplayer server is located on. */
        VmId?: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.RolloverContainerRegistryCredentialsRequest */
    export interface RolloverContainerRegistryCredentialsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.RolloverContainerRegistryCredentialsResponse */
    export interface RolloverContainerRegistryCredentialsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The url of the container registry. */
        DnsName?: string;
        /** The password for accessing the container registry. */
        Password?: string;
        /** The username for accessing the container registry. */
        Username?: string;

    }

    type RuleType = "Unknown"
        | "DifferenceRule"
        | "StringEqualityRule"
        | "MatchTotalRule"
        | "SetIntersectionRule"
        | "TeamSizeBalanceRule"
        | "RegionSelectionRule"
        | "TeamDifferenceRule"
        | "TeamTicketSizeSimilarityRule";

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ServerDetails */
    export interface ServerDetails {
        /** The IPv4 address of the virtual machine that is hosting this multiplayer server. */
        IPV4Address: string;
        /** The ports the multiplayer server uses. */
        Ports: Port[];

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.SetMatchmakingQueueRequest */
    export interface SetMatchmakingQueueRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The matchmaking queue config. */
        MatchmakingQueue?: MatchmakingQueueConfig;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.SetMatchmakingQueueResult */
    export interface SetMatchmakingQueueResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ShutdownMultiplayerServerRequest */
    export interface ShutdownMultiplayerServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer server to delete. */
        BuildId: string;
        /** The region of the multiplayer server to shut down. */
        Region: string;
        /** A guid string session ID of the multiplayer server to shut down. */
        SessionId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.Statistics */
    export interface Statistics {
        /** The average. */
        Average: number;
        /** The 50th percentile. */
        Percentile50: number;
        /** The 90th percentile. */
        Percentile90: number;
        /** The 99th percentile. */
        Percentile99: number;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.StatisticsVisibilityToPlayers */
    export interface StatisticsVisibilityToPlayers {
        /** Whether to allow players to view the current number of players in the matchmaking queue. */
        ShowNumberOfPlayersMatching: boolean;
        /** Whether to allow players to view statistics representing the time it takes for tickets to find a match. */
        ShowTimeToMatch: boolean;

    }

    type TitleMultiplayerServerEnabledStatus = "Initializing"
        | "Enabled"
        | "Disabled";

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.UpdateBuildRegionsRequest */
    export interface UpdateBuildRegionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string ID of the build we want to update regions for. */
        BuildId: string;
        /** The updated region configuration that should be applied to the specified build. */
        BuildRegions: BuildRegionParams[];

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.UploadCertificateRequest */
    export interface UploadCertificateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The game certificate to upload. */
        GameCertificate: Certificate;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.VirtualMachineSummary */
    export interface VirtualMachineSummary {
        /** The virtual machine health status. */
        HealthStatus?: string;
        /** The virtual machine state. */
        State?: string;
        /** The virtual machine ID. */
        VmId?: string;

    }


}
