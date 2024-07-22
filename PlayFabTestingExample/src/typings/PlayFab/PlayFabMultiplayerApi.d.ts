/// <reference path="Playfab.d.ts" />

declare module PlayFabMultiplayerModule {
    export interface IPlayFabMultiplayer {
        ForgetAllCredentials(): void;

        /**
         * Cancel all active tickets the player is a member of in a given queue.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelallmatchmakingticketsforplayer
         */
        CancelAllMatchmakingTicketsForPlayer(request: PlayFabMultiplayerModels.CancelAllMatchmakingTicketsForPlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CancelAllMatchmakingTicketsForPlayerResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CancelAllMatchmakingTicketsForPlayerResult>>;
        /**
         * Cancel all active backfill tickets the player is a member of in a given queue.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelallserverbackfillticketsforplayer
         */
        CancelAllServerBackfillTicketsForPlayer(request: PlayFabMultiplayerModels.CancelAllServerBackfillTicketsForPlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CancelAllServerBackfillTicketsForPlayerResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CancelAllServerBackfillTicketsForPlayerResult>>;
        /**
         * Cancel a matchmaking ticket.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelmatchmakingticket
         */
        CancelMatchmakingTicket(request: PlayFabMultiplayerModels.CancelMatchmakingTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CancelMatchmakingTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CancelMatchmakingTicketResult>>;
        /**
         * Cancel a server backfill ticket.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/cancelserverbackfillticket
         */
        CancelServerBackfillTicket(request: PlayFabMultiplayerModels.CancelServerBackfillTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CancelServerBackfillTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CancelServerBackfillTicketResult>>;
        /**
         * Creates a multiplayer server build alias.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildalias
         */
        CreateBuildAlias(request: PlayFabMultiplayerModels.CreateBuildAliasRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.BuildAliasDetailsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.BuildAliasDetailsResponse>>;
        /**
         * Creates a multiplayer server build with a custom container.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithcustomcontainer
         */
        CreateBuildWithCustomContainer(request: PlayFabMultiplayerModels.CreateBuildWithCustomContainerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateBuildWithCustomContainerResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateBuildWithCustomContainerResponse>>;
        /**
         * Creates a multiplayer server build with a managed container.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithmanagedcontainer
         */
        CreateBuildWithManagedContainer(request: PlayFabMultiplayerModels.CreateBuildWithManagedContainerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateBuildWithManagedContainerResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateBuildWithManagedContainerResponse>>;
        /**
         * Creates a multiplayer server build with the server running as a process.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createbuildwithprocessbasedserver
         */
        CreateBuildWithProcessBasedServer(request: PlayFabMultiplayerModels.CreateBuildWithProcessBasedServerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateBuildWithProcessBasedServerResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateBuildWithProcessBasedServerResponse>>;
        /**
         * Create a lobby.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/createlobby
         */
        CreateLobby(request: PlayFabMultiplayerModels.CreateLobbyRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateLobbyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateLobbyResult>>;
        /**
         * Create a matchmaking ticket as a client.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/creatematchmakingticket
         */
        CreateMatchmakingTicket(request: PlayFabMultiplayerModels.CreateMatchmakingTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateMatchmakingTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateMatchmakingTicketResult>>;
        /**
         * Creates a remote user to log on to a VM for a multiplayer server build.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createremoteuser
         */
        CreateRemoteUser(request: PlayFabMultiplayerModels.CreateRemoteUserRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateRemoteUserResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateRemoteUserResponse>>;
        /**
         * Create a backfill matchmaking ticket as a server. A backfill ticket represents an ongoing game. The matchmaking service
         * automatically starts matching the backfill ticket against other matchmaking tickets. Backfill tickets cannot match with
         * other backfill tickets.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/createserverbackfillticket
         */
        CreateServerBackfillTicket(request: PlayFabMultiplayerModels.CreateServerBackfillTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateServerBackfillTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateServerBackfillTicketResult>>;
        /**
         * Create a matchmaking ticket as a server. The matchmaking service automatically starts matching the ticket against other
         * matchmaking tickets.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/createservermatchmakingticket
         */
        CreateServerMatchmakingTicket(request: PlayFabMultiplayerModels.CreateServerMatchmakingTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateMatchmakingTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateMatchmakingTicketResult>>;
        /**
         * Creates a request to change a title's multiplayer server quotas.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/createtitlemultiplayerserversquotachange
         */
        CreateTitleMultiplayerServersQuotaChange(request: PlayFabMultiplayerModels.CreateTitleMultiplayerServersQuotaChangeRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateTitleMultiplayerServersQuotaChangeResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.CreateTitleMultiplayerServersQuotaChangeResponse>>;
        /**
         * Deletes a multiplayer server game asset for a title.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deleteasset
         */
        DeleteAsset(request: PlayFabMultiplayerModels.DeleteAssetRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Deletes a multiplayer server build.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuild
         */
        DeleteBuild(request: PlayFabMultiplayerModels.DeleteBuildRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Deletes a multiplayer server build alias.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuildalias
         */
        DeleteBuildAlias(request: PlayFabMultiplayerModels.DeleteBuildAliasRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Removes a multiplayer server build's region.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletebuildregion
         */
        DeleteBuildRegion(request: PlayFabMultiplayerModels.DeleteBuildRegionRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Deletes a multiplayer server game certificate.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletecertificate
         */
        DeleteCertificate(request: PlayFabMultiplayerModels.DeleteCertificateRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Deletes a container image repository.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletecontainerimagerepository
         */
        DeleteContainerImageRepository(request: PlayFabMultiplayerModels.DeleteContainerImageRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Delete a lobby.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/deletelobby
         */
        DeleteLobby(request: PlayFabMultiplayerModels.DeleteLobbyRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>>;
        /**
         * Deletes a remote user to log on to a VM for a multiplayer server build.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deleteremoteuser
         */
        DeleteRemoteUser(request: PlayFabMultiplayerModels.DeleteRemoteUserRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Deletes a multiplayer server game secret.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/deletesecret
         */
        DeleteSecret(request: PlayFabMultiplayerModels.DeleteSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Enables the multiplayer server feature for a title.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/enablemultiplayerserversfortitle
         */
        EnableMultiplayerServersForTitle(request: PlayFabMultiplayerModels.EnableMultiplayerServersForTitleRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EnableMultiplayerServersForTitleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EnableMultiplayerServersForTitleResponse>>;
        /**
         * Find lobbies which match certain criteria, and which friends are in.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/findfriendlobbies
         */
        FindFriendLobbies(request: PlayFabMultiplayerModels.FindFriendLobbiesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.FindFriendLobbiesResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.FindFriendLobbiesResult>>;
        /**
         * Find all the lobbies that match certain criteria.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/findlobbies
         */
        FindLobbies(request: PlayFabMultiplayerModels.FindLobbiesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.FindLobbiesResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.FindLobbiesResult>>;
        /**
         * Gets a URL that can be used to download the specified asset. A sample pre-authenticated url -
         * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getassetdownloadurl
         */
        GetAssetDownloadUrl(request: PlayFabMultiplayerModels.GetAssetDownloadUrlRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetAssetDownloadUrlResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetAssetDownloadUrlResponse>>;
        /**
         * Gets the URL to upload assets to. A sample pre-authenticated url -
         * https://sampleStorageAccount.blob.core.windows.net/gameassets/gameserver.zip?sv=2015-04-05&ss=b&srt=sco&sp=rw&st=startDate&se=endDate&spr=https&sig=sampleSig&api-version=2017-07-29
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getassetuploadurl
         */
        GetAssetUploadUrl(request: PlayFabMultiplayerModels.GetAssetUploadUrlRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetAssetUploadUrlResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetAssetUploadUrlResponse>>;
        /**
         * Gets a multiplayer server build.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getbuild
         */
        GetBuild(request: PlayFabMultiplayerModels.GetBuildRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetBuildResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetBuildResponse>>;
        /**
         * Gets a multiplayer server build alias.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getbuildalias
         */
        GetBuildAlias(request: PlayFabMultiplayerModels.GetBuildAliasRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.BuildAliasDetailsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.BuildAliasDetailsResponse>>;
        /**
         * Gets the credentials to the container registry.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getcontainerregistrycredentials
         */
        GetContainerRegistryCredentials(request: PlayFabMultiplayerModels.GetContainerRegistryCredentialsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetContainerRegistryCredentialsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetContainerRegistryCredentialsResponse>>;
        /**
         * Get a lobby.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/getlobby
         */
        GetLobby(request: PlayFabMultiplayerModels.GetLobbyRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetLobbyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetLobbyResult>>;
        /**
         * Get a match.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getmatch
         */
        GetMatch(request: PlayFabMultiplayerModels.GetMatchRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMatchResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMatchResult>>;
        /**
         * SDK support is limited to C# and Java for this API. Get a matchmaking queue configuration.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/getmatchmakingqueue
         */
        GetMatchmakingQueue(request: PlayFabMultiplayerModels.GetMatchmakingQueueRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMatchmakingQueueResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMatchmakingQueueResult>>;
        /**
         * Get a matchmaking ticket by ticket Id.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getmatchmakingticket
         */
        GetMatchmakingTicket(request: PlayFabMultiplayerModels.GetMatchmakingTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMatchmakingTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMatchmakingTicketResult>>;
        /**
         * Gets multiplayer server session details for a build.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayerserverdetails
         */
        GetMultiplayerServerDetails(request: PlayFabMultiplayerModels.GetMultiplayerServerDetailsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMultiplayerServerDetailsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMultiplayerServerDetailsResponse>>;
        /**
         * Gets multiplayer server logs after a server has terminated.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayerserverlogs
         */
        GetMultiplayerServerLogs(request: PlayFabMultiplayerModels.GetMultiplayerServerLogsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMultiplayerServerLogsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMultiplayerServerLogsResponse>>;
        /**
         * Gets multiplayer server logs after a server has terminated.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getmultiplayersessionlogsbysessionid
         */
        GetMultiplayerSessionLogsBySessionId(request: PlayFabMultiplayerModels.GetMultiplayerSessionLogsBySessionIdRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMultiplayerServerLogsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetMultiplayerServerLogsResponse>>;
        /**
         * Get the statistics for a queue.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getqueuestatistics
         */
        GetQueueStatistics(request: PlayFabMultiplayerModels.GetQueueStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetQueueStatisticsResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetQueueStatisticsResult>>;
        /**
         * Gets a remote login endpoint to a VM that is hosting a multiplayer server build.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/getremoteloginendpoint
         */
        GetRemoteLoginEndpoint(request: PlayFabMultiplayerModels.GetRemoteLoginEndpointRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetRemoteLoginEndpointResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetRemoteLoginEndpointResponse>>;
        /**
         * Get a matchmaking backfill ticket by ticket Id.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/getserverbackfillticket
         */
        GetServerBackfillTicket(request: PlayFabMultiplayerModels.GetServerBackfillTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetServerBackfillTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetServerBackfillTicketResult>>;
        /**
         * Gets the status of whether a title is enabled for the multiplayer server feature.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitleenabledformultiplayerserversstatus
         */
        GetTitleEnabledForMultiplayerServersStatus(request: PlayFabMultiplayerModels.GetTitleEnabledForMultiplayerServersStatusRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetTitleEnabledForMultiplayerServersStatusResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetTitleEnabledForMultiplayerServersStatusResponse>>;
        /**
         * Gets a title's server quota change request.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitlemultiplayerserversquotachange
         */
        GetTitleMultiplayerServersQuotaChange(request: PlayFabMultiplayerModels.GetTitleMultiplayerServersQuotaChangeRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetTitleMultiplayerServersQuotaChangeResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetTitleMultiplayerServersQuotaChangeResponse>>;
        /**
         * Gets the quotas for a title in relation to multiplayer servers.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/gettitlemultiplayerserversquotas
         */
        GetTitleMultiplayerServersQuotas(request: PlayFabMultiplayerModels.GetTitleMultiplayerServersQuotasRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetTitleMultiplayerServersQuotasResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.GetTitleMultiplayerServersQuotasResponse>>;
        /**
         * Send a notification to invite a player to a lobby.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/invitetolobby
         */
        InviteToLobby(request: PlayFabMultiplayerModels.InviteToLobbyRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>>;
        /**
         * Join an Arranged lobby.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinarrangedlobby
         */
        JoinArrangedLobby(request: PlayFabMultiplayerModels.JoinArrangedLobbyRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.JoinLobbyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.JoinLobbyResult>>;
        /**
         * Join a lobby.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinlobby
         */
        JoinLobby(request: PlayFabMultiplayerModels.JoinLobbyRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.JoinLobbyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.JoinLobbyResult>>;
        /**
         * Preview: Join a lobby as a server entity. This is restricted to client lobbies which are using connections.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/joinlobbyasserver
         */
        JoinLobbyAsServer(request: PlayFabMultiplayerModels.JoinLobbyAsServerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.JoinLobbyAsServerResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.JoinLobbyAsServerResult>>;
        /**
         * Join a matchmaking ticket.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/joinmatchmakingticket
         */
        JoinMatchmakingTicket(request: PlayFabMultiplayerModels.JoinMatchmakingTicketRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.JoinMatchmakingTicketResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.JoinMatchmakingTicketResult>>;
        /**
         * Leave a lobby.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/leavelobby
         */
        LeaveLobby(request: PlayFabMultiplayerModels.LeaveLobbyRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>>;
        /**
         * Preview: Request for server to leave a lobby. This is restricted to client owned lobbies which are using connections.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/leavelobbyasserver
         */
        LeaveLobbyAsServer(request: PlayFabMultiplayerModels.LeaveLobbyAsServerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>>;
        /**
         * Lists archived multiplayer server sessions for a build.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listarchivedmultiplayerservers
         */
        ListArchivedMultiplayerServers(request: PlayFabMultiplayerModels.ListMultiplayerServersRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMultiplayerServersResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMultiplayerServersResponse>>;
        /**
         * Lists multiplayer server game assets for a title.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listassetsummaries
         */
        ListAssetSummaries(request: PlayFabMultiplayerModels.ListAssetSummariesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListAssetSummariesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListAssetSummariesResponse>>;
        /**
         * Lists details of all build aliases for a title. Accepts tokens for title and if game client access is enabled, allows
         * game client to request list of builds with player entity token.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listbuildaliases
         */
        ListBuildAliases(request: PlayFabMultiplayerModels.ListBuildAliasesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListBuildAliasesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListBuildAliasesResponse>>;
        /**
         * Lists summarized details of all multiplayer server builds for a title. Accepts tokens for title and if game client
         * access is enabled, allows game client to request list of builds with player entity token.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listbuildsummariesv2
         */
        ListBuildSummariesV2(request: PlayFabMultiplayerModels.ListBuildSummariesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListBuildSummariesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListBuildSummariesResponse>>;
        /**
         * Lists multiplayer server game certificates for a title.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcertificatesummaries
         */
        ListCertificateSummaries(request: PlayFabMultiplayerModels.ListCertificateSummariesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListCertificateSummariesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListCertificateSummariesResponse>>;
        /**
         * Lists custom container images for a title.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcontainerimages
         */
        ListContainerImages(request: PlayFabMultiplayerModels.ListContainerImagesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListContainerImagesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListContainerImagesResponse>>;
        /**
         * Lists the tags for a custom container image.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listcontainerimagetags
         */
        ListContainerImageTags(request: PlayFabMultiplayerModels.ListContainerImageTagsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListContainerImageTagsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListContainerImageTagsResponse>>;
        /**
         * SDK support is limited to C# and Java for this API. List all matchmaking queue configs.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/listmatchmakingqueues
         */
        ListMatchmakingQueues(request: PlayFabMultiplayerModels.ListMatchmakingQueuesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMatchmakingQueuesResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMatchmakingQueuesResult>>;
        /**
         * List all matchmaking ticket Ids the user is a member of.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/listmatchmakingticketsforplayer
         */
        ListMatchmakingTicketsForPlayer(request: PlayFabMultiplayerModels.ListMatchmakingTicketsForPlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMatchmakingTicketsForPlayerResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMatchmakingTicketsForPlayerResult>>;
        /**
         * Lists multiplayer server sessions for a build.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listmultiplayerservers
         */
        ListMultiplayerServers(request: PlayFabMultiplayerModels.ListMultiplayerServersRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMultiplayerServersResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListMultiplayerServersResponse>>;
        /**
         * Lists quality of service servers for party.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listpartyqosservers
         */
        ListPartyQosServers(request: PlayFabMultiplayerModels.ListPartyQosServersRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListPartyQosServersResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListPartyQosServersResponse>>;
        /**
         * Lists quality of service servers for the title. By default, servers are only returned for regions where a Multiplayer
         * Servers build has been deployed.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listqosserversfortitle
         */
        ListQosServersForTitle(request: PlayFabMultiplayerModels.ListQosServersForTitleRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListQosServersForTitleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListQosServersForTitleResponse>>;
        /**
         * Lists multiplayer server game secrets for a title.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listsecretsummaries
         */
        ListSecretSummaries(request: PlayFabMultiplayerModels.ListSecretSummariesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListSecretSummariesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListSecretSummariesResponse>>;
        /**
         * List all server backfill ticket Ids the user is a member of.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/listserverbackfillticketsforplayer
         */
        ListServerBackfillTicketsForPlayer(request: PlayFabMultiplayerModels.ListServerBackfillTicketsForPlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListServerBackfillTicketsForPlayerResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListServerBackfillTicketsForPlayerResult>>;
        /**
         * List all server quota change requests for a title.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listtitlemultiplayerserversquotachanges
         */
        ListTitleMultiplayerServersQuotaChanges(request: PlayFabMultiplayerModels.ListTitleMultiplayerServersQuotaChangesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListTitleMultiplayerServersQuotaChangesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListTitleMultiplayerServersQuotaChangesResponse>>;
        /**
         * Lists virtual machines for a title.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/listvirtualmachinesummaries
         */
        ListVirtualMachineSummaries(request: PlayFabMultiplayerModels.ListVirtualMachineSummariesRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListVirtualMachineSummariesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.ListVirtualMachineSummariesResponse>>;
        /**
         * SDK support is limited to C# and Java for this API. Remove a matchmaking queue config.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/removematchmakingqueue
         */
        RemoveMatchmakingQueue(request: PlayFabMultiplayerModels.RemoveMatchmakingQueueRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RemoveMatchmakingQueueResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RemoveMatchmakingQueueResult>>;
        /**
         * Remove a member from a lobby.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/removemember
         */
        RemoveMember(request: PlayFabMultiplayerModels.RemoveMemberFromLobbyRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>>;
        /**
         * Request a multiplayer server session. Accepts tokens for title and if game client access is enabled, allows game client
         * to request a server with player entity token.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/requestmultiplayerserver
         */
        RequestMultiplayerServer(request: PlayFabMultiplayerModels.RequestMultiplayerServerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RequestMultiplayerServerResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RequestMultiplayerServerResponse>>;
        /**
         * Request a party session.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/requestpartyservice
         */
        RequestPartyService(request: PlayFabMultiplayerModels.RequestPartyServiceRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RequestPartyServiceResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RequestPartyServiceResponse>>;
        /**
         * Rolls over the credentials to the container registry.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/rollovercontainerregistrycredentials
         */
        RolloverContainerRegistryCredentials(request: PlayFabMultiplayerModels.RolloverContainerRegistryCredentialsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RolloverContainerRegistryCredentialsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.RolloverContainerRegistryCredentialsResponse>>;
        /**
         * SDK support is limited to C# and Java for this API. Create or update a matchmaking queue configuration.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking-admin/setmatchmakingqueue
         */
        SetMatchmakingQueue(request: PlayFabMultiplayerModels.SetMatchmakingQueueRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.SetMatchmakingQueueResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.SetMatchmakingQueueResult>>;
        /**
         * Shuts down a multiplayer server session.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/shutdownmultiplayerserver
         */
        ShutdownMultiplayerServer(request: PlayFabMultiplayerModels.ShutdownMultiplayerServerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Subscribe to lobby resource notifications.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/subscribetolobbyresource
         */
        SubscribeToLobbyResource(request: PlayFabMultiplayerModels.SubscribeToLobbyResourceRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.SubscribeToLobbyResourceResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.SubscribeToLobbyResourceResult>>;
        /**
         * Subscribe to match resource notifications.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/subscribetomatchmakingresource
         */
        SubscribeToMatchmakingResource(request: PlayFabMultiplayerModels.SubscribeToMatchResourceRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.SubscribeToMatchResourceResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.SubscribeToMatchResourceResult>>;
        /**
         * Unsubscribe from lobby notifications.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/unsubscribefromlobbyresource
         */
        UnsubscribeFromLobbyResource(request: PlayFabMultiplayerModels.UnsubscribeFromLobbyResourceRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>>;
        /**
         * Unsubscribe from match resource notifications.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/matchmaking/unsubscribefrommatchmakingresource
         */
        UnsubscribeFromMatchmakingResource(request: PlayFabMultiplayerModels.UnsubscribeFromMatchResourceRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.UnsubscribeFromMatchResourceResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.UnsubscribeFromMatchResourceResult>>;
        /**
         * Untags a container image.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/untagcontainerimage
         */
        UntagContainerImage(request: PlayFabMultiplayerModels.UntagContainerImageRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Creates a multiplayer server build alias.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildalias
         */
        UpdateBuildAlias(request: PlayFabMultiplayerModels.UpdateBuildAliasRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.BuildAliasDetailsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.BuildAliasDetailsResponse>>;
        /**
         * Updates a multiplayer server build's name.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildname
         */
        UpdateBuildName(request: PlayFabMultiplayerModels.UpdateBuildNameRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Updates a multiplayer server build's region. If the region is not yet created, it will be created
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildregion
         */
        UpdateBuildRegion(request: PlayFabMultiplayerModels.UpdateBuildRegionRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Updates a multiplayer server build's regions.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/updatebuildregions
         */
        UpdateBuildRegions(request: PlayFabMultiplayerModels.UpdateBuildRegionsRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Update a lobby.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/updatelobby
         */
        UpdateLobby(request: PlayFabMultiplayerModels.UpdateLobbyRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>>;
        /**
         * Preview: Update fields related to a joined server in the lobby the server is in. Servers can keep a lobby from expiring
         * by being the one to "update" the lobby in some way. Servers have no impact on last member leave/last member disconnect
         * behavior.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/lobby/updatelobbyasserver
         */
        UpdateLobbyAsServer(request: PlayFabMultiplayerModels.UpdateLobbyAsServerRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.LobbyEmptyResult>>;
        /**
         * Uploads a multiplayer server game certificate.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/uploadcertificate
         */
        UploadCertificate(request: PlayFabMultiplayerModels.UploadCertificateRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;
        /**
         * Uploads a multiplayer server game secret.
         * https://docs.microsoft.com/rest/api/playfab/multiplayer/multiplayerserver/uploadsecret
         */
        UploadSecret(request: PlayFabMultiplayerModels.UploadSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabMultiplayerModels.EmptyResponse>>;

    }
}

declare module PlayFabMultiplayerModels {
    type AccessPolicy = "Public"

        | "Friends"
        | "Private";

    export interface AssetReference {
        /** The asset's file name. This is a filename with the .zip, .tar, or .tar.gz extension. */
        FileName?: string;
        /** The asset's mount path. */
        MountPath?: string;

    }

    export interface AssetReferenceParams {
        /** The asset's file name. */
        FileName: string;
        /** The asset's mount path. */
        MountPath?: string;

    }

    export interface AssetSummary {
        /** The asset's file name. This is a filename with the .zip, .tar, or .tar.gz extension. */
        FileName?: string;
        /** The metadata associated with the asset. */
        Metadata?: { [key: string]: string | null };

    }

    type AttributeMergeFunction = "Min"

        | "Max"
        | "Average";

    type AttributeNotSpecifiedBehavior = "UseDefault"

        | "MatchAny";

    type AttributeSource = "User"

        | "PlayerEntity";

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
        | "SouthAfricaNorth"
        | "WestCentralUs"
        | "KoreaCentral"
        | "FranceCentral"
        | "WestUs2"
        | "CentralIndia"
        | "UaeNorth"
        | "UkSouth"
        | "SwedenCentral";

    type AzureVmFamily = "A"

        | "Av2"
        | "Dv2"
        | "Dv3"
        | "F"
        | "Fsv2"
        | "Dasv4"
        | "Dav4"
        | "Dadsv5"
        | "Eav4"
        | "Easv4"
        | "Ev4"
        | "Esv4"
        | "Dsv3"
        | "Dsv2"
        | "NCasT4_v3"
        | "Ddv4"
        | "Ddsv4"
        | "HBv3"
        | "Ddv5"
        | "Ddsv5";

    type AzureVmSize = "Standard_A1"

        | "Standard_A2"
        | "Standard_A3"
        | "Standard_A4"
        | "Standard_A1_v2"
        | "Standard_A2_v2"
        | "Standard_A4_v2"
        | "Standard_A8_v2"
        | "Standard_D1_v2"
        | "Standard_D2_v2"
        | "Standard_D3_v2"
        | "Standard_D4_v2"
        | "Standard_D5_v2"
        | "Standard_D2_v3"
        | "Standard_D4_v3"
        | "Standard_D8_v3"
        | "Standard_D16_v3"
        | "Standard_F1"
        | "Standard_F2"
        | "Standard_F4"
        | "Standard_F8"
        | "Standard_F16"
        | "Standard_F2s_v2"
        | "Standard_F4s_v2"
        | "Standard_F8s_v2"
        | "Standard_F16s_v2"
        | "Standard_D2as_v4"
        | "Standard_D4as_v4"
        | "Standard_D8as_v4"
        | "Standard_D16as_v4"
        | "Standard_D2a_v4"
        | "Standard_D4a_v4"
        | "Standard_D8a_v4"
        | "Standard_D16a_v4"
        | "Standard_D2ads_v5"
        | "Standard_D4ads_v5"
        | "Standard_D8ads_v5"
        | "Standard_D16ads_v5"
        | "Standard_E2a_v4"
        | "Standard_E4a_v4"
        | "Standard_E8a_v4"
        | "Standard_E16a_v4"
        | "Standard_E2as_v4"
        | "Standard_E4as_v4"
        | "Standard_E8as_v4"
        | "Standard_E16as_v4"
        | "Standard_D2s_v3"
        | "Standard_D4s_v3"
        | "Standard_D8s_v3"
        | "Standard_D16s_v3"
        | "Standard_DS1_v2"
        | "Standard_DS2_v2"
        | "Standard_DS3_v2"
        | "Standard_DS4_v2"
        | "Standard_DS5_v2"
        | "Standard_NC4as_T4_v3"
        | "Standard_D2d_v4"
        | "Standard_D4d_v4"
        | "Standard_D8d_v4"
        | "Standard_D16d_v4"
        | "Standard_D2ds_v4"
        | "Standard_D4ds_v4"
        | "Standard_D8ds_v4"
        | "Standard_D16ds_v4"
        | "Standard_HB120_16rs_v3"
        | "Standard_HB120_32rs_v3"
        | "Standard_HB120_64rs_v3"
        | "Standard_HB120_96rs_v3"
        | "Standard_HB120rs_v3"
        | "Standard_D2d_v5"
        | "Standard_D4d_v5"
        | "Standard_D8d_v5"
        | "Standard_D16d_v5"
        | "Standard_D32d_v5"
        | "Standard_D2ds_v5"
        | "Standard_D4ds_v5"
        | "Standard_D8ds_v5"
        | "Standard_D16ds_v5"
        | "Standard_D32ds_v5";

    export interface BuildAliasDetailsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The guid string alias Id of the alias to be created or updated. */
        AliasId?: string;
        /** The alias name. */
        AliasName?: string;
        /** Array of build selection criteria. */
        BuildSelectionCriteria?: BuildSelectionCriterion[];

    }

    export interface BuildAliasParams {
        /** The guid string alias ID to use for the request. */
        AliasId: string;

    }

    export interface BuildRegion {
        /** The current multiplayer server stats for the region. */
        CurrentServerStats?: CurrentServerStats;
        /** Optional settings to control dynamic adjustment of standby target */
        DynamicStandbySettings?: DynamicStandbySettings;
        /** Whether the game assets provided for the build have been replicated to this region. */
        IsAssetReplicationComplete: boolean;
        /** The maximum number of multiplayer servers for the region. */
        MaxServers: number;
        /** Regional override for the number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm?: number;
        /** The build region. */
        Region?: string;
        /** Optional settings to set the standby target to specified values during the supplied schedules */
        ScheduledStandbySettings?: ScheduledStandbySettings;
        /** The target number of standby multiplayer servers for the region. */
        StandbyServers: number;
        /**
         * The status of multiplayer servers in the build region. Valid values are - Unknown, Initialized, Deploying, Deployed,
         * Unhealthy, Deleting, Deleted.
         */
        Status?: string;
        /** Regional override for the VM size the build was created on. */
        VmSize?: string;

    }

    export interface BuildRegionParams {
        /** Optional settings to control dynamic adjustment of standby target. If not specified, dynamic standby is disabled */
        DynamicStandbySettings?: DynamicStandbySettings;
        /** The maximum number of multiplayer servers for the region. */
        MaxServers: number;
        /** Regional override for the number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm?: number;
        /** The build region. */
        Region: string;
        /** Optional settings to set the standby target to specified values during the supplied schedules */
        ScheduledStandbySettings?: ScheduledStandbySettings;
        /** The number of standby multiplayer servers for the region. */
        StandbyServers: number;
        /** Regional override for the VM size the build was created on. */
        VmSize?: string;

    }

    export interface BuildSelectionCriterion {
        /** Dictionary of build ids and their respective weights for distribution of allocation requests. */
        BuildWeightDistribution?: { [key: string]: number };

    }

    export interface BuildSummary {
        /** The guid string build ID of the build. */
        BuildId?: string;
        /** The build name. */
        BuildName?: string;
        /** The time the build was created in UTC. */
        CreationTime?: string;
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null };
        /** The configuration and status for each region in the build. */
        RegionConfigurations?: BuildRegion[];

    }

    export interface CancelAllMatchmakingTicketsForPlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity key of the player whose tickets should be canceled. */
        Entity?: EntityKey;
        /** The name of the queue from which a player's tickets should be canceled. */
        QueueName: string;

    }

    export interface CancelAllMatchmakingTicketsForPlayerResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CancelAllServerBackfillTicketsForPlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity key of the player whose backfill tickets should be canceled. */
        Entity: EntityKey;
        /** The name of the queue from which a player's backfill tickets should be canceled. */
        QueueName: string;

    }

    export interface CancelAllServerBackfillTicketsForPlayerResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    type CancellationReason = "Requested"

        | "Internal"
        | "Timeout";

    export interface CancelMatchmakingTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The name of the queue the ticket is in. */
        QueueName: string;
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    export interface CancelMatchmakingTicketResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CancelServerBackfillTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The name of the queue the ticket is in. */
        QueueName: string;
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    export interface CancelServerBackfillTicketResult extends PlayFabModule.IPlayFabResultCommon  {

    }

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

    export interface CertificateSummary {
        /** The name of the certificate. */
        Name?: string;
        /** The thumbprint for the certificate. */
        Thumbprint?: string;

    }

    export interface ConnectedPlayer {
        /** The player ID of the player connected to the multiplayer server. */
        PlayerId?: string;

    }

    type ContainerFlavor = "ManagedWindowsServerCore"

        | "CustomLinux"
        | "ManagedWindowsServerCorePreview"
        | "Invalid";

    export interface ContainerImageReference {
        /** The container image name. */
        ImageName: string;
        /** The container tag. */
        Tag?: string;

    }

    export interface CoreCapacity {
        /** The available core capacity for the (Region, VmFamily) */
        Available: number;
        /** The AzureRegion */
        Region?: string;
        /** The total core capacity for the (Region, VmFamily) */
        Total: number;
        /** The AzureVmFamily */
        VmFamily?: string;

    }

    export interface CoreCapacityChange {
        /** New quota core limit for the given vm family/region. */
        NewCoreLimit: number;
        /** Region to change. */
        Region: string;
        /** Virtual machine family to change. */
        VmFamily: string;

    }

    export interface CreateBuildAliasRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The alias name. */
        AliasName: string;
        /** Array of build selection criteria. */
        BuildSelectionCriteria?: BuildSelectionCriterion[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface CreateBuildWithCustomContainerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean;
        /** The build name. */
        BuildName: string;
        /** The flavor of container to create a build from. */
        ContainerFlavor?: string;
        /** The container reference, consisting of the image name and tag. */
        ContainerImageReference?: ContainerImageReference;
        /** The container command to run when the multiplayer server has been allocated, including any arguments. */
        ContainerRunCommand?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The list of game assets related to the build. */
        GameAssetReferences?: AssetReferenceParams[];
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReferenceParams[];
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReferenceParams[];
        /** The Linux instrumentation configuration for the build. */
        LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration;
        /**
         * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
         * Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100
         */
        Metadata?: { [key: string]: string | null };
        /** The configuration for the monitoring application on the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfigurationParams;
        /** The number of multiplayer servers to host on a single VM. */
        MultiplayerServerCountPerVm: number;
        /** The ports to map the build on. */
        Ports: Port[];
        /** The region configurations for the build. */
        RegionConfigurations: BuildRegionParams[];
        /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
        ServerResourceConstraints?: ServerResourceConstraintParams;
        /** The VM size to create the build on. */
        VmSize?: string;
        /** The configuration for the VmStartupScript for the build */
        VmStartupScriptConfiguration?: VmStartupScriptParams;

    }

    export interface CreateBuildWithCustomContainerResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean;
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
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReference[];
        /** The Linux instrumentation configuration for this build. */
        LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration;
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null };
        /** The configuration for the monitoring application for the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfiguration;
        /** The number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm: number;
        /** The OS platform used for running the game process. */
        OsPlatform?: string;
        /** The ports the build is mapped on. */
        Ports?: Port[];
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[];
        /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
        ServerResourceConstraints?: ServerResourceConstraintParams;
        /** The type of game server being hosted. */
        ServerType?: string;
        /**
         * When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to
         * disc.
         */
        UseStreamingForAssetDownloads?: boolean;
        /** The VM size the build was created on. */
        VmSize?: string;
        /** The configuration for the VmStartupScript feature for the build */
        VmStartupScriptConfiguration?: VmStartupScriptConfiguration;

    }

    export interface CreateBuildWithManagedContainerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean;
        /** The build name. */
        BuildName: string;
        /** The flavor of container to create a build from. */
        ContainerFlavor?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The list of game assets related to the build. */
        GameAssetReferences: AssetReferenceParams[];
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReferenceParams[];
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReferenceParams[];
        /**
         * The directory containing the game executable. This would be the start path of the game assets that contain the main game
         * server executable. If not provided, a best effort will be made to extract it from the start game command.
         */
        GameWorkingDirectory?: string;
        /** The instrumentation configuration for the build. */
        InstrumentationConfiguration?: InstrumentationConfiguration;
        /**
         * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
         * Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100
         */
        Metadata?: { [key: string]: string | null };
        /** The configuration for the monitoring application on the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfigurationParams;
        /** The number of multiplayer servers to host on a single VM. */
        MultiplayerServerCountPerVm: number;
        /** The ports to map the build on. */
        Ports: Port[];
        /** The region configurations for the build. */
        RegionConfigurations: BuildRegionParams[];
        /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
        ServerResourceConstraints?: ServerResourceConstraintParams;
        /** The command to run when the multiplayer server is started, including any arguments. */
        StartMultiplayerServerCommand: string;
        /** The VM size to create the build on. */
        VmSize?: string;
        /** The configuration for the VmStartupScript for the build */
        VmStartupScriptConfiguration?: VmStartupScriptParams;
        /** The crash dump configuration for the build. */
        WindowsCrashDumpConfiguration?: WindowsCrashDumpConfiguration;

    }

    export interface CreateBuildWithManagedContainerResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean;
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
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReference[];
        /**
         * The directory containing the game executable. This would be the start path of the game assets that contain the main game
         * server executable. If not provided, a best effort will be made to extract it from the start game command.
         */
        GameWorkingDirectory?: string;
        /** The instrumentation configuration for this build. */
        InstrumentationConfiguration?: InstrumentationConfiguration;
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null };
        /** The configuration for the monitoring application for the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfiguration;
        /** The number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm: number;
        /** The OS platform used for running the game process. */
        OsPlatform?: string;
        /** The ports the build is mapped on. */
        Ports?: Port[];
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[];
        /** The resource constraints to apply to each server on the VM (EXPERIMENTAL API) */
        ServerResourceConstraints?: ServerResourceConstraintParams;
        /** The type of game server being hosted. */
        ServerType?: string;
        /** The command to run when the multiplayer server has been allocated, including any arguments. */
        StartMultiplayerServerCommand?: string;
        /**
         * When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to
         * disc.
         */
        UseStreamingForAssetDownloads?: boolean;
        /** The VM size the build was created on. */
        VmSize?: string;
        /** The configuration for the VmStartupScript feature for the build */
        VmStartupScriptConfiguration?: VmStartupScriptConfiguration;

    }

    export interface CreateBuildWithProcessBasedServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean;
        /** The build name. */
        BuildName: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The list of game assets related to the build. */
        GameAssetReferences: AssetReferenceParams[];
        /** The game certificates for the build. */
        GameCertificateReferences?: GameCertificateReferenceParams[];
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReferenceParams[];
        /**
         * The working directory for the game process. If this is not provided, the working directory will be set based on the
         * mount path of the game server executable.
         */
        GameWorkingDirectory?: string;
        /** The instrumentation configuration for the Build. Used only if it is a Windows Build. */
        InstrumentationConfiguration?: InstrumentationConfiguration;
        /**
         * Indicates whether this build will be created using the OS Preview versionPreview OS is recommended for dev builds to
         * detect any breaking changes before they are released to retail. Retail builds should set this value to false.
         */
        IsOSPreview?: boolean;
        /** The Linux instrumentation configuration for the Build. Used only if it is a Linux Build. */
        LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration;
        /**
         * Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through
         * Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100
         */
        Metadata?: { [key: string]: string | null };
        /** The configuration for the monitoring application on the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfigurationParams;
        /** The number of multiplayer servers to host on a single VM. */
        MultiplayerServerCountPerVm: number;
        /** The OS platform used for running the game process. */
        OsPlatform?: string;
        /** The ports to map the build on. */
        Ports: Port[];
        /** The region configurations for the build. */
        RegionConfigurations: BuildRegionParams[];
        /**
         * The command to run when the multiplayer server is started, including any arguments. The path to any executable should be
         * relative to the root asset folder when unzipped.
         */
        StartMultiplayerServerCommand: string;
        /** The VM size to create the build on. */
        VmSize?: string;
        /** The configuration for the VmStartupScript for the build */
        VmStartupScriptConfiguration?: VmStartupScriptParams;

    }

    export interface CreateBuildWithProcessBasedServerResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean;
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
        /** The game secrets for the build. */
        GameSecretReferences?: GameSecretReference[];
        /**
         * The working directory for the game process. If this is not provided, the working directory will be set based on the
         * mount path of the game server executable.
         */
        GameWorkingDirectory?: string;
        /** The instrumentation configuration for this build. */
        InstrumentationConfiguration?: InstrumentationConfiguration;
        /**
         * Indicates whether this build will be created using the OS Preview versionPreview OS is recommended for dev builds to
         * detect any breaking changes before they are released to retail. Retail builds should set this value to false.
         */
        IsOSPreview?: boolean;
        /** The Linux instrumentation configuration for this build. */
        LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration;
        /** The metadata of the build. */
        Metadata?: { [key: string]: string | null };
        /** The configuration for the monitoring application for the build */
        MonitoringApplicationConfiguration?: MonitoringApplicationConfiguration;
        /** The number of multiplayer servers to host on a single VM of the build. */
        MultiplayerServerCountPerVm: number;
        /** The OS platform used for running the game process. */
        OsPlatform?: string;
        /** The ports the build is mapped on. */
        Ports?: Port[];
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[];
        /** The type of game server being hosted. */
        ServerType?: string;
        /**
         * The command to run when the multiplayer server is started, including any arguments. The path to any executable is
         * relative to the root asset folder when unzipped.
         */
        StartMultiplayerServerCommand?: string;
        /**
         * When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to
         * disc.
         */
        UseStreamingForAssetDownloads?: boolean;
        /** The VM size the build was created on. */
        VmSize?: string;
        /** The configuration for the VmStartupScript feature for the build */
        VmStartupScriptConfiguration?: VmStartupScriptConfiguration;

    }

    export interface CreateLobbyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The policy indicating who is allowed to join the lobby, and the visibility to queries. May be 'Public', 'Friends' or
         * 'Private'. Public means the lobby is both visible in queries and any player may join, including invited players. Friends
         * means that users who are bidirectional friends of members in the lobby may search to find friend lobbies, to retrieve
         * its connection string. Private means the lobby is not visible in queries, and a player must receive an invitation to
         * join. Defaults to 'Public' on creation. Can only be changed by the lobby owner.
         */
        AccessPolicy?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * The private key-value pairs which are visible to all entities in the lobby. At most 30 key-value pairs may be stored
         * here, keys are limited to 30 characters and values to 1000. The total size of all lobbyData values may not exceed 4096
         * bytes. Keys are case sensitive.
         */
        LobbyData?: { [key: string]: string | null };
        /** The maximum number of players allowed in the lobby. The value must be between 2 and 128. */
        MaxPlayers: number;
        /**
         * The member initially added to the lobby. Client must specify exactly one member, which is the creator's entity and
         * member data. Member PubSubConnectionHandle must be null or empty. Game servers must not specify any members.
         */
        Members?: Member[];
        /** The lobby owner. Must be the calling entity. */
        Owner: EntityKey;
        /**
         * The policy for how a new owner is chosen. May be 'Automatic', 'Manual' or 'None'. Can only be specified by clients. If
         * client-owned and 'Automatic' - The Lobby service will automatically assign another connected owner when the current
         * owner leaves or disconnects. The useConnections property must be true. If client - owned and 'Manual' - Ownership is
         * protected as long as the current owner is connected. If the current owner leaves or disconnects any member may set
         * themselves as the current owner. The useConnections property must be true. If client-owned and 'None' - Any member can
         * set ownership. The useConnections property can be either true or false.
         */
        OwnerMigrationPolicy?: string;
        /**
         * The public key-value pairs which allow queries to differentiate between lobbies. Queries will refer to these key-value
         * pairs in their filter and order by clauses to retrieve lobbies fitting the specified criteria. At most 30 key-value
         * pairs may be stored here. Keys are of the format string_key1, string_key2 ... string_key30 for string values, or
         * number_key1, number_key2, ... number_key30 for numeric values.Numeric values are floats. Values can be at most 256
         * characters long. The total size of all searchData values may not exceed 1024 bytes.
         */
        SearchData?: { [key: string]: string | null };
        /**
         * A setting to control whether connections are used. Defaults to true. When true, notifications are sent to subscribed
         * players, disconnect detection removes connectionHandles, only owner migration policies using connections are allowed,
         * and lobbies must have at least one connected member to be searchable or be a server hosted lobby with a connected
         * server. If false, then notifications are not sent, connections are not allowed, and lobbies do not need connections to
         * be searchable.
         */
        UseConnections: boolean;

    }

    export interface CreateLobbyResult extends PlayFabModule.IPlayFabResultCommon  {
        /** A field which indicates which lobby the user will be joining. */
        ConnectionString: string;
        /** Id to uniquely identify a lobby. */
        LobbyId: string;

    }

    export interface CreateMatchmakingTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The User who created this ticket. */
        Creator: MatchmakingPlayer;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number;
        /** A list of Entity Keys of other users to match with. */
        MembersToMatchWith?: EntityKey[];
        /** The Id of a match queue. */
        QueueName: string;

    }

    export interface CreateMatchmakingTicketResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    export interface CreateRemoteUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of to create the remote user for. */
        BuildId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The expiration time for the remote user created. Defaults to expiring in one day if not specified. */
        ExpirationTime?: string;
        /** The region of virtual machine to create the remote user for. */
        Region: string;
        /** The username to create the remote user with. */
        Username: string;
        /** The virtual machine ID the multiplayer server is located on. */
        VmId: string;

    }

    export interface CreateRemoteUserResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The expiration time for the remote user created. */
        ExpirationTime?: string;
        /** The generated password for the remote user that was created. */
        Password?: string;
        /** The username for the remote user that was created. */
        Username?: string;

    }

    export interface CreateServerBackfillTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number;
        /** The users who will be part of this ticket, along with their team assignments. */
        Members: MatchmakingPlayerWithTeamAssignment[];
        /** The Id of a match queue. */
        QueueName: string;
        /** The details of the server the members are connected to. */
        ServerDetails?: ServerDetails;

    }

    export interface CreateServerBackfillTicketResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    export interface CreateServerMatchmakingTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number;
        /** The users who will be part of this ticket. */
        Members: MatchmakingPlayer[];
        /** The Id of a match queue. */
        QueueName: string;

    }

    export interface CreateTitleMultiplayerServersQuotaChangeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** A brief description of the requested changes. */
        ChangeDescription?: string;
        /** Changes to make to the titles cores quota. */
        Changes: CoreCapacityChange[];
        /** Email to be contacted by our team about this request. Only required when a request is not approved. */
        ContactEmail?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Additional information about this request that our team can use to better understand the requirements. */
        Notes?: string;
        /** When these changes would need to be in effect. Only required when a request is not approved. */
        StartDate?: string;

    }

    export interface CreateTitleMultiplayerServersQuotaChangeResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Id of the change request that was created. */
        RequestId?: string;
        /** Determines if the request was approved or not. When false, our team is reviewing and may respond within 2 business days. */
        WasApproved: boolean;

    }

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

    export interface CustomDifferenceRuleExpansion {
        /** Manually specify the values to use for each expansion interval (this overrides Difference, Delta, and MaxDifference). */
        DifferenceOverrides: OverrideDouble[];
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface CustomRegionSelectionRuleExpansion {
        /** Manually specify the maximum latency to use for each expansion interval. */
        MaxLatencyOverrides: OverrideUnsignedInt[];
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface CustomSetIntersectionRuleExpansion {
        /** Manually specify the values to use for each expansion interval. */
        MinIntersectionSizeOverrides: OverrideUnsignedInt[];
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface CustomTeamDifferenceRuleExpansion {
        /** Manually specify the team difference value to use for each expansion interval. */
        DifferenceOverrides: OverrideDouble[];
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface CustomTeamSizeBalanceRuleExpansion {
        /** Manually specify the team size difference to use for each expansion interval. */
        DifferenceOverrides: OverrideUnsignedInt[];
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface DeleteAssetRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The filename of the asset to delete. */
        FileName: string;

    }

    export interface DeleteBuildAliasRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string alias ID of the alias to perform the action on. */
        AliasId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface DeleteBuildRegionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string ID of the build we want to update regions for. */
        BuildId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The build region to delete. */
        Region: string;

    }

    export interface DeleteBuildRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the build to delete. */
        BuildId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface DeleteCertificateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The name of the certificate. */
        Name: string;

    }

    export interface DeleteContainerImageRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The container image repository we want to delete. */
        ImageName?: string;

    }

    export interface DeleteLobbyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The id of the lobby. */
        LobbyId?: string;

    }

    export interface DeleteRemoteUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer server where the remote user is to delete. */
        BuildId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The region of the multiplayer server where the remote user is to delete. */
        Region: string;
        /** The username of the remote user to delete. */
        Username: string;
        /** The virtual machine ID the multiplayer server is located on. */
        VmId: string;

    }

    export interface DeleteSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The name of the secret. */
        Name: string;

    }

    export interface DifferenceRule {
        /** Description of the attribute used by this rule to match tickets. */
        Attribute: QueueRuleAttribute;
        /**
         * Describes the behavior when an attribute is not specified in the ticket creation request or in the user's entity
         * profile.
         */
        AttributeNotSpecifiedBehavior: string;
        /**
         * Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this
         * is set, Difference is ignored.
         */
        CustomExpansion?: CustomDifferenceRuleExpansion;
        /**
         * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
         * AttributeNotSpecifiedBehavior is false). Optional.
         */
        DefaultAttributeValue?: number;
        /** The allowed difference between any two tickets at the start of matchmaking. */
        Difference: number;
        /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
        LinearExpansion?: LinearDifferenceRuleExpansion;
        /** How values are treated when there are multiple players in a single ticket. */
        MergeFunction: string;
        /** Friendly name chosen by developer. */
        Name: string;
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number;
        /** The relative weight of this rule compared to others. */
        Weight: number;

    }

    type DirectPeerConnectivityOptions = "None"

        | "SamePlatformType"
        | "DifferentPlatformType"
        | "AnyPlatformType"
        | "SameEntityLoginProvider"
        | "DifferentEntityLoginProvider"
        | "AnyEntityLoginProvider"
        | "AnyPlatformTypeAndEntityLoginProvider"
        | "OnlyServers";

    export interface DynamicStandbySettings {
        /**
         * List of auto standing by trigger values and corresponding standing by multiplier. Defaults to 1.5X at 50%, 3X at 25%,
         * and 4X at 5%
         */
        DynamicFloorMultiplierThresholds?: DynamicStandbyThreshold[];
        /** When true, dynamic standby will be enabled */
        IsEnabled: boolean;
        /** The time it takes to reduce target standing by to configured floor value after an increase. Defaults to 30 minutes */
        RampDownSeconds?: number;

    }

    export interface DynamicStandbyThreshold {
        /** When the trigger threshold is reached, multiply by this value */
        Multiplier: number;
        /** The multiplier will be applied when the actual standby divided by target standby floor is less than this value */
        TriggerThresholdPercentage: number;

    }

    export interface EmptyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface EnableMultiplayerServersForTitleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface EnableMultiplayerServersForTitleResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The enabled status for the multiplayer server features for the title. */
        Status?: string;

    }

    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string;

    }

    type ExternalFriendSources = "None"

        | "Steam"
        | "Facebook"
        | "Xbox"
        | "Psn"
        | "All";

    export interface FindFriendLobbiesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Indicates which other platforms' friends this query should link to. */
        ExternalPlatformFriends?: string;
        /**
         * OData style string that contains one or more filters. Only the following operators are supported: "and" (logical and),
         * "eq" (equal), "ne" (not equals), "ge" (greater than or equal), "gt" (greater than), "le" (less than or equal), and "lt"
         * (less than). The left-hand side of each OData logical expression should be either a search property key (e.g.
         * string_key1, number_key3, etc) or one of the pre-defined search keys all of which must be prefixed by "lobby/":
         * lobby/memberCount (number of players in a lobby), lobby/maxMemberCount (maximum number of players allowed in a lobby),
         * lobby/memberCountRemaining (remaining number of players who can be allowed in a lobby), lobby/membershipLock (must equal
         * 'Unlocked' or 'Locked'), lobby/amOwner (required to equal "true"), lobby/amMember (required to equal "true").
         */
        Filter?: string;
        /**
         * OData style string that contains sorting for this query in either ascending ("asc") or descending ("desc") order.
         * OrderBy clauses are of the form "number_key1 asc" or the pre-defined search key "lobby/memberCount asc",
         * "lobby/memberCountRemaining desc" and "lobby/maxMemberCount desc". To sort by closest, a moniker `distance{number_key1 =
         * 5}` can be used to sort by distance from the given number. This field only supports either one sort clause or one
         * distance clause.
         */
        OrderBy?: string;
        /** Request pagination information. */
        Pagination?: PaginationRequest;
        /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
        XboxToken?: string;

    }

    export interface FindFriendLobbiesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of lobbies found that matched FindFriendLobbies request. */
        Lobbies: FriendLobbySummary[];
        /** Pagination response for FindFriendLobbies request. */
        Pagination: PaginationResponse;

    }

    export interface FindLobbiesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * OData style string that contains one or more filters. Only the following operators are supported: "and" (logical and),
         * "eq" (equal), "ne" (not equals), "ge" (greater than or equal), "gt" (greater than), "le" (less than or equal), and "lt"
         * (less than). The left-hand side of each OData logical expression should be either a search property key (e.g.
         * string_key1, number_key3, etc) or one of the pre-defined search keys all of which must be prefixed by "lobby/":
         * lobby/memberCount (number of players in a lobby), lobby/maxMemberCount (maximum number of players allowed in a lobby),
         * lobby/memberCountRemaining (remaining number of players who can be allowed in a lobby), lobby/membershipLock (must equal
         * 'Unlocked' or 'Locked'), lobby/amOwner (required to equal "true"), lobby/amMember (required to equal "true").
         */
        Filter?: string;
        /**
         * OData style string that contains sorting for this query in either ascending ("asc") or descending ("desc") order.
         * OrderBy clauses are of the form "number_key1 asc" or the pre-defined search key "lobby/memberCount asc",
         * "lobby/memberCountRemaining desc" and "lobby/maxMemberCount desc". To sort by closest, a moniker `distance{number_key1 =
         * 5}` can be used to sort by distance from the given number. This field only supports either one sort clause or one
         * distance clause.
         */
        OrderBy?: string;
        /** Request pagination information. */
        Pagination?: PaginationRequest;

    }

    export interface FindLobbiesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of lobbies found that matched FindLobbies request. */
        Lobbies: LobbySummary[];
        /** Pagination response for FindLobbies request. */
        Pagination: PaginationResponse;

    }

    export interface FriendLobbySummary {
        /**
         * A string used to join the lobby.This field is populated by the Lobby service.Invites are performed by communicating this
         * connectionString to other players.
         */
        ConnectionString: string;
        /** The current number of players in the lobby. */
        CurrentPlayers: number;
        /** Friends in Lobby. */
        Friends?: EntityKey[];
        /** Id to uniquely identify a lobby. */
        LobbyId: string;
        /** The maximum number of players allowed in the lobby. */
        MaxPlayers: number;
        /** A setting indicating whether members are allowed to join this lobby. When Locked new members are prevented from joining. */
        MembershipLock?: string;
        /** The client or server entity which owns this lobby. */
        Owner: EntityKey;
        /** Search data. */
        SearchData?: { [key: string]: string | null };

    }

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

    export interface GameSecretReference {
        /** The name of the game secret. This name should match the name of a secret that was previously added to this title. */
        Name?: string;

    }

    export interface GameSecretReferenceParams {
        /** The name of the game secret. This name should match the name of a secret that was previously added to this title. */
        Name: string;

    }

    export interface GetAssetDownloadUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The asset's file name to get the download URL for. */
        FileName: string;

    }

    export interface GetAssetDownloadUrlResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The asset's download URL. */
        AssetDownloadUrl?: string;
        /** The asset's file name to get the download URL for. */
        FileName?: string;

    }

    export interface GetAssetUploadUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The asset's file name to get the upload URL for. */
        FileName: string;

    }

    export interface GetAssetUploadUrlResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The asset's upload URL. */
        AssetUploadUrl?: string;
        /** The asset's file name to get the upload URL for. */
        FileName?: string;

    }

    export interface GetBuildAliasRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string alias ID of the alias to perform the action on. */
        AliasId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface GetBuildRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the build to get. */
        BuildId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface GetBuildResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or
         * will have the same assets mounted in the container.
         */
        AreAssetsReadonly?: boolean;
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
        /** The instrumentation configuration of the build. */
        InstrumentationConfiguration?: InstrumentationConfiguration;
        /**
         * Metadata of the build. The keys are case insensitive. The build metadata is made available to the server through Game
         * Server SDK (GSDK).
         */
        Metadata?: { [key: string]: string | null };
        /** The number of multiplayer servers to hosted on a single VM of the build. */
        MultiplayerServerCountPerVm: number;
        /** The OS platform used for running the game process. */
        OsPlatform?: string;
        /** The ports the build is mapped on. */
        Ports?: Port[];
        /** The region configuration for the build. */
        RegionConfigurations?: BuildRegion[];
        /** The resource constraints to apply to each server on the VM. */
        ServerResourceConstraints?: ServerResourceConstraintParams;
        /** The type of game server being hosted. */
        ServerType?: string;
        /**
         * The command to run when the multiplayer server has been allocated, including any arguments. This only applies to managed
         * builds. If the build is a custom build, this field will be null.
         */
        StartMultiplayerServerCommand?: string;
        /** The VM size the build was created on. */
        VmSize?: string;
        /** The configuration for the VmStartupScript feature for the build */
        VmStartupScriptConfiguration?: VmStartupScriptConfiguration;

    }

    export interface GetContainerRegistryCredentialsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface GetContainerRegistryCredentialsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The url of the container registry. */
        DnsName?: string;
        /** The password for accessing the container registry. */
        Password?: string;
        /** The username for accessing the container registry. */
        Username?: string;

    }

    export interface GetLobbyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The id of the lobby. */
        LobbyId?: string;

    }

    export interface GetLobbyResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The information pertaining to the requested lobby. */
        Lobby: Lobby;

    }

    export interface GetMatchmakingQueueRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The Id of the matchmaking queue to retrieve. */
        QueueName?: string;

    }

    export interface GetMatchmakingQueueResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The matchmaking queue config. */
        MatchmakingQueue?: MatchmakingQueueConfig;

    }

    export interface GetMatchmakingTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
         * object.
         */
        EscapeObject: boolean;
        /** The name of the queue to find a match for. */
        QueueName: string;
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    export interface GetMatchmakingTicketResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state. Please retry
         * if CancellationReason is RetryRequired.
         */
        CancellationReasonString?: string;
        /** Change number used for differentiating older matchmaking status updates from newer ones. */
        ChangeNumber?: number;
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

    export interface GetMatchRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
         * object.
         */
        EscapeObject: boolean;
        /** The Id of a match. */
        MatchId: string;
        /** The name of the queue to join. */
        QueueName: string;
        /** Determines whether the matchmaking attributes for each user should be returned in the response for match request. */
        ReturnMemberAttributes: boolean;

    }

    export interface GetMatchResult extends PlayFabModule.IPlayFabResultCommon  {
        /** A string that is used by players that are matched together to join an arranged lobby. */
        ArrangementString?: string;
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

    export interface GetMultiplayerServerDetailsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * The title generated guid string session ID of the multiplayer server to get details for. This is to keep track of
         * multiplayer server sessions.
         */
        SessionId: string;

    }

    export interface GetMultiplayerServerDetailsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The identity of the build in which the server was allocated. */
        BuildId?: string;
        /** The connected players in the multiplayer server. */
        ConnectedPlayers?: ConnectedPlayer[];
        /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
        FQDN?: string;
        /** The public IPv4 address of the virtual machine that is hosting this multiplayer server. */
        IPV4Address?: string;
        /** The time (UTC) at which a change in the multiplayer server state was observed. */
        LastStateTransitionTime?: string;
        /** The ports the multiplayer server uses. */
        Ports?: Port[];
        /** The list of public Ipv4 addresses associated with the server. */
        PublicIPV4Addresses?: PublicIpAddress[];
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

    export interface GetMultiplayerServerLogsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The server ID of multiplayer server to get logs for. */
        ServerId: string;

    }

    export interface GetMultiplayerServerLogsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** URL for logs download. */
        LogDownloadUrl?: string;

    }

    export interface GetMultiplayerSessionLogsBySessionIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The server ID of multiplayer server to get logs for. */
        SessionId: string;

    }

    export interface GetQueueStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The name of the queue. */
        QueueName: string;

    }

    export interface GetQueueStatisticsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The current number of players in the matchmaking queue, who are waiting to be matched. */
        NumberOfPlayersMatching?: number;
        /** Statistics representing the time (in seconds) it takes for tickets to find a match. */
        TimeToMatchStatisticsInSeconds?: Statistics;

    }

    export interface GetRemoteLoginEndpointRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer server to get remote login information for. */
        BuildId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The region of the multiplayer server to get remote login information for. */
        Region: string;
        /** The virtual machine ID the multiplayer server is located on. */
        VmId: string;

    }

    export interface GetRemoteLoginEndpointResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The remote login IPV4 address of multiplayer server. */
        IPV4Address?: string;
        /** The remote login port of multiplayer server. */
        Port: number;

    }

    export interface GetServerBackfillTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON
         * object.
         */
        EscapeObject: boolean;
        /** The name of the queue to find a match for. */
        QueueName: string;
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    export interface GetServerBackfillTicketResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state. */
        CancellationReasonString?: string;
        /** The server date and time at which ticket was created. */
        Created: string;
        /** How long to attempt matching this ticket in seconds. */
        GiveUpAfterSeconds: number;
        /** The Id of a match. */
        MatchId?: string;
        /** A list of Users that are part of this ticket, along with their team assignments. */
        Members: MatchmakingPlayerWithTeamAssignment[];
        /** The Id of a match queue. */
        QueueName: string;
        /** The details of the server the members are connected to. */
        ServerDetails: ServerDetails;
        /** The current ticket status. Possible values are: WaitingForMatch, Canceled and Matched. */
        Status: string;
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    export interface GetTitleEnabledForMultiplayerServersStatusRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface GetTitleEnabledForMultiplayerServersStatusResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The enabled status for the multiplayer server features for the title. */
        Status?: string;

    }

    export interface GetTitleMultiplayerServersQuotaChangeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Id of the change request to get. */
        RequestId: string;

    }

    export interface GetTitleMultiplayerServersQuotaChangeResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The change request for this title. */
        Change?: QuotaChange;

    }

    export interface GetTitleMultiplayerServersQuotasRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface GetTitleMultiplayerServersQuotasResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The various quotas for multiplayer servers for the title. */
        Quotas?: TitleMultiplayerServersQuotas;

    }

    export interface InstrumentationConfiguration {
        /** Designates whether windows instrumentation configuration will be enabled for this Build */
        IsEnabled?: boolean;
        /**
         * This property is deprecated, use IsEnabled. The list of processes to be monitored on a VM for this build. Providing
         * processes will turn on performance metrics collection for this build. Process names should not include extensions. If
         * the game server process is: GameServer.exe; then, ProcessesToMonitor = [ GameServer ]
         */
        ProcessesToMonitor?: string[];

    }

    export interface InviteToLobbyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity invited to the lobby. */
        InviteeEntity?: EntityKey;
        /** The id of the lobby. */
        LobbyId?: string;
        /** The member entity sending the invite. Must be a member of the lobby. */
        MemberEntity?: EntityKey;

    }

    export interface JoinArrangedLobbyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The policy indicating who is allowed to join the lobby, and the visibility to queries. May be 'Public', 'Friends' or
         * 'Private'. Public means the lobby is both visible in queries and any player may join, including invited players. Friends
         * means that users who are bidirectional friends of members in the lobby may search to find friend lobbies, to retrieve
         * its connection string. Private means the lobby is not visible in queries, and a player must receive an invitation to
         * join. Defaults to 'Public' on creation. Can only be changed by the lobby owner.
         */
        AccessPolicy?: string;
        /**
         * A field which indicates which lobby the user will be joining. This field is opaque to everyone except the Lobby service
         * and the creator of the arrangementString (Matchmaking). This string defines a unique identifier for the arranged lobby
         * as well as the title and member the string is valid for. Arrangement strings have an expiration.
         */
        ArrangementString: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The maximum number of players allowed in the lobby. The value must be between 2 and 128. */
        MaxPlayers: number;
        /**
         * The private key-value pairs used by the member to communicate information to other members and the owner. Visible to all
         * entities in the lobby. At most 30 key-value pairs may be stored here, keys are limited to 30 characters and values to
         * 1000. The total size of all memberData values may not exceed 4096 bytes. Keys are case sensitive.
         */
        MemberData?: { [key: string]: string | null };
        /** The member entity who is joining the lobby. The first member to join will be the lobby owner. */
        MemberEntity: EntityKey;
        /**
         * The policy for how a new owner is chosen. May be 'Automatic', 'Manual' or 'None'. Can only be specified by clients. If
         * client-owned and 'Automatic' - The Lobby service will automatically assign another connected owner when the current
         * owner leaves or disconnects. The useConnections property must be true. If client - owned and 'Manual' - Ownership is
         * protected as long as the current owner is connected. If the current owner leaves or disconnects any member may set
         * themselves as the current owner. The useConnections property must be true. If client-owned and 'None' - Any member can
         * set ownership. The useConnections property can be either true or false.
         */
        OwnerMigrationPolicy?: string;
        /**
         * A setting to control whether connections are used. Defaults to true. When true, notifications are sent to subscribed
         * players, disconnect detection removes connectionHandles, only owner migration policies using connections are allowed,
         * and lobbies must have at least one connected member to be searchable or be a server hosted lobby with a connected
         * server. If false, then notifications are not sent, connections are not allowed, and lobbies do not need connections to
         * be searchable.
         */
        UseConnections: boolean;

    }

    export interface JoinLobbyAsServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * A field which indicates which lobby the game_server will be joining. This field is opaque to everyone except the Lobby
         * service.
         */
        ConnectionString: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * The private key-value pairs which are visible to all entities in the lobby but can only be modified by the joined
         * server.At most 30 key - value pairs may be stored here, keys are limited to 30 characters and values to 1000.The total
         * size of all serverData values may not exceed 4096 bytes.
         */
        ServerData?: { [key: string]: string | null };
        /**
         * The game_server entity which is joining the Lobby. If a different game_server entity has already joined the request will
         * fail unless the joined entity is disconnected, in which case the incoming game_server entity will replace the
         * disconnected entity.
         */
        ServerEntity: EntityKey;

    }

    export interface JoinLobbyAsServerResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Successfully joined lobby's id. */
        LobbyId: string;

    }

    export interface JoinLobbyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** A field which indicates which lobby the user will be joining. This field is opaque to everyone except the Lobby service. */
        ConnectionString?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * The private key-value pairs used by the member to communicate information to other members and the owner. Visible to all
         * entities in the lobby. At most 30 key-value pairs may be stored here, keys are limited to 30 characters and values to
         * 1000. The total size of all memberData values may not exceed 4096 bytes.Keys are case sensitive.
         */
        MemberData?: { [key: string]: string | null };
        /** The member entity who is joining the lobby. */
        MemberEntity?: EntityKey;

    }

    export interface JoinLobbyResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Successfully joined lobby's id. */
        LobbyId: string;

    }

    export interface JoinMatchmakingTicketRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The User who wants to join the ticket. Their Id must be listed in PlayFabIdsToMatchWith. */
        Member: MatchmakingPlayer;
        /** The name of the queue to join. */
        QueueName: string;
        /** The Id of the ticket to find a match for. */
        TicketId: string;

    }

    export interface JoinMatchmakingTicketResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface LeaveLobbyAsServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The id of the lobby. */
        LobbyId: string;
        /**
         * The game_server entity leaving the lobby. If the game_server was subscribed to notifications, it will be unsubscribed.
         * If a the given game_server entity is not in the lobby, it will fail.
         */
        ServerEntity: EntityKey;

    }

    export interface LeaveLobbyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The id of the lobby. */
        LobbyId?: string;
        /** The member entity leaving the lobby. */
        MemberEntity?: EntityKey;

    }

    export interface LinearDifferenceRuleExpansion {
        /** This value gets added to Difference at every expansion interval. */
        Delta: number;
        /** Once the total difference reaches this value, expansion stops. Optional. */
        Limit?: number;
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface LinearRegionSelectionRuleExpansion {
        /** This value gets added to MaxLatency at every expansion interval. */
        Delta: number;
        /** Once the max Latency reaches this value, expansion stops. */
        Limit: number;
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface LinearSetIntersectionRuleExpansion {
        /** This value gets added to MinIntersectionSize at every expansion interval. */
        Delta: number;
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface LinearTeamDifferenceRuleExpansion {
        /** This value gets added to Difference at every expansion interval. */
        Delta: number;
        /** Once the total difference reaches this value, expansion stops. Optional. */
        Limit?: number;
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface LinearTeamSizeBalanceRuleExpansion {
        /** This value gets added to Difference at every expansion interval. */
        Delta: number;
        /** Once the total difference reaches this value, expansion stops. Optional. */
        Limit?: number;
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface LinuxInstrumentationConfiguration {
        /** Designates whether Linux instrumentation configuration will be enabled for this Build */
        IsEnabled: boolean;

    }

    export interface ListAssetSummariesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    export interface ListAssetSummariesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of asset summaries. */
        AssetSummaries?: AssetSummary[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    export interface ListBuildAliasesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    export interface ListBuildAliasesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of build aliases for the title */
        BuildAliases?: BuildAliasDetailsResponse[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    export interface ListBuildSummariesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    export interface ListBuildSummariesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of build summaries for a title. */
        BuildSummaries?: BuildSummary[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    export interface ListCertificateSummariesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    export interface ListCertificateSummariesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of game certificates. */
        CertificateSummaries?: CertificateSummary[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    export interface ListContainerImagesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    export interface ListContainerImagesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of container images. */
        Images?: string[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    export interface ListContainerImageTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The container images we want to list tags for. */
        ImageName?: string;
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    export interface ListContainerImageTagsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;
        /** The list of tags for a particular container image. */
        Tags?: string[];

    }

    export interface ListMatchmakingQueuesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface ListMatchmakingQueuesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of matchmaking queue configs for this title. */
        MatchMakingQueues?: MatchmakingQueueConfig[];

    }

    export interface ListMatchmakingTicketsForPlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity key for which to find the ticket Ids. */
        Entity?: EntityKey;
        /** The name of the queue to find a match for. */
        QueueName: string;

    }

    export interface ListMatchmakingTicketsForPlayerResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of ticket Ids the user is a member of. */
        TicketIds: string[];

    }

    export interface ListMultiplayerServersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the multiplayer servers to list. */
        BuildId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The page size for the request. */
        PageSize?: number;
        /** The region the multiplayer servers to list. */
        Region: string;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    export interface ListMultiplayerServersResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of multiplayer server summary details. */
        MultiplayerServerSummaries?: MultiplayerServerSummary[];
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    export interface ListPartyQosServersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface ListPartyQosServersResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The page size on the response. */
        PageSize: number;
        /** The list of QoS servers. */
        QosServers?: QosServer[];
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    export interface ListQosServersForTitleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * Indicates that the response should contain Qos servers for all regions, including those where there are no builds
         * deployed for the title.
         */
        IncludeAllRegions?: boolean;
        /** Indicates the Routing Preference used by the Qos servers. The default Routing Preference is Microsoft */
        RoutingPreference?: string;

    }

    export interface ListQosServersForTitleResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The page size on the response. */
        PageSize: number;
        /** The list of QoS servers. */
        QosServers?: QosServer[];
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    export interface ListSecretSummariesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The page size for the request. */
        PageSize?: number;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    export interface ListSecretSummariesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The page size on the response. */
        PageSize: number;
        /** The list of game secret. */
        SecretSummaries?: SecretSummary[];
        /** The skip token for the paged response. */
        SkipToken?: string;

    }

    export interface ListServerBackfillTicketsForPlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity key for which to find the ticket Ids. */
        Entity: EntityKey;
        /** The name of the queue the tickets are in. */
        QueueName: string;

    }

    export interface ListServerBackfillTicketsForPlayerResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of backfill ticket Ids the user is a member of. */
        TicketIds: string[];

    }

    export interface ListTitleMultiplayerServersQuotaChangesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface ListTitleMultiplayerServersQuotaChangesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** All change requests for this title. */
        Changes?: QuotaChange[];

    }

    export interface ListVirtualMachineSummariesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string build ID of the virtual machines to list. */
        BuildId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The page size for the request. */
        PageSize?: number;
        /** The region of the virtual machines to list. */
        Region: string;
        /** The skip token for the paged request. */
        SkipToken?: string;

    }

    export interface ListVirtualMachineSummariesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The page size on the response. */
        PageSize: number;
        /** The skip token for the paged response. */
        SkipToken?: string;
        /** The list of virtual machine summaries. */
        VirtualMachines?: VirtualMachineSummary[];

    }

    export interface Lobby {
        /** A setting indicating who is allowed to join this lobby, as well as see it in queries. */
        AccessPolicy: string;
        /** A number that increments once for each request that modifies the lobby. */
        ChangeNumber: number;
        /**
         * A string used to join the lobby. This field is populated by the Lobby service. Invites are performed by communicating
         * this connectionString to other players.
         */
        ConnectionString: string;
        /** Lobby data. */
        LobbyData?: { [key: string]: string | null };
        /** Id to uniquely identify a lobby. */
        LobbyId: string;
        /** The maximum number of players allowed in the lobby. */
        MaxPlayers: number;
        /** Array of all lobby members. */
        Members?: Member[];
        /** A setting indicating whether members are allowed to join this lobby. When Locked new members are prevented from joining. */
        MembershipLock: string;
        /** The client or server entity which owns this lobby. */
        Owner?: EntityKey;
        /** A setting indicating the owner migration policy. If server owned, this field is not present. */
        OwnerMigrationPolicy?: string;
        /**
         * An opaque string stored on a SubscribeToLobbyResource call, which indicates the connection an owner or member has with
         * PubSub.
         */
        PubSubConnectionHandle?: string;
        /** Search data. */
        SearchData?: { [key: string]: string | null };
        /** Preview: Lobby joined server. This is not the server owner, rather the server that has joined a client owned lobby. */
        Server?: LobbyServer;
        /** A flag which determines if connections are used. Defaults to true. Only set on create. */
        UseConnections: boolean;

    }

    export interface LobbyEmptyResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface LobbyServer {
        /** Opaque string, stored on a Subscribe call, which indicates the connection a joined server has with PubSub. */
        PubSubConnectionHandle?: string;
        /** Key-value pairs specific to the joined server. */
        ServerData?: { [key: string]: string | null };
        /** The server entity key. */
        ServerEntity?: EntityKey;

    }

    export interface LobbySummary {
        /**
         * A string used to join the lobby.This field is populated by the Lobby service.Invites are performed by communicating this
         * connectionString to other players.
         */
        ConnectionString: string;
        /** The current number of players in the lobby. */
        CurrentPlayers: number;
        /** Id to uniquely identify a lobby. */
        LobbyId: string;
        /** The maximum number of players allowed in the lobby. */
        MaxPlayers: number;
        /** A setting indicating whether members are allowed to join this lobby. When Locked new members are prevented from joining. */
        MembershipLock?: string;
        /** The client or server entity which owns this lobby. */
        Owner: EntityKey;
        /** Search data. */
        SearchData?: { [key: string]: string | null };

    }

    export interface MatchmakingPlayer {
        /** The user's attributes custom to the title. */
        Attributes?: MatchmakingPlayerAttributes;
        /** The entity key of the matchmaking user. */
        Entity: EntityKey;

    }

    export interface MatchmakingPlayerAttributes {
        /** A data object representing a user's attributes. */
        DataObject?: any;
        /** An escaped data object representing a user's attributes. */
        EscapedDataObject?: string;

    }

    export interface MatchmakingPlayerWithTeamAssignment {
        /**
         * The user's attributes custom to the title. These attributes will be null unless the request has ReturnMemberAttributes
         * flag set to true.
         */
        Attributes?: MatchmakingPlayerAttributes;
        /** The entity key of the matchmaking user. */
        Entity: EntityKey;
        /** The Id of the team the User is assigned to. */
        TeamId?: string;

    }

    export interface MatchmakingQueueConfig {
        /** This is the buildAlias that will be used to allocate the multiplayer server for the match. */
        BuildAliasParams?: BuildAliasParams;
        /** This is the buildId that will be used to allocate the multiplayer server for the match. */
        BuildId?: string;
        /** List of difference rules used to find an optimal match. */
        DifferenceRules?: DifferenceRule[];
        /** List of match total rules used to find an optimal match. */
        MatchTotalRules?: MatchTotalRule[];
        /** Maximum number of players in a match. */
        MaxMatchSize: number;
        /** Maximum number of players in a ticket. Optional. */
        MaxTicketSize?: number;
        /** Minimum number of players in a match. */
        MinMatchSize: number;
        /** Unique identifier for a Queue. Chosen by the developer. */
        Name: string;
        /** Region selection rule used to find an optimal match. */
        RegionSelectionRule?: RegionSelectionRule;
        /** Boolean flag to enable server allocation for the queue. */
        ServerAllocationEnabled: boolean;
        /** List of set intersection rules used to find an optimal match. */
        SetIntersectionRules?: SetIntersectionRule[];
        /** Controls which statistics are visible to players. */
        StatisticsVisibilityToPlayers?: StatisticsVisibilityToPlayers;
        /** List of string equality rules used to find an optimal match. */
        StringEqualityRules?: StringEqualityRule[];
        /** List of team difference rules used to find an optimal match. */
        TeamDifferenceRules?: TeamDifferenceRule[];
        /** The team configuration for a match. This may be null if there are no teams. */
        Teams?: MatchmakingQueueTeam[];
        /** Team size balance rule used to find an optimal match. */
        TeamSizeBalanceRule?: TeamSizeBalanceRule;
        /** Team ticket size similarity rule used to find an optimal match. */
        TeamTicketSizeSimilarityRule?: TeamTicketSizeSimilarityRule;

    }

    export interface MatchmakingQueueTeam {
        /** The maximum number of players required for the team. */
        MaxTeamSize: number;
        /** The minimum number of players required for the team. */
        MinTeamSize: number;
        /** A name to identify the team. This is case insensitive. */
        Name: string;

    }

    export interface MatchTotalRule {
        /** Description of the attribute used by this rule to match tickets. */
        Attribute: QueueRuleAttribute;
        /** Collection of fields relating to expanding this rule at set intervals. */
        Expansion?: MatchTotalRuleExpansion;
        /** The maximum total value for a group. Must be >= Min. */
        Max: number;
        /** The minimum total value for a group. Must be >=2. */
        Min: number;
        /** Friendly name chosen by developer. */
        Name: string;
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number;
        /** The relative weight of this rule compared to others. */
        Weight: number;

    }

    export interface MatchTotalRuleExpansion {
        /** Manually specify the values to use for each expansion interval. When this is set, Max is ignored. */
        MaxOverrides?: OverrideDouble[];
        /** Manually specify the values to use for each expansion interval. When this is set, Min is ignored. */
        MinOverrides?: OverrideDouble[];
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface Member {
        /** Key-value pairs specific to member. */
        MemberData?: { [key: string]: string | null };
        /** The member entity key. */
        MemberEntity?: EntityKey;
        /** Opaque string, stored on a Subscribe call, which indicates the connection an owner or member has with PubSub. */
        PubSubConnectionHandle?: string;

    }

    type MembershipLock = "Unlocked"

        | "Locked";

    export interface MonitoringApplicationConfiguration {
        /** Asset which contains the monitoring application files and scripts. */
        AssetReference: AssetReference;
        /** Execution script name, this will be the main executable for the monitoring application. */
        ExecutionScriptName: string;
        /** Installation script name, this will be run before the ExecutionScript. */
        InstallationScriptName?: string;
        /** Timespan the monitoring application will be kept alive when running from the start of the VM */
        OnStartRuntimeInMinutes?: number;

    }

    export interface MonitoringApplicationConfigurationParams {
        /** Asset which contains the monitoring application files and scripts. */
        AssetReference: AssetReferenceParams;
        /** Execution script name, this will be the main executable for the monitoring application. */
        ExecutionScriptName: string;
        /** Installation script name, this will be run before the ExecutionScript. */
        InstallationScriptName?: string;
        /** Timespan the monitoring application will be kept alive when running from the start of the VM */
        OnStartRuntimeInMinutes?: number;

    }

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

    type OsPlatform = "Windows"

        | "Linux";

    export interface OverrideDouble {
        /** The custom expansion value. */
        Value: number;

    }

    export interface OverrideUnsignedInt {
        /** The custom expansion value. */
        Value: number;

    }

    type OwnerMigrationPolicy = "None"

        | "Automatic"
        | "Manual"
        | "Server";

    export interface PaginationRequest {
        /** Continuation token returned as a result in a previous FindLobbies call. Cannot be specified by clients. */
        ContinuationToken?: string;
        /** The number of lobbies that should be retrieved. Cannot be specified by servers, clients may specify any value up to 50 */
        PageSizeRequested?: number;

    }

    export interface PaginationResponse {
        /** Continuation token returned by server call. Not returned for clients */
        ContinuationToken?: string;
        /** The number of lobbies that matched the search request. */
        TotalMatchedLobbyCount?: number;

    }

    export interface PartyInvitationConfiguration {
        /**
         * The list of PlayFab EntityKeys that the invitation allows to authenticate into the network. If this list is empty, all
         * users are allowed to authenticate using the invitation's identifier. This list may contain no more than 1024 items.
         */
        EntityKeys?: EntityKey[];
        /** The invite identifier for this party. If this value is specified, it must be no longer than 127 characters. */
        Identifier?: string;
        /** Controls which participants can revoke this invite. */
        Revocability?: string;

    }

    type PartyInvitationRevocability = "Creator"

        | "Anyone";

    export interface PartyNetworkConfiguration {
        /** Controls whether and how to support direct peer-to-peer connection attempts among devices in the network. */
        DirectPeerConnectivityOptions?: string;
        /** The maximum number of devices allowed to connect to the network. Must be between 1 and 32, inclusive. */
        MaxDevices: number;
        /** The maximum number of devices allowed per user. Must be greater than 0. */
        MaxDevicesPerUser: number;
        /** The maximum number of endpoints allowed per device. Must be between 0 and 32, inclusive. */
        MaxEndpointsPerDevice: number;
        /** The maximum number of unique users allowed in the network. Must be greater than 0. */
        MaxUsers: number;
        /** The maximum number of users allowed per device. Must be between 1 and 8, inclusive. */
        MaxUsersPerDevice: number;
        /**
         * An optionally-specified configuration for the initial invitation for this party. If not provided, default configuration
         * values will be used: a title-unique invitation identifier will be generated, the revocability will be Anyone, and the
         * EntityID list will be empty.
         */
        PartyInvitationConfiguration?: PartyInvitationConfiguration;

    }

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

    export interface PublicIpAddress {
        /** FQDN of the public IP */
        FQDN: string;
        /** Server IP Address */
        IpAddress: string;
        /** Routing Type of the public IP. */
        RoutingType: string;

    }

    export interface QosServer {
        /** The region the QoS server is located in. */
        Region?: string;
        /** The QoS server URL. */
        ServerUrl?: string;

    }

    export interface QueueRuleAttribute {
        /** Specifies which attribute in a ticket to use. */
        Path: string;
        /** Specifies which source the attribute comes from. */
        Source: string;

    }

    export interface QuotaChange {
        /** A brief description of the requested changes. */
        ChangeDescription?: string;
        /** Requested changes to make to the titles cores quota. */
        Changes?: CoreCapacityChange[];
        /** Whether or not this request is pending a review. */
        IsPendingReview: boolean;
        /** Additional information about this request that our team can use to better understand the requirements. */
        Notes?: string;
        /** Id of the change request. */
        RequestId?: string;
        /** Comments by our team when a request is reviewed. */
        ReviewComments?: string;
        /** Whether or not this request was approved. */
        WasApproved: boolean;

    }

    export interface RegionSelectionRule {
        /**
         * Controls how the Max Latency parameter expands over time. Only one expansion can be set per rule. When this is set,
         * MaxLatency is ignored.
         */
        CustomExpansion?: CustomRegionSelectionRuleExpansion;
        /** Controls how the Max Latency parameter expands over time. Only one expansion can be set per rule. */
        LinearExpansion?: LinearRegionSelectionRuleExpansion;
        /** Specifies the maximum latency that is allowed between the client and the selected server. The value is in milliseconds. */
        MaxLatency: number;
        /** Friendly name chosen by developer. */
        Name: string;
        /** Specifies which attribute in a ticket to use. */
        Path: string;
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number;
        /** The relative weight of this rule compared to others. */
        Weight: number;

    }

    export interface RemoveMatchmakingQueueRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The Id of the matchmaking queue to remove. */
        QueueName?: string;

    }

    export interface RemoveMatchmakingQueueResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface RemoveMemberFromLobbyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The id of the lobby. */
        LobbyId?: string;
        /** The member entity to be removed from the lobby. */
        MemberEntity?: EntityKey;
        /** If true, removed member can never rejoin this lobby. */
        PreventRejoin: boolean;

    }

    export interface RequestMultiplayerServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifiers of the build alias to use for the request. */
        BuildAliasParams?: BuildAliasParams;
        /** The guid string build ID of the multiplayer server to request. */
        BuildId?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
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

    export interface RequestMultiplayerServerResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The identity of the build in which the server was allocated. */
        BuildId?: string;
        /** The connected players in the multiplayer server. */
        ConnectedPlayers?: ConnectedPlayer[];
        /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
        FQDN?: string;
        /** The public IPv4 address of the virtual machine that is hosting this multiplayer server. */
        IPV4Address?: string;
        /** The time (UTC) at which a change in the multiplayer server state was observed. */
        LastStateTransitionTime?: string;
        /** The ports the multiplayer server uses. */
        Ports?: Port[];
        /** The list of public Ipv4 addresses associated with the server. */
        PublicIPV4Addresses?: PublicIpAddress[];
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

    export interface RequestPartyServiceRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The network configuration for this request. */
        NetworkConfiguration: PartyNetworkConfiguration;
        /** A guid string party ID created track the party session over its life. */
        PartyId?: string;
        /**
         * The preferred regions to request a party session from. The party service will iterate through the regions in the
         * specified order and allocate a party session from the first one that is available.
         */
        PreferredRegions: string[];

    }

    export interface RequestPartyServiceResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The invitation identifier supplied in the PartyInvitationConfiguration, or the PlayFab-generated guid if none was
         * supplied.
         */
        InvitationId?: string;
        /** The guid string party ID of the party session. */
        PartyId?: string;
        /** A base-64 encoded string containing the serialized network descriptor for this party. */
        SerializedNetworkDescriptor?: string;

    }

    export interface RolloverContainerRegistryCredentialsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface RolloverContainerRegistryCredentialsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The url of the container registry. */
        DnsName?: string;
        /** The password for accessing the container registry. */
        Password?: string;
        /** The username for accessing the container registry. */
        Username?: string;

    }

    type RoutingType = "Microsoft"

        | "Internet";

    export interface Schedule {
        /** A short description about this schedule. For example, "Game launch on July 15th". */
        Description?: string;
        /**
         * The date and time in UTC at which the schedule ends. If IsRecurringWeekly is true, this schedule will keep renewing for
         * future weeks until disabled or removed.
         */
        EndTime: string;
        /** Disables the schedule. */
        IsDisabled: boolean;
        /** If true, the StartTime and EndTime will get renewed every week. */
        IsRecurringWeekly: boolean;
        /** The date and time in UTC at which the schedule starts. */
        StartTime: string;
        /** The standby target to maintain for the duration of the schedule. */
        TargetStandby: number;

    }

    export interface ScheduledStandbySettings {
        /** When true, scheduled standby will be enabled */
        IsEnabled: boolean;
        /** A list of non-overlapping schedules */
        ScheduleList?: Schedule[];

    }

    export interface Secret {
        /** Optional secret expiration date. */
        ExpirationDate?: string;
        /** A name for the secret. This is used to reference secrets in build configurations. */
        Name: string;
        /** Secret value. */
        Value: string;

    }

    export interface SecretSummary {
        /** Optional secret expiration date. */
        ExpirationDate?: string;
        /** The name of the secret. */
        Name?: string;
        /** The secret version auto-generated after upload. */
        Version?: string;

    }

    export interface ServerDetails {
        /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
        Fqdn?: string;
        /** The IPv4 address of the virtual machine that is hosting this multiplayer server. */
        IPV4Address?: string;
        /** The ports the multiplayer server uses. */
        Ports?: Port[];
        /** The server's region. */
        Region?: string;
        /** The string server ID of the multiplayer server generated by PlayFab. */
        ServerId?: string;

    }

    export interface ServerResourceConstraintParams {
        /** The maximum number of cores that each server is allowed to use. */
        CpuLimit: number;
        /**
         * The maximum number of GiB of memory that each server is allowed to use. WARNING: After exceeding this limit, the server
         * will be killed
         */
        MemoryLimitGB: number;

    }

    type ServerType = "Container"

        | "Process";

    export interface SetIntersectionRule {
        /** Description of the attribute used by this rule to match tickets. */
        Attribute: QueueRuleAttribute;
        /**
         * Describes the behavior when an attribute is not specified in the ticket creation request or in the user's entity
         * profile.
         */
        AttributeNotSpecifiedBehavior: string;
        /**
         * Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this
         * is set, MinIntersectionSize is ignored.
         */
        CustomExpansion?: CustomSetIntersectionRuleExpansion;
        /**
         * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
         * AttributeNotSpecifiedBehavior is UseDefault). Values must be unique.
         */
        DefaultAttributeValue?: string[];
        /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
        LinearExpansion?: LinearSetIntersectionRuleExpansion;
        /** The minimum number of values that must match between sets. */
        MinIntersectionSize: number;
        /** Friendly name chosen by developer. */
        Name: string;
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number;
        /** The relative weight of this rule compared to others. */
        Weight: number;

    }

    export interface SetMatchmakingQueueRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The matchmaking queue config. */
        MatchmakingQueue: MatchmakingQueueConfig;

    }

    export interface SetMatchmakingQueueResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface ShutdownMultiplayerServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** A guid string session ID of the multiplayer server to shut down. */
        SessionId: string;

    }

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

    export interface StatisticsVisibilityToPlayers {
        /** Whether to allow players to view the current number of players in the matchmaking queue. */
        ShowNumberOfPlayersMatching: boolean;
        /** Whether to allow players to view statistics representing the time it takes for tickets to find a match. */
        ShowTimeToMatch: boolean;

    }

    export interface StringEqualityRule {
        /** Description of the attribute used by this rule to match tickets. */
        Attribute: QueueRuleAttribute;
        /**
         * Describes the behavior when an attribute is not specified in the ticket creation request or in the user's entity
         * profile.
         */
        AttributeNotSpecifiedBehavior: string;
        /**
         * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
         * AttributeNotSpecifiedBehavior is false).
         */
        DefaultAttributeValue?: string;
        /**
         * Collection of fields relating to expanding this rule at set intervals. For StringEqualityRules, this is limited to
         * turning the rule off or on during different intervals.
         */
        Expansion?: StringEqualityRuleExpansion;
        /** Friendly name chosen by developer. */
        Name: string;
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number;
        /** The relative weight of this rule compared to others. */
        Weight: number;

    }

    export interface StringEqualityRuleExpansion {
        /** List of bools specifying whether the rule is applied during this expansion. */
        EnabledOverrides: boolean[];
        /** How many seconds before this rule is expanded. */
        SecondsBetweenExpansions: number;

    }

    export interface SubscribeToLobbyResourceRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity performing the subscription. */
        EntityKey: EntityKey;
        /** Opaque string, given to a client upon creating a connection with PubSub. */
        PubSubConnectionHandle: string;
        /** The name of the resource to subscribe to. */
        ResourceId: string;
        /** Version number for the subscription of this resource. */
        SubscriptionVersion: number;
        /** Subscription type. */
        Type: string;

    }

    export interface SubscribeToLobbyResourceResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Topic will be returned in all notifications that are the result of this subscription. */
        Topic: string;

    }

    export interface SubscribeToMatchResourceRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity performing the subscription. The entity must be authorized to use this connectionHandle. */
        EntityKey: EntityKey;
        /**
         * Opaque string, given to a client upon creating a connection with PubSub. Notifications will be sent to the connection
         * associated with this handle.
         */
        PubSubConnectionHandle: string;
        /**
         * The name of the resource to subscribe to. It follows the format {queueName}|{ticketId} for MatchTicketStatusChange. For
         * MatchInvite, ResourceId is @me.
         */
        ResourceId: string;
        /** Version number for the subscription of this resource. Current supported version must be 1. */
        SubscriptionVersion: number;
        /**
         * Subscription type. MatchInvite subscriptions are per-player. MatchTicketStatusChange subscriptions are per-ticket.
         * Subscribe calls are idempotent. Subscribing on the same resource for the same connection results in success.
         */
        Type: string;

    }

    export interface SubscribeToMatchResourceResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Matchmaking resource */
        Topic: string;

    }

    type SubscriptionType = "LobbyChange"

        | "LobbyInvite";

    export interface TeamDifferenceRule {
        /** Description of the attribute used by this rule to match teams. */
        Attribute: QueueRuleAttribute;
        /**
         * Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this
         * is set, Difference is ignored.
         */
        CustomExpansion?: CustomTeamDifferenceRuleExpansion;
        /**
         * The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that
         * AttributeNotSpecifiedBehavior is false).
         */
        DefaultAttributeValue: number;
        /** The allowed difference between any two teams at the start of matchmaking. */
        Difference: number;
        /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
        LinearExpansion?: LinearTeamDifferenceRuleExpansion;
        /** Friendly name chosen by developer. */
        Name: string;
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number;

    }

    export interface TeamSizeBalanceRule {
        /**
         * Controls how the Difference parameter expands over time. Only one expansion can be set per rule. When this is set,
         * Difference is ignored.
         */
        CustomExpansion?: CustomTeamSizeBalanceRuleExpansion;
        /** The allowed difference in team size between any two teams. */
        Difference: number;
        /** Controls how the Difference parameter expands over time. Only one expansion can be set per rule. */
        LinearExpansion?: LinearTeamSizeBalanceRuleExpansion;
        /** Friendly name chosen by developer. */
        Name: string;
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number;

    }

    export interface TeamTicketSizeSimilarityRule {
        /** Friendly name chosen by developer. */
        Name: string;
        /**
         * How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be
         * prioritized over those that don't). Leave blank if this rule is always enforced.
         */
        SecondsUntilOptional?: number;

    }

    type TitleMultiplayerServerEnabledStatus = "Initializing"

        | "Enabled"
        | "Disabled";

    export interface TitleMultiplayerServersQuotas {
        /** The core capacity for the various regions and VM Family */
        CoreCapacities?: CoreCapacity[];

    }

    export interface UnsubscribeFromLobbyResourceRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity which performed the subscription. */
        EntityKey: EntityKey;
        /** Opaque string, given to a client upon creating a connection with PubSub. */
        PubSubConnectionHandle: string;
        /** The name of the resource to unsubscribe from. */
        ResourceId: string;
        /** Version number passed for the subscription of this resource. */
        SubscriptionVersion: number;
        /** Subscription type. */
        Type: string;

    }

    export interface UnsubscribeFromMatchResourceRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The entity performing the unsubscription. The entity must be authorized to use this connectionHandle. */
        EntityKey: EntityKey;
        /** Opaque string, given to a client upon creating a connection with PubSub. */
        PubSubConnectionHandle: string;
        /**
         * The name of the resource to unsubscribe from. It follows the format {queueName}|{ticketId} for MatchTicketStatusChange.
         * For MatchInvite, ResourceId is @me.
         */
        ResourceId: string;
        /** Version number for the unsubscription from this resource. */
        SubscriptionVersion: number;
        /** Type of the subscription to be canceled. */
        Type: string;

    }

    export interface UnsubscribeFromMatchResourceResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface UntagContainerImageRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The container image which tag we want to remove. */
        ImageName?: string;
        /** The tag we want to remove. */
        Tag?: string;

    }

    export interface UpdateBuildAliasRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string alias Id of the alias to be updated. */
        AliasId: string;
        /** The alias name. */
        AliasName?: string;
        /** Array of build selection criteria. */
        BuildSelectionCriteria?: BuildSelectionCriterion[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface UpdateBuildNameRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string ID of the build we want to update the name of. */
        BuildId: string;
        /** The build name. */
        BuildName: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface UpdateBuildRegionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string ID of the build we want to update regions for. */
        BuildId: string;
        /** The updated region configuration that should be applied to the specified build. */
        BuildRegion: BuildRegionParams;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface UpdateBuildRegionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The guid string ID of the build we want to update regions for. */
        BuildId: string;
        /** The updated region configuration that should be applied to the specified build. */
        BuildRegions: BuildRegionParams[];
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface UpdateLobbyAsServerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The id of the lobby. */
        LobbyId: string;
        /**
         * The private key-value pairs which are visible to all entities in the lobby and modifiable by the joined server.
         * Optional. Sets or updates key-value pairs on the lobby. Only the current lobby lobby server can set serverData. Keys may
         * be an arbitrary string of at most 30 characters. The total size of all serverData values may not exceed 4096 bytes.
         * Values are not individually limited. There can be up to 30 key-value pairs stored here. Keys are case sensitive.
         */
        ServerData?: { [key: string]: string | null };
        /**
         * The keys to delete from the lobby serverData. Optional. Optional. Deletes key-value pairs on the lobby. Only the current
         * joined lobby server can delete serverData. All the specified keys will be removed from the serverData. Keys that do not
         * exist in the lobby are a no-op. If the key to delete exists in the serverData (same request) it will result in a bad
         * request.
         */
        ServerDataToDelete?: string[];
        /**
         * The lobby server. Optional. Set a different server as the joined server of the lobby (there can only be 1 joined
         * server). When changing the server the previous server will automatically be unsubscribed.
         */
        ServerEntity?: EntityKey;

    }

    export interface UpdateLobbyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The policy indicating who is allowed to join the lobby, and the visibility to queries. May be 'Public', 'Friends' or
         * 'Private'. Public means the lobby is both visible in queries and any player may join, including invited players. Friends
         * means that users who are bidirectional friends of members in the lobby may search to find friend lobbies, to retrieve
         * its connection string. Private means the lobby is not visible in queries, and a player must receive an invitation to
         * join. Defaults to 'Public' on creation. Can only be changed by the lobby owner.
         */
        AccessPolicy?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /**
         * The private key-value pairs which are visible to all entities in the lobby. Optional. Sets or updates key-value pairs on
         * the lobby. Only the current lobby owner can set lobby data. Keys may be an arbitrary string of at most 30 characters.
         * The total size of all lobbyData values may not exceed 4096 bytes. Values are not individually limited. There can be up
         * to 30 key-value pairs stored here. Keys are case sensitive.
         */
        LobbyData?: { [key: string]: string | null };
        /** The keys to delete from the lobby LobbyData. Optional. Behaves similar to searchDataToDelete, but applies to lobbyData. */
        LobbyDataToDelete?: string[];
        /** The id of the lobby. */
        LobbyId?: string;
        /**
         * The maximum number of players allowed in the lobby. Updates the maximum allowed number of players in the lobby. Only the
         * current lobby owner can set this. If set, the value must be greater than or equal to the number of members currently in
         * the lobby.
         */
        MaxPlayers?: number;
        /**
         * The private key-value pairs used by the member to communicate information to other members and the owner. Optional. Sets
         * or updates new key-value pairs on the caller's member data. New keys will be added with their values and existing keys
         * will be updated with the new values. Visible to all entities in the lobby. At most 30 key-value pairs may be stored
         * here, keys are limited to 30 characters and values to 1000. The total size of all memberData values may not exceed 4096
         * bytes. Keys are case sensitive. Servers cannot specifiy this.
         */
        MemberData?: { [key: string]: string | null };
        /**
         * The keys to delete from the lobby MemberData. Optional. Deletes key-value pairs on the caller's member data. All the
         * specified keys will be removed from the caller's member data. Keys that do not exist are a no-op. If the key to delete
         * exists in the memberData (same request) it will result in a bad request. Servers cannot specifiy this.
         */
        MemberDataToDelete?: string[];
        /** The member entity whose data is being modified. Servers cannot specify this. */
        MemberEntity?: EntityKey;
        /**
         * A setting indicating whether the lobby is locked. May be 'Unlocked' or 'Locked'. When Locked new members are not allowed
         * to join. Defaults to 'Unlocked' on creation. Can only be changed by the lobby owner.
         */
        MembershipLock?: string;
        /**
         * The lobby owner. Optional. Set to transfer ownership of the lobby. If client - owned and 'Automatic' - The Lobby service
         * will automatically assign another connected owner when the current owner leaves or disconnects. useConnections must be
         * true. If client - owned and 'Manual' - Ownership is protected as long as the current owner is connected. If the current
         * owner leaves or disconnects any member may set themselves as the current owner. The useConnections property must be
         * true. If client-owned and 'None' - Any member can set ownership. The useConnections property can be either true or
         * false. For all client-owned lobbies when the owner leaves and a new owner can not be automatically selected - The owner
         * field is set to null. For all client-owned lobbies when the owner disconnects and a new owner can not be automatically
         * selected - The owner field remains unchanged and the current owner retains all owner abilities for the lobby. If
         * server-owned (must be 'Server') - Any server can set ownership. The useConnections property must be true.
         */
        Owner?: EntityKey;
        /**
         * The public key-value pairs which allow queries to differentiate between lobbies. Optional. Sets or updates key-value
         * pairs on the lobby for use with queries. Only the current lobby owner can set search data. New keys will be added with
         * their values and existing keys will be updated with the new values. There can be up to 30 key-value pairs stored here.
         * Keys are of the format string_key1, string_key2... string_key30 for string values, or number_key1, number_key2, ...
         * number_key30 for numeric values. Numeric values are floats. Values can be at most 256 characters long. The total size of
         * all searchData values may not exceed 1024 bytes.Keys are case sensitive.
         */
        SearchData?: { [key: string]: string | null };
        /**
         * The keys to delete from the lobby SearchData. Optional. Deletes key-value pairs on the lobby. Only the current lobby
         * owner can delete search data. All the specified keys will be removed from the search data. Keys that do not exist in the
         * lobby are a no-op.If the key to delete exists in the searchData (same request) it will result in a bad request.
         */
        SearchDataToDelete?: string[];

    }

    export interface UploadCertificateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Forces the certificate renewal if the certificate already exists. Default is false */
        ForceUpdate?: boolean;
        /** The game certificate to upload. */
        GameCertificate: Certificate;

    }

    export interface UploadSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Forces the secret renewal if the secret already exists. Default is false */
        ForceUpdate?: boolean;
        /** The game secret to add. */
        GameSecret: Secret;

    }

    export interface VirtualMachineSummary {
        /** The virtual machine health status. */
        HealthStatus?: string;
        /** The virtual machine state. */
        State?: string;
        /** The virtual machine ID. */
        VmId?: string;

    }

    export interface VmStartupScriptConfiguration {
        /** Optional port requests (name/protocol) that will be used by the VmStartupScript. Max of 5 requests. */
        PortRequests?: VmStartupScriptPortRequest[];
        /** Asset which contains the VmStartupScript script and any other required files. */
        VmStartupScriptAssetReference: AssetReference;

    }

    export interface VmStartupScriptParams {
        /** Optional port requests (name/protocol) that will be used by the VmStartupScript. Max of 5 requests. */
        PortRequests?: VmStartupScriptPortRequestParams[];
        /** Asset which contains the VmStartupScript script and any other required files. */
        VmStartupScriptAssetReference: AssetReferenceParams;

    }

    export interface VmStartupScriptPortRequest {
        /** The name for the port. */
        Name: string;
        /** The protocol for the port. */
        Protocol: string;

    }

    export interface VmStartupScriptPortRequestParams {
        /** The name for the port. */
        Name: string;
        /** The protocol for the port. */
        Protocol: string;

    }

    export interface WindowsCrashDumpConfiguration {
        /** See https://docs.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps for valid values. */
        CustomDumpFlags?: number;
        /** See https://docs.microsoft.com/en-us/windows/win32/wer/collecting-user-mode-dumps for valid values. */
        DumpType?: number;
        /** Designates whether automatic crash dump capturing will be enabled for this Build. */
        IsEnabled: boolean;

    }


}
