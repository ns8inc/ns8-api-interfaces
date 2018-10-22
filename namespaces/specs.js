"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Specs = {
    DataServices: {
        swagger: "2.0",
        info: {
            description: "Query interface for realtime user scoring and profiling",
            version: "2.0",
            title: "NS8 Data Services",
            "x-namespace": "DataServices"
        },
        host: "api.ns8.com",
        basePath: "/v2",
        tags: [
            {
                name: "User Scoring/Profiling",
                description: "User Scoring/Profiling API"
            }
        ],
        schemes: ["https"],
        paths: {
            "/score": {
                get: {
                    tags: ["Scoring"],
                    summary: "Retrieve data about a specific user based on the user's I.P. address, user agent and other data.",
                    description: "This call generates a JSON object of fraud score, geo, demographic and technology data.",
                    parameters: [
                        {
                            name: "accessToken",
                            in: "query",
                            description: "The access token for the request - leave blank for the free, rate limited version",
                            required: false,
                            type: "string"
                        },
                        {
                            name: "ip",
                            in: "query",
                            description: "An I.P. address to detect data on",
                            required: true,
                            type: "string",
                            default: "72.211.250.156"
                        },
                        {
                            name: "ua",
                            in: "query",
                            description: "A user agent to detect data on",
                            required: false,
                            type: "string",
                            default: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36"
                        },
                        {
                            name: "url",
                            in: "query",
                            description: "(optional) If known, the url of the request.",
                            required: false,
                            type: "string",
                            default: "http://mysite.com/search?utm_campaign=BingAds"
                        },
                        {
                            name: "referrer",
                            in: "query",
                            description: "(optional) If known, the referrer of the request.",
                            required: false,
                            type: "string",
                            default: "http://bing.com/search?q=bicycles"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A JSON object populated with the profile data"
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                }
            }
        },
        definitions: {
            APIResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" }
                },
                additionalProperties: false
            },
            APIError: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" }
                },
                additionalProperties: false
            }
        }
    },
    Monitoring: {
        swagger: "2.0",
        info: {
            description: "Monitoring API",
            version: "2.0",
            title: "Monitoring API",
            "x-namespace": "Monitoring"
        },
        host: "api.ns8.com",
        basePath: "/v2",
        tags: [
            {
                name: "Monitoring",
                description: "Manage monitors, contacts and get status on monitors."
            }
        ],
        schemes: ["https"],
        paths: {
            "/users": {
                post: {
                    tags: ["User Management / Authentication"],
                    summary: "Create a new user.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The user parameters",
                            required: true,
                            schema: {
                                required: ["appId", "name", "password"],
                                properties: {
                                    appId: {
                                        type: "integer",
                                        description: "The application id.  Use 6 for monitoring."
                                    },
                                    name: {
                                        type: "string",
                                        format: "email",
                                        default: "user@email.com"
                                    },
                                    password: { type: "string" },
                                    status: { type: "integer", description: "0 = enabled" }
                                },
                                example: {
                                    password: "password",
                                    appId: 0,
                                    name: "user@email.com",
                                    status: 6
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A user object",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        },
                        "409": {
                            description: "The user already exists",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/login": {
                post: {
                    tags: ["User Management / Authentication"],
                    summary: "Authenticate a user/password",
                    description: "This call authorizes a user/password combination and returns an access token and a user object.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The login parameters",
                            required: true,
                            schema: {
                                type: "object",
                                required: ["name", "password"],
                                properties: {
                                    name: {
                                        type: "string",
                                        format: "email",
                                        default: "user@email.com"
                                    },
                                    password: { type: "string", format: "password" },
                                    appId: {
                                        type: "integer",
                                        format: "int32",
                                        description: "Monitoring uses appId of 6",
                                        default: 6
                                    },
                                    expiration: {
                                        type: "string",
                                        description: "The UTC date of when the token should expire"
                                    }
                                },
                                example: {
                                    password: "password",
                                    appId: 0,
                                    name: "user@email.com",
                                    expiration: "expiration"
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "An access token and the user's information",
                            schema: {
                                properties: {
                                    expiration: { type: "string" },
                                    user: {
                                        properties: {
                                            id: { type: "integer", format: "int32" },
                                            name: { type: "string" },
                                            status: { type: "integer" },
                                            account: { type: "object", properties: {} }
                                        },
                                        example: { name: "name", id: 0, account: "{}", status: 6 },
                                        additionalProperties: false
                                    }
                                },
                                example: {
                                    expiration: "expiration",
                                    user: { name: "name", id: 0, account: "{}", status: 6 }
                                },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/authorize": {
                post: {
                    tags: ["User Management / Authentication"],
                    summary: "Authenticate a user and get credentials from a token.",
                    description: "This call returns a user object with credential information based on an access token (generally created by the /login call).",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The authorization parameters",
                            required: true,
                            schema: {
                                properties: { accessToken: { type: "string" } },
                                example: { accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A user object with credential information",
                            schema: {
                                properties: {
                                    expiration: { type: "string" },
                                    user: {
                                        properties: {
                                            id: { type: "integer", format: "int32" },
                                            name: { type: "string" },
                                            status: { type: "integer" },
                                            account: { type: "object", properties: {} }
                                        },
                                        example: { name: "name", id: 0, account: "{}", status: 6 },
                                        additionalProperties: false
                                    }
                                },
                                example: {
                                    expiration: "expiration",
                                    user: { name: "name", id: 0, account: "{}", status: 6 }
                                },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/monitoring/stations": {
                get: {
                    tags: ["Reporting"],
                    summary: "Get all the global monitoring stations",
                    parameters: [],
                    responses: {
                        "200": {
                            description: "An array of stations",
                            schema: {
                                type: "array",
                                items: {
                                    properties: {
                                        url: { type: "string" },
                                        description: { type: "string" },
                                        country: { type: "string" },
                                        longitude: { type: "string" },
                                        latitude: { type: "string" }
                                    },
                                    example: {
                                        country: "country",
                                        latitude: "latitude",
                                        description: "description",
                                        url: "url",
                                        longitude: "longitude"
                                    },
                                    additionalProperties: false
                                }
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/monitoring/contacts": {
                get: {
                    tags: ["Setup"],
                    summary: "Get all the contacts associated with an account.",
                    parameters: [
                        {
                            name: "accessToken",
                            in: "query",
                            description: "The access token for the request.  The access token must have the 'manage' permission.",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Success",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        }
                    }
                },
                post: {
                    tags: ["Setup"],
                    summary: "Create a new contact.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The contact parameters",
                            required: true,
                            schema: {
                                required: ["endpoint", "name", "type"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request.  The access token must have the 'manage' permission."
                                    },
                                    name: { type: "string", description: "The contact's name." },
                                    type: { type: "string", enum: ["email", "SMS"] },
                                    endpoint: {
                                        type: "string",
                                        description: "The email address of SMS number of the contact, depending on the type selected."
                                    }
                                },
                                example: {
                                    endpoint: "endpoint",
                                    name: "name",
                                    accessToken: "accessToken",
                                    type: "email"
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A contact object",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        },
                        "409": {
                            description: "The contact already exists",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/monitoring/contacts/{id}": {
                delete: {
                    tags: ["Setup"],
                    summary: "Delete a contact.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The contact id",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "accessToken",
                            in: "query",
                            description: "The access token for the request",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        }
                    }
                }
            }
        },
        definitions: {
            AccessTokenCreateParams: {
                type: "object",
                required: ["accessToken", "permissions"],
                properties: {
                    accessToken: {
                        type: "string",
                        description: "The access token from the owner of the account.  This can be generated from the /login call."
                    },
                    permissions: {
                        type: "array",
                        description: "The permissions to grant.",
                        items: { type: "string", enum: ["read", "manage"] }
                    }
                },
                additionalProperties: false
            },
            APIResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" }
                },
                example: { code: 0, message: "message" },
                additionalProperties: false
            },
            Login: {
                properties: {
                    accessToken: { type: "string" },
                    expiration: { type: "string" },
                    user: {
                        properties: {
                            id: { type: "integer", format: "int32" },
                            name: { type: "string" },
                            status: { type: "integer" },
                            account: { type: "object", properties: {} }
                        },
                        example: { name: "name", id: 0, account: "{}", status: 6 },
                        additionalProperties: false
                    }
                },
                additionalProperties: false
            },
            APIError: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" }
                },
                example: { code: 0, message: "message" },
                additionalProperties: false
            },
            DuplicateError: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" }
                },
                additionalProperties: false
            },
            Station: {
                properties: {
                    url: { type: "string" },
                    description: { type: "string" },
                    country: { type: "string" },
                    longitude: { type: "string" },
                    latitude: { type: "string" }
                },
                example: {
                    country: "country",
                    latitude: "latitude",
                    description: "description",
                    url: "url",
                    longitude: "longitude"
                },
                additionalProperties: false
            },
            AuthorizeParams: {
                properties: { accessToken: { type: "string" } },
                example: { accessToken: "accessToken" },
                additionalProperties: false
            },
            LoginParams: {
                type: "object",
                required: ["name", "password"],
                properties: {
                    name: { type: "string", format: "email", default: "user@email.com" },
                    password: { type: "string", format: "password" },
                    appId: {
                        type: "integer",
                        format: "int32",
                        description: "Monitoring uses appId of 6",
                        default: 6
                    },
                    expiration: {
                        type: "string",
                        description: "The UTC date of when the token should expire"
                    }
                },
                example: {
                    password: "password",
                    appId: 0,
                    name: "user@email.com",
                    expiration: "expiration"
                },
                additionalProperties: false
            },
            UserParams: {
                required: ["appId", "name", "password"],
                properties: {
                    appId: {
                        type: "integer",
                        description: "The application id.  Use 6 for monitoring."
                    },
                    name: { type: "string", format: "email", default: "user@email.com" },
                    password: { type: "string" },
                    status: { type: "integer", description: "0 = enabled" }
                },
                example: {
                    password: "password",
                    appId: 0,
                    name: "user@email.com",
                    status: 6
                },
                additionalProperties: false
            },
            User: {
                properties: {
                    id: { type: "integer", format: "int32" },
                    name: { type: "string" },
                    status: { type: "integer" },
                    account: { type: "object", properties: {} }
                },
                example: { name: "name", id: 0, account: "{}", status: 6 },
                additionalProperties: false
            },
            Authorization: {
                properties: {
                    expiration: { type: "string" },
                    user: {
                        properties: {
                            id: { type: "integer", format: "int32" },
                            name: { type: "string" },
                            status: { type: "integer" },
                            account: { type: "object", properties: {} }
                        },
                        example: { name: "name", id: 0, account: "{}", status: 6 },
                        additionalProperties: false
                    }
                },
                example: {
                    expiration: "expiration",
                    user: { name: "name", id: 0, account: "{}", status: 6 }
                },
                additionalProperties: false
            },
            ContactCreateParams: {
                required: ["endpoint", "name", "type"],
                properties: {
                    accessToken: {
                        type: "string",
                        description: "The access token for the request.  The access token must have the 'manage' permission."
                    },
                    name: { type: "string", description: "The contact's name." },
                    type: { type: "string", enum: ["email", "SMS"] },
                    endpoint: {
                        type: "string",
                        description: "The email address of SMS number of the contact, depending on the type selected."
                    }
                },
                example: {
                    endpoint: "endpoint",
                    name: "name",
                    accessToken: "accessToken",
                    type: "email"
                },
                additionalProperties: false
            }
        }
    },
    Partner: {
        swagger: "2.0",
        info: {
            description: "Partner API",
            version: "2.0",
            title: "Partner API",
            "x-namespace": "Partner"
        },
        host: "api.ns8.com",
        basePath: "/v2",
        tags: [{ name: "Partners", description: "Manage partner profiles." }],
        schemes: ["https"],
        paths: {
            "/partners/profiles": {
                get: {
                    tags: ["Profile"],
                    summary: "Get an array of partner profiles.",
                    parameters: [
                        {
                            name: "state",
                            in: "query",
                            description: "Restricts the results to a state of the profile.",
                            required: false,
                            type: "string",
                            default: "published",
                            enum: ["draft", "published", "archived"]
                        },
                        {
                            name: "page",
                            in: "query",
                            description: "The which page of results to return.",
                            required: false,
                            type: "integer",
                            default: 1
                        },
                        {
                            name: "resultsPerPage",
                            in: "query",
                            description: "The number of profiles to return per page.",
                            required: false,
                            type: "integer",
                            default: 10
                        },
                        {
                            name: "platforms",
                            in: "query",
                            description: "An array of platforms to filter the results on.  All must match.",
                            required: false,
                            type: "array",
                            items: { type: "string" },
                            collectionFormat: "multi",
                            default: "[Shopify, Magento]"
                        },
                        {
                            name: "expertise",
                            in: "query",
                            description: "An array of areas of expertise to filter the results on.  All must match.",
                            required: false,
                            type: "array",
                            items: { type: "string" },
                            collectionFormat: "multi",
                            default: "[Distribution]"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "An array of partner profiles",
                            schema: {
                                properties: {
                                    currentPage: {
                                        type: "number",
                                        description: "The page number of the results."
                                    },
                                    next: {
                                        type: "boolean",
                                        description: "Whether there is a next page of results."
                                    },
                                    profiles: {
                                        type: "array",
                                        description: "An array of partner profiles.",
                                        items: { type: "object", properties: {} }
                                    }
                                },
                                example: {
                                    next: true,
                                    profiles: ["{}", "{}"],
                                    currentPage: 0.8008281904610115
                                },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/partners/{id}/profile": {
                get: {
                    tags: ["Profile"],
                    summary: "Get a partner profile.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A partner profile",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" },
                                    data: {
                                        type: "object",
                                        description: "The partner profile",
                                        properties: {}
                                    }
                                },
                                example: { code: 0, data: "{}", message: "message" },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                put: {
                    tags: ["Profile"],
                    summary: "Replace the partner profile.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                required: ["profile"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request"
                                    },
                                    profile: {
                                        type: "object",
                                        description: "The partner profile.",
                                        properties: {}
                                    }
                                },
                                example: { profile: "{}", accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The profile was successfully replaced.",
                            schema: { type: "string" }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                patch: {
                    tags: ["Profile"],
                    summary: "Update the partner profile with only the attributes passed in.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                required: ["profile"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request"
                                    },
                                    profile: {
                                        type: "object",
                                        description: "The partner profile.",
                                        properties: {}
                                    }
                                },
                                example: { profile: "{}", accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The profile was successfully updated.",
                            schema: { type: "string" }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/partners/{id}/payee": {
                get: {
                    tags: ["Payee"],
                    summary: "Get a partner's payee.",
                    parameters: [
                        {
                            name: "accessToken",
                            in: "query",
                            description: "The access token for the request",
                            required: true,
                            type: "string"
                        },
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A partner payee",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" },
                                    data: {
                                        type: "object",
                                        description: "The partner's payee",
                                        properties: {}
                                    }
                                },
                                example: { code: 0, data: "{}", message: "message" },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                put: {
                    tags: ["Payee"],
                    summary: "Create/replace the partner payee.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                required: ["payee"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request"
                                    },
                                    payee: {
                                        type: "object",
                                        description: "The partner payee.",
                                        properties: {}
                                    }
                                },
                                example: { payee: "{}", accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The payee was successfully set.",
                            schema: { type: "string" }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                patch: {
                    tags: ["Payee"],
                    summary: "Update the partner payee only with the attributes passed in.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                required: ["payee"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request"
                                    },
                                    payee: {
                                        type: "object",
                                        description: "The partner payee.",
                                        properties: {}
                                    }
                                },
                                example: { payee: "{}", accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The payee was successfully updated.",
                            schema: { type: "string" }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/partners/{id}/showcases/{showcaseId}": {
                get: {
                    tags: ["Showcases"],
                    summary: "Get a partner showcase.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "showcaseId",
                            in: "path",
                            description: "The showcase id.",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A partner showcase",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" },
                                    data: {
                                        type: "object",
                                        description: "The partner showcase",
                                        properties: {}
                                    }
                                },
                                example: { code: 0, data: "{}", message: "message" },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                put: {
                    tags: ["Showcases"],
                    summary: "Replace a partner showcase.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "showcaseId",
                            in: "path",
                            description: "The showcase id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                required: ["showcase"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request"
                                    },
                                    showcase: {
                                        type: "object",
                                        description: "The partner showcase.",
                                        properties: {}
                                    }
                                },
                                example: { showcase: "{}", accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The showcase was successfully replaced.",
                            schema: { type: "string" }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                delete: {
                    tags: ["Showcases"],
                    summary: "Delete a partner showcase.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "showcaseId",
                            in: "path",
                            description: "The showcase id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "accessToken",
                            in: "query",
                            description: "The access token for the request",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Showcase deleted",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                patch: {
                    tags: ["Showcases"],
                    summary: "Update a partner showcase.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "showcaseId",
                            in: "path",
                            description: "The showcase id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                required: ["showcase"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request"
                                    },
                                    showcase: {
                                        type: "object",
                                        description: "The partner showcase.",
                                        properties: {}
                                    }
                                },
                                example: { showcase: "{}", accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The showcase was successfully replaced.",
                            schema: { type: "string" }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/partners/{id}/showcases": {
                get: {
                    tags: ["Showcases"],
                    summary: "Get all partner showcases.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Partner showcases",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" },
                                    data: {
                                        properties: {
                                            showcases: {
                                                type: "array",
                                                items: { type: "object", properties: {} }
                                            }
                                        },
                                        example: { showcases: ["{}", "{}"] },
                                        additionalProperties: false
                                    }
                                },
                                example: {
                                    code: 0,
                                    data: { showcases: ["{}", "{}"] },
                                    message: "message"
                                },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                post: {
                    tags: ["Showcases"],
                    summary: "Create a partner showcase.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                required: ["showcase"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request"
                                    },
                                    showcase: {
                                        type: "object",
                                        description: "The partner showcase.",
                                        properties: {}
                                    }
                                },
                                example: { showcase: "{}", accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A partner showcase",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" },
                                    data: {
                                        type: "object",
                                        description: "The showcase id",
                                        properties: {}
                                    }
                                },
                                example: { code: 0, data: "{}", message: "message" },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/partners/{id}/testimonials/{testimonialId}": {
                get: {
                    tags: ["Testimonials"],
                    summary: "Get a partner testimonial.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "testimonialId",
                            in: "path",
                            description: "The testimonial id.",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A partner testimonial",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" },
                                    data: {
                                        type: "object",
                                        description: "The partner testimonial",
                                        properties: {}
                                    }
                                },
                                example: { code: 0, data: "{}", message: "message" },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                put: {
                    tags: ["Testimonials"],
                    summary: "Replace a partner testimonial.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "testimonialId",
                            in: "path",
                            description: "The testimonial id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                required: ["testimonial"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request"
                                    },
                                    testimonial: {
                                        type: "object",
                                        description: "The partner testimonial.",
                                        properties: {}
                                    }
                                },
                                example: { testimonial: "{}", accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The testimonial was successfully replaced.",
                            schema: { type: "string" }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                delete: {
                    tags: ["Testimonials"],
                    summary: "Delete a partner testimonial.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "testimonialId",
                            in: "path",
                            description: "The testimonial id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "accessToken",
                            in: "query",
                            description: "The access token for the request",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Testimonial deleted",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                patch: {
                    tags: ["Testimonials"],
                    summary: "Update a partner testimonial.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "testimonialId",
                            in: "path",
                            description: "The testimonial id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                required: ["testimonial"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request"
                                    },
                                    testimonial: {
                                        type: "object",
                                        description: "The partner testimonial.",
                                        properties: {}
                                    }
                                },
                                example: { testimonial: "{}", accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The testimonial was successfully replaced.",
                            schema: { type: "string" }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/partners/{id}/testimonials": {
                get: {
                    tags: ["Testimonials"],
                    summary: "Get all partner testimonials.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Partner testimonials",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" },
                                    data: {
                                        properties: {
                                            testimonials: {
                                                type: "array",
                                                items: { type: "object", properties: {} }
                                            }
                                        },
                                        example: { testimonials: ["{}", "{}"] },
                                        additionalProperties: false
                                    }
                                },
                                example: {
                                    code: 0,
                                    data: { testimonials: ["{}", "{}"] },
                                    message: "message"
                                },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                },
                post: {
                    tags: ["Testimonials"],
                    summary: "Create a partner testimonial.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The partner id, which is also the account id.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                required: ["testimonial"],
                                properties: {
                                    accessToken: {
                                        type: "string",
                                        description: "The access token for the request"
                                    },
                                    testimonial: {
                                        type: "object",
                                        description: "The partner testimonial.",
                                        properties: {}
                                    }
                                },
                                example: { testimonial: "{}", accessToken: "accessToken" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A partner testimonial",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" },
                                    data: {
                                        type: "object",
                                        description: "The testimonial id",
                                        properties: {}
                                    }
                                },
                                example: { code: 0, data: "{}", message: "message" },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                }
            },
            "/partners/slug/{slug}": {
                get: {
                    tags: ["Slugs"],
                    summary: "Get the partner associated with a partner slug.",
                    parameters: [
                        {
                            name: "slug",
                            in: "path",
                            description: "The partner slug.",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The partner's account id and user id",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                example: { code: 0, message: "message" },
                                additionalProperties: false
                            }
                        },
                        default: {
                            description: "Unexpected error",
                            schema: {
                                properties: {
                                    code: { type: "integer", format: "int32" },
                                    message: { type: "string" }
                                },
                                additionalProperties: false
                            }
                        }
                    }
                }
            }
        },
        definitions: {
            ProfileResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" },
                    data: {
                        type: "object",
                        description: "The partner profile",
                        properties: {}
                    }
                },
                example: { code: 0, data: "{}", message: "message" },
                additionalProperties: false
            },
            PayeeResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" },
                    data: {
                        type: "object",
                        description: "The partner's payee",
                        properties: {}
                    }
                },
                example: { code: 0, data: "{}", message: "message" },
                additionalProperties: false
            },
            ShowcaseResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" },
                    data: {
                        type: "object",
                        description: "The partner showcase",
                        properties: {}
                    }
                },
                example: { code: 0, data: "{}", message: "message" },
                additionalProperties: false
            },
            ShowcasePostResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" },
                    data: {
                        type: "object",
                        description: "The showcase id",
                        properties: {}
                    }
                },
                example: { code: 0, data: "{}", message: "message" },
                additionalProperties: false
            },
            TestimonialResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" },
                    data: {
                        type: "object",
                        description: "The partner testimonial",
                        properties: {}
                    }
                },
                example: { code: 0, data: "{}", message: "message" },
                additionalProperties: false
            },
            TestimonialsResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" },
                    data: {
                        properties: {
                            testimonials: {
                                type: "array",
                                items: { type: "object", properties: {} }
                            }
                        },
                        example: { testimonials: ["{}", "{}"] },
                        additionalProperties: false
                    }
                },
                example: {
                    code: 0,
                    data: { testimonials: ["{}", "{}"] },
                    message: "message"
                },
                additionalProperties: false
            },
            ShowcasesResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" },
                    data: {
                        properties: {
                            showcases: {
                                type: "array",
                                items: { type: "object", properties: {} }
                            }
                        },
                        example: { showcases: ["{}", "{}"] },
                        additionalProperties: false
                    }
                },
                example: {
                    code: 0,
                    data: { showcases: ["{}", "{}"] },
                    message: "message"
                },
                additionalProperties: false
            },
            Testimonials: {
                properties: {
                    testimonials: {
                        type: "array",
                        items: { type: "object", properties: {} }
                    }
                },
                example: { testimonials: ["{}", "{}"] },
                additionalProperties: false
            },
            ProfilesResponse: {
                properties: {
                    currentPage: {
                        type: "number",
                        description: "The page number of the results."
                    },
                    next: {
                        type: "boolean",
                        description: "Whether there is a next page of results."
                    },
                    profiles: {
                        type: "array",
                        description: "An array of partner profiles.",
                        items: { type: "object", properties: {} }
                    }
                },
                example: {
                    next: true,
                    profiles: ["{}", "{}"],
                    currentPage: 0.8008281904610115
                },
                additionalProperties: false
            },
            Showcases: {
                properties: {
                    showcases: {
                        type: "array",
                        items: { type: "object", properties: {} }
                    }
                },
                example: { showcases: ["{}", "{}"] },
                additionalProperties: false
            },
            TestimonialPostResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" },
                    data: {
                        type: "object",
                        description: "The testimonial id",
                        properties: {}
                    }
                },
                example: { code: 0, data: "{}", message: "message" },
                additionalProperties: false
            },
            APIResponse: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" }
                },
                example: { code: 0, message: "message" },
                additionalProperties: false
            },
            APIError: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" }
                },
                additionalProperties: false
            },
            DuplicateError: {
                properties: {
                    code: { type: "integer", format: "int32" },
                    message: { type: "string" }
                },
                additionalProperties: false
            },
            ProfilePutParams: {
                required: ["profile"],
                properties: {
                    accessToken: {
                        type: "string",
                        description: "The access token for the request"
                    },
                    profile: {
                        type: "object",
                        description: "The partner profile.",
                        properties: {}
                    }
                },
                example: { profile: "{}", accessToken: "accessToken" },
                additionalProperties: false
            },
            ShowcasePutParams: {
                required: ["showcase"],
                properties: {
                    accessToken: {
                        type: "string",
                        description: "The access token for the request"
                    },
                    showcase: {
                        type: "object",
                        description: "The partner showcase.",
                        properties: {}
                    }
                },
                example: { showcase: "{}", accessToken: "accessToken" },
                additionalProperties: false
            },
            ShowcasePatchParams: {
                required: ["showcase"],
                properties: {
                    accessToken: {
                        type: "string",
                        description: "The access token for the request"
                    },
                    showcase: {
                        type: "object",
                        description: "The partner showcase.",
                        properties: {}
                    }
                },
                example: { showcase: "{}", accessToken: "accessToken" },
                additionalProperties: false
            },
            ShowcasePostParams: {
                required: ["showcase"],
                properties: {
                    accessToken: {
                        type: "string",
                        description: "The access token for the request"
                    },
                    showcase: {
                        type: "object",
                        description: "The partner showcase.",
                        properties: {}
                    }
                },
                example: { showcase: "{}", accessToken: "accessToken" },
                additionalProperties: false
            },
            TestimonialPutParams: {
                required: ["testimonial"],
                properties: {
                    accessToken: {
                        type: "string",
                        description: "The access token for the request"
                    },
                    testimonial: {
                        type: "object",
                        description: "The partner testimonial.",
                        properties: {}
                    }
                },
                example: { testimonial: "{}", accessToken: "accessToken" },
                additionalProperties: false
            },
            TestimonialPatchParams: {
                required: ["testimonial"],
                properties: {
                    accessToken: {
                        type: "string",
                        description: "The access token for the request"
                    },
                    testimonial: {
                        type: "object",
                        description: "The partner testimonial.",
                        properties: {}
                    }
                },
                example: { testimonial: "{}", accessToken: "accessToken" },
                additionalProperties: false
            },
            TestimonialPostParams: {
                required: ["testimonial"],
                properties: {
                    accessToken: {
                        type: "string",
                        description: "The access token for the request"
                    },
                    testimonial: {
                        type: "object",
                        description: "The partner testimonial.",
                        properties: {}
                    }
                },
                example: { testimonial: "{}", accessToken: "accessToken" },
                additionalProperties: false
            },
            PayeePutParams: {
                required: ["payee"],
                properties: {
                    accessToken: {
                        type: "string",
                        description: "The access token for the request"
                    },
                    payee: {
                        type: "object",
                        description: "The partner payee.",
                        properties: {}
                    }
                },
                example: { payee: "{}", accessToken: "accessToken" },
                additionalProperties: false
            }
        }
    },
    Protect: {
        swagger: "2.0",
        info: {
            description: "Fraud protection",
            version: "2.0",
            title: "Protect API",
            "x-namespace": "Protect"
        },
        host: "test-api.ns8.com",
        basePath: "/protect",
        tags: [
            { name: "applications" },
            { name: "fraud", description: "fraud" },
            { name: "protection", description: "protection" }
        ],
        schemes: ["https"],
        produces: ["application/json"],
        paths: {
            "/users": {
                post: {
                    tags: ["users"],
                    summary: "Create a new user.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The user parameters",
                            required: true,
                            schema: {
                                type: "object",
                                required: ["name", "password"],
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "The name of the user, which is generally an email address unless if the  application's user name format allows other types.",
                                        minLength: 4,
                                        transform: ["trim", "toLowerCase"]
                                    },
                                    email: { type: "string", format: "email" },
                                    password: { type: "string", minLength: 6 },
                                    firstName: { type: "string" },
                                    lastName: { type: "string" },
                                    phone: { type: "string", pattern: "^\\d{10}$" },
                                    timezone: { type: "string", default: "UTC" }
                                },
                                example: {
                                    firstName: "firstName",
                                    lastName: "lastName",
                                    password: "password",
                                    phone: "phone",
                                    timezone: "UTC",
                                    name: "name",
                                    email: "email"
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "User created",
                            schema: {
                                type: "object",
                                required: ["id", "name"],
                                properties: {
                                    id: {
                                        type: "integer",
                                        description: "The user id. This is the primary key."
                                    },
                                    name: {
                                        type: "string",
                                        description: "The user name, which is the user's email address unless the application allows for other formats."
                                    },
                                    firstName: { type: "string" },
                                    lastName: { type: "string" },
                                    email: {
                                        type: "string",
                                        format: "email",
                                        description: "The email to use to communicate with the user.  If this is not provided, the user's name is used."
                                    },
                                    status: { type: "integer" },
                                    phone: { type: "string" },
                                    timezone: { type: "string" },
                                    createdDate: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date the user was created.",
                                        convertStringToDate: true
                                    },
                                    lastUpdated: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date the user was last updated.",
                                        convertStringToDate: true
                                    }
                                },
                                example: {
                                    firstName: "firstName",
                                    lastName: "lastName",
                                    lastUpdated: "2000-01-23T04:56:07.000+00:00",
                                    createdDate: "2000-01-23T04:56:07.000+00:00",
                                    phone: "phone",
                                    timezone: "timezone",
                                    name: "name",
                                    id: 0,
                                    email: "email",
                                    status: 6
                                },
                                additionalProperties: false
                            }
                        },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "404": {
                            description: "Not found",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "409": {
                            description: "Duplicate",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    "x-rate-limit": 3
                },
                patch: {
                    tags: ["users"],
                    summary: "Update an authenticated user.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The default user change parameters",
                            required: true,
                            schema: {
                                properties: {
                                    firstName: { type: "string" },
                                    lastName: { type: "string" },
                                    email: { type: "string", format: "email" },
                                    phone: { type: "string", pattern: "^\\d{10}$" },
                                    timezone: { type: "string" }
                                },
                                description: "The set of attributes to update. Use the merge-patch format  https://tools.ietf.org/html/rfc7396",
                                example: {
                                    firstName: "firstName",
                                    lastName: "lastName",
                                    phone: "phone",
                                    timezone: "timezone",
                                    email: "email"
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "User updated",
                            schema: {
                                type: "object",
                                required: ["id", "name"],
                                properties: {
                                    id: {
                                        type: "integer",
                                        description: "The user id. This is the primary key."
                                    },
                                    name: {
                                        type: "string",
                                        description: "The user name, which is the user's email address unless the application allows for other formats."
                                    },
                                    firstName: { type: "string" },
                                    lastName: { type: "string" },
                                    email: {
                                        type: "string",
                                        format: "email",
                                        description: "The email to use to communicate with the user.  If this is not provided, the user's name is used."
                                    },
                                    status: { type: "integer" },
                                    phone: { type: "string" },
                                    timezone: { type: "string" },
                                    createdDate: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date the user was created.",
                                        convertStringToDate: true
                                    },
                                    lastUpdated: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date the user was last updated.",
                                        convertStringToDate: true
                                    }
                                },
                                example: {
                                    firstName: "firstName",
                                    lastName: "lastName",
                                    lastUpdated: "2000-01-23T04:56:07.000+00:00",
                                    createdDate: "2000-01-23T04:56:07.000+00:00",
                                    phone: "phone",
                                    timezone: "timezone",
                                    name: "name",
                                    id: 0,
                                    email: "email",
                                    status: 6
                                },
                                additionalProperties: false
                            }
                        },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "404": {
                            description: "Not found",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "409": {
                            description: "Duplicate",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }],
                    "x-rate-limit": 3
                }
            },
            "/users/password": {
                put: {
                    tags: ["users"],
                    summary: "Change the password for the currently authenticated user.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The password change parameters",
                            required: true,
                            schema: {
                                type: "object",
                                required: ["newPassword", "oldPassword"],
                                properties: {
                                    oldPassword: {
                                        type: "string",
                                        format: "password",
                                        description: "The user's existing password.",
                                        minLength: 6
                                    },
                                    newPassword: {
                                        type: "string",
                                        format: "password",
                                        description: "The new password for the user.",
                                        minLength: 6
                                    }
                                },
                                description: "Parameters for changing a user's password.",
                                example: {
                                    oldPassword: "oldPassword",
                                    newPassword: "newPassword"
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "204": { description: "Success with no content" },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }],
                    "x-rate-limit": 3
                }
            },
            "/users/{id}/password": {
                put: {
                    tags: ["users"],
                    summary: "Change the password for the specified user.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The user id to update",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            description: "The password change parameters",
                            required: true,
                            schema: {
                                type: "object",
                                required: ["password"],
                                properties: {
                                    password: {
                                        type: "string",
                                        description: "The new password.",
                                        minLength: 6
                                    }
                                },
                                description: "Parameters to complete a password reset.",
                                example: { password: "password" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "204": { description: "Success with no content" },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }],
                    "x-permissions": ["internalService"],
                    "x-rate-limit": 3
                }
            },
            "/users/name/{name}": {
                get: {
                    tags: ["users"],
                    summary: "Get user information.",
                    parameters: [
                        {
                            name: "name",
                            in: "path",
                            description: "The user name to check.",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "User info",
                            schema: {
                                type: "object",
                                required: ["id", "name"],
                                properties: {
                                    id: {
                                        type: "integer",
                                        description: "The user id. This is the primary key."
                                    },
                                    name: {
                                        type: "string",
                                        description: "The user name, which is the user's email address unless the application allows for other formats."
                                    },
                                    firstName: { type: "string" },
                                    lastName: { type: "string" },
                                    email: {
                                        type: "string",
                                        format: "email",
                                        description: "The email to use to communicate with the user.  If this is not provided, the user's name is used."
                                    },
                                    status: { type: "integer" },
                                    phone: { type: "string" },
                                    timezone: { type: "string" },
                                    createdDate: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date the user was created.",
                                        convertStringToDate: true
                                    },
                                    lastUpdated: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date the user was last updated.",
                                        convertStringToDate: true
                                    }
                                },
                                example: {
                                    firstName: "firstName",
                                    lastName: "lastName",
                                    lastUpdated: "2000-01-23T04:56:07.000+00:00",
                                    createdDate: "2000-01-23T04:56:07.000+00:00",
                                    phone: "phone",
                                    timezone: "timezone",
                                    name: "name",
                                    id: 0,
                                    email: "email",
                                    status: 6
                                },
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "404": { description: "The user does not exist." },
                        "429": { description: "Too many requests." }
                    },
                    "x-rate-limit": 3,
                    "x-permissions": ["internalService"]
                }
            },
            "/accounts": {
                post: {
                    tags: ["accounts"],
                    summary: "Create a new account for the currently authenticated user.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The account parameters",
                            required: true,
                            schema: {
                                type: "object",
                                required: ["appId", "userId"],
                                properties: {
                                    appId: {
                                        type: "integer",
                                        description: "The application id to user for the account.  Call /applications to see a list of applications supported."
                                    },
                                    userId: {
                                        type: "integer",
                                        description: "The id of the user who owns the account."
                                    },
                                    status: {
                                        type: "integer",
                                        description: "The status of the account.  0 is active, 3 is canceled."
                                    },
                                    type: {
                                        type: "string",
                                        description: "The application specific account type."
                                    },
                                    partnerId: {
                                        type: "integer",
                                        description: "The partner id credited with this account."
                                    },
                                    discountPct: {
                                        type: "number",
                                        description: "The discount percentage for billing.",
                                        minimum: 0,
                                        maximum: 100
                                    }
                                },
                                description: "Parameters to create an account",
                                example: {
                                    discountPct: 56.37376656633328,
                                    appId: 0,
                                    partnerId: 5,
                                    type: "type",
                                    userId: 6,
                                    status: 1
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Account created",
                            schema: {
                                type: "object",
                                required: ["appId", "id", "userId"],
                                properties: {
                                    id: {
                                        type: "integer",
                                        description: "The account id. This is the primary key."
                                    },
                                    userId: {
                                        type: "integer",
                                        description: "The id of the user that created the account."
                                    },
                                    appId: {
                                        type: "integer",
                                        description: "The application id of the account.  Call /v2/applications to see a list of applications supported."
                                    },
                                    status: {
                                        type: "integer",
                                        description: "The status of the account.  0 is active, 3 is canceled."
                                    },
                                    createdDate: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date the account was created.",
                                        convertStringToDate: true
                                    },
                                    lastUpdated: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date the account was last updated.",
                                        convertStringToDate: true
                                    },
                                    type: {
                                        type: "string",
                                        description: "The application specific account type."
                                    },
                                    partnerId: {
                                        type: "integer",
                                        description: "The partner id credited with this account."
                                    }
                                },
                                description: "Represents an account.  Users can have an account for each application.",
                                example: {
                                    lastUpdated: "2000-01-23T04:56:07.000+00:00",
                                    createdDate: "2000-01-23T04:56:07.000+00:00",
                                    appId: 1,
                                    id: 0,
                                    partnerId: 5,
                                    type: "type",
                                    userId: 6,
                                    status: 5
                                },
                                additionalProperties: false
                            }
                        },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "409": {
                            description: "Duplicate",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    "x-rate-limit": 3
                }
            },
            "/projects": {
                get: {
                    tags: ["projects"],
                    summary: "Get all projects for the currently authenticated user and account.",
                    parameters: [],
                    responses: {
                        "200": {
                            description: "An array of projects.",
                            schema: {
                                type: "array",
                                items: {
                                    type: "object",
                                    required: ["accountId", "appId", "id", "name"],
                                    properties: {
                                        id: {
                                            type: "integer",
                                            description: "The project id. This is the primary key."
                                        },
                                        accountId: {
                                            type: "integer",
                                            description: "The id of the account."
                                        },
                                        appId: {
                                            type: "integer",
                                            description: "The id of the application."
                                        },
                                        name: {
                                            type: "string",
                                            description: "The name of the project. This must be unique to the account."
                                        },
                                        type: {
                                            type: "string",
                                            description: "The application-specific type of the project."
                                        },
                                        enabled: {
                                            type: "boolean",
                                            description: "Whether the project is enabled.",
                                            default: true
                                        },
                                        isDemo: {
                                            type: "boolean",
                                            description: "Whether the project is for a demo account. Demo projects are generally read-only in the user interface."
                                        },
                                        implemented: {
                                            type: "boolean",
                                            description: "Application specific indicator of whether the project has been implemented. For example, whether a website project has tracked any data."
                                        },
                                        permissions: {
                                            type: "string",
                                            description: "The application-specific permissions for a shared project.",
                                            additionalProperties: false
                                        },
                                        sharedByUserId: {
                                            type: "integer",
                                            description: "For shared project, the id of the user that shared the project."
                                        }
                                    },
                                    description: "Represents a website or other entity within an account. An account can have multiple projects. For example, the analytics product requires management of multiple websites. ",
                                    example: {
                                        accountId: 6,
                                        permissions: {},
                                        appId: 1,
                                        name: "name",
                                        implemented: true,
                                        sharedByUserId: 5,
                                        id: 0,
                                        type: "type",
                                        isDemo: true,
                                        enabled: true
                                    },
                                    additionalProperties: false
                                }
                            }
                        },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "404": {
                            description: "Not found",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }],
                    "x-rate-limit": 10
                },
                post: {
                    tags: ["projects"],
                    summary: "Create a new project for the currently authenticated user and account.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The project parameters",
                            required: true,
                            schema: {
                                type: "object",
                                required: ["name"],
                                properties: {
                                    name: { type: "string" },
                                    type: {
                                        description: "The application-specific type of the project."
                                    }
                                },
                                description: "Parameters to create a project.",
                                example: { name: "name", type: "" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Project created",
                            schema: {
                                type: "object",
                                required: ["accountId", "appId", "id", "name"],
                                properties: {
                                    id: {
                                        type: "integer",
                                        description: "The project id. This is the primary key."
                                    },
                                    accountId: {
                                        type: "integer",
                                        description: "The id of the account."
                                    },
                                    appId: {
                                        type: "integer",
                                        description: "The id of the application."
                                    },
                                    name: {
                                        type: "string",
                                        description: "The name of the project. This must be unique to the account."
                                    },
                                    type: {
                                        type: "string",
                                        description: "The application-specific type of the project."
                                    },
                                    enabled: {
                                        type: "boolean",
                                        description: "Whether the project is enabled.",
                                        default: true
                                    },
                                    isDemo: {
                                        type: "boolean",
                                        description: "Whether the project is for a demo account. Demo projects are generally read-only in the user interface."
                                    },
                                    implemented: {
                                        type: "boolean",
                                        description: "Application specific indicator of whether the project has been implemented. For example, whether a website project has tracked any data."
                                    },
                                    permissions: {
                                        type: "string",
                                        description: "The application-specific permissions for a shared project.",
                                        additionalProperties: false
                                    },
                                    sharedByUserId: {
                                        type: "integer",
                                        description: "For shared project, the id of the user that shared the project."
                                    }
                                },
                                description: "Represents a website or other entity within an account. An account can have multiple projects. For example, the analytics product requires management of multiple websites. ",
                                example: {
                                    accountId: 6,
                                    permissions: {},
                                    appId: 1,
                                    name: "name",
                                    implemented: true,
                                    sharedByUserId: 5,
                                    id: 0,
                                    type: "type",
                                    isDemo: true,
                                    enabled: true
                                },
                                additionalProperties: false
                            }
                        },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "404": {
                            description: "Not found",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }],
                    "x-rate-limit": 10
                }
            },
            "/projects/{id}": {
                delete: {
                    tags: ["projects"],
                    summary: "Delete a project.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The project id to delete.",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "204": { description: "Success with no content" },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "404": {
                            description: "Not found",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }],
                    "x-rate-limit": 10
                },
                patch: {
                    tags: ["projects"],
                    summary: "Update an existing project.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The project id to update.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            description: "The project parameters",
                            required: true,
                            schema: {
                                properties: {
                                    name: { type: "string" },
                                    enabled: { type: "boolean" },
                                    type: { type: "string" },
                                    implemented: { type: "boolean" }
                                },
                                description: "The set of attributes to update. Use the merge-patch format  https://tools.ietf.org/html/rfc7396",
                                example: {
                                    name: "name",
                                    implemented: true,
                                    type: "type",
                                    enabled: true
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Project updated",
                            schema: {
                                type: "object",
                                required: ["accountId", "appId", "id", "name"],
                                properties: {
                                    id: {
                                        type: "integer",
                                        description: "The project id. This is the primary key."
                                    },
                                    accountId: {
                                        type: "integer",
                                        description: "The id of the account."
                                    },
                                    appId: {
                                        type: "integer",
                                        description: "The id of the application."
                                    },
                                    name: {
                                        type: "string",
                                        description: "The name of the project. This must be unique to the account."
                                    },
                                    type: {
                                        type: "string",
                                        description: "The application-specific type of the project."
                                    },
                                    enabled: {
                                        type: "boolean",
                                        description: "Whether the project is enabled.",
                                        default: true
                                    },
                                    isDemo: {
                                        type: "boolean",
                                        description: "Whether the project is for a demo account. Demo projects are generally read-only in the user interface."
                                    },
                                    implemented: {
                                        type: "boolean",
                                        description: "Application specific indicator of whether the project has been implemented. For example, whether a website project has tracked any data."
                                    },
                                    permissions: {
                                        type: "string",
                                        description: "The application-specific permissions for a shared project.",
                                        additionalProperties: false
                                    },
                                    sharedByUserId: {
                                        type: "integer",
                                        description: "For shared project, the id of the user that shared the project."
                                    }
                                },
                                description: "Represents a website or other entity within an account. An account can have multiple projects. For example, the analytics product requires management of multiple websites. ",
                                example: {
                                    accountId: 6,
                                    permissions: {},
                                    appId: 1,
                                    name: "name",
                                    implemented: true,
                                    sharedByUserId: 5,
                                    id: 0,
                                    type: "type",
                                    isDemo: true,
                                    enabled: true
                                },
                                additionalProperties: false
                            }
                        },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "404": {
                            description: "Not found",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }],
                    "x-rate-limit": 10
                }
            },
            "/access-tokens": {
                post: {
                    tags: ["authentication"],
                    summary: "Create an access token for a user/password.",
                    description: "This call authorizes a user/password combination and returns an access token.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The login parameters.",
                            required: true,
                            schema: {
                                type: "object",
                                required: ["appId", "name", "password"],
                                properties: {
                                    name: { type: "string" },
                                    password: { type: "string" },
                                    appId: {
                                        type: "integer",
                                        description: "The id of the application the access token is for."
                                    }
                                },
                                description: "Parameters for creating an access token.",
                                example: { password: "password", appId: 0, name: "name" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "An AccessToken object.",
                            schema: {
                                required: ["appId", "id", "userId"],
                                properties: {
                                    id: {
                                        type: "string",
                                        description: "A key used for authenticating API calls. Place this access token in the Authorization header when making API calls as described in  https://tools.ietf.org/html/rfc6750.  For example Authorization: 'Bearer: token'"
                                    },
                                    userId: {
                                        type: "integer",
                                        description: "The user id the token was issued to."
                                    },
                                    appId: {
                                        type: "integer",
                                        description: "The application id the token was issued for."
                                    },
                                    accountId: {
                                        type: "integer",
                                        description: "The account id the token was issued for. If this is set, the token is restricted to this account."
                                    },
                                    projectId: {
                                        type: "integer",
                                        description: "The project id the token was issued for. If this is set, the token is restricted to this project."
                                    },
                                    permissions: {
                                        type: "array",
                                        description: "An array of permissions.",
                                        items: { type: "string" },
                                        additionalProperties: false
                                    },
                                    type: {
                                        type: "string",
                                        description: "A description of the source of token, like 'api'."
                                    },
                                    createdDate: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date and time the token was created.",
                                        convertStringToDate: true
                                    },
                                    expiration: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date and time the token expires.",
                                        convertStringToDate: true
                                    }
                                },
                                description: "Represents an access token's data.",
                                example: {
                                    accountId: 1,
                                    createdDate: "2000-01-23T04:56:07.000+00:00",
                                    permissions: "",
                                    appId: 6,
                                    expiration: "2000-01-23T04:56:07.000+00:00",
                                    id: "id",
                                    type: "type",
                                    userId: 0,
                                    projectId: 5
                                },
                                additionalProperties: false
                            }
                        },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    "x-rate-limit": 3
                }
            },
            "/authorizations": {
                get: {
                    tags: ["authentication"],
                    summary: "Get Authorization information for the current user",
                    description: "Gets the authorization for the current user",
                    parameters: [],
                    responses: {
                        "200": {
                            description: "An Authorization object.",
                            schema: {
                                type: "object",
                                required: ["account", "user"],
                                properties: {
                                    user: {
                                        type: "object",
                                        required: ["id", "name"],
                                        properties: {
                                            id: {
                                                type: "integer",
                                                description: "The user id. This is the primary key."
                                            },
                                            name: {
                                                type: "string",
                                                description: "The user name, which is the user's email address unless the application allows for other formats."
                                            },
                                            firstName: { type: "string" },
                                            lastName: { type: "string" },
                                            email: {
                                                type: "string",
                                                format: "email",
                                                description: "The email to use to communicate with the user.  If this is not provided, the user's name is used."
                                            },
                                            status: { type: "integer" },
                                            phone: { type: "string" },
                                            timezone: { type: "string" },
                                            createdDate: {
                                                type: "string",
                                                format: "date-time",
                                                description: "The date the user was created.",
                                                convertStringToDate: true
                                            },
                                            lastUpdated: {
                                                type: "string",
                                                format: "date-time",
                                                description: "The date the user was last updated.",
                                                convertStringToDate: true
                                            }
                                        },
                                        example: {
                                            firstName: "firstName",
                                            lastName: "lastName",
                                            lastUpdated: "2000-01-23T04:56:07.000+00:00",
                                            createdDate: "2000-01-23T04:56:07.000+00:00",
                                            phone: "phone",
                                            timezone: "timezone",
                                            name: "name",
                                            id: 0,
                                            email: "email",
                                            status: 6
                                        },
                                        additionalProperties: false
                                    },
                                    account: {
                                        type: "object",
                                        required: ["appId", "id", "userId"],
                                        properties: {
                                            id: {
                                                type: "integer",
                                                description: "The account id. This is the primary key."
                                            },
                                            userId: {
                                                type: "integer",
                                                description: "The id of the user that created the account."
                                            },
                                            appId: {
                                                type: "integer",
                                                description: "The application id of the account.  Call /v2/applications to see a list of applications supported."
                                            },
                                            status: {
                                                type: "integer",
                                                description: "The status of the account.  0 is active, 3 is canceled."
                                            },
                                            createdDate: {
                                                type: "string",
                                                format: "date-time",
                                                description: "The date the account was created.",
                                                convertStringToDate: true
                                            },
                                            lastUpdated: {
                                                type: "string",
                                                format: "date-time",
                                                description: "The date the account was last updated.",
                                                convertStringToDate: true
                                            },
                                            type: {
                                                type: "string",
                                                description: "The application specific account type."
                                            },
                                            partnerId: {
                                                type: "integer",
                                                description: "The partner id credited with this account."
                                            }
                                        },
                                        description: "Represents an account.  Users can have an account for each application.",
                                        example: {
                                            lastUpdated: "2000-01-23T04:56:07.000+00:00",
                                            createdDate: "2000-01-23T04:56:07.000+00:00",
                                            appId: 1,
                                            id: 0,
                                            partnerId: 5,
                                            type: "type",
                                            userId: 6,
                                            status: 5
                                        },
                                        additionalProperties: false
                                    },
                                    projects: {
                                        type: "array",
                                        description: "An array of authorized projects.",
                                        items: {
                                            type: "object",
                                            required: ["accountId", "appId", "id", "name"],
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    description: "The project id. This is the primary key."
                                                },
                                                accountId: {
                                                    type: "integer",
                                                    description: "The id of the account."
                                                },
                                                appId: {
                                                    type: "integer",
                                                    description: "The id of the application."
                                                },
                                                name: {
                                                    type: "string",
                                                    description: "The name of the project. This must be unique to the account."
                                                },
                                                type: {
                                                    type: "string",
                                                    description: "The application-specific type of the project."
                                                },
                                                enabled: {
                                                    type: "boolean",
                                                    description: "Whether the project is enabled.",
                                                    default: true
                                                },
                                                isDemo: {
                                                    type: "boolean",
                                                    description: "Whether the project is for a demo account. Demo projects are generally read-only in the user interface."
                                                },
                                                implemented: {
                                                    type: "boolean",
                                                    description: "Application specific indicator of whether the project has been implemented. For example, whether a website project has tracked any data."
                                                },
                                                permissions: {
                                                    type: "string",
                                                    description: "The application-specific permissions for a shared project.",
                                                    additionalProperties: false
                                                },
                                                sharedByUserId: {
                                                    type: "integer",
                                                    description: "For shared project, the id of the user that shared the project."
                                                }
                                            },
                                            description: "Represents a website or other entity within an account. An account can have multiple projects. For example, the analytics product requires management of multiple websites. ",
                                            example: {
                                                accountId: 6,
                                                permissions: {},
                                                appId: 1,
                                                name: "name",
                                                implemented: true,
                                                sharedByUserId: 5,
                                                id: 0,
                                                type: "type",
                                                isDemo: true,
                                                enabled: true
                                            },
                                            additionalProperties: false
                                        }
                                    },
                                    expiration: {
                                        type: "string",
                                        format: "date-time",
                                        description: "The date and time when the authorization expires.",
                                        convertStringToDate: true
                                    },
                                    currentProjectId: {
                                        type: "integer",
                                        description: "For multi-project applications, which project the user has set as the default."
                                    },
                                    projectId: {
                                        type: "integer",
                                        description: "If an authorization has been set for a specific project, this is the id."
                                    }
                                },
                                description: "Represents what an access token is authorized for. Authorizations include the user object that created the access token, an account and projects.",
                                example: {
                                    currentProjectId: 0,
                                    projects: [
                                        {
                                            accountId: 6,
                                            permissions: {},
                                            appId: 1,
                                            name: "name",
                                            implemented: true,
                                            sharedByUserId: 5,
                                            id: 0,
                                            type: "type",
                                            isDemo: true,
                                            enabled: true
                                        },
                                        {
                                            accountId: 6,
                                            permissions: {},
                                            appId: 1,
                                            name: "name",
                                            implemented: true,
                                            sharedByUserId: 5,
                                            id: 0,
                                            type: "type",
                                            isDemo: true,
                                            enabled: true
                                        }
                                    ],
                                    expiration: "2000-01-23T04:56:07.000+00:00",
                                    user: {
                                        firstName: "firstName",
                                        lastName: "lastName",
                                        lastUpdated: "2000-01-23T04:56:07.000+00:00",
                                        createdDate: "2000-01-23T04:56:07.000+00:00",
                                        phone: "phone",
                                        timezone: "timezone",
                                        name: "name",
                                        id: 0,
                                        email: "email",
                                        status: 6
                                    },
                                    projectId: 6,
                                    account: {
                                        lastUpdated: "2000-01-23T04:56:07.000+00:00",
                                        createdDate: "2000-01-23T04:56:07.000+00:00",
                                        appId: 1,
                                        id: 0,
                                        partnerId: 5,
                                        type: "type",
                                        userId: 6,
                                        status: 5
                                    }
                                },
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "404": {
                            description: "Not found",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    "x-rate-limit": 3
                }
            },
            "/notifications": {
                post: {
                    tags: ["notifications"],
                    summary: "Sends an notification via email",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The notification item parameters",
                            required: true,
                            schema: {
                                type: "object",
                                required: ["email", "templateData", "templateName"],
                                properties: {
                                    email: {
                                        type: "string",
                                        format: "email",
                                        description: "The recipient's email address"
                                    },
                                    templateName: {
                                        type: "string",
                                        description: "The name of the template to use to send the notification"
                                    },
                                    templateData: {
                                        type: "object",
                                        description: "The dynamic data to pass to the template",
                                        additionalProperties: true
                                    }
                                },
                                description: "Parameters for sending a notification",
                                example: {
                                    templateName: "templateName",
                                    templateData: { key: "" },
                                    email: "email"
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "204": { description: "Success with no content" },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }],
                    "x-permissions": ["internalService"]
                }
            },
            "/stash": {
                post: {
                    tags: ["stash"],
                    summary: "Create a new stash item.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The stash item parameters",
                            required: true,
                            schema: {
                                type: "object",
                                required: ["data"],
                                properties: {
                                    expires: {
                                        type: "string",
                                        format: "date-time",
                                        description: "When the item should expire. Defaults to 24 hours.",
                                        convertStringToDate: true
                                    },
                                    data: {
                                        type: "object",
                                        description: "The data to stash.",
                                        additionalProperties: true
                                    }
                                },
                                description: "Parameters for creating a stash item.",
                                example: {
                                    expires: "2000-01-23T04:56:07.000+00:00",
                                    data: { key: "" }
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Stash item created",
                            schema: {
                                type: "object",
                                required: ["id"],
                                properties: {
                                    id: {
                                        type: "string",
                                        description: "The uuid of the stash item. This is the primary key."
                                    },
                                    expires: {
                                        type: "string",
                                        format: "date-time",
                                        description: "When the item expires.",
                                        convertStringToDate: true
                                    },
                                    data: {
                                        type: "object",
                                        description: "The stash item data.",
                                        additionalProperties: true
                                    }
                                },
                                example: {
                                    expires: "2000-01-23T04:56:07.000+00:00",
                                    data: { key: "" },
                                    id: "id"
                                },
                                additionalProperties: false
                            }
                        },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }],
                    "x-rate-limit": 3,
                    "x-permissions": ["internalService"]
                }
            },
            "/stash/{id}": {
                get: {
                    tags: ["stash"],
                    summary: "Get a stash item.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id of the stash item to get.",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A stash item.",
                            schema: {
                                type: "object",
                                required: ["id"],
                                properties: {
                                    id: {
                                        type: "string",
                                        description: "The uuid of the stash item. This is the primary key."
                                    },
                                    expires: {
                                        type: "string",
                                        format: "date-time",
                                        description: "When the item expires.",
                                        convertStringToDate: true
                                    },
                                    data: {
                                        type: "object",
                                        description: "The stash item data.",
                                        additionalProperties: true
                                    }
                                },
                                example: {
                                    expires: "2000-01-23T04:56:07.000+00:00",
                                    data: { key: "" },
                                    id: "id"
                                },
                                additionalProperties: false
                            }
                        },
                        "400": {
                            description: "Bad request",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "401": {
                            description: "Unauthorized",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "404": {
                            description: "Not found",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        },
                        "429": {
                            description: "Too many requests",
                            schema: {
                                type: "object",
                                required: ["code", "message"],
                                properties: {
                                    code: {
                                        type: "integer",
                                        description: "HTTP status code for the error."
                                    },
                                    message: {
                                        type: "string",
                                        description: "A high-level description of the error."
                                    },
                                    errors: {
                                        type: "array",
                                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                                        items: {
                                            required: ["message"],
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The attribute or field name that failed validation."
                                                },
                                                code: { type: "integer" },
                                                message: { type: "string" }
                                            },
                                            type: "object",
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "A REST error.",
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }],
                    "x-permissions": ["internalService"],
                    "x-rate-limit": 3
                }
            },
            "/entities": {
                get: {
                    tags: ["Analytics"],
                    summary: "Get all the available entities and attributes for reporting.",
                    parameters: [],
                    responses: {
                        "200": {
                            description: "An object containing each entity available, each with an array of attributes",
                            schema: {
                                type: "object",
                                properties: {
                                    sessions: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            description: { type: "string" },
                                            attributes: {
                                                type: "array",
                                                items: {
                                                    type: "object",
                                                    properties: {
                                                        name: { type: "string" },
                                                        title: { type: "string" },
                                                        description: { type: "string" },
                                                        dataType: { type: "string" },
                                                        isElement: { type: "boolean" },
                                                        isMetric: { type: "boolean" },
                                                        isLog: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
                                                        isLog: true,
                                                        name: "name",
                                                        isMetric: true,
                                                        description: "description",
                                                        title: "title"
                                                    },
                                                    additionalProperties: false
                                                }
                                            }
                                        },
                                        example: {
                                            name: "name",
                                            description: "description",
                                            attributes: [
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                }
                                            ]
                                        },
                                        additionalProperties: false
                                    },
                                    pages: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            description: { type: "string" },
                                            attributes: {
                                                type: "array",
                                                items: {
                                                    type: "object",
                                                    properties: {
                                                        name: { type: "string" },
                                                        title: { type: "string" },
                                                        description: { type: "string" },
                                                        dataType: { type: "string" },
                                                        isElement: { type: "boolean" },
                                                        isMetric: { type: "boolean" },
                                                        isLog: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
                                                        isLog: true,
                                                        name: "name",
                                                        isMetric: true,
                                                        description: "description",
                                                        title: "title"
                                                    },
                                                    additionalProperties: false
                                                }
                                            }
                                        },
                                        example: {
                                            name: "name",
                                            description: "description",
                                            attributes: [
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                }
                                            ]
                                        },
                                        additionalProperties: false
                                    },
                                    events: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            description: { type: "string" },
                                            attributes: {
                                                type: "array",
                                                items: {
                                                    type: "object",
                                                    properties: {
                                                        name: { type: "string" },
                                                        title: { type: "string" },
                                                        description: { type: "string" },
                                                        dataType: { type: "string" },
                                                        isElement: { type: "boolean" },
                                                        isMetric: { type: "boolean" },
                                                        isLog: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
                                                        isLog: true,
                                                        name: "name",
                                                        isMetric: true,
                                                        description: "description",
                                                        title: "title"
                                                    },
                                                    additionalProperties: false
                                                }
                                            }
                                        },
                                        example: {
                                            name: "name",
                                            description: "description",
                                            attributes: [
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                }
                                            ]
                                        },
                                        additionalProperties: false
                                    },
                                    timings: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            description: { type: "string" },
                                            attributes: {
                                                type: "array",
                                                items: {
                                                    type: "object",
                                                    properties: {
                                                        name: { type: "string" },
                                                        title: { type: "string" },
                                                        description: { type: "string" },
                                                        dataType: { type: "string" },
                                                        isElement: { type: "boolean" },
                                                        isMetric: { type: "boolean" },
                                                        isLog: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
                                                        isLog: true,
                                                        name: "name",
                                                        isMetric: true,
                                                        description: "description",
                                                        title: "title"
                                                    },
                                                    additionalProperties: false
                                                }
                                            }
                                        },
                                        example: {
                                            name: "name",
                                            description: "description",
                                            attributes: [
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                }
                                            ]
                                        },
                                        additionalProperties: false
                                    },
                                    users: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            description: { type: "string" },
                                            attributes: {
                                                type: "array",
                                                items: {
                                                    type: "object",
                                                    properties: {
                                                        name: { type: "string" },
                                                        title: { type: "string" },
                                                        description: { type: "string" },
                                                        dataType: { type: "string" },
                                                        isElement: { type: "boolean" },
                                                        isMetric: { type: "boolean" },
                                                        isLog: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
                                                        isLog: true,
                                                        name: "name",
                                                        isMetric: true,
                                                        description: "description",
                                                        title: "title"
                                                    },
                                                    additionalProperties: false
                                                }
                                            }
                                        },
                                        example: {
                                            name: "name",
                                            description: "description",
                                            attributes: [
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                }
                                            ]
                                        },
                                        additionalProperties: false
                                    },
                                    people: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            description: { type: "string" },
                                            attributes: {
                                                type: "array",
                                                items: {
                                                    type: "object",
                                                    properties: {
                                                        name: { type: "string" },
                                                        title: { type: "string" },
                                                        description: { type: "string" },
                                                        dataType: { type: "string" },
                                                        isElement: { type: "boolean" },
                                                        isMetric: { type: "boolean" },
                                                        isLog: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
                                                        isLog: true,
                                                        name: "name",
                                                        isMetric: true,
                                                        description: "description",
                                                        title: "title"
                                                    },
                                                    additionalProperties: false
                                                }
                                            }
                                        },
                                        example: {
                                            name: "name",
                                            description: "description",
                                            attributes: [
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
                                                    isLog: true,
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                }
                                            ]
                                        },
                                        additionalProperties: false
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/attributes": {
                get: {
                    tags: ["Analytics"],
                    summary: "Get values for an attribute that begin with a string.  This is primarily used for typeahead support.",
                    parameters: [
                        {
                            name: "attribute",
                            in: "query",
                            description: "The attribute name to search, for example, 'platformVersion'",
                            required: true,
                            type: "string",
                            default: "platformVersion"
                        },
                        {
                            name: "projectId",
                            in: "query",
                            description: "The project id of the caller.  This is used to return project specific values.",
                            required: true,
                            type: "integer"
                        },
                        {
                            name: "value",
                            in: "query",
                            description: "The search string.  The call will return found values that being with this.",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "An array of values",
                            schema: { type: "array", items: { type: "string" } }
                        }
                    },
                    security: [{ Bearer: [] }]
                }
            },
            "/query": {
                post: {
                    tags: ["Analytics"],
                    summary: "Query for data.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The query parameters",
                            required: true,
                            schema: {
                                required: ["query"],
                                properties: {
                                    query: {
                                        type: "object",
                                        description: "The query.  See the main site for help on query syntax.",
                                        properties: {}
                                    }
                                },
                                example: { query: "{}" },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The query results",
                            schema: {
                                type: "object",
                                properties: {
                                    query: {
                                        type: "object",
                                        description: "The query that was run",
                                        additionalProperties: true
                                    },
                                    columns: {
                                        type: "array",
                                        description: "Columns description",
                                        items: { type: "object", additionalProperties: true }
                                    },
                                    rows: {
                                        type: "array",
                                        description: "Rows description",
                                        items: { type: "object", additionalProperties: true }
                                    }
                                },
                                example: {
                                    columns: [{ key: "" }, { key: "" }],
                                    query: { key: "" },
                                    rows: [{ key: "" }, { key: "" }]
                                },
                                additionalProperties: false
                            }
                        }
                    },
                    security: [{ Bearer: [] }]
                }
            },
            "/order": {
                post: {
                    tags: ["order"],
                    summary: "Creates an order",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The order",
                            required: true,
                            schema: {
                                type: "object",
                                required: [
                                    "currency",
                                    "customer",
                                    "name",
                                    "platformOrderId",
                                    "totalPrice"
                                ],
                                properties: {
                                    platformOrderId: {
                                        type: "string",
                                        description: "The platform's primary key for the order."
                                    },
                                    name: {
                                        type: "string",
                                        description: "The display name for the order."
                                    },
                                    shopId: {
                                        type: "number",
                                        description: "The numeric id of the shop.  This is an attribute on orders."
                                    },
                                    currency: {
                                        type: "string",
                                        description: "The three-character currency of the order."
                                    },
                                    billingAddress: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            company: { type: "string" },
                                            address1: { type: "string" },
                                            address2: { type: "string" },
                                            city: { type: "string" },
                                            zip: { type: "string" },
                                            region: {
                                                type: "string",
                                                description: "The full name of the region (state/province)."
                                            },
                                            regionCode: {
                                                type: "string",
                                                description: "The ISO code for the region (state/province)."
                                            },
                                            country: {
                                                type: "string",
                                                description: "The full name of the country."
                                            },
                                            countryCode: {
                                                type: "string",
                                                description: "The two-character ISO code for the country."
                                            }
                                        },
                                        example: {
                                            zip: "zip",
                                            country: "country",
                                            regionCode: "regionCode",
                                            address2: "address2",
                                            city: "city",
                                            address1: "address1",
                                            countryCode: "countryCode",
                                            name: "name",
                                            company: "company",
                                            region: "region"
                                        },
                                        additionalProperties: false
                                    },
                                    shippingAddress: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            company: { type: "string" },
                                            address1: { type: "string" },
                                            address2: { type: "string" },
                                            city: { type: "string" },
                                            zip: { type: "string" },
                                            region: {
                                                type: "string",
                                                description: "The full name of the region (state/province)."
                                            },
                                            regionCode: {
                                                type: "string",
                                                description: "The ISO code for the region (state/province)."
                                            },
                                            country: {
                                                type: "string",
                                                description: "The full name of the country."
                                            },
                                            countryCode: {
                                                type: "string",
                                                description: "The two-character ISO code for the country."
                                            }
                                        },
                                        example: {
                                            zip: "zip",
                                            country: "country",
                                            regionCode: "regionCode",
                                            address2: "address2",
                                            city: "city",
                                            address1: "address1",
                                            countryCode: "countryCode",
                                            name: "name",
                                            company: "company",
                                            region: "region"
                                        },
                                        additionalProperties: false
                                    },
                                    customer: {
                                        type: "object",
                                        required: ["email", "firstName", "lastName"],
                                        properties: {
                                            platformCustomerId: {
                                                type: "string",
                                                description: "The platform-specific id of the customer."
                                            },
                                            firstName: { type: "string" },
                                            lastName: { type: "string" },
                                            email: {
                                                type: "string",
                                                format: "email",
                                                description: "The email to contact regarding this order."
                                            },
                                            phone: { type: "string" },
                                            gender: { type: "string", enum: ["M", "F"] },
                                            birthday: { type: "string", format: "date" },
                                            company: { type: "string" },
                                            ordersCount: {
                                                type: "number",
                                                description: "The total number of orders the customer has placed with this shop."
                                            },
                                            totalSpent: {
                                                type: "number",
                                                description: "The total amount of all orders this customer has placed with this shop."
                                            },
                                            isEmailVerified: {
                                                type: "boolean",
                                                description: "Has the platform verified the email is owned by the customer."
                                            },
                                            isPayingCustomer: {
                                                type: "boolean",
                                                description: "Has the customer ever paid for an order with this shop."
                                            }
                                        },
                                        example: {
                                            birthday: "2000-01-23",
                                            firstName: "firstName",
                                            lastName: "lastName",
                                            ordersCount: 6.027456183070403,
                                            isPayingCustomer: true,
                                            totalSpent: 1.4658129805029452,
                                            gender: "M",
                                            phone: "phone",
                                            platformCustomerId: "platformCustomerId",
                                            company: "company",
                                            email: "email",
                                            isEmailVerified: true
                                        },
                                        additionalProperties: false
                                    },
                                    status: {
                                        type: "string",
                                        description: "The platform specific status of the order."
                                    },
                                    totalPrice: {
                                        type: "number",
                                        description: "The total price of the order, not including discounts."
                                    },
                                    payments: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            required: ["amount", "currency"],
                                            properties: {
                                                platformPaymentId: {
                                                    type: "string",
                                                    description: "The platform's primary key for the payment."
                                                },
                                                method: {
                                                    type: "string",
                                                    description: "The method of payment used.",
                                                    enum: ["CC", "COD", "CHECK", "BANK_WIRE", "OTHER"]
                                                },
                                                amount: {
                                                    type: "number",
                                                    description: "The total amount of the payment."
                                                },
                                                currency: {
                                                    type: "string",
                                                    description: "The three-character currency of the order."
                                                },
                                                creditCard: {
                                                    type: "object",
                                                    required: ["transactionType"],
                                                    properties: {
                                                        transactionType: {
                                                            type: "string",
                                                            description: "The method of the credit card transaction",
                                                            enum: [
                                                                "AUTHORIZATION",
                                                                "SALE",
                                                                "CAPTURE",
                                                                "REFUND",
                                                                "VOID"
                                                            ]
                                                        },
                                                        creditCardNumber: {
                                                            type: "string",
                                                            description: "The last four digits of the credit card number"
                                                        },
                                                        creditCardCompany: { type: "string" },
                                                        cardExpiration: {
                                                            type: "string",
                                                            description: "The expiration date of the card in MMYY format"
                                                        },
                                                        cardHolder: { type: "string" },
                                                        avsResultCode: {
                                                            type: "string",
                                                            description: "The address verification code"
                                                        },
                                                        cvvResultCode: {
                                                            type: "string",
                                                            description: "The CVV verification code"
                                                        },
                                                        creditCardBin: {
                                                            type: "string",
                                                            description: "The bank identification number"
                                                        },
                                                        gateway: { type: "string" }
                                                    },
                                                    example: {
                                                        transactionType: "AUTHORIZATION",
                                                        avsResultCode: "avsResultCode",
                                                        cvvResultCode: "cvvResultCode",
                                                        creditCardNumber: "creditCardNumber",
                                                        creditCardBin: "creditCardBin",
                                                        creditCardCompany: "creditCardCompany",
                                                        cardHolder: "cardHolder",
                                                        cardExpiration: "cardExpiration",
                                                        gateway: "gateway"
                                                    },
                                                    additionalProperties: false
                                                }
                                            },
                                            example: {
                                                platformPaymentId: "platformPaymentId",
                                                amount: 5.637376656633329,
                                                method: "CC",
                                                currency: "currency",
                                                creditCard: {
                                                    transactionType: "AUTHORIZATION",
                                                    avsResultCode: "avsResultCode",
                                                    cvvResultCode: "cvvResultCode",
                                                    creditCardNumber: "creditCardNumber",
                                                    creditCardBin: "creditCardBin",
                                                    creditCardCompany: "creditCardCompany",
                                                    cardHolder: "cardHolder",
                                                    cardExpiration: "cardExpiration",
                                                    gateway: "gateway"
                                                }
                                            },
                                            additionalProperties: false
                                        }
                                    },
                                    lineItems: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            required: ["name", "price", "quantity"],
                                            properties: {
                                                platformId: {
                                                    type: "string",
                                                    description: "The platform specific primary key for the line item"
                                                },
                                                title: { type: "string" },
                                                name: { type: "string" },
                                                quantity: { type: "number" },
                                                price: { type: "number" },
                                                sku: { type: "string" },
                                                isbn: { type: "string" },
                                                ean13: { type: "string" },
                                                upc: { type: "string" },
                                                variantId: {
                                                    type: "string",
                                                    description: "Customized product ids. Product that varies by color may have a different variantId"
                                                },
                                                variantTitle: { type: "string" },
                                                vendor: { type: "string" },
                                                platformProductId: {
                                                    type: "string",
                                                    description: "The platform specific primary key for the product"
                                                },
                                                giftCard: { type: "boolean" },
                                                totalDiscount: { type: "number" },
                                                manufacturer: { type: "string" }
                                            },
                                            example: {
                                                variantTitle: "variantTitle",
                                                platformProductId: "platformProductId",
                                                quantity: 2.3021358869347655,
                                                isbn: "isbn",
                                                ean13: "ean13",
                                                upc: "upc",
                                                platformId: "platformId",
                                                title: "title",
                                                manufacturer: "manufacturer",
                                                price: 7.061401241503109,
                                                vendor: "vendor",
                                                name: "name",
                                                giftCard: true,
                                                totalDiscount: 9.301444243932576,
                                                variantId: "variantId",
                                                sku: "sku"
                                            },
                                            additionalProperties: false
                                        }
                                    },
                                    hasGiftCard: {
                                        type: "boolean",
                                        description: "Was the order paid using a gift card"
                                    }
                                },
                                example: {
                                    lineItems: [
                                        {
                                            variantTitle: "variantTitle",
                                            platformProductId: "platformProductId",
                                            quantity: 2.3021358869347655,
                                            isbn: "isbn",
                                            ean13: "ean13",
                                            upc: "upc",
                                            platformId: "platformId",
                                            title: "title",
                                            manufacturer: "manufacturer",
                                            price: 7.061401241503109,
                                            vendor: "vendor",
                                            name: "name",
                                            giftCard: true,
                                            totalDiscount: 9.301444243932576,
                                            variantId: "variantId",
                                            sku: "sku"
                                        },
                                        {
                                            variantTitle: "variantTitle",
                                            platformProductId: "platformProductId",
                                            quantity: 2.3021358869347655,
                                            isbn: "isbn",
                                            ean13: "ean13",
                                            upc: "upc",
                                            platformId: "platformId",
                                            title: "title",
                                            manufacturer: "manufacturer",
                                            price: 7.061401241503109,
                                            vendor: "vendor",
                                            name: "name",
                                            giftCard: true,
                                            totalDiscount: 9.301444243932576,
                                            variantId: "variantId",
                                            sku: "sku"
                                        }
                                    ],
                                    totalPrice: 5.962133916683182,
                                    hasGiftCard: true,
                                    payments: [
                                        {
                                            platformPaymentId: "platformPaymentId",
                                            amount: 5.637376656633329,
                                            method: "CC",
                                            currency: "currency",
                                            creditCard: {
                                                transactionType: "AUTHORIZATION",
                                                avsResultCode: "avsResultCode",
                                                cvvResultCode: "cvvResultCode",
                                                creditCardNumber: "creditCardNumber",
                                                creditCardBin: "creditCardBin",
                                                creditCardCompany: "creditCardCompany",
                                                cardHolder: "cardHolder",
                                                cardExpiration: "cardExpiration",
                                                gateway: "gateway"
                                            }
                                        },
                                        {
                                            platformPaymentId: "platformPaymentId",
                                            amount: 5.637376656633329,
                                            method: "CC",
                                            currency: "currency",
                                            creditCard: {
                                                transactionType: "AUTHORIZATION",
                                                avsResultCode: "avsResultCode",
                                                cvvResultCode: "cvvResultCode",
                                                creditCardNumber: "creditCardNumber",
                                                creditCardBin: "creditCardBin",
                                                creditCardCompany: "creditCardCompany",
                                                cardHolder: "cardHolder",
                                                cardExpiration: "cardExpiration",
                                                gateway: "gateway"
                                            }
                                        }
                                    ],
                                    name: "name",
                                    shippingAddress: {
                                        zip: "zip",
                                        country: "country",
                                        regionCode: "regionCode",
                                        address2: "address2",
                                        city: "city",
                                        address1: "address1",
                                        countryCode: "countryCode",
                                        name: "name",
                                        company: "company",
                                        region: "region"
                                    },
                                    currency: "currency",
                                    shopId: 0.8008281904610115,
                                    billingAddress: {
                                        zip: "zip",
                                        country: "country",
                                        regionCode: "regionCode",
                                        address2: "address2",
                                        city: "city",
                                        address1: "address1",
                                        countryCode: "countryCode",
                                        name: "name",
                                        company: "company",
                                        region: "region"
                                    },
                                    platformOrderId: "platformOrderId",
                                    customer: {
                                        birthday: "2000-01-23",
                                        firstName: "firstName",
                                        lastName: "lastName",
                                        ordersCount: 6.027456183070403,
                                        isPayingCustomer: true,
                                        totalSpent: 1.4658129805029452,
                                        gender: "M",
                                        phone: "phone",
                                        platformCustomerId: "platformCustomerId",
                                        company: "company",
                                        email: "email",
                                        isEmailVerified: true
                                    },
                                    status: "status"
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The order",
                            schema: {
                                type: "object",
                                required: [
                                    "currency",
                                    "customer",
                                    "name",
                                    "platformOrderId",
                                    "totalPrice"
                                ],
                                properties: {
                                    platformOrderId: {
                                        type: "string",
                                        description: "The platform's primary key for the order."
                                    },
                                    name: {
                                        type: "string",
                                        description: "The display name for the order."
                                    },
                                    shopId: {
                                        type: "number",
                                        description: "The numeric id of the shop.  This is an attribute on orders."
                                    },
                                    currency: {
                                        type: "string",
                                        description: "The three-character currency of the order."
                                    },
                                    billingAddress: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            company: { type: "string" },
                                            address1: { type: "string" },
                                            address2: { type: "string" },
                                            city: { type: "string" },
                                            zip: { type: "string" },
                                            region: {
                                                type: "string",
                                                description: "The full name of the region (state/province)."
                                            },
                                            regionCode: {
                                                type: "string",
                                                description: "The ISO code for the region (state/province)."
                                            },
                                            country: {
                                                type: "string",
                                                description: "The full name of the country."
                                            },
                                            countryCode: {
                                                type: "string",
                                                description: "The two-character ISO code for the country."
                                            }
                                        },
                                        example: {
                                            zip: "zip",
                                            country: "country",
                                            regionCode: "regionCode",
                                            address2: "address2",
                                            city: "city",
                                            address1: "address1",
                                            countryCode: "countryCode",
                                            name: "name",
                                            company: "company",
                                            region: "region"
                                        },
                                        additionalProperties: false
                                    },
                                    shippingAddress: {
                                        type: "object",
                                        properties: {
                                            name: { type: "string" },
                                            company: { type: "string" },
                                            address1: { type: "string" },
                                            address2: { type: "string" },
                                            city: { type: "string" },
                                            zip: { type: "string" },
                                            region: {
                                                type: "string",
                                                description: "The full name of the region (state/province)."
                                            },
                                            regionCode: {
                                                type: "string",
                                                description: "The ISO code for the region (state/province)."
                                            },
                                            country: {
                                                type: "string",
                                                description: "The full name of the country."
                                            },
                                            countryCode: {
                                                type: "string",
                                                description: "The two-character ISO code for the country."
                                            }
                                        },
                                        example: {
                                            zip: "zip",
                                            country: "country",
                                            regionCode: "regionCode",
                                            address2: "address2",
                                            city: "city",
                                            address1: "address1",
                                            countryCode: "countryCode",
                                            name: "name",
                                            company: "company",
                                            region: "region"
                                        },
                                        additionalProperties: false
                                    },
                                    customer: {
                                        type: "object",
                                        required: ["email", "firstName", "lastName"],
                                        properties: {
                                            platformCustomerId: {
                                                type: "string",
                                                description: "The platform-specific id of the customer."
                                            },
                                            firstName: { type: "string" },
                                            lastName: { type: "string" },
                                            email: {
                                                type: "string",
                                                format: "email",
                                                description: "The email to contact regarding this order."
                                            },
                                            phone: { type: "string" },
                                            gender: { type: "string", enum: ["M", "F"] },
                                            birthday: { type: "string", format: "date" },
                                            company: { type: "string" },
                                            ordersCount: {
                                                type: "number",
                                                description: "The total number of orders the customer has placed with this shop."
                                            },
                                            totalSpent: {
                                                type: "number",
                                                description: "The total amount of all orders this customer has placed with this shop."
                                            },
                                            isEmailVerified: {
                                                type: "boolean",
                                                description: "Has the platform verified the email is owned by the customer."
                                            },
                                            isPayingCustomer: {
                                                type: "boolean",
                                                description: "Has the customer ever paid for an order with this shop."
                                            }
                                        },
                                        example: {
                                            birthday: "2000-01-23",
                                            firstName: "firstName",
                                            lastName: "lastName",
                                            ordersCount: 6.027456183070403,
                                            isPayingCustomer: true,
                                            totalSpent: 1.4658129805029452,
                                            gender: "M",
                                            phone: "phone",
                                            platformCustomerId: "platformCustomerId",
                                            company: "company",
                                            email: "email",
                                            isEmailVerified: true
                                        },
                                        additionalProperties: false
                                    },
                                    status: {
                                        type: "string",
                                        description: "The platform specific status of the order."
                                    },
                                    totalPrice: {
                                        type: "number",
                                        description: "The total price of the order, not including discounts."
                                    },
                                    payments: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            required: ["amount", "currency"],
                                            properties: {
                                                platformPaymentId: {
                                                    type: "string",
                                                    description: "The platform's primary key for the payment."
                                                },
                                                method: {
                                                    type: "string",
                                                    description: "The method of payment used.",
                                                    enum: ["CC", "COD", "CHECK", "BANK_WIRE", "OTHER"]
                                                },
                                                amount: {
                                                    type: "number",
                                                    description: "The total amount of the payment."
                                                },
                                                currency: {
                                                    type: "string",
                                                    description: "The three-character currency of the order."
                                                },
                                                creditCard: {
                                                    type: "object",
                                                    required: ["transactionType"],
                                                    properties: {
                                                        transactionType: {
                                                            type: "string",
                                                            description: "The method of the credit card transaction",
                                                            enum: [
                                                                "AUTHORIZATION",
                                                                "SALE",
                                                                "CAPTURE",
                                                                "REFUND",
                                                                "VOID"
                                                            ]
                                                        },
                                                        creditCardNumber: {
                                                            type: "string",
                                                            description: "The last four digits of the credit card number"
                                                        },
                                                        creditCardCompany: { type: "string" },
                                                        cardExpiration: {
                                                            type: "string",
                                                            description: "The expiration date of the card in MMYY format"
                                                        },
                                                        cardHolder: { type: "string" },
                                                        avsResultCode: {
                                                            type: "string",
                                                            description: "The address verification code"
                                                        },
                                                        cvvResultCode: {
                                                            type: "string",
                                                            description: "The CVV verification code"
                                                        },
                                                        creditCardBin: {
                                                            type: "string",
                                                            description: "The bank identification number"
                                                        },
                                                        gateway: { type: "string" }
                                                    },
                                                    example: {
                                                        transactionType: "AUTHORIZATION",
                                                        avsResultCode: "avsResultCode",
                                                        cvvResultCode: "cvvResultCode",
                                                        creditCardNumber: "creditCardNumber",
                                                        creditCardBin: "creditCardBin",
                                                        creditCardCompany: "creditCardCompany",
                                                        cardHolder: "cardHolder",
                                                        cardExpiration: "cardExpiration",
                                                        gateway: "gateway"
                                                    },
                                                    additionalProperties: false
                                                }
                                            },
                                            example: {
                                                platformPaymentId: "platformPaymentId",
                                                amount: 5.637376656633329,
                                                method: "CC",
                                                currency: "currency",
                                                creditCard: {
                                                    transactionType: "AUTHORIZATION",
                                                    avsResultCode: "avsResultCode",
                                                    cvvResultCode: "cvvResultCode",
                                                    creditCardNumber: "creditCardNumber",
                                                    creditCardBin: "creditCardBin",
                                                    creditCardCompany: "creditCardCompany",
                                                    cardHolder: "cardHolder",
                                                    cardExpiration: "cardExpiration",
                                                    gateway: "gateway"
                                                }
                                            },
                                            additionalProperties: false
                                        }
                                    },
                                    lineItems: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            required: ["name", "price", "quantity"],
                                            properties: {
                                                platformId: {
                                                    type: "string",
                                                    description: "The platform specific primary key for the line item"
                                                },
                                                title: { type: "string" },
                                                name: { type: "string" },
                                                quantity: { type: "number" },
                                                price: { type: "number" },
                                                sku: { type: "string" },
                                                isbn: { type: "string" },
                                                ean13: { type: "string" },
                                                upc: { type: "string" },
                                                variantId: {
                                                    type: "string",
                                                    description: "Customized product ids. Product that varies by color may have a different variantId"
                                                },
                                                variantTitle: { type: "string" },
                                                vendor: { type: "string" },
                                                platformProductId: {
                                                    type: "string",
                                                    description: "The platform specific primary key for the product"
                                                },
                                                giftCard: { type: "boolean" },
                                                totalDiscount: { type: "number" },
                                                manufacturer: { type: "string" }
                                            },
                                            example: {
                                                variantTitle: "variantTitle",
                                                platformProductId: "platformProductId",
                                                quantity: 2.3021358869347655,
                                                isbn: "isbn",
                                                ean13: "ean13",
                                                upc: "upc",
                                                platformId: "platformId",
                                                title: "title",
                                                manufacturer: "manufacturer",
                                                price: 7.061401241503109,
                                                vendor: "vendor",
                                                name: "name",
                                                giftCard: true,
                                                totalDiscount: 9.301444243932576,
                                                variantId: "variantId",
                                                sku: "sku"
                                            },
                                            additionalProperties: false
                                        }
                                    },
                                    hasGiftCard: {
                                        type: "boolean",
                                        description: "Was the order paid using a gift card"
                                    }
                                },
                                example: {
                                    lineItems: [
                                        {
                                            variantTitle: "variantTitle",
                                            platformProductId: "platformProductId",
                                            quantity: 2.3021358869347655,
                                            isbn: "isbn",
                                            ean13: "ean13",
                                            upc: "upc",
                                            platformId: "platformId",
                                            title: "title",
                                            manufacturer: "manufacturer",
                                            price: 7.061401241503109,
                                            vendor: "vendor",
                                            name: "name",
                                            giftCard: true,
                                            totalDiscount: 9.301444243932576,
                                            variantId: "variantId",
                                            sku: "sku"
                                        },
                                        {
                                            variantTitle: "variantTitle",
                                            platformProductId: "platformProductId",
                                            quantity: 2.3021358869347655,
                                            isbn: "isbn",
                                            ean13: "ean13",
                                            upc: "upc",
                                            platformId: "platformId",
                                            title: "title",
                                            manufacturer: "manufacturer",
                                            price: 7.061401241503109,
                                            vendor: "vendor",
                                            name: "name",
                                            giftCard: true,
                                            totalDiscount: 9.301444243932576,
                                            variantId: "variantId",
                                            sku: "sku"
                                        }
                                    ],
                                    totalPrice: 5.962133916683182,
                                    hasGiftCard: true,
                                    payments: [
                                        {
                                            platformPaymentId: "platformPaymentId",
                                            amount: 5.637376656633329,
                                            method: "CC",
                                            currency: "currency",
                                            creditCard: {
                                                transactionType: "AUTHORIZATION",
                                                avsResultCode: "avsResultCode",
                                                cvvResultCode: "cvvResultCode",
                                                creditCardNumber: "creditCardNumber",
                                                creditCardBin: "creditCardBin",
                                                creditCardCompany: "creditCardCompany",
                                                cardHolder: "cardHolder",
                                                cardExpiration: "cardExpiration",
                                                gateway: "gateway"
                                            }
                                        },
                                        {
                                            platformPaymentId: "platformPaymentId",
                                            amount: 5.637376656633329,
                                            method: "CC",
                                            currency: "currency",
                                            creditCard: {
                                                transactionType: "AUTHORIZATION",
                                                avsResultCode: "avsResultCode",
                                                cvvResultCode: "cvvResultCode",
                                                creditCardNumber: "creditCardNumber",
                                                creditCardBin: "creditCardBin",
                                                creditCardCompany: "creditCardCompany",
                                                cardHolder: "cardHolder",
                                                cardExpiration: "cardExpiration",
                                                gateway: "gateway"
                                            }
                                        }
                                    ],
                                    name: "name",
                                    shippingAddress: {
                                        zip: "zip",
                                        country: "country",
                                        regionCode: "regionCode",
                                        address2: "address2",
                                        city: "city",
                                        address1: "address1",
                                        countryCode: "countryCode",
                                        name: "name",
                                        company: "company",
                                        region: "region"
                                    },
                                    currency: "currency",
                                    shopId: 0.8008281904610115,
                                    billingAddress: {
                                        zip: "zip",
                                        country: "country",
                                        regionCode: "regionCode",
                                        address2: "address2",
                                        city: "city",
                                        address1: "address1",
                                        countryCode: "countryCode",
                                        name: "name",
                                        company: "company",
                                        region: "region"
                                    },
                                    platformOrderId: "platformOrderId",
                                    customer: {
                                        birthday: "2000-01-23",
                                        firstName: "firstName",
                                        lastName: "lastName",
                                        ordersCount: 6.027456183070403,
                                        isPayingCustomer: true,
                                        totalSpent: 1.4658129805029452,
                                        gender: "M",
                                        phone: "phone",
                                        platformCustomerId: "platformCustomerId",
                                        company: "company",
                                        email: "email",
                                        isEmailVerified: true
                                    },
                                    status: "status"
                                },
                                additionalProperties: false
                            }
                        }
                    }
                }
            }
        },
        securityDefinitions: {
            Bearer: { type: "apiKey", name: "Authorization", in: "header" }
        },
        definitions: {
            AccessToken: {
                required: ["appId", "id", "userId"],
                properties: {
                    id: {
                        type: "string",
                        description: "A key used for authenticating API calls. Place this access token in the Authorization header when making API calls as described in  https://tools.ietf.org/html/rfc6750.  For example Authorization: 'Bearer: token'"
                    },
                    userId: {
                        type: "integer",
                        description: "The user id the token was issued to."
                    },
                    appId: {
                        type: "integer",
                        description: "The application id the token was issued for."
                    },
                    accountId: {
                        type: "integer",
                        description: "The account id the token was issued for. If this is set, the token is restricted to this account."
                    },
                    projectId: {
                        type: "integer",
                        description: "The project id the token was issued for. If this is set, the token is restricted to this project."
                    },
                    permissions: {
                        type: "array",
                        description: "An array of permissions.",
                        items: { type: "string" },
                        additionalProperties: false
                    },
                    type: {
                        type: "string",
                        description: "A description of the source of token, like 'api'."
                    },
                    createdDate: {
                        type: "string",
                        format: "date-time",
                        description: "The date and time the token was created.",
                        convertStringToDate: true
                    },
                    expiration: {
                        type: "string",
                        format: "date-time",
                        description: "The date and time the token expires.",
                        convertStringToDate: true
                    }
                },
                description: "Represents an access token's data.",
                example: {
                    accountId: 1,
                    createdDate: "2000-01-23T04:56:07.000+00:00",
                    permissions: "",
                    appId: 6,
                    expiration: "2000-01-23T04:56:07.000+00:00",
                    id: "id",
                    type: "type",
                    userId: 0,
                    projectId: 5
                },
                additionalProperties: false
            },
            AccessTokenCreateParams: {
                type: "object",
                required: ["appId", "name", "password"],
                properties: {
                    name: { type: "string" },
                    password: { type: "string" },
                    appId: {
                        type: "integer",
                        description: "The id of the application the access token is for."
                    }
                },
                description: "Parameters for creating an access token.",
                example: { password: "password", appId: 0, name: "name" },
                additionalProperties: false
            },
            Account: {
                type: "object",
                required: ["appId", "id", "userId"],
                properties: {
                    id: {
                        type: "integer",
                        description: "The account id. This is the primary key."
                    },
                    userId: {
                        type: "integer",
                        description: "The id of the user that created the account."
                    },
                    appId: {
                        type: "integer",
                        description: "The application id of the account.  Call /v2/applications to see a list of applications supported."
                    },
                    status: {
                        type: "integer",
                        description: "The status of the account.  0 is active, 3 is canceled."
                    },
                    createdDate: {
                        type: "string",
                        format: "date-time",
                        description: "The date the account was created.",
                        convertStringToDate: true
                    },
                    lastUpdated: {
                        type: "string",
                        format: "date-time",
                        description: "The date the account was last updated.",
                        convertStringToDate: true
                    },
                    type: {
                        type: "string",
                        description: "The application specific account type."
                    },
                    partnerId: {
                        type: "integer",
                        description: "The partner id credited with this account."
                    }
                },
                description: "Represents an account.  Users can have an account for each application.",
                example: {
                    lastUpdated: "2000-01-23T04:56:07.000+00:00",
                    createdDate: "2000-01-23T04:56:07.000+00:00",
                    appId: 1,
                    id: 0,
                    partnerId: 5,
                    type: "type",
                    userId: 6,
                    status: 5
                },
                additionalProperties: false
            },
            AccountCreateParams: {
                type: "object",
                required: ["appId", "userId"],
                properties: {
                    appId: {
                        type: "integer",
                        description: "The application id to user for the account.  Call /applications to see a list of applications supported."
                    },
                    userId: {
                        type: "integer",
                        description: "The id of the user who owns the account."
                    },
                    status: {
                        type: "integer",
                        description: "The status of the account.  0 is active, 3 is canceled."
                    },
                    type: {
                        type: "string",
                        description: "The application specific account type."
                    },
                    partnerId: {
                        type: "integer",
                        description: "The partner id credited with this account."
                    },
                    discountPct: {
                        type: "number",
                        description: "The discount percentage for billing.",
                        minimum: 0,
                        maximum: 100
                    }
                },
                description: "Parameters to create an account",
                example: {
                    discountPct: 56.37376656633328,
                    appId: 0,
                    partnerId: 5,
                    type: "type",
                    userId: 6,
                    status: 1
                },
                additionalProperties: false
            },
            Authorization: {
                type: "object",
                required: ["account", "user"],
                properties: {
                    user: {
                        type: "object",
                        required: ["id", "name"],
                        properties: {
                            id: {
                                type: "integer",
                                description: "The user id. This is the primary key."
                            },
                            name: {
                                type: "string",
                                description: "The user name, which is the user's email address unless the application allows for other formats."
                            },
                            firstName: { type: "string" },
                            lastName: { type: "string" },
                            email: {
                                type: "string",
                                format: "email",
                                description: "The email to use to communicate with the user.  If this is not provided, the user's name is used."
                            },
                            status: { type: "integer" },
                            phone: { type: "string" },
                            timezone: { type: "string" },
                            createdDate: {
                                type: "string",
                                format: "date-time",
                                description: "The date the user was created.",
                                convertStringToDate: true
                            },
                            lastUpdated: {
                                type: "string",
                                format: "date-time",
                                description: "The date the user was last updated.",
                                convertStringToDate: true
                            }
                        },
                        example: {
                            firstName: "firstName",
                            lastName: "lastName",
                            lastUpdated: "2000-01-23T04:56:07.000+00:00",
                            createdDate: "2000-01-23T04:56:07.000+00:00",
                            phone: "phone",
                            timezone: "timezone",
                            name: "name",
                            id: 0,
                            email: "email",
                            status: 6
                        },
                        additionalProperties: false
                    },
                    account: {
                        type: "object",
                        required: ["appId", "id", "userId"],
                        properties: {
                            id: {
                                type: "integer",
                                description: "The account id. This is the primary key."
                            },
                            userId: {
                                type: "integer",
                                description: "The id of the user that created the account."
                            },
                            appId: {
                                type: "integer",
                                description: "The application id of the account.  Call /v2/applications to see a list of applications supported."
                            },
                            status: {
                                type: "integer",
                                description: "The status of the account.  0 is active, 3 is canceled."
                            },
                            createdDate: {
                                type: "string",
                                format: "date-time",
                                description: "The date the account was created.",
                                convertStringToDate: true
                            },
                            lastUpdated: {
                                type: "string",
                                format: "date-time",
                                description: "The date the account was last updated.",
                                convertStringToDate: true
                            },
                            type: {
                                type: "string",
                                description: "The application specific account type."
                            },
                            partnerId: {
                                type: "integer",
                                description: "The partner id credited with this account."
                            }
                        },
                        description: "Represents an account.  Users can have an account for each application.",
                        example: {
                            lastUpdated: "2000-01-23T04:56:07.000+00:00",
                            createdDate: "2000-01-23T04:56:07.000+00:00",
                            appId: 1,
                            id: 0,
                            partnerId: 5,
                            type: "type",
                            userId: 6,
                            status: 5
                        },
                        additionalProperties: false
                    },
                    projects: {
                        type: "array",
                        description: "An array of authorized projects.",
                        items: {
                            type: "object",
                            required: ["accountId", "appId", "id", "name"],
                            properties: {
                                id: {
                                    type: "integer",
                                    description: "The project id. This is the primary key."
                                },
                                accountId: {
                                    type: "integer",
                                    description: "The id of the account."
                                },
                                appId: {
                                    type: "integer",
                                    description: "The id of the application."
                                },
                                name: {
                                    type: "string",
                                    description: "The name of the project. This must be unique to the account."
                                },
                                type: {
                                    type: "string",
                                    description: "The application-specific type of the project."
                                },
                                enabled: {
                                    type: "boolean",
                                    description: "Whether the project is enabled.",
                                    default: true
                                },
                                isDemo: {
                                    type: "boolean",
                                    description: "Whether the project is for a demo account. Demo projects are generally read-only in the user interface."
                                },
                                implemented: {
                                    type: "boolean",
                                    description: "Application specific indicator of whether the project has been implemented. For example, whether a website project has tracked any data."
                                },
                                permissions: {
                                    type: "string",
                                    description: "The application-specific permissions for a shared project.",
                                    additionalProperties: false
                                },
                                sharedByUserId: {
                                    type: "integer",
                                    description: "For shared project, the id of the user that shared the project."
                                }
                            },
                            description: "Represents a website or other entity within an account. An account can have multiple projects. For example, the analytics product requires management of multiple websites. ",
                            example: {
                                accountId: 6,
                                permissions: {},
                                appId: 1,
                                name: "name",
                                implemented: true,
                                sharedByUserId: 5,
                                id: 0,
                                type: "type",
                                isDemo: true,
                                enabled: true
                            },
                            additionalProperties: false
                        }
                    },
                    expiration: {
                        type: "string",
                        format: "date-time",
                        description: "The date and time when the authorization expires.",
                        convertStringToDate: true
                    },
                    currentProjectId: {
                        type: "integer",
                        description: "For multi-project applications, which project the user has set as the default."
                    },
                    projectId: {
                        type: "integer",
                        description: "If an authorization has been set for a specific project, this is the id."
                    }
                },
                description: "Represents what an access token is authorized for. Authorizations include the user object that created the access token, an account and projects.",
                example: {
                    currentProjectId: 0,
                    projects: [
                        {
                            accountId: 6,
                            permissions: {},
                            appId: 1,
                            name: "name",
                            implemented: true,
                            sharedByUserId: 5,
                            id: 0,
                            type: "type",
                            isDemo: true,
                            enabled: true
                        },
                        {
                            accountId: 6,
                            permissions: {},
                            appId: 1,
                            name: "name",
                            implemented: true,
                            sharedByUserId: 5,
                            id: 0,
                            type: "type",
                            isDemo: true,
                            enabled: true
                        }
                    ],
                    expiration: "2000-01-23T04:56:07.000+00:00",
                    user: {
                        firstName: "firstName",
                        lastName: "lastName",
                        lastUpdated: "2000-01-23T04:56:07.000+00:00",
                        createdDate: "2000-01-23T04:56:07.000+00:00",
                        phone: "phone",
                        timezone: "timezone",
                        name: "name",
                        id: 0,
                        email: "email",
                        status: 6
                    },
                    projectId: 6,
                    account: {
                        lastUpdated: "2000-01-23T04:56:07.000+00:00",
                        createdDate: "2000-01-23T04:56:07.000+00:00",
                        appId: 1,
                        id: 0,
                        partnerId: 5,
                        type: "type",
                        userId: 6,
                        status: 5
                    }
                },
                additionalProperties: false
            },
            Notification: {
                type: "object",
                required: ["email", "templateData", "templateName"],
                properties: {
                    email: {
                        type: "string",
                        format: "email",
                        description: "The recipient's email address"
                    },
                    templateName: {
                        type: "string",
                        description: "The name of the template to use to send the notification"
                    },
                    templateData: {
                        type: "object",
                        description: "The dynamic data to pass to the template",
                        additionalProperties: true
                    }
                },
                description: "Parameters for sending a notification",
                example: {
                    templateName: "templateName",
                    templateData: { key: "" },
                    email: "email"
                },
                additionalProperties: false
            },
            Permissions: {
                type: "array",
                description: "An array of permissions.",
                items: { type: "string" },
                additionalProperties: false
            },
            Project: {
                type: "object",
                required: ["accountId", "appId", "id", "name"],
                properties: {
                    id: {
                        type: "integer",
                        description: "The project id. This is the primary key."
                    },
                    accountId: { type: "integer", description: "The id of the account." },
                    appId: { type: "integer", description: "The id of the application." },
                    name: {
                        type: "string",
                        description: "The name of the project. This must be unique to the account."
                    },
                    type: {
                        type: "string",
                        description: "The application-specific type of the project."
                    },
                    enabled: {
                        type: "boolean",
                        description: "Whether the project is enabled.",
                        default: true
                    },
                    isDemo: {
                        type: "boolean",
                        description: "Whether the project is for a demo account. Demo projects are generally read-only in the user interface."
                    },
                    implemented: {
                        type: "boolean",
                        description: "Application specific indicator of whether the project has been implemented. For example, whether a website project has tracked any data."
                    },
                    permissions: {
                        type: "string",
                        description: "The application-specific permissions for a shared project.",
                        additionalProperties: false
                    },
                    sharedByUserId: {
                        type: "integer",
                        description: "For shared project, the id of the user that shared the project."
                    }
                },
                description: "Represents a website or other entity within an account. An account can have multiple projects. For example, the analytics product requires management of multiple websites. ",
                example: {
                    accountId: 6,
                    permissions: {},
                    appId: 1,
                    name: "name",
                    implemented: true,
                    sharedByUserId: 5,
                    id: 0,
                    type: "type",
                    isDemo: true,
                    enabled: true
                },
                additionalProperties: false
            },
            ProjectCreateParams: {
                type: "object",
                required: ["name"],
                properties: {
                    name: { type: "string" },
                    type: { description: "The application-specific type of the project." }
                },
                description: "Parameters to create a project.",
                example: { name: "name", type: "" },
                additionalProperties: false
            },
            ProjectPermissions: {
                type: "string",
                description: "The application-specific permissions for a shared project.",
                additionalProperties: false
            },
            ProjectUpdateParams: {
                properties: {
                    name: { type: "string" },
                    enabled: { type: "boolean" },
                    type: { type: "string" },
                    implemented: { type: "boolean" }
                },
                description: "The set of attributes to update. Use the merge-patch format  https://tools.ietf.org/html/rfc7396",
                example: {
                    name: "name",
                    implemented: true,
                    type: "type",
                    enabled: true
                },
                additionalProperties: false
            },
            Stash: {
                type: "object",
                required: ["id"],
                properties: {
                    id: {
                        type: "string",
                        description: "The uuid of the stash item. This is the primary key."
                    },
                    expires: {
                        type: "string",
                        format: "date-time",
                        description: "When the item expires.",
                        convertStringToDate: true
                    },
                    data: {
                        type: "object",
                        description: "The stash item data.",
                        additionalProperties: true
                    }
                },
                example: {
                    expires: "2000-01-23T04:56:07.000+00:00",
                    data: { key: "" },
                    id: "id"
                },
                additionalProperties: false
            },
            StashCreateParams: {
                type: "object",
                required: ["data"],
                properties: {
                    expires: {
                        type: "string",
                        format: "date-time",
                        description: "When the item should expire. Defaults to 24 hours.",
                        convertStringToDate: true
                    },
                    data: {
                        type: "object",
                        description: "The data to stash.",
                        additionalProperties: true
                    }
                },
                description: "Parameters for creating a stash item.",
                example: {
                    expires: "2000-01-23T04:56:07.000+00:00",
                    data: { key: "" }
                },
                additionalProperties: false
            },
            User: {
                type: "object",
                required: ["id", "name"],
                properties: {
                    id: {
                        type: "integer",
                        description: "The user id. This is the primary key."
                    },
                    name: {
                        type: "string",
                        description: "The user name, which is the user's email address unless the application allows for other formats."
                    },
                    firstName: { type: "string" },
                    lastName: { type: "string" },
                    email: {
                        type: "string",
                        format: "email",
                        description: "The email to use to communicate with the user.  If this is not provided, the user's name is used."
                    },
                    status: { type: "integer" },
                    phone: { type: "string" },
                    timezone: { type: "string" },
                    createdDate: {
                        type: "string",
                        format: "date-time",
                        description: "The date the user was created.",
                        convertStringToDate: true
                    },
                    lastUpdated: {
                        type: "string",
                        format: "date-time",
                        description: "The date the user was last updated.",
                        convertStringToDate: true
                    }
                },
                example: {
                    firstName: "firstName",
                    lastName: "lastName",
                    lastUpdated: "2000-01-23T04:56:07.000+00:00",
                    createdDate: "2000-01-23T04:56:07.000+00:00",
                    phone: "phone",
                    timezone: "timezone",
                    name: "name",
                    id: 0,
                    email: "email",
                    status: 6
                },
                additionalProperties: false
            },
            UserCreateParams: {
                type: "object",
                required: ["name", "password"],
                properties: {
                    name: {
                        type: "string",
                        description: "The name of the user, which is generally an email address unless if the  application's user name format allows other types.",
                        minLength: 4,
                        transform: ["trim", "toLowerCase"]
                    },
                    email: { type: "string", format: "email" },
                    password: { type: "string", minLength: 6 },
                    firstName: { type: "string" },
                    lastName: { type: "string" },
                    phone: { type: "string", pattern: "^\\d{10}$" },
                    timezone: { type: "string", default: "UTC" }
                },
                example: {
                    firstName: "firstName",
                    lastName: "lastName",
                    password: "password",
                    phone: "phone",
                    timezone: "UTC",
                    name: "name",
                    email: "email"
                },
                additionalProperties: false
            },
            UserUpdateParams: {
                properties: {
                    firstName: { type: "string" },
                    lastName: { type: "string" },
                    email: { type: "string", format: "email" },
                    phone: { type: "string", pattern: "^\\d{10}$" },
                    timezone: { type: "string" }
                },
                description: "The set of attributes to update. Use the merge-patch format  https://tools.ietf.org/html/rfc7396",
                example: {
                    firstName: "firstName",
                    lastName: "lastName",
                    phone: "phone",
                    timezone: "timezone",
                    email: "email"
                },
                additionalProperties: false
            },
            PasswordChangeParams: {
                type: "object",
                required: ["newPassword", "oldPassword"],
                properties: {
                    oldPassword: {
                        type: "string",
                        format: "password",
                        description: "The user's existing password.",
                        minLength: 6
                    },
                    newPassword: {
                        type: "string",
                        format: "password",
                        description: "The new password for the user.",
                        minLength: 6
                    }
                },
                description: "Parameters for changing a user's password.",
                example: { oldPassword: "oldPassword", newPassword: "newPassword" },
                additionalProperties: false
            },
            UpdatePasswordParams: {
                type: "object",
                required: ["password"],
                properties: {
                    password: {
                        type: "string",
                        description: "The new password.",
                        minLength: 6
                    }
                },
                description: "Parameters to complete a password reset.",
                example: { password: "password" },
                additionalProperties: false
            },
            QueryResponse: {
                type: "object",
                properties: {
                    query: {
                        type: "object",
                        description: "The query that was run",
                        additionalProperties: true
                    },
                    columns: {
                        type: "array",
                        description: "Columns description",
                        items: { type: "object", additionalProperties: true }
                    },
                    rows: {
                        type: "array",
                        description: "Rows description",
                        items: { type: "object", additionalProperties: true }
                    }
                },
                example: {
                    columns: [{ key: "" }, { key: "" }],
                    query: { key: "" },
                    rows: [{ key: "" }, { key: "" }]
                },
                additionalProperties: false
            },
            Entity: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    description: { type: "string" },
                    attributes: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                name: { type: "string" },
                                title: { type: "string" },
                                description: { type: "string" },
                                dataType: { type: "string" },
                                isElement: { type: "boolean" },
                                isMetric: { type: "boolean" },
                                isLog: { type: "boolean" }
                            },
                            example: {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            additionalProperties: false
                        }
                    }
                },
                example: {
                    name: "name",
                    description: "description",
                    attributes: [
                        {
                            isElement: true,
                            dataType: "dataType",
                            isLog: true,
                            name: "name",
                            isMetric: true,
                            description: "description",
                            title: "title"
                        },
                        {
                            isElement: true,
                            dataType: "dataType",
                            isLog: true,
                            name: "name",
                            isMetric: true,
                            description: "description",
                            title: "title"
                        }
                    ]
                },
                additionalProperties: false
            },
            Attribute: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    title: { type: "string" },
                    description: { type: "string" },
                    dataType: { type: "string" },
                    isElement: { type: "boolean" },
                    isMetric: { type: "boolean" },
                    isLog: { type: "boolean" }
                },
                example: {
                    isElement: true,
                    dataType: "dataType",
                    isLog: true,
                    name: "name",
                    isMetric: true,
                    description: "description",
                    title: "title"
                },
                additionalProperties: false
            },
            QueryParams: {
                required: ["query"],
                properties: {
                    query: {
                        type: "object",
                        description: "The query.  See the main site for help on query syntax.",
                        properties: {}
                    }
                },
                example: { query: "{}" },
                additionalProperties: false
            },
            Order: {
                type: "object",
                required: [
                    "currency",
                    "customer",
                    "name",
                    "platformOrderId",
                    "totalPrice"
                ],
                properties: {
                    platformOrderId: {
                        type: "string",
                        description: "The platform's primary key for the order."
                    },
                    name: {
                        type: "string",
                        description: "The display name for the order."
                    },
                    shopId: {
                        type: "number",
                        description: "The numeric id of the shop.  This is an attribute on orders."
                    },
                    currency: {
                        type: "string",
                        description: "The three-character currency of the order."
                    },
                    billingAddress: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            company: { type: "string" },
                            address1: { type: "string" },
                            address2: { type: "string" },
                            city: { type: "string" },
                            zip: { type: "string" },
                            region: {
                                type: "string",
                                description: "The full name of the region (state/province)."
                            },
                            regionCode: {
                                type: "string",
                                description: "The ISO code for the region (state/province)."
                            },
                            country: {
                                type: "string",
                                description: "The full name of the country."
                            },
                            countryCode: {
                                type: "string",
                                description: "The two-character ISO code for the country."
                            }
                        },
                        example: {
                            zip: "zip",
                            country: "country",
                            regionCode: "regionCode",
                            address2: "address2",
                            city: "city",
                            address1: "address1",
                            countryCode: "countryCode",
                            name: "name",
                            company: "company",
                            region: "region"
                        },
                        additionalProperties: false
                    },
                    shippingAddress: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            company: { type: "string" },
                            address1: { type: "string" },
                            address2: { type: "string" },
                            city: { type: "string" },
                            zip: { type: "string" },
                            region: {
                                type: "string",
                                description: "The full name of the region (state/province)."
                            },
                            regionCode: {
                                type: "string",
                                description: "The ISO code for the region (state/province)."
                            },
                            country: {
                                type: "string",
                                description: "The full name of the country."
                            },
                            countryCode: {
                                type: "string",
                                description: "The two-character ISO code for the country."
                            }
                        },
                        example: {
                            zip: "zip",
                            country: "country",
                            regionCode: "regionCode",
                            address2: "address2",
                            city: "city",
                            address1: "address1",
                            countryCode: "countryCode",
                            name: "name",
                            company: "company",
                            region: "region"
                        },
                        additionalProperties: false
                    },
                    customer: {
                        type: "object",
                        required: ["email", "firstName", "lastName"],
                        properties: {
                            platformCustomerId: {
                                type: "string",
                                description: "The platform-specific id of the customer."
                            },
                            firstName: { type: "string" },
                            lastName: { type: "string" },
                            email: {
                                type: "string",
                                format: "email",
                                description: "The email to contact regarding this order."
                            },
                            phone: { type: "string" },
                            gender: { type: "string", enum: ["M", "F"] },
                            birthday: { type: "string", format: "date" },
                            company: { type: "string" },
                            ordersCount: {
                                type: "number",
                                description: "The total number of orders the customer has placed with this shop."
                            },
                            totalSpent: {
                                type: "number",
                                description: "The total amount of all orders this customer has placed with this shop."
                            },
                            isEmailVerified: {
                                type: "boolean",
                                description: "Has the platform verified the email is owned by the customer."
                            },
                            isPayingCustomer: {
                                type: "boolean",
                                description: "Has the customer ever paid for an order with this shop."
                            }
                        },
                        example: {
                            birthday: "2000-01-23",
                            firstName: "firstName",
                            lastName: "lastName",
                            ordersCount: 6.027456183070403,
                            isPayingCustomer: true,
                            totalSpent: 1.4658129805029452,
                            gender: "M",
                            phone: "phone",
                            platformCustomerId: "platformCustomerId",
                            company: "company",
                            email: "email",
                            isEmailVerified: true
                        },
                        additionalProperties: false
                    },
                    status: {
                        type: "string",
                        description: "The platform specific status of the order."
                    },
                    totalPrice: {
                        type: "number",
                        description: "The total price of the order, not including discounts."
                    },
                    payments: {
                        type: "array",
                        items: {
                            type: "object",
                            required: ["amount", "currency"],
                            properties: {
                                platformPaymentId: {
                                    type: "string",
                                    description: "The platform's primary key for the payment."
                                },
                                method: {
                                    type: "string",
                                    description: "The method of payment used.",
                                    enum: ["CC", "COD", "CHECK", "BANK_WIRE", "OTHER"]
                                },
                                amount: {
                                    type: "number",
                                    description: "The total amount of the payment."
                                },
                                currency: {
                                    type: "string",
                                    description: "The three-character currency of the order."
                                },
                                creditCard: {
                                    type: "object",
                                    required: ["transactionType"],
                                    properties: {
                                        transactionType: {
                                            type: "string",
                                            description: "The method of the credit card transaction",
                                            enum: [
                                                "AUTHORIZATION",
                                                "SALE",
                                                "CAPTURE",
                                                "REFUND",
                                                "VOID"
                                            ]
                                        },
                                        creditCardNumber: {
                                            type: "string",
                                            description: "The last four digits of the credit card number"
                                        },
                                        creditCardCompany: { type: "string" },
                                        cardExpiration: {
                                            type: "string",
                                            description: "The expiration date of the card in MMYY format"
                                        },
                                        cardHolder: { type: "string" },
                                        avsResultCode: {
                                            type: "string",
                                            description: "The address verification code"
                                        },
                                        cvvResultCode: {
                                            type: "string",
                                            description: "The CVV verification code"
                                        },
                                        creditCardBin: {
                                            type: "string",
                                            description: "The bank identification number"
                                        },
                                        gateway: { type: "string" }
                                    },
                                    example: {
                                        transactionType: "AUTHORIZATION",
                                        avsResultCode: "avsResultCode",
                                        cvvResultCode: "cvvResultCode",
                                        creditCardNumber: "creditCardNumber",
                                        creditCardBin: "creditCardBin",
                                        creditCardCompany: "creditCardCompany",
                                        cardHolder: "cardHolder",
                                        cardExpiration: "cardExpiration",
                                        gateway: "gateway"
                                    },
                                    additionalProperties: false
                                }
                            },
                            example: {
                                platformPaymentId: "platformPaymentId",
                                amount: 5.637376656633329,
                                method: "CC",
                                currency: "currency",
                                creditCard: {
                                    transactionType: "AUTHORIZATION",
                                    avsResultCode: "avsResultCode",
                                    cvvResultCode: "cvvResultCode",
                                    creditCardNumber: "creditCardNumber",
                                    creditCardBin: "creditCardBin",
                                    creditCardCompany: "creditCardCompany",
                                    cardHolder: "cardHolder",
                                    cardExpiration: "cardExpiration",
                                    gateway: "gateway"
                                }
                            },
                            additionalProperties: false
                        }
                    },
                    lineItems: {
                        type: "array",
                        items: {
                            type: "object",
                            required: ["name", "price", "quantity"],
                            properties: {
                                platformId: {
                                    type: "string",
                                    description: "The platform specific primary key for the line item"
                                },
                                title: { type: "string" },
                                name: { type: "string" },
                                quantity: { type: "number" },
                                price: { type: "number" },
                                sku: { type: "string" },
                                isbn: { type: "string" },
                                ean13: { type: "string" },
                                upc: { type: "string" },
                                variantId: {
                                    type: "string",
                                    description: "Customized product ids. Product that varies by color may have a different variantId"
                                },
                                variantTitle: { type: "string" },
                                vendor: { type: "string" },
                                platformProductId: {
                                    type: "string",
                                    description: "The platform specific primary key for the product"
                                },
                                giftCard: { type: "boolean" },
                                totalDiscount: { type: "number" },
                                manufacturer: { type: "string" }
                            },
                            example: {
                                variantTitle: "variantTitle",
                                platformProductId: "platformProductId",
                                quantity: 2.3021358869347655,
                                isbn: "isbn",
                                ean13: "ean13",
                                upc: "upc",
                                platformId: "platformId",
                                title: "title",
                                manufacturer: "manufacturer",
                                price: 7.061401241503109,
                                vendor: "vendor",
                                name: "name",
                                giftCard: true,
                                totalDiscount: 9.301444243932576,
                                variantId: "variantId",
                                sku: "sku"
                            },
                            additionalProperties: false
                        }
                    },
                    hasGiftCard: {
                        type: "boolean",
                        description: "Was the order paid using a gift card"
                    }
                },
                example: {
                    lineItems: [
                        {
                            variantTitle: "variantTitle",
                            platformProductId: "platformProductId",
                            quantity: 2.3021358869347655,
                            isbn: "isbn",
                            ean13: "ean13",
                            upc: "upc",
                            platformId: "platformId",
                            title: "title",
                            manufacturer: "manufacturer",
                            price: 7.061401241503109,
                            vendor: "vendor",
                            name: "name",
                            giftCard: true,
                            totalDiscount: 9.301444243932576,
                            variantId: "variantId",
                            sku: "sku"
                        },
                        {
                            variantTitle: "variantTitle",
                            platformProductId: "platformProductId",
                            quantity: 2.3021358869347655,
                            isbn: "isbn",
                            ean13: "ean13",
                            upc: "upc",
                            platformId: "platformId",
                            title: "title",
                            manufacturer: "manufacturer",
                            price: 7.061401241503109,
                            vendor: "vendor",
                            name: "name",
                            giftCard: true,
                            totalDiscount: 9.301444243932576,
                            variantId: "variantId",
                            sku: "sku"
                        }
                    ],
                    totalPrice: 5.962133916683182,
                    hasGiftCard: true,
                    payments: [
                        {
                            platformPaymentId: "platformPaymentId",
                            amount: 5.637376656633329,
                            method: "CC",
                            currency: "currency",
                            creditCard: {
                                transactionType: "AUTHORIZATION",
                                avsResultCode: "avsResultCode",
                                cvvResultCode: "cvvResultCode",
                                creditCardNumber: "creditCardNumber",
                                creditCardBin: "creditCardBin",
                                creditCardCompany: "creditCardCompany",
                                cardHolder: "cardHolder",
                                cardExpiration: "cardExpiration",
                                gateway: "gateway"
                            }
                        },
                        {
                            platformPaymentId: "platformPaymentId",
                            amount: 5.637376656633329,
                            method: "CC",
                            currency: "currency",
                            creditCard: {
                                transactionType: "AUTHORIZATION",
                                avsResultCode: "avsResultCode",
                                cvvResultCode: "cvvResultCode",
                                creditCardNumber: "creditCardNumber",
                                creditCardBin: "creditCardBin",
                                creditCardCompany: "creditCardCompany",
                                cardHolder: "cardHolder",
                                cardExpiration: "cardExpiration",
                                gateway: "gateway"
                            }
                        }
                    ],
                    name: "name",
                    shippingAddress: {
                        zip: "zip",
                        country: "country",
                        regionCode: "regionCode",
                        address2: "address2",
                        city: "city",
                        address1: "address1",
                        countryCode: "countryCode",
                        name: "name",
                        company: "company",
                        region: "region"
                    },
                    currency: "currency",
                    shopId: 0.8008281904610115,
                    billingAddress: {
                        zip: "zip",
                        country: "country",
                        regionCode: "regionCode",
                        address2: "address2",
                        city: "city",
                        address1: "address1",
                        countryCode: "countryCode",
                        name: "name",
                        company: "company",
                        region: "region"
                    },
                    platformOrderId: "platformOrderId",
                    customer: {
                        birthday: "2000-01-23",
                        firstName: "firstName",
                        lastName: "lastName",
                        ordersCount: 6.027456183070403,
                        isPayingCustomer: true,
                        totalSpent: 1.4658129805029452,
                        gender: "M",
                        phone: "phone",
                        platformCustomerId: "platformCustomerId",
                        company: "company",
                        email: "email",
                        isEmailVerified: true
                    },
                    status: "status"
                },
                additionalProperties: false
            },
            Address: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    company: { type: "string" },
                    address1: { type: "string" },
                    address2: { type: "string" },
                    city: { type: "string" },
                    zip: { type: "string" },
                    region: {
                        type: "string",
                        description: "The full name of the region (state/province)."
                    },
                    regionCode: {
                        type: "string",
                        description: "The ISO code for the region (state/province)."
                    },
                    country: {
                        type: "string",
                        description: "The full name of the country."
                    },
                    countryCode: {
                        type: "string",
                        description: "The two-character ISO code for the country."
                    }
                },
                example: {
                    zip: "zip",
                    country: "country",
                    regionCode: "regionCode",
                    address2: "address2",
                    city: "city",
                    address1: "address1",
                    countryCode: "countryCode",
                    name: "name",
                    company: "company",
                    region: "region"
                },
                additionalProperties: false
            },
            Customer: {
                type: "object",
                required: ["email", "firstName", "lastName"],
                properties: {
                    platformCustomerId: {
                        type: "string",
                        description: "The platform-specific id of the customer."
                    },
                    firstName: { type: "string" },
                    lastName: { type: "string" },
                    email: {
                        type: "string",
                        format: "email",
                        description: "The email to contact regarding this order."
                    },
                    phone: { type: "string" },
                    gender: { type: "string", enum: ["M", "F"] },
                    birthday: { type: "string", format: "date" },
                    company: { type: "string" },
                    ordersCount: {
                        type: "number",
                        description: "The total number of orders the customer has placed with this shop."
                    },
                    totalSpent: {
                        type: "number",
                        description: "The total amount of all orders this customer has placed with this shop."
                    },
                    isEmailVerified: {
                        type: "boolean",
                        description: "Has the platform verified the email is owned by the customer."
                    },
                    isPayingCustomer: {
                        type: "boolean",
                        description: "Has the customer ever paid for an order with this shop."
                    }
                },
                example: {
                    birthday: "2000-01-23",
                    firstName: "firstName",
                    lastName: "lastName",
                    ordersCount: 6.027456183070403,
                    isPayingCustomer: true,
                    totalSpent: 1.4658129805029452,
                    gender: "M",
                    phone: "phone",
                    platformCustomerId: "platformCustomerId",
                    company: "company",
                    email: "email",
                    isEmailVerified: true
                },
                additionalProperties: false
            },
            Payment: {
                type: "object",
                required: ["amount", "currency"],
                properties: {
                    platformPaymentId: {
                        type: "string",
                        description: "The platform's primary key for the payment."
                    },
                    method: {
                        type: "string",
                        description: "The method of payment used.",
                        enum: ["CC", "COD", "CHECK", "BANK_WIRE", "OTHER"]
                    },
                    amount: {
                        type: "number",
                        description: "The total amount of the payment."
                    },
                    currency: {
                        type: "string",
                        description: "The three-character currency of the order."
                    },
                    creditCard: {
                        type: "object",
                        required: ["transactionType"],
                        properties: {
                            transactionType: {
                                type: "string",
                                description: "The method of the credit card transaction",
                                enum: ["AUTHORIZATION", "SALE", "CAPTURE", "REFUND", "VOID"]
                            },
                            creditCardNumber: {
                                type: "string",
                                description: "The last four digits of the credit card number"
                            },
                            creditCardCompany: { type: "string" },
                            cardExpiration: {
                                type: "string",
                                description: "The expiration date of the card in MMYY format"
                            },
                            cardHolder: { type: "string" },
                            avsResultCode: {
                                type: "string",
                                description: "The address verification code"
                            },
                            cvvResultCode: {
                                type: "string",
                                description: "The CVV verification code"
                            },
                            creditCardBin: {
                                type: "string",
                                description: "The bank identification number"
                            },
                            gateway: { type: "string" }
                        },
                        example: {
                            transactionType: "AUTHORIZATION",
                            avsResultCode: "avsResultCode",
                            cvvResultCode: "cvvResultCode",
                            creditCardNumber: "creditCardNumber",
                            creditCardBin: "creditCardBin",
                            creditCardCompany: "creditCardCompany",
                            cardHolder: "cardHolder",
                            cardExpiration: "cardExpiration",
                            gateway: "gateway"
                        },
                        additionalProperties: false
                    }
                },
                example: {
                    platformPaymentId: "platformPaymentId",
                    amount: 5.637376656633329,
                    method: "CC",
                    currency: "currency",
                    creditCard: {
                        transactionType: "AUTHORIZATION",
                        avsResultCode: "avsResultCode",
                        cvvResultCode: "cvvResultCode",
                        creditCardNumber: "creditCardNumber",
                        creditCardBin: "creditCardBin",
                        creditCardCompany: "creditCardCompany",
                        cardHolder: "cardHolder",
                        cardExpiration: "cardExpiration",
                        gateway: "gateway"
                    }
                },
                additionalProperties: false
            },
            CreditCard: {
                type: "object",
                required: ["transactionType"],
                properties: {
                    transactionType: {
                        type: "string",
                        description: "The method of the credit card transaction",
                        enum: ["AUTHORIZATION", "SALE", "CAPTURE", "REFUND", "VOID"]
                    },
                    creditCardNumber: {
                        type: "string",
                        description: "The last four digits of the credit card number"
                    },
                    creditCardCompany: { type: "string" },
                    cardExpiration: {
                        type: "string",
                        description: "The expiration date of the card in MMYY format"
                    },
                    cardHolder: { type: "string" },
                    avsResultCode: {
                        type: "string",
                        description: "The address verification code"
                    },
                    cvvResultCode: {
                        type: "string",
                        description: "The CVV verification code"
                    },
                    creditCardBin: {
                        type: "string",
                        description: "The bank identification number"
                    },
                    gateway: { type: "string" }
                },
                example: {
                    transactionType: "AUTHORIZATION",
                    avsResultCode: "avsResultCode",
                    cvvResultCode: "cvvResultCode",
                    creditCardNumber: "creditCardNumber",
                    creditCardBin: "creditCardBin",
                    creditCardCompany: "creditCardCompany",
                    cardHolder: "cardHolder",
                    cardExpiration: "cardExpiration",
                    gateway: "gateway"
                },
                additionalProperties: false
            },
            LineItem: {
                type: "object",
                required: ["name", "price", "quantity"],
                properties: {
                    platformId: {
                        type: "string",
                        description: "The platform specific primary key for the line item"
                    },
                    title: { type: "string" },
                    name: { type: "string" },
                    quantity: { type: "number" },
                    price: { type: "number" },
                    sku: { type: "string" },
                    isbn: { type: "string" },
                    ean13: { type: "string" },
                    upc: { type: "string" },
                    variantId: {
                        type: "string",
                        description: "Customized product ids. Product that varies by color may have a different variantId"
                    },
                    variantTitle: { type: "string" },
                    vendor: { type: "string" },
                    platformProductId: {
                        type: "string",
                        description: "The platform specific primary key for the product"
                    },
                    giftCard: { type: "boolean" },
                    totalDiscount: { type: "number" },
                    manufacturer: { type: "string" }
                },
                example: {
                    variantTitle: "variantTitle",
                    platformProductId: "platformProductId",
                    quantity: 2.3021358869347655,
                    isbn: "isbn",
                    ean13: "ean13",
                    upc: "upc",
                    platformId: "platformId",
                    title: "title",
                    manufacturer: "manufacturer",
                    price: 7.061401241503109,
                    vendor: "vendor",
                    name: "name",
                    giftCard: true,
                    totalDiscount: 9.301444243932576,
                    variantId: "variantId",
                    sku: "sku"
                },
                additionalProperties: false
            },
            Error: {
                type: "object",
                required: ["code", "message"],
                properties: {
                    code: {
                        type: "integer",
                        description: "HTTP status code for the error."
                    },
                    message: {
                        type: "string",
                        description: "A high-level description of the error."
                    },
                    errors: {
                        type: "array",
                        description: "For API calls that need to return validation errors, this array contains a list of each failed validation.",
                        items: {
                            required: ["message"],
                            properties: {
                                name: {
                                    type: "string",
                                    description: "The attribute or field name that failed validation."
                                },
                                code: { type: "integer" },
                                message: { type: "string" }
                            },
                            type: "object",
                            additionalProperties: false
                        }
                    }
                },
                description: "A REST error.",
                additionalProperties: false
            },
            inline_response_200: {
                properties: {
                    sessions: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            description: { type: "string" },
                            attributes: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: { type: "string" },
                                        title: { type: "string" },
                                        description: { type: "string" },
                                        dataType: { type: "string" },
                                        isElement: { type: "boolean" },
                                        isMetric: { type: "boolean" },
                                        isLog: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
                                        isLog: true,
                                        name: "name",
                                        isMetric: true,
                                        description: "description",
                                        title: "title"
                                    },
                                    additionalProperties: false
                                }
                            }
                        },
                        example: {
                            name: "name",
                            description: "description",
                            attributes: [
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                }
                            ]
                        },
                        additionalProperties: false
                    },
                    pages: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            description: { type: "string" },
                            attributes: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: { type: "string" },
                                        title: { type: "string" },
                                        description: { type: "string" },
                                        dataType: { type: "string" },
                                        isElement: { type: "boolean" },
                                        isMetric: { type: "boolean" },
                                        isLog: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
                                        isLog: true,
                                        name: "name",
                                        isMetric: true,
                                        description: "description",
                                        title: "title"
                                    },
                                    additionalProperties: false
                                }
                            }
                        },
                        example: {
                            name: "name",
                            description: "description",
                            attributes: [
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                }
                            ]
                        },
                        additionalProperties: false
                    },
                    events: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            description: { type: "string" },
                            attributes: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: { type: "string" },
                                        title: { type: "string" },
                                        description: { type: "string" },
                                        dataType: { type: "string" },
                                        isElement: { type: "boolean" },
                                        isMetric: { type: "boolean" },
                                        isLog: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
                                        isLog: true,
                                        name: "name",
                                        isMetric: true,
                                        description: "description",
                                        title: "title"
                                    },
                                    additionalProperties: false
                                }
                            }
                        },
                        example: {
                            name: "name",
                            description: "description",
                            attributes: [
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                }
                            ]
                        },
                        additionalProperties: false
                    },
                    timings: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            description: { type: "string" },
                            attributes: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: { type: "string" },
                                        title: { type: "string" },
                                        description: { type: "string" },
                                        dataType: { type: "string" },
                                        isElement: { type: "boolean" },
                                        isMetric: { type: "boolean" },
                                        isLog: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
                                        isLog: true,
                                        name: "name",
                                        isMetric: true,
                                        description: "description",
                                        title: "title"
                                    },
                                    additionalProperties: false
                                }
                            }
                        },
                        example: {
                            name: "name",
                            description: "description",
                            attributes: [
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                }
                            ]
                        },
                        additionalProperties: false
                    },
                    users: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            description: { type: "string" },
                            attributes: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: { type: "string" },
                                        title: { type: "string" },
                                        description: { type: "string" },
                                        dataType: { type: "string" },
                                        isElement: { type: "boolean" },
                                        isMetric: { type: "boolean" },
                                        isLog: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
                                        isLog: true,
                                        name: "name",
                                        isMetric: true,
                                        description: "description",
                                        title: "title"
                                    },
                                    additionalProperties: false
                                }
                            }
                        },
                        example: {
                            name: "name",
                            description: "description",
                            attributes: [
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                }
                            ]
                        },
                        additionalProperties: false
                    },
                    people: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            description: { type: "string" },
                            attributes: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: { type: "string" },
                                        title: { type: "string" },
                                        description: { type: "string" },
                                        dataType: { type: "string" },
                                        isElement: { type: "boolean" },
                                        isMetric: { type: "boolean" },
                                        isLog: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
                                        isLog: true,
                                        name: "name",
                                        isMetric: true,
                                        description: "description",
                                        title: "title"
                                    },
                                    additionalProperties: false
                                }
                            }
                        },
                        example: {
                            name: "name",
                            description: "description",
                            attributes: [
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
                                    isLog: true,
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                }
                            ]
                        },
                        additionalProperties: false
                    }
                },
                example: {
                    sessions: {
                        name: "name",
                        description: "description",
                        attributes: [
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            }
                        ]
                    },
                    pages: {
                        name: "name",
                        description: "description",
                        attributes: [
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            }
                        ]
                    },
                    timings: {
                        name: "name",
                        description: "description",
                        attributes: [
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            }
                        ]
                    },
                    people: {
                        name: "name",
                        description: "description",
                        attributes: [
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            }
                        ]
                    },
                    events: {
                        name: "name",
                        description: "description",
                        attributes: [
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            }
                        ]
                    },
                    users: {
                        name: "name",
                        description: "description",
                        attributes: [
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
                                isLog: true,
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            }
                        ]
                    }
                },
                additionalProperties: false
            },
            Error_errors: {
                required: ["message"],
                properties: {
                    name: {
                        type: "string",
                        description: "The attribute or field name that failed validation."
                    },
                    code: { type: "integer" },
                    message: { type: "string" }
                },
                type: "object",
                additionalProperties: false
            }
        }
    }
};
exports.Specs = Specs;
//# sourceMappingURL=specs.js.map