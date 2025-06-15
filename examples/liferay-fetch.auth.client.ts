import { postCatalog } from "../src/clients/headless-commerce-admin-catalog-v1.0";
import { createClient } from "../src/clients";

const client = createClient({
    /**
     * @description uses the relative URL of the Portal
     */

    baseUrl: "/",

    /**
     * @description Access the fetch from Liferay Portal
     * which already is configured with authentication.
     * Client side only
     */
    fetch: globalThis.Liferay.Util.fetch,
});

async function main() {
    const response = await postCatalog({
        body: { currencyCode: "USD", name: "Catalog name..." },
        client,
    });

    console.log(response.data);
}

main();
