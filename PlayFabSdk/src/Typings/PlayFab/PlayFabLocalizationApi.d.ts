/// <reference path="Playfab.d.ts" />

declare module PlayFabLocalizationModule {
    export interface IPlayFabLocalization {
        ForgetAllCredentials(): void;

        /**
         * Retrieves the list of allowed languages, only accessible by title entities
         * https://docs.microsoft.com/rest/api/playfab/localization/localization/getlanguagelist
         */
        GetLanguageList(request: PlayFabLocalizationModels.GetLanguageListRequest, callback: PlayFabModule.ApiCallback<PlayFabLocalizationModels.GetLanguageListResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabLocalizationModels {
    export interface GetLanguageListRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    export interface GetLanguageListResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of allowed languages, in BCP47 two-letter format */
        LanguageList?: string[];

    }


}
