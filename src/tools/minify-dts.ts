import { createMinifier } from "dts-minify";
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const baseDir = path.join(__dirname, "..", "..", "dist", "client");
const minifier = createMinifier(ts);

async function minifyDtsFile(filePath: string): Promise<void> {
    try {
        const content = await readFile(filePath, "utf-8");
        const minifiedContent = minifier.minify(content);

        await writeFile(filePath, minifiedContent);

        console.log(`✅ Minified: ${path.relative(baseDir, filePath)}`);
    } catch (error) {
        console.error(`❌ Error minifying ${filePath}:`, error);

        throw error;
    }
}

async function processDirectory(dirPath: string): Promise<void> {
    const entries = await readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile() && entry.name.endsWith(".d.ts")) {
            await minifyDtsFile(fullPath);
        }
    }
}

async function main() {
    try {
        console.log("🔄 Starting .d.ts minification...");

        await processDirectory(baseDir);

        console.log("✨ All .d.ts files have been minified successfully!");
    } catch (error) {
        console.error("❌ Error during minification:", error);

        process.exit(1);
    }
}

main();
