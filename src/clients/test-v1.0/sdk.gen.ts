// This file is auto-generated by @hey-api/openapi-ts

import { type Options as ClientOptions, type TDataShape, type Client, formDataBodySerializer } from '@hey-api/client-fetch';
import type { GetCompanyTestEntitiesPageData, GetCompanyTestEntitiesPageResponses, PostCompanyTestEntityData, PostCompanyTestEntityResponses, GetCompanyTestEntityData, GetCompanyTestEntityResponses, PatchCompanyTestEntityData, PatchCompanyTestEntityResponses, PutCompanyTestEntityData, PutCompanyTestEntityResponses, GetCompanyTestEntityByExternalReferenceCodeData, GetCompanyTestEntityByExternalReferenceCodeResponses, PutCompanyTestEntityByExternalReferenceCodeData, PutCompanyTestEntityByExternalReferenceCodeResponses, GetCompanyTestEntityPermissionsPageData, GetCompanyTestEntityPermissionsPageResponses, PutCompanyTestEntityPermissionsPageData, PutCompanyTestEntityPermissionsPageResponses, PostCompanyTestEntitiesPageExportBatchData, PostCompanyTestEntitiesPageExportBatchResponses, PostCompanyTestEntityBatchData, PostCompanyTestEntityBatchResponses, PutCompanyTestEntityBatchData, PutCompanyTestEntityBatchResponses, GetAssetLibraryErcAssetLibraryTestEntitiesPageData, GetAssetLibraryErcAssetLibraryTestEntitiesPageResponses, PostAssetLibraryErcAssetLibraryTestEntityData, PostAssetLibraryErcAssetLibraryTestEntityResponses, GetAssetLibraryErcAssetLibraryTestEntityErcAssetLibraryTestEntityExternalReferenceCodeData, GetAssetLibraryErcAssetLibraryTestEntityErcAssetLibraryTestEntityExternalReferenceCodeResponses, PutAssetLibraryErcAssetLibraryTestEntityErcAssetLibraryTestEntityExternalReferenceCodeData, PutAssetLibraryErcAssetLibraryTestEntityErcAssetLibraryTestEntityExternalReferenceCodeResponses, PostAssetLibraryErcAssetLibraryTestEntitiesPageExportBatchData, PostAssetLibraryErcAssetLibraryTestEntitiesPageExportBatchResponses, PostAssetLibraryErcAssetLibraryTestEntityBatchData, PostAssetLibraryErcAssetLibraryTestEntityBatchResponses, GetSiteErcSiteTestEntitiesPageData, GetSiteErcSiteTestEntitiesPageResponses, PostSiteErcSiteTestEntityData, PostSiteErcSiteTestEntityResponses, GetSiteErcSiteTestEntityErcSiteTestEntityExternalReferenceCodeData, GetSiteErcSiteTestEntityErcSiteTestEntityExternalReferenceCodeResponses, PutSiteErcSiteTestEntityErcSiteTestEntityExternalReferenceCodeData, PutSiteErcSiteTestEntityErcSiteTestEntityExternalReferenceCodeResponses, PostSiteErcSiteTestEntitiesPageExportBatchData, PostSiteErcSiteTestEntitiesPageExportBatchResponses, PostSiteErcSiteTestEntityBatchData, PostSiteErcSiteTestEntityBatchResponses, GetEntityModelResourceTestEntities1PageData, GetEntityModelResourceTestEntities1PageResponses, GetEntityModelResourceTestEntities2EntityModelResourceTestEntity2Data, GetEntityModelResourceTestEntities2EntityModelResourceTestEntity2Responses, GetFiltersPageData, GetFiltersPageResponses, PostFiltersPageExportBatchData, PostFiltersPageExportBatchResponses, GetMultipartTestEntityData, GetMultipartTestEntityResponses, PatchMultipartTestEntityData, PatchMultipartTestEntityResponses, PutMultipartTestEntityData, PutMultipartTestEntityResponses, PutMultipartTestEntityBatchData, PutMultipartTestEntityBatchResponses, GetSchemasPageData, GetSchemasPageResponses, PostSchemasPageExportBatchData, PostSchemasPageExportBatchResponses, GetSiteSiteTestEntitiesPageData, GetSiteSiteTestEntitiesPageResponses, PostSiteSiteTestEntityData, PostSiteSiteTestEntityResponses, GetSiteSiteTestEntityByExternalReferenceCodeData, GetSiteSiteTestEntityByExternalReferenceCodeResponses, PutSiteSiteTestEntityByExternalReferenceCodeData, PutSiteSiteTestEntityByExternalReferenceCodeResponses, GetSiteTestEntityData, GetSiteTestEntityResponses, PatchSiteTestEntityData, PatchSiteTestEntityResponses, PutSiteTestEntityData, PutSiteTestEntityResponses, GetSiteTestEntityPermissionsPageData, GetSiteTestEntityPermissionsPageResponses, PutSiteTestEntityPermissionsPageData, PutSiteTestEntityPermissionsPageResponses, PostSiteSiteTestEntitiesPageExportBatchData, PostSiteSiteTestEntitiesPageExportBatchResponses, PostSiteSiteTestEntityBatchData, PostSiteSiteTestEntityBatchResponses, PutSiteTestEntityBatchData, PutSiteTestEntityBatchResponses, GetSortsPageData, GetSortsPageResponses, PostSortsPageExportBatchData, PostSortsPageExportBatchResponses, GetTestEntityTestEntityAddressData, GetTestEntityTestEntityAddressResponses, DeleteTestEntityData, DeleteTestEntityResponses, GetTestEntityData, GetTestEntityResponses, PatchTestEntityData, PatchTestEntityResponses, PutTestEntityData, PutTestEntityResponses, DeleteTestEntityBatchData, DeleteTestEntityBatchResponses, PostTestEntityBatchData, PostTestEntityBatchResponses, PutTestEntityBatchData, PutTestEntityBatchResponses, GetTestEntitiesPageData, GetTestEntitiesPageResponses, PostTestEntityData, PostTestEntityResponses, GetTestEntityCountData, GetTestEntityCountResponses, PostReservedWordData, PostReservedWordResponses, PostTestEntitiesPageExportBatchData, PostTestEntitiesPageExportBatchResponses, PostTestEntityMultipartBulkData, PostTestEntityMultipartBulkResponses } from './types.gen';
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

