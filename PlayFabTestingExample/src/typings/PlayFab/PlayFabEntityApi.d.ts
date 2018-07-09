/// <reference path="Playfab.d.ts" />

declare module PlayFabEntityModule {
    export interface IPlayFabEntity {
        ForgetAllCredentials(): void;

        /**
         * Abort pending file uploads to an entity's profile.
         * https://api.playfab.com/Documentation/Entity/method/AbortFileUploads
         */
        AbortFileUploads(request: PlayFabEntityModels.AbortFileUploadsRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.AbortFileUploadsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Accepts an outstanding invitation to to join a group
         * https://api.playfab.com/Documentation/Entity/method/AcceptGroupApplication
         */
        AcceptGroupApplication(request: PlayFabEntityModels.AcceptGroupApplicationRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Accepts an invitation to join a group
         * https://api.playfab.com/Documentation/Entity/method/AcceptGroupInvitation
         */
        AcceptGroupInvitation(request: PlayFabEntityModels.AcceptGroupInvitationRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds members to a group or role.
         * https://api.playfab.com/Documentation/Entity/method/AddMembers
         */
        AddMembers(request: PlayFabEntityModels.AddMembersRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Applies to join a group
         * https://api.playfab.com/Documentation/Entity/method/ApplyToGroup
         */
        ApplyToGroup(request: PlayFabEntityModels.ApplyToGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.ApplyToGroupResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Blocks a list of entities from joining a group.
         * https://api.playfab.com/Documentation/Entity/method/BlockEntity
         */
        BlockEntity(request: PlayFabEntityModels.BlockEntityRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Changes the role membership of a list of entities from one role to another.
         * https://api.playfab.com/Documentation/Entity/method/ChangeMemberRole
         */
        ChangeMemberRole(request: PlayFabEntityModels.ChangeMemberRoleRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a new group.
         * https://api.playfab.com/Documentation/Entity/method/CreateGroup
         */
        CreateGroup(request: PlayFabEntityModels.CreateGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.CreateGroupResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a new group role.
         * https://api.playfab.com/Documentation/Entity/method/CreateRole
         */
        CreateRole(request: PlayFabEntityModels.CreateGroupRoleRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.CreateGroupRoleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete files on an entity's profile.
         * https://api.playfab.com/Documentation/Entity/method/DeleteFiles
         */
        DeleteFiles(request: PlayFabEntityModels.DeleteFilesRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.DeleteFilesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes a group and all roles, invitations, join requests, and blocks associated with it.
         * https://api.playfab.com/Documentation/Entity/method/DeleteGroup
         */
        DeleteGroup(request: PlayFabEntityModels.DeleteGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes an existing role in a group.
         * https://api.playfab.com/Documentation/Entity/method/DeleteRole
         */
        DeleteRole(request: PlayFabEntityModels.DeleteRoleRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Executes CloudScript using the Entity Profile
         * https://api.playfab.com/Documentation/Entity/method/ExecuteEntityCloudScript
         */
        ExecuteEntityCloudScript(request: PlayFabEntityModels.ExecuteEntityCloudScriptRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.ExecuteCloudScriptResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Finalize file uploads to an entity's profile.
         * https://api.playfab.com/Documentation/Entity/method/FinalizeFileUploads
         */
        FinalizeFileUploads(request: PlayFabEntityModels.FinalizeFileUploadsRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.FinalizeFileUploadsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid
         * Entity Token.
         * https://api.playfab.com/Documentation/Entity/method/GetEntityToken
         */
        GetEntityToken(request: PlayFabEntityModels.GetEntityTokenRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.GetEntityTokenResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves file metadata from an entity's profile.
         * https://api.playfab.com/Documentation/Entity/method/GetFiles
         */
        GetFiles(request: PlayFabEntityModels.GetFilesRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.GetFilesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the global title access policy
         * https://api.playfab.com/Documentation/Entity/method/GetGlobalPolicy
         */
        GetGlobalPolicy(request: PlayFabEntityModels.GetGlobalPolicyRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.GetGlobalPolicyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets information about a group and its roles
         * https://api.playfab.com/Documentation/Entity/method/GetGroup
         */
        GetGroup(request: PlayFabEntityModels.GetGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.GetGroupResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves objects from an entity's profile.
         * https://api.playfab.com/Documentation/Entity/method/GetObjects
         */
        GetObjects(request: PlayFabEntityModels.GetObjectsRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.GetObjectsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the entity's profile.
         * https://api.playfab.com/Documentation/Entity/method/GetProfile
         */
        GetProfile(request: PlayFabEntityModels.GetEntityProfileRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.GetEntityProfileResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the entity's profile.
         * https://api.playfab.com/Documentation/Entity/method/GetProfiles
         */
        GetProfiles(request: PlayFabEntityModels.GetEntityProfilesRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.GetEntityProfilesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Initiates file uploads to an entity's profile.
         * https://api.playfab.com/Documentation/Entity/method/InitiateFileUploads
         */
        InitiateFileUploads(request: PlayFabEntityModels.InitiateFileUploadsRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.InitiateFileUploadsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Invites a player to join a group
         * https://api.playfab.com/Documentation/Entity/method/InviteToGroup
         */
        InviteToGroup(request: PlayFabEntityModels.InviteToGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.InviteToGroupResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Checks to see if an entity is a member of a group or role within the group
         * https://api.playfab.com/Documentation/Entity/method/IsMember
         */
        IsMember(request: PlayFabEntityModels.IsMemberRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.IsMemberResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all outstanding requests to join a group
         * https://api.playfab.com/Documentation/Entity/method/ListGroupApplications
         */
        ListGroupApplications(request: PlayFabEntityModels.ListGroupApplicationsRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.ListGroupApplicationsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all entities blocked from joining a group
         * https://api.playfab.com/Documentation/Entity/method/ListGroupBlocks
         */
        ListGroupBlocks(request: PlayFabEntityModels.ListGroupBlocksRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.ListGroupBlocksResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all outstanding invitations for a group
         * https://api.playfab.com/Documentation/Entity/method/ListGroupInvitations
         */
        ListGroupInvitations(request: PlayFabEntityModels.ListGroupInvitationsRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.ListGroupInvitationsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all members for a group
         * https://api.playfab.com/Documentation/Entity/method/ListGroupMembers
         */
        ListGroupMembers(request: PlayFabEntityModels.ListGroupMembersRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.ListGroupMembersResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all groups and roles for an entity
         * https://api.playfab.com/Documentation/Entity/method/ListMembership
         */
        ListMembership(request: PlayFabEntityModels.ListMembershipRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.ListMembershipResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all outstanding invitations and group applications for an entity
         * https://api.playfab.com/Documentation/Entity/method/ListMembershipOpportunities
         */
        ListMembershipOpportunities(request: PlayFabEntityModels.ListMembershipOpportunitiesRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.ListMembershipOpportunitiesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes an application to join a group
         * https://api.playfab.com/Documentation/Entity/method/RemoveGroupApplication
         */
        RemoveGroupApplication(request: PlayFabEntityModels.RemoveGroupApplicationRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes an invitation join a group
         * https://api.playfab.com/Documentation/Entity/method/RemoveGroupInvitation
         */
        RemoveGroupInvitation(request: PlayFabEntityModels.RemoveGroupInvitationRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes members from a group.
         * https://api.playfab.com/Documentation/Entity/method/RemoveMembers
         */
        RemoveMembers(request: PlayFabEntityModels.RemoveMembersRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets the global title access policy
         * https://api.playfab.com/Documentation/Entity/method/SetGlobalPolicy
         */
        SetGlobalPolicy(request: PlayFabEntityModels.SetGlobalPolicyRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.SetGlobalPolicyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets objects on an entity's profile.
         * https://api.playfab.com/Documentation/Entity/method/SetObjects
         */
        SetObjects(request: PlayFabEntityModels.SetObjectsRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.SetObjectsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets the profiles access policy
         * https://api.playfab.com/Documentation/Entity/method/SetProfilePolicy
         */
        SetProfilePolicy(request: PlayFabEntityModels.SetEntityProfilePolicyRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.SetEntityProfilePolicyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unblocks a list of entities from joining a group
         * https://api.playfab.com/Documentation/Entity/method/UnblockEntity
         */
        UnblockEntity(request: PlayFabEntityModels.UnblockEntityRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates non-membership data about a group.
         * https://api.playfab.com/Documentation/Entity/method/UpdateGroup
         */
        UpdateGroup(request: PlayFabEntityModels.UpdateGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.UpdateGroupResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates metadata about a role.
         * https://api.playfab.com/Documentation/Entity/method/UpdateRole
         */
        UpdateRole(request: PlayFabEntityModels.UpdateGroupRoleRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.UpdateGroupRoleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Write batches of entity based events to PlayStream.
         * https://api.playfab.com/Documentation/Entity/method/WriteEvents
         */
        WriteEvents(request: PlayFabEntityModels.WriteEventsRequest, callback: PlayFabModule.ApiCallback<PlayFabEntityModels.WriteEventsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabEntityModels {
    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.AbortFileUploadsRequest */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.AbortFileUploadsResponse */
    export interface AbortFileUploadsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.AcceptGroupApplicationRequest */
    export interface AcceptGroupApplicationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Optional. Type of the entity to accept as. If specified, must be the same entity as the claimant or an entity that is a
         * child of the claimant entity. Defaults to the claimant entity.
         */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.AcceptGroupInvitationRequest */
    export interface AcceptGroupInvitationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.AddMembersRequest */
    export interface AddMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;
        /** List of entities to add to the group. Only entities of type title_player_account and character may be added to groups. */
        Members: EntityKey[];
        /**
         * Optional: The ID of the existing role to add the entities to. If this is not specified, the default member role for the
         * group will be used. Role IDs must be between 1 and 64 characters long.
         */
        RoleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ApplyToGroupRequest */
    export interface ApplyToGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Optional, default true. Automatically accept an outstanding invitation if one exists instead of creating an application */
        AutoAcceptOutstandingInvite?: boolean;
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ApplyToGroupResponse */
    export interface ApplyToGroupResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Type of entity that requested membership */
        Entity?: EntityWithLineage;
        /** When the application to join will expire and be deleted */
        Expires: string;
        /** ID of the group that the entity requesting membership to */
        Group?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.BlockEntityRequest */
    export interface BlockEntityRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ChangeMemberRoleRequest */
    export interface ChangeMemberRoleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The ID of the role that the entities will become a member of. This must be an existing role. Role IDs must be between 1
         * and 64 characters long.
         */
        DestinationRoleId?: string;
        /** The identifier of the group */
        Group: EntityKey;
        /**
         * List of entities to move between roles in the group. All entities in this list must be members of the group and origin
         * role.
         */
        Members: EntityKey[];
        /** The ID of the role that the entities currently are a member of. Role IDs must be between 1 and 64 characters long. */
        OriginRoleId: string;

    }

    type CloudScriptRevisionOption = "Live"
        | "Latest"
        | "Specific";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.CreateGroupRequest */
    export interface CreateGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The name of the group. This is unique at the title level by default. */
        GroupName: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.CreateGroupResponse */
    export interface CreateGroupResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The ID of the administrator role for the group. */
        AdminRoleId?: string;
        /** The server date and time the group was created. */
        Created: string;
        /** The identifier of the group */
        Group: EntityKey;
        /** The name of the group. */
        GroupName?: string;
        /** The ID of the default member role for the group. */
        MemberRoleId?: string;
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;
        /** The list of roles and names that belong to the group. */
        Roles?: { [key: string]: string | null };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.CreateGroupRoleRequest */
    export interface CreateGroupRoleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;
        /**
         * The ID of the role. This must be unique within the group and cannot be changed. Role IDs must be between 1 and 64
         * characters long.
         */
        RoleId: string;
        /**
         * The name of the role. This must be unique within the group and can be changed later. Role names must be between 1 and
         * 100 characters long
         */
        RoleName: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.CreateGroupRoleResponse */
    export interface CreateGroupRoleResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The current version of the group profile, can be used for concurrency control during updates. */
        ProfileVersion: number;
        /** ID for the role */
        RoleId?: string;
        /** The name of the role */
        RoleName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.DeleteFilesRequest */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.DeleteFilesResponse */
    export interface DeleteFilesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.DeleteGroupRequest */
    export interface DeleteGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** ID of the group or role to remove */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.DeleteRoleRequest */
    export interface DeleteRoleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;
        /** The ID of the role to delete. Role IDs must be between 1 and 64 characters long. */
        RoleId?: string;

    }

    type EffectType = "Allow"
        | "Deny";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.EmptyResult */
    export interface EmptyResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.EntityDataObject */
    export interface EntityDataObject {
        /** Un-escaped JSON object, if DataAsObject is true. */
        DataObject?: any;
        /** Escaped string JSON body of the object, if DataAsObject is default or false. */
        EscapedDataObject?: string;
        /** Name of this object. */
        ObjectName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.EntityKey */
    export interface EntityKey {
        /** Entity profile ID. */
        Id: string;
        /** Entity type. Optional to be used but one of EntityType or EntityTypeString must be set. */
        Type?: string;
        /** Entity type. Optional to be used but one of EntityType or EntityTypeString must be set. */
        TypeString?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.EntityMemberRole */
    export interface EntityMemberRole {
        /** The list of members in the role */
        Members?: EntityWithLineage[];
        /** The ID of the role. */
        RoleId?: string;
        /** The name of the role */
        RoleName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.EntityPermissionStatement */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.EntityProfileBody */
    export interface EntityProfileBody {
        /** The entity id and type. */
        Entity?: EntityKey;
        /**
         * The chain of responsibility for this entity. This is a representation of 'ownership'. It is constructed using the
         * following formats (replace '[ID]' with the unique identifier for the given entity): Namespace: 'namespace![Namespace
         * ID]' Title: 'title![Namespace ID]/[Title ID]' Master Player Account: 'master_player_account![Namespace
         * ID]/[MasterPlayerAccount ID]' Title Player Account: 'title_player_account![Namespace ID]/[Title ID]/[MasterPlayerAccount
         * ID]/[TitlePlayerAccount ID]' Character: 'character![Namespace ID]/[Title ID]/[MasterPlayerAccount
         * ID]/[TitlePlayerAccount ID]/[Character ID]'
         */
        EntityChain?: string;
        /** The files on this profile. */
        Files?: { [key: string]: EntityProfileFileMetadata };
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.EntityProfileFileMetadata */
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

    type EntityTypes = "title"
        | "master_player_account"
        | "title_player_account"
        | "character"
        | "group"
        | "service";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.EntityWithLineage */
    export interface EntityWithLineage {
        /** The entity key for the specified entity */
        Key?: EntityKey;
        /** Dictionary of entity keys for related entities. Dictionary key is entity type. */
        Lineage?: { [key: string]: EntityKey };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.EventContents */
    export interface EventContents {
        /** Entity associated with the event */
        Entity: EntityKey;
        /** The namespace in which the event is defined. It must be prepended with 'com.playfab.events.' */
        EventNamespace: string;
        /** The name of this event. */
        Name: string;
        /**
         * The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from
         * the EventId value, which is assigned when the event is received by the server.
         */
        OriginalId?: string;
        /**
         * The time (in UTC) associated with this event when it occurred. If specified, this value is stored in the
         * OriginalTimestamp property of the PlayStream event.
         */
        OriginalTimestamp?: string;
        /** Arbitrary data associated with the event. Only one of Payload or PayloadJSON is allowed. */
        Payload?: any;
        /**
         * Arbitrary data associated with the event, represented as a JSON serialized string. Only one of Payload or PayloadJSON is
         * allowed.
         */
        PayloadJSON?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ExecuteCloudScriptResult */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ExecuteEntityCloudScriptRequest */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.FinalizeFileUploadsRequest */
    export interface FinalizeFileUploadsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** Names of the files to be finalized. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
        FileNames: string[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.FinalizeFileUploadsResponse */
    export interface FinalizeFileUploadsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** Collection of metadata for the entity's files */
        Metadata?: { [key: string]: GetFileMetadata };
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetEntityProfileRequest */
    export interface GetEntityProfileRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
         * JSON string.
         */
        DataAsObject?: boolean;
        /** The entity to perform this action on. */
        Entity: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetEntityProfileResponse */
    export interface GetEntityProfileResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Entity profile */
        Profile?: EntityProfileBody;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetEntityProfilesRequest */
    export interface GetEntityProfilesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is
         * JSON string.
         */
        DataAsObject?: boolean;
        /** Entity keys of the profiles to load. Must be between 1 and 25 */
        Entities: EntityKey[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetEntityProfilesResponse */
    export interface GetEntityProfilesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Entity profiles */
        Profiles?: EntityProfileBody[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetEntityTokenRequest */
    export interface GetEntityTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetEntityTokenResponse */
    export interface GetEntityTokenResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The token used to set X-EntityToken for all entity based API calls. */
        EntityToken?: string;
        /** The time the token will expire, if it is an expiring token, in UTC. */
        TokenExpiration?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetFileMetadata */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetFilesRequest */
    export interface GetFilesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetFilesResponse */
    export interface GetFilesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** Collection of metadata for the entity's files */
        Metadata?: { [key: string]: GetFileMetadata };
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetGlobalPolicyRequest */
    export interface GetGlobalPolicyRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetGlobalPolicyResponse */
    export interface GetGlobalPolicyResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The permissions that govern access to all entities under this title or namespace. */
        Permissions?: EntityPermissionStatement[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetGroupRequest */
    export interface GetGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group?: EntityKey;
        /** The full name of the group */
        GroupName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetGroupResponse */
    export interface GetGroupResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The ID of the administrator role for the group. */
        AdminRoleId?: string;
        /** The server date and time the group was created. */
        Created: string;
        /** The identifier of the group */
        Group: EntityKey;
        /** The name of the group. */
        GroupName?: string;
        /** The ID of the default member role for the group. */
        MemberRoleId?: string;
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;
        /** The list of roles and names that belong to the group. */
        Roles?: { [key: string]: string | null };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetObjectsRequest */
    export interface GetObjectsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /**
         * Determines whether the object will be returned as an escaped JSON string or as a un-escaped JSON object. Default is JSON
         * object.
         */
        EscapeObject?: boolean;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GetObjectsResponse */
    export interface GetObjectsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** Requested objects that the calling entity has access to */
        Objects?: { [key: string]: ObjectResult };
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GroupApplication */
    export interface GroupApplication {
        /** Type of entity that requested membership */
        Entity?: EntityWithLineage;
        /** When the application to join will expire and be deleted */
        Expires: string;
        /** ID of the group that the entity requesting membership to */
        Group?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GroupBlock */
    export interface GroupBlock {
        /** The entity that is blocked */
        Entity?: EntityWithLineage;
        /** ID of the group that the entity is blocked from */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GroupInvitation */
    export interface GroupInvitation {
        /** When the invitation will expire and be deleted */
        Expires: string;
        /** The group that the entity invited to */
        Group?: EntityKey;
        /** The entity that created the invitation */
        InvitedByEntity?: EntityWithLineage;
        /** The entity that is invited */
        InvitedEntity?: EntityWithLineage;
        /** ID of the role in the group to assign the user to. */
        RoleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GroupRole */
    export interface GroupRole {
        /** ID for the role */
        RoleId?: string;
        /** The name of the role */
        RoleName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.GroupWithRoles */
    export interface GroupWithRoles {
        /** ID for the group */
        Group?: EntityKey;
        /** The name of the group */
        GroupName?: string;
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;
        /** The list of roles within the group */
        Roles?: GroupRole[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.InitiateFileUploadMetadata */
    export interface InitiateFileUploadMetadata {
        /** Name of the file. */
        FileName?: string;
        /** Location the data should be sent to via an HTTP PUT operation. */
        UploadUrl?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.InitiateFileUploadsRequest */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.InitiateFileUploadsResponse */
    export interface InitiateFileUploadsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The entity id and type. */
        Entity?: EntityKey;
        /** The current version of the profile, can be used for concurrency control during updates. */
        ProfileVersion: number;
        /** Collection of file names and upload urls */
        UploadDetails?: InitiateFileUploadMetadata[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.InviteToGroupRequest */
    export interface InviteToGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Optional, default true. Automatically accept an application if one exists instead of creating an invitation */
        AutoAcceptOutstandingApplication?: boolean;
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;
        /**
         * Optional. ID of an existing a role in the group to assign the user to. The group's default member role is used if this
         * is not specified. Role IDs must be between 1 and 64 characters long.
         */
        RoleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.InviteToGroupResponse */
    export interface InviteToGroupResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** When the invitation will expire and be deleted */
        Expires: string;
        /** The group that the entity invited to */
        Group?: EntityKey;
        /** The entity that created the invitation */
        InvitedByEntity?: EntityWithLineage;
        /** The entity that is invited */
        InvitedEntity?: EntityWithLineage;
        /** ID of the role in the group to assign the user to. */
        RoleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.IsMemberRequest */
    export interface IsMemberRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;
        /**
         * Optional: ID of the role to check membership of. Defaults to any role (that is, check to see if the entity is a member
         * of the group in any capacity) if not specified.
         */
        RoleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.IsMemberResponse */
    export interface IsMemberResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** A value indicating whether or not the entity is a member. */
        IsMember: boolean;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListGroupApplicationsRequest */
    export interface ListGroupApplicationsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListGroupApplicationsResponse */
    export interface ListGroupApplicationsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list of applications to the group. */
        Applications?: GroupApplication[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListGroupBlocksRequest */
    export interface ListGroupBlocksRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListGroupBlocksResponse */
    export interface ListGroupBlocksResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list blocked entities. */
        BlockedEntities?: GroupBlock[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListGroupInvitationsRequest */
    export interface ListGroupInvitationsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListGroupInvitationsResponse */
    export interface ListGroupInvitationsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list of group invitations. */
        Invitations?: GroupInvitation[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListGroupMembersRequest */
    export interface ListGroupMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** ID of the group to list the members and roles for */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListGroupMembersResponse */
    export interface ListGroupMembersResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list of roles and member entity IDs. */
        Members?: EntityMemberRole[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListMembershipOpportunitiesRequest */
    export interface ListMembershipOpportunitiesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListMembershipOpportunitiesResponse */
    export interface ListMembershipOpportunitiesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list of group applications. */
        Applications?: GroupApplication[];
        /** The requested list of group invitations. */
        Invitations?: GroupInvitation[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListMembershipRequest */
    export interface ListMembershipRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ListMembershipResponse */
    export interface ListMembershipResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of groups */
        Groups?: GroupWithRoles[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.LogStatement */
    export interface LogStatement {
        /** Optional object accompanying the message as contextual information */
        Data?: any;
        /** 'Debug', 'Info', or 'Error' */
        Level?: string;
        Message?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ObjectResult */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.RemoveGroupApplicationRequest */
    export interface RemoveGroupApplicationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.RemoveGroupInvitationRequest */
    export interface RemoveGroupInvitationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.RemoveMembersRequest */
    export interface RemoveMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;
        /** List of entities to remove */
        Members: EntityKey[];
        /** The ID of the role to remove the entities from. */
        RoleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.ScriptExecutionError */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.SetEntityProfilePolicyRequest */
    export interface SetEntityProfilePolicyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The statements to include in the access policy. */
        Statements?: EntityPermissionStatement[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.SetEntityProfilePolicyResponse */
    export interface SetEntityProfilePolicyResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The permissions that govern access to this entity profile and its properties. Only includes permissions set on this
         * profile, not global statements from titles and namespaces.
         */
        Permissions?: EntityPermissionStatement[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.SetGlobalPolicyRequest */
    export interface SetGlobalPolicyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The permissions that govern access to all entities under this title or namespace. */
        Permissions?: EntityPermissionStatement[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.SetGlobalPolicyResponse */
    export interface SetGlobalPolicyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.SetObject */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.SetObjectInfo */
    export interface SetObjectInfo {
        /** Name of the object */
        ObjectName?: string;
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string;
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.SetObjectsRequest */
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

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.SetObjectsResponse */
    export interface SetObjectsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** New version of the entity profile. */
        ProfileVersion: number;
        /** New version of the entity profile. */
        SetResults?: SetObjectInfo[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.UnblockEntityRequest */
    export interface UnblockEntityRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.UpdateGroupRequest */
    export interface UpdateGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Optional: the ID of an existing role to set as the new administrator role for the group */
        AdminRoleId?: string;
        /**
         * Optional field used for concurrency control. By specifying the previously returned value of ProfileVersion from the
         * GetGroup API, you can ensure that the group data update will only be performed if the group has not been updated by any
         * other clients since the version you last loaded.
         */
        ExpectedProfileVersion?: number;
        /** The identifier of the group */
        Group: EntityKey;
        /** Optional: the new name of the group */
        GroupName?: string;
        /** Optional: the ID of an existing role to set as the new member role for the group */
        MemberRoleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.UpdateGroupResponse */
    export interface UpdateGroupResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string;
        /** New version of the group data. */
        ProfileVersion: number;
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.UpdateGroupRoleRequest */
    export interface UpdateGroupRoleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Optional field used for concurrency control. By specifying the previously returned value of ProfileVersion from the
         * GetGroup API, you can ensure that the group data update will only be performed if the group has not been updated by any
         * other clients since the version you last loaded.
         */
        ExpectedProfileVersion?: number;
        /** The identifier of the group */
        Group: EntityKey;
        /** ID of the role to update. Role IDs must be between 1 and 64 characters long. */
        RoleId?: string;
        /** The new name of the role */
        RoleName: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.UpdateGroupRoleResponse */
    export interface UpdateGroupRoleResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string;
        /** New version of the role data. */
        ProfileVersion: number;
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.WriteEventsRequest */
    export interface WriteEventsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Collection of events to write to PlayStream. */
        Events: EventContents[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Entity.Models/PlayFab.Entity.Models.WriteEventsResponse */
    export interface WriteEventsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The unique identifiers assigned by the server to the events, in the same order as the events in the request. Only
         * returned if FlushToPlayStream option is true.
         */
        AssignedEventIds?: string[];

    }


}
