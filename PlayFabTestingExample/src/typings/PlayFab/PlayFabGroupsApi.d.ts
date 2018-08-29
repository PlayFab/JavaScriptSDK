/// <reference path="Playfab.d.ts" />

declare module PlayFabGroupsModule {
    export interface IPlayFabGroups {
        ForgetAllCredentials(): void;

        /**
         * Accepts an outstanding invitation to to join a group
         * https://api.playfab.com/Documentation/Groups/method/AcceptGroupApplication
         */
        AcceptGroupApplication(request: PlayFabGroupsModels.AcceptGroupApplicationRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Accepts an invitation to join a group
         * https://api.playfab.com/Documentation/Groups/method/AcceptGroupInvitation
         */
        AcceptGroupInvitation(request: PlayFabGroupsModels.AcceptGroupInvitationRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds members to a group or role.
         * https://api.playfab.com/Documentation/Groups/method/AddMembers
         */
        AddMembers(request: PlayFabGroupsModels.AddMembersRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Applies to join a group
         * https://api.playfab.com/Documentation/Groups/method/ApplyToGroup
         */
        ApplyToGroup(request: PlayFabGroupsModels.ApplyToGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.ApplyToGroupResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Blocks a list of entities from joining a group.
         * https://api.playfab.com/Documentation/Groups/method/BlockEntity
         */
        BlockEntity(request: PlayFabGroupsModels.BlockEntityRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Changes the role membership of a list of entities from one role to another.
         * https://api.playfab.com/Documentation/Groups/method/ChangeMemberRole
         */
        ChangeMemberRole(request: PlayFabGroupsModels.ChangeMemberRoleRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a new group.
         * https://api.playfab.com/Documentation/Groups/method/CreateGroup
         */
        CreateGroup(request: PlayFabGroupsModels.CreateGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.CreateGroupResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a new group role.
         * https://api.playfab.com/Documentation/Groups/method/CreateRole
         */
        CreateRole(request: PlayFabGroupsModels.CreateGroupRoleRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.CreateGroupRoleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes a group and all roles, invitations, join requests, and blocks associated with it.
         * https://api.playfab.com/Documentation/Groups/method/DeleteGroup
         */
        DeleteGroup(request: PlayFabGroupsModels.DeleteGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes an existing role in a group.
         * https://api.playfab.com/Documentation/Groups/method/DeleteRole
         */
        DeleteRole(request: PlayFabGroupsModels.DeleteRoleRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets information about a group and its roles
         * https://api.playfab.com/Documentation/Groups/method/GetGroup
         */
        GetGroup(request: PlayFabGroupsModels.GetGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.GetGroupResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Invites a player to join a group
         * https://api.playfab.com/Documentation/Groups/method/InviteToGroup
         */
        InviteToGroup(request: PlayFabGroupsModels.InviteToGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.InviteToGroupResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Checks to see if an entity is a member of a group or role within the group
         * https://api.playfab.com/Documentation/Groups/method/IsMember
         */
        IsMember(request: PlayFabGroupsModels.IsMemberRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.IsMemberResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all outstanding requests to join a group
         * https://api.playfab.com/Documentation/Groups/method/ListGroupApplications
         */
        ListGroupApplications(request: PlayFabGroupsModels.ListGroupApplicationsRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.ListGroupApplicationsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all entities blocked from joining a group
         * https://api.playfab.com/Documentation/Groups/method/ListGroupBlocks
         */
        ListGroupBlocks(request: PlayFabGroupsModels.ListGroupBlocksRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.ListGroupBlocksResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all outstanding invitations for a group
         * https://api.playfab.com/Documentation/Groups/method/ListGroupInvitations
         */
        ListGroupInvitations(request: PlayFabGroupsModels.ListGroupInvitationsRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.ListGroupInvitationsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all members for a group
         * https://api.playfab.com/Documentation/Groups/method/ListGroupMembers
         */
        ListGroupMembers(request: PlayFabGroupsModels.ListGroupMembersRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.ListGroupMembersResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all groups and roles for an entity
         * https://api.playfab.com/Documentation/Groups/method/ListMembership
         */
        ListMembership(request: PlayFabGroupsModels.ListMembershipRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.ListMembershipResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all outstanding invitations and group applications for an entity
         * https://api.playfab.com/Documentation/Groups/method/ListMembershipOpportunities
         */
        ListMembershipOpportunities(request: PlayFabGroupsModels.ListMembershipOpportunitiesRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.ListMembershipOpportunitiesResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes an application to join a group
         * https://api.playfab.com/Documentation/Groups/method/RemoveGroupApplication
         */
        RemoveGroupApplication(request: PlayFabGroupsModels.RemoveGroupApplicationRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes an invitation join a group
         * https://api.playfab.com/Documentation/Groups/method/RemoveGroupInvitation
         */
        RemoveGroupInvitation(request: PlayFabGroupsModels.RemoveGroupInvitationRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes members from a group.
         * https://api.playfab.com/Documentation/Groups/method/RemoveMembers
         */
        RemoveMembers(request: PlayFabGroupsModels.RemoveMembersRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Unblocks a list of entities from joining a group
         * https://api.playfab.com/Documentation/Groups/method/UnblockEntity
         */
        UnblockEntity(request: PlayFabGroupsModels.UnblockEntityRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.EmptyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates non-membership data about a group.
         * https://api.playfab.com/Documentation/Groups/method/UpdateGroup
         */
        UpdateGroup(request: PlayFabGroupsModels.UpdateGroupRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.UpdateGroupResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates metadata about a role.
         * https://api.playfab.com/Documentation/Groups/method/UpdateRole
         */
        UpdateRole(request: PlayFabGroupsModels.UpdateGroupRoleRequest, callback: PlayFabModule.ApiCallback<PlayFabGroupsModels.UpdateGroupRoleResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabGroupsModels {
    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.AcceptGroupApplicationRequest */
    export interface AcceptGroupApplicationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Optional. Type of the entity to accept as. If specified, must be the same entity as the claimant or an entity that is a
         * child of the claimant entity. Defaults to the claimant entity.
         */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.AcceptGroupInvitationRequest */
    export interface AcceptGroupInvitationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.AddMembersRequest */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ApplyToGroupRequest */
    export interface ApplyToGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Optional, default true. Automatically accept an outstanding invitation if one exists instead of creating an application */
        AutoAcceptOutstandingInvite?: boolean;
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ApplyToGroupResponse */
    export interface ApplyToGroupResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Type of entity that requested membership */
        Entity?: EntityWithLineage;
        /** When the application to join will expire and be deleted */
        Expires: string;
        /** ID of the group that the entity requesting membership to */
        Group?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.BlockEntityRequest */
    export interface BlockEntityRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ChangeMemberRoleRequest */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.CreateGroupRequest */
    export interface CreateGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;
        /** The name of the group. This is unique at the title level by default. */
        GroupName: string;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.CreateGroupResponse */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.CreateGroupRoleRequest */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.CreateGroupRoleResponse */
    export interface CreateGroupRoleResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The current version of the group profile, can be used for concurrency control during updates. */
        ProfileVersion: number;
        /** ID for the role */
        RoleId?: string;
        /** The name of the role */
        RoleName?: string;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.DeleteGroupRequest */
    export interface DeleteGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** ID of the group or role to remove */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.DeleteRoleRequest */
    export interface DeleteRoleRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;
        /** The ID of the role to delete. Role IDs must be between 1 and 64 characters long. */
        RoleId?: string;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.EmptyResponse */
    export interface EmptyResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.EntityKey */
    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.EntityMemberRole */
    export interface EntityMemberRole {
        /** The list of members in the role */
        Members?: EntityWithLineage[];
        /** The ID of the role. */
        RoleId?: string;
        /** The name of the role */
        RoleName?: string;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.EntityWithLineage */
    export interface EntityWithLineage {
        /** The entity key for the specified entity */
        Key?: EntityKey;
        /** Dictionary of entity keys for related entities. Dictionary key is entity type. */
        Lineage?: { [key: string]: EntityKey };

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GetGroupRequest */
    export interface GetGroupRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group?: EntityKey;
        /** The full name of the group */
        GroupName?: string;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GetGroupResponse */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GroupApplication */
    export interface GroupApplication {
        /** Type of entity that requested membership */
        Entity?: EntityWithLineage;
        /** When the application to join will expire and be deleted */
        Expires: string;
        /** ID of the group that the entity requesting membership to */
        Group?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GroupBlock */
    export interface GroupBlock {
        /** The entity that is blocked */
        Entity?: EntityWithLineage;
        /** ID of the group that the entity is blocked from */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GroupInvitation */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GroupRole */
    export interface GroupRole {
        /** ID for the role */
        RoleId?: string;
        /** The name of the role */
        RoleName?: string;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.GroupWithRoles */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.InviteToGroupRequest */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.InviteToGroupResponse */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.IsMemberRequest */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.IsMemberResponse */
    export interface IsMemberResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** A value indicating whether or not the entity is a member. */
        IsMember: boolean;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupApplicationsRequest */
    export interface ListGroupApplicationsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupApplicationsResponse */
    export interface ListGroupApplicationsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list of applications to the group. */
        Applications?: GroupApplication[];

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupBlocksRequest */
    export interface ListGroupBlocksRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupBlocksResponse */
    export interface ListGroupBlocksResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list blocked entities. */
        BlockedEntities?: GroupBlock[];

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupInvitationsRequest */
    export interface ListGroupInvitationsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupInvitationsResponse */
    export interface ListGroupInvitationsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list of group invitations. */
        Invitations?: GroupInvitation[];

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupMembersRequest */
    export interface ListGroupMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** ID of the group to list the members and roles for */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListGroupMembersResponse */
    export interface ListGroupMembersResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list of roles and member entity IDs. */
        Members?: EntityMemberRole[];

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListMembershipOpportunitiesRequest */
    export interface ListMembershipOpportunitiesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListMembershipOpportunitiesResponse */
    export interface ListMembershipOpportunitiesResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The requested list of group applications. */
        Applications?: GroupApplication[];
        /** The requested list of group invitations. */
        Invitations?: GroupInvitation[];

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListMembershipRequest */
    export interface ListMembershipRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.ListMembershipResponse */
    export interface ListMembershipResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The list of groups */
        Groups?: GroupWithRoles[];

    }

    type OperationTypes = "Created"
        | "Updated"
        | "Deleted"
        | "None";

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.RemoveGroupApplicationRequest */
    export interface RemoveGroupApplicationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.RemoveGroupInvitationRequest */
    export interface RemoveGroupInvitationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.RemoveMembersRequest */
    export interface RemoveMembersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The identifier of the group */
        Group: EntityKey;
        /** List of entities to remove */
        Members: EntityKey[];
        /** The ID of the role to remove the entities from. */
        RoleId?: string;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.UnblockEntityRequest */
    export interface UnblockEntityRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The entity to perform this action on. */
        Entity: EntityKey;
        /** The identifier of the group */
        Group: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.UpdateGroupRequest */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.UpdateGroupResponse */
    export interface UpdateGroupResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string;
        /** New version of the group data. */
        ProfileVersion: number;
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: string;

    }

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.UpdateGroupRoleRequest */
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

    /** https://api.playfab.com/Documentation/Groups/datatype/PlayFab.Groups.Models/PlayFab.Groups.Models.UpdateGroupRoleResponse */
    export interface UpdateGroupRoleResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** Optional reason to explain why the operation was the result that it was. */
        OperationReason?: string;
        /** New version of the role data. */
        ProfileVersion: number;
        /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
        SetResult?: string;

    }


}
