// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { DeleteScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorData, DeleteScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorResponses, GetScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorData, GetScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorResponses, PutScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorData, PutScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorResponses, GetScopeScopeKeyByExternalReferenceCodeCollaboratorsPageData, GetScopeScopeKeyByExternalReferenceCodeCollaboratorsPageResponses, PostScopeScopeKeyByExternalReferenceCodeCollaboratorsPageData, PostScopeScopeKeyByExternalReferenceCodeCollaboratorsPageResponses, DeleteByExternalReferenceCodeData, DeleteByExternalReferenceCodeResponses, GetByExternalReferenceCodeData, GetByExternalReferenceCodeResponses, PatchByExternalReferenceCodeData, PatchByExternalReferenceCodeResponses, PutByExternalReferenceCodeData, PutByExternalReferenceCodeResponses, DeleteByExternalReferenceCodeByVersionData, DeleteByExternalReferenceCodeByVersionResponses, GetByExternalReferenceCodeByVersionData, GetByExternalReferenceCodeByVersionResponses, DeleteNecessaryCookieEntryBatchData, DeleteNecessaryCookieEntryBatchResponses, PostNecessaryCookieEntryBatchData, PostNecessaryCookieEntryBatchResponses, PutNecessaryCookieEntryBatchData, PutNecessaryCookieEntryBatchResponses, GetByExternalReferenceCodeVersionsPageData, GetByExternalReferenceCodeVersionsPageResponses, GetNecessaryCookieEntriesPageData, GetNecessaryCookieEntriesPageResponses, PostNecessaryCookieEntryData, PostNecessaryCookieEntryResponses, PostByExternalReferenceCodeByVersionCopyData, PostByExternalReferenceCodeByVersionCopyResponses, PostByExternalReferenceCodeByVersionExpireData, PostByExternalReferenceCodeByVersionExpireResponses, PostNecessaryCookieEntriesPageExportBatchData, PostNecessaryCookieEntriesPageExportBatchResponses, PostValidateData, PostValidateResponses, PutByExternalReferenceCodeByVersionRestoreData, PutByExternalReferenceCodeByVersionRestoreResponses, GetOpenApiData, GetOpenApiResponses, DeleteNecessaryCookieEntryCollaboratorByTypeCollaboratorData, DeleteNecessaryCookieEntryCollaboratorByTypeCollaboratorResponses, GetNecessaryCookieEntryCollaboratorByTypeCollaboratorData, GetNecessaryCookieEntryCollaboratorByTypeCollaboratorResponses, PutNecessaryCookieEntryCollaboratorByTypeCollaboratorData, PutNecessaryCookieEntryCollaboratorByTypeCollaboratorResponses, GetNecessaryCookieEntryCollaboratorsPageData, GetNecessaryCookieEntryCollaboratorsPageResponses, PostNecessaryCookieEntryCollaboratorsPageData, PostNecessaryCookieEntryCollaboratorsPageResponses, PostNecessaryCookieEntryCollaboratorsPageExportBatchData, PostNecessaryCookieEntryCollaboratorsPageExportBatchResponses, DeleteNecessaryCookieEntryData, DeleteNecessaryCookieEntryResponses, GetNecessaryCookieEntryData, GetNecessaryCookieEntryResponses, PatchNecessaryCookieEntryData, PatchNecessaryCookieEntryResponses, PutNecessaryCookieEntryData, PutNecessaryCookieEntryResponses, DeleteNecessaryCookieEntryByVersionData, DeleteNecessaryCookieEntryByVersionResponses, GetNecessaryCookieEntryByVersionData, GetNecessaryCookieEntryByVersionResponses, GetNecessaryCookieEntriesVersionsPageData, GetNecessaryCookieEntriesVersionsPageResponses, GetNecessaryCookieEntryPermissionsPageData, GetNecessaryCookieEntryPermissionsPageResponses, PutNecessaryCookieEntryPermissionsPageData, PutNecessaryCookieEntryPermissionsPageResponses, PostNecessaryCookieEntryByVersionCopyData, PostNecessaryCookieEntryByVersionCopyResponses, PostNecessaryCookieEntryByVersionExpireData, PostNecessaryCookieEntryByVersionExpireResponses, PostNecessaryCookieEntryExpireData, PostNecessaryCookieEntryExpireResponses, PutNecessaryCookieEntryByVersionRestoreData, PutNecessaryCookieEntryByVersionRestoreResponses } from './types.gen';
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
 * Deletes the collaborator for an object entry and returns a 204 if the operation succeeds.
 */
