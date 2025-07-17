import { OpenAPIOperation, OpenAPIPathItem, OpenAPISpec } from "../tools/types";
import { getSDKSourceSample } from "./get-source-sample";

const regex = /group ID '(.*?)', artifact ID '(.*?)', and version '(.*?)'/;

function getMavenPackageDetails(input = "") {
    const match = input.match(regex);

    if (!match) {
        return;
    }

    return {
        artifactId: match[2],
        groupId: match[1],
        version: match[3],
    };
}

const typeScriptSDKMarkdown = `
#### TypeScript SDK Code Sample

\`\`\`typescript
%SDK_SAMPLE%
\`\`\`
`.trim();

const javaMarkdown = `
#### Java installation:

%DESCRIPTION%

\`\`\`gradle
implementation group: "%GROUP_ID%", name: "%ARTIFACT_ID%", version: "%VERSION%"
\`\`\`

Reference: https://mvnrepository.com/artifact/%GROUP_ID%/%ARTIFACT_ID%/%VERSION%
`.trimRight();

export function getDescriptionMarkdown(data: OpenAPISpec, resource: string) {
    const pathKeys = Object.keys(data.paths);

    if (pathKeys.length === 0) {
        return "";
    }

    let description = "";

    const path = data.paths[pathKeys[0]];

    for (const method in path) {
        const operation = path[
            method as keyof OpenAPIPathItem
        ] as OpenAPIOperation;

        description = typeScriptSDKMarkdown.replace(
            "%SDK_SAMPLE%",
            getSDKSourceSample(operation, resource.replace("/", "-"))
        );

        break;
    }

    const packageDetails = getMavenPackageDetails(data.info.description!);

    if (packageDetails) {
        description += javaMarkdown
            .replaceAll("%ARTIFACT_ID%", packageDetails.artifactId)
            .replaceAll("%DESCRIPTION%", data.info.description!)
            .replaceAll("%GROUP_ID%", packageDetails.groupId)
            .replaceAll("%VERSION%", "latest");
    }

    return description;
}
