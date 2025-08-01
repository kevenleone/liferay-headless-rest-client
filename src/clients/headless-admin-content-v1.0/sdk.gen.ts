// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { GetSiteDisplayPageTemplateData, GetSiteDisplayPageTemplateResponses, GetSiteDisplayPageTemplatesPageData, GetSiteDisplayPageTemplatesPageResponses, PostSitePageDefinitionPreviewData, PostSitePageDefinitionPreviewResponses, DeleteStructuredContentByVersionData, DeleteStructuredContentByVersionResponses, GetStructuredContentByVersionData, GetStructuredContentByVersionResponses, GetSiteStructuredContentsPageData, GetSiteStructuredContentsPageResponses, GetStructuredContentsVersionsPageData, GetStructuredContentsVersionsPageResponses, PostSiteStructuredContentDraftData, PostSiteStructuredContentDraftResponses } from './types.gen';
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
 * Retrieves a display page template of a site
 */
export const getSiteDisplayPageTemplate = <ThrowOnError extends boolean = false>(options: Options<GetSiteDisplayPageTemplateData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetSiteDisplayPageTemplateResponses, unknown, ThrowOnError>({
        url: '/o/headless-admin-content/v1.0/sites/{siteId}/display-page-templates/{displayPageTemplateKey}',
        ...options
    });
};

/**
 * Retrieves the display page templates of a site
 */
export const getSiteDisplayPageTemplatesPage = <ThrowOnError extends boolean = false>(options: Options<GetSiteDisplayPageTemplatesPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetSiteDisplayPageTemplatesPageResponses, unknown, ThrowOnError>({
        url: '/o/headless-admin-content/v1.0/sites/{siteId}/display-page-templates',
        ...options
    });
};

/**
 * Renders and retrieves HTML for the page definition using the theme of specified site.
 */
export const postSitePageDefinitionPreview = <ThrowOnError extends boolean = false>(options: Options<PostSitePageDefinitionPreviewData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostSitePageDefinitionPreviewResponses, unknown, ThrowOnError>({
        url: '/o/headless-admin-content/v1.0/sites/{siteId}/page-definitions/preview',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

/**
 * Deletes a version of a structured content via its ID.
 */
export const deleteStructuredContentByVersion = <ThrowOnError extends boolean = false>(options: Options<DeleteStructuredContentByVersionData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteStructuredContentByVersionResponses, unknown, ThrowOnError>({
        url: '/o/headless-admin-content/v1.0/structured-contents/{structuredContentId}/by-version/{version}',
        ...options
    });
};

/**
 * Retrieves a version of a structured content
 */
export const getStructuredContentByVersion = <ThrowOnError extends boolean = false>(options: Options<GetStructuredContentByVersionData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetStructuredContentByVersionResponses, unknown, ThrowOnError>({
        url: '/o/headless-admin-content/v1.0/structured-contents/{structuredContentId}/by-version/{version}',
        ...options
    });
};

/**
 * Retrieves the site's structured contents latest version. Results can be paginated, filtered, searched, flattened, and sorted.
 */
export const getSiteStructuredContentsPage = <ThrowOnError extends boolean = false>(options: Options<GetSiteStructuredContentsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetSiteStructuredContentsPageResponses, unknown, ThrowOnError>({
        url: '/o/headless-admin-content/v1.0/sites/{siteId}/structured-contents',
        ...options
    });
};

/**
 * Retrieves all versions of a structured content via its ID.
 */
export const getStructuredContentsVersionsPage = <ThrowOnError extends boolean = false>(options: Options<GetStructuredContentsVersionsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetStructuredContentsVersionsPageResponses, unknown, ThrowOnError>({
        url: '/o/headless-admin-content/v1.0/structured-contents/{structuredContentId}/versions',
        ...options
    });
};

/**
 * Creates a draft of a structured content
 */
export const postSiteStructuredContentDraft = <ThrowOnError extends boolean = false>(options: Options<PostSiteStructuredContentDraftData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostSiteStructuredContentDraftResponses, unknown, ThrowOnError>({
        url: '/o/headless-admin-content/v1.0/sites/{siteId}/structured-contents/draft',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};