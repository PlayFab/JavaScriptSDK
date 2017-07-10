/// <reference path="Playfab.d.ts" />

declare module PlayFabMatchmakerModule {
    export interface IPlayFabMatchmaker {
        /**
         / Validates a user with the PlayFab service
         / https://api.playfab.com/Documentation/Matchmaker/method/AuthUser
         */
        AuthUser(request: PlayFabMatchmakerModels.AuthUserRequest, callback: PlayFabModule.ApiCallback<PlayFabMatchmakerModels.AuthUserResponse>): void;
        /**
         / Informs the PlayFab game server hosting service that the indicated user has joined the Game Server Instance specified
         / https://api.playfab.com/Documentation/Matchmaker/method/PlayerJoined
         */
        PlayerJoined(request: PlayFabMatchmakerModels.PlayerJoinedRequest, callback: PlayFabModule.ApiCallback<PlayFabMatchmakerModels.PlayerJoinedResponse>): void;
        /**
         / Informs the PlayFab game server hosting service that the indicated user has left the Game Server Instance specified
         / https://api.playfab.com/Documentation/Matchmaker/method/PlayerLeft
         */
        PlayerLeft(request: PlayFabMatchmakerModels.PlayerLeftRequest, callback: PlayFabModule.ApiCallback<PlayFabMatchmakerModels.PlayerLeftResponse>): void;
        /**
         / Instructs the PlayFab game server hosting service to instantiate a new Game Server Instance
         / https://api.playfab.com/Documentation/Matchmaker/method/StartGame
         */
        StartGame(request: PlayFabMatchmakerModels.StartGameRequest, callback: PlayFabModule.ApiCallback<PlayFabMatchmakerModels.StartGameResponse>): void;
        /**
         / Retrieves the relevant details for a specified user, which the external match-making service can then use to compute effective matches
         / https://api.playfab.com/Documentation/Matchmaker/method/UserInfo
         */
        UserInfo(request: PlayFabMatchmakerModels.UserInfoRequest, callback: PlayFabModule.ApiCallback<PlayFabMatchmakerModels.UserInfoResponse>): void;

    }
}

declare module PlayFabMatchmakerModels {
    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.AuthUserRequest
     */
    export interface AuthUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         / Session Ticket provided by the client.
         */
        AuthorizationTicket: string;

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.AuthUserResponse
     */
    export interface AuthUserResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         / Boolean indicating if the user has been authorized to use the external match-making service.
         */
        Authorized: boolean;
        /**
         / PlayFab unique identifier of the account that has been authorized.
         */
        PlayFabId?: string;

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.DeregisterGameRequest
     */
    export interface DeregisterGameRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         / Unique identifier for the Game Server Instance that is being deregistered.
         */
        LobbyId: string;

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.DeregisterGameResponse
     */
    export interface DeregisterGameResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.ItemInstance
     */
    export interface ItemInstance {
        /**
         / Unique identifier for the inventory item, as defined in the catalog.
         */
        ItemId?: string;
        /**
         / Unique item identifier for this specific instance of the item.
         */
        ItemInstanceId?: string;
        /**
         / Class name for the inventory item, as defined in the catalog.
         */
        ItemClass?: string;
        /**
         / Timestamp for when this instance was purchased.
         */
        PurchaseDate?: string;
        /**
         / Timestamp for when this instance will expire.
         */
        Expiration?: string;
        /**
         / Total number of remaining uses, if this is a consumable item.
         */
        RemainingUses?: number;
        /**
         / The number of uses that were added or removed to this item in this call.
         */
        UsesIncrementedBy?: number;
        /**
         / Game specific comment associated with this instance when it was added to the user inventory.
         */
        Annotation?: string;
        /**
         / Catalog version for the inventory item, when this instance was created.
         */
        CatalogVersion?: string;
        /**
         / Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or container.
         */
        BundleParent?: string;
        /**
         / CatalogItem.DisplayName at the time this item was purchased.
         */
        DisplayName?: string;
        /**
         / Currency type for the cost of the catalog item.
         */
        UnitCurrency?: string;
        /**
         / Cost of the catalog item in the given currency.
         */
        UnitPrice: number;
        /**
         / Array of unique items that were awarded when this catalog item was purchased.
         */
        BundleContents?: string[];
        /**
         / A set of custom key-value pairs on the inventory item.
         */
        CustomData?: { [key: string]: string };

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.PlayerJoinedRequest
     */
    export interface PlayerJoinedRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         / Unique identifier of the Game Server Instance the user is joining.
         */
        LobbyId: string;
        /**
         / PlayFab unique identifier for the user joining.
         */
        PlayFabId: string;

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.PlayerJoinedResponse
     */
    export interface PlayerJoinedResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.PlayerLeftRequest
     */
    export interface PlayerLeftRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         / Unique identifier of the Game Server Instance the user is leaving.
         */
        LobbyId: string;
        /**
         / PlayFab unique identifier for the user leaving.
         */
        PlayFabId: string;

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.PlayerLeftResponse
     */
    export interface PlayerLeftResponse extends PlayFabModule.IPlayFabResultCommon  {

    }