export const deleteScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaborator = <ThrowOnError extends boolean = false>(options: Options<DeleteScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/scopes/{scopeKey}/by-external-reference-code/{externalReferenceCode}/collaborators/by-type/{type}/{collaboratorId}',
        ...options
    });
};

/**
 * Retrieves the collaborator for an object entry.
 */
export const getScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaborator = <ThrowOnError extends boolean = false>(options: Options<GetScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/scopes/{scopeKey}/by-external-reference-code/{externalReferenceCode}/collaborators/by-type/{type}/{collaboratorId}',
        ...options
    });
};

/**
 * Add or update a collaborator received in the request.
 */
export const putScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaborator = <ThrowOnError extends boolean = false>(options: Options<PutScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutScopeScopeKeyByExternalReferenceCodeCollaboratorByTypeCollaboratorResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/scopes/{scopeKey}/by-external-reference-code/{externalReferenceCode}/collaborators/by-type/{type}/{collaboratorId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

/**
 * Retrieves the collaborators of an object entry.
 */
export const getScopeScopeKeyByExternalReferenceCodeCollaboratorsPage = <ThrowOnError extends boolean = false>(options: Options<GetScopeScopeKeyByExternalReferenceCodeCollaboratorsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetScopeScopeKeyByExternalReferenceCodeCollaboratorsPageResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/scopes/{scopeKey}/by-external-reference-code/{externalReferenceCode}/collaborators',
        ...options
    });
};

/**
 * Add or update all the collaborators received in the request. Delete existing collaborators that are not included in the request. Send a notification for the new collaborators and those whose permissions are different.
 */
export const postScopeScopeKeyByExternalReferenceCodeCollaboratorsPage = <ThrowOnError extends boolean = false>(options: Options<PostScopeScopeKeyByExternalReferenceCodeCollaboratorsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostScopeScopeKeyByExternalReferenceCodeCollaboratorsPageResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/scopes/{scopeKey}/by-external-reference-code/{externalReferenceCode}/collaborators',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<DeleteByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/by-external-reference-code/{externalReferenceCode}',
        ...options
    });
};

export const getByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<GetByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/by-external-reference-code/{externalReferenceCode}',
        ...options
    });
};

export const patchByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<PatchByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/by-external-reference-code/{externalReferenceCode}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const putByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<PutByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/by-external-reference-code/{externalReferenceCode}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteByExternalReferenceCodeByVersion = <ThrowOnError extends boolean = false>(options: Options<DeleteByExternalReferenceCodeByVersionData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteByExternalReferenceCodeByVersionResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/by-external-reference-code/{externalReferenceCode}/by-version/{version}',
        ...options
    });
};

export const getByExternalReferenceCodeByVersion = <ThrowOnError extends boolean = false>(options: Options<GetByExternalReferenceCodeByVersionData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetByExternalReferenceCodeByVersionResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/by-external-reference-code/{externalReferenceCode}/by-version/{version}',
        ...options
    });
};

