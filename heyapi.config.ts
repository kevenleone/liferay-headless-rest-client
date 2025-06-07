import { defineConfig } from "@hey-api/openapi-ts";

const file = process.env.FILE;
const name = process.env.NAME;

if (!file || !name) {
    throw new Error("File or name is empty");
}

export default defineConfig({
    input: `src/tools/generated/${file}`,
    output: `src/client/${name}`,
    plugins: ["@hey-api/client-fetch"],
});
