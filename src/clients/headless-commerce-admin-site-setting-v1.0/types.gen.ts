// This file is auto-generated by @hey-api/openapi-ts

export type AvailabilityEstimate = {
    readonly groupId?: number;
    id?: number;
    priority?: number;
    title: {
        [key: string]: string;
    };
    readonly 'x-class-name'?: string;
};

export type Facet = {
    facetCriteria?: string;
    facetValues?: Array<FacetValue>;
};

export type FacetValue = {
    numberOfOccurrences?: number;
    term?: string;
};

export type PageAvailabilityEstimate = {
    totalCount?: number;
    lastPage?: number;
    items?: Array<AvailabilityEstimate>;
    actions?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    pageSize?: number;
    facets?: Array<Facet>;
    page?: number;
};

export type MeasurementUnit = {
    readonly companyId?: number;
    externalReferenceCode?: string;
    id?: number;
    key: string;
    name: {
        [key: string]: string;
    };
    primary?: boolean;
    priority?: number;
    rate?: number;
    type: string;
    readonly 'x-class-name'?: string;
};

export type PageMeasurementUnit = {
    totalCount?: number;
    lastPage?: number;
    items?: Array<MeasurementUnit>;
    actions?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    pageSize?: number;
    facets?: Array<Facet>;
    page?: number;
};

export type PageTaxCategory = {
    totalCount?: number;
    lastPage?: number;
    items?: Array<TaxCategory>;
    actions?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    pageSize?: number;
    facets?: Array<Facet>;
    page?: number;
};

export type TaxCategory = {
    description?: {
        [key: string]: string;
    };
    readonly groupId?: number;
    id?: number;
    name: {
        [key: string]: string;
    };
    readonly 'x-class-name'?: string;
};

export type PageWarehouse = {
    totalCount?: number;
    lastPage?: number;
    items?: Array<Warehouse>;
    actions?: {
        [key: string]: {
            [key: string]: string;
        };
    };
    pageSize?: number;
    facets?: Array<Facet>;
    page?: number;
};

export type Warehouse = {
    active?: boolean;
    city?: string;
    commerceCountryId: number;
    commerceRegionId?: number;
    description?: {
        [key: string]: string;
    };
    readonly groupId?: number;
    id?: number;
    latitude?: number;
    longitude?: number;
    mvccVersion?: number;
    name: {
        [key: string]: string;
    };
    primary?: boolean;
    street1?: string;
    street2?: string;
    street3?: string;
    zip?: string;
    readonly 'x-class-name'?: string;
};

export type DeleteAvailabilityEstimateData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/availabilityEstimate/{id}';
};

export type DeleteAvailabilityEstimateResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetAvailabilityEstimateData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/availabilityEstimate/{id}';
};

export type GetAvailabilityEstimateResponses = {
    /**
     * default response
     */
    default: AvailabilityEstimate;
};

export type GetAvailabilityEstimateResponse = GetAvailabilityEstimateResponses[keyof GetAvailabilityEstimateResponses];

export type PutAvailabilityEstimateData = {
    body?: AvailabilityEstimate;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/availabilityEstimate/{id}';
};

export type PutAvailabilityEstimateResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type DeleteAvailabilityEstimateBatchData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: {
        callbackURL?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/availabilityEstimate/batch';
};

export type DeleteAvailabilityEstimateBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type PutAvailabilityEstimateBatchData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: {
        callbackURL?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/availabilityEstimate/batch';
};

export type PutAvailabilityEstimateBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetCommerceAdminSiteSettingGroupAvailabilityEstimatePageData = {
    body?: never;
    path: {
        groupId: string;
    };
    query?: {
        page?: string;
        pageSize?: string;
        nestedFields?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/availabilityEstimate';
};

export type GetCommerceAdminSiteSettingGroupAvailabilityEstimatePageResponses = {
    /**
     * default response
     */
    default: PageAvailabilityEstimate;
};

export type GetCommerceAdminSiteSettingGroupAvailabilityEstimatePageResponse = GetCommerceAdminSiteSettingGroupAvailabilityEstimatePageResponses[keyof GetCommerceAdminSiteSettingGroupAvailabilityEstimatePageResponses];

export type PostCommerceAdminSiteSettingGroupAvailabilityEstimateData = {
    body?: AvailabilityEstimate;
    path: {
        groupId: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/availabilityEstimate';
};

export type PostCommerceAdminSiteSettingGroupAvailabilityEstimateResponses = {
    /**
     * default response
     */
    default: AvailabilityEstimate;
};

export type PostCommerceAdminSiteSettingGroupAvailabilityEstimateResponse = PostCommerceAdminSiteSettingGroupAvailabilityEstimateResponses[keyof PostCommerceAdminSiteSettingGroupAvailabilityEstimateResponses];

export type DeleteMeasurementUnitData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/{id}';
};

export type DeleteMeasurementUnitResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetMeasurementUnitData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/{id}';
};

