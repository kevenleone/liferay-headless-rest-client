// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { PatchKeywordBatchData, PatchKeywordBatchResponses, PutKeywordBatchData, PutKeywordBatchResponses, PostKeywordsCommonPageData, PostKeywordsCommonPageResponses, PostBulkSelectionData, PostBulkSelectionResponses, GetStatusData, GetStatusResponses, PatchTaxonomyCategoryBatchData, PatchTaxonomyCategoryBatchResponses, PutTaxonomyCategoryBatchData, PutTaxonomyCategoryBatchResponses, PostSiteTaxonomyVocabulariesCommonPageData, PostSiteTaxonomyVocabulariesCommonPageResponses } from './types.gen';
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

export const patchKeywordBatch = <ThrowOnError extends boolean = false>(options?: Options<PatchKeywordBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).patch<PatchKeywordBatchResponses, unknown, ThrowOnError>({
        url: '/o/bulk/v1.0/keywords/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const putKeywordBatch = <ThrowOnError extends boolean = false>(options?: Options<PutKeywordBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<PutKeywordBatchResponses, unknown, ThrowOnError>({
        url: '/o/bulk/v1.0/keywords/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postKeywordsCommonPage = <ThrowOnError extends boolean = false>(options?: Options<PostKeywordsCommonPageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostKeywordsCommonPageResponses, unknown, ThrowOnError>({
        url: '/o/bulk/v1.0/keywords/common',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postBulkSelection = <ThrowOnError extends boolean = false>(options?: Options<PostBulkSelectionData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostBulkSelectionResponses, unknown, ThrowOnError>({
        url: '/o/bulk/v1.0/bulk-selection',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getStatus = <ThrowOnError extends boolean = false>(options?: Options<GetStatusData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetStatusResponses, unknown, ThrowOnError>({
        url: '/o/bulk/v1.0/status',
        ...options
    });
};

export const patchTaxonomyCategoryBatch = <ThrowOnError extends boolean = false>(options?: Options<PatchTaxonomyCategoryBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).patch<PatchTaxonomyCategoryBatchResponses, unknown, ThrowOnError>({
        url: '/o/bulk/v1.0/taxonomy-categories/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const putTaxonomyCategoryBatch = <ThrowOnError extends boolean = false>(options?: Options<PutTaxonomyCategoryBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<PutTaxonomyCategoryBatchResponses, unknown, ThrowOnError>({
        url: '/o/bulk/v1.0/taxonomy-categories/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postSiteTaxonomyVocabulariesCommonPage = <ThrowOnError extends boolean = false>(options: Options<PostSiteTaxonomyVocabulariesCommonPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostSiteTaxonomyVocabulariesCommonPageResponses, unknown, ThrowOnError>({
        url: '/o/bulk/v1.0/sites/{siteId}/taxonomy-vocabularies/common',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};