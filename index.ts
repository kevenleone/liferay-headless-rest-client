import { postCatalog } from "./src/client/headless-commerce-admin-catalog-v1.0";
import { createLiferayClient } from "./src/client";

const liferayHost = Bun.env.LIFERAY_HOST;
const liferayUser = Bun.env.LIFERAY_USER;
const liferayPassword = Bun.env.LIFERAY_PASSWORD;

const client = createLiferayClient({
    baseUrl: liferayHost,
    headers: {
        Authorization: `Basic ${btoa(`${liferayUser}:${liferayPassword}`)}`,
    },
});

async function main() {
    const response = await postCatalog({
        body: { currencyCode: "USD", name: "Catalog name..." },
        client,
    });

    console.log(response);
}

main();
