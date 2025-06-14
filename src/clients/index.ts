import { createClient } from "@hey-api/client-fetch";

export type ClientOptions = {
    baseUrl: "http://localhost:8080" | (string & {});
};

export { createClient };
