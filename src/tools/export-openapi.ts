import path from "node:path";

import type { OpenAPISpec, OpenAPIPathItem, OpenAPIOperation } from "./types";
import {
    getSDKSourceSample,
    getSourceSample,
} from "../utils/get-source-sample";
import { getDescriptionMarkdown } from "../utils/get-description-markdown";

class OpenAPIExporter {
    private readonly liferayHost = Bun.env.LIFERAY_HOST;
    private readonly liferayUser = Bun.env.LIFERAY_USER;
    private readonly liferayPassword = Bun.env.LIFERAY_PASSWORD;
    private readonly outputDir = path.join(__dirname, "..", "..", "generated");

    private getSecuritySchemas() {
        return {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                description: "JWT Bearer token authentication",
            },
            basicAuth: {
                type: "http",
                scheme: "basic",
                description: "Basic HTTP authentication",
            },
            apiKeyHeader: {
                type: "apiKey",
                in: "header",
                name: "X-API-Key",
                description: "API key request header",
            },
            apiKeyQuery: {
                type: "apiKey",
                in: "query",
                name: "api_key",
                description: "API key query parameter",
            },
            apiKeyCookie: {
                type: "apiKey",
                in: "cookie",
                name: "api_key",
                description: "API key browser cookie",
            },
            oAuth2: {
                type: "oauth2",
                description: "OAuth 2.0 authentication",
                flows: {
                    authorizationCode: {
                        authorizationUrl:
                            "https://galaxy.scalar.com/oauth/authorize",
                        tokenUrl: "https://galaxy.scalar.com/oauth/token",
                        scopes: {
                            "read:account": "read your account information",
                            "write:planets": "modify planets in your account",
                            "read:planets": "read your planets",
                        },
                    },
                    clientCredentials: {
                        tokenUrl: "https://galaxy.scalar.com/oauth/token",
                        scopes: {
                            "read:account": "read your account information",
                            "write:planets": "modify planets in your account",
                            "read:planets": "read your planets",
                        },
                    },
                    implicit: {
                        authorizationUrl:
                            "https://galaxy.scalar.com/oauth/authorize",
                        scopes: {
                            "read:account": "read your account information",
                            "write:planets": "modify planets in your account",
                            "read:planets": "read your planets",
                        },
                    },
                    password: {
                        tokenUrl: "https://galaxy.scalar.com/oauth/token",
                        scopes: {
                            "read:account": "read your account information",
                            "write:planets": "modify planets in your account",
                            "read:planets": "read your planets",
                        },
                    },
                },
            },
            openIdConnect: {
                type: "openIdConnect",
                openIdConnectUrl:
                    "https://galaxy.scalar.com/.well-known/openid-configuration",
                description: "OpenID Connect Authentication",
            },
        };
    }

    private async fetchOpenAPISpec(resource: string): Promise<OpenAPISpec> {
        const response = await fetch(
            `${this.liferayHost}/o/${resource}/openapi.json`,
            {
                headers: {
                    Authorization: `Basic ${btoa(
                        `${this.liferayUser}:${this.liferayPassword}`
                    )}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(
                `Failed to fetch OpenAPI spec for ${resource}: ${response.statusText}`
            );
        }

        return response.json();
    }

    private transformPaths(
        data: OpenAPISpec,
        resource: string
    ): Record<string, OpenAPIPathItem> {
        const [resourceBareName] = resource.split("/");

        const updatedPaths: Record<string, OpenAPIPathItem> = {};

        for (const path in data.paths) {
            const entry = data.paths[path];
            const newPath = `/o/${resourceBareName + path}`;

            for (const method in entry) {
                const operation = entry[
                    method as keyof OpenAPIPathItem
                ] as OpenAPIOperation;

                operation["x-codeSamples"] = [
                    {
                        lang: "typescript",
                        label: "sdk",
                        source: getSDKSourceSample(
                            operation,
                            resource.replace("/", "-")
                        ),
                    },
                    {
                        lang: "javascript",
                        label: "Liferay.Util.fetch",
                        source: getSourceSample(method, newPath),
                    },
                ];

                if (method !== "get") continue;

                const operationId = operation.operationId;

                if (operationId.endsWith("Page")) {
                    operation.parameters = operation.parameters || [];
                    operation.parameters.push({
                        name: "nestedFields",
                        in: "query",
                        schema: { type: "string" },
                    });
                }
            }

            updatedPaths[newPath] = entry;
        }

        return updatedPaths;
    }

    private async saveOpenAPISpec(
        data: OpenAPISpec,
        resourceName: string
    ): Promise<void> {
        await Bun.write(
            path.join(this.outputDir, `${resourceName}.json`),
            JSON.stringify(data, null, 4)
        );

        console.log(`✅ Saved ${resourceName}.json`);
    }

    private transformOpenAPISpec(
        data: OpenAPISpec,
        resource: string
    ): OpenAPISpec {
        data.servers = data.servers.map((server) => ({
            ...server,
            url: this.liferayHost || "http://localhost:8080",
        }));

        // Remove unnecessary path

        const { "/v1.0/openapi.{type}": _, ...paths } = data.paths;

        data.info.description = getDescriptionMarkdown(data, resource);

        data.paths = paths;

        return {
            ...data,
            components: {
                ...data.components,
                securitySchemes: this.getSecuritySchemas(),
            },
            paths: this.transformPaths(data, resource),
        };
    }

    public async exportResource(resource: string): Promise<void> {
        try {
            const openAPISpec = await this.fetchOpenAPISpec(resource);

            const transformedData = this.transformOpenAPISpec(
                openAPISpec,
                resource
            );
            const resourceName = resource.replace("/", "-");

            await this.saveOpenAPISpec(transformedData, resourceName);
        } catch (error) {
            console.error(`❌ Error processing ${resource}:`, error);

            throw error;
        }
    }

    public async run(resources: string[]): Promise<void> {
        for (const resource of resources) {
            await this.exportResource(resource);
        }
    }
}

const resources = [
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
    "search-experiences-rest/v1.0",
    "search/v1.0",
    "segments-asah/v1.0",
];

const exporter = new OpenAPIExporter();

exporter.run(resources).catch((error) => {
    console.error("Export failed:", error);
    process.exit(1);
});
