import { OpenAPIOperation, OpenAPISpec } from "../tools/types";

const source = `
import { createClient } from 'liferay-headless-rest-client';
import { %OPERATION_ID% } from 'liferay-headless-rest-client/%RESOURCE_NAME%';

const client = createClient({
    baseUrl: 'http://localhost:8080',
    headers: {
        Authorization: \`Basic \${btoa("test@liferay.com:test")}\`,
    },
});

async function main() {
    const { data } = await %OPERATION_ID%({
        client,
        %PATH%
    });

    console.log(data);
}
`.trim();

const sourceLiferayFetch = `
const response = await Liferay.Util.fetch('%RESOURCE_URL%', {
  method: '%RESOURCE_METHOD%',
})

const data = await response.json();

console.log(data);
`.trim();

function getFormattedJSON(
    parameterName: string,
    parameters: { name: string; value: string }[]
) {
    const pathParams = parameters
        .map((param) => `           ${param.name}: "${param.value}",`)
        .join("\n");

    return `${parameterName}: {\n${pathParams}\n        },`;
}

export function getSourceSample(method: string, resource: string) {
    return sourceLiferayFetch
        .replace("%RESOURCE_URL%", resource)
        .replace("%RESOURCE_METHOD%", method.toUpperCase());
}

export function getSDKSourceSample(
    operation: OpenAPIOperation,
    resource: string
) {
    let sourceSample = source
        .replaceAll("%RESOURCE_NAME%", resource)
        .replaceAll("%OPERATION_ID%", operation.operationId);

    if (operation.parameters?.some(({ required }) => required)) {
        sourceSample = sourceSample.replace(
            "%PATH%",
            getFormattedJSON(
                "path",
                operation.parameters
                    .filter(({ required }) => required)
                    .map(({ name }) => ({
                        name,
                        value: "20125",
                    }))
            )
        );
    } else {
        sourceSample = sourceSample.replace("%PATH%", "");
    }

    return sourceSample.trim();
}
