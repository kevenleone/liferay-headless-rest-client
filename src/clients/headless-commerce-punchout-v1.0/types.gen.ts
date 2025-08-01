// This file is auto-generated by @hey-api/openapi-ts

export type Address = {
    city: string;
    country?: string;
    countryISOCode: string;
    description?: string;
    id?: number;
    latitude?: number;
    longitude?: number;
    name: string;
    phoneNumber?: string;
    region?: string;
    regionISOCode?: string;
    street1: string;
    street2?: string;
    street3?: string;
    readonly type?: string;
    typeId?: number;
    vatNumber?: string;
    zip?: string;
    readonly 'x-class-name'?: string;
};

export type Cart = {
    readonly account?: string;
    accountId?: number;
    readonly author?: string;
    billingAddress?: Address;
    billingAddressId?: number;
    cartItems?: Array<CartItem>;
    readonly channelId?: number;
    couponCode?: string;
    readonly createDate?: string;
    currencyCode: string;
    readonly customFields?: {
        [key: string]: {
            [key: string]: unknown;
        };
    };
    id?: number;
    readonly lastPriceUpdateDate?: string;
    readonly modifiedDate?: string;
    notes?: Array<CartComment>;
    paymentMethod?: string;
    readonly paymentMethodLabel?: string;
    readonly paymentStatus?: number;
    readonly paymentStatusLabel?: string;
    printedNote?: string;
    readonly purchaseOrderNumber?: string;
    shippingAddress?: Address;
    shippingAddressId?: number;
    shippingMethod?: string;
    shippingOption?: string;
    readonly status?: string;
    summary?: Summary;
    useAsBilling?: boolean;
    readonly 'x-class-name'?: string;
};

export type CartComment = {
    readonly author?: string;
    content?: string;
    readonly id?: number;
    readonly orderId?: number;
    restricted?: boolean;
    readonly 'x-class-name'?: string;
};

export type CartItem = {
    customFields?: {
        [key: string]: {
            [key: string]: unknown;
        };
    };
    id?: number;
    readonly name?: string;
    options?: string;
    readonly parentCartItemId?: number;
    price?: Price;
    productId?: number;
    quantity?: number;
    settings?: Settings;
    shippedQuantity?: number;
    readonly sku?: string;
    skuId?: number;
    readonly subscription?: boolean;
    readonly thumbnail?: string;
    readonly 'x-class-name'?: string;
};

export type Group = {
    id?: string;
    name: string;
    readonly 'x-class-name'?: string;
};

export type Organization = {
    id?: string;
    name: string;
    readonly 'x-class-name'?: string;
};

export type Price = {
    currency?: string;
    discount?: number;
    discountPercentage?: string;
    discountPercentageLevel1?: number;
    discountPercentageLevel2?: number;
    discountPercentageLevel3?: number;
    discountPercentageLevel4?: number;
    finalPrice?: number;
    price?: number;
    promoPrice?: number;
    readonly 'x-class-name'?: string;
};

export type PunchOutSession = {
    buyerAccountReferenceCode: string;
    buyerGroup: Group;
    buyerOrganization?: Organization;
    buyerUser: User;
    cart: Cart;
    punchOutReturnURL: string;
    punchOutSessionType: string;
    punchOutStartURL?: string;
    readonly 'x-class-name'?: string;
};

export type Settings = {
    allowedQuantities?: Array<number>;
    maxQuantity?: number;
    minQuantity?: number;
    multipleQuantity?: number;
    readonly 'x-class-name'?: string;
};

export type Summary = {
    currency?: string;
    itemsQuantity?: number;
    shippingDiscountPercentages?: Array<string>;
    shippingDiscountValue?: number;
    shippingValue?: number;
    subtotal?: number;
    subtotalDiscountPercentages?: Array<string>;
    subtotalDiscountValue?: number;
    taxValue?: number;
    total?: number;
    totalDiscountPercentages?: Array<string>;
    totalDiscountValue?: number;
    readonly 'x-class-name'?: string;
};

export type User = {
    email: string;
    externalReferenceCode?: string;
    firstName?: string;
    id?: number;
    jobTitle?: string;
    lastName?: string;
    male?: boolean;
    middleName?: string;
    roles?: Array<string>;
    readonly 'x-class-name'?: string;
};

export type PostPunchOutSessionRequestData = {
    body?: PunchOutSession;
    path?: never;
    query?: never;
    url: '/o/headless-commerce-punchout/v1.0/punchout/session/request';
};

export type PostPunchOutSessionRequestResponses = {
    /**
     * default response
     */
    default: PunchOutSession;
};

export type PostPunchOutSessionRequestResponse = PostPunchOutSessionRequestResponses[keyof PostPunchOutSessionRequestResponses];

export type ClientOptions = {
    baseUrl: 'http://localhost:8080' | (string & {});
};