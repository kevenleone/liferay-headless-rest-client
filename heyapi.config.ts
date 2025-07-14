import { defineConfig, defaultPlugins } from "@hey-api/openapi-ts";

const { FILE, NAME } = process.env;

if (!FILE || !NAME) {
    throw new Error("File or name is empty");
}

export default defineConfig({
    input: `generated/${FILE}`,
    output: {
        path: `src/clients/${NAME}`,
    },
    plugins: [
        ...defaultPlugins,
        "@hey-api/client-fetch",
        {
            asClass: false,
            name: "@hey-api/sdk",
        },
        {
            name: "@hey-api/typescript",
            readOnlyWriteOnlyBehavior: "off",
        },
    ],
});
