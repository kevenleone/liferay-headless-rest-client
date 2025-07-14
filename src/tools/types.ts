export interface OpenAPISpec {
    components?: {
        parameters?: Record<string, unknown>;
        responses?: Record<string, unknown>;
        schemas?: Record<string, unknown>;
        securitySchemes?: Record<string, unknown>;
    };
    info: {
        description?: string;
        title: string;
        version: string;
    };
    openapi: "3.0.1";
    paths: Record<string, OpenAPIPathItem>;
    security?: {
        [key: string]: any[];
    }[];
    servers: OpenAPIServer[];
}

export interface OpenAPIServer {
    url: string;
    description?: string;
    variables?: Record<
        string,
        {
            default: string;
            enum?: string[];
            description?: string;
        }
    >;
}

export interface OpenAPIPathItem {
    get?: OpenAPIOperation;
    post?: OpenAPIOperation;
    put?: OpenAPIOperation;
    delete?: OpenAPIOperation;
    patch?: OpenAPIOperation;
    parameters?: OpenAPIParameter[];
}

export interface OpenAPIOperation {
    operationId: string;
    summary?: string;
    description?: string;
    tags?: string[];
    parameters?: OpenAPIParameter[];
    responses: Record<string, OpenAPIResponse>;
    requestBody?: OpenAPIRequestBody;
    "x-codeSamples"?: {
        label: string;
        lang: string;
        source: string;
    }[];
}

export interface OpenAPIParameter {
    name: string;
    in: "query" | "header" | "path" | "cookie";
    description?: string;
    required?: boolean;
    schema: {
        type: string;
        format?: string;
        items?: {
            type: string;
        };
        enum?: string[];
    };
}

export interface OpenAPIResponse {
    description: string;
    content?: Record<
        string,
        {
            schema: {
                type?: string;
                items?: {
                    $ref?: string;
                    type?: string;
                };
                $ref?: string;
            };
        }
    >;
}

export interface OpenAPIRequestBody {
    description?: string;
    content: Record<
        string,
        {
            schema: {
                type?: string;
                $ref?: string;
            };
        }
    >;
    required?: boolean;
}
