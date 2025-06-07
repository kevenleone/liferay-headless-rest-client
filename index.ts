import { getProductsPage } from "./src/client";
import { client } from "./src/client/client.gen";

async function main() {
    const { data, ...others } = await getProductsPage({
        query: { nestedFields: "catalog" },
    });

    for (const product of data?.items ?? []) {
        console.log(product.catalog);
    }
}

main();
