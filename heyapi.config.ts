// openapi.config.ts
import { defineConfig, defaultPlugins } from "@hey-api/openapi-ts";

const file = process.env.FILE;
const name = process.env.NAME;

if (!file || !name) {
  throw new Error("File or name is empty");
}

console.log({ file, name });

export default defineConfig({
  input: `src/tools/generated/${file}`,
  output: `src/client/${name}`,
  plugins: [
    ...defaultPlugins,
    "@hey-api/client-fetch",
    {
      asClass: false,
      name: "@hey-api/sdk",
    },
  ],
});
