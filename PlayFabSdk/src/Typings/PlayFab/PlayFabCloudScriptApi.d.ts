/// <reference path="Playfab.d.ts" />

declare module PlayFabCloudScriptModule {
    export interface IPlayFabCloudScript {
        ForgetAllCredentials(): void;

        /**
         * Cloud Script is one of PlayFab's most versatile features. It allows client code to request execution of any kind of
         * custom server-side functionality you can implement, and it can be used in conjunction with virtually anything.
         * https://api.playfab.com/Documentation/CloudScript/method/ExecuteEntityCloudScript
         */
        ExecuteEntityCloudScript(request: PlayFabCloudScriptModels.ExecuteEntityCloudScriptRequest, callback: PlayFabModule.ApiCallback<PlayFabCloudScriptModels.ExecuteCloudScriptResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabCloudScriptModels {
    type CloudScriptRevisionOption = "Live"
        | "Latest"
        | "Specific";

    /** https://api.playfab.com/Documentation/CloudScript/datatype/PlayFab.CloudScript.Models/PlayFab.CloudScript.Models.EntityKey */
    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string;

    }

    /** https://api.playfab.com/Documentation/CloudScript/datatype/PlayFab.CloudScript.Models/PlayFab.CloudScript.Models.ExecuteCloudScriptResult */
    export interface ExecuteCloudScriptResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Number of PlayFab API requests issued by the CloudScript function */
        APIRequestsIssued: number;
        /** Information about the error, if any, that occurred during execution */
        Error?: ScriptExecutionError;
        ExecutionTimeSeconds: number;
        /** The name of the function that executed */
        FunctionName?: string;
        /** The object returned from the CloudScript function, if any */
        FunctionResult?: any;
        /**
         * Flag indicating if the FunctionResult was too large and was subsequently dropped from this event. This only occurs if
         * the total event size is larger than 350KB.
         */
        FunctionResultTooLarge?: boolean;
        /** Number of external HTTP requests issued by the CloudScript function */
        HttpRequestsIssued: number;
        /**
         * Entries logged during the function execution. These include both entries logged in the function code using log.info()
         * and log.error() and error entries for API and HTTP request failures.
         */
        Logs?: LogStatement[];
        /**
         * Flag indicating if the logs were too large and were subsequently dropped from this event. This only occurs if the total
         * event size is larger than 350KB after the FunctionResult was removed.
         */
        LogsTooLarge?: boolean;
        MemoryConsumedBytes: number;
        /**
         * Processor time consumed while executing the function. This does not include time spent waiting on API calls or HTTP
         * requests.
         */
        ProcessorTimeSeconds: number;
        /** The revision of the CloudScript that executed */
        Revision: number;

    }

    /** https://api.playfab.com/Documentation/CloudScript/datatype/PlayFab.CloudScript.Models/PlayFab.CloudScript.Models.ExecuteEntityCloudScriptRequest */
    export interface ExecuteEntityCloudScriptRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The name of the CloudScript function to execute */
        FunctionName: string;
        /** Object that is passed in to the function as the first argument */
        FunctionParameter?: any;
        /**
         * Generate a 'entity_executed_cloudscript' PlayStream event containing the results of the function execution and other
         * contextual information. This event will show up in the PlayStream debugger console for the player in Game Manager.
         */
        GeneratePlayStreamEvent?: boolean;
        /**
         * Option for which revision of the CloudScript to execute. 'Latest' executes the most recently created revision, 'Live'
         * executes the current live, published revision, and 'Specific' executes the specified revision. The default value is
         * 'Specific', if the SpecificRevision parameter is specified, otherwise it is 'Live'.
         */
        RevisionSelection?: string;
        /** The specific revision to execute, when RevisionSelection is set to 'Specific' */
        SpecificRevision?: number;

    }

    /** https://api.playfab.com/Documentation/CloudScript/datatype/PlayFab.CloudScript.Models/PlayFab.CloudScript.Models.LogStatement */
    export interface LogStatement {
        /** Optional object accompanying the message as contextual information */
        Data?: any;
        /** 'Debug', 'Info', or 'Error' */
        Level?: string;
        Message?: string;

    }

    /** https://api.playfab.com/Documentation/CloudScript/datatype/PlayFab.CloudScript.Models/PlayFab.CloudScript.Models.ScriptExecutionError */
    export interface ScriptExecutionError {
        /**
         * Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded,
         * CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError
         */
        Error?: string;
        /** Details about the error */
        Message?: string;
        /** Point during the execution of the script at which the error occurred, if any */
        StackTrace?: string;

    }


}
