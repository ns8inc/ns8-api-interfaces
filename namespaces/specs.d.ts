declare const Specs: {
    DataServices: {
        swagger: string;
        info: {
            description: string;
            version: string;
            title: string;
            "x-namespace": string;
        };
        host: string;
        basePath: string;
        tags: {
            name: string;
            description: string;
        }[];
        schemes: string[];
        paths: {
            "/score": {
                get: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        default?: undefined;
                    } | {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        default: string;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
        };
        definitions: {
            APIResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
            };
            APIError: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
            };
        };
    };
    Monitoring: {
        swagger: string;
        info: {
            description: string;
            version: string;
            title: string;
            "x-namespace": string;
        };
        host: string;
        basePath: string;
        tags: {
            name: string;
            description: string;
        }[];
        schemes: string[];
        paths: {
            "/users": {
                post: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                appId: {
                                    type: string;
                                    description: string;
                                };
                                name: {
                                    type: string;
                                    format: string;
                                    default: string;
                                };
                                password: {
                                    type: string;
                                };
                                status: {
                                    type: string;
                                    description: string;
                                };
                            };
                            example: {
                                password: string;
                                appId: number;
                                name: string;
                                status: number;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "409": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/login": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                name: {
                                    type: string;
                                    format: string;
                                    default: string;
                                };
                                password: {
                                    type: string;
                                    format: string;
                                };
                                appId: {
                                    type: string;
                                    format: string;
                                    description: string;
                                    default: number;
                                };
                                expiration: {
                                    type: string;
                                    description: string;
                                };
                            };
                            example: {
                                password: string;
                                appId: number;
                                name: string;
                                expiration: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    expiration: {
                                        type: string;
                                    };
                                    user: {
                                        properties: {
                                            id: {
                                                type: string;
                                                format: string;
                                            };
                                            name: {
                                                type: string;
                                            };
                                            status: {
                                                type: string;
                                            };
                                            account: {
                                                type: string;
                                                properties: {};
                                            };
                                        };
                                        example: {
                                            name: string;
                                            id: number;
                                            account: string;
                                            status: number;
                                        };
                                        additionalProperties: boolean;
                                    };
                                };
                                example: {
                                    expiration: string;
                                    user: {
                                        name: string;
                                        id: number;
                                        account: string;
                                        status: number;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/authorize": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            properties: {
                                accessToken: {
                                    type: string;
                                };
                            };
                            example: {
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    expiration: {
                                        type: string;
                                    };
                                    user: {
                                        properties: {
                                            id: {
                                                type: string;
                                                format: string;
                                            };
                                            name: {
                                                type: string;
                                            };
                                            status: {
                                                type: string;
                                            };
                                            account: {
                                                type: string;
                                                properties: {};
                                            };
                                        };
                                        example: {
                                            name: string;
                                            id: number;
                                            account: string;
                                            status: number;
                                        };
                                        additionalProperties: boolean;
                                    };
                                };
                                example: {
                                    expiration: string;
                                    user: {
                                        name: string;
                                        id: number;
                                        account: string;
                                        status: number;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/monitoring/stations": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: any[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                items: {
                                    properties: {
                                        url: {
                                            type: string;
                                        };
                                        description: {
                                            type: string;
                                        };
                                        country: {
                                            type: string;
                                        };
                                        longitude: {
                                            type: string;
                                        };
                                        latitude: {
                                            type: string;
                                        };
                                    };
                                    example: {
                                        country: string;
                                        latitude: string;
                                        description: string;
                                        url: string;
                                        longitude: string;
                                    };
                                    additionalProperties: boolean;
                                };
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/monitoring/contacts": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                post: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                name: {
                                    type: string;
                                    description: string;
                                };
                                type: {
                                    type: string;
                                    enum: string[];
                                };
                                endpoint: {
                                    type: string;
                                    description: string;
                                };
                            };
                            example: {
                                endpoint: string;
                                name: string;
                                accessToken: string;
                                type: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "409": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/monitoring/contacts/{id}": {
                delete: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
        };
        definitions: {
            AccessTokenCreateParams: {
                type: string;
                required: string[];
                properties: {
                    accessToken: {
                        type: string;
                        description: string;
                    };
                    permissions: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            enum: string[];
                        };
                    };
                };
                additionalProperties: boolean;
            };
            APIResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                };
                example: {
                    code: number;
                    message: string;
                };
                additionalProperties: boolean;
            };
            Login: {
                properties: {
                    accessToken: {
                        type: string;
                    };
                    expiration: {
                        type: string;
                    };
                    user: {
                        properties: {
                            id: {
                                type: string;
                                format: string;
                            };
                            name: {
                                type: string;
                            };
                            status: {
                                type: string;
                            };
                            account: {
                                type: string;
                                properties: {};
                            };
                        };
                        example: {
                            name: string;
                            id: number;
                            account: string;
                            status: number;
                        };
                        additionalProperties: boolean;
                    };
                };
                additionalProperties: boolean;
            };
            APIError: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                };
                example: {
                    code: number;
                    message: string;
                };
                additionalProperties: boolean;
            };
            DuplicateError: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
            };
            Station: {
                properties: {
                    url: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    country: {
                        type: string;
                    };
                    longitude: {
                        type: string;
                    };
                    latitude: {
                        type: string;
                    };
                };
                example: {
                    country: string;
                    latitude: string;
                    description: string;
                    url: string;
                    longitude: string;
                };
                additionalProperties: boolean;
            };
            AuthorizeParams: {
                properties: {
                    accessToken: {
                        type: string;
                    };
                };
                example: {
                    accessToken: string;
                };
                additionalProperties: boolean;
            };
            LoginParams: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                        format: string;
                        default: string;
                    };
                    password: {
                        type: string;
                        format: string;
                    };
                    appId: {
                        type: string;
                        format: string;
                        description: string;
                        default: number;
                    };
                    expiration: {
                        type: string;
                        description: string;
                    };
                };
                example: {
                    password: string;
                    appId: number;
                    name: string;
                    expiration: string;
                };
                additionalProperties: boolean;
            };
            UserParams: {
                required: string[];
                properties: {
                    appId: {
                        type: string;
                        description: string;
                    };
                    name: {
                        type: string;
                        format: string;
                        default: string;
                    };
                    password: {
                        type: string;
                    };
                    status: {
                        type: string;
                        description: string;
                    };
                };
                example: {
                    password: string;
                    appId: number;
                    name: string;
                    status: number;
                };
                additionalProperties: boolean;
            };
            User: {
                properties: {
                    id: {
                        type: string;
                        format: string;
                    };
                    name: {
                        type: string;
                    };
                    status: {
                        type: string;
                    };
                    account: {
                        type: string;
                        properties: {};
                    };
                };
                example: {
                    name: string;
                    id: number;
                    account: string;
                    status: number;
                };
                additionalProperties: boolean;
            };
            Authorization: {
                properties: {
                    expiration: {
                        type: string;
                    };
                    user: {
                        properties: {
                            id: {
                                type: string;
                                format: string;
                            };
                            name: {
                                type: string;
                            };
                            status: {
                                type: string;
                            };
                            account: {
                                type: string;
                                properties: {};
                            };
                        };
                        example: {
                            name: string;
                            id: number;
                            account: string;
                            status: number;
                        };
                        additionalProperties: boolean;
                    };
                };
                example: {
                    expiration: string;
                    user: {
                        name: string;
                        id: number;
                        account: string;
                        status: number;
                    };
                };
                additionalProperties: boolean;
            };
            ContactCreateParams: {
                required: string[];
                properties: {
                    accessToken: {
                        type: string;
                        description: string;
                    };
                    name: {
                        type: string;
                        description: string;
                    };
                    type: {
                        type: string;
                        enum: string[];
                    };
                    endpoint: {
                        type: string;
                        description: string;
                    };
                };
                example: {
                    endpoint: string;
                    name: string;
                    accessToken: string;
                    type: string;
                };
                additionalProperties: boolean;
            };
        };
    };
    Partner: {
        swagger: string;
        info: {
            description: string;
            version: string;
            title: string;
            "x-namespace": string;
        };
        host: string;
        basePath: string;
        tags: {
            name: string;
            description: string;
        }[];
        schemes: string[];
        paths: {
            "/partners/profiles": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        default: string;
                        enum: string[];
                        items?: undefined;
                        collectionFormat?: undefined;
                    } | {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        default: number;
                        enum?: undefined;
                        items?: undefined;
                        collectionFormat?: undefined;
                    } | {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        items: {
                            type: string;
                        };
                        collectionFormat: string;
                        default: string;
                        enum?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    currentPage: {
                                        type: string;
                                        description: string;
                                    };
                                    next: {
                                        type: string;
                                        description: string;
                                    };
                                    profiles: {
                                        type: string;
                                        description: string;
                                        items: {
                                            type: string;
                                            properties: {};
                                        };
                                    };
                                };
                                example: {
                                    next: boolean;
                                    profiles: string[];
                                    currentPage: number;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/profile": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                    data: {
                                        type: string;
                                        description: string;
                                        properties: {};
                                    };
                                };
                                example: {
                                    code: number;
                                    data: string;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                put: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                profile: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                profile: string;
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                        description?: undefined;
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                patch: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                profile: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                profile: string;
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                        description?: undefined;
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/payee": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                    data: {
                                        type: string;
                                        description: string;
                                        properties: {};
                                    };
                                };
                                example: {
                                    code: number;
                                    data: string;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                put: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                payee: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                payee: string;
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                        description?: undefined;
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                patch: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                payee: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                payee: string;
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                        description?: undefined;
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/showcases/{showcaseId}": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                    data: {
                                        type: string;
                                        description: string;
                                        properties: {};
                                    };
                                };
                                example: {
                                    code: number;
                                    data: string;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                put: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                showcase: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                showcase: string;
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                        description?: undefined;
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                delete: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                patch: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                showcase: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                showcase: string;
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                        description?: undefined;
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/showcases": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                    data: {
                                        properties: {
                                            showcases: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {};
                                                };
                                            };
                                        };
                                        example: {
                                            showcases: string[];
                                        };
                                        additionalProperties: boolean;
                                    };
                                };
                                example: {
                                    code: number;
                                    data: {
                                        showcases: string[];
                                    };
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                post: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                showcase: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                showcase: string;
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                        description?: undefined;
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                    data: {
                                        type: string;
                                        description: string;
                                        properties: {};
                                    };
                                };
                                example: {
                                    code: number;
                                    data: string;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/testimonials/{testimonialId}": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                    data: {
                                        type: string;
                                        description: string;
                                        properties: {};
                                    };
                                };
                                example: {
                                    code: number;
                                    data: string;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                put: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                testimonial: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                testimonial: string;
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                        description?: undefined;
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                delete: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                patch: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                testimonial: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                testimonial: string;
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                        description?: undefined;
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/testimonials": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                    data: {
                                        properties: {
                                            testimonials: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {};
                                                };
                                            };
                                        };
                                        example: {
                                            testimonials: string[];
                                        };
                                        additionalProperties: boolean;
                                    };
                                };
                                example: {
                                    code: number;
                                    data: {
                                        testimonials: string[];
                                    };
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
                post: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                accessToken: {
                                    type: string;
                                    description: string;
                                };
                                testimonial: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                testimonial: string;
                                accessToken: string;
                            };
                            additionalProperties: boolean;
                        };
                        description?: undefined;
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                    data: {
                                        type: string;
                                        description: string;
                                        properties: {};
                                    };
                                };
                                example: {
                                    code: number;
                                    data: string;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
            "/partners/slug/{slug}": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                example: {
                                    code: number;
                                    message: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        default: {
                            description: string;
                            schema: {
                                properties: {
                                    code: {
                                        type: string;
                                        format: string;
                                    };
                                    message: {
                                        type: string;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
        };
        definitions: {
            ProfileResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                    data: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    code: number;
                    data: string;
                    message: string;
                };
                additionalProperties: boolean;
            };
            PayeeResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                    data: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    code: number;
                    data: string;
                    message: string;
                };
                additionalProperties: boolean;
            };
            ShowcaseResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                    data: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    code: number;
                    data: string;
                    message: string;
                };
                additionalProperties: boolean;
            };
            ShowcasePostResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                    data: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    code: number;
                    data: string;
                    message: string;
                };
                additionalProperties: boolean;
            };
            TestimonialResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                    data: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    code: number;
                    data: string;
                    message: string;
                };
                additionalProperties: boolean;
            };
            TestimonialsResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                    data: {
                        properties: {
                            testimonials: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {};
                                };
                            };
                        };
                        example: {
                            testimonials: string[];
                        };
                        additionalProperties: boolean;
                    };
                };
                example: {
                    code: number;
                    data: {
                        testimonials: string[];
                    };
                    message: string;
                };
                additionalProperties: boolean;
            };
            ShowcasesResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                    data: {
                        properties: {
                            showcases: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {};
                                };
                            };
                        };
                        example: {
                            showcases: string[];
                        };
                        additionalProperties: boolean;
                    };
                };
                example: {
                    code: number;
                    data: {
                        showcases: string[];
                    };
                    message: string;
                };
                additionalProperties: boolean;
            };
            Testimonials: {
                properties: {
                    testimonials: {
                        type: string;
                        items: {
                            type: string;
                            properties: {};
                        };
                    };
                };
                example: {
                    testimonials: string[];
                };
                additionalProperties: boolean;
            };
            ProfilesResponse: {
                properties: {
                    currentPage: {
                        type: string;
                        description: string;
                    };
                    next: {
                        type: string;
                        description: string;
                    };
                    profiles: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            properties: {};
                        };
                    };
                };
                example: {
                    next: boolean;
                    profiles: string[];
                    currentPage: number;
                };
                additionalProperties: boolean;
            };
            Showcases: {
                properties: {
                    showcases: {
                        type: string;
                        items: {
                            type: string;
                            properties: {};
                        };
                    };
                };
                example: {
                    showcases: string[];
                };
                additionalProperties: boolean;
            };
            TestimonialPostResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                    data: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    code: number;
                    data: string;
                    message: string;
                };
                additionalProperties: boolean;
            };
            APIResponse: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                };
                example: {
                    code: number;
                    message: string;
                };
                additionalProperties: boolean;
            };
            APIError: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
            };
            DuplicateError: {
                properties: {
                    code: {
                        type: string;
                        format: string;
                    };
                    message: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
            };
            ProfilePutParams: {
                required: string[];
                properties: {
                    accessToken: {
                        type: string;
                        description: string;
                    };
                    profile: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    profile: string;
                    accessToken: string;
                };
                additionalProperties: boolean;
            };
            ShowcasePutParams: {
                required: string[];
                properties: {
                    accessToken: {
                        type: string;
                        description: string;
                    };
                    showcase: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    showcase: string;
                    accessToken: string;
                };
                additionalProperties: boolean;
            };
            ShowcasePatchParams: {
                required: string[];
                properties: {
                    accessToken: {
                        type: string;
                        description: string;
                    };
                    showcase: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    showcase: string;
                    accessToken: string;
                };
                additionalProperties: boolean;
            };
            ShowcasePostParams: {
                required: string[];
                properties: {
                    accessToken: {
                        type: string;
                        description: string;
                    };
                    showcase: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    showcase: string;
                    accessToken: string;
                };
                additionalProperties: boolean;
            };
            TestimonialPutParams: {
                required: string[];
                properties: {
                    accessToken: {
                        type: string;
                        description: string;
                    };
                    testimonial: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    testimonial: string;
                    accessToken: string;
                };
                additionalProperties: boolean;
            };
            TestimonialPatchParams: {
                required: string[];
                properties: {
                    accessToken: {
                        type: string;
                        description: string;
                    };
                    testimonial: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    testimonial: string;
                    accessToken: string;
                };
                additionalProperties: boolean;
            };
            TestimonialPostParams: {
                required: string[];
                properties: {
                    accessToken: {
                        type: string;
                        description: string;
                    };
                    testimonial: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    testimonial: string;
                    accessToken: string;
                };
                additionalProperties: boolean;
            };
            PayeePutParams: {
                required: string[];
                properties: {
                    accessToken: {
                        type: string;
                        description: string;
                    };
                    payee: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    payee: string;
                    accessToken: string;
                };
                additionalProperties: boolean;
            };
        };
    };
    Protect: {
        swagger: string;
        info: {
            description: string;
            version: string;
            title: string;
            "x-namespace": string;
        };
        host: string;
        basePath: string;
        tags: ({
            name: string;
            description?: undefined;
        } | {
            name: string;
            description: string;
        })[];
        schemes: string[];
        produces: string[];
        paths: {
            "/users": {
                post: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                name: {
                                    type: string;
                                    description: string;
                                    minLength: number;
                                    transform: string[];
                                };
                                email: {
                                    type: string;
                                    format: string;
                                };
                                password: {
                                    type: string;
                                    minLength: number;
                                };
                                firstName: {
                                    type: string;
                                };
                                lastName: {
                                    type: string;
                                };
                                phone: {
                                    type: string;
                                    pattern: string;
                                };
                                timezone: {
                                    type: string;
                                    default: string;
                                };
                            };
                            example: {
                                firstName: string;
                                lastName: string;
                                password: string;
                                phone: string;
                                timezone: string;
                                name: string;
                                email: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        type: string;
                                        description: string;
                                    };
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    firstName: {
                                        type: string;
                                    };
                                    lastName: {
                                        type: string;
                                    };
                                    email: {
                                        type: string;
                                        format: string;
                                        description: string;
                                    };
                                    status: {
                                        type: string;
                                    };
                                    phone: {
                                        type: string;
                                    };
                                    timezone: {
                                        type: string;
                                    };
                                    createdDate: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                    lastUpdated: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                };
                                example: {
                                    firstName: string;
                                    lastName: string;
                                    lastUpdated: string;
                                    createdDate: string;
                                    phone: string;
                                    timezone: string;
                                    name: string;
                                    id: number;
                                    email: string;
                                    status: number;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "404": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "409": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    "x-rate-limit": number;
                };
                patch: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            properties: {
                                firstName: {
                                    type: string;
                                };
                                lastName: {
                                    type: string;
                                };
                                email: {
                                    type: string;
                                    format: string;
                                };
                                phone: {
                                    type: string;
                                    pattern: string;
                                };
                                timezone: {
                                    type: string;
                                };
                            };
                            description: string;
                            example: {
                                firstName: string;
                                lastName: string;
                                phone: string;
                                timezone: string;
                                email: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        type: string;
                                        description: string;
                                    };
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    firstName: {
                                        type: string;
                                    };
                                    lastName: {
                                        type: string;
                                    };
                                    email: {
                                        type: string;
                                        format: string;
                                        description: string;
                                    };
                                    status: {
                                        type: string;
                                    };
                                    phone: {
                                        type: string;
                                    };
                                    timezone: {
                                        type: string;
                                    };
                                    createdDate: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                    lastUpdated: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                };
                                example: {
                                    firstName: string;
                                    lastName: string;
                                    lastUpdated: string;
                                    createdDate: string;
                                    phone: string;
                                    timezone: string;
                                    name: string;
                                    id: number;
                                    email: string;
                                    status: number;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "404": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "409": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/users/password": {
                put: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                oldPassword: {
                                    type: string;
                                    format: string;
                                    description: string;
                                    minLength: number;
                                };
                                newPassword: {
                                    type: string;
                                    format: string;
                                    description: string;
                                    minLength: number;
                                };
                            };
                            description: string;
                            example: {
                                oldPassword: string;
                                newPassword: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "204": {
                            description: string;
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/users/{id}/password": {
                put: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                password: {
                                    type: string;
                                    description: string;
                                    minLength: number;
                                };
                            };
                            description: string;
                            example: {
                                password: string;
                            };
                            additionalProperties: boolean;
                        };
                        type?: undefined;
                    })[];
                    responses: {
                        "204": {
                            description: string;
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                    "x-permissions": string[];
                    "x-rate-limit": number;
                };
            };
            "/users/name/{name}": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        type: string;
                                        description: string;
                                    };
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    firstName: {
                                        type: string;
                                    };
                                    lastName: {
                                        type: string;
                                    };
                                    email: {
                                        type: string;
                                        format: string;
                                        description: string;
                                    };
                                    status: {
                                        type: string;
                                    };
                                    phone: {
                                        type: string;
                                    };
                                    timezone: {
                                        type: string;
                                    };
                                    createdDate: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                    lastUpdated: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                };
                                example: {
                                    firstName: string;
                                    lastName: string;
                                    lastUpdated: string;
                                    createdDate: string;
                                    phone: string;
                                    timezone: string;
                                    name: string;
                                    id: number;
                                    email: string;
                                    status: number;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "404": {
                            description: string;
                        };
                        "429": {
                            description: string;
                        };
                    };
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
            };
            "/accounts": {
                post: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                appId: {
                                    type: string;
                                    description: string;
                                };
                                userId: {
                                    type: string;
                                    description: string;
                                };
                                status: {
                                    type: string;
                                    description: string;
                                };
                                type: {
                                    type: string;
                                    description: string;
                                };
                                partnerId: {
                                    type: string;
                                    description: string;
                                };
                                discountPct: {
                                    type: string;
                                    description: string;
                                    minimum: number;
                                    maximum: number;
                                };
                            };
                            description: string;
                            example: {
                                discountPct: number;
                                appId: number;
                                partnerId: number;
                                type: string;
                                userId: number;
                                status: number;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        type: string;
                                        description: string;
                                    };
                                    userId: {
                                        type: string;
                                        description: string;
                                    };
                                    appId: {
                                        type: string;
                                        description: string;
                                    };
                                    status: {
                                        type: string;
                                        description: string;
                                    };
                                    createdDate: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                    lastUpdated: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                    type: {
                                        type: string;
                                        description: string;
                                    };
                                    partnerId: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                description: string;
                                example: {
                                    lastUpdated: string;
                                    createdDate: string;
                                    appId: number;
                                    id: number;
                                    partnerId: number;
                                    type: string;
                                    userId: number;
                                    status: number;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "409": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    "x-rate-limit": number;
                };
            };
            "/projects": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: any[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                items: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        id: {
                                            type: string;
                                            description: string;
                                        };
                                        accountId: {
                                            type: string;
                                            description: string;
                                        };
                                        appId: {
                                            type: string;
                                            description: string;
                                        };
                                        name: {
                                            type: string;
                                            description: string;
                                        };
                                        type: {
                                            type: string;
                                            description: string;
                                        };
                                        enabled: {
                                            type: string;
                                            description: string;
                                            default: boolean;
                                        };
                                        isDemo: {
                                            type: string;
                                            description: string;
                                        };
                                        implemented: {
                                            type: string;
                                            description: string;
                                        };
                                        permissions: {
                                            type: string;
                                            description: string;
                                            additionalProperties: boolean;
                                        };
                                        sharedByUserId: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    description: string;
                                    example: {
                                        accountId: number;
                                        permissions: {};
                                        appId: number;
                                        name: string;
                                        implemented: boolean;
                                        sharedByUserId: number;
                                        id: number;
                                        type: string;
                                        isDemo: boolean;
                                        enabled: boolean;
                                    };
                                    additionalProperties: boolean;
                                };
                            };
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "404": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                    "x-rate-limit": number;
                };
                post: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                name: {
                                    type: string;
                                };
                                type: {
                                    description: string;
                                };
                            };
                            description: string;
                            example: {
                                name: string;
                                type: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        type: string;
                                        description: string;
                                    };
                                    accountId: {
                                        type: string;
                                        description: string;
                                    };
                                    appId: {
                                        type: string;
                                        description: string;
                                    };
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    type: {
                                        type: string;
                                        description: string;
                                    };
                                    enabled: {
                                        type: string;
                                        description: string;
                                        default: boolean;
                                    };
                                    isDemo: {
                                        type: string;
                                        description: string;
                                    };
                                    implemented: {
                                        type: string;
                                        description: string;
                                    };
                                    permissions: {
                                        type: string;
                                        description: string;
                                        additionalProperties: boolean;
                                    };
                                    sharedByUserId: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                description: string;
                                example: {
                                    accountId: number;
                                    permissions: {};
                                    appId: number;
                                    name: string;
                                    implemented: boolean;
                                    sharedByUserId: number;
                                    id: number;
                                    type: string;
                                    isDemo: boolean;
                                    enabled: boolean;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "404": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/projects/{id}": {
                delete: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "204": {
                            description: string;
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "404": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                    "x-rate-limit": number;
                };
                patch: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        schema?: undefined;
                    } | {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            properties: {
                                name: {
                                    type: string;
                                };
                                enabled: {
                                    type: string;
                                };
                                type: {
                                    type: string;
                                };
                                implemented: {
                                    type: string;
                                };
                            };
                            description: string;
                            example: {
                                name: string;
                                implemented: boolean;
                                type: string;
                                enabled: boolean;
                            };
                            additionalProperties: boolean;
                        };
                        type?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        type: string;
                                        description: string;
                                    };
                                    accountId: {
                                        type: string;
                                        description: string;
                                    };
                                    appId: {
                                        type: string;
                                        description: string;
                                    };
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    type: {
                                        type: string;
                                        description: string;
                                    };
                                    enabled: {
                                        type: string;
                                        description: string;
                                        default: boolean;
                                    };
                                    isDemo: {
                                        type: string;
                                        description: string;
                                    };
                                    implemented: {
                                        type: string;
                                        description: string;
                                    };
                                    permissions: {
                                        type: string;
                                        description: string;
                                        additionalProperties: boolean;
                                    };
                                    sharedByUserId: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                description: string;
                                example: {
                                    accountId: number;
                                    permissions: {};
                                    appId: number;
                                    name: string;
                                    implemented: boolean;
                                    sharedByUserId: number;
                                    id: number;
                                    type: string;
                                    isDemo: boolean;
                                    enabled: boolean;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "404": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/access-tokens": {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                name: {
                                    type: string;
                                };
                                password: {
                                    type: string;
                                };
                                appId: {
                                    type: string;
                                    description: string;
                                };
                            };
                            description: string;
                            example: {
                                password: string;
                                appId: number;
                                name: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                required: string[];
                                properties: {
                                    id: {
                                        type: string;
                                        description: string;
                                    };
                                    userId: {
                                        type: string;
                                        description: string;
                                    };
                                    appId: {
                                        type: string;
                                        description: string;
                                    };
                                    accountId: {
                                        type: string;
                                        description: string;
                                    };
                                    projectId: {
                                        type: string;
                                        description: string;
                                    };
                                    permissions: {
                                        type: string;
                                        description: string;
                                        items: {
                                            type: string;
                                        };
                                        additionalProperties: boolean;
                                    };
                                    type: {
                                        type: string;
                                        description: string;
                                    };
                                    createdDate: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                    expiration: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                };
                                description: string;
                                example: {
                                    accountId: number;
                                    createdDate: string;
                                    permissions: string;
                                    appId: number;
                                    expiration: string;
                                    id: string;
                                    type: string;
                                    userId: number;
                                    projectId: number;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    "x-rate-limit": number;
                };
            };
            "/authorizations": {
                get: {
                    tags: string[];
                    summary: string;
                    description: string;
                    parameters: any[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    user: {
                                        type: string;
                                        required: string[];
                                        properties: {
                                            id: {
                                                type: string;
                                                description: string;
                                            };
                                            name: {
                                                type: string;
                                                description: string;
                                            };
                                            firstName: {
                                                type: string;
                                            };
                                            lastName: {
                                                type: string;
                                            };
                                            email: {
                                                type: string;
                                                format: string;
                                                description: string;
                                            };
                                            status: {
                                                type: string;
                                            };
                                            phone: {
                                                type: string;
                                            };
                                            timezone: {
                                                type: string;
                                            };
                                            createdDate: {
                                                type: string;
                                                format: string;
                                                description: string;
                                                convertStringToDate: boolean;
                                            };
                                            lastUpdated: {
                                                type: string;
                                                format: string;
                                                description: string;
                                                convertStringToDate: boolean;
                                            };
                                        };
                                        example: {
                                            firstName: string;
                                            lastName: string;
                                            lastUpdated: string;
                                            createdDate: string;
                                            phone: string;
                                            timezone: string;
                                            name: string;
                                            id: number;
                                            email: string;
                                            status: number;
                                        };
                                        additionalProperties: boolean;
                                    };
                                    account: {
                                        type: string;
                                        required: string[];
                                        properties: {
                                            id: {
                                                type: string;
                                                description: string;
                                            };
                                            userId: {
                                                type: string;
                                                description: string;
                                            };
                                            appId: {
                                                type: string;
                                                description: string;
                                            };
                                            status: {
                                                type: string;
                                                description: string;
                                            };
                                            createdDate: {
                                                type: string;
                                                format: string;
                                                description: string;
                                                convertStringToDate: boolean;
                                            };
                                            lastUpdated: {
                                                type: string;
                                                format: string;
                                                description: string;
                                                convertStringToDate: boolean;
                                            };
                                            type: {
                                                type: string;
                                                description: string;
                                            };
                                            partnerId: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        description: string;
                                        example: {
                                            lastUpdated: string;
                                            createdDate: string;
                                            appId: number;
                                            id: number;
                                            partnerId: number;
                                            type: string;
                                            userId: number;
                                            status: number;
                                        };
                                        additionalProperties: boolean;
                                    };
                                    projects: {
                                        type: string;
                                        description: string;
                                        items: {
                                            type: string;
                                            required: string[];
                                            properties: {
                                                id: {
                                                    type: string;
                                                    description: string;
                                                };
                                                accountId: {
                                                    type: string;
                                                    description: string;
                                                };
                                                appId: {
                                                    type: string;
                                                    description: string;
                                                };
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                type: {
                                                    type: string;
                                                    description: string;
                                                };
                                                enabled: {
                                                    type: string;
                                                    description: string;
                                                    default: boolean;
                                                };
                                                isDemo: {
                                                    type: string;
                                                    description: string;
                                                };
                                                implemented: {
                                                    type: string;
                                                    description: string;
                                                };
                                                permissions: {
                                                    type: string;
                                                    description: string;
                                                    additionalProperties: boolean;
                                                };
                                                sharedByUserId: {
                                                    type: string;
                                                    description: string;
                                                };
                                            };
                                            description: string;
                                            example: {
                                                accountId: number;
                                                permissions: {};
                                                appId: number;
                                                name: string;
                                                implemented: boolean;
                                                sharedByUserId: number;
                                                id: number;
                                                type: string;
                                                isDemo: boolean;
                                                enabled: boolean;
                                            };
                                            additionalProperties: boolean;
                                        };
                                    };
                                    expiration: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                    currentProjectId: {
                                        type: string;
                                        description: string;
                                    };
                                    projectId: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                description: string;
                                example: {
                                    currentProjectId: number;
                                    projects: {
                                        accountId: number;
                                        permissions: {};
                                        appId: number;
                                        name: string;
                                        implemented: boolean;
                                        sharedByUserId: number;
                                        id: number;
                                        type: string;
                                        isDemo: boolean;
                                        enabled: boolean;
                                    }[];
                                    expiration: string;
                                    user: {
                                        firstName: string;
                                        lastName: string;
                                        lastUpdated: string;
                                        createdDate: string;
                                        phone: string;
                                        timezone: string;
                                        name: string;
                                        id: number;
                                        email: string;
                                        status: number;
                                    };
                                    projectId: number;
                                    account: {
                                        lastUpdated: string;
                                        createdDate: string;
                                        appId: number;
                                        id: number;
                                        partnerId: number;
                                        type: string;
                                        userId: number;
                                        status: number;
                                    };
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "404": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    "x-rate-limit": number;
                };
            };
            "/notifications": {
                post: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                email: {
                                    type: string;
                                    format: string;
                                    description: string;
                                };
                                templateName: {
                                    type: string;
                                    description: string;
                                };
                                templateData: {
                                    type: string;
                                    description: string;
                                    additionalProperties: boolean;
                                };
                            };
                            description: string;
                            example: {
                                templateName: string;
                                templateData: {
                                    key: string;
                                };
                                email: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "204": {
                            description: string;
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                    "x-permissions": string[];
                };
            };
            "/stash": {
                post: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                expires: {
                                    type: string;
                                    format: string;
                                    description: string;
                                    convertStringToDate: boolean;
                                };
                                data: {
                                    type: string;
                                    description: string;
                                    additionalProperties: boolean;
                                };
                            };
                            description: string;
                            example: {
                                expires: string;
                                data: {
                                    key: string;
                                };
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        type: string;
                                        description: string;
                                    };
                                    expires: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                    data: {
                                        type: string;
                                        description: string;
                                        additionalProperties: boolean;
                                    };
                                };
                                example: {
                                    expires: string;
                                    data: {
                                        key: string;
                                    };
                                    id: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
            };
            "/stash/{id}": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    id: {
                                        type: string;
                                        description: string;
                                    };
                                    expires: {
                                        type: string;
                                        format: string;
                                        description: string;
                                        convertStringToDate: boolean;
                                    };
                                    data: {
                                        type: string;
                                        description: string;
                                        additionalProperties: boolean;
                                    };
                                };
                                example: {
                                    expires: string;
                                    data: {
                                        key: string;
                                    };
                                    id: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                        "400": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "401": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "404": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                        "429": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    code: {
                                        type: string;
                                        description: string;
                                    };
                                    message: {
                                        type: string;
                                        description: string;
                                    };
                                    errors: {
                                        type: string;
                                        description: string;
                                        items: {
                                            required: string[];
                                            properties: {
                                                name: {
                                                    type: string;
                                                    description: string;
                                                };
                                                code: {
                                                    type: string;
                                                };
                                                message: {
                                                    type: string;
                                                };
                                            };
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                description: string;
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                    "x-permissions": string[];
                    "x-rate-limit": number;
                };
            };
            "/entities": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: any[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                properties: {
                                    sessions: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            description: {
                                                type: string;
                                            };
                                            attributes: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        title: {
                                                            type: string;
                                                        };
                                                        description: {
                                                            type: string;
                                                        };
                                                        dataType: {
                                                            type: string;
                                                        };
                                                        isElement: {
                                                            type: string;
                                                        };
                                                        isMetric: {
                                                            type: string;
                                                        };
                                                        logAttribute: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        operators: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        values: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        searchable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        filterable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        rule: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    example: {
                                                        filterable: boolean;
                                                        operators: string[];
                                                        isElement: boolean;
                                                        dataType: string;
                                                        values: string[];
                                                        name: string;
                                                        isMetric: boolean;
                                                        description: string;
                                                        logAttribute: boolean;
                                                        rule: boolean;
                                                        title: string;
                                                        searchable: boolean;
                                                    };
                                                    additionalProperties: boolean;
                                                };
                                            };
                                        };
                                        example: {
                                            name: string;
                                            description: string;
                                            attributes: {
                                                filterable: boolean;
                                                operators: string[];
                                                isElement: boolean;
                                                dataType: string;
                                                values: string[];
                                                name: string;
                                                isMetric: boolean;
                                                description: string;
                                                logAttribute: boolean;
                                                rule: boolean;
                                                title: string;
                                                searchable: boolean;
                                            }[];
                                        };
                                        additionalProperties: boolean;
                                    };
                                    pages: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            description: {
                                                type: string;
                                            };
                                            attributes: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        title: {
                                                            type: string;
                                                        };
                                                        description: {
                                                            type: string;
                                                        };
                                                        dataType: {
                                                            type: string;
                                                        };
                                                        isElement: {
                                                            type: string;
                                                        };
                                                        isMetric: {
                                                            type: string;
                                                        };
                                                        logAttribute: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        operators: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        values: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        searchable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        filterable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        rule: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    example: {
                                                        filterable: boolean;
                                                        operators: string[];
                                                        isElement: boolean;
                                                        dataType: string;
                                                        values: string[];
                                                        name: string;
                                                        isMetric: boolean;
                                                        description: string;
                                                        logAttribute: boolean;
                                                        rule: boolean;
                                                        title: string;
                                                        searchable: boolean;
                                                    };
                                                    additionalProperties: boolean;
                                                };
                                            };
                                        };
                                        example: {
                                            name: string;
                                            description: string;
                                            attributes: {
                                                filterable: boolean;
                                                operators: string[];
                                                isElement: boolean;
                                                dataType: string;
                                                values: string[];
                                                name: string;
                                                isMetric: boolean;
                                                description: string;
                                                logAttribute: boolean;
                                                rule: boolean;
                                                title: string;
                                                searchable: boolean;
                                            }[];
                                        };
                                        additionalProperties: boolean;
                                    };
                                    events: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            description: {
                                                type: string;
                                            };
                                            attributes: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        title: {
                                                            type: string;
                                                        };
                                                        description: {
                                                            type: string;
                                                        };
                                                        dataType: {
                                                            type: string;
                                                        };
                                                        isElement: {
                                                            type: string;
                                                        };
                                                        isMetric: {
                                                            type: string;
                                                        };
                                                        logAttribute: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        operators: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        values: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        searchable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        filterable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        rule: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    example: {
                                                        filterable: boolean;
                                                        operators: string[];
                                                        isElement: boolean;
                                                        dataType: string;
                                                        values: string[];
                                                        name: string;
                                                        isMetric: boolean;
                                                        description: string;
                                                        logAttribute: boolean;
                                                        rule: boolean;
                                                        title: string;
                                                        searchable: boolean;
                                                    };
                                                    additionalProperties: boolean;
                                                };
                                            };
                                        };
                                        example: {
                                            name: string;
                                            description: string;
                                            attributes: {
                                                filterable: boolean;
                                                operators: string[];
                                                isElement: boolean;
                                                dataType: string;
                                                values: string[];
                                                name: string;
                                                isMetric: boolean;
                                                description: string;
                                                logAttribute: boolean;
                                                rule: boolean;
                                                title: string;
                                                searchable: boolean;
                                            }[];
                                        };
                                        additionalProperties: boolean;
                                    };
                                    timings: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            description: {
                                                type: string;
                                            };
                                            attributes: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        title: {
                                                            type: string;
                                                        };
                                                        description: {
                                                            type: string;
                                                        };
                                                        dataType: {
                                                            type: string;
                                                        };
                                                        isElement: {
                                                            type: string;
                                                        };
                                                        isMetric: {
                                                            type: string;
                                                        };
                                                        logAttribute: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        operators: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        values: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        searchable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        filterable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        rule: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    example: {
                                                        filterable: boolean;
                                                        operators: string[];
                                                        isElement: boolean;
                                                        dataType: string;
                                                        values: string[];
                                                        name: string;
                                                        isMetric: boolean;
                                                        description: string;
                                                        logAttribute: boolean;
                                                        rule: boolean;
                                                        title: string;
                                                        searchable: boolean;
                                                    };
                                                    additionalProperties: boolean;
                                                };
                                            };
                                        };
                                        example: {
                                            name: string;
                                            description: string;
                                            attributes: {
                                                filterable: boolean;
                                                operators: string[];
                                                isElement: boolean;
                                                dataType: string;
                                                values: string[];
                                                name: string;
                                                isMetric: boolean;
                                                description: string;
                                                logAttribute: boolean;
                                                rule: boolean;
                                                title: string;
                                                searchable: boolean;
                                            }[];
                                        };
                                        additionalProperties: boolean;
                                    };
                                    users: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            description: {
                                                type: string;
                                            };
                                            attributes: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        title: {
                                                            type: string;
                                                        };
                                                        description: {
                                                            type: string;
                                                        };
                                                        dataType: {
                                                            type: string;
                                                        };
                                                        isElement: {
                                                            type: string;
                                                        };
                                                        isMetric: {
                                                            type: string;
                                                        };
                                                        logAttribute: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        operators: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        values: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        searchable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        filterable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        rule: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    example: {
                                                        filterable: boolean;
                                                        operators: string[];
                                                        isElement: boolean;
                                                        dataType: string;
                                                        values: string[];
                                                        name: string;
                                                        isMetric: boolean;
                                                        description: string;
                                                        logAttribute: boolean;
                                                        rule: boolean;
                                                        title: string;
                                                        searchable: boolean;
                                                    };
                                                    additionalProperties: boolean;
                                                };
                                            };
                                        };
                                        example: {
                                            name: string;
                                            description: string;
                                            attributes: {
                                                filterable: boolean;
                                                operators: string[];
                                                isElement: boolean;
                                                dataType: string;
                                                values: string[];
                                                name: string;
                                                isMetric: boolean;
                                                description: string;
                                                logAttribute: boolean;
                                                rule: boolean;
                                                title: string;
                                                searchable: boolean;
                                            }[];
                                        };
                                        additionalProperties: boolean;
                                    };
                                    people: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            description: {
                                                type: string;
                                            };
                                            attributes: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        name: {
                                                            type: string;
                                                        };
                                                        title: {
                                                            type: string;
                                                        };
                                                        description: {
                                                            type: string;
                                                        };
                                                        dataType: {
                                                            type: string;
                                                        };
                                                        isElement: {
                                                            type: string;
                                                        };
                                                        isMetric: {
                                                            type: string;
                                                        };
                                                        logAttribute: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        operators: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        values: {
                                                            type: string;
                                                            description: string;
                                                            items: {
                                                                type: string;
                                                            };
                                                        };
                                                        searchable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        filterable: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        rule: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                    };
                                                    example: {
                                                        filterable: boolean;
                                                        operators: string[];
                                                        isElement: boolean;
                                                        dataType: string;
                                                        values: string[];
                                                        name: string;
                                                        isMetric: boolean;
                                                        description: string;
                                                        logAttribute: boolean;
                                                        rule: boolean;
                                                        title: string;
                                                        searchable: boolean;
                                                    };
                                                    additionalProperties: boolean;
                                                };
                                            };
                                        };
                                        example: {
                                            name: string;
                                            description: string;
                                            attributes: {
                                                filterable: boolean;
                                                operators: string[];
                                                isElement: boolean;
                                                dataType: string;
                                                values: string[];
                                                name: string;
                                                isMetric: boolean;
                                                description: string;
                                                logAttribute: boolean;
                                                rule: boolean;
                                                title: string;
                                                searchable: boolean;
                                            }[];
                                        };
                                        additionalProperties: boolean;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            "/attributes": {
                get: {
                    tags: string[];
                    summary: string;
                    parameters: ({
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        default: string;
                    } | {
                        name: string;
                        in: string;
                        description: string;
                        required: boolean;
                        type: string;
                        default?: undefined;
                    })[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                };
            };
            "/query": {
                post: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            required: string[];
                            properties: {
                                query: {
                                    type: string;
                                    description: string;
                                    properties: {};
                                };
                            };
                            example: {
                                query: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                properties: {
                                    query: {
                                        type: string;
                                        description: string;
                                        additionalProperties: boolean;
                                    };
                                    columns: {
                                        type: string;
                                        description: string;
                                        items: {
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                    rows: {
                                        type: string;
                                        description: string;
                                        items: {
                                            type: string;
                                            additionalProperties: boolean;
                                        };
                                    };
                                };
                                example: {
                                    columns: {
                                        key: string;
                                    }[];
                                    query: {
                                        key: string;
                                    };
                                    rows: {
                                        key: string;
                                    }[];
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                    security: {
                        Bearer: any[];
                    }[];
                };
            };
            "/order": {
                post: {
                    tags: string[];
                    summary: string;
                    parameters: {
                        in: string;
                        name: string;
                        description: string;
                        required: boolean;
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                platformOrderId: {
                                    type: string;
                                    description: string;
                                };
                                name: {
                                    type: string;
                                    description: string;
                                };
                                shopId: {
                                    type: string;
                                    description: string;
                                };
                                currency: {
                                    type: string;
                                    description: string;
                                };
                                billingAddress: {
                                    type: string;
                                    properties: {
                                        name: {
                                            type: string;
                                        };
                                        company: {
                                            type: string;
                                        };
                                        address1: {
                                            type: string;
                                        };
                                        address2: {
                                            type: string;
                                        };
                                        city: {
                                            type: string;
                                        };
                                        zip: {
                                            type: string;
                                        };
                                        region: {
                                            type: string;
                                            description: string;
                                        };
                                        regionCode: {
                                            type: string;
                                            description: string;
                                        };
                                        country: {
                                            type: string;
                                            description: string;
                                        };
                                        countryCode: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    example: {
                                        zip: string;
                                        country: string;
                                        regionCode: string;
                                        address2: string;
                                        city: string;
                                        address1: string;
                                        countryCode: string;
                                        name: string;
                                        company: string;
                                        region: string;
                                    };
                                    additionalProperties: boolean;
                                };
                                shippingAddress: {
                                    type: string;
                                    properties: {
                                        name: {
                                            type: string;
                                        };
                                        company: {
                                            type: string;
                                        };
                                        address1: {
                                            type: string;
                                        };
                                        address2: {
                                            type: string;
                                        };
                                        city: {
                                            type: string;
                                        };
                                        zip: {
                                            type: string;
                                        };
                                        region: {
                                            type: string;
                                            description: string;
                                        };
                                        regionCode: {
                                            type: string;
                                            description: string;
                                        };
                                        country: {
                                            type: string;
                                            description: string;
                                        };
                                        countryCode: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    example: {
                                        zip: string;
                                        country: string;
                                        regionCode: string;
                                        address2: string;
                                        city: string;
                                        address1: string;
                                        countryCode: string;
                                        name: string;
                                        company: string;
                                        region: string;
                                    };
                                    additionalProperties: boolean;
                                };
                                customer: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        platformCustomerId: {
                                            type: string;
                                            description: string;
                                        };
                                        firstName: {
                                            type: string;
                                        };
                                        lastName: {
                                            type: string;
                                        };
                                        email: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                        phone: {
                                            type: string;
                                        };
                                        gender: {
                                            type: string;
                                            enum: string[];
                                        };
                                        birthday: {
                                            type: string;
                                            format: string;
                                        };
                                        company: {
                                            type: string;
                                        };
                                        ordersCount: {
                                            type: string;
                                            description: string;
                                        };
                                        totalSpent: {
                                            type: string;
                                            description: string;
                                        };
                                        isEmailVerified: {
                                            type: string;
                                            description: string;
                                        };
                                        isPayingCustomer: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    example: {
                                        birthday: string;
                                        firstName: string;
                                        lastName: string;
                                        ordersCount: number;
                                        isPayingCustomer: boolean;
                                        totalSpent: number;
                                        gender: string;
                                        phone: string;
                                        platformCustomerId: string;
                                        company: string;
                                        email: string;
                                        isEmailVerified: boolean;
                                    };
                                    additionalProperties: boolean;
                                };
                                status: {
                                    type: string;
                                    description: string;
                                };
                                totalPrice: {
                                    type: string;
                                    description: string;
                                };
                                payments: {
                                    type: string;
                                    items: {
                                        type: string;
                                        required: string[];
                                        properties: {
                                            platformPaymentId: {
                                                type: string;
                                                description: string;
                                            };
                                            method: {
                                                type: string;
                                                description: string;
                                                enum: string[];
                                            };
                                            amount: {
                                                type: string;
                                                description: string;
                                            };
                                            currency: {
                                                type: string;
                                                description: string;
                                            };
                                            creditCard: {
                                                type: string;
                                                required: string[];
                                                properties: {
                                                    transactionType: {
                                                        type: string;
                                                        description: string;
                                                        enum: string[];
                                                    };
                                                    creditCardNumber: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    creditCardCompany: {
                                                        type: string;
                                                    };
                                                    cardExpiration: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    cardHolder: {
                                                        type: string;
                                                    };
                                                    avsResultCode: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    cvvResultCode: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    creditCardBin: {
                                                        type: string;
                                                        description: string;
                                                    };
                                                    gateway: {
                                                        type: string;
                                                    };
                                                };
                                                example: {
                                                    transactionType: string;
                                                    avsResultCode: string;
                                                    cvvResultCode: string;
                                                    creditCardNumber: string;
                                                    creditCardBin: string;
                                                    creditCardCompany: string;
                                                    cardHolder: string;
                                                    cardExpiration: string;
                                                    gateway: string;
                                                };
                                                additionalProperties: boolean;
                                            };
                                        };
                                        example: {
                                            platformPaymentId: string;
                                            amount: number;
                                            method: string;
                                            currency: string;
                                            creditCard: {
                                                transactionType: string;
                                                avsResultCode: string;
                                                cvvResultCode: string;
                                                creditCardNumber: string;
                                                creditCardBin: string;
                                                creditCardCompany: string;
                                                cardHolder: string;
                                                cardExpiration: string;
                                                gateway: string;
                                            };
                                        };
                                        additionalProperties: boolean;
                                    };
                                };
                                lineItems: {
                                    type: string;
                                    items: {
                                        type: string;
                                        required: string[];
                                        properties: {
                                            platformId: {
                                                type: string;
                                                description: string;
                                            };
                                            title: {
                                                type: string;
                                            };
                                            name: {
                                                type: string;
                                            };
                                            quantity: {
                                                type: string;
                                            };
                                            price: {
                                                type: string;
                                            };
                                            sku: {
                                                type: string;
                                            };
                                            isbn: {
                                                type: string;
                                            };
                                            ean13: {
                                                type: string;
                                            };
                                            upc: {
                                                type: string;
                                            };
                                            variantId: {
                                                type: string;
                                                description: string;
                                            };
                                            variantTitle: {
                                                type: string;
                                            };
                                            vendor: {
                                                type: string;
                                            };
                                            platformProductId: {
                                                type: string;
                                                description: string;
                                            };
                                            giftCard: {
                                                type: string;
                                            };
                                            totalDiscount: {
                                                type: string;
                                            };
                                            manufacturer: {
                                                type: string;
                                            };
                                        };
                                        example: {
                                            variantTitle: string;
                                            platformProductId: string;
                                            quantity: number;
                                            isbn: string;
                                            ean13: string;
                                            upc: string;
                                            platformId: string;
                                            title: string;
                                            manufacturer: string;
                                            price: number;
                                            vendor: string;
                                            name: string;
                                            giftCard: boolean;
                                            totalDiscount: number;
                                            variantId: string;
                                            sku: string;
                                        };
                                        additionalProperties: boolean;
                                    };
                                };
                                hasGiftCard: {
                                    type: string;
                                    description: string;
                                };
                            };
                            example: {
                                lineItems: {
                                    variantTitle: string;
                                    platformProductId: string;
                                    quantity: number;
                                    isbn: string;
                                    ean13: string;
                                    upc: string;
                                    platformId: string;
                                    title: string;
                                    manufacturer: string;
                                    price: number;
                                    vendor: string;
                                    name: string;
                                    giftCard: boolean;
                                    totalDiscount: number;
                                    variantId: string;
                                    sku: string;
                                }[];
                                totalPrice: number;
                                hasGiftCard: boolean;
                                payments: {
                                    platformPaymentId: string;
                                    amount: number;
                                    method: string;
                                    currency: string;
                                    creditCard: {
                                        transactionType: string;
                                        avsResultCode: string;
                                        cvvResultCode: string;
                                        creditCardNumber: string;
                                        creditCardBin: string;
                                        creditCardCompany: string;
                                        cardHolder: string;
                                        cardExpiration: string;
                                        gateway: string;
                                    };
                                }[];
                                name: string;
                                shippingAddress: {
                                    zip: string;
                                    country: string;
                                    regionCode: string;
                                    address2: string;
                                    city: string;
                                    address1: string;
                                    countryCode: string;
                                    name: string;
                                    company: string;
                                    region: string;
                                };
                                currency: string;
                                shopId: number;
                                billingAddress: {
                                    zip: string;
                                    country: string;
                                    regionCode: string;
                                    address2: string;
                                    city: string;
                                    address1: string;
                                    countryCode: string;
                                    name: string;
                                    company: string;
                                    region: string;
                                };
                                platformOrderId: string;
                                customer: {
                                    birthday: string;
                                    firstName: string;
                                    lastName: string;
                                    ordersCount: number;
                                    isPayingCustomer: boolean;
                                    totalSpent: number;
                                    gender: string;
                                    phone: string;
                                    platformCustomerId: string;
                                    company: string;
                                    email: string;
                                    isEmailVerified: boolean;
                                };
                                status: string;
                            };
                            additionalProperties: boolean;
                        };
                    }[];
                    responses: {
                        "200": {
                            description: string;
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    platformOrderId: {
                                        type: string;
                                        description: string;
                                    };
                                    name: {
                                        type: string;
                                        description: string;
                                    };
                                    shopId: {
                                        type: string;
                                        description: string;
                                    };
                                    currency: {
                                        type: string;
                                        description: string;
                                    };
                                    billingAddress: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            company: {
                                                type: string;
                                            };
                                            address1: {
                                                type: string;
                                            };
                                            address2: {
                                                type: string;
                                            };
                                            city: {
                                                type: string;
                                            };
                                            zip: {
                                                type: string;
                                            };
                                            region: {
                                                type: string;
                                                description: string;
                                            };
                                            regionCode: {
                                                type: string;
                                                description: string;
                                            };
                                            country: {
                                                type: string;
                                                description: string;
                                            };
                                            countryCode: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        example: {
                                            zip: string;
                                            country: string;
                                            regionCode: string;
                                            address2: string;
                                            city: string;
                                            address1: string;
                                            countryCode: string;
                                            name: string;
                                            company: string;
                                            region: string;
                                        };
                                        additionalProperties: boolean;
                                    };
                                    shippingAddress: {
                                        type: string;
                                        properties: {
                                            name: {
                                                type: string;
                                            };
                                            company: {
                                                type: string;
                                            };
                                            address1: {
                                                type: string;
                                            };
                                            address2: {
                                                type: string;
                                            };
                                            city: {
                                                type: string;
                                            };
                                            zip: {
                                                type: string;
                                            };
                                            region: {
                                                type: string;
                                                description: string;
                                            };
                                            regionCode: {
                                                type: string;
                                                description: string;
                                            };
                                            country: {
                                                type: string;
                                                description: string;
                                            };
                                            countryCode: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        example: {
                                            zip: string;
                                            country: string;
                                            regionCode: string;
                                            address2: string;
                                            city: string;
                                            address1: string;
                                            countryCode: string;
                                            name: string;
                                            company: string;
                                            region: string;
                                        };
                                        additionalProperties: boolean;
                                    };
                                    customer: {
                                        type: string;
                                        required: string[];
                                        properties: {
                                            platformCustomerId: {
                                                type: string;
                                                description: string;
                                            };
                                            firstName: {
                                                type: string;
                                            };
                                            lastName: {
                                                type: string;
                                            };
                                            email: {
                                                type: string;
                                                format: string;
                                                description: string;
                                            };
                                            phone: {
                                                type: string;
                                            };
                                            gender: {
                                                type: string;
                                                enum: string[];
                                            };
                                            birthday: {
                                                type: string;
                                                format: string;
                                            };
                                            company: {
                                                type: string;
                                            };
                                            ordersCount: {
                                                type: string;
                                                description: string;
                                            };
                                            totalSpent: {
                                                type: string;
                                                description: string;
                                            };
                                            isEmailVerified: {
                                                type: string;
                                                description: string;
                                            };
                                            isPayingCustomer: {
                                                type: string;
                                                description: string;
                                            };
                                        };
                                        example: {
                                            birthday: string;
                                            firstName: string;
                                            lastName: string;
                                            ordersCount: number;
                                            isPayingCustomer: boolean;
                                            totalSpent: number;
                                            gender: string;
                                            phone: string;
                                            platformCustomerId: string;
                                            company: string;
                                            email: string;
                                            isEmailVerified: boolean;
                                        };
                                        additionalProperties: boolean;
                                    };
                                    status: {
                                        type: string;
                                        description: string;
                                    };
                                    totalPrice: {
                                        type: string;
                                        description: string;
                                    };
                                    payments: {
                                        type: string;
                                        items: {
                                            type: string;
                                            required: string[];
                                            properties: {
                                                platformPaymentId: {
                                                    type: string;
                                                    description: string;
                                                };
                                                method: {
                                                    type: string;
                                                    description: string;
                                                    enum: string[];
                                                };
                                                amount: {
                                                    type: string;
                                                    description: string;
                                                };
                                                currency: {
                                                    type: string;
                                                    description: string;
                                                };
                                                creditCard: {
                                                    type: string;
                                                    required: string[];
                                                    properties: {
                                                        transactionType: {
                                                            type: string;
                                                            description: string;
                                                            enum: string[];
                                                        };
                                                        creditCardNumber: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        creditCardCompany: {
                                                            type: string;
                                                        };
                                                        cardExpiration: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        cardHolder: {
                                                            type: string;
                                                        };
                                                        avsResultCode: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        cvvResultCode: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        creditCardBin: {
                                                            type: string;
                                                            description: string;
                                                        };
                                                        gateway: {
                                                            type: string;
                                                        };
                                                    };
                                                    example: {
                                                        transactionType: string;
                                                        avsResultCode: string;
                                                        cvvResultCode: string;
                                                        creditCardNumber: string;
                                                        creditCardBin: string;
                                                        creditCardCompany: string;
                                                        cardHolder: string;
                                                        cardExpiration: string;
                                                        gateway: string;
                                                    };
                                                    additionalProperties: boolean;
                                                };
                                            };
                                            example: {
                                                platformPaymentId: string;
                                                amount: number;
                                                method: string;
                                                currency: string;
                                                creditCard: {
                                                    transactionType: string;
                                                    avsResultCode: string;
                                                    cvvResultCode: string;
                                                    creditCardNumber: string;
                                                    creditCardBin: string;
                                                    creditCardCompany: string;
                                                    cardHolder: string;
                                                    cardExpiration: string;
                                                    gateway: string;
                                                };
                                            };
                                            additionalProperties: boolean;
                                        };
                                    };
                                    lineItems: {
                                        type: string;
                                        items: {
                                            type: string;
                                            required: string[];
                                            properties: {
                                                platformId: {
                                                    type: string;
                                                    description: string;
                                                };
                                                title: {
                                                    type: string;
                                                };
                                                name: {
                                                    type: string;
                                                };
                                                quantity: {
                                                    type: string;
                                                };
                                                price: {
                                                    type: string;
                                                };
                                                sku: {
                                                    type: string;
                                                };
                                                isbn: {
                                                    type: string;
                                                };
                                                ean13: {
                                                    type: string;
                                                };
                                                upc: {
                                                    type: string;
                                                };
                                                variantId: {
                                                    type: string;
                                                    description: string;
                                                };
                                                variantTitle: {
                                                    type: string;
                                                };
                                                vendor: {
                                                    type: string;
                                                };
                                                platformProductId: {
                                                    type: string;
                                                    description: string;
                                                };
                                                giftCard: {
                                                    type: string;
                                                };
                                                totalDiscount: {
                                                    type: string;
                                                };
                                                manufacturer: {
                                                    type: string;
                                                };
                                            };
                                            example: {
                                                variantTitle: string;
                                                platformProductId: string;
                                                quantity: number;
                                                isbn: string;
                                                ean13: string;
                                                upc: string;
                                                platformId: string;
                                                title: string;
                                                manufacturer: string;
                                                price: number;
                                                vendor: string;
                                                name: string;
                                                giftCard: boolean;
                                                totalDiscount: number;
                                                variantId: string;
                                                sku: string;
                                            };
                                            additionalProperties: boolean;
                                        };
                                    };
                                    hasGiftCard: {
                                        type: string;
                                        description: string;
                                    };
                                };
                                example: {
                                    lineItems: {
                                        variantTitle: string;
                                        platformProductId: string;
                                        quantity: number;
                                        isbn: string;
                                        ean13: string;
                                        upc: string;
                                        platformId: string;
                                        title: string;
                                        manufacturer: string;
                                        price: number;
                                        vendor: string;
                                        name: string;
                                        giftCard: boolean;
                                        totalDiscount: number;
                                        variantId: string;
                                        sku: string;
                                    }[];
                                    totalPrice: number;
                                    hasGiftCard: boolean;
                                    payments: {
                                        platformPaymentId: string;
                                        amount: number;
                                        method: string;
                                        currency: string;
                                        creditCard: {
                                            transactionType: string;
                                            avsResultCode: string;
                                            cvvResultCode: string;
                                            creditCardNumber: string;
                                            creditCardBin: string;
                                            creditCardCompany: string;
                                            cardHolder: string;
                                            cardExpiration: string;
                                            gateway: string;
                                        };
                                    }[];
                                    name: string;
                                    shippingAddress: {
                                        zip: string;
                                        country: string;
                                        regionCode: string;
                                        address2: string;
                                        city: string;
                                        address1: string;
                                        countryCode: string;
                                        name: string;
                                        company: string;
                                        region: string;
                                    };
                                    currency: string;
                                    shopId: number;
                                    billingAddress: {
                                        zip: string;
                                        country: string;
                                        regionCode: string;
                                        address2: string;
                                        city: string;
                                        address1: string;
                                        countryCode: string;
                                        name: string;
                                        company: string;
                                        region: string;
                                    };
                                    platformOrderId: string;
                                    customer: {
                                        birthday: string;
                                        firstName: string;
                                        lastName: string;
                                        ordersCount: number;
                                        isPayingCustomer: boolean;
                                        totalSpent: number;
                                        gender: string;
                                        phone: string;
                                        platformCustomerId: string;
                                        company: string;
                                        email: string;
                                        isEmailVerified: boolean;
                                    };
                                    status: string;
                                };
                                additionalProperties: boolean;
                            };
                        };
                    };
                };
            };
        };
        securityDefinitions: {
            Bearer: {
                type: string;
                name: string;
                in: string;
            };
        };
        definitions: {
            AccessToken: {
                required: string[];
                properties: {
                    id: {
                        type: string;
                        description: string;
                    };
                    userId: {
                        type: string;
                        description: string;
                    };
                    appId: {
                        type: string;
                        description: string;
                    };
                    accountId: {
                        type: string;
                        description: string;
                    };
                    projectId: {
                        type: string;
                        description: string;
                    };
                    permissions: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                        additionalProperties: boolean;
                    };
                    type: {
                        type: string;
                        description: string;
                    };
                    createdDate: {
                        type: string;
                        format: string;
                        description: string;
                        convertStringToDate: boolean;
                    };
                    expiration: {
                        type: string;
                        format: string;
                        description: string;
                        convertStringToDate: boolean;
                    };
                };
                description: string;
                example: {
                    accountId: number;
                    createdDate: string;
                    permissions: string;
                    appId: number;
                    expiration: string;
                    id: string;
                    type: string;
                    userId: number;
                    projectId: number;
                };
                additionalProperties: boolean;
            };
            AccessTokenCreateParams: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                    };
                    password: {
                        type: string;
                    };
                    appId: {
                        type: string;
                        description: string;
                    };
                };
                description: string;
                example: {
                    password: string;
                    appId: number;
                    name: string;
                };
                additionalProperties: boolean;
            };
            Account: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                        description: string;
                    };
                    userId: {
                        type: string;
                        description: string;
                    };
                    appId: {
                        type: string;
                        description: string;
                    };
                    status: {
                        type: string;
                        description: string;
                    };
                    createdDate: {
                        type: string;
                        format: string;
                        description: string;
                        convertStringToDate: boolean;
                    };
                    lastUpdated: {
                        type: string;
                        format: string;
                        description: string;
                        convertStringToDate: boolean;
                    };
                    type: {
                        type: string;
                        description: string;
                    };
                    partnerId: {
                        type: string;
                        description: string;
                    };
                };
                description: string;
                example: {
                    lastUpdated: string;
                    createdDate: string;
                    appId: number;
                    id: number;
                    partnerId: number;
                    type: string;
                    userId: number;
                    status: number;
                };
                additionalProperties: boolean;
            };
            AccountCreateParams: {
                type: string;
                required: string[];
                properties: {
                    appId: {
                        type: string;
                        description: string;
                    };
                    userId: {
                        type: string;
                        description: string;
                    };
                    status: {
                        type: string;
                        description: string;
                    };
                    type: {
                        type: string;
                        description: string;
                    };
                    partnerId: {
                        type: string;
                        description: string;
                    };
                    discountPct: {
                        type: string;
                        description: string;
                        minimum: number;
                        maximum: number;
                    };
                };
                description: string;
                example: {
                    discountPct: number;
                    appId: number;
                    partnerId: number;
                    type: string;
                    userId: number;
                    status: number;
                };
                additionalProperties: boolean;
            };
            Authorization: {
                type: string;
                required: string[];
                properties: {
                    user: {
                        type: string;
                        required: string[];
                        properties: {
                            id: {
                                type: string;
                                description: string;
                            };
                            name: {
                                type: string;
                                description: string;
                            };
                            firstName: {
                                type: string;
                            };
                            lastName: {
                                type: string;
                            };
                            email: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            status: {
                                type: string;
                            };
                            phone: {
                                type: string;
                            };
                            timezone: {
                                type: string;
                            };
                            createdDate: {
                                type: string;
                                format: string;
                                description: string;
                                convertStringToDate: boolean;
                            };
                            lastUpdated: {
                                type: string;
                                format: string;
                                description: string;
                                convertStringToDate: boolean;
                            };
                        };
                        example: {
                            firstName: string;
                            lastName: string;
                            lastUpdated: string;
                            createdDate: string;
                            phone: string;
                            timezone: string;
                            name: string;
                            id: number;
                            email: string;
                            status: number;
                        };
                        additionalProperties: boolean;
                    };
                    account: {
                        type: string;
                        required: string[];
                        properties: {
                            id: {
                                type: string;
                                description: string;
                            };
                            userId: {
                                type: string;
                                description: string;
                            };
                            appId: {
                                type: string;
                                description: string;
                            };
                            status: {
                                type: string;
                                description: string;
                            };
                            createdDate: {
                                type: string;
                                format: string;
                                description: string;
                                convertStringToDate: boolean;
                            };
                            lastUpdated: {
                                type: string;
                                format: string;
                                description: string;
                                convertStringToDate: boolean;
                            };
                            type: {
                                type: string;
                                description: string;
                            };
                            partnerId: {
                                type: string;
                                description: string;
                            };
                        };
                        description: string;
                        example: {
                            lastUpdated: string;
                            createdDate: string;
                            appId: number;
                            id: number;
                            partnerId: number;
                            type: string;
                            userId: number;
                            status: number;
                        };
                        additionalProperties: boolean;
                    };
                    projects: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            required: string[];
                            properties: {
                                id: {
                                    type: string;
                                    description: string;
                                };
                                accountId: {
                                    type: string;
                                    description: string;
                                };
                                appId: {
                                    type: string;
                                    description: string;
                                };
                                name: {
                                    type: string;
                                    description: string;
                                };
                                type: {
                                    type: string;
                                    description: string;
                                };
                                enabled: {
                                    type: string;
                                    description: string;
                                    default: boolean;
                                };
                                isDemo: {
                                    type: string;
                                    description: string;
                                };
                                implemented: {
                                    type: string;
                                    description: string;
                                };
                                permissions: {
                                    type: string;
                                    description: string;
                                    additionalProperties: boolean;
                                };
                                sharedByUserId: {
                                    type: string;
                                    description: string;
                                };
                            };
                            description: string;
                            example: {
                                accountId: number;
                                permissions: {};
                                appId: number;
                                name: string;
                                implemented: boolean;
                                sharedByUserId: number;
                                id: number;
                                type: string;
                                isDemo: boolean;
                                enabled: boolean;
                            };
                            additionalProperties: boolean;
                        };
                    };
                    expiration: {
                        type: string;
                        format: string;
                        description: string;
                        convertStringToDate: boolean;
                    };
                    currentProjectId: {
                        type: string;
                        description: string;
                    };
                    projectId: {
                        type: string;
                        description: string;
                    };
                };
                description: string;
                example: {
                    currentProjectId: number;
                    projects: {
                        accountId: number;
                        permissions: {};
                        appId: number;
                        name: string;
                        implemented: boolean;
                        sharedByUserId: number;
                        id: number;
                        type: string;
                        isDemo: boolean;
                        enabled: boolean;
                    }[];
                    expiration: string;
                    user: {
                        firstName: string;
                        lastName: string;
                        lastUpdated: string;
                        createdDate: string;
                        phone: string;
                        timezone: string;
                        name: string;
                        id: number;
                        email: string;
                        status: number;
                    };
                    projectId: number;
                    account: {
                        lastUpdated: string;
                        createdDate: string;
                        appId: number;
                        id: number;
                        partnerId: number;
                        type: string;
                        userId: number;
                        status: number;
                    };
                };
                additionalProperties: boolean;
            };
            Notification: {
                type: string;
                required: string[];
                properties: {
                    email: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    templateName: {
                        type: string;
                        description: string;
                    };
                    templateData: {
                        type: string;
                        description: string;
                        additionalProperties: boolean;
                    };
                };
                description: string;
                example: {
                    templateName: string;
                    templateData: {
                        key: string;
                    };
                    email: string;
                };
                additionalProperties: boolean;
            };
            Permissions: {
                type: string;
                description: string;
                items: {
                    type: string;
                };
                additionalProperties: boolean;
            };
            Project: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                        description: string;
                    };
                    accountId: {
                        type: string;
                        description: string;
                    };
                    appId: {
                        type: string;
                        description: string;
                    };
                    name: {
                        type: string;
                        description: string;
                    };
                    type: {
                        type: string;
                        description: string;
                    };
                    enabled: {
                        type: string;
                        description: string;
                        default: boolean;
                    };
                    isDemo: {
                        type: string;
                        description: string;
                    };
                    implemented: {
                        type: string;
                        description: string;
                    };
                    permissions: {
                        type: string;
                        description: string;
                        additionalProperties: boolean;
                    };
                    sharedByUserId: {
                        type: string;
                        description: string;
                    };
                };
                description: string;
                example: {
                    accountId: number;
                    permissions: {};
                    appId: number;
                    name: string;
                    implemented: boolean;
                    sharedByUserId: number;
                    id: number;
                    type: string;
                    isDemo: boolean;
                    enabled: boolean;
                };
                additionalProperties: boolean;
            };
            ProjectCreateParams: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                    };
                    type: {
                        description: string;
                    };
                };
                description: string;
                example: {
                    name: string;
                    type: string;
                };
                additionalProperties: boolean;
            };
            ProjectPermissions: {
                type: string;
                description: string;
                additionalProperties: boolean;
            };
            ProjectUpdateParams: {
                properties: {
                    name: {
                        type: string;
                    };
                    enabled: {
                        type: string;
                    };
                    type: {
                        type: string;
                    };
                    implemented: {
                        type: string;
                    };
                };
                description: string;
                example: {
                    name: string;
                    implemented: boolean;
                    type: string;
                    enabled: boolean;
                };
                additionalProperties: boolean;
            };
            Stash: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                        description: string;
                    };
                    expires: {
                        type: string;
                        format: string;
                        description: string;
                        convertStringToDate: boolean;
                    };
                    data: {
                        type: string;
                        description: string;
                        additionalProperties: boolean;
                    };
                };
                example: {
                    expires: string;
                    data: {
                        key: string;
                    };
                    id: string;
                };
                additionalProperties: boolean;
            };
            StashCreateParams: {
                type: string;
                required: string[];
                properties: {
                    expires: {
                        type: string;
                        format: string;
                        description: string;
                        convertStringToDate: boolean;
                    };
                    data: {
                        type: string;
                        description: string;
                        additionalProperties: boolean;
                    };
                };
                description: string;
                example: {
                    expires: string;
                    data: {
                        key: string;
                    };
                };
                additionalProperties: boolean;
            };
            User: {
                type: string;
                required: string[];
                properties: {
                    id: {
                        type: string;
                        description: string;
                    };
                    name: {
                        type: string;
                        description: string;
                    };
                    firstName: {
                        type: string;
                    };
                    lastName: {
                        type: string;
                    };
                    email: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    status: {
                        type: string;
                    };
                    phone: {
                        type: string;
                    };
                    timezone: {
                        type: string;
                    };
                    createdDate: {
                        type: string;
                        format: string;
                        description: string;
                        convertStringToDate: boolean;
                    };
                    lastUpdated: {
                        type: string;
                        format: string;
                        description: string;
                        convertStringToDate: boolean;
                    };
                };
                example: {
                    firstName: string;
                    lastName: string;
                    lastUpdated: string;
                    createdDate: string;
                    phone: string;
                    timezone: string;
                    name: string;
                    id: number;
                    email: string;
                    status: number;
                };
                additionalProperties: boolean;
            };
            UserCreateParams: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                        description: string;
                        minLength: number;
                        transform: string[];
                    };
                    email: {
                        type: string;
                        format: string;
                    };
                    password: {
                        type: string;
                        minLength: number;
                    };
                    firstName: {
                        type: string;
                    };
                    lastName: {
                        type: string;
                    };
                    phone: {
                        type: string;
                        pattern: string;
                    };
                    timezone: {
                        type: string;
                        default: string;
                    };
                };
                example: {
                    firstName: string;
                    lastName: string;
                    password: string;
                    phone: string;
                    timezone: string;
                    name: string;
                    email: string;
                };
                additionalProperties: boolean;
            };
            UserUpdateParams: {
                properties: {
                    firstName: {
                        type: string;
                    };
                    lastName: {
                        type: string;
                    };
                    email: {
                        type: string;
                        format: string;
                    };
                    phone: {
                        type: string;
                        pattern: string;
                    };
                    timezone: {
                        type: string;
                    };
                };
                description: string;
                example: {
                    firstName: string;
                    lastName: string;
                    phone: string;
                    timezone: string;
                    email: string;
                };
                additionalProperties: boolean;
            };
            PasswordChangeParams: {
                type: string;
                required: string[];
                properties: {
                    oldPassword: {
                        type: string;
                        format: string;
                        description: string;
                        minLength: number;
                    };
                    newPassword: {
                        type: string;
                        format: string;
                        description: string;
                        minLength: number;
                    };
                };
                description: string;
                example: {
                    oldPassword: string;
                    newPassword: string;
                };
                additionalProperties: boolean;
            };
            UpdatePasswordParams: {
                type: string;
                required: string[];
                properties: {
                    password: {
                        type: string;
                        description: string;
                        minLength: number;
                    };
                };
                description: string;
                example: {
                    password: string;
                };
                additionalProperties: boolean;
            };
            QueryResponse: {
                type: string;
                properties: {
                    query: {
                        type: string;
                        description: string;
                        additionalProperties: boolean;
                    };
                    columns: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            additionalProperties: boolean;
                        };
                    };
                    rows: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                            additionalProperties: boolean;
                        };
                    };
                };
                example: {
                    columns: {
                        key: string;
                    }[];
                    query: {
                        key: string;
                    };
                    rows: {
                        key: string;
                    }[];
                };
                additionalProperties: boolean;
            };
            Entity: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    attributes: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                name: {
                                    type: string;
                                };
                                title: {
                                    type: string;
                                };
                                description: {
                                    type: string;
                                };
                                dataType: {
                                    type: string;
                                };
                                isElement: {
                                    type: string;
                                };
                                isMetric: {
                                    type: string;
                                };
                                logAttribute: {
                                    type: string;
                                    description: string;
                                };
                                operators: {
                                    type: string;
                                    description: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                values: {
                                    type: string;
                                    description: string;
                                    items: {
                                        type: string;
                                    };
                                };
                                searchable: {
                                    type: string;
                                    description: string;
                                };
                                filterable: {
                                    type: string;
                                    description: string;
                                };
                                rule: {
                                    type: string;
                                    description: string;
                                };
                            };
                            example: {
                                filterable: boolean;
                                operators: string[];
                                isElement: boolean;
                                dataType: string;
                                values: string[];
                                name: string;
                                isMetric: boolean;
                                description: string;
                                logAttribute: boolean;
                                rule: boolean;
                                title: string;
                                searchable: boolean;
                            };
                            additionalProperties: boolean;
                        };
                    };
                };
                example: {
                    name: string;
                    description: string;
                    attributes: {
                        filterable: boolean;
                        operators: string[];
                        isElement: boolean;
                        dataType: string;
                        values: string[];
                        name: string;
                        isMetric: boolean;
                        description: string;
                        logAttribute: boolean;
                        rule: boolean;
                        title: string;
                        searchable: boolean;
                    }[];
                };
                additionalProperties: boolean;
            };
            Attribute: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    title: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    dataType: {
                        type: string;
                    };
                    isElement: {
                        type: string;
                    };
                    isMetric: {
                        type: string;
                    };
                    logAttribute: {
                        type: string;
                        description: string;
                    };
                    operators: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                    };
                    values: {
                        type: string;
                        description: string;
                        items: {
                            type: string;
                        };
                    };
                    searchable: {
                        type: string;
                        description: string;
                    };
                    filterable: {
                        type: string;
                        description: string;
                    };
                    rule: {
                        type: string;
                        description: string;
                    };
                };
                example: {
                    filterable: boolean;
                    operators: string[];
                    isElement: boolean;
                    dataType: string;
                    values: string[];
                    name: string;
                    isMetric: boolean;
                    description: string;
                    logAttribute: boolean;
                    rule: boolean;
                    title: string;
                    searchable: boolean;
                };
                additionalProperties: boolean;
            };
            QueryParams: {
                required: string[];
                properties: {
                    query: {
                        type: string;
                        description: string;
                        properties: {};
                    };
                };
                example: {
                    query: string;
                };
                additionalProperties: boolean;
            };
            Order: {
                type: string;
                required: string[];
                properties: {
                    platformOrderId: {
                        type: string;
                        description: string;
                    };
                    name: {
                        type: string;
                        description: string;
                    };
                    shopId: {
                        type: string;
                        description: string;
                    };
                    currency: {
                        type: string;
                        description: string;
                    };
                    billingAddress: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            company: {
                                type: string;
                            };
                            address1: {
                                type: string;
                            };
                            address2: {
                                type: string;
                            };
                            city: {
                                type: string;
                            };
                            zip: {
                                type: string;
                            };
                            region: {
                                type: string;
                                description: string;
                            };
                            regionCode: {
                                type: string;
                                description: string;
                            };
                            country: {
                                type: string;
                                description: string;
                            };
                            countryCode: {
                                type: string;
                                description: string;
                            };
                        };
                        example: {
                            zip: string;
                            country: string;
                            regionCode: string;
                            address2: string;
                            city: string;
                            address1: string;
                            countryCode: string;
                            name: string;
                            company: string;
                            region: string;
                        };
                        additionalProperties: boolean;
                    };
                    shippingAddress: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            company: {
                                type: string;
                            };
                            address1: {
                                type: string;
                            };
                            address2: {
                                type: string;
                            };
                            city: {
                                type: string;
                            };
                            zip: {
                                type: string;
                            };
                            region: {
                                type: string;
                                description: string;
                            };
                            regionCode: {
                                type: string;
                                description: string;
                            };
                            country: {
                                type: string;
                                description: string;
                            };
                            countryCode: {
                                type: string;
                                description: string;
                            };
                        };
                        example: {
                            zip: string;
                            country: string;
                            regionCode: string;
                            address2: string;
                            city: string;
                            address1: string;
                            countryCode: string;
                            name: string;
                            company: string;
                            region: string;
                        };
                        additionalProperties: boolean;
                    };
                    customer: {
                        type: string;
                        required: string[];
                        properties: {
                            platformCustomerId: {
                                type: string;
                                description: string;
                            };
                            firstName: {
                                type: string;
                            };
                            lastName: {
                                type: string;
                            };
                            email: {
                                type: string;
                                format: string;
                                description: string;
                            };
                            phone: {
                                type: string;
                            };
                            gender: {
                                type: string;
                                enum: string[];
                            };
                            birthday: {
                                type: string;
                                format: string;
                            };
                            company: {
                                type: string;
                            };
                            ordersCount: {
                                type: string;
                                description: string;
                            };
                            totalSpent: {
                                type: string;
                                description: string;
                            };
                            isEmailVerified: {
                                type: string;
                                description: string;
                            };
                            isPayingCustomer: {
                                type: string;
                                description: string;
                            };
                        };
                        example: {
                            birthday: string;
                            firstName: string;
                            lastName: string;
                            ordersCount: number;
                            isPayingCustomer: boolean;
                            totalSpent: number;
                            gender: string;
                            phone: string;
                            platformCustomerId: string;
                            company: string;
                            email: string;
                            isEmailVerified: boolean;
                        };
                        additionalProperties: boolean;
                    };
                    status: {
                        type: string;
                        description: string;
                    };
                    totalPrice: {
                        type: string;
                        description: string;
                    };
                    payments: {
                        type: string;
                        items: {
                            type: string;
                            required: string[];
                            properties: {
                                platformPaymentId: {
                                    type: string;
                                    description: string;
                                };
                                method: {
                                    type: string;
                                    description: string;
                                    enum: string[];
                                };
                                amount: {
                                    type: string;
                                    description: string;
                                };
                                currency: {
                                    type: string;
                                    description: string;
                                };
                                creditCard: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        transactionType: {
                                            type: string;
                                            description: string;
                                            enum: string[];
                                        };
                                        creditCardNumber: {
                                            type: string;
                                            description: string;
                                        };
                                        creditCardCompany: {
                                            type: string;
                                        };
                                        cardExpiration: {
                                            type: string;
                                            description: string;
                                        };
                                        cardHolder: {
                                            type: string;
                                        };
                                        avsResultCode: {
                                            type: string;
                                            description: string;
                                        };
                                        cvvResultCode: {
                                            type: string;
                                            description: string;
                                        };
                                        creditCardBin: {
                                            type: string;
                                            description: string;
                                        };
                                        gateway: {
                                            type: string;
                                        };
                                    };
                                    example: {
                                        transactionType: string;
                                        avsResultCode: string;
                                        cvvResultCode: string;
                                        creditCardNumber: string;
                                        creditCardBin: string;
                                        creditCardCompany: string;
                                        cardHolder: string;
                                        cardExpiration: string;
                                        gateway: string;
                                    };
                                    additionalProperties: boolean;
                                };
                            };
                            example: {
                                platformPaymentId: string;
                                amount: number;
                                method: string;
                                currency: string;
                                creditCard: {
                                    transactionType: string;
                                    avsResultCode: string;
                                    cvvResultCode: string;
                                    creditCardNumber: string;
                                    creditCardBin: string;
                                    creditCardCompany: string;
                                    cardHolder: string;
                                    cardExpiration: string;
                                    gateway: string;
                                };
                            };
                            additionalProperties: boolean;
                        };
                    };
                    lineItems: {
                        type: string;
                        items: {
                            type: string;
                            required: string[];
                            properties: {
                                platformId: {
                                    type: string;
                                    description: string;
                                };
                                title: {
                                    type: string;
                                };
                                name: {
                                    type: string;
                                };
                                quantity: {
                                    type: string;
                                };
                                price: {
                                    type: string;
                                };
                                sku: {
                                    type: string;
                                };
                                isbn: {
                                    type: string;
                                };
                                ean13: {
                                    type: string;
                                };
                                upc: {
                                    type: string;
                                };
                                variantId: {
                                    type: string;
                                    description: string;
                                };
                                variantTitle: {
                                    type: string;
                                };
                                vendor: {
                                    type: string;
                                };
                                platformProductId: {
                                    type: string;
                                    description: string;
                                };
                                giftCard: {
                                    type: string;
                                };
                                totalDiscount: {
                                    type: string;
                                };
                                manufacturer: {
                                    type: string;
                                };
                            };
                            example: {
                                variantTitle: string;
                                platformProductId: string;
                                quantity: number;
                                isbn: string;
                                ean13: string;
                                upc: string;
                                platformId: string;
                                title: string;
                                manufacturer: string;
                                price: number;
                                vendor: string;
                                name: string;
                                giftCard: boolean;
                                totalDiscount: number;
                                variantId: string;
                                sku: string;
                            };
                            additionalProperties: boolean;
                        };
                    };
                    hasGiftCard: {
                        type: string;
                        description: string;
                    };
                };
                example: {
                    lineItems: {
                        variantTitle: string;
                        platformProductId: string;
                        quantity: number;
                        isbn: string;
                        ean13: string;
                        upc: string;
                        platformId: string;
                        title: string;
                        manufacturer: string;
                        price: number;
                        vendor: string;
                        name: string;
                        giftCard: boolean;
                        totalDiscount: number;
                        variantId: string;
                        sku: string;
                    }[];
                    totalPrice: number;
                    hasGiftCard: boolean;
                    payments: {
                        platformPaymentId: string;
                        amount: number;
                        method: string;
                        currency: string;
                        creditCard: {
                            transactionType: string;
                            avsResultCode: string;
                            cvvResultCode: string;
                            creditCardNumber: string;
                            creditCardBin: string;
                            creditCardCompany: string;
                            cardHolder: string;
                            cardExpiration: string;
                            gateway: string;
                        };
                    }[];
                    name: string;
                    shippingAddress: {
                        zip: string;
                        country: string;
                        regionCode: string;
                        address2: string;
                        city: string;
                        address1: string;
                        countryCode: string;
                        name: string;
                        company: string;
                        region: string;
                    };
                    currency: string;
                    shopId: number;
                    billingAddress: {
                        zip: string;
                        country: string;
                        regionCode: string;
                        address2: string;
                        city: string;
                        address1: string;
                        countryCode: string;
                        name: string;
                        company: string;
                        region: string;
                    };
                    platformOrderId: string;
                    customer: {
                        birthday: string;
                        firstName: string;
                        lastName: string;
                        ordersCount: number;
                        isPayingCustomer: boolean;
                        totalSpent: number;
                        gender: string;
                        phone: string;
                        platformCustomerId: string;
                        company: string;
                        email: string;
                        isEmailVerified: boolean;
                    };
                    status: string;
                };
                additionalProperties: boolean;
            };
            Address: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    company: {
                        type: string;
                    };
                    address1: {
                        type: string;
                    };
                    address2: {
                        type: string;
                    };
                    city: {
                        type: string;
                    };
                    zip: {
                        type: string;
                    };
                    region: {
                        type: string;
                        description: string;
                    };
                    regionCode: {
                        type: string;
                        description: string;
                    };
                    country: {
                        type: string;
                        description: string;
                    };
                    countryCode: {
                        type: string;
                        description: string;
                    };
                };
                example: {
                    zip: string;
                    country: string;
                    regionCode: string;
                    address2: string;
                    city: string;
                    address1: string;
                    countryCode: string;
                    name: string;
                    company: string;
                    region: string;
                };
                additionalProperties: boolean;
            };
            Customer: {
                type: string;
                required: string[];
                properties: {
                    platformCustomerId: {
                        type: string;
                        description: string;
                    };
                    firstName: {
                        type: string;
                    };
                    lastName: {
                        type: string;
                    };
                    email: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    phone: {
                        type: string;
                    };
                    gender: {
                        type: string;
                        enum: string[];
                    };
                    birthday: {
                        type: string;
                        format: string;
                    };
                    company: {
                        type: string;
                    };
                    ordersCount: {
                        type: string;
                        description: string;
                    };
                    totalSpent: {
                        type: string;
                        description: string;
                    };
                    isEmailVerified: {
                        type: string;
                        description: string;
                    };
                    isPayingCustomer: {
                        type: string;
                        description: string;
                    };
                };
                example: {
                    birthday: string;
                    firstName: string;
                    lastName: string;
                    ordersCount: number;
                    isPayingCustomer: boolean;
                    totalSpent: number;
                    gender: string;
                    phone: string;
                    platformCustomerId: string;
                    company: string;
                    email: string;
                    isEmailVerified: boolean;
                };
                additionalProperties: boolean;
            };
            Payment: {
                type: string;
                required: string[];
                properties: {
                    platformPaymentId: {
                        type: string;
                        description: string;
                    };
                    method: {
                        type: string;
                        description: string;
                        enum: string[];
                    };
                    amount: {
                        type: string;
                        description: string;
                    };
                    currency: {
                        type: string;
                        description: string;
                    };
                    creditCard: {
                        type: string;
                        required: string[];
                        properties: {
                            transactionType: {
                                type: string;
                                description: string;
                                enum: string[];
                            };
                            creditCardNumber: {
                                type: string;
                                description: string;
                            };
                            creditCardCompany: {
                                type: string;
                            };
                            cardExpiration: {
                                type: string;
                                description: string;
                            };
                            cardHolder: {
                                type: string;
                            };
                            avsResultCode: {
                                type: string;
                                description: string;
                            };
                            cvvResultCode: {
                                type: string;
                                description: string;
                            };
                            creditCardBin: {
                                type: string;
                                description: string;
                            };
                            gateway: {
                                type: string;
                            };
                        };
                        example: {
                            transactionType: string;
                            avsResultCode: string;
                            cvvResultCode: string;
                            creditCardNumber: string;
                            creditCardBin: string;
                            creditCardCompany: string;
                            cardHolder: string;
                            cardExpiration: string;
                            gateway: string;
                        };
                        additionalProperties: boolean;
                    };
                };
                example: {
                    platformPaymentId: string;
                    amount: number;
                    method: string;
                    currency: string;
                    creditCard: {
                        transactionType: string;
                        avsResultCode: string;
                        cvvResultCode: string;
                        creditCardNumber: string;
                        creditCardBin: string;
                        creditCardCompany: string;
                        cardHolder: string;
                        cardExpiration: string;
                        gateway: string;
                    };
                };
                additionalProperties: boolean;
            };
            CreditCard: {
                type: string;
                required: string[];
                properties: {
                    transactionType: {
                        type: string;
                        description: string;
                        enum: string[];
                    };
                    creditCardNumber: {
                        type: string;
                        description: string;
                    };
                    creditCardCompany: {
                        type: string;
                    };
                    cardExpiration: {
                        type: string;
                        description: string;
                    };
                    cardHolder: {
                        type: string;
                    };
                    avsResultCode: {
                        type: string;
                        description: string;
                    };
                    cvvResultCode: {
                        type: string;
                        description: string;
                    };
                    creditCardBin: {
                        type: string;
                        description: string;
                    };
                    gateway: {
                        type: string;
                    };
                };
                example: {
                    transactionType: string;
                    avsResultCode: string;
                    cvvResultCode: string;
                    creditCardNumber: string;
                    creditCardBin: string;
                    creditCardCompany: string;
                    cardHolder: string;
                    cardExpiration: string;
                    gateway: string;
                };
                additionalProperties: boolean;
            };
            LineItem: {
                type: string;
                required: string[];
                properties: {
                    platformId: {
                        type: string;
                        description: string;
                    };
                    title: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                    quantity: {
                        type: string;
                    };
                    price: {
                        type: string;
                    };
                    sku: {
                        type: string;
                    };
                    isbn: {
                        type: string;
                    };
                    ean13: {
                        type: string;
                    };
                    upc: {
                        type: string;
                    };
                    variantId: {
                        type: string;
                        description: string;
                    };
                    variantTitle: {
                        type: string;
                    };
                    vendor: {
                        type: string;
                    };
                    platformProductId: {
                        type: string;
                        description: string;
                    };
                    giftCard: {
                        type: string;
                    };
                    totalDiscount: {
                        type: string;
                    };
                    manufacturer: {
                        type: string;
                    };
                };
                example: {
                    variantTitle: string;
                    platformProductId: string;
                    quantity: number;
                    isbn: string;
                    ean13: string;
                    upc: string;
                    platformId: string;
                    title: string;
                    manufacturer: string;
                    price: number;
                    vendor: string;
                    name: string;
                    giftCard: boolean;
                    totalDiscount: number;
                    variantId: string;
                    sku: string;
                };
                additionalProperties: boolean;
            };
            Error: {
                type: string;
                required: string[];
                properties: {
                    code: {
                        type: string;
                        description: string;
                    };
                    message: {
                        type: string;
                        description: string;
                    };
                    errors: {
                        type: string;
                        description: string;
                        items: {
                            required: string[];
                            properties: {
                                name: {
                                    type: string;
                                    description: string;
                                };
                                code: {
                                    type: string;
                                };
                                message: {
                                    type: string;
                                };
                            };
                            type: string;
                            additionalProperties: boolean;
                        };
                    };
                };
                description: string;
                additionalProperties: boolean;
            };
            inline_response_200: {
                properties: {
                    sessions: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            attributes: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        name: {
                                            type: string;
                                        };
                                        title: {
                                            type: string;
                                        };
                                        description: {
                                            type: string;
                                        };
                                        dataType: {
                                            type: string;
                                        };
                                        isElement: {
                                            type: string;
                                        };
                                        isMetric: {
                                            type: string;
                                        };
                                        logAttribute: {
                                            type: string;
                                            description: string;
                                        };
                                        operators: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        values: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        searchable: {
                                            type: string;
                                            description: string;
                                        };
                                        filterable: {
                                            type: string;
                                            description: string;
                                        };
                                        rule: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    example: {
                                        filterable: boolean;
                                        operators: string[];
                                        isElement: boolean;
                                        dataType: string;
                                        values: string[];
                                        name: string;
                                        isMetric: boolean;
                                        description: string;
                                        logAttribute: boolean;
                                        rule: boolean;
                                        title: string;
                                        searchable: boolean;
                                    };
                                    additionalProperties: boolean;
                                };
                            };
                        };
                        example: {
                            name: string;
                            description: string;
                            attributes: {
                                filterable: boolean;
                                operators: string[];
                                isElement: boolean;
                                dataType: string;
                                values: string[];
                                name: string;
                                isMetric: boolean;
                                description: string;
                                logAttribute: boolean;
                                rule: boolean;
                                title: string;
                                searchable: boolean;
                            }[];
                        };
                        additionalProperties: boolean;
                    };
                    pages: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            attributes: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        name: {
                                            type: string;
                                        };
                                        title: {
                                            type: string;
                                        };
                                        description: {
                                            type: string;
                                        };
                                        dataType: {
                                            type: string;
                                        };
                                        isElement: {
                                            type: string;
                                        };
                                        isMetric: {
                                            type: string;
                                        };
                                        logAttribute: {
                                            type: string;
                                            description: string;
                                        };
                                        operators: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        values: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        searchable: {
                                            type: string;
                                            description: string;
                                        };
                                        filterable: {
                                            type: string;
                                            description: string;
                                        };
                                        rule: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    example: {
                                        filterable: boolean;
                                        operators: string[];
                                        isElement: boolean;
                                        dataType: string;
                                        values: string[];
                                        name: string;
                                        isMetric: boolean;
                                        description: string;
                                        logAttribute: boolean;
                                        rule: boolean;
                                        title: string;
                                        searchable: boolean;
                                    };
                                    additionalProperties: boolean;
                                };
                            };
                        };
                        example: {
                            name: string;
                            description: string;
                            attributes: {
                                filterable: boolean;
                                operators: string[];
                                isElement: boolean;
                                dataType: string;
                                values: string[];
                                name: string;
                                isMetric: boolean;
                                description: string;
                                logAttribute: boolean;
                                rule: boolean;
                                title: string;
                                searchable: boolean;
                            }[];
                        };
                        additionalProperties: boolean;
                    };
                    events: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            attributes: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        name: {
                                            type: string;
                                        };
                                        title: {
                                            type: string;
                                        };
                                        description: {
                                            type: string;
                                        };
                                        dataType: {
                                            type: string;
                                        };
                                        isElement: {
                                            type: string;
                                        };
                                        isMetric: {
                                            type: string;
                                        };
                                        logAttribute: {
                                            type: string;
                                            description: string;
                                        };
                                        operators: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        values: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        searchable: {
                                            type: string;
                                            description: string;
                                        };
                                        filterable: {
                                            type: string;
                                            description: string;
                                        };
                                        rule: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    example: {
                                        filterable: boolean;
                                        operators: string[];
                                        isElement: boolean;
                                        dataType: string;
                                        values: string[];
                                        name: string;
                                        isMetric: boolean;
                                        description: string;
                                        logAttribute: boolean;
                                        rule: boolean;
                                        title: string;
                                        searchable: boolean;
                                    };
                                    additionalProperties: boolean;
                                };
                            };
                        };
                        example: {
                            name: string;
                            description: string;
                            attributes: {
                                filterable: boolean;
                                operators: string[];
                                isElement: boolean;
                                dataType: string;
                                values: string[];
                                name: string;
                                isMetric: boolean;
                                description: string;
                                logAttribute: boolean;
                                rule: boolean;
                                title: string;
                                searchable: boolean;
                            }[];
                        };
                        additionalProperties: boolean;
                    };
                    timings: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            attributes: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        name: {
                                            type: string;
                                        };
                                        title: {
                                            type: string;
                                        };
                                        description: {
                                            type: string;
                                        };
                                        dataType: {
                                            type: string;
                                        };
                                        isElement: {
                                            type: string;
                                        };
                                        isMetric: {
                                            type: string;
                                        };
                                        logAttribute: {
                                            type: string;
                                            description: string;
                                        };
                                        operators: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        values: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        searchable: {
                                            type: string;
                                            description: string;
                                        };
                                        filterable: {
                                            type: string;
                                            description: string;
                                        };
                                        rule: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    example: {
                                        filterable: boolean;
                                        operators: string[];
                                        isElement: boolean;
                                        dataType: string;
                                        values: string[];
                                        name: string;
                                        isMetric: boolean;
                                        description: string;
                                        logAttribute: boolean;
                                        rule: boolean;
                                        title: string;
                                        searchable: boolean;
                                    };
                                    additionalProperties: boolean;
                                };
                            };
                        };
                        example: {
                            name: string;
                            description: string;
                            attributes: {
                                filterable: boolean;
                                operators: string[];
                                isElement: boolean;
                                dataType: string;
                                values: string[];
                                name: string;
                                isMetric: boolean;
                                description: string;
                                logAttribute: boolean;
                                rule: boolean;
                                title: string;
                                searchable: boolean;
                            }[];
                        };
                        additionalProperties: boolean;
                    };
                    users: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            attributes: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        name: {
                                            type: string;
                                        };
                                        title: {
                                            type: string;
                                        };
                                        description: {
                                            type: string;
                                        };
                                        dataType: {
                                            type: string;
                                        };
                                        isElement: {
                                            type: string;
                                        };
                                        isMetric: {
                                            type: string;
                                        };
                                        logAttribute: {
                                            type: string;
                                            description: string;
                                        };
                                        operators: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        values: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        searchable: {
                                            type: string;
                                            description: string;
                                        };
                                        filterable: {
                                            type: string;
                                            description: string;
                                        };
                                        rule: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    example: {
                                        filterable: boolean;
                                        operators: string[];
                                        isElement: boolean;
                                        dataType: string;
                                        values: string[];
                                        name: string;
                                        isMetric: boolean;
                                        description: string;
                                        logAttribute: boolean;
                                        rule: boolean;
                                        title: string;
                                        searchable: boolean;
                                    };
                                    additionalProperties: boolean;
                                };
                            };
                        };
                        example: {
                            name: string;
                            description: string;
                            attributes: {
                                filterable: boolean;
                                operators: string[];
                                isElement: boolean;
                                dataType: string;
                                values: string[];
                                name: string;
                                isMetric: boolean;
                                description: string;
                                logAttribute: boolean;
                                rule: boolean;
                                title: string;
                                searchable: boolean;
                            }[];
                        };
                        additionalProperties: boolean;
                    };
                    people: {
                        type: string;
                        properties: {
                            name: {
                                type: string;
                            };
                            description: {
                                type: string;
                            };
                            attributes: {
                                type: string;
                                items: {
                                    type: string;
                                    properties: {
                                        name: {
                                            type: string;
                                        };
                                        title: {
                                            type: string;
                                        };
                                        description: {
                                            type: string;
                                        };
                                        dataType: {
                                            type: string;
                                        };
                                        isElement: {
                                            type: string;
                                        };
                                        isMetric: {
                                            type: string;
                                        };
                                        logAttribute: {
                                            type: string;
                                            description: string;
                                        };
                                        operators: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        values: {
                                            type: string;
                                            description: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        searchable: {
                                            type: string;
                                            description: string;
                                        };
                                        filterable: {
                                            type: string;
                                            description: string;
                                        };
                                        rule: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    example: {
                                        filterable: boolean;
                                        operators: string[];
                                        isElement: boolean;
                                        dataType: string;
                                        values: string[];
                                        name: string;
                                        isMetric: boolean;
                                        description: string;
                                        logAttribute: boolean;
                                        rule: boolean;
                                        title: string;
                                        searchable: boolean;
                                    };
                                    additionalProperties: boolean;
                                };
                            };
                        };
                        example: {
                            name: string;
                            description: string;
                            attributes: {
                                filterable: boolean;
                                operators: string[];
                                isElement: boolean;
                                dataType: string;
                                values: string[];
                                name: string;
                                isMetric: boolean;
                                description: string;
                                logAttribute: boolean;
                                rule: boolean;
                                title: string;
                                searchable: boolean;
                            }[];
                        };
                        additionalProperties: boolean;
                    };
                };
                example: {
                    sessions: {
                        name: string;
                        description: string;
                        attributes: {
                            filterable: boolean;
                            operators: string[];
                            isElement: boolean;
                            dataType: string;
                            values: string[];
                            name: string;
                            isMetric: boolean;
                            description: string;
                            logAttribute: boolean;
                            rule: boolean;
                            title: string;
                            searchable: boolean;
                        }[];
                    };
                    pages: {
                        name: string;
                        description: string;
                        attributes: {
                            filterable: boolean;
                            operators: string[];
                            isElement: boolean;
                            dataType: string;
                            values: string[];
                            name: string;
                            isMetric: boolean;
                            description: string;
                            logAttribute: boolean;
                            rule: boolean;
                            title: string;
                            searchable: boolean;
                        }[];
                    };
                    timings: {
                        name: string;
                        description: string;
                        attributes: {
                            filterable: boolean;
                            operators: string[];
                            isElement: boolean;
                            dataType: string;
                            values: string[];
                            name: string;
                            isMetric: boolean;
                            description: string;
                            logAttribute: boolean;
                            rule: boolean;
                            title: string;
                            searchable: boolean;
                        }[];
                    };
                    people: {
                        name: string;
                        description: string;
                        attributes: {
                            filterable: boolean;
                            operators: string[];
                            isElement: boolean;
                            dataType: string;
                            values: string[];
                            name: string;
                            isMetric: boolean;
                            description: string;
                            logAttribute: boolean;
                            rule: boolean;
                            title: string;
                            searchable: boolean;
                        }[];
                    };
                    events: {
                        name: string;
                        description: string;
                        attributes: {
                            filterable: boolean;
                            operators: string[];
                            isElement: boolean;
                            dataType: string;
                            values: string[];
                            name: string;
                            isMetric: boolean;
                            description: string;
                            logAttribute: boolean;
                            rule: boolean;
                            title: string;
                            searchable: boolean;
                        }[];
                    };
                    users: {
                        name: string;
                        description: string;
                        attributes: {
                            filterable: boolean;
                            operators: string[];
                            isElement: boolean;
                            dataType: string;
                            values: string[];
                            name: string;
                            isMetric: boolean;
                            description: string;
                            logAttribute: boolean;
                            rule: boolean;
                            title: string;
                            searchable: boolean;
                        }[];
                    };
                };
                additionalProperties: boolean;
            };
            Error_errors: {
                required: string[];
                properties: {
                    name: {
                        type: string;
                        description: string;
                    };
                    code: {
                        type: string;
                    };
                    message: {
                        type: string;
                    };
                };
                type: string;
                additionalProperties: boolean;
            };
        };
    };
};
export { Specs };
