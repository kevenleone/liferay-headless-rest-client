// This file is auto-generated by @hey-api/openapi-ts

export type Facet = {
    facetCriteria?: string;
    facetValues?: Array<FacetValue>;
};

export type FacetValue = {
    numberOfOccurrences?: number;
    term?: string;
};

export type PageUserNotification = {
    totalCount?: number;
    lastPage?: number;
    items?: Array<UserNotification>;
    actions?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    pageSize?: number;
    facets?: Array<Facet>;
    page?: number;
};

export type UserNotification = {
    /**
     * Block of actions allowed by the user making the request.
     */
    readonly actions?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    /**
     * The user notification's creation date.
     */
    readonly dateCreated?: string;
    /**
     * The user notification's identifier.
     */
    readonly id?: number;
    /**
     * The user notification's message.
     */
    message?: string;
    /**
     * A flag that indicates whether this user notification has been read.
     */
    readonly read?: boolean;
    /**
     * User notification's type.
     */
    readonly type?: number;
    readonly 'x-class-name'?: string;
};

export type GetMyUserNotificationsPageData = {
    body?: never;
    path?: never;
    query?: {
        fields?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        restrictFields?: string;
        search?: string;
        sort?: string;
        nestedFields?: string;
    };
    url: '/o/headless-user-notification/v1.0/my-user-notifications';
};

export type GetMyUserNotificationsPageResponses = {
    /**
     * default response
     */
    default: PageUserNotification;
};

export type GetMyUserNotificationsPageResponse = GetMyUserNotificationsPageResponses[keyof GetMyUserNotificationsPageResponses];

export type GetUserAccountUserNotificationsPageData = {
    body?: never;
    path: {
        userAccountId: string;
    };
    query?: {
        fields?: string;
        filter?: string;
        page?: string;
        pageSize?: string;
        restrictFields?: string;
        search?: string;
        sort?: string;
        nestedFields?: string;
    };
    url: '/o/headless-user-notification/v1.0/user-accounts/{userAccountId}/user-notifications';
};

export type GetUserAccountUserNotificationsPageResponses = {
    /**
     * default response
     */
    default: PageUserNotification;
};

export type GetUserAccountUserNotificationsPageResponse = GetUserAccountUserNotificationsPageResponses[keyof GetUserAccountUserNotificationsPageResponses];

export type GetUserNotificationData = {
    body?: never;
    path: {
        userNotificationId: string;
    };
    query?: {
        fields?: string;
        restrictFields?: string;
    };
    url: '/o/headless-user-notification/v1.0/user-notifications/{userNotificationId}';
};

export type GetUserNotificationResponses = {
    /**
     * default response
     */
    default: UserNotification;
};

export type GetUserNotificationResponse = GetUserNotificationResponses[keyof GetUserNotificationResponses];

export type PutUserNotificationReadData = {
    body?: never;
    path: {
        userNotificationId: string;
    };
    query?: {
        fields?: string;
        restrictFields?: string;
    };
    url: '/o/headless-user-notification/v1.0/user-notifications/{userNotificationId}/read';
};

export type PutUserNotificationReadResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type PutUserNotificationUnreadData = {
    body?: never;
    path: {
        userNotificationId: string;
    };
    query?: {
        fields?: string;
        restrictFields?: string;
    };
    url: '/o/headless-user-notification/v1.0/user-notifications/{userNotificationId}/unread';
};

export type PutUserNotificationUnreadResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type ClientOptions = {
    baseUrl: 'http://localhost:8080' | (string & {});
};