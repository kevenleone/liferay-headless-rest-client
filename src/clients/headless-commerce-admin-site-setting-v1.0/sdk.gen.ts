// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { DeleteAvailabilityEstimateData, DeleteAvailabilityEstimateResponses, GetAvailabilityEstimateData, GetAvailabilityEstimateResponses, PutAvailabilityEstimateData, PutAvailabilityEstimateResponses, DeleteAvailabilityEstimateBatchData, DeleteAvailabilityEstimateBatchResponses, PutAvailabilityEstimateBatchData, PutAvailabilityEstimateBatchResponses, GetCommerceAdminSiteSettingGroupAvailabilityEstimatePageData, GetCommerceAdminSiteSettingGroupAvailabilityEstimatePageResponses, PostCommerceAdminSiteSettingGroupAvailabilityEstimateData, PostCommerceAdminSiteSettingGroupAvailabilityEstimateResponses, DeleteMeasurementUnitData, DeleteMeasurementUnitResponses, GetMeasurementUnitData, GetMeasurementUnitResponses, PatchMeasurementUnitData, PatchMeasurementUnitResponses, DeleteMeasurementUnitBatchData, DeleteMeasurementUnitBatchResponses, PostMeasurementUnitBatchData, PostMeasurementUnitBatchResponses, DeleteMeasurementUnitByExternalReferenceCodeData, DeleteMeasurementUnitByExternalReferenceCodeResponses, GetMeasurementUnitByExternalReferenceCodeData, GetMeasurementUnitByExternalReferenceCodeResponses, PatchMeasurementUnitByExternalReferenceCodeData, PatchMeasurementUnitByExternalReferenceCodeResponses, PutMeasurementUnitByExternalReferenceCodeData, PutMeasurementUnitByExternalReferenceCodeResponses, DeleteMeasurementUnitByKeyData, DeleteMeasurementUnitByKeyResponses, GetMeasurementUnitByKeyData, GetMeasurementUnitByKeyResponses, PatchMeasurementUnitByKeyData, PatchMeasurementUnitByKeyResponses, GetMeasurementUnitsByTypeData, GetMeasurementUnitsByTypeResponses, GetMeasurementUnitsPageData, GetMeasurementUnitsPageResponses, PostMeasurementUnitData, PostMeasurementUnitResponses, PostMeasurementUnitsPageExportBatchData, PostMeasurementUnitsPageExportBatchResponses, DeleteTaxCategoryData, DeleteTaxCategoryResponses, GetTaxCategoryData, GetTaxCategoryResponses, PutTaxCategoryData, PutTaxCategoryResponses, DeleteTaxCategoryBatchData, DeleteTaxCategoryBatchResponses, PutTaxCategoryBatchData, PutTaxCategoryBatchResponses, GetCommerceAdminSiteSettingGroupTaxCategoryPageData, GetCommerceAdminSiteSettingGroupTaxCategoryPageResponses, PostCommerceAdminSiteSettingGroupTaxCategoryData, PostCommerceAdminSiteSettingGroupTaxCategoryResponses, DeleteWarehouseData, DeleteWarehouseResponses, GetWarehouseData, GetWarehouseResponses, PutWarehouseData, PutWarehouseResponses, DeleteWarehouseBatchData, DeleteWarehouseBatchResponses, PutWarehouseBatchData, PutWarehouseBatchResponses, GetCommerceAdminSiteSettingGroupWarehousePageData, GetCommerceAdminSiteSettingGroupWarehousePageResponses, PostCommerceAdminSiteSettingGroupWarehouseData, PostCommerceAdminSiteSettingGroupWarehouseResponses } from './types.gen';
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

export const deleteAvailabilityEstimate = <ThrowOnError extends boolean = false>(options: Options<DeleteAvailabilityEstimateData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteAvailabilityEstimateResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/availabilityEstimate/{id}',
        ...options
    });
};

export const getAvailabilityEstimate = <ThrowOnError extends boolean = false>(options: Options<GetAvailabilityEstimateData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetAvailabilityEstimateResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/availabilityEstimate/{id}',
        ...options
    });
};

export const putAvailabilityEstimate = <ThrowOnError extends boolean = false>(options: Options<PutAvailabilityEstimateData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutAvailabilityEstimateResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/availabilityEstimate/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteAvailabilityEstimateBatch = <ThrowOnError extends boolean = false>(options?: Options<DeleteAvailabilityEstimateBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).delete<DeleteAvailabilityEstimateBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/availabilityEstimate/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const putAvailabilityEstimateBatch = <ThrowOnError extends boolean = false>(options?: Options<PutAvailabilityEstimateBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<PutAvailabilityEstimateBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/availabilityEstimate/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getCommerceAdminSiteSettingGroupAvailabilityEstimatePage = <ThrowOnError extends boolean = false>(options: Options<GetCommerceAdminSiteSettingGroupAvailabilityEstimatePageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetCommerceAdminSiteSettingGroupAvailabilityEstimatePageResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/availabilityEstimate',
        ...options
    });
};

export const postCommerceAdminSiteSettingGroupAvailabilityEstimate = <ThrowOnError extends boolean = false>(options: Options<PostCommerceAdminSiteSettingGroupAvailabilityEstimateData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostCommerceAdminSiteSettingGroupAvailabilityEstimateResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/availabilityEstimate',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteMeasurementUnit = <ThrowOnError extends boolean = false>(options: Options<DeleteMeasurementUnitData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteMeasurementUnitResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/{id}',
        ...options
    });
};

