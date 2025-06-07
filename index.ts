import { getProductsPage } from "./src/client/headless-commerce-admin-catalog-v1.0";
import { createClient } from "@hey-api/client-fetch";

const liferayHost = Bun.env.LIFERAY_HOST;
const liferayUser = Bun.env.LIFERAY_USER;
const liferayPassword = Bun.env.LIFERAY_PASSWORD;

const client = createClient({
    baseUrl: liferayHost,
    headers: {
        Authorization: `Basic ${btoa(`${liferayUser}:${liferayPassword}`)}`,
    },
});

async function main() {
    const { data } = await getProductsPage({
        client,
        query: { nestedFields: "catalog" },
    });

    for (const product of data?.items ?? []) {
        console.log(product.name.en_US);
    }
}

main();
