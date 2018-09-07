/// <reference path="Playfab.d.ts" />

declare module PlayFabLocalizationModule {
    export interface IPlayFabLocalization {
        ForgetAllCredentials(): void;

        /**
         * Retrieves the list of allowed languages, only accessible by title entities
         * https://api.playfab.com/Documentation/Localization/method/GetLanguageList
         */
        GetLanguageList(request: PlayFabLocalizationModels.GetLanguageListRequest, callback: PlayFabModule.ApiCallback<PlayFabLocalizationModels.GetLanguageListResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabLocalizationModels {
    /** https://api.playfab.com/Documentation/Localization/datatype/PlayFab.Localization.Models/PlayFab.Localization.Models.GetLanguageListRequest */
    export interface GetLanguageListRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Localization/datatype/PlayFab.Localization.Models/PlayFab.Localization.Models.GetLanguageListResponse */
    export interface GetLanguageListResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of allowed languages, in BCP47 two-letter format */
        LanguageList?: string[];

    }


}
