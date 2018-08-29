/// <reference path="Playfab.d.ts" />

declare module PlayFabDataModule {
    export interface IPlayFabData {
        ForgetAllCredentials(): void;

        /**
         * Abort pending file uploads to an entity's profile.
         * https://api.playfab.com/Documentation/Data/method/AbortFileUploads
         */
        AbortFileUploads(request: PlayFabDataModels.AbortFileUploadsRequest, callback: PlayFabModule.ApiCallback<PlayFabDataModels.AbortFileUploadsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete files on an entity's profile.
         * https://api.playfab.com/Documentation/Data/method/DeleteFiles
         */
        DeleteFiles(request: PlayFabDataModels.DeleteFilesRequest, callback: PlayFabModule.ApiCallback<PlayFabDataModels.DeleteFilesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Finalize file uploads to an entity's profile.
         * https://api.playfab.com/Documentation/Data/method/FinalizeFileUploads
         */
        FinalizeFileUploads(request: PlayFabDataModels.FinalizeFileUploadsRequest, callback: PlayFabModule.ApiCallback<PlayFabDataModels.FinalizeFileUploadsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves file metadata from an entity's profile.
         * https://api.playfab.com/Documentation/Data/method/GetFiles
         */
        GetFiles(request: PlayFabDataModels.GetFilesRequest, callback: PlayFabModule.ApiCallback<PlayFabDataModels.GetFilesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves objects from an entity's profile.
         * https://api.playfab.com/Documentation/Data/method/GetObjects
         */
        GetObjects(request: PlayFabDataModels.GetObjectsRequest, callback: PlayFabModule.ApiCallback<PlayFabDataModels.GetObjectsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Initiates file uploads to an entity's profile.
         * https://api.playfab.com/Documentation/Data/method/InitiateFileUploads
         */
        InitiateFileUploads(request: PlayFabDataModels.InitiateFileUploadsRequest, callback: PlayFabModule.ApiCallback<PlayFabDataModels.InitiateFileUploadsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets objects on an entity's profile.
         * https://api.playfab.com/Documentation/Data/method/SetObjects
         */
        SetObjects(request: PlayFabDataModels.SetObjectsRequest, callback: PlayFabModule.ApiCallback<PlayFabDataModels.SetObjectsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabDataModels {
    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.AbortFileUploadsRequest */
    export interface AbortFileUploadsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** Names of the files to have their pending uploads aborted. */
        FileNames: string[];
        /**
         * The expected version of the profile, if set and doesn't match the current version of the profile the operation will not
         * be performed.
         */
        ProfileVersion?: number;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.AbortFileUploadsResponse */
    export interface AbortFileUploadsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.DeleteFilesRequest */
    export interface DeleteFilesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** Names of the files to be deleted. */
        FileNames: string[];
        /**
         * The expected version of the profile, if set and doesn't match the current version of the profile the operation will not
         * be performed.
         */
        ProfileVersion?: number;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.DeleteFilesResponse */
    export interface DeleteFilesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.EntityKey */
    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.FinalizeFileUploadsRequest */
    export interface FinalizeFileUploadsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** Names of the files to be finalized. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
        FileNames: string[];

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.FinalizeFileUploadsResponse */
    export interface FinalizeFileUploadsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** Collection of metadata for the entity's files */
        Metadata?: { [key: string]: GetFileMetadata };
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.GetFileMetadata */
    export interface GetFileMetadata {
        /** Checksum value for the file */
        Checksum?: string;
        /** Download URL where the file can be retrieved */
        DownloadUrl?: string;
        /** Name of the file */
        FileName?: string;
        /** Last UTC time the file was modified */
        LastModified: string;
        /** Storage service's reported byte count */
        Size: number;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.GetFilesRequest */
    export interface GetFilesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.GetFilesResponse */
    export interface GetFilesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** Collection of metadata for the entity's files */
        Metadata?: { [key: string]: GetFileMetadata };
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.GetObjectsRequest */
    export interface GetObjectsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /**
         * Determines whether the object will be returned as an escaped JSON string or as a un-escaped JSON object. Default is JSON
         * object.
         */
        EscapeObject?: boolean;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.GetObjectsResponse */
    export interface GetObjectsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** Requested objects that the calling entity has access to */
        Objects?: { [key: string]: ObjectResult };
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.InitiateFileUploadMetadata */
    export interface InitiateFileUploadMetadata {
        /** Name of the file. */
        FileName?: string;
        /** Location the data should be sent to via an HTTP PUT operation. */
        UploadUrl?: string;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.InitiateFileUploadsRequest */
    export interface InitiateFileUploadsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** Names of the files to be set. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
        FileNames: string[];
        /**
         * The expected version of the profile, if set and doesn't match the current version of the profile the operation will not
         * be performed.
         */
        ProfileVersion?: number;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.InitiateFileUploadsResponse */
    export interface InitiateFileUploadsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;
        /** Collection of file names and upload urls */
        UploadDetails?: InitiateFileUploadMetadata[];

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.ObjectResult */
    export interface ObjectResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Un-escaped JSON object, if EscapeObject false or default. */
        DataObject?: any;
        /** Escaped string JSON body of the object, if EscapeObject is true. */
        EscapedDataObject?: string;
        /** Name of the object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
        ObjectName?: string;

    }

    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.SetObject */
    export interface SetObject {
        /**
         * Body of the object to be saved. If empty and DeleteObject is true object will be deleted if it exists, or no operation
         * will occur if it does not exist. Only one of Object or EscapedDataObject fields may be used.
         */
        DataObject?: any;
        /** Flag to indicate that this object should be deleted. Both DataObject and EscapedDataObject must not be set as well. */
        DeleteObject?: boolean;
        /**
         * Body of the object to be saved as an escaped JSON string. If empty and DeleteObject is true object will be deleted if it
         * exists, or no operation will occur if it does not exist. Only one of DataObject or EscapedDataObject fields may be used.
         */
        EscapedDataObject?: string;
        /** Name of object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.'. */
        ObjectName: string;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.SetObjectInfo */
    export interface SetObjectInfo {
        /** Name of the object */
        ObjectName?: string;
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string;
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: string;

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.SetObjectsRequest */
    export interface SetObjectsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /**
         * Optional field used for concurrency control. By specifying the previously returned value of ProfileVersion from
         * GetProfile API, you can ensure that the object set will only be performed if the profile has not been updated by any
         * other clients since the version you last loaded.
         */
        ExpectedProfileVersion?: number;
        /** Collection of objects to set on the profile. */
        Objects: SetObject[];

    }

    /** https://api.playfab.com/Documentation/Data/datatype/PlayFab.Data.Models/PlayFab.Data.Models.SetObjectsResponse */
    export interface SetObjectsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** New version of the entity profile. */
        ProfileVersion: number;
        /** New version of the entity profile. */
        SetResults?: SetObjectInfo[];

    }


}
