/// <reference path="Playfab.d.ts" />

declare module PlayFabAuthenticationModule {
    export interface IPlayFabAuthentication {
        ForgetAllCredentials(): void;

        /**
         * Activates the given API key. Active keys may be used for authentication.
         * https://api.playfab.com/Documentation/Authentication/method/ActivateKey
         */
        ActivateKey(request: PlayFabAuthenticationModels.ActivateAPIKeyRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.ActivateAPIKeyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates an API key for the given entity.
         * https://api.playfab.com/Documentation/Authentication/method/CreateKey
         */
        CreateKey(request: PlayFabAuthenticationModels.CreateAPIKeyRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.CreateAPIKeyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deactivates the given API key, causing subsequent authentication attempts with it to fail.Deactivating a key is a way to
         * verify that the key is not in use before deleting it.
         * https://api.playfab.com/Documentation/Authentication/method/DeactivateKey
         */
        DeactivateKey(request: PlayFabAuthenticationModels.DeactivateAPIKeyRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.DeactivateAPIKeyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes the given API key.
         * https://api.playfab.com/Documentation/Authentication/method/DeleteKey
         */
        DeleteKey(request: PlayFabAuthenticationModels.DeleteAPIKeyRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.DeleteAPIKeyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
         * Entity Token.
         * https://api.playfab.com/Documentation/Authentication/method/GetEntityToken
         */
        GetEntityToken(request: PlayFabAuthenticationModels.GetEntityTokenRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.GetEntityTokenResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the API keys associated with the given entity.
         * https://api.playfab.com/Documentation/Authentication/method/GetKeys
         */
        GetKeys(request: PlayFabAuthenticationModels.GetAPIKeysRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.GetAPIKeysResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabAuthenticationModels {
    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.ActivateAPIKeyRequest */
    export interface ActivateAPIKeyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique identifier for the entity API key to activate. */
        APIKeyId?: string;
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.ActivateAPIKeyResponse */
    export interface ActivateAPIKeyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.CreateAPIKeyDetails */
    export interface CreateAPIKeyDetails {
        /**
         * Whether the key is active for authentication. Inactive keys cannot be used to authenticate.Keys can be activated or
         * deactivate using the ActivateKey and DeactivateKey APIs.Deactivating a key is a way to verify that the key is not in use
         * before deleting it.
         */
        Active: boolean;
        /** Unique identifier for the entity API key. Set in the "X - EntityAPIKeyId" in authentication requests. */
        APIKeyId?: string;
        /**
         * Secret used to authenticate requests with the key. Set in the "X - EntityAPIKeyId" in authentication requests.The secret
         * value is returned only once in this response and cannot be retrieved afterward, either via API or in Game Manager.API
         * key secrets should be stored securely only on trusted servers and never distributed in code or configuration to
         * untrusted clients.
         */
        APIKeySecret?: string;
        /** The time the API key was generated, in UTC. */
        Created: string;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.CreateAPIKeyRequest */
    export interface CreateAPIKeyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.CreateAPIKeyResponse */
    export interface CreateAPIKeyResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The created API key */
        Key?: CreateAPIKeyDetails;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.DeactivateAPIKeyRequest */
    export interface DeactivateAPIKeyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique identifier for the entity API key to activate. */
        APIKeyId?: string;
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.DeactivateAPIKeyResponse */
    export interface DeactivateAPIKeyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.DeleteAPIKeyRequest */
    export interface DeleteAPIKeyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique identifier for the entity API key to delete. */
        APIKeyId?: string;
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.DeleteAPIKeyResponse */
    export interface DeleteAPIKeyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.EntityKey */
    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.GetAPIKeyDetails */
    export interface GetAPIKeyDetails {
        /**
         * Whether the key is active for authentication. Inactive keys cannot be used to authenticate.Keys can be activated or
         * deactivate using the SetAPIActivation API.Deactivating a key is a way to verify that the key is not in use be before
         * deleting it.
         */
        Active: boolean;
        /** Unique identifier for the entity API key. Set in the "X - EntityAPIKeyId" in authentication requests. */
        APIKeyId?: string;
        /** The time the API key was generated, in UTC. */
        Created: string;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.GetAPIKeysRequest */
    export interface GetAPIKeysRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.GetAPIKeysResponse */
    export interface GetAPIKeysResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The API keys associated with the given entity. */
        Keys?: GetAPIKeyDetails[];

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.GetEntityTokenRequest */
    export interface GetEntityTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.GetEntityTokenResponse */
    export interface GetEntityTokenResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The token used to set X-EntityToken for all entity based API calls. */
        EntityToken?: string;
        /** The time the token will expire, if it is an expiring token, in UTC. */
        TokenExpiration?: string;

    }


}
