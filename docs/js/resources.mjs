export const summaryResourceMarkdown = `
A TypeScript client library for interacting with Liferay's Headless REST APIs. This library provides type-safe access to various Liferay services including Commerce, Content Management, User Management, and more. It is maintained by the community to provide a better developer experience when working with Liferay's REST APIs.

⚠️ **Project Disclaimer**: This library is a community-maintained project and is not officially supported or maintained by Liferay, Inc. It is provided as-is with no warranty or guarantee of support from Liferay.

## Installation

\`\`\`bash
npm install liferay-headless-rest-client
\`\`\`

## Available Clients

The library provides access to various Liferay services through different client modules:

### Analytics
- [\`analytics-cms-rest-v1.0\`](?api=analytics-cms-rest-v1.0) - CMS Analytics
- [\`analytics-reports-rest-v1.0\`](?api=analytics-reports-rest-v1.0) - Analytics Reports
- [\`analytics-settings-rest-v1.0\`](?api=analytics-settings-rest-v1.0) - Analytics Settings

### Commerce Clients
- [\`headless-commerce-admin-catalog-v1.0\`](?api=headless-commerce-admin-catalog-v1.0) - Product catalog management
- [\`headless-commerce-admin-channel-v1.0\`](?api=headless-commerce-admin-channel-v1.0) - Channel management
- [\`headless-commerce-admin-inventory-v1.0\`](?api=headless-commerce-admin-inventory-v1.0) - Inventory management
- [\`headless-commerce-admin-order-v1.0\`](?api=headless-commerce-admin-order-v1.0) - Order management
- [\`headless-commerce-admin-payment-v1.0\`](?api=headless-commerce-admin-payment-v1.0) - Payment processing
- [\`headless-commerce-admin-pricing-v1.0\`](?api=headless-commerce-admin-pricing-v1.0) - Pricing management
- [\`headless-commerce-delivery-cart-v1.0\`](?api=headless-commerce-delivery-cart-v1.0) - Shopping cart operations
- [\`headless-commerce-delivery-catalog-v1.0\`](?api=headless-commerce-delivery-catalog-v1.0) - Product catalog delivery

### Content Management
- [\`headless-admin-content-v1.0\`](?api=headless-admin-content-v1.0) - Content management
- [\`headless-asset-library-v1.0\`](?api=headless-asset-library-v1.0) - Asset library management
- [\`headless-delivery-v1.0\`](?api=headless-delivery-v1.0) - Content delivery

### Site Management
- [\`headless-admin-site-v1.0\`](?api=headless-admin-site-v1.0) - Site management
- [\`headless-site-v1.0\`](?api=headless-site-v1.0) - Site operations

### User Management
- [\`headless-admin-address-v1.0\`](?api=headless-admin-address-v1.0) - Address management
- [\`headless-admin-user-v1.0\`](?api=headless-admin-user-v1.0) - User management

### Other Services
- [\`headless-admin-taxonomy-v1.0\`](?api=headless-admin-taxonomy-v1.0) - Taxonomy management
- [\`headless-form-v1.0\`](?api=headless-form-v1.0) - Form management
- [\`headless-object-v1.0\`](?api=headless-object-v1.0) - Object management
- [\`notification-v1.0\`](?api=notification-v1.0) - Notification system
- [\`search-v1.0\`](?api=search-v1.0) - Search functionality

## Quick Start

\`\`\`typescript
import { createClient } from 'liferay-headless-rest-client';
import { getProductsPage } from 'liferay-headless-rest-client/headless-commerce-admin-catalog-v1.0';

// Create a client instance
const client = createClient({
    baseUrl: 'https://your-liferay-instance.com',
    headers: {
        Authorization: \`Basic \${btoa('username:password')}\`,
    },
});

// Use the client to make API calls
async function main() {
    const { data } = await getProductsPage({
        client,
        query: { nestedFields: "catalog" },
    });

    for (const product of data?.items ?? []) {
        console.log(product);
    }
}
\`\`\``;

export const resources = [
    "analytics-cms-rest/v1.0",
    "analytics-reports-rest/v1.0",
    "analytics-settings-rest/v1.0",
    "batch-planner/v1.0",
    "bulk/v1.0",
    "captcha/v1.0",
    "change-tracking-rest/v1.0",
    "data-engine/v2.0",
    "digital-signature-rest/v1.0",
    "dispatch-rest/v1.0",
    "functional-cookies-entries",
    "headless-admin-address/v1.0",
    "headless-admin-content/v1.0",
    "headless-admin-list-type/v1.0",
    "headless-admin-site/v1.0",
    "headless-admin-taxonomy/v1.0",
    "headless-admin-user/v1.0",
    "headless-admin-workflow/v1.0",
    "headless-asset-library/v1.0",
    "headless-batch-engine/v1.0",
    "headless-commerce-admin-account/v1.0",
    "headless-commerce-admin-catalog/v1.0",
    "headless-commerce-admin-channel/v1.0",
    "headless-commerce-admin-inventory/v1.0",
    "headless-commerce-admin-order/v1.0",
    "headless-commerce-admin-payment/v1.0",
    "headless-commerce-admin-pricing/v1.0",
    "headless-commerce-admin-pricing/v2.0",
    "headless-commerce-admin-shipment/v1.0",
    "headless-commerce-admin-site-setting/v1.0",
    "headless-commerce-delivery-cart/v1.0",
    "headless-commerce-delivery-catalog/v1.0",
    "headless-commerce-delivery-order/v1.0",
    "headless-commerce-machine-learning/v1.0",
    "headless-commerce-punchout/v1.0",
    "headless-delivery/v1.0",
    "headless-form/v1.0",
    "headless-object/v1.0",
    "headless-portal-instances/v1.0",
    "headless-site/v1.0",
    "headless-user-notification/v1.0",
    "language/v1.0",
    "necessary-cookies-entries",
    "notification/v1.0",
    "object-admin/v1.0",
    "performance-cookies-entries",
    "personalization-cookies-entries",
    "portal-workflow-metrics/v1.0",
    "saml-admin/v1.0",
    "scim/v1.0",
    "search/v1.0",
    "search-experiences-rest/v1.0",
    "segments-asah/v1.0",
];

export const resourcesDomain =
    window.location.hostname === "localhost"
        ? "http://localhost:3000/generated"
        : "https://raw.githubusercontent.com/kevenleone/liferay-headless-rest-client/refs/heads/main/generated";
