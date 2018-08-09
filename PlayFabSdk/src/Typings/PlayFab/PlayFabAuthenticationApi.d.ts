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

    }
}

declare module PlayFabAuthenticationModels {
    /** https://api.playfab.com/Documentation/Authentication/datatype/PlayFab.Authentication.Models/PlayFab.Authentication.Models.EntityKey */
    export interface EntityKey {
        /** Entity profile ID. */
        Id: string;
        /** Entity type. Optional to be used but one of EntityType or EntityTypeString must be set. */
        Type?: string;
        /** Entity type. Optional to be used but one of EntityType or EntityTypeString must be set. */
        TypeString?: string;

    }

    type EntityTypes = "title"
        | "master_player_account"
        | "title_player_account"
        | "character"
        | "group"
        | "service";

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
