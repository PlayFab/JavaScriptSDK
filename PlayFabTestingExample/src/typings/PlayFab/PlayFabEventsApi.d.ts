/// <reference path="Playfab.d.ts" />

declare module PlayFabEventsModule {
    export interface IPlayFabEvents {
        ForgetAllCredentials(): void;

        /**
         * Write batches of entity based events to PlayStream.
         * https://api.playfab.com/Documentation/Events/method/WriteEvents
         */
        WriteEvents(request: PlayFabEventsModels.WriteEventsRequest, callback: PlayFabModule.ApiCallback<PlayFabEventsModels.WriteEventsResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabEventsModels {
    /** https://api.playfab.com/Documentation/Events/datatype/PlayFab.Events.Models/PlayFab.Events.Models.EntityKey */
    export interface EntityKey {
        /** Unique ID of the entity. */
        Id: string;
        /** Entity type. See https://api.playfab.com/docs/tutorials/entities/entitytypes */
        Type?: string;

    }

    /** https://api.playfab.com/Documentation/Events/datatype/PlayFab.Events.Models/PlayFab.Events.Models.EventContents */
    export interface EventContents {
        /** Entity associated with the event. If null, the event will apply to the calling entity. */
        Entity?: EntityKey;
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

    /** https://api.playfab.com/Documentation/Events/datatype/PlayFab.Events.Models/PlayFab.Events.Models.WriteEventsRequest */
    export interface WriteEventsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Collection of events to write to PlayStream. */
        Events: EventContents[];

    }

    /** https://api.playfab.com/Documentation/Events/datatype/PlayFab.Events.Models/PlayFab.Events.Models.WriteEventsResponse */
    export interface WriteEventsResponse extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The unique identifiers assigned by the server to the events, in the same order as the events in the request. Only
         * returned if FlushToPlayStream option is true.
         */
        AssignedEventIds?: string[];

    }


}
