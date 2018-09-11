"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Specs = {
    Admin: {
        swagger: "2.0",
        info: {
            description: "User/account/project provisioning and authentication",
            version: "2.0",
            title: "Administration API",
            "x-namespace": "Admin"
        },
        host: "test-api.ns8.com",
        basePath: "/",
        tags: [
            { name: "applications" },
            { name: "users", description: "Manage users" },
            { name: "accounts", description: "Manage accounts" },
            { name: "projects", description: "Manage projects" },
            {
                name: "authentication",
                description: "Manage authorizations, password resets, access tokens and logins"
            }
        ],
        schemes: ["https"],
        produces: ["application/json"],
        paths: {
            "/applications": {
                get: {
                    tags: ["applications"],
                    summary: "Get all supported application definitions.",
                    parameters: [],
                    responses: {
                        "200": {
                            description: "An array of application definitions.",
                            schema: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "integer",
                                            description: "The application id. This is the primary key."
                                        },
                                        name: {
                                            type: "string",
                                            description: "The name of the application."
                                        },
                                        allowSignups: {
                                            type: "boolean",
                                            description: "Whether the application allows public signups."
                                        },
                                        minimumPrepay: {
                                            type: "integer",
                                            description: "For applications that support prepaying, this is the minimum amount."
                                        },
                                        description: {
                                            type: "string",
                                            description: "The description of the application."
                                        },
                                        host: {
                                            type: "string",
                                            format: "uri",
                                            description: "The host URL of the application."
                                        },
                                        website: {
                                            type: "string",
                                            format: "uri",
                                            description: "The website URL for the application."
                                        },
                                        consoleHost: {
                                            type: "string",
                                            format: "uri",
                                            description: "For applications that have a console separate from the main website, this is the URL of the console."
                                        },
                                        commissions: {
                                            type: "boolean",
                                            description: "Whether this application supports commissions."
                                        },
                                        permissions: {
                                            type: "array",
                                            description: "The available permissions supported the the application.",
                                            items: {
                                                type: "object",
                                                required: ["description", "id"],
                                                properties: {
                                                    id: {
                                                        type: "string",
                                                        description: "The permission name."
                                                    },
                                                    description: {
                                                        type: "string",
                                                        description: "The description of the permission."
                                                    }
                                                },
                                                description: "An application role-based permission.",
                                                example: { description: "description", id: "id" },
                                                additionalProperties: false
                                            }
                                        },
                                        supportEmail: {
                                            type: "string",
                                            format: "email",
                                            description: "The main support email for the application."
                                        },
                                        reporting: {
                                            properties: {
                                                apiEndpoint: {
                                                    type: "string",
                                                    description: "For applications that support analytics, this is the path of the API endpoint for queries."
                                                }
                                            },
                                            description: "The reporting configuration for the application.",
                                            example: { apiEndpoint: "apiEndpoint" },
                                            additionalProperties: false
                                        },
                                        userNameFormat: {
                                            type: "string",
                                            description: "The required format for user names.",
                                            default: "email"
                                        }
                                    },
                                    description: "Represents a product or service available by NS8.",
                                    example: {
                                        allowSignups: true,
                                        website: "http://example.com/aeiou",
                                        userNameFormat: "email",
                                        description: "description",
                                        minimumPrepay: 6,
                                        supportEmail: "supportEmail",
                                        commissions: true,
                                        permissions: [
                                            { description: "description", id: "id" },
                                            { description: "description", id: "id" }
                                        ],
                                        consoleHost: "http://example.com/aeiou",
                                        name: "name",
                                        host: "http://example.com/aeiou",
                                        id: 0,
                                        reporting: { apiEndpoint: "apiEndpoint" }
                                    },
                                    additionalProperties: false
                                }
                            }
                        }
                    }
                }
            },
            "/applications/{id}": {
                get: {
                    tags: ["applications"],
                    summary: "Get an application definition.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id of the application to get.",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "200": { description: "An application definition.", schema: {} }
                    }
                }
            },
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
                                    lastUpdated: "2000-01-23T04:56:07.000Z",
                                    createdDate: "2000-01-23T04:56:07.000Z",
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
                                    lastUpdated: "2000-01-23T04:56:07.000Z",
                                    createdDate: "2000-01-23T04:56:07.000Z",
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
                                    lastUpdated: "2000-01-23T04:56:07.000Z",
                                    createdDate: "2000-01-23T04:56:07.000Z",
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
            "/users/name": {
                post: {
                    tags: ["users"],
                    summary: "Change the name of the currently authenticated user.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The user name change parameters.",
                            required: true,
                            schema: {
                                required: ["name"],
                                properties: {
                                    name: { type: "string", description: "The new user name" }
                                },
                                example: { name: "name" },
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
                                    lastUpdated: "2000-01-23T04:56:07.000Z",
                                    createdDate: "2000-01-23T04:56:07.000Z",
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
            "/accounts/{id}": {
                patch: {
                    tags: ["accounts"],
                    summary: "Update an account.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id of the account to update.",
                            required: true,
                            type: "integer"
                        },
                        {
                            in: "body",
                            name: "body",
                            description: "The attributes to change.",
                            required: true,
                            schema: {
                                type: "object",
                                properties: {
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
                                    }
                                },
                                description: "The set of attributes to update. Use the merge-patch format  https://tools.ietf.org/html/rfc7396",
                                example: { partnerId: 6, type: "type", status: 0 },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "Account updated",
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
                                    lastUpdated: "2000-01-23T04:56:07.000Z",
                                    createdDate: "2000-01-23T04:56:07.000Z",
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
                    "x-rate-limit": 3,
                    "x-permissions": ["admin"]
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
                get: {
                    tags: ["projects"],
                    summary: "Get a project for the currently authenticated user and account.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The project id to get.",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A project.",
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
                },
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
            "/project-shares": {
                get: {
                    tags: ["projects"],
                    summary: "Get all shared projects for the currently authenticated user and account.",
                    parameters: [],
                    responses: {
                        "200": {
                            description: "An array of shared projects.",
                            schema: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        appId: {
                                            type: "integer",
                                            description: "The application id the project is associated with."
                                        },
                                        accountId: {
                                            type: "integer",
                                            description: "The account id that created the project."
                                        },
                                        projectId: {
                                            type: "integer",
                                            description: "The project id to share."
                                        },
                                        userId: {
                                            type: "integer",
                                            description: "The id of the user the project is shared with."
                                        },
                                        userName: {
                                            type: "string",
                                            description: "The user name the project is shared with."
                                        },
                                        permissions: {
                                            type: "string",
                                            description: "The application-specific permissions for a shared project.",
                                            additionalProperties: false
                                        },
                                        sharedByUserId: {
                                            type: "integer",
                                            description: "The id of the user that shared the project."
                                        },
                                        createdDate: {
                                            type: "string",
                                            format: "date-time",
                                            description: "The date the project was shared.",
                                            convertStringToDate: true
                                        }
                                    },
                                    example: {
                                        accountId: 6,
                                        createdDate: "2000-01-23T04:56:07.000Z",
                                        permissions: {},
                                        appId: 0,
                                        sharedByUserId: 5,
                                        userName: "userName",
                                        projectId: 1,
                                        userId: 5
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
                                    createdDate: "2000-01-23T04:56:07.000Z",
                                    permissions: "",
                                    appId: 6,
                                    expiration: "2000-01-23T04:56:07.000Z",
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
                                            lastUpdated: "2000-01-23T04:56:07.000Z",
                                            createdDate: "2000-01-23T04:56:07.000Z",
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
                                            lastUpdated: "2000-01-23T04:56:07.000Z",
                                            createdDate: "2000-01-23T04:56:07.000Z",
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
                                    expiration: "2000-01-23T04:56:07.000Z",
                                    user: {
                                        firstName: "firstName",
                                        lastName: "lastName",
                                        lastUpdated: "2000-01-23T04:56:07.000Z",
                                        createdDate: "2000-01-23T04:56:07.000Z",
                                        phone: "phone",
                                        timezone: "timezone",
                                        name: "name",
                                        id: 0,
                                        email: "email",
                                        status: 6
                                    },
                                    projectId: 6,
                                    account: {
                                        lastUpdated: "2000-01-23T04:56:07.000Z",
                                        createdDate: "2000-01-23T04:56:07.000Z",
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
                                    expires: "2000-01-23T04:56:07.000Z",
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
                                    expires: "2000-01-23T04:56:07.000Z",
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
                                    expires: "2000-01-23T04:56:07.000Z",
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
            "/verifications": {
                post: {
                    tags: ["authentication"],
                    summary: "Create an email verification.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The verification parameters",
                            required: true,
                            schema: {
                                required: ["data", "email", "templateName"],
                                properties: {
                                    email: {
                                        type: "string",
                                        format: "email",
                                        description: "The email address to send the verification to."
                                    },
                                    templateName: {
                                        type: "string",
                                        description: "The internal email template name to use for the email sent."
                                    },
                                    data: {
                                        type: "object",
                                        description: "An object containing data to store with the verification.",
                                        additionalProperties: true
                                    }
                                },
                                example: {
                                    data: { key: "" },
                                    templateName: "templateName",
                                    email: "email"
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A unique key for the verification.",
                            schema: {
                                properties: {
                                    key: {
                                        type: "string",
                                        description: "The validation key to send to the user."
                                    }
                                },
                                example: { key: "key" },
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
            "/verifications/{key}": {
                get: {
                    tags: ["authentication"],
                    summary: "Complete an email verification and return the associated data.",
                    parameters: [
                        {
                            name: "key",
                            in: "path",
                            description: "The key returned from the verification start call.",
                            required: true,
                            type: "string"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The data associated with the verification.",
                            schema: {
                                properties: {
                                    data: {
                                        type: "object",
                                        description: "Any data sent with the validation request, like name.",
                                        additionalProperties: true
                                    }
                                },
                                example: { data: { key: "" } },
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
            "/payments/methods": {
                get: {
                    tags: ["payments"],
                    summary: "Get the payment method(s) for the authenticated user/account.",
                    parameters: [],
                    responses: {
                        "200": {
                            description: "The customer and payment methods.",
                            schema: {
                                type: "object",
                                properties: {
                                    customer: {
                                        type: "object",
                                        properties: {
                                            default_source: {
                                                type: "string",
                                                description: "The default card id to use for recurring payments."
                                            },
                                            account_balance: {
                                                type: "number",
                                                description: "The remaining balance for prepaid accounts."
                                            },
                                            created: { type: "string", format: "timestamp" },
                                            email: {
                                                type: "string",
                                                format: "email",
                                                description: "The email of the customer."
                                            },
                                            discount: {
                                                type: "number",
                                                description: "The discount for the account."
                                            },
                                            currency: {
                                                type: "string",
                                                description: "The currency to use."
                                            }
                                        },
                                        description: "The Stripe payment customer associated with the payment methods.",
                                        example: {
                                            account_balance: 0.8008281904610115,
                                            default_source: "default_source",
                                            created: "created",
                                            discount: 6.027456183070403,
                                            currency: "currency",
                                            email: "email"
                                        },
                                        additionalProperties: false
                                    },
                                    cards: {
                                        type: "array",
                                        description: "An array of cards",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "string",
                                                    description: "The id of the card."
                                                },
                                                brand: {
                                                    type: "string",
                                                    description: "The card brand."
                                                },
                                                last4: {
                                                    type: "string",
                                                    description: "The last four digits of the card."
                                                },
                                                exp_month: {
                                                    type: "integer",
                                                    description: "The expiration month of the card."
                                                },
                                                exp_year: {
                                                    type: "integer",
                                                    description: "The expiration year of the card."
                                                },
                                                country: {
                                                    type: "string",
                                                    description: "The 2-digit country code."
                                                }
                                            },
                                            description: "Represents a Stripe payment card.",
                                            example: {
                                                last4: "last4",
                                                country: "country",
                                                exp_month: 1,
                                                id: "id",
                                                exp_year: 5,
                                                brand: "brand"
                                            },
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "The payment methods for a customer.",
                                example: {
                                    cards: [
                                        {
                                            last4: "last4",
                                            country: "country",
                                            exp_month: 1,
                                            id: "id",
                                            exp_year: 5,
                                            brand: "brand"
                                        },
                                        {
                                            last4: "last4",
                                            country: "country",
                                            exp_month: 1,
                                            id: "id",
                                            exp_year: 5,
                                            brand: "brand"
                                        }
                                    ],
                                    customer: {
                                        account_balance: 0.8008281904610115,
                                        default_source: "default_source",
                                        created: "created",
                                        discount: 6.027456183070403,
                                        currency: "currency",
                                        email: "email"
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
                    "x-permissions": ["admin"]
                },
                post: {
                    tags: ["payments"],
                    summary: "Create a new payment method(s) for the authenticated user/account and set it to be the default. If the account is cancelled, it is re-activated.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                type: "object",
                                properties: {
                                    stripeToken: {
                                        type: "string",
                                        description: "The Stripe token generated by the Stripe client API."
                                    }
                                },
                                description: "Parameters for creating a Stripe payment method.",
                                example: { stripeToken: "stripeToken" },
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
                    "x-rate-limit": 3,
                    "x-permissions": ["admin"]
                }
            },
            "/payments/methods/{id}": {
                delete: {
                    tags: ["payments"],
                    summary: "Delete a payment method(s) for the authenticated user/account.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The id of the payment method to delete.",
                            required: true,
                            type: "string"
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
                    "x-rate-limit": 3,
                    "x-permissions": ["admin"]
                }
            },
            "/payments/methods/primary": {
                put: {
                    tags: ["payments"],
                    summary: "Set the primary (default) payment method for the authenticated user/account.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                        description: "The id of the payment method."
                                    }
                                },
                                description: "Parameters for setting the default payment method for an account.",
                                example: { id: "id" },
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
                    "x-rate-limit": 3,
                    "x-permissions": ["admin"]
                }
            },
            "/payments": {
                get: {
                    tags: ["payments"],
                    summary: "Get the payment history for the authenticated user/account.",
                    parameters: [],
                    responses: {
                        "200": {
                            description: "The payment history",
                            schema: {
                                type: "object",
                                properties: {
                                    discount: {
                                        type: "number",
                                        description: "The discount for the account."
                                    },
                                    balance: {
                                        type: "number",
                                        description: "The balance remaining for prepaid accounts."
                                    },
                                    payments: {
                                        type: "array",
                                        description: "An array of payments.",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "string",
                                                    description: "The Stripe id of the payment."
                                                },
                                                currency: {
                                                    type: "string",
                                                    description: "The currency of the payment."
                                                },
                                                created: { type: "string", format: "timestamp" },
                                                status: {
                                                    type: "string",
                                                    description: "The Stripe status code."
                                                },
                                                description: {
                                                    type: "string",
                                                    description: "The description of the payment."
                                                },
                                                customer_id: {
                                                    type: "string",
                                                    description: "The Stripe customer id."
                                                },
                                                invoice: {
                                                    type: "string",
                                                    description: "The Stripe invoice id."
                                                },
                                                amount: {
                                                    type: "number",
                                                    description: "The discount for the account."
                                                },
                                                refunded: {
                                                    type: "boolean",
                                                    description: "The balance remaining for prepaid accounts."
                                                },
                                                amount_refunded: {
                                                    type: "number",
                                                    description: "The balance remaining for prepaid accounts."
                                                }
                                            },
                                            description: "Represents a Stripe payment.",
                                            example: {
                                                amount: 1.4658129805029452,
                                                created: "created",
                                                description: "description",
                                                currency: "currency",
                                                refunded: true,
                                                id: "id",
                                                invoice: "invoice",
                                                customer_id: "customer_id",
                                                status: "status",
                                                amount_refunded: 5.962133916683182
                                            },
                                            additionalProperties: false
                                        }
                                    }
                                },
                                description: "The payment history for the account.",
                                example: {
                                    balance: 6.027456183070403,
                                    payments: [
                                        {
                                            amount: 1.4658129805029452,
                                            created: "created",
                                            description: "description",
                                            currency: "currency",
                                            refunded: true,
                                            id: "id",
                                            invoice: "invoice",
                                            customer_id: "customer_id",
                                            status: "status",
                                            amount_refunded: 5.962133916683182
                                        },
                                        {
                                            amount: 1.4658129805029452,
                                            created: "created",
                                            description: "description",
                                            currency: "currency",
                                            refunded: true,
                                            id: "id",
                                            invoice: "invoice",
                                            customer_id: "customer_id",
                                            status: "status",
                                            amount_refunded: 5.962133916683182
                                        }
                                    ],
                                    discount: 0.8008281904610115
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
                    "x-permissions": ["admin"]
                },
                post: {
                    tags: ["payments"],
                    summary: "Create a payment for the authenticated user/account. This is for prepaying.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            required: true,
                            schema: {
                                type: "object",
                                properties: {
                                    amount: {
                                        type: "number",
                                        description: "The amount of the payment."
                                    },
                                    description: {
                                        type: "string",
                                        description: "The description of the payment."
                                    }
                                },
                                description: "Parameters for creating a payment for an account.",
                                example: {
                                    amount: 0.8008281904610115,
                                    description: "description"
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
                    "x-rate-limit": 3,
                    "x-permissions": ["admin"]
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
                    createdDate: "2000-01-23T04:56:07.000Z",
                    permissions: "",
                    appId: 6,
                    expiration: "2000-01-23T04:56:07.000Z",
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
                    lastUpdated: "2000-01-23T04:56:07.000Z",
                    createdDate: "2000-01-23T04:56:07.000Z",
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
            AccountUpdateParams: {
                type: "object",
                properties: {
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
                    }
                },
                description: "The set of attributes to update. Use the merge-patch format  https://tools.ietf.org/html/rfc7396",
                example: { partnerId: 6, type: "type", status: 0 },
                additionalProperties: false
            },
            Application: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        description: "The application id. This is the primary key."
                    },
                    name: { type: "string", description: "The name of the application." },
                    allowSignups: {
                        type: "boolean",
                        description: "Whether the application allows public signups."
                    },
                    minimumPrepay: {
                        type: "integer",
                        description: "For applications that support prepaying, this is the minimum amount."
                    },
                    description: {
                        type: "string",
                        description: "The description of the application."
                    },
                    host: {
                        type: "string",
                        format: "uri",
                        description: "The host URL of the application."
                    },
                    website: {
                        type: "string",
                        format: "uri",
                        description: "The website URL for the application."
                    },
                    consoleHost: {
                        type: "string",
                        format: "uri",
                        description: "For applications that have a console separate from the main website, this is the URL of the console."
                    },
                    commissions: {
                        type: "boolean",
                        description: "Whether this application supports commissions."
                    },
                    permissions: {
                        type: "array",
                        description: "The available permissions supported the the application.",
                        items: {
                            type: "object",
                            required: ["description", "id"],
                            properties: {
                                id: { type: "string", description: "The permission name." },
                                description: {
                                    type: "string",
                                    description: "The description of the permission."
                                }
                            },
                            description: "An application role-based permission.",
                            example: { description: "description", id: "id" },
                            additionalProperties: false
                        }
                    },
                    supportEmail: {
                        type: "string",
                        format: "email",
                        description: "The main support email for the application."
                    },
                    reporting: {
                        properties: {
                            apiEndpoint: {
                                type: "string",
                                description: "For applications that support analytics, this is the path of the API endpoint for queries."
                            }
                        },
                        description: "The reporting configuration for the application.",
                        example: { apiEndpoint: "apiEndpoint" },
                        additionalProperties: false
                    },
                    userNameFormat: {
                        type: "string",
                        description: "The required format for user names.",
                        default: "email"
                    }
                },
                description: "Represents a product or service available by NS8.",
                example: {
                    allowSignups: true,
                    website: "http://example.com/aeiou",
                    userNameFormat: "email",
                    description: "description",
                    minimumPrepay: 6,
                    supportEmail: "supportEmail",
                    commissions: true,
                    permissions: [
                        { description: "description", id: "id" },
                        { description: "description", id: "id" }
                    ],
                    consoleHost: "http://example.com/aeiou",
                    name: "name",
                    host: "http://example.com/aeiou",
                    id: 0,
                    reporting: { apiEndpoint: "apiEndpoint" }
                },
                additionalProperties: false
            },
            ApplicationPermission: {
                type: "object",
                required: ["description", "id"],
                properties: {
                    id: { type: "string", description: "The permission name." },
                    description: {
                        type: "string",
                        description: "The description of the permission."
                    }
                },
                description: "An application role-based permission.",
                example: { description: "description", id: "id" },
                additionalProperties: false
            },
            ApplicationReporting: {
                properties: {
                    apiEndpoint: {
                        type: "string",
                        description: "For applications that support analytics, this is the path of the API endpoint for queries."
                    }
                },
                description: "The reporting configuration for the application.",
                example: { apiEndpoint: "apiEndpoint" },
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
                            lastUpdated: "2000-01-23T04:56:07.000Z",
                            createdDate: "2000-01-23T04:56:07.000Z",
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
                            lastUpdated: "2000-01-23T04:56:07.000Z",
                            createdDate: "2000-01-23T04:56:07.000Z",
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
                    expiration: "2000-01-23T04:56:07.000Z",
                    user: {
                        firstName: "firstName",
                        lastName: "lastName",
                        lastUpdated: "2000-01-23T04:56:07.000Z",
                        createdDate: "2000-01-23T04:56:07.000Z",
                        phone: "phone",
                        timezone: "timezone",
                        name: "name",
                        id: 0,
                        email: "email",
                        status: 6
                    },
                    projectId: 6,
                    account: {
                        lastUpdated: "2000-01-23T04:56:07.000Z",
                        createdDate: "2000-01-23T04:56:07.000Z",
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
            AuthorizeParams: {
                type: "object",
                properties: {
                    accessToken: {
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
                            createdDate: "2000-01-23T04:56:07.000Z",
                            permissions: "",
                            appId: 6,
                            expiration: "2000-01-23T04:56:07.000Z",
                            id: "id",
                            type: "type",
                            userId: 0,
                            projectId: 5
                        },
                        additionalProperties: false
                    }
                },
                description: "Parameters for creating an authorization.",
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
            Payment: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The Stripe id of the payment." },
                    currency: {
                        type: "string",
                        description: "The currency of the payment."
                    },
                    created: { type: "string", format: "timestamp" },
                    status: { type: "string", description: "The Stripe status code." },
                    description: {
                        type: "string",
                        description: "The description of the payment."
                    },
                    customer_id: {
                        type: "string",
                        description: "The Stripe customer id."
                    },
                    invoice: { type: "string", description: "The Stripe invoice id." },
                    amount: {
                        type: "number",
                        description: "The discount for the account."
                    },
                    refunded: {
                        type: "boolean",
                        description: "The balance remaining for prepaid accounts."
                    },
                    amount_refunded: {
                        type: "number",
                        description: "The balance remaining for prepaid accounts."
                    }
                },
                description: "Represents a Stripe payment.",
                example: {
                    amount: 1.4658129805029452,
                    created: "created",
                    description: "description",
                    currency: "currency",
                    refunded: true,
                    id: "id",
                    invoice: "invoice",
                    customer_id: "customer_id",
                    status: "status",
                    amount_refunded: 5.962133916683182
                },
                additionalProperties: false
            },
            PaymentCard: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The id of the card." },
                    brand: { type: "string", description: "The card brand." },
                    last4: {
                        type: "string",
                        description: "The last four digits of the card."
                    },
                    exp_month: {
                        type: "integer",
                        description: "The expiration month of the card."
                    },
                    exp_year: {
                        type: "integer",
                        description: "The expiration year of the card."
                    },
                    country: { type: "string", description: "The 2-digit country code." }
                },
                description: "Represents a Stripe payment card.",
                example: {
                    last4: "last4",
                    country: "country",
                    exp_month: 1,
                    id: "id",
                    exp_year: 5,
                    brand: "brand"
                },
                additionalProperties: false
            },
            PaymentCreateParams: {
                type: "object",
                properties: {
                    amount: { type: "number", description: "The amount of the payment." },
                    description: {
                        type: "string",
                        description: "The description of the payment."
                    }
                },
                description: "Parameters for creating a payment for an account.",
                example: { amount: 0.8008281904610115, description: "description" },
                additionalProperties: false
            },
            PaymentCustomer: {
                type: "object",
                properties: {
                    default_source: {
                        type: "string",
                        description: "The default card id to use for recurring payments."
                    },
                    account_balance: {
                        type: "number",
                        description: "The remaining balance for prepaid accounts."
                    },
                    created: { type: "string", format: "timestamp" },
                    email: {
                        type: "string",
                        format: "email",
                        description: "The email of the customer."
                    },
                    discount: {
                        type: "number",
                        description: "The discount for the account."
                    },
                    currency: { type: "string", description: "The currency to use." }
                },
                description: "The Stripe payment customer associated with the payment methods.",
                example: {
                    account_balance: 0.8008281904610115,
                    default_source: "default_source",
                    created: "created",
                    discount: 6.027456183070403,
                    currency: "currency",
                    email: "email"
                },
                additionalProperties: false
            },
            PaymentHistory: {
                type: "object",
                properties: {
                    discount: {
                        type: "number",
                        description: "The discount for the account."
                    },
                    balance: {
                        type: "number",
                        description: "The balance remaining for prepaid accounts."
                    },
                    payments: {
                        type: "array",
                        description: "An array of payments.",
                        items: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "string",
                                    description: "The Stripe id of the payment."
                                },
                                currency: {
                                    type: "string",
                                    description: "The currency of the payment."
                                },
                                created: { type: "string", format: "timestamp" },
                                status: {
                                    type: "string",
                                    description: "The Stripe status code."
                                },
                                description: {
                                    type: "string",
                                    description: "The description of the payment."
                                },
                                customer_id: {
                                    type: "string",
                                    description: "The Stripe customer id."
                                },
                                invoice: {
                                    type: "string",
                                    description: "The Stripe invoice id."
                                },
                                amount: {
                                    type: "number",
                                    description: "The discount for the account."
                                },
                                refunded: {
                                    type: "boolean",
                                    description: "The balance remaining for prepaid accounts."
                                },
                                amount_refunded: {
                                    type: "number",
                                    description: "The balance remaining for prepaid accounts."
                                }
                            },
                            description: "Represents a Stripe payment.",
                            example: {
                                amount: 1.4658129805029452,
                                created: "created",
                                description: "description",
                                currency: "currency",
                                refunded: true,
                                id: "id",
                                invoice: "invoice",
                                customer_id: "customer_id",
                                status: "status",
                                amount_refunded: 5.962133916683182
                            },
                            additionalProperties: false
                        }
                    }
                },
                description: "The payment history for the account.",
                example: {
                    balance: 6.027456183070403,
                    payments: [
                        {
                            amount: 1.4658129805029452,
                            created: "created",
                            description: "description",
                            currency: "currency",
                            refunded: true,
                            id: "id",
                            invoice: "invoice",
                            customer_id: "customer_id",
                            status: "status",
                            amount_refunded: 5.962133916683182
                        },
                        {
                            amount: 1.4658129805029452,
                            created: "created",
                            description: "description",
                            currency: "currency",
                            refunded: true,
                            id: "id",
                            invoice: "invoice",
                            customer_id: "customer_id",
                            status: "status",
                            amount_refunded: 5.962133916683182
                        }
                    ],
                    discount: 0.8008281904610115
                },
                additionalProperties: false
            },
            PaymentMethodCreateParams: {
                type: "object",
                properties: {
                    stripeToken: {
                        type: "string",
                        description: "The Stripe token generated by the Stripe client API."
                    }
                },
                description: "Parameters for creating a Stripe payment method.",
                example: { stripeToken: "stripeToken" },
                additionalProperties: false
            },
            PaymentMethodPrimaryParams: {
                type: "object",
                properties: {
                    id: { type: "string", description: "The id of the payment method." }
                },
                description: "Parameters for setting the default payment method for an account.",
                example: { id: "id" },
                additionalProperties: false
            },
            PaymentMethods: {
                type: "object",
                properties: {
                    customer: {
                        type: "object",
                        properties: {
                            default_source: {
                                type: "string",
                                description: "The default card id to use for recurring payments."
                            },
                            account_balance: {
                                type: "number",
                                description: "The remaining balance for prepaid accounts."
                            },
                            created: { type: "string", format: "timestamp" },
                            email: {
                                type: "string",
                                format: "email",
                                description: "The email of the customer."
                            },
                            discount: {
                                type: "number",
                                description: "The discount for the account."
                            },
                            currency: { type: "string", description: "The currency to use." }
                        },
                        description: "The Stripe payment customer associated with the payment methods.",
                        example: {
                            account_balance: 0.8008281904610115,
                            default_source: "default_source",
                            created: "created",
                            discount: 6.027456183070403,
                            currency: "currency",
                            email: "email"
                        },
                        additionalProperties: false
                    },
                    cards: {
                        type: "array",
                        description: "An array of cards",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "string", description: "The id of the card." },
                                brand: { type: "string", description: "The card brand." },
                                last4: {
                                    type: "string",
                                    description: "The last four digits of the card."
                                },
                                exp_month: {
                                    type: "integer",
                                    description: "The expiration month of the card."
                                },
                                exp_year: {
                                    type: "integer",
                                    description: "The expiration year of the card."
                                },
                                country: {
                                    type: "string",
                                    description: "The 2-digit country code."
                                }
                            },
                            description: "Represents a Stripe payment card.",
                            example: {
                                last4: "last4",
                                country: "country",
                                exp_month: 1,
                                id: "id",
                                exp_year: 5,
                                brand: "brand"
                            },
                            additionalProperties: false
                        }
                    }
                },
                description: "The payment methods for a customer.",
                example: {
                    cards: [
                        {
                            last4: "last4",
                            country: "country",
                            exp_month: 1,
                            id: "id",
                            exp_year: 5,
                            brand: "brand"
                        },
                        {
                            last4: "last4",
                            country: "country",
                            exp_month: 1,
                            id: "id",
                            exp_year: 5,
                            brand: "brand"
                        }
                    ],
                    customer: {
                        account_balance: 0.8008281904610115,
                        default_source: "default_source",
                        created: "created",
                        discount: 6.027456183070403,
                        currency: "currency",
                        email: "email"
                    }
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
            ProjectDefaultParams: {
                type: "object",
                properties: {
                    projectId: {
                        type: "integer",
                        description: "The project id to set to the default for the account."
                    }
                },
                additionalProperties: false
            },
            ProjectPermissions: {
                type: "string",
                description: "The application-specific permissions for a shared project.",
                additionalProperties: false
            },
            ProjectShare: {
                type: "object",
                properties: {
                    appId: {
                        type: "integer",
                        description: "The application id the project is associated with."
                    },
                    accountId: {
                        type: "integer",
                        description: "The account id that created the project."
                    },
                    projectId: {
                        type: "integer",
                        description: "The project id to share."
                    },
                    userId: {
                        type: "integer",
                        description: "The id of the user the project is shared with."
                    },
                    userName: {
                        type: "string",
                        description: "The user name the project is shared with."
                    },
                    permissions: {
                        type: "string",
                        description: "The application-specific permissions for a shared project.",
                        additionalProperties: false
                    },
                    sharedByUserId: {
                        type: "integer",
                        description: "The id of the user that shared the project."
                    },
                    createdDate: {
                        type: "string",
                        format: "date-time",
                        description: "The date the project was shared.",
                        convertStringToDate: true
                    }
                },
                example: {
                    accountId: 6,
                    createdDate: "2000-01-23T04:56:07.000Z",
                    permissions: {},
                    appId: 0,
                    sharedByUserId: 5,
                    userName: "userName",
                    projectId: 1,
                    userId: 5
                },
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
                    expires: "2000-01-23T04:56:07.000Z",
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
                example: { expires: "2000-01-23T04:56:07.000Z", data: { key: "" } },
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
                    lastUpdated: "2000-01-23T04:56:07.000Z",
                    createdDate: "2000-01-23T04:56:07.000Z",
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
            UserNameParams: {
                required: ["name"],
                properties: {
                    name: { type: "string", description: "The new user name" }
                },
                example: { name: "name" },
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
            VerificationCreateParams: {
                required: ["data", "email", "templateName"],
                properties: {
                    email: {
                        type: "string",
                        format: "email",
                        description: "The email address to send the verification to."
                    },
                    templateName: {
                        type: "string",
                        description: "The internal email template name to use for the email sent."
                    },
                    data: {
                        type: "object",
                        description: "An object containing data to store with the verification.",
                        additionalProperties: true
                    }
                },
                example: {
                    data: { key: "" },
                    templateName: "templateName",
                    email: "email"
                },
                additionalProperties: false
            },
            VerificationApprovedResponse: {
                properties: {
                    data: {
                        type: "object",
                        description: "Any data sent with the validation request, like name.",
                        additionalProperties: true
                    }
                },
                example: { data: { key: "" } },
                additionalProperties: false
            },
            VerificationCreateResponse: {
                properties: {
                    key: {
                        type: "string",
                        description: "The validation key to send to the user."
                    }
                },
                example: { key: "key" },
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
    },
    Analytics: {
        swagger: "2.0",
        info: {
            description: "Query interface and application data maintenance",
            version: "2.0",
            title: "Analytics API",
            "x-namespace": "Analytics"
        },
        host: "api.ns8.com",
        basePath: "/v2",
        tags: [{ name: "Analytics", description: "Reporting and Project API." }],
        schemes: ["https"],
        paths: {
            "/analytics/script/{id}": {
                get: {
                    tags: ["Analytics"],
                    summary: "Get the tracking script for a project, return as application/javascript.",
                    produces: ["application/javascript"],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The project id to track",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The javascript for the project's tracking",
                            schema: { type: "string" }
                        }
                    }
                }
            },
            "/analytics/script/text/{id}": {
                get: {
                    tags: ["Analytics"],
                    summary: "Get the tracking script for a project, returned as text.",
                    produces: ["text/html"],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The project id to track",
                            required: true,
                            type: "integer"
                        }
                    ],
                    responses: {
                        "200": {
                            description: "The javascript for the project's tracking",
                            schema: { type: "string" }
                        }
                    }
                }
            },
            "/analytics/entities": {
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
                                                        isMetric: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
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
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
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
                                                        isMetric: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
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
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
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
                                                        isMetric: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
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
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
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
                                                        isMetric: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
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
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
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
                                                        isMetric: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
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
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
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
                                                        isMetric: { type: "boolean" }
                                                    },
                                                    example: {
                                                        isElement: true,
                                                        dataType: "dataType",
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
                                                    name: "name",
                                                    isMetric: true,
                                                    description: "description",
                                                    title: "title"
                                                },
                                                {
                                                    isElement: true,
                                                    dataType: "dataType",
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
            "/analytics/query": {
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
            "/analytics/attributes": {
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
            "/analytics/segments": {
                get: {
                    tags: ["Analytics"],
                    summary: "Get all the segments associated with an account.",
                    parameters: [
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
                    tags: ["Analytics"],
                    summary: "Create a new reporting segment.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The segment parameters",
                            required: true,
                            schema: {
                                properties: {
                                    accessToken: { type: "string" },
                                    name: { type: "string" },
                                    query: { type: "object", properties: {} },
                                    appliesTo: {
                                        type: "string",
                                        enum: ["current", "all", "list"]
                                    },
                                    projectIds: { type: "array", items: { type: "integer" } }
                                },
                                example: {
                                    query: "{}",
                                    name: "name",
                                    appliesTo: "current",
                                    projectIds: [0, 0],
                                    accessToken: "accessToken"
                                },
                                additionalProperties: false
                            }
                        }
                    ],
                    responses: {
                        "200": {
                            description: "A segment object",
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
                            description: "The segment already exists",
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
            "/analytics/segments/{id}": {
                delete: {
                    tags: ["Analytics"],
                    summary: "Delete a reporting segment.",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "The segment id",
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
            },
            "/analytics/campaignids": {
                put: {
                    tags: ["Analytics"],
                    summary: "Update the list of campaign ids for an account.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The array of campaign ids",
                            required: true,
                            schema: {
                                properties: {
                                    accessToken: { type: "string" },
                                    projectId: { type: "integer" },
                                    campaignIds: {
                                        type: "array",
                                        items: {
                                            properties: {
                                                referrer: {
                                                    type: "string",
                                                    description: "A referrer to assign a campaign to",
                                                    default: "www.mysite.com"
                                                },
                                                campaign: {
                                                    type: "string",
                                                    description: "A campaign name",
                                                    default: "MySiteCampaign"
                                                }
                                            },
                                            example: {
                                                referrer: "www.mysite.com",
                                                campaign: "MySiteCampaign"
                                            },
                                            additionalProperties: false
                                        }
                                    }
                                },
                                example: {
                                    campaignIds: [
                                        { referrer: "www.mysite.com", campaign: "MySiteCampaign" },
                                        { referrer: "www.mysite.com", campaign: "MySiteCampaign" }
                                    ],
                                    accessToken: "accessToken",
                                    projectId: 0
                                },
                                additionalProperties: false
                            }
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
            },
            "/analytics/campaignreferrers": {
                put: {
                    tags: ["Analytics"],
                    summary: "Update the list of campaign referrers for an account.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The array of campaign referrers",
                            required: true,
                            schema: {
                                properties: {
                                    accessToken: { type: "string" },
                                    projectId: { type: "integer" },
                                    campaignReferrers: {
                                        type: "array",
                                        items: { type: "string" }
                                    }
                                },
                                example: {
                                    campaignReferrers: ["campaignReferrers", "campaignReferrers"],
                                    accessToken: "accessToken",
                                    projectId: 0
                                },
                                additionalProperties: false
                            }
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
            },
            "/projects/dashboards": {
                put: {
                    tags: ["Analytics"],
                    summary: "Update the list of dashboards for an account.",
                    parameters: [
                        {
                            in: "body",
                            name: "body",
                            description: "The array of dashboards",
                            required: true,
                            schema: {
                                properties: {
                                    accessToken: { type: "string" },
                                    projectId: { type: "integer" },
                                    dashboards: {
                                        type: "array",
                                        items: {
                                            properties: {
                                                name: {
                                                    type: "string",
                                                    description: "The dashboard name"
                                                },
                                                createdDate: {
                                                    type: "string",
                                                    format: "date",
                                                    description: "The date the dashboard was created"
                                                },
                                                params: {
                                                    type: "object",
                                                    description: "The dashboard definition parameters",
                                                    properties: {}
                                                }
                                            },
                                            example: {
                                                createdDate: "2000-01-23T00:00:00.000Z",
                                                name: "name",
                                                params: "{}"
                                            },
                                            additionalProperties: false
                                        }
                                    }
                                },
                                example: {
                                    accessToken: "accessToken",
                                    projectId: 0,
                                    dashboards: [
                                        {
                                            createdDate: "2000-01-23T00:00:00.000Z",
                                            name: "name",
                                            params: "{}"
                                        },
                                        {
                                            createdDate: "2000-01-23T00:00:00.000Z",
                                            name: "name",
                                            params: "{}"
                                        }
                                    ]
                                },
                                additionalProperties: false
                            }
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
        securityDefinitions: {
            Bearer: { type: "apiKey", name: "Authorization", in: "header" }
        },
        definitions: {
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
                                isMetric: { type: "boolean" }
                            },
                            example: {
                                isElement: true,
                                dataType: "dataType",
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
                            name: "name",
                            isMetric: true,
                            description: "description",
                            title: "title"
                        },
                        {
                            isElement: true,
                            dataType: "dataType",
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
                    isMetric: { type: "boolean" }
                },
                example: {
                    isElement: true,
                    dataType: "dataType",
                    name: "name",
                    isMetric: true,
                    description: "description",
                    title: "title"
                },
                additionalProperties: false
            },
            SegmentCreateParams: {
                properties: {
                    accessToken: { type: "string" },
                    name: { type: "string" },
                    query: { type: "object", properties: {} },
                    appliesTo: { type: "string", enum: ["current", "all", "list"] },
                    projectIds: { type: "array", items: { type: "integer" } }
                },
                example: {
                    query: "{}",
                    name: "name",
                    appliesTo: "current",
                    projectIds: [0, 0],
                    accessToken: "accessToken"
                },
                additionalProperties: false
            },
            CampaignIdsUpdateParams: {
                properties: {
                    accessToken: { type: "string" },
                    projectId: { type: "integer" },
                    campaignIds: {
                        type: "array",
                        items: {
                            properties: {
                                referrer: {
                                    type: "string",
                                    description: "A referrer to assign a campaign to",
                                    default: "www.mysite.com"
                                },
                                campaign: {
                                    type: "string",
                                    description: "A campaign name",
                                    default: "MySiteCampaign"
                                }
                            },
                            example: {
                                referrer: "www.mysite.com",
                                campaign: "MySiteCampaign"
                            },
                            additionalProperties: false
                        }
                    }
                },
                example: {
                    campaignIds: [
                        { referrer: "www.mysite.com", campaign: "MySiteCampaign" },
                        { referrer: "www.mysite.com", campaign: "MySiteCampaign" }
                    ],
                    accessToken: "accessToken",
                    projectId: 0
                },
                additionalProperties: false
            },
            CampaignReferrers: {
                properties: {
                    referrer: {
                        type: "string",
                        description: "A referrer to assign a campaign to",
                        default: "www.mysite.com"
                    },
                    campaign: {
                        type: "string",
                        description: "A campaign name",
                        default: "MySiteCampaign"
                    }
                },
                example: { referrer: "www.mysite.com", campaign: "MySiteCampaign" },
                additionalProperties: false
            },
            CampaignReferrersUpdateParams: {
                properties: {
                    accessToken: { type: "string" },
                    projectId: { type: "integer" },
                    campaignReferrers: { type: "array", items: { type: "string" } }
                },
                example: {
                    campaignReferrers: ["campaignReferrers", "campaignReferrers"],
                    accessToken: "accessToken",
                    projectId: 0
                },
                additionalProperties: false
            },
            Dashboard: {
                properties: {
                    name: { type: "string", description: "The dashboard name" },
                    createdDate: {
                        type: "string",
                        format: "date",
                        description: "The date the dashboard was created"
                    },
                    params: {
                        type: "object",
                        description: "The dashboard definition parameters",
                        properties: {}
                    }
                },
                example: {
                    createdDate: "2000-01-23T00:00:00.000Z",
                    name: "name",
                    params: "{}"
                },
                additionalProperties: false
            },
            DashboardsUpdateParams: {
                properties: {
                    accessToken: { type: "string" },
                    projectId: { type: "integer" },
                    dashboards: {
                        type: "array",
                        items: {
                            properties: {
                                name: { type: "string", description: "The dashboard name" },
                                createdDate: {
                                    type: "string",
                                    format: "date",
                                    description: "The date the dashboard was created"
                                },
                                params: {
                                    type: "object",
                                    description: "The dashboard definition parameters",
                                    properties: {}
                                }
                            },
                            example: {
                                createdDate: "2000-01-23T00:00:00.000Z",
                                name: "name",
                                params: "{}"
                            },
                            additionalProperties: false
                        }
                    }
                },
                example: {
                    accessToken: "accessToken",
                    projectId: 0,
                    dashboards: [
                        {
                            createdDate: "2000-01-23T00:00:00.000Z",
                            name: "name",
                            params: "{}"
                        },
                        {
                            createdDate: "2000-01-23T00:00:00.000Z",
                            name: "name",
                            params: "{}"
                        }
                    ]
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
                                        isMetric: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
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
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
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
                                        isMetric: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
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
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
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
                                        isMetric: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
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
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
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
                                        isMetric: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
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
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
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
                                        isMetric: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
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
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
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
                                        isMetric: { type: "boolean" }
                                    },
                                    example: {
                                        isElement: true,
                                        dataType: "dataType",
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
                                    name: "name",
                                    isMetric: true,
                                    description: "description",
                                    title: "title"
                                },
                                {
                                    isElement: true,
                                    dataType: "dataType",
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
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
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
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
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
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
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
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
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
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
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
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            },
                            {
                                isElement: true,
                                dataType: "dataType",
                                name: "name",
                                isMetric: true,
                                description: "description",
                                title: "title"
                            }
                        ]
                    }
                },
                additionalProperties: false
            }
        }
    },
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
    }
};
exports.Specs = Specs;
//# sourceMappingURL=specs.js.map