export const getCompanyTestEntitiesPage = <ThrowOnError extends boolean = false>(options?: Options<GetCompanyTestEntitiesPageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetCompanyTestEntitiesPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities',
        ...options
    });
};

export const postCompanyTestEntity = <ThrowOnError extends boolean = false>(options?: Options<PostCompanyTestEntityData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostCompanyTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getCompanyTestEntity = <ThrowOnError extends boolean = false>(options: Options<GetCompanyTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetCompanyTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities/{companyTestEntityId}',
        ...options
    });
};

export const patchCompanyTestEntity = <ThrowOnError extends boolean = false>(options: Options<PatchCompanyTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchCompanyTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities/{companyTestEntityId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const putCompanyTestEntity = <ThrowOnError extends boolean = false>(options: Options<PutCompanyTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutCompanyTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities/{companyTestEntityId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const getCompanyTestEntityByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<GetCompanyTestEntityByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetCompanyTestEntityByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities/by-external-reference-code/{externalReferenceCode}',
        ...options
    });
};

export const putCompanyTestEntityByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<PutCompanyTestEntityByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutCompanyTestEntityByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities/by-external-reference-code/{externalReferenceCode}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const getCompanyTestEntityPermissionsPage = <ThrowOnError extends boolean = false>(options: Options<GetCompanyTestEntityPermissionsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetCompanyTestEntityPermissionsPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities/{companyTestEntityId}/permissions',
        ...options
    });
};

export const putCompanyTestEntityPermissionsPage = <ThrowOnError extends boolean = false>(options: Options<PutCompanyTestEntityPermissionsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutCompanyTestEntityPermissionsPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities/{companyTestEntityId}/permissions',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const postCompanyTestEntitiesPageExportBatch = <ThrowOnError extends boolean = false>(options?: Options<PostCompanyTestEntitiesPageExportBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostCompanyTestEntitiesPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities/export-batch',
        ...options
    });
};