export type GetMeasurementUnitResponses = {
    /**
     * default response
     */
    default: MeasurementUnit;
};

export type GetMeasurementUnitResponse = GetMeasurementUnitResponses[keyof GetMeasurementUnitResponses];

export type PatchMeasurementUnitData = {
    body?: MeasurementUnit;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/{id}';
};

export type PatchMeasurementUnitResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type DeleteMeasurementUnitBatchData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: {
        callbackURL?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/batch';
};

export type DeleteMeasurementUnitBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type PostMeasurementUnitBatchData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: {
        callbackURL?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/batch';
};

export type PostMeasurementUnitBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type DeleteMeasurementUnitByExternalReferenceCodeData = {
    body?: never;
    path: {
        externalReferenceCode: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-externalReferenceCode/{externalReferenceCode}';
};

export type DeleteMeasurementUnitByExternalReferenceCodeResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetMeasurementUnitByExternalReferenceCodeData = {
    body?: never;
    path: {
        externalReferenceCode: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-externalReferenceCode/{externalReferenceCode}';
};

export type GetMeasurementUnitByExternalReferenceCodeResponses = {
    /**
     * default response
     */
    default: MeasurementUnit;
};

export type GetMeasurementUnitByExternalReferenceCodeResponse = GetMeasurementUnitByExternalReferenceCodeResponses[keyof GetMeasurementUnitByExternalReferenceCodeResponses];

export type PatchMeasurementUnitByExternalReferenceCodeData = {
    body?: MeasurementUnit;
    path: {
        externalReferenceCode: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-externalReferenceCode/{externalReferenceCode}';
};

export type PatchMeasurementUnitByExternalReferenceCodeResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type PutMeasurementUnitByExternalReferenceCodeData = {
    body?: MeasurementUnit;
    path: {
        externalReferenceCode: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-externalReferenceCode/{externalReferenceCode}';
};

export type PutMeasurementUnitByExternalReferenceCodeResponses = {
    /**
     * default response
     */
    default: MeasurementUnit;
};

export type PutMeasurementUnitByExternalReferenceCodeResponse = PutMeasurementUnitByExternalReferenceCodeResponses[keyof PutMeasurementUnitByExternalReferenceCodeResponses];

export type DeleteMeasurementUnitByKeyData = {
    body?: never;
    path: {
        key: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-key/{key}';
};

export type DeleteMeasurementUnitByKeyResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetMeasurementUnitByKeyData = {
    body?: never;
    path: {
        key: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-key/{key}';
};

export type GetMeasurementUnitByKeyResponses = {
    /**
     * default response
     */
    default: MeasurementUnit;
};

export type GetMeasurementUnitByKeyResponse = GetMeasurementUnitByKeyResponses[keyof GetMeasurementUnitByKeyResponses];

export type PatchMeasurementUnitByKeyData = {
    body?: MeasurementUnit;
    path: {
        key: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-key/{key}';
};

export type PatchMeasurementUnitByKeyResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetMeasurementUnitsByTypeData = {
    body?: never;
    path: {
        measurementUnitType: string;
    };
    query?: {
        page?: string;
        pageSize?: string;
        sort?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/by-type/{measurementUnitType}';
};

export type GetMeasurementUnitsByTypeResponses = {
    /**
     * default response
     */
    default: PageMeasurementUnit;
};

export type GetMeasurementUnitsByTypeResponse = GetMeasurementUnitsByTypeResponses[keyof GetMeasurementUnitsByTypeResponses];

export type GetMeasurementUnitsPageData = {
    body?: never;
    path?: never;
    query?: {
        filter?: string;
        page?: string;
        pageSize?: string;
        sort?: string;
        nestedFields?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units';
};

export type GetMeasurementUnitsPageResponses = {
    /**
     * default response
     */
    default: PageMeasurementUnit;
};

export type GetMeasurementUnitsPageResponse = GetMeasurementUnitsPageResponses[keyof GetMeasurementUnitsPageResponses];

export type PostMeasurementUnitData = {
    body?: MeasurementUnit;
    path?: never;
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units';
};

export type PostMeasurementUnitResponses = {
    /**
     * default response
     */
    default: MeasurementUnit;
};

export type PostMeasurementUnitResponse = PostMeasurementUnitResponses[keyof PostMeasurementUnitResponses];

export type PostMeasurementUnitsPageExportBatchData = {
    body?: never;
    path?: never;
    query?: {
        filter?: string;
        sort?: string;
        callbackURL?: string;
        contentType?: string;
        fieldNames?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/measurement-units/export-batch';
};

export type PostMeasurementUnitsPageExportBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type DeleteTaxCategoryData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/taxCategory/{id}';
};

export type DeleteTaxCategoryResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetTaxCategoryData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/taxCategory/{id}';
};

export type GetTaxCategoryResponses = {
    /**
     * default response
     */
    default: TaxCategory;
};

export type GetTaxCategoryResponse = GetTaxCategoryResponses[keyof GetTaxCategoryResponses];

export type PutTaxCategoryData = {
    body?: TaxCategory;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/taxCategory/{id}';
};

export type PutTaxCategoryResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type DeleteTaxCategoryBatchData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: {
        callbackURL?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/taxCategory/batch';
};

export type DeleteTaxCategoryBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type PutTaxCategoryBatchData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: {
        callbackURL?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/taxCategory/batch';
};

export type PutTaxCategoryBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetCommerceAdminSiteSettingGroupTaxCategoryPageData = {
    body?: never;
    path: {
        groupId: string;
    };
    query?: {
        page?: string;
        pageSize?: string;
        nestedFields?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/taxCategory';
};

export type GetCommerceAdminSiteSettingGroupTaxCategoryPageResponses = {
    /**
     * default response
     */
    default: PageTaxCategory;
};

export type GetCommerceAdminSiteSettingGroupTaxCategoryPageResponse = GetCommerceAdminSiteSettingGroupTaxCategoryPageResponses[keyof GetCommerceAdminSiteSettingGroupTaxCategoryPageResponses];

export type PostCommerceAdminSiteSettingGroupTaxCategoryData = {
    body?: TaxCategory;
    path: {
        groupId: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/taxCategory';
};

export type PostCommerceAdminSiteSettingGroupTaxCategoryResponses = {
    /**
     * default response
     */
    default: TaxCategory;
};

export type PostCommerceAdminSiteSettingGroupTaxCategoryResponse = PostCommerceAdminSiteSettingGroupTaxCategoryResponses[keyof PostCommerceAdminSiteSettingGroupTaxCategoryResponses];

export type DeleteWarehouseData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/warehouse/{id}';
};

export type DeleteWarehouseResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetWarehouseData = {
    body?: never;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/warehouse/{id}';
};

export type GetWarehouseResponses = {
    /**
     * default response
     */
    default: Warehouse;
};

export type GetWarehouseResponse = GetWarehouseResponses[keyof GetWarehouseResponses];

export type PutWarehouseData = {
    body?: Warehouse;
    path: {
        id: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/warehouse/{id}';
};

export type PutWarehouseResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type DeleteWarehouseBatchData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: {
        callbackURL?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/warehouse/batch';
};

export type DeleteWarehouseBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type PutWarehouseBatchData = {
    body?: {
        [key: string]: unknown;
    };
    path?: never;
    query?: {
        callbackURL?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/warehouse/batch';
};

export type PutWarehouseBatchResponses = {
    /**
     * default response
     */
    default: unknown;
};

export type GetCommerceAdminSiteSettingGroupWarehousePageData = {
    body?: never;
    path: {
        groupId: string;
    };
    query?: {
        active?: string;
        page?: string;
        pageSize?: string;
        nestedFields?: string;
    };
    url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/warehouse';
};

export type GetCommerceAdminSiteSettingGroupWarehousePageResponses = {
    /**
     * default response
     */
    default: PageWarehouse;
};

export type GetCommerceAdminSiteSettingGroupWarehousePageResponse = GetCommerceAdminSiteSettingGroupWarehousePageResponses[keyof GetCommerceAdminSiteSettingGroupWarehousePageResponses];

export type PostCommerceAdminSiteSettingGroupWarehouseData = {
    body?: Warehouse;
    path: {
        groupId: string;
    };
    query?: never;
    url: '/o/headless-commerce-admin-site-setting/v1.0/commerceAdminSiteSetting/{groupId}/warehouse';
};

export type PostCommerceAdminSiteSettingGroupWarehouseResponses = {
    /**
     * default response
     */
    default: Warehouse;
};

export type PostCommerceAdminSiteSettingGroupWarehouseResponse = PostCommerceAdminSiteSettingGroupWarehouseResponses[keyof PostCommerceAdminSiteSettingGroupWarehouseResponses];

export type ClientOptions = {
    baseUrl: 'http://localhost:8080' | (string & {});
};