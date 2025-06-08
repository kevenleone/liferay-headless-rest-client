import { defineConfig, defaultPlugins } from "@hey-api/openapi-ts";

const { file, name } = process.env;

if (!file || !name) {
    throw new Error("File or name is empty");
}

export default defineConfig({
    input: `src/tools/generated/${file}`,
    output: {
        path: `src/client/${name}`,
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