export const postCompanyTestEntityBatch = <ThrowOnError extends boolean = false>(options?: Options<PostCompanyTestEntityBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostCompanyTestEntityBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const putCompanyTestEntityBatch = <ThrowOnError extends boolean = false>(options?: Options<PutCompanyTestEntityBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<PutCompanyTestEntityBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/company-test-entities/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getAssetLibraryErcAssetLibraryTestEntitiesPage = <ThrowOnError extends boolean = false>(options: Options<GetAssetLibraryErcAssetLibraryTestEntitiesPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetAssetLibraryErcAssetLibraryTestEntitiesPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/asset-libraries/{assetLibraryExternalReferenceCode}/erc-asset-library-test-entities',
        ...options
    });
};

export const postAssetLibraryErcAssetLibraryTestEntity = <ThrowOnError extends boolean = false>(options: Options<PostAssetLibraryErcAssetLibraryTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostAssetLibraryErcAssetLibraryTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/asset-libraries/{assetLibraryExternalReferenceCode}/erc-asset-library-test-entities',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const getAssetLibraryErcAssetLibraryTestEntityErcAssetLibraryTestEntityExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<GetAssetLibraryErcAssetLibraryTestEntityErcAssetLibraryTestEntityExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetAssetLibraryErcAssetLibraryTestEntityErcAssetLibraryTestEntityExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/asset-libraries/{assetLibraryExternalReferenceCode}/erc-asset-library-test-entities/{ercAssetLibraryTestEntityExternalReferenceCode}',
        ...options
    });
};

export const putAssetLibraryErcAssetLibraryTestEntityErcAssetLibraryTestEntityExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<PutAssetLibraryErcAssetLibraryTestEntityErcAssetLibraryTestEntityExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutAssetLibraryErcAssetLibraryTestEntityErcAssetLibraryTestEntityExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/asset-libraries/{assetLibraryExternalReferenceCode}/erc-asset-library-test-entities/{ercAssetLibraryTestEntityExternalReferenceCode}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const postAssetLibraryErcAssetLibraryTestEntitiesPageExportBatch = <ThrowOnError extends boolean = false>(options: Options<PostAssetLibraryErcAssetLibraryTestEntitiesPageExportBatchData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostAssetLibraryErcAssetLibraryTestEntitiesPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/asset-libraries/{assetLibraryExternalReferenceCode}/erc-asset-library-test-entities/export-batch',
        ...options
    });
};

export const postAssetLibraryErcAssetLibraryTestEntityBatch = <ThrowOnError extends boolean = false>(options: Options<PostAssetLibraryErcAssetLibraryTestEntityBatchData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostAssetLibraryErcAssetLibraryTestEntityBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/asset-libraries/{assetLibraryExternalReferenceCode}/erc-asset-library-test-entities/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const getSiteErcSiteTestEntitiesPage = <ThrowOnError extends boolean = false>(options: Options<GetSiteErcSiteTestEntitiesPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetSiteErcSiteTestEntitiesPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteExternalReferenceCode}/erc-site-test-entities',
        ...options
    });
};

export const postSiteErcSiteTestEntity = <ThrowOnError extends boolean = false>(options: Options<PostSiteErcSiteTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostSiteErcSiteTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteExternalReferenceCode}/erc-site-test-entities',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const getSiteErcSiteTestEntityErcSiteTestEntityExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<GetSiteErcSiteTestEntityErcSiteTestEntityExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetSiteErcSiteTestEntityErcSiteTestEntityExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteExternalReferenceCode}/erc-site-test-entities/{ercSiteTestEntityExternalReferenceCode}',
        ...options
    });
};

export const putSiteErcSiteTestEntityErcSiteTestEntityExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<PutSiteErcSiteTestEntityErcSiteTestEntityExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutSiteErcSiteTestEntityErcSiteTestEntityExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteExternalReferenceCode}/erc-site-test-entities/{ercSiteTestEntityExternalReferenceCode}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const postSiteErcSiteTestEntitiesPageExportBatch = <ThrowOnError extends boolean = false>(options: Options<PostSiteErcSiteTestEntitiesPageExportBatchData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostSiteErcSiteTestEntitiesPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteExternalReferenceCode}/erc-site-test-entities/export-batch',
        ...options
    });
};

