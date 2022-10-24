/// <reference path="Playfab.d.ts" />

declare module PlayFabAuthenticationModule {
    export interface IPlayFabAuthentication {
        ForgetAllCredentials(): void;

        /**
         * Create a game_server entity token and return a new or existing game_server entity.
         * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/authenticategameserverwithcustomid
         */
        AuthenticateGameServerWithCustomId(request: PlayFabAuthenticationModels.AuthenticateCustomIdRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.AuthenticateCustomIdResult>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAuthenticationModels.AuthenticateCustomIdResult>>;
        /**
         * Delete a game_server entity.
         * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/delete
         */
        Delete(request: PlayFabAuthenticationModels.DeleteRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAuthenticationModels.EmptyResponse>>;
        /**
         * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
         * Entity Token.
         * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/getentitytoken
         */
        GetEntityToken(request: PlayFabAuthenticationModels.GetEntityTokenRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.GetEntityTokenResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAuthenticationModels.GetEntityTokenResponse>>;
        /**
         * Method for a server to validate a client provided EntityToken. Only callable by the title entity.
         * https://docs.microsoft.com/rest/api/playfab/authentication/authentication/validateentitytoken
         */
        ValidateEntityToken(request: PlayFabAuthenticationModels.ValidateEntityTokenRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.ValidateEntityTokenResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAuthenticationModels.ValidateEntityTokenResponse>>;

    }
}

declare module PlayFabAuthenticationModels {
    export interface AuthenticateCustomIdRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The customId used to create and retrieve game_server entity tokens. This is unique at the title level. CustomId must be
         * between 32 and 100 characters.
         */
        CustomId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };

    }

    export interface AuthenticateCustomIdResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The token generated used to set X-EntityToken for game_server calls. */
        EntityToken?: EntityTokenResponse;
        /** True if the account was newly created on this authentication. */
        NewlyCreated: boolean;

    }

    export interface DeleteRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The game_server entity to be removed. */
        Entity: EntityKey;

    }

    export interface EmptyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string;

    }

    export interface EntityLineage {
        /** The Character Id of the associated entity. */
        CharacterId?: string;
        /** The Group Id of the associated entity. */
        GroupId?: string;
        /** The Master Player Account Id of the associated entity. */
        MasterPlayerAccountId?: string;
        /** The Namespace Id of the associated entity. */
        NamespaceId?: string;
        /** The Title Id of the associated entity. */
        TitleId?: string;
        /** The Title Player Account Id of the associated entity. */
        TitlePlayerAccountId?: string;

    }

    export interface EntityTokenResponse {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The token used to set X-EntityToken for all entity based API calls. */
        EntityToken?: string;
        /** The time the token will expire, if it is an expiring token, in UTC. */
        TokenExpiration?: string;

    }

    export interface GetEntityTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetEntityTokenResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The token used to set X-EntityToken for all entity based API calls. */
        EntityToken?: string;
        /** The time the token will expire, if it is an expiring token, in UTC. */
        TokenExpiration?: string;

    }

    type IdentifiedDeviceType = "Unknown"

        | "XboxOne"
        | "Scarlett";

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
        | "GooglePlayGames";

    export interface ValidateEntityTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Client EntityToken */
        EntityToken: string;

    }

    export interface ValidateEntityTokenResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The authenticated device for this entity, for the given login */
        IdentifiedDeviceType?: string;
        /** The identity provider for this entity, for the given login */
        IdentityProvider?: string;
        /** The ID issued by the identity provider, e.g. a XUID on Xbox Live */
        IdentityProviderIssuedId?: string;
        /** The lineage of this profile. */
        Lineage?: EntityLineage;

    }


}