export const getMeasurementUnit = <ThrowOnError extends boolean = false>(options: Options<GetMeasurementUnitData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetMeasurementUnitResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/{id}',
        ...options
    });
};

export const patchMeasurementUnit = <ThrowOnError extends boolean = false>(options: Options<PatchMeasurementUnitData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchMeasurementUnitResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteMeasurementUnitBatch = <ThrowOnError extends boolean = false>(options?: Options<DeleteMeasurementUnitBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).delete<DeleteMeasurementUnitBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postMeasurementUnitBatch = <ThrowOnError extends boolean = false>(options?: Options<PostMeasurementUnitBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostMeasurementUnitBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const deleteMeasurementUnitByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<DeleteMeasurementUnitByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteMeasurementUnitByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-externalReferenceCode/{externalReferenceCode}',
        ...options
    });
};

export const getMeasurementUnitByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<GetMeasurementUnitByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetMeasurementUnitByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-externalReferenceCode/{externalReferenceCode}',
        ...options
    });
};

export const patchMeasurementUnitByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<PatchMeasurementUnitByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchMeasurementUnitByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-externalReferenceCode/{externalReferenceCode}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const putMeasurementUnitByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<PutMeasurementUnitByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutMeasurementUnitByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-externalReferenceCode/{externalReferenceCode}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteMeasurementUnitByKey = <ThrowOnError extends boolean = false>(options: Options<DeleteMeasurementUnitByKeyData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteMeasurementUnitByKeyResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-key/{key}',
        ...options
    });
};

export const getMeasurementUnitByKey = <ThrowOnError extends boolean = false>(options: Options<GetMeasurementUnitByKeyData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetMeasurementUnitByKeyResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-key/{key}',
        ...options
    });
};

export const patchMeasurementUnitByKey = <ThrowOnError extends boolean = false>(options: Options<PatchMeasurementUnitByKeyData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchMeasurementUnitByKeyResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-key/{key}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const getMeasurementUnitsByType = <ThrowOnError extends boolean = false>(options: Options<GetMeasurementUnitsByTypeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetMeasurementUnitsByTypeResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-type/{measurementUnitType}',
        ...options
    });
};

export const getMeasurementUnitsPage = <ThrowOnError extends boolean = false>(options?: Options<GetMeasurementUnitsPageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetMeasurementUnitsPageResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units',
        ...options
    });
};

export const postMeasurementUnit = <ThrowOnError extends boolean = false>(options?: Options<PostMeasurementUnitData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostMeasurementUnitResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postMeasurementUnitsPageExportBatch = <ThrowOnError extends boolean = false>(options?: Options<PostMeasurementUnitsPageExportBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostMeasurementUnitsPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/export-batch',
        ...options
    });
};

export const deleteTaxCategory = <ThrowOnError extends boolean = false>(options: Options<DeleteTaxCategoryData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteTaxCategoryResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/taxCategory/{id}',
        ...options
    });
};

export const getTaxCategory = <ThrowOnError extends boolean = false>(options: Options<GetTaxCategoryData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetTaxCategoryResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/taxCategory/{id}',
        ...options
    });
};

export const putTaxCategory = <ThrowOnError extends boolean = false>(options: Options<PutTaxCategoryData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutTaxCategoryResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/taxCategory/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteTaxCategoryBatch = <ThrowOnError extends boolean = false>(options?: Options<DeleteTaxCategoryBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).delete<DeleteTaxCategoryBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/taxCategory/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const putTaxCategoryBatch = <ThrowOnError extends boolean = false>(options?: Options<PutTaxCategoryBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<PutTaxCategoryBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/taxCategory/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getCommerceAdminSiteSettingGroupTaxCategoryPage = <ThrowOnError extends boolean = false>(options: Options<GetCommerceAdminSiteSettingGroupTaxCategoryPageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetCommerceAdminSiteSettingGroupTaxCategoryPageResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/taxCategory',
        ...options
    });
};

export const postCommerceAdminSiteSettingGroupTaxCategory = <ThrowOnError extends boolean = false>(options: Options<PostCommerceAdminSiteSettingGroupTaxCategoryData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostCommerceAdminSiteSettingGroupTaxCategoryResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/taxCategory',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteWarehouse = <ThrowOnError extends boolean = false>(options: Options<DeleteWarehouseData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeleteWarehouseResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/warehouse/{id}',
        ...options
    });
};

export const getWarehouse = <ThrowOnError extends boolean = false>(options: Options<GetWarehouseData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetWarehouseResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/warehouse/{id}',
        ...options
    });
};

export const putWarehouse = <ThrowOnError extends boolean = false>(options: Options<PutWarehouseData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutWarehouseResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/warehouse/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deleteWarehouseBatch = <ThrowOnError extends boolean = false>(options?: Options<DeleteWarehouseBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).delete<DeleteWarehouseBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/warehouse/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const putWarehouseBatch = <ThrowOnError extends boolean = false>(options?: Options<PutWarehouseBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).put<PutWarehouseBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/warehouse/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const getCommerceAdminSiteSettingGroupWarehousePage = <ThrowOnError extends boolean = false>(options: Options<GetCommerceAdminSiteSettingGroupWarehousePageData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetCommerceAdminSiteSettingGroupWarehousePageResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/warehouse',
        ...options
    });
};

export const postCommerceAdminSiteSettingGroupWarehouse = <ThrowOnError extends boolean = false>(options: Options<PostCommerceAdminSiteSettingGroupWarehouseData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostCommerceAdminSiteSettingGroupWarehouseResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/warehouse',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};