export const deleteNecessaryCookieEntryBatch = <ThrowOnError extends boolean = false>(options?: Options<DeleteNecessaryCookieEntryBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).delete<DeleteNecessaryCookieEntryBatchResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postNecessaryCookieEntryBatch = <ThrowOnError extends boolean = false>(options?: Options<PostNecessaryCookieEntryBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostNecessaryCookieEntryBatchResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const putNecessaryCookieEntryBatch = <ThrowOnError extends boolean = false>(options?: Options<PutNecessaryCookieEntryBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<PutNecessaryCookieEntryBatchResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getByExternalReferenceCodeVersionsPage = <ThrowOnError extends boolean = false>(options: Options<GetByExternalReferenceCodeVersionsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetByExternalReferenceCodeVersionsPageResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/by-external-reference-code/{externalReferenceCode}/versions',
        ...options
    });
};

export const getNecessaryCookieEntriesPage = <ThrowOnError extends boolean = false>(options?: Options<GetNecessaryCookieEntriesPageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetNecessaryCookieEntriesPageResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/',
        ...options
    });
};

export const postNecessaryCookieEntry = <ThrowOnError extends boolean = false>(options?: Options<PostNecessaryCookieEntryData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostNecessaryCookieEntryResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postByExternalReferenceCodeByVersionCopy = <ThrowOnError extends boolean = false>(options: Options<PostByExternalReferenceCodeByVersionCopyData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostByExternalReferenceCodeByVersionCopyResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/by-external-reference-code/{externalReferenceCode}/by-version/{version}/copy',
        ...options
    });
};

export const postByExternalReferenceCodeByVersionExpire = <ThrowOnError extends boolean = false>(options: Options<PostByExternalReferenceCodeByVersionExpireData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostByExternalReferenceCodeByVersionExpireResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/by-external-reference-code/{externalReferenceCode}/by-version/{version}/expire',
        ...options
    });
};

export const postNecessaryCookieEntriesPageExportBatch = <ThrowOnError extends boolean = false>(options?: Options<PostNecessaryCookieEntriesPageExportBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostNecessaryCookieEntriesPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/export-batch',
        ...options
    });
};

export const postValidate = <ThrowOnError extends boolean = false>(options?: Options<PostValidateData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostValidateResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/validate',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const putByExternalReferenceCodeByVersionRestore = <ThrowOnError extends boolean = false>(options: Options<PutByExternalReferenceCodeByVersionRestoreData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutByExternalReferenceCodeByVersionRestoreResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/by-external-reference-code/{externalReferenceCode}/by-version/{version}/restore',
        ...options
    });
};

export const getOpenApi = <ThrowOnError extends boolean = false>(options: Options<GetOpenApiData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetOpenApiResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/openapi.{type}',
        ...options
    });
};

/**
 * Deletes the collaborator for an object entry and returns a 204 if the operation succeeds.
 */
export const deleteNecessaryCookieEntryCollaboratorByTypeCollaborator = <ThrowOnError extends boolean = false>(options: Options<DeleteNecessaryCookieEntryCollaboratorByTypeCollaboratorData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteNecessaryCookieEntryCollaboratorByTypeCollaboratorResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/collaborators/by-type/{type}/{collaboratorId}',
        ...options
    });
};

/**
 * Retrieves the collaborator for an object entry.
 */
export const getNecessaryCookieEntryCollaboratorByTypeCollaborator = <ThrowOnError extends boolean = false>(options: Options<GetNecessaryCookieEntryCollaboratorByTypeCollaboratorData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetNecessaryCookieEntryCollaboratorByTypeCollaboratorResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/collaborators/by-type/{type}/{collaboratorId}',
        ...options
    });
};

/**
 * Add or update a collaborator received in the request.
 */
export const putNecessaryCookieEntryCollaboratorByTypeCollaborator = <ThrowOnError extends boolean = false>(options: Options<PutNecessaryCookieEntryCollaboratorByTypeCollaboratorData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutNecessaryCookieEntryCollaboratorByTypeCollaboratorResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/collaborators/by-type/{type}/{collaboratorId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

/**
 * Retrieves the collaborators of an object entry.
 */
export const getNecessaryCookieEntryCollaboratorsPage = <ThrowOnError extends boolean = false>(options: Options<GetNecessaryCookieEntryCollaboratorsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetNecessaryCookieEntryCollaboratorsPageResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/collaborators',
        ...options
    });
};

