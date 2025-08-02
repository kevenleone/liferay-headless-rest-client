import { SearchBuilder } from "odata-search-builder";

import { getChannelProductsPage } from "../src/clients/headless-commerce-delivery-catalog-v1.0";
import { createClient } from "../src/clients";

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
    const response = await getChannelProductsPage({
        path: { channelId: Bun.env.LIFERAY_CHANNEL_ID as string },
        query: {
            filter: new SearchBuilder()
                .gt("createDate", new Date(2025, 0, 1))
                .build(),
        },
        client,
    });

    console.log(response);
}

main();
