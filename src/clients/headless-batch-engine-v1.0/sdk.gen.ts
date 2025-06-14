// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { GetExportTaskData, GetExportTaskResponses, GetExportTaskByExternalReferenceCodeData, GetExportTaskByExternalReferenceCodeResponses, GetExportTaskByExternalReferenceCodeContentData, GetExportTaskByExternalReferenceCodeContentResponses, GetExportTaskContentData, GetExportTaskContentResponses, PostExportTaskData, PostExportTaskResponses, DeleteImportTask1Data, DeleteImportTask1Responses, PostImportTask1Data, PostImportTask1Responses, PutImportTask1Data, PutImportTask1Responses, GetImportTaskData, GetImportTaskResponses, GetImportTaskByExternalReferenceCodeData, GetImportTaskByExternalReferenceCodeResponses, GetImportTaskByExternalReferenceCodeContentData, GetImportTaskByExternalReferenceCodeContentResponses, GetImportTaskByExternalReferenceCodeFailedItemReportData, GetImportTaskByExternalReferenceCodeFailedItemReportResponses, GetImportTaskContentData, GetImportTaskContentResponses, GetImportTaskFailedItemReportData, GetImportTaskFailedItemReportResponses } from './types.gen';
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
 * Retrieves the export task.
 */
export const getExportTask = <ThrowOnError extends boolean = false>(options: Options<GetExportTaskData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetExportTaskResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/export-task/{exportTaskId}',
        ...options
    });
};

/**
 * Retrieves the export task by external reference code.
 */
export const getExportTaskByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<GetExportTaskByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetExportTaskByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/export-task/by-external-reference-code/{externalReferenceCode}',
        ...options
    });
};

/**
 * Retrieves the exported content by external reference code.
 */
export const getExportTaskByExternalReferenceCodeContent = <ThrowOnError extends boolean = false>(options: Options<GetExportTaskByExternalReferenceCodeContentData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetExportTaskByExternalReferenceCodeContentResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/export-task/by-external-reference-code/{externalReferenceCode}/content',
        ...options
    });
};

/**
 * Retrieves the exported content.
 */
export const getExportTaskContent = <ThrowOnError extends boolean = false>(options: Options<GetExportTaskContentData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetExportTaskContentResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/export-task/{exportTaskId}/content',
        ...options
    });
};

/**
 * Submits a request for exporting items to a file.
 */
export const postExportTask = <ThrowOnError extends boolean = false>(options: Options<PostExportTaskData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostExportTaskResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/export-task/{className}/{contentType}',
        ...options
    });
};

/**
 * Uploads a new file for deleting items in batch.
 */
export const deleteImportTask1 = <ThrowOnError extends boolean = false>(options: Options<DeleteImportTask1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteImportTask1Responses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/import-task/{className}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

/**
 * Uploads a new file for creating new items in batch.
 */
export const postImportTask1 = <ThrowOnError extends boolean = false>(options: Options<PostImportTask1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostImportTask1Responses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/import-task/{className}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

/**
 * Uploads a new file for updating items in batch.
 */
export const putImportTask1 = <ThrowOnError extends boolean = false>(options: Options<PutImportTask1Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutImportTask1Responses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/import-task/{className}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

/**
 * Retrieves the import task.
 */
export const getImportTask = <ThrowOnError extends boolean = false>(options: Options<GetImportTaskData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetImportTaskResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/import-task/{importTaskId}',
        ...options
    });
};

/**
 * Retrieves the import task by external reference code.
 */
export const getImportTaskByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<GetImportTaskByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetImportTaskByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/import-task/by-external-reference-code/{externalReferenceCode}',
        ...options
    });
};

/**
 * Retrieves the exported content by external reference code.
 */
export const getImportTaskByExternalReferenceCodeContent = <ThrowOnError extends boolean = false>(options: Options<GetImportTaskByExternalReferenceCodeContentData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetImportTaskByExternalReferenceCodeContentResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/import-task/by-external-reference-code/{externalReferenceCode}/content',
        ...options
    });
};

export const getImportTaskByExternalReferenceCodeFailedItemReport = <ThrowOnError extends boolean = false>(options: Options<GetImportTaskByExternalReferenceCodeFailedItemReportData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetImportTaskByExternalReferenceCodeFailedItemReportResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/import-task/by-external-reference-code/{externalReferenceCode}/failed-items/report',
        ...options
    });
};

/**
 * Retrieves the exported content.
 */
export const getImportTaskContent = <ThrowOnError extends boolean = false>(options: Options<GetImportTaskContentData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetImportTaskContentResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/import-task/{importTaskId}/content',
        ...options
    });
};

export const getImportTaskFailedItemReport = <ThrowOnError extends boolean = false>(options: Options<GetImportTaskFailedItemReportData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetImportTaskFailedItemReportResponses, unknown, ThrowOnError>({
        url: '/o/headless-batch-engine/v1.0/import-task/{importTaskId}/failed-items/report',
        ...options
    });
};