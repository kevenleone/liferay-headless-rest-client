import { $ } from "bun";
import { readdirSync } from "node:fs";
import path from "node:path";

async function main() {
    const files = await readdirSync(path.join(__dirname, "generated"));

    for (const file of files) {
        const name = file.replace(".json", "");

        try {
            await $`FILE=${file} NAME=${name} npx openapi-ts --file heyapi.config.ts`;
        } catch (error) {
            console.error("Unable to process", name);
        }
    }
}

main();
