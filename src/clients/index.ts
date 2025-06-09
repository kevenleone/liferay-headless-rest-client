import { createClient, createConfig } from "@hey-api/client-fetch";

export type ClientOptions = {
    baseUrl: "http://localhost:8080" | (string & {});
};

type ClientArgs = Parameters<typeof createConfig<ClientOptions>>[0];

export function createLiferayClient(options?: ClientArgs) {
    let baseUrl = options?.baseUrl || "http://localhost:8080";

    let customFetch = options?.fetch || fetch;

    const isLiferay = typeof window !== "undefined" && !!window.Liferay;

    if (isLiferay) {
        baseUrl = "/";

        customFetch = window.Liferay.Util.fetch;
    }

    const client = createClient(
        createConfig<ClientOptions>({
            baseUrl,
            fetch: customFetch,
            ...options,
        })
    );

    return client;
}
