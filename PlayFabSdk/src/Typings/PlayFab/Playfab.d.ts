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
