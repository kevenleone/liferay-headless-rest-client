import { resources } from "./resources.mjs";

const resourcesDomain = "http://localhost:63957";

Scalar.createApiReference("#app", {
    defaultHttpClient: {
        targetKey: "node",
        clientKey: "fetch",
    },
    hideDownloadButton: true,
    hideModels: true,
    layout: "classic",
    metaData: {
        title: "Liferay Headless",
        description: "Liferay Headless APIs",
    },
    servers: [
        {
            url: "http://localhost:{port}",
            description: "Localhost",
            variables: {
                port: {
                    default: "8080",
                },
            },
        },
        {
            url: "{protocol}://{domain}",
            description: "Custom Server",
            variables: {
                domain: {
                    default: "example.liferay.com",
                },
                protocol: {
                    default: "https",
                },
            },
        },
    ],
    proxyUrl: "https://proxy.scalar.com",
    sources: resources.map((resource) => ({
        url: `${resourcesDomain}/${resource.replace("/", "-")}.json`,
        title: resource.replace(".json", ""),
    })),
});
