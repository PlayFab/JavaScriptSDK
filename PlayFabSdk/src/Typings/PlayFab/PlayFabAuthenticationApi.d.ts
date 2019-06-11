/// <reference path="Playfab.d.ts" />

declare module PlayFabAuthenticationModule {
    export interface IPlayFabAuthentication {
        ForgetAllCredentials(): void;

        /**
         * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
         * Entity Token.
         * https://api.playfab.com/Documentation/Authentication/method/GetEntityToken
         */
        GetEntityToken(request: PlayFabAuthenticationModels.GetEntityTokenRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.GetEntityTokenResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Method for a server to validate a client provided EntityToken. Only callable by the title entity.
         * https://api.playfab.com/Documentation/Authentication/method/ValidateEntityToken
         */
        ValidateEntityToken(request: PlayFabAuthenticationModels.ValidateEntityTokenRequest, callback: PlayFabModule.ApiCallback<PlayFabAuthenticationModels.ValidateEntityTokenResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabAuthenticationModels {
    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.EntityKey */
    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.EntityLineage */
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

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.ValidateEntityTokenRequest */
    export interface ValidateEntityTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Client EntityToken */
        EntityToken: string;

    }

    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.ValidateEntityTokenResponse */
    export interface ValidateEntityTokenResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The lineage of this profile. */
        Lineage?: EntityLineage;

    }


}
