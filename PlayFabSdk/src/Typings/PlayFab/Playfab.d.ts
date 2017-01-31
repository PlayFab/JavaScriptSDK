declare module PlayFabModule {
    export interface ISettings {
        titleId: string;
        developerSecretKey: string;
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

