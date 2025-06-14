// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-fetch';
import type { DeletePaymentData, DeletePaymentResponses, GetPaymentData, GetPaymentResponses, PatchPaymentData, PatchPaymentResponses, DeletePaymentBatchData, DeletePaymentBatchResponses, PostPaymentBatchData, PostPaymentBatchResponses, DeletePaymentByExternalReferenceCodeData, DeletePaymentByExternalReferenceCodeResponses, GetPaymentByExternalReferenceCodeData, GetPaymentByExternalReferenceCodeResponses, PatchPaymentByExternalReferenceCodeData, PatchPaymentByExternalReferenceCodeResponses, PutPaymentByExternalReferenceCodeData, PutPaymentByExternalReferenceCodeResponses, GetPaymentsPageData, GetPaymentsPageResponses, PostPaymentData, PostPaymentResponses, PostPaymentByExternalReferenceCodeRefundData, PostPaymentByExternalReferenceCodeRefundResponses, PostPaymentRefundData, PostPaymentRefundResponses, PostPaymentsPageExportBatchData, PostPaymentsPageExportBatchResponses } from './types.gen';
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

export const deletePayment = <ThrowOnError extends boolean = false>(options: Options<DeletePaymentData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeletePaymentResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/{id}',
        ...options
    });
};

export const getPayment = <ThrowOnError extends boolean = false>(options: Options<GetPaymentData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetPaymentResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/{id}',
        ...options
    });
};

export const patchPayment = <ThrowOnError extends boolean = false>(options: Options<PatchPaymentData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchPaymentResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const deletePaymentBatch = <ThrowOnError extends boolean = false>(options?: Options<DeletePaymentBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).delete<DeletePaymentBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postPaymentBatch = <ThrowOnError extends boolean = false>(options?: Options<PostPaymentBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostPaymentBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/batch',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const deletePaymentByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<DeletePaymentByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<DeletePaymentByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/by-externalReferenceCode/{externalReferenceCode}',
        ...options
    });
};

export const getPaymentByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<GetPaymentByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetPaymentByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/by-externalReferenceCode/{externalReferenceCode}',
        ...options
    });
};

export const patchPaymentByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<PatchPaymentByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).patch<PatchPaymentByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/by-externalReferenceCode/{externalReferenceCode}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const putPaymentByExternalReferenceCode = <ThrowOnError extends boolean = false>(options: Options<PutPaymentByExternalReferenceCodeData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutPaymentByExternalReferenceCodeResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/by-externalReferenceCode/{externalReferenceCode}',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers
        }
    });
};

export const getPaymentsPage = <ThrowOnError extends boolean = false>(options?: Options<GetPaymentsPageData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetPaymentsPageResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments',
        ...options
    });
};

export const postPayment = <ThrowOnError extends boolean = false>(options?: Options<PostPaymentData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostPaymentResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments',
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers
        }
    });
};

export const postPaymentByExternalReferenceCodeRefund = <ThrowOnError extends boolean = false>(options: Options<PostPaymentByExternalReferenceCodeRefundData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostPaymentByExternalReferenceCodeRefundResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/by-externalReferenceCode/{externalReferenceCode}/refund',
        ...options
    });
};

export const postPaymentRefund = <ThrowOnError extends boolean = false>(options: Options<PostPaymentRefundData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).post<PostPaymentRefundResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/{id}/refund',
        ...options
    });
};

export const postPaymentsPageExportBatch = <ThrowOnError extends boolean = false>(options?: Options<PostPaymentsPageExportBatchData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostPaymentsPageExportBatchResponses, unknown, ThrowOnError>({
        url: '/o/headless-commerce-admin-payment/v1.0/payments/export-batch',
        ...options
    });
};