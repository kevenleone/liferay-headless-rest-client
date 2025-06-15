import ky from "ky";

import { postCatalog } from "../src/clients/headless-commerce-admin-catalog-v1.0";
import { createClient } from "../src/clients";

const cache = new Map();

const liferayClientId = Bun.env.LIFERAY_CLIENT_ID;
const liferayClientSecret = Bun.env.LIFERAY_CLIENT_SECRET;

const liferay = ky.extend({
    prefixUrl: Bun.env.LIFERAY_HOST,
});

const kyFetch = ky.extend({
    hooks: {
        beforeRequest: [
            (request) => {
                const authorization = cache.get("authorization");

                if (authorization) {
                    request.headers.set("authorization", authorization);
                }
            },
        ],
        beforeRetry: [
            async ({ request }) => {
                if (!liferayClientId || !liferayClientSecret) {
                    return;
                }

                const isExpired = cache.has("expires_in")
                    ? Date.now() > cache.get("expires_in")
                    : false;

                if (!request.headers.get("authorization") || isExpired) {
                    const response = await liferay.post("o/oauth2/token", {
                        body: new URLSearchParams({
                            client_id: liferayClientId,
                            client_secret: liferayClientSecret,
                            grant_type: "client_credentials",
                        }),
                    });

                    const data = await response.json<{
                        access_token: string;
                        expires_in: number;
                        token_type: string;
                    }>();

                    const authorization = `${data.token_type} ${data.access_token}`;

                    cache.set(
                        "expires_in",
                        data.expires_in * 1000 + Date.now() - 15000
                    );

                    cache.set("authorization", authorization);

                    console.log("Token exchanged");

                    return request.headers.set("authorization", authorization);
                }
            },
        ],
    },
    retry: {
        limit: 5,
        methods: ["get", "post"],
        statusCodes: [403, 401],
        delay: (attemptCount) => 5000 * attemptCount,
    },
});

export const client = createClient({
    baseUrl: Bun.env.LIFERAY_HOST,
    fetch: kyFetch,
});

async function main() {
    const response = await postCatalog({
        body: { currencyCode: "USD", name: "Catalog name..." },
        client,
    });

    console.log(response.data);
}

main();
