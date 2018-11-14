/// <reference path="Playfab.d.ts" />

declare module PlayFabMultiplayerModule {
    export interface IPlayFabMultiplayer {
        ForgetAllCredentials(): void;

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
         * Creates a remote user to log on to a VM for a multiplayer server build.
         * https://api.playfab.com/Documentation/Multiplayer/method/CreateRemoteUser
         */
        CreateRemoteUser(request: PlayFabMultiplayerModels.CreateRemoteUserRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateRemoteUserResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
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
         * Gets multiplayer server session details for a build.
         * https://api.playfab.com/Documentation/Multiplayer/method/GetMultiplayerServerDetails
         */
        GetMultiplayerServerDetails(request: PlayFabMultiplayerModels.GetMultiplayerServerDetailsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMultiplayerServerDetailsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
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
        /** The asset's file name. This must be a filename with the .zip, .tar, or .tar.gz extension. */
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
        | "WestUs";

    type AzureVmSize = "Standard_D1_v2"
        | "Standard_D2_v2"
        | "Standard_D3_v2"
        | "Standard_D4_v2"
        | "Standard_D5_v2"
        | "Standard_A1_v2"
        | "Standard_A2_v2"
        | "Standard_A4_v2"
        | "Standard_A8_v2"
        | "Standard_A1"
        | "Standard_A2"
        | "Standard_A3"
        | "Standard_A4";

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.BuildRegion */
    export interface BuildRegion {
        /** The maximum number of multiplayer servers for the region. */
        MaxServers: number;
        /** The build region. */
        Region?: string;
        /** The number of standby multiplayer servers for the region. */
        StandbyServers: number;
        /** The status of multiplayer servers in the build region. */
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
        /** Metadata to tag the build. */
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
        /** Metadata to tag the build. */
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

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.DeleteAssetRequest */
    export interface DeleteAssetRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The filename of the asset to delete. This must be a filename with the .zip, .tar, or .tar.gz extension. */
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
        /** The asset's file name to get the upload URL for. This must be a filename with the .zip, .tar, or .tar.gz extension. */
        FileName: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.GetAssetUploadUrlResponse */
    export interface GetAssetUploadUrlResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The asset's upload URL. */
        AssetUploadUrl?: string;
        /**
         * The asset's file name to get the upload URL for. This must be a filename will be a file with the .zip, .tar, or .tar.gz
         * extension.
         */
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
        /** The metadata of the build. */
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

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.RequestMultiplayerServerRequest */
    export interface RequestMultiplayerServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer server to request. */
        BuildId: string;
        /** The preferred regions to request a multiplayer server from. */
        PreferredRegions: string[];
        /**
         * Data encoded as a string that is passed to the game server when requested. This can be used to share a cryptographic
         * secret for servers to authenticate clients or to communicate information such as game mode or map through the request
         * flow.
         */
        SessionCookie?: string;
        /** A guid string session ID created track the multiplayer server session over its life. */
        SessionId: string;

    }

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.RequestMultiplayerServerResponse */
    export interface RequestMultiplayerServerResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The connected players in the multiplayer server. */
        ConnectedPlayers?: ConnectedPlayer[];
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

    /** https://api.playfab.com/Documentation/Multiplayer/datatype/PlayFab.Multiplayer.Models/PlayFab.Multiplayer.Models.ShutdownMultiplayerServerRequest */
    export interface ShutdownMultiplayerServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer server to delete. */
        BuildId: string;
        /** The region of the multiplayer server to shut down. */
        Region: string;
        /** A guid string session ID of the multiplayer server to shut down. */
        SessionId: string;

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