export const postSiteErcSiteTestEntityBatch = <ThrowOnError extends boolean = false>(options: Options<PostSiteErcSiteTestEntityBatchData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostSiteErcSiteTestEntityBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteExternalReferenceCode}/erc-site-test-entities/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

/**
 * Retrieve all EntityModelResourceTestEntity1 items.
 */
export const getEntityModelResourceTestEntities1Page = <ThrowOnError extends boolean = false>(options?: Options<GetEntityModelResourceTestEntities1PageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetEntityModelResourceTestEntities1PageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/entity-model-resource-test-entities1',
        ...options
    });
};

/**
 * Retrieve a EntityModelResourceTestEntity2 item. (EntityModelResource and VulcanBatchEngineTaskItemDelegate interfaces will not be implemented automatically)
 */
export const getEntityModelResourceTestEntities2EntityModelResourceTestEntity2 = <ThrowOnError extends boolean = false>(options: Options<GetEntityModelResourceTestEntities2EntityModelResourceTestEntity2Data, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetEntityModelResourceTestEntities2EntityModelResourceTestEntity2Responses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/entity-model-resource-test-entities2/{entityModelResourceTestEntity2Id}',
        ...options
    });
};

export const getFiltersPage = <ThrowOnError extends boolean = false>(options?: Options<GetFiltersPageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetFiltersPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/filters',
        ...options
    });
};

export const postFiltersPageExportBatch = <ThrowOnError extends boolean = false>(options?: Options<PostFiltersPageExportBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostFiltersPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/filters/export-batch',
        ...options
    });
};

export const getMultipartTestEntity = <ThrowOnError extends boolean = false>(options: Options<GetMultipartTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetMultipartTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/multipart-test-entities/{multipartTestEntityId}',
        ...options
    });
};

export const patchMultipartTestEntity = <ThrowOnError extends boolean = false>(options: Options<PatchMultipartTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchMultipartTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/multipart-test-entities/{multipartTestEntityId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const putMultipartTestEntity = <ThrowOnError extends boolean = false>(options: Options<PutMultipartTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutMultipartTestEntityResponses, unknown, ThrowOnError>({
        ...formDataBodySerializer,
        url: '/o/test/v1.0/multipart-test-entities/{multipartTestEntityId}',
        ...options,
        headers: {
            'Content-Type': null,
            ...options.headers
        }
    });
};

export const putMultipartTestEntityBatch = <ThrowOnError extends boolean = false>(options?: Options<PutMultipartTestEntityBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<PutMultipartTestEntityBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/multipart-test-entities/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getSchemasPage = <ThrowOnError extends boolean = false>(options?: Options<GetSchemasPageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetSchemasPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/schemas',
        ...options
    });
};

export const postSchemasPageExportBatch = <ThrowOnError extends boolean = false>(options?: Options<PostSchemasPageExportBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostSchemasPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/schemas/export-batch',
        ...options
    });
};

export const getSiteSiteTestEntitiesPage = <ThrowOnError extends boolean = false>(options: Options<GetSiteSiteTestEntitiesPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetSiteSiteTestEntitiesPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteId}/site-test-entities',
        ...options
    });
};

export const postSiteSiteTestEntity = <ThrowOnError extends boolean = false>(options: Options<PostSiteSiteTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostSiteSiteTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteId}/site-test-entities',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const getSiteSiteTestEntityByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<GetSiteSiteTestEntityByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetSiteSiteTestEntityByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteId}/site-test-entities/by-external-reference-code/{externalReferenceCode}',
        ...options
    });
};

export const putSiteSiteTestEntityByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<PutSiteSiteTestEntityByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutSiteSiteTestEntityByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteId}/site-test-entities/by-external-reference-code/{externalReferenceCode}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const getSiteTestEntity = <ThrowOnError extends boolean = false>(options: Options<GetSiteTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetSiteTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/site-test-entities/{siteTestEntityId}',
        ...options
    });
};

/**
 * Updates only the fields received in the request body, leaving any other fields untouched.
 */
