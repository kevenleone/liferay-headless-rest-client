// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { GetMyUserNotificationsPageData, GetMyUserNotificationsPageResponses, GetUserAccountUserNotificationsPageData, GetUserAccountUserNotificationsPageResponses, GetUserNotificationData, GetUserNotificationResponses, PutUserNotificationReadData, PutUserNotificationReadResponses, PutUserNotificationUnreadData, PutUserNotificationUnreadResponses } from './types.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};

/**
 * Retrieves the current user's notifications. Results can be paginated, filtered, searched and sorted.
 */
export const getMyUserNotificationsPage = <ThrowOnError extends boolean = false>(options?: Options<GetMyUserNotificationsPageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetMyUserNotificationsPageResponses, unknown, ThrowOnError>({
        url: '/o/headless-user-notification/v1.0/my-user-notifications',
        ...options
    });
};

/**
 * Retrieves the user account's notifications. Results can be paginated, filtered, searched and sorted.
 */
export const getUserAccountUserNotificationsPage = <ThrowOnError extends boolean = false>(options: Options<GetUserAccountUserNotificationsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetUserAccountUserNotificationsPageResponses, unknown, ThrowOnError>({
        url: '/o/headless-user-notification/v1.0/user-accounts/{userAccountId}/user-notifications',
        ...options
    });
};

/**
 * Retrieves the user notification.
 */
export const getUserNotification = <ThrowOnError extends boolean = false>(options: Options<GetUserNotificationData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetUserNotificationResponses, unknown, ThrowOnError>({
        url: '/o/headless-user-notification/v1.0/user-notifications/{userNotificationId}',
        ...options
    });
};

/**
 * Mark the user notification as read.
 */
export const putUserNotificationRead = <ThrowOnError extends boolean = false>(options: Options<PutUserNotificationReadData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutUserNotificationReadResponses, unknown, ThrowOnError>({
        url: '/o/headless-user-notification/v1.0/user-notifications/{userNotificationId}/read',
        ...options
    });
};

/**
 * Mark the user notification as unread.
 */
export const putUserNotificationUnread = <ThrowOnError extends boolean = false>(options: Options<PutUserNotificationUnreadData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutUserNotificationUnreadResponses, unknown, ThrowOnError>({
        url: '/o/headless-user-notification/v1.0/user-notifications/{userNotificationId}/unread',
        ...options
    });
};