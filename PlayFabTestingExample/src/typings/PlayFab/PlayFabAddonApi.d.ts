/// <reference path="Playfab.d.ts" />

declare module PlayFabAddonModule {
    export interface IPlayFabAddon {
        ForgetAllCredentials(): void;

        /**
         * Creates the Apple addon on a title, or updates it if it already exists.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdateapple
         */
        CreateOrUpdateApple(request: PlayFabAddonModels.CreateOrUpdateAppleRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateAppleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateAppleResponse>>;
        /**
         * Creates the Facebook addon on a title, or updates it if it already exists.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatefacebook
         */
        CreateOrUpdateFacebook(request: PlayFabAddonModels.CreateOrUpdateFacebookRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateFacebookResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateFacebookResponse>>;
        /**
         * Creates the Facebook Instant Games addon on a title, or updates it if it already exists.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatefacebookinstantgames
         */
        CreateOrUpdateFacebookInstantGames(request: PlayFabAddonModels.CreateOrUpdateFacebookInstantGamesRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateFacebookInstantGamesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateFacebookInstantGamesResponse>>;
        /**
         * Creates the Google addon on a title, or updates it if it already exists.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdategoogle
         */
        CreateOrUpdateGoogle(request: PlayFabAddonModels.CreateOrUpdateGoogleRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateGoogleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateGoogleResponse>>;
        /**
         * Creates the Kongregate addon on a title, or updates it if it already exists.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatekongregate
         */
        CreateOrUpdateKongregate(request: PlayFabAddonModels.CreateOrUpdateKongregateRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateKongregateResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateKongregateResponse>>;
        /**
         * Creates the Nintendo addon on a title, or updates it if it already exists.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatenintendo
         */
        CreateOrUpdateNintendo(request: PlayFabAddonModels.CreateOrUpdateNintendoRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateNintendoResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateNintendoResponse>>;
        /**
         * Creates the PSN addon on a title, or updates it if it already exists.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatepsn
         */
        CreateOrUpdatePSN(request: PlayFabAddonModels.CreateOrUpdatePSNRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdatePSNResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdatePSNResponse>>;
        /**
         * Creates the Steam addon on a title, or updates it if it already exists.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatesteam
         */
        CreateOrUpdateSteam(request: PlayFabAddonModels.CreateOrUpdateSteamRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateSteamResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateSteamResponse>>;
        /**
         * Creates the ToxMod addon on a title, or updates it if it already exists.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatetoxmod
         */
        CreateOrUpdateToxMod(request: PlayFabAddonModels.CreateOrUpdateToxModRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateToxModResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateToxModResponse>>;
        /**
         * Creates the Twitch addon on a title, or updates it if it already exists.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/createorupdatetwitch
         */
        CreateOrUpdateTwitch(request: PlayFabAddonModels.CreateOrUpdateTwitchRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateTwitchResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.CreateOrUpdateTwitchResponse>>;
        /**
         * Deletes the Apple addon on a title.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/deleteapple
         */
        DeleteApple(request: PlayFabAddonModels.DeleteAppleRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteAppleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteAppleResponse>>;
        /**
         * Deletes the Facebook addon on a title.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletefacebook
         */
        DeleteFacebook(request: PlayFabAddonModels.DeleteFacebookRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteFacebookResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteFacebookResponse>>;
        /**
         * Deletes the Facebook addon on a title.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletefacebookinstantgames
         */
        DeleteFacebookInstantGames(request: PlayFabAddonModels.DeleteFacebookInstantGamesRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteFacebookInstantGamesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteFacebookInstantGamesResponse>>;
        /**
         * Deletes the Google addon on a title.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletegoogle
         */
        DeleteGoogle(request: PlayFabAddonModels.DeleteGoogleRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteGoogleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteGoogleResponse>>;
        /**
         * Deletes the Kongregate addon on a title.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletekongregate
         */
        DeleteKongregate(request: PlayFabAddonModels.DeleteKongregateRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteKongregateResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteKongregateResponse>>;
        /**
         * Deletes the Nintendo addon on a title.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletenintendo
         */
        DeleteNintendo(request: PlayFabAddonModels.DeleteNintendoRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteNintendoResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteNintendoResponse>>;
        /**
         * Deletes the PSN addon on a title.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletepsn
         */
        DeletePSN(request: PlayFabAddonModels.DeletePSNRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.DeletePSNResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.DeletePSNResponse>>;
        /**
         * Deletes the Steam addon on a title.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletesteam
         */
        DeleteSteam(request: PlayFabAddonModels.DeleteSteamRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteSteamResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteSteamResponse>>;
        /**
         * Deletes the ToxMod addon on a title.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletetoxmod
         */
        DeleteToxMod(request: PlayFabAddonModels.DeleteToxModRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteToxModResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteToxModResponse>>;
        /**
         * Deletes the Twitch addon on a title.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/deletetwitch
         */
        DeleteTwitch(request: PlayFabAddonModels.DeleteTwitchRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteTwitchResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.DeleteTwitchResponse>>;
        /**
         * Gets information of the Apple addon on a title, omits secrets.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/getapple
         */
        GetApple(request: PlayFabAddonModels.GetAppleRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.GetAppleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.GetAppleResponse>>;
        /**
         * Gets information of the Facebook addon on a title, omits secrets.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/getfacebook
         */
        GetFacebook(request: PlayFabAddonModels.GetFacebookRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.GetFacebookResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.GetFacebookResponse>>;
        /**
         * Gets information of the Facebook Instant Games addon on a title, omits secrets.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/getfacebookinstantgames
         */
        GetFacebookInstantGames(request: PlayFabAddonModels.GetFacebookInstantGamesRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.GetFacebookInstantGamesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.GetFacebookInstantGamesResponse>>;
        /**
         * Gets information of the Google addon on a title, omits secrets.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/getgoogle
         */
        GetGoogle(request: PlayFabAddonModels.GetGoogleRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.GetGoogleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.GetGoogleResponse>>;
        /**
         * Gets information of the Kongregate addon on a title, omits secrets.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/getkongregate
         */
        GetKongregate(request: PlayFabAddonModels.GetKongregateRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.GetKongregateResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.GetKongregateResponse>>;
        /**
         * Gets information of the Nintendo addon on a title, omits secrets.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/getnintendo
         */
        GetNintendo(request: PlayFabAddonModels.GetNintendoRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.GetNintendoResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.GetNintendoResponse>>;
        /**
         * Gets information of the PSN addon on a title, omits secrets.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/getpsn
         */
        GetPSN(request: PlayFabAddonModels.GetPSNRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.GetPSNResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.GetPSNResponse>>;
        /**
         * Gets information of the Steam addon on a title, omits secrets.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/getsteam
         */
        GetSteam(request: PlayFabAddonModels.GetSteamRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.GetSteamResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.GetSteamResponse>>;
        /**
         * Gets information of the ToxMod addon on a title, omits secrets.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/gettoxmod
         */
        GetToxMod(request: PlayFabAddonModels.GetToxModRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.GetToxModResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.GetToxModResponse>>;
        /**
         * Gets information of the Twitch addon on a title, omits secrets.
         * https://docs.microsoft.com/rest/api/playfab/addon/addon/gettwitch
         */
        GetTwitch(request: PlayFabAddonModels.GetTwitchRequest, callback: PlayFabModule.ApiCallback<PlayFabAddonModels.GetTwitchResponse>, customData?: any, extraHeaders?: { [key: string]: string }): Promise<PlayFabModule.ApiCallback<PlayFabAddonModels.GetTwitchResponse>>;

    }
}

declare module PlayFabAddonModels {
    export interface CreateOrUpdateAppleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Allow validation of receipts from the Apple production environment. Required for app releases. */
        AllowProduction?: boolean;
        /** Allow validation of receipts from the Apple sandbox environment. Typically used while testing. */
        AllowSandbox?: boolean;
        /** iOS App Bundle ID obtained after setting up your app in the App Store. */
        AppBundleId: string;
        /** AppId obtained after setting up your app in the App Store. */
        AppId?: string;
        /** iOS App Shared Secret obtained after setting up your app in the App Store. */
        AppSharedSecret?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** If an error should be returned if the addon already exists. */
        ErrorIfExists?: boolean;
        /**
         * Ignore expiration date for identity tokens. Be aware that when set to true this can invalidate expired tokens in the
         * case where Apple rotates their signing keys.
         */
        IgnoreExpirationDate?: boolean;
        /** IssuerId obtained after setting up your app in the App Store. */
        IssuerId?: string;
        /** KeyId obtained after setting up your app in the App Store. */
        KeyId?: string;
        /** PrivateKey obtained after setting up your app in the App Store. */
        PrivateKey?: string;
        /** Require secure authentication only for this app. */
        RequireSecureAuthentication?: boolean;

    }

    export interface CreateOrUpdateAppleResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CreateOrUpdateFacebookInstantGamesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Facebook App ID obtained after setting up your app in Facebook Instant Games. */
        AppID: string;
        /** Facebook App Secret obtained after setting up your app in Facebook Instant Games. */
        AppSecret: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** If an error should be returned if the addon already exists. */
        ErrorIfExists?: boolean;

    }

    export interface CreateOrUpdateFacebookInstantGamesResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CreateOrUpdateFacebookRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Facebook App ID obtained after setting up your app in Facebook. */
        AppID: string;
        /** Facebook App Secret obtained after setting up your app in Facebook. */
        AppSecret: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** If an error should be returned if the addon already exists. */
        ErrorIfExists?: boolean;
        /** Email address for purchase dispute notifications. */
        NotificationEmail: string;

    }

    export interface CreateOrUpdateFacebookResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CreateOrUpdateGoogleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Google App License Key obtained after setting up your app in the Google Play developer portal. Required if using Google
         * receipt validation.
         */
        AppLicenseKey?: string;
        /**
         * Google App Package ID obtained after setting up your app in the Google Play developer portal. Required if using Google
         * receipt validation.
         */
        AppPackageID?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** If an error should be returned if the addon already exists. */
        ErrorIfExists?: boolean;
        /**
         * Google OAuth Client ID obtained through the Google Developer Console by creating a new set of "OAuth Client ID".
         * Required if using Google Authentication.
         */
        OAuthClientID?: string;
        /**
         * Google OAuth Client Secret obtained through the Google Developer Console by creating a new set of "OAuth Client ID".
         * Required if using Google Authentication.
         */
        OAuthClientSecret?: string;
        /**
         * Authorized Redirect Uri obtained through the Google Developer Console. This currently defaults to
         * https://oauth.playfab.com/oauth2/google. If you are authenticating players via browser, please update this to your own
         * domain.
         */
        OAuthCustomRedirectUri?: string;
        /** Needed to enable pending purchase handling and subscription processing. */
        ServiceAccountKey?: string;

    }

    export interface CreateOrUpdateGoogleResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CreateOrUpdateKongregateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** If an error should be returned if the addon already exists. */
        ErrorIfExists?: boolean;
        /** Kongregate Secret API Key obtained after setting up your game in your Kongregate developer account. */
        SecretAPIKey: string;

    }

    export interface CreateOrUpdateKongregateResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CreateOrUpdateNintendoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Nintendo Switch Application ID, without the "0x" prefix. */
        ApplicationID?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** List of Nintendo Environments, currently supporting up to 4. Needs Catalog enabled. */
        Environments?: NintendoEnvironment[];
        /** If an error should be returned if the addon already exists. */
        ErrorIfExists?: boolean;

    }

    export interface CreateOrUpdateNintendoResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CreateOrUpdatePSNRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Client ID obtained after setting up your game with Sony. This one is associated with the existing PS4 marketplace. */
        ClientID?: string;
        /** Client secret obtained after setting up your game with Sony. This one is associated with the existing PS4 marketplace. */
        ClientSecret?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** If an error should be returned if the addon already exists. */
        ErrorIfExists?: boolean;
        /**
         * Client ID obtained after setting up your game with Sony. This one is associated with the modern marketplace, which
         * includes PS5, cross-generation for PS4, and unified entitlements.
         */
        NextGenClientID?: string;
        /**
         * Client secret obtained after setting up your game with Sony. This one is associated with the modern marketplace, which
         * includes PS5, cross-generation for PS4, and unified entitlements.
         */
        NextGenClientSecret?: string;

    }

    export interface CreateOrUpdatePSNResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CreateOrUpdateSteamRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Application ID obtained after setting up your app in Valve's developer portal. */
        ApplicationId: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Enforce usage of AzurePlayFab identity in user authentication tickets. */
        EnforceServiceSpecificTickets?: boolean;
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** If an error should be returned if the addon already exists. */
        ErrorIfExists?: boolean;
        /** Sercet Key obtained after setting up your app in Valve's developer portal. */
        SecretKey: string;
        /** Use Steam Payments sandbox endpoint for test transactions. */
        UseSandbox?: boolean;

    }

    export interface CreateOrUpdateSteamResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CreateOrUpdateToxModRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Account ID obtained after creating your ToxMod developer account. */
        AccountId: string;
        /** Account Key obtained after creating your ToxMod developer account. */
        AccountKey: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** Whether ToxMod Addon is Enabled by Title. */
        Enabled: boolean;
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** If an error should be returned if the addon already exists. */
        ErrorIfExists?: boolean;

    }

    export interface CreateOrUpdateToxModResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface CreateOrUpdateTwitchRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Client ID obtained after creating your Twitch developer account. */
        ClientID?: string;
        /** Client Secret obtained after creating your Twitch developer account. */
        ClientSecret?: string;
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;
        /** If an error should be returned if the addon already exists. */
        ErrorIfExists?: boolean;

    }

    export interface CreateOrUpdateTwitchResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteAppleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface DeleteAppleResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteFacebookInstantGamesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface DeleteFacebookInstantGamesResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteFacebookRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface DeleteFacebookResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteGoogleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface DeleteGoogleResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteKongregateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface DeleteKongregateResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteNintendoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface DeleteNintendoResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeletePSNRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface DeletePSNResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteSteamRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface DeleteSteamResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteToxModRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface DeleteToxModResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface DeleteTwitchRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface DeleteTwitchResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
        Type?: string;

    }

    export interface GetAppleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetAppleResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** iOS App Bundle ID obtained after setting up your app in the App Store. */
        AppBundleId?: string;
        /** Addon status. */
        Created: boolean;
        /** Ignore expiration date for identity tokens. */
        IgnoreExpirationDate?: boolean;
        /** Require secure authentication only for this app. */
        RequireSecureAuthentication?: boolean;

    }

    export interface GetFacebookInstantGamesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetFacebookInstantGamesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Facebook App ID obtained after setting up your app in Facebook Instant Games. */
        AppID?: string;
        /** Addon status. */
        Created: boolean;

    }

    export interface GetFacebookRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetFacebookResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Facebook App ID obtained after setting up your app in Facebook. */
        AppID?: string;
        /** Addon status. */
        Created: boolean;
        /** Email address for purchase dispute notifications. */
        NotificationEmail?: string;

    }

    export interface GetGoogleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetGoogleResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * Google App Package ID obtained after setting up your app in the Google Play developer portal. Required if using Google
         * receipt validation.
         */
        AppPackageID?: string;
        /** Addon status. */
        Created: boolean;
        /**
         * Google OAuth Client ID obtained through the Google Developer Console by creating a new set of "OAuth Client ID".
         * Required if using Google Authentication.
         */
        OAuthClientID?: string;
        /**
         * Authorized Redirect Uri obtained through the Google Developer Console. This currently defaults to
         * https://oauth.playfab.com/oauth2/google. If you are authenticating players via browser, please update this to your own
         * domain.
         */
        OauthCustomRedirectUri?: string;

    }

    export interface GetKongregateRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetKongregateResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Addon status. */
        Created: boolean;

    }

    export interface GetNintendoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetNintendoResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Nintendo Switch Application ID, without the "0x" prefix. */
        ApplicationID?: string;
        /** Addon status. */
        Created: boolean;
        /** List of Nintendo Environments, currently supporting up to 4. */
        Environments?: NintendoEnvironment[];

    }

    export interface GetPSNRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetPSNResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Client ID obtained after setting up your game with Sony. This one is associated with the existing PS4 marketplace. */
        ClientID?: string;
        /** Addon status. */
        Created: boolean;
        /**
         * Client ID obtained after setting up your game with Sony. This one is associated with the modern marketplace, which
         * includes PS5, cross-generation for PS4, and unified entitlements.
         */
        NextGenClientID?: string;

    }

    export interface GetSteamRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetSteamResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Application ID obtained after setting up your game in Valve's developer portal. */
        ApplicationId?: string;
        /** Addon status. */
        Created: boolean;
        /** Enforce usage of AzurePlayFab identity in user authentication tickets. */
        EnforceServiceSpecificTickets?: boolean;
        /** Use Steam Payments sandbox endpoint for test transactions. */
        UseSandbox?: boolean;

    }

    export interface GetToxModRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetToxModResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Account ID obtained after creating your Twitch developer account. */
        AccountId?: string;
        /** Account Key obtained after creating your Twitch developer account. */
        AccountKey?: string;
        /** Addon status. */
        Created: boolean;
        /** Whether the ToxMod Addon is enabled by the title. */
        Enabled: boolean;

    }

    export interface GetTwitchRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
        CustomTags?: { [key: string]: string | null };
        /** The optional entity to perform this action on. Defaults to the currently logged in entity. */
        Entity?: EntityKey;

    }

    export interface GetTwitchResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Client ID obtained after creating your Twitch developer account. */
        ClientID?: string;
        /** Addon status. */
        Created: boolean;

    }

    export interface NintendoEnvironment {
        /** Client ID for the Nintendo Environment. */
        ClientID?: string;
        /** Client Secret for the Nintendo Environment. */
        ClientSecret?: string;
        /** ID for the Nintendo Environment. */
        ID?: string;

    }


}
