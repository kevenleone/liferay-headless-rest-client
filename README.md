# Liferay Headless REST Client

> ⚠️ **Project Disclaimer**: This library is a community-maintained project and is not officially supported or maintained by Liferay, Inc. It is provided as-is with no warranty or guarantee of support from Liferay.

A TypeScript client library for interacting with Liferay's Headless REST APIs. This library provides type-safe access to various Liferay services including Commerce, Content Management, User Management, and more. It is maintained by the community to provide a better developer experience when working with Liferay's REST APIs.

## Liferay Version Compatibility

This library is designed to work with `Liferay Portal 2025 Q2` and above. The API endpoints and types are generated from Liferay's OpenAPI specifications for these versions.

## Installation (not available yet)

```bash
npm install liferay-headless-rest-client
# or
yarn add liferay-headless-rest-client
# or
bun add liferay-headless-rest-client
```

## Quick Start

```typescript
import { createClient } from 'liferay-headless-rest-client';
import { getProductsPage } from 'liferay-headless-rest-client/headless-commerce-admin-catalog-v1.0';

// Create a client instance
const client = createClient({
    baseUrl: 'https://your-liferay-instance.com',
    headers: {
        Authorization: `Basic ${btoa('username:password')}`,
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
```

## Available Clients

The library provides access to various Liferay services through different client modules:

### Analytics
- `analytics-cms-rest-v1.0` - CMS Analytics
- `analytics-reports-rest-v1.0` - Analytics Reports
- `analytics-settings-rest-v1.0` - Analytics Settings

### Commerce Clients
- `headless-commerce-admin-catalog-v1.0` - Product catalog management
- `headless-commerce-admin-channel-v1.0` - Channel management
- `headless-commerce-admin-inventory-v1.0` - Inventory management
- `headless-commerce-admin-order-v1.0` - Order management
- `headless-commerce-admin-payment-v1.0` - Payment processing
- `headless-commerce-admin-pricing-v1.0` - Pricing management
- `headless-commerce-delivery-cart-v1.0` - Shopping cart operations
- `headless-commerce-delivery-catalog-v1.0` - Product catalog delivery

### Content Management
- `headless-admin-content-v1.0` - Content management
- `headless-asset-library-v1.0` - Asset library management
- `headless-delivery-v1.0` - Content delivery

### Site Management
- `headless-admin-site-v1.0` - Site management
- `headless-site-v1.0` - Site operations

### User Management
- `headless-admin-address-v1.0` - Address management
- `headless-admin-user-v1.0` - User management

### Other Services
- `headless-admin-taxonomy-v1.0` - Taxonomy management
- `headless-form-v1.0` - Form management
- `headless-object-v1.0` - Object management
- `notification-v1.0` - Notification system
- `search-v1.0` - Search functionality

## Type Safety

This library is built with TypeScript and provides full type safety for all API operations. All request and response types are automatically generated from the OpenAPI specifications.

## Tools and Technologies

This library is built using the following key technologies:

- [HeyAPI](https://heyapi.com) - Used for generating type-safe API clients from OpenAPI specifications
  - `@hey-api/client-fetch` - For making HTTP requests
  - `@hey-api/openapi-ts` - For TypeScript type generation
- [Biome](https://biomejs.dev) - For code formatting and linting
- [Bun](https://bun.sh) - JavaScript runtime and build tool

## Contributing

This is a community-driven project. Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

MIT License - See [LICENSE.md](LICENSE.md) for details.