/**
 * Add or update all the collaborators received in the request. Delete existing collaborators that are not included in the request.
 */
export const postNecessaryCookieEntryCollaboratorsPage = <ThrowOnError extends boolean = false>(options: Options<PostNecessaryCookieEntryCollaboratorsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostNecessaryCookieEntryCollaboratorsPageResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/collaborators',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const postNecessaryCookieEntryCollaboratorsPageExportBatch = <ThrowOnError extends boolean = false>(options: Options<PostNecessaryCookieEntryCollaboratorsPageExportBatchData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostNecessaryCookieEntryCollaboratorsPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/collaborators/export-batch',
        ...options
    });
};

export const deleteNecessaryCookieEntry = <ThrowOnError extends boolean = false>(options: Options<DeleteNecessaryCookieEntryData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteNecessaryCookieEntryResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}',
        ...options
    });
};

export const getNecessaryCookieEntry = <ThrowOnError extends boolean = false>(options: Options<GetNecessaryCookieEntryData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetNecessaryCookieEntryResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}',
        ...options
    });
};

export const patchNecessaryCookieEntry = <ThrowOnError extends boolean = false>(options: Options<PatchNecessaryCookieEntryData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchNecessaryCookieEntryResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const putNecessaryCookieEntry = <ThrowOnError extends boolean = false>(options: Options<PutNecessaryCookieEntryData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutNecessaryCookieEntryResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteNecessaryCookieEntryByVersion = <ThrowOnError extends boolean = false>(options: Options<DeleteNecessaryCookieEntryByVersionData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteNecessaryCookieEntryByVersionResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/by-version/{version}',
        ...options
    });
};

export const getNecessaryCookieEntryByVersion = <ThrowOnError extends boolean = false>(options: Options<GetNecessaryCookieEntryByVersionData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetNecessaryCookieEntryByVersionResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/by-version/{version}',
        ...options
    });
};

export const getNecessaryCookieEntriesVersionsPage = <ThrowOnError extends boolean = false>(options: Options<GetNecessaryCookieEntriesVersionsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetNecessaryCookieEntriesVersionsPageResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/versions',
        ...options
    });
};

export const getNecessaryCookieEntryPermissionsPage = <ThrowOnError extends boolean = false>(options: Options<GetNecessaryCookieEntryPermissionsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetNecessaryCookieEntryPermissionsPageResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/permissions',
        ...options
    });
};

export const putNecessaryCookieEntryPermissionsPage = <ThrowOnError extends boolean = false>(options: Options<PutNecessaryCookieEntryPermissionsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutNecessaryCookieEntryPermissionsPageResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/permissions',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const postNecessaryCookieEntryByVersionCopy = <ThrowOnError extends boolean = false>(options: Options<PostNecessaryCookieEntryByVersionCopyData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostNecessaryCookieEntryByVersionCopyResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/by-version/{version}/copy',
        ...options
    });
};

export const postNecessaryCookieEntryByVersionExpire = <ThrowOnError extends boolean = false>(options: Options<PostNecessaryCookieEntryByVersionExpireData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostNecessaryCookieEntryByVersionExpireResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/by-version/{version}/expire',
        ...options
    });
};

export const postNecessaryCookieEntryExpire = <ThrowOnError extends boolean = false>(options: Options<PostNecessaryCookieEntryExpireData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostNecessaryCookieEntryExpireResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/expire',
        ...options
    });
};

export const putNecessaryCookieEntryByVersionRestore = <ThrowOnError extends boolean = false>(options: Options<PutNecessaryCookieEntryByVersionRestoreData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutNecessaryCookieEntryByVersionRestoreResponses, unknown, ThrowOnError>({
        url: '/o/necessary-cookies-entries/{necessaryCookieEntryId}/by-version/{version}/restore',
        ...options
    });
};