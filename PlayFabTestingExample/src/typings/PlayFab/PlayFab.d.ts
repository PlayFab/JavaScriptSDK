/// <reference path="PlayFabAdminApi.d.ts" />
/// <reference path="PlayFabMatchmakerApi.d.ts" />
/// <reference path="PlayFabServerApi.d.ts" />
/// <reference path="PlayFabClientApi.d.ts" />

declare module PlayFabModule {
    export interface ISettings {
        titleId: string;
        developerSecretKey: string;
        GlobalHeaderInjection?: { [key: string]: string };
        advertisingIdType: string;
        advertisingIdValue: string;
        disableAdvertising: boolean;
        AD_TYPE_IDFA: string;
        AD_TYPE_ANDROID_ID: string;
    }
    export interface IPlayFabRequestCommon { }
    export interface IPlayFabError {
        code: number;
        status: string;
        error: string;
        errorCode: number;
        errorMessage: string;
        errorDetails?: { [key: string]: string[] };
        request?: any;
        customData?: any;
    }
    export interface SuccessContainer<TResult extends IPlayFabResultCommon> extends IPlayFabError {
        data: TResult;
    }
    export interface IPlayFabResultCommon extends IPlayFabError { }

    export interface ApiCallback<TResult extends IPlayFabResultCommon> { (result: SuccessContainer<TResult>, error: IPlayFabError): void }
}

declare var PlayFab: {
    buildIdentifier: string;
    sdkVersion: string;
    GenerateErrorReport(IPlayFabError): string;
    settings: PlayFabModule.ISettings;
    AdminApi: PlayFabAdminModule.IPlayFabAdmin;
    MatchmakerApi: PlayFabMatchmakerModule.IPlayFabMatchmaker;
    ServerApi: PlayFabServerModule.IPlayFabServer;
    ClientApi: PlayFabClientModule.IPlayFabClient;

};
// Continue to support older usage
declare var PlayFabAdminSDK: PlayFabAdminModule.IPlayFabAdmin;
declare var PlayFabMatchmakerSDK: PlayFabMatchmakerModule.IPlayFabMatchmaker;
declare var PlayFabServerSDK: PlayFabServerModule.IPlayFabServer;
declare var PlayFabClientSDK: PlayFabClientModule.IPlayFabClient;