    type Region = "USCentral"
        | "USEast"
        | "EUWest"
        | "Singapore"
        | "Japan"
        | "Brazil"
        | "Australia";

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.RegisterGameRequest
     */
    export interface RegisterGameRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         / Previous lobby id if re-registering an existing game.
         */
        LobbyId?: string;
        /**
         / IP address of the Game Server Instance.
         */
        ServerHost: string;
        /**
         / Port number for communication with the Game Server Instance.
         */
        ServerPort: string;
        /**
         / Unique identifier of the build running on the Game Server Instance.
         */
        Build: string;
        /**
         / Region in which the Game Server Instance is running. For matchmaking using non-AWS region names, set this to any AWS region and use Tags (below) to specify your custom region.
         */
        Region: string;
        /**
         / Game Mode the Game Server instance is running. Note that this must be defined in the Game Modes tab in the PlayFab Game Manager, along with the Build ID (the same Game Mode can be defined for multiple Build IDs).
         */
        GameMode: string;
        /**
         / Tags for the Game Server Instance
         */
        Tags?: { [key: string]: string };

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.RegisterGameResponse
     */
    export interface RegisterGameResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         / Unique identifier generated for the Game Server Instance that is registered. If LobbyId is specified in request and the game still exists in PlayFab, the LobbyId in request is returned. Otherwise a new lobby id will be returned.
         */
        LobbyId?: string;

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.StartGameRequest
     */
    export interface StartGameRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         / Unique identifier of the previously uploaded build executable which is to be started.
         */
        Build: string;
        /**
         / Region with which to associate the server, for filtering.
         */
        Region: string;
        /**
         / Game mode for this Game Server Instance.
         */
        GameMode: string;
        /**
         / Custom command line argument when starting game server process.
         */
        CustomCommandLineData?: string;
        /**
         / HTTP endpoint URL for receiving game status events, if using an external matchmaker. When the game ends, PlayFab will make a POST request to this URL with the X-SecretKey header set to the value of the game's secret and an application/json body of { "EventName": "game_ended", "GameID": "<gameid>" }.
         */
        ExternalMatchmakerEventEndpoint: string;

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.StartGameResponse
     */
    export interface StartGameResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         / Unique identifier for the game/lobby in the new Game Server Instance.
         */
        GameID?: string;
        /**
         / IP address of the new Game Server Instance.
         */
        ServerHostname?: string;
        /**
         / Port number for communication with the Game Server Instance.
         */
        ServerPort: number;

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.UserInfoRequest
     */
    export interface UserInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         / PlayFab unique identifier of the user whose information is being requested.
         */
        PlayFabId: string;
        /**
         / Minimum catalog version for which data is requested (filters the results to only contain inventory items which have a catalog version of this or higher).
         */
        MinCatalogVersion: number;

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.UserInfoResponse
     */
    export interface UserInfoResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         / PlayFab unique identifier of the user whose information was requested.
         */
        PlayFabId?: string;
        /**
         / PlayFab unique user name.
         */
        Username?: string;
        /**
         / Title specific display name, if set.
         */
        TitleDisplayName?: string;
        /**
         / Array of inventory items in the user's current inventory.
         */
        Inventory?: ItemInstance[];
        /**
         / Array of virtual currency balance(s) belonging to the user.
         */
        VirtualCurrency?: { [key: string]: number };
        /**
         / Array of remaining times and timestamps for virtual currencies.
         */
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };
        /**
         / Boolean indicating whether the user is a developer.
         */
        IsDeveloper: boolean;
        /**
         / Steam unique identifier, if the user has an associated Steam account.
         */
        SteamId?: string;

    }

    /**
     / https://api.playfab.com/Documentation/Client/datatype/PlayFab.Matchmaker.Models/PlayFab.Matchmaker.Models.VirtualCurrencyRechargeTime
     */
    export interface VirtualCurrencyRechargeTime {
        /**
         / Time remaining (in seconds) before the next recharge increment of the virtual currency.
         */
        SecondsToRecharge: number;
        /**
         / Server timestamp in UTC indicating the next time the virtual currency will be incremented.
         */
        RechargeTime: string;
        /**
         / Maximum value to which the regenerating currency will automatically increment. Note that it can exceed this value through use of the AddUserVirtualCurrency API call. However, it will not regenerate automatically until it has fallen below this value.
         */
        RechargeMax: number;

    }


}