export const patchSiteTestEntity = <ThrowOnError extends boolean = false>(options: Options<PatchSiteTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchSiteTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/site-test-entities/{siteTestEntityId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const putSiteTestEntity = <ThrowOnError extends boolean = false>(options: Options<PutSiteTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutSiteTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/site-test-entities/{siteTestEntityId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const getSiteTestEntityPermissionsPage = <ThrowOnError extends boolean = false>(options: Options<GetSiteTestEntityPermissionsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetSiteTestEntityPermissionsPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/site-test-entities/{siteTestEntityId}/permissions',
        ...options
    });
};

export const putSiteTestEntityPermissionsPage = <ThrowOnError extends boolean = false>(options: Options<PutSiteTestEntityPermissionsPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutSiteTestEntityPermissionsPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/site-test-entities/{siteTestEntityId}/permissions',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const postSiteSiteTestEntitiesPageExportBatch = <ThrowOnError extends boolean = false>(options: Options<PostSiteSiteTestEntitiesPageExportBatchData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostSiteSiteTestEntitiesPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteId}/site-test-entities/export-batch',
        ...options
    });
};

export const postSiteSiteTestEntityBatch = <ThrowOnError extends boolean = false>(options: Options<PostSiteSiteTestEntityBatchData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostSiteSiteTestEntityBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sites/{siteId}/site-test-entities/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const putSiteTestEntityBatch = <ThrowOnError extends boolean = false>(options?: Options<PutSiteTestEntityBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<PutSiteTestEntityBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/site-test-entities/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getSortsPage = <ThrowOnError extends boolean = false>(options?: Options<GetSortsPageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetSortsPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sorts',
        ...options
    });
};

export const postSortsPageExportBatch = <ThrowOnError extends boolean = false>(options?: Options<PostSortsPageExportBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostSortsPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/sorts/export-batch',
        ...options
    });
};

export const getTestEntityTestEntityAddress = <ThrowOnError extends boolean = false>(options: Options<GetTestEntityTestEntityAddressData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetTestEntityTestEntityAddressResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities/{testEntityId}/test-entity-address',
        ...options
    });
};

export const deleteTestEntity = <ThrowOnError extends boolean = false>(options: Options<DeleteTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities/{testEntityId}',
        ...options
    });
};

export const getTestEntity = <ThrowOnError extends boolean = false>(options: Options<GetTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities/{testEntityId}',
        ...options
    });
};

export const patchTestEntity = <ThrowOnError extends boolean = false>(options: Options<PatchTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities/{testEntityId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const putTestEntity = <ThrowOnError extends boolean = false>(options: Options<PutTestEntityData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities/{testEntityId}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteTestEntityBatch = <ThrowOnError extends boolean = false>(options?: Options<DeleteTestEntityBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).delete<DeleteTestEntityBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postTestEntityBatch = <ThrowOnError extends boolean = false>(options?: Options<PostTestEntityBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostTestEntityBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const putTestEntityBatch = <ThrowOnError extends boolean = false>(options?: Options<PutTestEntityBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<PutTestEntityBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getTestEntitiesPage = <ThrowOnError extends boolean = false>(options?: Options<GetTestEntitiesPageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetTestEntitiesPageResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities',
        ...options
    });
};

export const postTestEntity = <ThrowOnError extends boolean = false>(options?: Options<PostTestEntityData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostTestEntityResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

/**
 * Retrieves the count.
 */
export const getTestEntityCount = <ThrowOnError extends boolean = false>(options?: Options<GetTestEntityCountData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetTestEntityCountResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities/count',
        ...options
    });
};

export const postReservedWord = <ThrowOnError extends boolean = false>(options?: Options<PostReservedWordData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostReservedWordResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/reserved-word',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postTestEntitiesPageExportBatch = <ThrowOnError extends boolean = false>(options?: Options<PostTestEntitiesPageExportBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostTestEntitiesPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/test/v1.0/test-entities/export-batch',
        ...options
    });
};

export const postTestEntityMultipartBulk = <ThrowOnError extends boolean = false>(options?: Options<PostTestEntityMultipartBulkData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostTestEntityMultipartBulkResponses, unknown, ThrowOnError>({
        ...formDataBodySerializer,
        url: '/o/test/v1.0/test-entities/multipart/bulk',
        ...options,
        headers: {
            'Content-Type': null,
            ...options?.headers
        }
    });
};