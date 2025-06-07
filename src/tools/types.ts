export interface OpenAPISpec {
    openapi: "3.0.1";
    info: {
        title: string;
        version: string;
        description?: string;
    };
    servers: OpenAPIServer[];
    paths: Record<string, OpenAPIPathItem>;
    components?: {
        schemas?: Record<string, unknown>;
        parameters?: Record<string, unknown>;
        responses?: Record<string, unknown>;
    };
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
