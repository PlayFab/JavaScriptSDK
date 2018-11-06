/// <reference path="Playfab.d.ts" />

declare module PlayFabProfilesModule {
    export interface IPlayFabProfiles {
        ForgetAllCredentials(): void;

        /**
         * Gets the global title access policy
         * https://api.playfab.com/Documentation/Profiles/method/GetGlobalPolicy
         */
        GetGlobalPolicy(request: PlayFabProfilesModels.GetGlobalPolicyRequest, callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.GetGlobalPolicyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the entity's profile.
         * https://api.playfab.com/Documentation/Profiles/method/GetProfile
         */
        GetProfile(request: PlayFabProfilesModels.GetEntityProfileRequest, callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.GetEntityProfileResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the entity's profile.
         * https://api.playfab.com/Documentation/Profiles/method/GetProfiles
         */
        GetProfiles(request: PlayFabProfilesModels.GetEntityProfilesRequest, callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.GetEntityProfilesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets the global title access policy
         * https://api.playfab.com/Documentation/Profiles/method/SetGlobalPolicy
         */
        SetGlobalPolicy(request: PlayFabProfilesModels.SetGlobalPolicyRequest, callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.SetGlobalPolicyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the entity's language. The precedence hierarchy for communication to the player is Title Player Account
         * language, Master Player Account language, and then title default language if the first two aren't set or supported.
         * https://api.playfab.com/Documentation/Profiles/method/SetProfileLanguage
         */
        SetProfileLanguage(request: PlayFabProfilesModels.SetProfileLanguageRequest, callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.SetProfileLanguageResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets the profiles access policy
         * https://api.playfab.com/Documentation/Profiles/method/SetProfilePolicy
         */
        SetProfilePolicy(request: PlayFabProfilesModels.SetEntityProfilePolicyRequest, callback: PlayFabModule.ApiCallback<PlayFabProfilesModels.SetEntityProfilePolicyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabProfilesModels {
    type EffectType = "Allow"
        | "Deny";

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityDataObject */
    export interface EntityDataObject {
        /** Un-escaped JSON object, if DataAsObject is true. */
        DataObject?: any;
        /** Escaped string JSON body of the object, if DataAsObject is default or false. */
        EscapedDataObject?: string;
        /** Name of this object. */
        ObjectName?: string;

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityKey */
    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string;

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityLineage */
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

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityPermissionStatement */
    export interface EntityPermissionStatement {
        /** The action this statement effects. May be 'Read', 'Write' or '*' for both read and write. */
        Action: string;
        /** A comment about the statement. Intended solely for bookkeeping and debugging. */
        Comment?: string;
        /** Additional conditions to be applied for entity resources. */
        Condition?: any;
        /** The effect this statement will have. It may be either Allow or Deny */
        Effect: string;
        /** The principal this statement will effect. */
        Principal: any;
        /** The resource this statements effects. Similar to 'pfrn:data--title![Title ID]/Profile/*' */
        Resource: string;

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityProfileBody */
    export interface EntityProfileBody {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The chain of responsibility for this entity. Use Lineage. */
        EntityChain?: string;
        /** The files on this profile. */
        Files?: { [key: string]: EntityProfileFileMetadata };
        /**
         * The friendly name of the entity. This field may serve different purposes for different entity types. i.e.: for a title
         * player account it could represent the display name of the player, whereas on a character it could be character's name.
         */
        FriendlyName?: string;
        /** The language on this profile. */
        Language?: string;
        /** The lineage of this profile. */
        Lineage?: EntityLineage;
        /** The objects on this profile. */
        Objects?: { [key: string]: EntityDataObject };
        /**
         * The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
         * profile, not global statements from titles and namespaces.
         */
        Permissions?: EntityPermissionStatement[];
        /**
         * The version number of the profile in persistent storage at the time of the read. Used for optional optimistic
         * concurrency during update.
         */
        VersionNumber: number;

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.EntityProfileFileMetadata */
    export interface EntityProfileFileMetadata {
        /** Checksum value for the file */
        Checksum?: string;
        /** Name of the file */
        FileName?: string;
        /** Last UTC time the file was modified */
        LastModified: string;
        /** Storage service's reported byte count */
        Size: number;

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetEntityProfileRequest */
    export interface GetEntityProfileRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
         * JSON string.
         */
        DataAsObject?: boolean;
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetEntityProfileResponse */
    export interface GetEntityProfileResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Entity profile */
        Profile?: EntityProfileBody;

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetEntityProfilesRequest */
    export interface GetEntityProfilesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
         * JSON string.
         */
        DataAsObject?: boolean;
        /** Entity keys of the profiles to load. Must be between 1 and 25 */
        Entities: EntityKey[];

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetEntityProfilesResponse */
    export interface GetEntityProfilesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Entity profiles */
        Profiles?: EntityProfileBody[];

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetGlobalPolicyRequest */
    export interface GetGlobalPolicyRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.GetGlobalPolicyResponse */
    export interface GetGlobalPolicyResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The permissions that govern access to all entities under this title or namespace. */
        Permissions?: EntityPermissionStatement[];

    }

    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetEntityProfilePolicyRequest */
    export interface SetEntityProfilePolicyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The statements to include in the access policy. */
        Statements?: EntityPermissionStatement[];

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetEntityProfilePolicyResponse */
    export interface SetEntityProfilePolicyResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
         * profile, not global statements from titles and namespaces.
         */
        Permissions?: EntityPermissionStatement[];

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetGlobalPolicyRequest */
    export interface SetGlobalPolicyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The permissions that govern access to all entities under this title or namespace. */
        Permissions?: EntityPermissionStatement[];

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetGlobalPolicyResponse */
    export interface SetGlobalPolicyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetProfileLanguageRequest */
    export interface SetProfileLanguageRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The expected version of a profile to perform this update on */
        ExpectedVersion: number;
        /** The language to set on the given entity. Deletes the profile's language if passed in a null string. */
        Language?: string;

    }

    /** https://api.playfab.com/Documentation/Profiles/datatype/PlayFab.Profiles.Models/PlayFab.Profiles.Models.SetProfileLanguageResponse */
    export interface SetProfileLanguageResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The type of operation that occured on the profile's language */
        OperationResult?: string;
        /** The updated version of the profile after the language update */
        VersionNumber?: number;

    }


}
