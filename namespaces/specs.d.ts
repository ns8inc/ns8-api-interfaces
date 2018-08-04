declare const Specs: {
    Admin: {
        "swagger": string;
        "info": {
            "description": string;
            "version": string;
            "title": string;
            "x-namespace": string;
        };
        "host": string;
        "basePath": string;
        "tags": ({
            "name": string;
            "description"?: undefined;
        } | {
            "name": string;
            "description": string;
        })[];
        "schemes": string[];
        "produces": string[];
        "paths": {
            "/applications": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": any[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "id": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "name": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "allowSignups": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "minimumPrepay": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "description": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "host": {
                                            "type": string;
                                            "format": string;
                                            "description": string;
                                        };
                                        "website": {
                                            "type": string;
                                            "format": string;
                                            "description": string;
                                        };
                                        "consoleHost": {
                                            "type": string;
                                            "format": string;
                                            "description": string;
                                        };
                                        "commissions": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "permissions": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                                "required": string[];
                                                "properties": {
                                                    "id": {
                                                        "type": string;
                                                        "description": string;
                                                    };
                                                    "description": {
                                                        "type": string;
                                                        "description": string;
                                                    };
                                                };
                                                "description": string;
                                                "example": {
                                                    "description": string;
                                                    "id": string;
                                                };
                                                "additionalProperties": boolean;
                                            };
                                        };
                                        "supportEmail": {
                                            "type": string;
                                            "format": string;
                                            "description": string;
                                        };
                                        "reporting": {
                                            "properties": {
                                                "apiEndpoint": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                            };
                                            "description": string;
                                            "example": {
                                                "apiEndpoint": string;
                                            };
                                            "additionalProperties": boolean;
                                        };
                                        "userNameFormat": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
                                        };
                                        "data": {
                                            "type": string;
                                            "description": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                    "description": string;
                                    "example": {
                                        "allowSignups": boolean;
                                        "website": string;
                                        "userNameFormat": string;
                                        "data": {
                                            "key": string;
                                        };
                                        "description": string;
                                        "minimumPrepay": number;
                                        "supportEmail": string;
                                        "commissions": boolean;
                                        "permissions": {
                                            "description": string;
                                            "id": string;
                                        }[];
                                        "consoleHost": string;
                                        "name": string;
                                        "host": string;
                                        "id": number;
                                        "reporting": {
                                            "apiEndpoint": string;
                                        };
                                    };
                                    "additionalProperties": boolean;
                                };
                            };
                            "responseSchema": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "id": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "name": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "allowSignups": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "minimumPrepay": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "description": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "host": {
                                            "type": string;
                                            "format": string;
                                            "description": string;
                                        };
                                        "website": {
                                            "type": string;
                                            "format": string;
                                            "description": string;
                                        };
                                        "consoleHost": {
                                            "type": string;
                                            "format": string;
                                            "description": string;
                                        };
                                        "commissions": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "permissions": {
                                            "type": string;
                                            "description": string;
                                            "items": {
                                                "type": string;
                                                "required": string[];
                                                "properties": {
                                                    "id": {
                                                        "type": string;
                                                        "description": string;
                                                    };
                                                    "description": {
                                                        "type": string;
                                                        "description": string;
                                                    };
                                                };
                                                "description": string;
                                                "example": {
                                                    "description": string;
                                                    "id": string;
                                                };
                                                "additionalProperties": boolean;
                                            };
                                        };
                                        "supportEmail": {
                                            "type": string;
                                            "format": string;
                                            "description": string;
                                        };
                                        "reporting": {
                                            "properties": {
                                                "apiEndpoint": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                            };
                                            "description": string;
                                            "example": {
                                                "apiEndpoint": string;
                                            };
                                            "additionalProperties": boolean;
                                        };
                                        "userNameFormat": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
                                        };
                                        "data": {
                                            "type": string;
                                            "description": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                    "description": string;
                                    "example": {
                                        "allowSignups": boolean;
                                        "website": string;
                                        "userNameFormat": string;
                                        "data": {
                                            "key": string;
                                        };
                                        "description": string;
                                        "minimumPrepay": number;
                                        "supportEmail": string;
                                        "commissions": boolean;
                                        "permissions": {
                                            "description": string;
                                            "id": string;
                                        }[];
                                        "consoleHost": string;
                                        "name": string;
                                        "host": string;
                                        "id": number;
                                        "reporting": {
                                            "apiEndpoint": string;
                                        };
                                    };
                                    "additionalProperties": boolean;
                                };
                            };
                        };
                    };
                };
            };
            "/applications/{id}": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {};
                            "responseSchema": {};
                        };
                    };
                };
            };
            "/users": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "name": {
                                    "type": string;
                                    "description": string;
                                    "minLength": number;
                                };
                                "email": {
                                    "type": string;
                                    "format": string;
                                };
                                "password": {
                                    "type": string;
                                    "minLength": number;
                                };
                                "firstName": {
                                    "type": string;
                                };
                                "lastName": {
                                    "type": string;
                                };
                                "phone": {
                                    "type": string;
                                };
                                "timezone": {
                                    "type": string;
                                    "default": string;
                                };
                            };
                            "example": {
                                "firstName": string;
                                "lastName": string;
                                "password": string;
                                "phone": string;
                                "timezone": string;
                                "name": string;
                                "email": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "firstName": {
                                        "type": string;
                                    };
                                    "lastName": {
                                        "type": string;
                                    };
                                    "email": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "status": {
                                        "type": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                };
                                "example": {
                                    "firstName": string;
                                    "lastName": string;
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "name": string;
                                    "id": number;
                                    "email": string;
                                    "status": number;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "firstName": {
                                        "type": string;
                                    };
                                    "lastName": {
                                        "type": string;
                                    };
                                    "email": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "status": {
                                        "type": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                };
                                "example": {
                                    "firstName": string;
                                    "lastName": string;
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "name": string;
                                    "id": number;
                                    "email": string;
                                    "status": number;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "409": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "x-rate-limit": number;
                };
                "patch": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "properties": {
                                "firstName": {
                                    "type": string;
                                };
                                "lastName": {
                                    "type": string;
                                };
                                "email": {
                                    "type": string;
                                    "format": string;
                                };
                                "phone": {
                                    "type": string;
                                };
                                "timezone": {
                                    "type": string;
                                };
                            };
                            "description": string;
                            "example": {
                                "firstName": string;
                                "lastName": string;
                                "phone": string;
                                "timezone": string;
                                "email": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "firstName": {
                                        "type": string;
                                    };
                                    "lastName": {
                                        "type": string;
                                    };
                                    "email": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "status": {
                                        "type": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                };
                                "example": {
                                    "firstName": string;
                                    "lastName": string;
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "name": string;
                                    "id": number;
                                    "email": string;
                                    "status": number;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "firstName": {
                                        "type": string;
                                    };
                                    "lastName": {
                                        "type": string;
                                    };
                                    "email": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "status": {
                                        "type": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                };
                                "example": {
                                    "firstName": string;
                                    "lastName": string;
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "name": string;
                                    "id": number;
                                    "email": string;
                                    "status": number;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "409": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/users/password": {
                "put": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "oldPassword": {
                                    "type": string;
                                    "format": string;
                                    "description": string;
                                    "minLength": number;
                                };
                                "newPassword": {
                                    "type": string;
                                    "format": string;
                                    "description": string;
                                    "minLength": number;
                                };
                            };
                            "description": string;
                            "example": {
                                "oldPassword": string;
                                "newPassword": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "204": {
                            "description": string;
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/users/{id}/password": {
                "put": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "password": {
                                    "type": string;
                                    "description": string;
                                    "minLength": number;
                                };
                            };
                            "description": string;
                            "example": {
                                "password": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "204": {
                            "description": string;
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-permissions": string[];
                    "x-rate-limit": number;
                };
            };
            "/users/name/{name}": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "firstName": {
                                        "type": string;
                                    };
                                    "lastName": {
                                        "type": string;
                                    };
                                    "email": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "status": {
                                        "type": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                };
                                "example": {
                                    "firstName": string;
                                    "lastName": string;
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "name": string;
                                    "id": number;
                                    "email": string;
                                    "status": number;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "firstName": {
                                        "type": string;
                                    };
                                    "lastName": {
                                        "type": string;
                                    };
                                    "email": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "status": {
                                        "type": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                };
                                "example": {
                                    "firstName": string;
                                    "lastName": string;
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "name": string;
                                    "id": number;
                                    "email": string;
                                    "status": number;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                        };
                        "429": {
                            "description": string;
                        };
                    };
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
            };
            "/users/name": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "name": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "example": {
                                "name": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "204": {
                            "description": string;
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/accounts": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "appId": {
                                    "type": string;
                                    "description": string;
                                };
                                "userId": {
                                    "type": string;
                                    "description": string;
                                };
                                "status": {
                                    "type": string;
                                    "description": string;
                                };
                                "type": {
                                    "type": string;
                                    "description": string;
                                };
                                "partnerId": {
                                    "type": string;
                                    "description": string;
                                };
                                "discountPct": {
                                    "type": string;
                                    "description": string;
                                    "minimum": number;
                                    "maximum": number;
                                };
                            };
                            "description": string;
                            "example": {
                                "discountPct": number;
                                "appId": number;
                                "partnerId": number;
                                "type": string;
                                "userId": number;
                                "status": number;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "userId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "status": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "partnerId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "data": {
                                        "key": string;
                                    };
                                    "appId": number;
                                    "id": number;
                                    "partnerId": number;
                                    "type": string;
                                    "userId": number;
                                    "status": number;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "userId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "status": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "partnerId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "data": {
                                        "key": string;
                                    };
                                    "appId": number;
                                    "id": number;
                                    "partnerId": number;
                                    "type": string;
                                    "userId": number;
                                    "status": number;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "409": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "x-rate-limit": number;
                };
            };
            "/accounts/{id}": {
                "patch": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "properties": {
                                "status": {
                                    "type": string;
                                    "description": string;
                                };
                                "type": {
                                    "type": string;
                                    "description": string;
                                };
                                "partnerId": {
                                    "type": string;
                                    "description": string;
                                };
                                "data": {
                                    "type": string;
                                    "description": string;
                                    "additionalProperties": boolean;
                                };
                            };
                            "description": string;
                            "example": {
                                "data": {
                                    "key": string;
                                };
                                "partnerId": number;
                                "type": string;
                                "status": number;
                            };
                            "additionalProperties": boolean;
                        };
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "userId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "status": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "partnerId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "data": {
                                        "key": string;
                                    };
                                    "appId": number;
                                    "id": number;
                                    "partnerId": number;
                                    "type": string;
                                    "userId": number;
                                    "status": number;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "userId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "status": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "partnerId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "data": {
                                        "key": string;
                                    };
                                    "appId": number;
                                    "id": number;
                                    "partnerId": number;
                                    "type": string;
                                    "userId": number;
                                    "status": number;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
            };
            "/projects": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": any[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "required": string[];
                                    "properties": {
                                        "id": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "appId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "name": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "type": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "enabled": {
                                            "type": string;
                                            "description": string;
                                            "default": boolean;
                                        };
                                        "isDemo": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "implemented": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "permissions": {
                                            "type": string;
                                            "description": string;
                                            "additionalProperties": boolean;
                                        };
                                        "sharedByUserId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "data": {
                                            "type": string;
                                            "description": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                    "description": string;
                                    "example": {
                                        "accountId": number;
                                        "data": {
                                            "key": string;
                                        };
                                        "permissions": {};
                                        "appId": number;
                                        "name": string;
                                        "implemented": boolean;
                                        "sharedByUserId": number;
                                        "id": number;
                                        "type": string;
                                        "isDemo": boolean;
                                        "enabled": boolean;
                                    };
                                    "additionalProperties": boolean;
                                };
                            };
                            "responseSchema": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "required": string[];
                                    "properties": {
                                        "id": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "appId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "name": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "type": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "enabled": {
                                            "type": string;
                                            "description": string;
                                            "default": boolean;
                                        };
                                        "isDemo": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "implemented": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "permissions": {
                                            "type": string;
                                            "description": string;
                                            "additionalProperties": boolean;
                                        };
                                        "sharedByUserId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "data": {
                                            "type": string;
                                            "description": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                    "description": string;
                                    "example": {
                                        "accountId": number;
                                        "data": {
                                            "key": string;
                                        };
                                        "permissions": {};
                                        "appId": number;
                                        "name": string;
                                        "implemented": boolean;
                                        "sharedByUserId": number;
                                        "id": number;
                                        "type": string;
                                        "isDemo": boolean;
                                        "enabled": boolean;
                                    };
                                    "additionalProperties": boolean;
                                };
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                };
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "name": {
                                    "type": string;
                                };
                                "type": {
                                    "description": string;
                                };
                                "data": {
                                    "type": string;
                                    "description": string;
                                    "additionalProperties": boolean;
                                };
                            };
                            "description": string;
                            "example": {
                                "data": {
                                    "key": string;
                                };
                                "name": string;
                                "type": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "accountId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "enabled": {
                                        "type": string;
                                        "description": string;
                                        "default": boolean;
                                    };
                                    "isDemo": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "implemented": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "permissions": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                    "sharedByUserId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "data": {
                                        "key": string;
                                    };
                                    "permissions": {};
                                    "appId": number;
                                    "name": string;
                                    "implemented": boolean;
                                    "sharedByUserId": number;
                                    "id": number;
                                    "type": string;
                                    "isDemo": boolean;
                                    "enabled": boolean;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "accountId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "enabled": {
                                        "type": string;
                                        "description": string;
                                        "default": boolean;
                                    };
                                    "isDemo": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "implemented": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "permissions": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                    "sharedByUserId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "data": {
                                        "key": string;
                                    };
                                    "permissions": {};
                                    "appId": number;
                                    "name": string;
                                    "implemented": boolean;
                                    "sharedByUserId": number;
                                    "id": number;
                                    "type": string;
                                    "isDemo": boolean;
                                    "enabled": boolean;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/projects/{id}": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "accountId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "enabled": {
                                        "type": string;
                                        "description": string;
                                        "default": boolean;
                                    };
                                    "isDemo": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "implemented": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "permissions": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                    "sharedByUserId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "data": {
                                        "key": string;
                                    };
                                    "permissions": {};
                                    "appId": number;
                                    "name": string;
                                    "implemented": boolean;
                                    "sharedByUserId": number;
                                    "id": number;
                                    "type": string;
                                    "isDemo": boolean;
                                    "enabled": boolean;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "accountId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "enabled": {
                                        "type": string;
                                        "description": string;
                                        "default": boolean;
                                    };
                                    "isDemo": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "implemented": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "permissions": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                    "sharedByUserId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "data": {
                                        "key": string;
                                    };
                                    "permissions": {};
                                    "appId": number;
                                    "name": string;
                                    "implemented": boolean;
                                    "sharedByUserId": number;
                                    "id": number;
                                    "type": string;
                                    "isDemo": boolean;
                                    "enabled": boolean;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                };
                "delete": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "204": {
                            "description": string;
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                };
                "patch": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "properties": {
                                "name": {
                                    "type": string;
                                };
                                "enabled": {
                                    "type": string;
                                };
                                "type": {
                                    "type": string;
                                };
                                "implemented": {
                                    "type": string;
                                };
                                "data": {
                                    "type": string;
                                    "additionalProperties": boolean;
                                };
                            };
                            "description": string;
                            "example": {
                                "data": {
                                    "key": string;
                                };
                                "name": string;
                                "implemented": boolean;
                                "type": string;
                                "enabled": boolean;
                            };
                            "additionalProperties": boolean;
                        };
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "accountId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "enabled": {
                                        "type": string;
                                        "description": string;
                                        "default": boolean;
                                    };
                                    "isDemo": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "implemented": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "permissions": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                    "sharedByUserId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "data": {
                                        "key": string;
                                    };
                                    "permissions": {};
                                    "appId": number;
                                    "name": string;
                                    "implemented": boolean;
                                    "sharedByUserId": number;
                                    "id": number;
                                    "type": string;
                                    "isDemo": boolean;
                                    "enabled": boolean;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "accountId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "name": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "enabled": {
                                        "type": string;
                                        "description": string;
                                        "default": boolean;
                                    };
                                    "isDemo": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "implemented": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "permissions": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                    "sharedByUserId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "data": {
                                        "key": string;
                                    };
                                    "permissions": {};
                                    "appId": number;
                                    "name": string;
                                    "implemented": boolean;
                                    "sharedByUserId": number;
                                    "id": number;
                                    "type": string;
                                    "isDemo": boolean;
                                    "enabled": boolean;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/project-shares": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": any[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "appId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "projectId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "userName": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "permissions": {
                                            "type": string;
                                            "description": string;
                                            "additionalProperties": boolean;
                                        };
                                        "sharedByUserId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "createdDate": {
                                            "type": string;
                                            "format": string;
                                            "description": string;
                                            "convertStringToDate": boolean;
                                        };
                                    };
                                    "example": {
                                        "accountId": number;
                                        "createdDate": string;
                                        "permissions": {};
                                        "appId": number;
                                        "sharedByUserId": number;
                                        "userName": string;
                                        "projectId": number;
                                        "userId": number;
                                    };
                                    "additionalProperties": boolean;
                                };
                            };
                            "responseSchema": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "properties": {
                                        "appId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "accountId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "projectId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "userId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "userName": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "permissions": {
                                            "type": string;
                                            "description": string;
                                            "additionalProperties": boolean;
                                        };
                                        "sharedByUserId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "createdDate": {
                                            "type": string;
                                            "format": string;
                                            "description": string;
                                            "convertStringToDate": boolean;
                                        };
                                    };
                                    "example": {
                                        "accountId": number;
                                        "createdDate": string;
                                        "permissions": {};
                                        "appId": number;
                                        "sharedByUserId": number;
                                        "userName": string;
                                        "projectId": number;
                                        "userId": number;
                                    };
                                    "additionalProperties": boolean;
                                };
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/access-tokens": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "description": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "name": {
                                    "type": string;
                                };
                                "password": {
                                    "type": string;
                                };
                                "appId": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "description": string;
                            "example": {
                                "password": string;
                                "appId": number;
                                "name": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "userId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "accountId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "projectId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "permissions": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "expiration": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "adminMode": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "createdDate": string;
                                    "permissions": string;
                                    "appId": number;
                                    "adminMode": boolean;
                                    "expiration": string;
                                    "id": string;
                                    "type": string;
                                    "userId": number;
                                    "projectId": number;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "userId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "appId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "accountId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "projectId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "permissions": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "expiration": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "adminMode": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "createdDate": string;
                                    "permissions": string;
                                    "appId": number;
                                    "adminMode": boolean;
                                    "expiration": string;
                                    "id": string;
                                    "type": string;
                                    "userId": number;
                                    "projectId": number;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "x-rate-limit": number;
                };
            };
            "/authorizations": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "description": string;
                    "parameters": any[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "properties": {
                                    "user": {
                                        "type": string;
                                        "required": string[];
                                        "properties": {
                                            "id": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "name": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "firstName": {
                                                "type": string;
                                            };
                                            "lastName": {
                                                "type": string;
                                            };
                                            "email": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                            };
                                            "status": {
                                                "type": string;
                                            };
                                            "createdDate": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                                "convertStringToDate": boolean;
                                            };
                                            "lastUpdated": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                                "convertStringToDate": boolean;
                                            };
                                        };
                                        "example": {
                                            "firstName": string;
                                            "lastName": string;
                                            "lastUpdated": string;
                                            "createdDate": string;
                                            "name": string;
                                            "id": number;
                                            "email": string;
                                            "status": number;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                    "account": {
                                        "type": string;
                                        "required": string[];
                                        "properties": {
                                            "id": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "userId": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "appId": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "status": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "createdDate": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                                "convertStringToDate": boolean;
                                            };
                                            "lastUpdated": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                                "convertStringToDate": boolean;
                                            };
                                            "type": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "partnerId": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "data": {
                                                "type": string;
                                                "description": string;
                                                "additionalProperties": boolean;
                                            };
                                        };
                                        "description": string;
                                        "example": {
                                            "lastUpdated": string;
                                            "createdDate": string;
                                            "data": {
                                                "key": string;
                                            };
                                            "appId": number;
                                            "id": number;
                                            "partnerId": number;
                                            "type": string;
                                            "userId": number;
                                            "status": number;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                    "projects": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                            "required": string[];
                                            "properties": {
                                                "id": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "accountId": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "appId": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "type": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "enabled": {
                                                    "type": string;
                                                    "description": string;
                                                    "default": boolean;
                                                };
                                                "isDemo": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "implemented": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "permissions": {
                                                    "type": string;
                                                    "description": string;
                                                    "additionalProperties": boolean;
                                                };
                                                "sharedByUserId": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "data": {
                                                    "type": string;
                                                    "description": string;
                                                    "additionalProperties": boolean;
                                                };
                                            };
                                            "description": string;
                                            "example": {
                                                "accountId": number;
                                                "data": {
                                                    "key": string;
                                                };
                                                "permissions": {};
                                                "appId": number;
                                                "name": string;
                                                "implemented": boolean;
                                                "sharedByUserId": number;
                                                "id": number;
                                                "type": string;
                                                "isDemo": boolean;
                                                "enabled": boolean;
                                            };
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "example": {
                                    "projects": {
                                        "accountId": number;
                                        "data": {
                                            "key": string;
                                        };
                                        "permissions": {};
                                        "appId": number;
                                        "name": string;
                                        "implemented": boolean;
                                        "sharedByUserId": number;
                                        "id": number;
                                        "type": string;
                                        "isDemo": boolean;
                                        "enabled": boolean;
                                    }[];
                                    "user": {
                                        "firstName": string;
                                        "lastName": string;
                                        "lastUpdated": string;
                                        "createdDate": string;
                                        "name": string;
                                        "id": number;
                                        "email": string;
                                        "status": number;
                                    };
                                    "account": {
                                        "lastUpdated": string;
                                        "createdDate": string;
                                        "data": {
                                            "key": string;
                                        };
                                        "appId": number;
                                        "id": number;
                                        "partnerId": number;
                                        "type": string;
                                        "userId": number;
                                        "status": number;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "properties": {
                                    "user": {
                                        "type": string;
                                        "required": string[];
                                        "properties": {
                                            "id": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "name": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "firstName": {
                                                "type": string;
                                            };
                                            "lastName": {
                                                "type": string;
                                            };
                                            "email": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                            };
                                            "status": {
                                                "type": string;
                                            };
                                            "createdDate": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                                "convertStringToDate": boolean;
                                            };
                                            "lastUpdated": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                                "convertStringToDate": boolean;
                                            };
                                        };
                                        "example": {
                                            "firstName": string;
                                            "lastName": string;
                                            "lastUpdated": string;
                                            "createdDate": string;
                                            "name": string;
                                            "id": number;
                                            "email": string;
                                            "status": number;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                    "account": {
                                        "type": string;
                                        "required": string[];
                                        "properties": {
                                            "id": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "userId": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "appId": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "status": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "createdDate": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                                "convertStringToDate": boolean;
                                            };
                                            "lastUpdated": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                                "convertStringToDate": boolean;
                                            };
                                            "type": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "partnerId": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "data": {
                                                "type": string;
                                                "description": string;
                                                "additionalProperties": boolean;
                                            };
                                        };
                                        "description": string;
                                        "example": {
                                            "lastUpdated": string;
                                            "createdDate": string;
                                            "data": {
                                                "key": string;
                                            };
                                            "appId": number;
                                            "id": number;
                                            "partnerId": number;
                                            "type": string;
                                            "userId": number;
                                            "status": number;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                    "projects": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                            "required": string[];
                                            "properties": {
                                                "id": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "accountId": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "appId": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "type": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "enabled": {
                                                    "type": string;
                                                    "description": string;
                                                    "default": boolean;
                                                };
                                                "isDemo": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "implemented": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "permissions": {
                                                    "type": string;
                                                    "description": string;
                                                    "additionalProperties": boolean;
                                                };
                                                "sharedByUserId": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "data": {
                                                    "type": string;
                                                    "description": string;
                                                    "additionalProperties": boolean;
                                                };
                                            };
                                            "description": string;
                                            "example": {
                                                "accountId": number;
                                                "data": {
                                                    "key": string;
                                                };
                                                "permissions": {};
                                                "appId": number;
                                                "name": string;
                                                "implemented": boolean;
                                                "sharedByUserId": number;
                                                "id": number;
                                                "type": string;
                                                "isDemo": boolean;
                                                "enabled": boolean;
                                            };
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "example": {
                                    "projects": {
                                        "accountId": number;
                                        "data": {
                                            "key": string;
                                        };
                                        "permissions": {};
                                        "appId": number;
                                        "name": string;
                                        "implemented": boolean;
                                        "sharedByUserId": number;
                                        "id": number;
                                        "type": string;
                                        "isDemo": boolean;
                                        "enabled": boolean;
                                    }[];
                                    "user": {
                                        "firstName": string;
                                        "lastName": string;
                                        "lastUpdated": string;
                                        "createdDate": string;
                                        "name": string;
                                        "id": number;
                                        "email": string;
                                        "status": number;
                                    };
                                    "account": {
                                        "lastUpdated": string;
                                        "createdDate": string;
                                        "data": {
                                            "key": string;
                                        };
                                        "appId": number;
                                        "id": number;
                                        "partnerId": number;
                                        "type": string;
                                        "userId": number;
                                        "status": number;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "x-rate-limit": number;
                };
            };
            "/notifications": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "email": {
                                    "type": string;
                                    "format": string;
                                    "description": string;
                                };
                                "templateName": {
                                    "type": string;
                                    "description": string;
                                };
                                "templateData": {
                                    "type": string;
                                    "description": string;
                                    "additionalProperties": boolean;
                                };
                            };
                            "description": string;
                            "example": {
                                "templateName": string;
                                "templateData": {
                                    "key": string;
                                };
                                "email": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "204": {
                            "description": string;
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-permissions": string[];
                };
            };
            "/stash": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "expires": {
                                    "type": string;
                                    "format": string;
                                    "description": string;
                                    "convertStringToDate": boolean;
                                };
                                "data": {
                                    "type": string;
                                    "description": string;
                                    "additionalProperties": boolean;
                                };
                            };
                            "description": string;
                            "example": {
                                "expires": string;
                                "data": {
                                    "key": string;
                                };
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "expires": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "expires": string;
                                    "data": {
                                        "key": string;
                                    };
                                    "id": string;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "expires": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "expires": string;
                                    "data": {
                                        "key": string;
                                    };
                                    "id": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
            };
            "/stash/{id}": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "expires": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "expires": string;
                                    "data": {
                                        "key": string;
                                    };
                                    "id": string;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "expires": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                        "convertStringToDate": boolean;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "expires": string;
                                    "data": {
                                        "key": string;
                                    };
                                    "id": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-permissions": string[];
                    "x-rate-limit": number;
                };
            };
            "/verifications": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "email": {
                                    "type": string;
                                    "format": string;
                                    "description": string;
                                };
                                "templateName": {
                                    "type": string;
                                    "description": string;
                                };
                                "data": {
                                    "type": string;
                                    "description": string;
                                    "additionalProperties": boolean;
                                };
                            };
                            "example": {
                                "data": {
                                    "key": string;
                                };
                                "templateName": string;
                                "email": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "key": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                                "example": {
                                    "key": string;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "properties": {
                                    "key": {
                                        "type": string;
                                        "description": string;
                                    };
                                };
                                "example": {
                                    "key": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "x-rate-limit": number;
                };
            };
            "/verifications/{key}": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "data": {
                                        "key": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "properties": {
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "data": {
                                        "key": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "404": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "x-rate-limit": number;
                };
            };
            "/payments/methods": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": any[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "properties": {
                                    "customer": {
                                        "type": string;
                                        "properties": {
                                            "default_source": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "account_balance": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "created": {
                                                "type": string;
                                                "format": string;
                                            };
                                            "email": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                            };
                                            "discount": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "currency": {
                                                "type": string;
                                                "description": string;
                                            };
                                        };
                                        "description": string;
                                        "example": {
                                            "account_balance": number;
                                            "default_source": string;
                                            "created": string;
                                            "discount": number;
                                            "currency": string;
                                            "email": string;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                    "cards": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "id": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "brand": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "last4": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "exp_month": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "exp_year": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "country": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                            };
                                            "description": string;
                                            "example": {
                                                "last4": string;
                                                "country": string;
                                                "exp_month": number;
                                                "id": string;
                                                "exp_year": number;
                                                "brand": string;
                                            };
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "example": {
                                    "cards": {
                                        "last4": string;
                                        "country": string;
                                        "exp_month": number;
                                        "id": string;
                                        "exp_year": number;
                                        "brand": string;
                                    }[];
                                    "customer": {
                                        "account_balance": number;
                                        "default_source": string;
                                        "created": string;
                                        "discount": number;
                                        "currency": string;
                                        "email": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "properties": {
                                    "customer": {
                                        "type": string;
                                        "properties": {
                                            "default_source": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "account_balance": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "created": {
                                                "type": string;
                                                "format": string;
                                            };
                                            "email": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                            };
                                            "discount": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "currency": {
                                                "type": string;
                                                "description": string;
                                            };
                                        };
                                        "description": string;
                                        "example": {
                                            "account_balance": number;
                                            "default_source": string;
                                            "created": string;
                                            "discount": number;
                                            "currency": string;
                                            "email": string;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                    "cards": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "id": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "brand": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "last4": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "exp_month": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "exp_year": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "country": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                            };
                                            "description": string;
                                            "example": {
                                                "last4": string;
                                                "country": string;
                                                "exp_month": number;
                                                "id": string;
                                                "exp_year": number;
                                                "brand": string;
                                            };
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "example": {
                                    "cards": {
                                        "last4": string;
                                        "country": string;
                                        "exp_month": number;
                                        "id": string;
                                        "exp_year": number;
                                        "brand": string;
                                    }[];
                                    "customer": {
                                        "account_balance": number;
                                        "default_source": string;
                                        "created": string;
                                        "discount": number;
                                        "currency": string;
                                        "email": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "properties": {
                                "stripeToken": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "description": string;
                            "example": {
                                "stripeToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "204": {
                            "description": string;
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
            };
            "/payments/methods/{id}": {
                "delete": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "204": {
                            "description": string;
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
            };
            "/payments/methods/primary": {
                "put": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "properties": {
                                "id": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "description": string;
                            "example": {
                                "id": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "204": {
                            "description": string;
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
            };
            "/payments": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": any[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "properties": {
                                    "discount": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "balance": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "payments": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "id": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "currency": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "created": {
                                                    "type": string;
                                                    "format": string;
                                                };
                                                "status": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "description": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "customer_id": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "invoice": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "amount": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "refunded": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "amount_refunded": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                            };
                                            "description": string;
                                            "example": {
                                                "amount": number;
                                                "created": string;
                                                "description": string;
                                                "currency": string;
                                                "refunded": boolean;
                                                "id": string;
                                                "invoice": string;
                                                "customer_id": string;
                                                "status": string;
                                                "amount_refunded": number;
                                            };
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "example": {
                                    "balance": number;
                                    "payments": {
                                        "amount": number;
                                        "created": string;
                                        "description": string;
                                        "currency": string;
                                        "refunded": boolean;
                                        "id": string;
                                        "invoice": string;
                                        "customer_id": string;
                                        "status": string;
                                        "amount_refunded": number;
                                    }[];
                                    "discount": number;
                                };
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "properties": {
                                    "discount": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "balance": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "payments": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                            "properties": {
                                                "id": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "currency": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "created": {
                                                    "type": string;
                                                    "format": string;
                                                };
                                                "status": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "description": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "customer_id": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "invoice": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "amount": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "refunded": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "amount_refunded": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                            };
                                            "description": string;
                                            "example": {
                                                "amount": number;
                                                "created": string;
                                                "description": string;
                                                "currency": string;
                                                "refunded": boolean;
                                                "id": string;
                                                "invoice": string;
                                                "customer_id": string;
                                                "status": string;
                                                "amount_refunded": number;
                                            };
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "example": {
                                    "balance": number;
                                    "payments": {
                                        "amount": number;
                                        "created": string;
                                        "description": string;
                                        "currency": string;
                                        "refunded": boolean;
                                        "id": string;
                                        "invoice": string;
                                        "customer_id": string;
                                        "status": string;
                                        "amount_refunded": number;
                                    }[];
                                    "discount": number;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "properties": {
                                "amount": {
                                    "type": string;
                                    "description": string;
                                };
                                "description": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "description": string;
                            "example": {
                                "amount": number;
                                "description": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "204": {
                            "description": string;
                        };
                        "400": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "401": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "429": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                            "responseSchema": {
                                "type": string;
                                "required": string[];
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "message": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "errors": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "required": string[];
                                            "properties": {
                                                "name": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "code": {
                                                    "type": string;
                                                };
                                                "message": {
                                                    "type": string;
                                                };
                                            };
                                            "type": string;
                                            "additionalProperties": boolean;
                                        };
                                    };
                                };
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                    "x-permissions": string[];
                };
            };
        };
        "securityDefinitions": {
            "Bearer": {
                "type": string;
                "name": string;
                "in": string;
            };
        };
        "definitions": {
            "AccessToken": {
                "required": string[];
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                    "userId": {
                        "type": string;
                        "description": string;
                    };
                    "appId": {
                        "type": string;
                        "description": string;
                    };
                    "accountId": {
                        "type": string;
                        "description": string;
                    };
                    "projectId": {
                        "type": string;
                        "description": string;
                    };
                    "permissions": {
                        "type": string;
                        "description": string;
                        "items": {
                            "type": string;
                        };
                        "additionalProperties": boolean;
                    };
                    "type": {
                        "type": string;
                        "description": string;
                    };
                    "createdDate": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "convertStringToDate": boolean;
                    };
                    "expiration": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "convertStringToDate": boolean;
                    };
                    "adminMode": {
                        "type": string;
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "accountId": number;
                    "createdDate": string;
                    "permissions": string;
                    "appId": number;
                    "adminMode": boolean;
                    "expiration": string;
                    "id": string;
                    "type": string;
                    "userId": number;
                    "projectId": number;
                };
                "additionalProperties": boolean;
            };
            "AccessTokenCreateParams": {
                "type": string;
                "required": string[];
                "properties": {
                    "name": {
                        "type": string;
                    };
                    "password": {
                        "type": string;
                    };
                    "appId": {
                        "type": string;
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "password": string;
                    "appId": number;
                    "name": string;
                };
                "additionalProperties": boolean;
            };
            "MFACreateParams": {
                "required": string[];
                "properties": {
                    "email": {
                        "type": string;
                        "format": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "MFAUpdateParams": {
                "required": string[];
                "properties": {
                    "password": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "minLength": number;
                    };
                };
                "additionalProperties": boolean;
            };
            "Account": {
                "type": string;
                "required": string[];
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                    "userId": {
                        "type": string;
                        "description": string;
                    };
                    "appId": {
                        "type": string;
                        "description": string;
                    };
                    "status": {
                        "type": string;
                        "description": string;
                    };
                    "createdDate": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "convertStringToDate": boolean;
                    };
                    "lastUpdated": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "convertStringToDate": boolean;
                    };
                    "type": {
                        "type": string;
                        "description": string;
                    };
                    "partnerId": {
                        "type": string;
                        "description": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                };
                "description": string;
                "example": {
                    "lastUpdated": string;
                    "createdDate": string;
                    "data": {
                        "key": string;
                    };
                    "appId": number;
                    "id": number;
                    "partnerId": number;
                    "type": string;
                    "userId": number;
                    "status": number;
                };
                "additionalProperties": boolean;
            };
            "AccountCreateParams": {
                "type": string;
                "required": string[];
                "properties": {
                    "appId": {
                        "type": string;
                        "description": string;
                    };
                    "userId": {
                        "type": string;
                        "description": string;
                    };
                    "status": {
                        "type": string;
                        "description": string;
                    };
                    "type": {
                        "type": string;
                        "description": string;
                    };
                    "partnerId": {
                        "type": string;
                        "description": string;
                    };
                    "discountPct": {
                        "type": string;
                        "description": string;
                        "minimum": number;
                        "maximum": number;
                    };
                };
                "description": string;
                "example": {
                    "discountPct": number;
                    "appId": number;
                    "partnerId": number;
                    "type": string;
                    "userId": number;
                    "status": number;
                };
                "additionalProperties": boolean;
            };
            "AccountUpdateParams": {
                "type": string;
                "properties": {
                    "status": {
                        "type": string;
                        "description": string;
                    };
                    "type": {
                        "type": string;
                        "description": string;
                    };
                    "partnerId": {
                        "type": string;
                        "description": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                };
                "description": string;
                "example": {
                    "data": {
                        "key": string;
                    };
                    "partnerId": number;
                    "type": string;
                    "status": number;
                };
                "additionalProperties": boolean;
            };
            "Application": {
                "type": string;
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                    "name": {
                        "type": string;
                        "description": string;
                    };
                    "allowSignups": {
                        "type": string;
                        "description": string;
                    };
                    "minimumPrepay": {
                        "type": string;
                        "description": string;
                    };
                    "description": {
                        "type": string;
                        "description": string;
                    };
                    "host": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "website": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "consoleHost": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "commissions": {
                        "type": string;
                        "description": string;
                    };
                    "permissions": {
                        "type": string;
                        "description": string;
                        "items": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "id": {
                                    "type": string;
                                    "description": string;
                                };
                                "description": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "description": string;
                            "example": {
                                "description": string;
                                "id": string;
                            };
                            "additionalProperties": boolean;
                        };
                    };
                    "supportEmail": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "reporting": {
                        "properties": {
                            "apiEndpoint": {
                                "type": string;
                                "description": string;
                            };
                        };
                        "description": string;
                        "example": {
                            "apiEndpoint": string;
                        };
                        "additionalProperties": boolean;
                    };
                    "userNameFormat": {
                        "type": string;
                        "description": string;
                        "default": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                };
                "description": string;
                "example": {
                    "allowSignups": boolean;
                    "website": string;
                    "userNameFormat": string;
                    "data": {
                        "key": string;
                    };
                    "description": string;
                    "minimumPrepay": number;
                    "supportEmail": string;
                    "commissions": boolean;
                    "permissions": {
                        "description": string;
                        "id": string;
                    }[];
                    "consoleHost": string;
                    "name": string;
                    "host": string;
                    "id": number;
                    "reporting": {
                        "apiEndpoint": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "ApplicationPermission": {
                "type": string;
                "required": string[];
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                    "description": {
                        "type": string;
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "description": string;
                    "id": string;
                };
                "additionalProperties": boolean;
            };
            "ApplicationReporting": {
                "properties": {
                    "apiEndpoint": {
                        "type": string;
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "apiEndpoint": string;
                };
                "additionalProperties": boolean;
            };
            "Authorization": {
                "type": string;
                "properties": {
                    "user": {
                        "type": string;
                        "required": string[];
                        "properties": {
                            "id": {
                                "type": string;
                                "description": string;
                            };
                            "name": {
                                "type": string;
                                "description": string;
                            };
                            "firstName": {
                                "type": string;
                            };
                            "lastName": {
                                "type": string;
                            };
                            "email": {
                                "type": string;
                                "format": string;
                                "description": string;
                            };
                            "status": {
                                "type": string;
                            };
                            "createdDate": {
                                "type": string;
                                "format": string;
                                "description": string;
                                "convertStringToDate": boolean;
                            };
                            "lastUpdated": {
                                "type": string;
                                "format": string;
                                "description": string;
                                "convertStringToDate": boolean;
                            };
                        };
                        "example": {
                            "firstName": string;
                            "lastName": string;
                            "lastUpdated": string;
                            "createdDate": string;
                            "name": string;
                            "id": number;
                            "email": string;
                            "status": number;
                        };
                        "additionalProperties": boolean;
                    };
                    "account": {
                        "type": string;
                        "required": string[];
                        "properties": {
                            "id": {
                                "type": string;
                                "description": string;
                            };
                            "userId": {
                                "type": string;
                                "description": string;
                            };
                            "appId": {
                                "type": string;
                                "description": string;
                            };
                            "status": {
                                "type": string;
                                "description": string;
                            };
                            "createdDate": {
                                "type": string;
                                "format": string;
                                "description": string;
                                "convertStringToDate": boolean;
                            };
                            "lastUpdated": {
                                "type": string;
                                "format": string;
                                "description": string;
                                "convertStringToDate": boolean;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                            "partnerId": {
                                "type": string;
                                "description": string;
                            };
                            "data": {
                                "type": string;
                                "description": string;
                                "additionalProperties": boolean;
                            };
                        };
                        "description": string;
                        "example": {
                            "lastUpdated": string;
                            "createdDate": string;
                            "data": {
                                "key": string;
                            };
                            "appId": number;
                            "id": number;
                            "partnerId": number;
                            "type": string;
                            "userId": number;
                            "status": number;
                        };
                        "additionalProperties": boolean;
                    };
                    "projects": {
                        "type": string;
                        "description": string;
                        "items": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "id": {
                                    "type": string;
                                    "description": string;
                                };
                                "accountId": {
                                    "type": string;
                                    "description": string;
                                };
                                "appId": {
                                    "type": string;
                                    "description": string;
                                };
                                "name": {
                                    "type": string;
                                    "description": string;
                                };
                                "type": {
                                    "type": string;
                                    "description": string;
                                };
                                "enabled": {
                                    "type": string;
                                    "description": string;
                                    "default": boolean;
                                };
                                "isDemo": {
                                    "type": string;
                                    "description": string;
                                };
                                "implemented": {
                                    "type": string;
                                    "description": string;
                                };
                                "permissions": {
                                    "type": string;
                                    "description": string;
                                    "additionalProperties": boolean;
                                };
                                "sharedByUserId": {
                                    "type": string;
                                    "description": string;
                                };
                                "data": {
                                    "type": string;
                                    "description": string;
                                    "additionalProperties": boolean;
                                };
                            };
                            "description": string;
                            "example": {
                                "accountId": number;
                                "data": {
                                    "key": string;
                                };
                                "permissions": {};
                                "appId": number;
                                "name": string;
                                "implemented": boolean;
                                "sharedByUserId": number;
                                "id": number;
                                "type": string;
                                "isDemo": boolean;
                                "enabled": boolean;
                            };
                            "additionalProperties": boolean;
                        };
                    };
                };
                "description": string;
                "example": {
                    "projects": {
                        "accountId": number;
                        "data": {
                            "key": string;
                        };
                        "permissions": {};
                        "appId": number;
                        "name": string;
                        "implemented": boolean;
                        "sharedByUserId": number;
                        "id": number;
                        "type": string;
                        "isDemo": boolean;
                        "enabled": boolean;
                    }[];
                    "user": {
                        "firstName": string;
                        "lastName": string;
                        "lastUpdated": string;
                        "createdDate": string;
                        "name": string;
                        "id": number;
                        "email": string;
                        "status": number;
                    };
                    "account": {
                        "lastUpdated": string;
                        "createdDate": string;
                        "data": {
                            "key": string;
                        };
                        "appId": number;
                        "id": number;
                        "partnerId": number;
                        "type": string;
                        "userId": number;
                        "status": number;
                    };
                };
                "additionalProperties": boolean;
            };
            "AuthorizeParams": {
                "type": string;
                "properties": {
                    "accessToken": {
                        "required": string[];
                        "properties": {
                            "id": {
                                "type": string;
                                "description": string;
                            };
                            "userId": {
                                "type": string;
                                "description": string;
                            };
                            "appId": {
                                "type": string;
                                "description": string;
                            };
                            "accountId": {
                                "type": string;
                                "description": string;
                            };
                            "projectId": {
                                "type": string;
                                "description": string;
                            };
                            "permissions": {
                                "type": string;
                                "description": string;
                                "items": {
                                    "type": string;
                                };
                                "additionalProperties": boolean;
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                            "createdDate": {
                                "type": string;
                                "format": string;
                                "description": string;
                                "convertStringToDate": boolean;
                            };
                            "expiration": {
                                "type": string;
                                "format": string;
                                "description": string;
                                "convertStringToDate": boolean;
                            };
                            "adminMode": {
                                "type": string;
                                "description": string;
                            };
                        };
                        "description": string;
                        "example": {
                            "accountId": number;
                            "createdDate": string;
                            "permissions": string;
                            "appId": number;
                            "adminMode": boolean;
                            "expiration": string;
                            "id": string;
                            "type": string;
                            "userId": number;
                            "projectId": number;
                        };
                        "additionalProperties": boolean;
                    };
                };
                "description": string;
                "additionalProperties": boolean;
            };
            "Notification": {
                "type": string;
                "required": string[];
                "properties": {
                    "email": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "templateName": {
                        "type": string;
                        "description": string;
                    };
                    "templateData": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                };
                "description": string;
                "example": {
                    "templateName": string;
                    "templateData": {
                        "key": string;
                    };
                    "email": string;
                };
                "additionalProperties": boolean;
            };
            "PasswordChangeParams": {
                "type": string;
                "required": string[];
                "properties": {
                    "oldPassword": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "minLength": number;
                    };
                    "newPassword": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "minLength": number;
                    };
                };
                "description": string;
                "example": {
                    "oldPassword": string;
                    "newPassword": string;
                };
                "additionalProperties": boolean;
            };
            "UpdatePasswordParams": {
                "type": string;
                "required": string[];
                "properties": {
                    "password": {
                        "type": string;
                        "description": string;
                        "minLength": number;
                    };
                };
                "description": string;
                "example": {
                    "password": string;
                };
                "additionalProperties": boolean;
            };
            "Payment": {
                "type": string;
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                    "currency": {
                        "type": string;
                        "description": string;
                    };
                    "created": {
                        "type": string;
                        "format": string;
                    };
                    "status": {
                        "type": string;
                        "description": string;
                    };
                    "description": {
                        "type": string;
                        "description": string;
                    };
                    "customer_id": {
                        "type": string;
                        "description": string;
                    };
                    "invoice": {
                        "type": string;
                        "description": string;
                    };
                    "amount": {
                        "type": string;
                        "description": string;
                    };
                    "refunded": {
                        "type": string;
                        "description": string;
                    };
                    "amount_refunded": {
                        "type": string;
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "amount": number;
                    "created": string;
                    "description": string;
                    "currency": string;
                    "refunded": boolean;
                    "id": string;
                    "invoice": string;
                    "customer_id": string;
                    "status": string;
                    "amount_refunded": number;
                };
                "additionalProperties": boolean;
            };
            "PaymentCard": {
                "type": string;
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                    "brand": {
                        "type": string;
                        "description": string;
                    };
                    "last4": {
                        "type": string;
                        "description": string;
                    };
                    "exp_month": {
                        "type": string;
                        "description": string;
                    };
                    "exp_year": {
                        "type": string;
                        "description": string;
                    };
                    "country": {
                        "type": string;
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "last4": string;
                    "country": string;
                    "exp_month": number;
                    "id": string;
                    "exp_year": number;
                    "brand": string;
                };
                "additionalProperties": boolean;
            };
            "PaymentCreateParams": {
                "type": string;
                "properties": {
                    "amount": {
                        "type": string;
                        "description": string;
                    };
                    "description": {
                        "type": string;
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "amount": number;
                    "description": string;
                };
                "additionalProperties": boolean;
            };
            "PaymentCustomer": {
                "type": string;
                "properties": {
                    "default_source": {
                        "type": string;
                        "description": string;
                    };
                    "account_balance": {
                        "type": string;
                        "description": string;
                    };
                    "created": {
                        "type": string;
                        "format": string;
                    };
                    "email": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "discount": {
                        "type": string;
                        "description": string;
                    };
                    "currency": {
                        "type": string;
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "account_balance": number;
                    "default_source": string;
                    "created": string;
                    "discount": number;
                    "currency": string;
                    "email": string;
                };
                "additionalProperties": boolean;
            };
            "PaymentHistory": {
                "type": string;
                "properties": {
                    "discount": {
                        "type": string;
                        "description": string;
                    };
                    "balance": {
                        "type": string;
                        "description": string;
                    };
                    "payments": {
                        "type": string;
                        "description": string;
                        "items": {
                            "type": string;
                            "properties": {
                                "id": {
                                    "type": string;
                                    "description": string;
                                };
                                "currency": {
                                    "type": string;
                                    "description": string;
                                };
                                "created": {
                                    "type": string;
                                    "format": string;
                                };
                                "status": {
                                    "type": string;
                                    "description": string;
                                };
                                "description": {
                                    "type": string;
                                    "description": string;
                                };
                                "customer_id": {
                                    "type": string;
                                    "description": string;
                                };
                                "invoice": {
                                    "type": string;
                                    "description": string;
                                };
                                "amount": {
                                    "type": string;
                                    "description": string;
                                };
                                "refunded": {
                                    "type": string;
                                    "description": string;
                                };
                                "amount_refunded": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "description": string;
                            "example": {
                                "amount": number;
                                "created": string;
                                "description": string;
                                "currency": string;
                                "refunded": boolean;
                                "id": string;
                                "invoice": string;
                                "customer_id": string;
                                "status": string;
                                "amount_refunded": number;
                            };
                            "additionalProperties": boolean;
                        };
                    };
                };
                "description": string;
                "example": {
                    "balance": number;
                    "payments": {
                        "amount": number;
                        "created": string;
                        "description": string;
                        "currency": string;
                        "refunded": boolean;
                        "id": string;
                        "invoice": string;
                        "customer_id": string;
                        "status": string;
                        "amount_refunded": number;
                    }[];
                    "discount": number;
                };
                "additionalProperties": boolean;
            };
            "PaymentMethodCreateParams": {
                "type": string;
                "properties": {
                    "stripeToken": {
                        "type": string;
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "stripeToken": string;
                };
                "additionalProperties": boolean;
            };
            "PaymentMethodPrimaryParams": {
                "type": string;
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "id": string;
                };
                "additionalProperties": boolean;
            };
            "PaymentMethods": {
                "type": string;
                "properties": {
                    "customer": {
                        "type": string;
                        "properties": {
                            "default_source": {
                                "type": string;
                                "description": string;
                            };
                            "account_balance": {
                                "type": string;
                                "description": string;
                            };
                            "created": {
                                "type": string;
                                "format": string;
                            };
                            "email": {
                                "type": string;
                                "format": string;
                                "description": string;
                            };
                            "discount": {
                                "type": string;
                                "description": string;
                            };
                            "currency": {
                                "type": string;
                                "description": string;
                            };
                        };
                        "description": string;
                        "example": {
                            "account_balance": number;
                            "default_source": string;
                            "created": string;
                            "discount": number;
                            "currency": string;
                            "email": string;
                        };
                        "additionalProperties": boolean;
                    };
                    "cards": {
                        "type": string;
                        "description": string;
                        "items": {
                            "type": string;
                            "properties": {
                                "id": {
                                    "type": string;
                                    "description": string;
                                };
                                "brand": {
                                    "type": string;
                                    "description": string;
                                };
                                "last4": {
                                    "type": string;
                                    "description": string;
                                };
                                "exp_month": {
                                    "type": string;
                                    "description": string;
                                };
                                "exp_year": {
                                    "type": string;
                                    "description": string;
                                };
                                "country": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "description": string;
                            "example": {
                                "last4": string;
                                "country": string;
                                "exp_month": number;
                                "id": string;
                                "exp_year": number;
                                "brand": string;
                            };
                            "additionalProperties": boolean;
                        };
                    };
                };
                "description": string;
                "example": {
                    "cards": {
                        "last4": string;
                        "country": string;
                        "exp_month": number;
                        "id": string;
                        "exp_year": number;
                        "brand": string;
                    }[];
                    "customer": {
                        "account_balance": number;
                        "default_source": string;
                        "created": string;
                        "discount": number;
                        "currency": string;
                        "email": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "Permissions": {
                "type": string;
                "description": string;
                "items": {
                    "type": string;
                };
                "additionalProperties": boolean;
            };
            "Project": {
                "type": string;
                "required": string[];
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                    "accountId": {
                        "type": string;
                        "description": string;
                    };
                    "appId": {
                        "type": string;
                        "description": string;
                    };
                    "name": {
                        "type": string;
                        "description": string;
                    };
                    "type": {
                        "type": string;
                        "description": string;
                    };
                    "enabled": {
                        "type": string;
                        "description": string;
                        "default": boolean;
                    };
                    "isDemo": {
                        "type": string;
                        "description": string;
                    };
                    "implemented": {
                        "type": string;
                        "description": string;
                    };
                    "permissions": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                    "sharedByUserId": {
                        "type": string;
                        "description": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                };
                "description": string;
                "example": {
                    "accountId": number;
                    "data": {
                        "key": string;
                    };
                    "permissions": {};
                    "appId": number;
                    "name": string;
                    "implemented": boolean;
                    "sharedByUserId": number;
                    "id": number;
                    "type": string;
                    "isDemo": boolean;
                    "enabled": boolean;
                };
                "additionalProperties": boolean;
            };
            "ProjectCreateParams": {
                "type": string;
                "required": string[];
                "properties": {
                    "name": {
                        "type": string;
                    };
                    "type": {
                        "description": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                };
                "description": string;
                "example": {
                    "data": {
                        "key": string;
                    };
                    "name": string;
                    "type": string;
                };
                "additionalProperties": boolean;
            };
            "ProjectDefaultParams": {
                "type": string;
                "properties": {
                    "projectId": {
                        "type": string;
                        "description": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "ProjectPermissions": {
                "type": string;
                "description": string;
                "additionalProperties": boolean;
            };
            "ProjectShare": {
                "type": string;
                "properties": {
                    "appId": {
                        "type": string;
                        "description": string;
                    };
                    "accountId": {
                        "type": string;
                        "description": string;
                    };
                    "projectId": {
                        "type": string;
                        "description": string;
                    };
                    "userId": {
                        "type": string;
                        "description": string;
                    };
                    "userName": {
                        "type": string;
                        "description": string;
                    };
                    "permissions": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                    "sharedByUserId": {
                        "type": string;
                        "description": string;
                    };
                    "createdDate": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "convertStringToDate": boolean;
                    };
                };
                "example": {
                    "accountId": number;
                    "createdDate": string;
                    "permissions": {};
                    "appId": number;
                    "sharedByUserId": number;
                    "userName": string;
                    "projectId": number;
                    "userId": number;
                };
                "additionalProperties": boolean;
            };
            "ProjectUpdateParams": {
                "properties": {
                    "name": {
                        "type": string;
                    };
                    "enabled": {
                        "type": string;
                    };
                    "type": {
                        "type": string;
                    };
                    "implemented": {
                        "type": string;
                    };
                    "data": {
                        "type": string;
                        "additionalProperties": boolean;
                    };
                };
                "description": string;
                "example": {
                    "data": {
                        "key": string;
                    };
                    "name": string;
                    "implemented": boolean;
                    "type": string;
                    "enabled": boolean;
                };
                "additionalProperties": boolean;
            };
            "Stash": {
                "type": string;
                "required": string[];
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                    "expires": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "convertStringToDate": boolean;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                };
                "example": {
                    "expires": string;
                    "data": {
                        "key": string;
                    };
                    "id": string;
                };
                "additionalProperties": boolean;
            };
            "StashCreateParams": {
                "type": string;
                "required": string[];
                "properties": {
                    "expires": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "convertStringToDate": boolean;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                };
                "description": string;
                "example": {
                    "expires": string;
                    "data": {
                        "key": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "User": {
                "type": string;
                "required": string[];
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                    "name": {
                        "type": string;
                        "description": string;
                    };
                    "firstName": {
                        "type": string;
                    };
                    "lastName": {
                        "type": string;
                    };
                    "email": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "status": {
                        "type": string;
                    };
                    "createdDate": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "convertStringToDate": boolean;
                    };
                    "lastUpdated": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "convertStringToDate": boolean;
                    };
                };
                "example": {
                    "firstName": string;
                    "lastName": string;
                    "lastUpdated": string;
                    "createdDate": string;
                    "name": string;
                    "id": number;
                    "email": string;
                    "status": number;
                };
                "additionalProperties": boolean;
            };
            "UserCreateParams": {
                "type": string;
                "required": string[];
                "properties": {
                    "name": {
                        "type": string;
                        "description": string;
                        "minLength": number;
                    };
                    "email": {
                        "type": string;
                        "format": string;
                    };
                    "password": {
                        "type": string;
                        "minLength": number;
                    };
                    "firstName": {
                        "type": string;
                    };
                    "lastName": {
                        "type": string;
                    };
                    "phone": {
                        "type": string;
                    };
                    "timezone": {
                        "type": string;
                        "default": string;
                    };
                };
                "example": {
                    "firstName": string;
                    "lastName": string;
                    "password": string;
                    "phone": string;
                    "timezone": string;
                    "name": string;
                    "email": string;
                };
                "additionalProperties": boolean;
            };
            "UserNameParams": {
                "required": string[];
                "properties": {
                    "name": {
                        "type": string;
                        "description": string;
                    };
                };
                "example": {
                    "name": string;
                };
                "additionalProperties": boolean;
            };
            "UserUpdateParams": {
                "properties": {
                    "firstName": {
                        "type": string;
                    };
                    "lastName": {
                        "type": string;
                    };
                    "email": {
                        "type": string;
                        "format": string;
                    };
                    "phone": {
                        "type": string;
                    };
                    "timezone": {
                        "type": string;
                    };
                };
                "description": string;
                "example": {
                    "firstName": string;
                    "lastName": string;
                    "phone": string;
                    "timezone": string;
                    "email": string;
                };
                "additionalProperties": boolean;
            };
            "VerificationCreateParams": {
                "required": string[];
                "properties": {
                    "email": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "templateName": {
                        "type": string;
                        "description": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                };
                "example": {
                    "data": {
                        "key": string;
                    };
                    "templateName": string;
                    "email": string;
                };
                "additionalProperties": boolean;
            };
            "VerificationApprovedResponse": {
                "properties": {
                    "data": {
                        "type": string;
                        "description": string;
                        "additionalProperties": boolean;
                    };
                };
                "example": {
                    "data": {
                        "key": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "VerificationCreateResponse": {
                "properties": {
                    "key": {
                        "type": string;
                        "description": string;
                    };
                };
                "example": {
                    "key": string;
                };
                "additionalProperties": boolean;
            };
            "Error": {
                "type": string;
                "required": string[];
                "properties": {
                    "code": {
                        "type": string;
                        "description": string;
                    };
                    "message": {
                        "type": string;
                        "description": string;
                    };
                    "errors": {
                        "type": string;
                        "description": string;
                        "items": {
                            "required": string[];
                            "properties": {
                                "name": {
                                    "type": string;
                                    "description": string;
                                };
                                "code": {
                                    "type": string;
                                };
                                "message": {
                                    "type": string;
                                };
                            };
                            "type": string;
                            "additionalProperties": boolean;
                        };
                    };
                };
                "description": string;
                "additionalProperties": boolean;
            };
            "Error_errors": {
                "required": string[];
                "properties": {
                    "name": {
                        "type": string;
                        "description": string;
                    };
                    "code": {
                        "type": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "type": string;
                "additionalProperties": boolean;
            };
        };
    };
    Analytics: {
        "swagger": string;
        "info": {
            "description": string;
            "version": string;
            "title": string;
            "x-namespace": string;
        };
        "host": string;
        "basePath": string;
        "tags": {
            "name": string;
            "description": string;
        }[];
        "schemes": string[];
        "paths": {
            "/analytics/script/{id}": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "produces": string[];
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                            };
                        };
                    };
                };
            };
            "/analytics/script/text/{id}": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "produces": string[];
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                            };
                        };
                    };
                };
            };
            "/analytics/entities": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": any[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "name": {
                                        "type": string;
                                    };
                                    "description": {
                                        "type": string;
                                    };
                                    "attributes": {
                                        "properties": {
                                            "name": {
                                                "type": string;
                                            };
                                            "title": {
                                                "type": string;
                                            };
                                            "description": {
                                                "type": string;
                                            };
                                            "dataType": {
                                                "type": string;
                                            };
                                            "isElement": {
                                                "type": string;
                                            };
                                            "isMetric": {
                                                "type": string;
                                            };
                                        };
                                        "example": {
                                            "isElement": boolean;
                                            "dataType": string;
                                            "name": string;
                                            "isMetric": boolean;
                                            "description": string;
                                            "title": string;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "name": string;
                                    "description": string;
                                    "attributes": {
                                        "isElement": boolean;
                                        "dataType": string;
                                        "name": string;
                                        "isMetric": boolean;
                                        "description": string;
                                        "title": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/analytics/query": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "query": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "query": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "items": {
                                    "properties": {
                                        "name": {
                                            "type": string;
                                        };
                                        "title": {
                                            "type": string;
                                        };
                                        "description": {
                                            "type": string;
                                        };
                                        "dataType": {
                                            "type": string;
                                        };
                                        "isElement": {
                                            "type": string;
                                        };
                                        "isMetric": {
                                            "type": string;
                                        };
                                    };
                                    "example": {
                                        "isElement": boolean;
                                        "dataType": string;
                                        "name": string;
                                        "isMetric": boolean;
                                        "description": string;
                                        "title": string;
                                    };
                                    "additionalProperties": boolean;
                                };
                            };
                        };
                    };
                };
            };
            "/analytics/attributes/search": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "default"?: undefined;
                    } | {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "default": string;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "items": {
                                    "type": string;
                                };
                            };
                        };
                    };
                };
            };
            "/analytics/segments": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                };
                                "name": {
                                    "type": string;
                                };
                                "query": {
                                    "type": string;
                                    "properties": {};
                                };
                                "appliesTo": {
                                    "type": string;
                                    "enum": string[];
                                };
                                "projectIds": {
                                    "type": string;
                                    "items": {
                                        "type": string;
                                    };
                                };
                            };
                            "example": {
                                "query": string;
                                "name": string;
                                "appliesTo": string;
                                "projectIds": number[];
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "409": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/analytics/segments/{id}": {
                "delete": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/analytics/campaignids": {
                "put": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                };
                                "projectId": {
                                    "type": string;
                                };
                                "campaignIds": {
                                    "type": string;
                                    "items": {
                                        "properties": {
                                            "referrer": {
                                                "type": string;
                                                "description": string;
                                                "default": string;
                                            };
                                            "campaign": {
                                                "type": string;
                                                "description": string;
                                                "default": string;
                                            };
                                        };
                                        "example": {
                                            "referrer": string;
                                            "campaign": string;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                };
                            };
                            "example": {
                                "campaignIds": {
                                    "referrer": string;
                                    "campaign": string;
                                }[];
                                "accessToken": string;
                                "projectId": number;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/analytics/campaignreferrers": {
                "put": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                };
                                "projectId": {
                                    "type": string;
                                };
                                "campaignReferrers": {
                                    "type": string;
                                    "items": {
                                        "type": string;
                                    };
                                };
                            };
                            "example": {
                                "campaignReferrers": string[];
                                "accessToken": string;
                                "projectId": number;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/projects/dashboards": {
                "put": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                };
                                "projectId": {
                                    "type": string;
                                };
                                "dashboards": {
                                    "type": string;
                                    "items": {
                                        "properties": {
                                            "name": {
                                                "type": string;
                                                "description": string;
                                            };
                                            "createdDate": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
                                            };
                                            "params": {
                                                "type": string;
                                                "description": string;
                                                "properties": {};
                                            };
                                        };
                                        "example": {
                                            "createdDate": string;
                                            "name": string;
                                            "params": string;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                };
                            };
                            "example": {
                                "accessToken": string;
                                "projectId": number;
                                "dashboards": {
                                    "createdDate": string;
                                    "name": string;
                                    "params": string;
                                }[];
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
        };
        "definitions": {
            "QueryResult": {
                "properties": {
                    "columns": {
                        "type": string;
                        "items": {
                            "type": string;
                            "properties": {};
                        };
                    };
                    "rows": {
                        "type": string;
                        "items": {
                            "type": string;
                            "properties": {};
                        };
                    };
                };
                "additionalProperties": boolean;
            };
            "QueryResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                    "data": {
                        "properties": {
                            "columns": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "properties": {};
                                };
                            };
                            "rows": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "properties": {};
                                };
                            };
                        };
                        "additionalProperties": boolean;
                    };
                };
                "additionalProperties": boolean;
            };
            "APIResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "example": {
                    "code": number;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "APIError": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "example": {
                    "code": number;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "DuplicateError": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "Entity": {
                "properties": {
                    "name": {
                        "type": string;
                    };
                    "description": {
                        "type": string;
                    };
                    "attributes": {
                        "properties": {
                            "name": {
                                "type": string;
                            };
                            "title": {
                                "type": string;
                            };
                            "description": {
                                "type": string;
                            };
                            "dataType": {
                                "type": string;
                            };
                            "isElement": {
                                "type": string;
                            };
                            "isMetric": {
                                "type": string;
                            };
                        };
                        "example": {
                            "isElement": boolean;
                            "dataType": string;
                            "name": string;
                            "isMetric": boolean;
                            "description": string;
                            "title": string;
                        };
                        "additionalProperties": boolean;
                    };
                };
                "example": {
                    "name": string;
                    "description": string;
                    "attributes": {
                        "isElement": boolean;
                        "dataType": string;
                        "name": string;
                        "isMetric": boolean;
                        "description": string;
                        "title": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "Attribute": {
                "properties": {
                    "name": {
                        "type": string;
                    };
                    "title": {
                        "type": string;
                    };
                    "description": {
                        "type": string;
                    };
                    "dataType": {
                        "type": string;
                    };
                    "isElement": {
                        "type": string;
                    };
                    "isMetric": {
                        "type": string;
                    };
                };
                "example": {
                    "isElement": boolean;
                    "dataType": string;
                    "name": string;
                    "isMetric": boolean;
                    "description": string;
                    "title": string;
                };
                "additionalProperties": boolean;
            };
            "SegmentCreateParams": {
                "properties": {
                    "accessToken": {
                        "type": string;
                    };
                    "name": {
                        "type": string;
                    };
                    "query": {
                        "type": string;
                        "properties": {};
                    };
                    "appliesTo": {
                        "type": string;
                        "enum": string[];
                    };
                    "projectIds": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                };
                "example": {
                    "query": string;
                    "name": string;
                    "appliesTo": string;
                    "projectIds": number[];
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
            "CampaignIdsUpdateParams": {
                "properties": {
                    "accessToken": {
                        "type": string;
                    };
                    "projectId": {
                        "type": string;
                    };
                    "campaignIds": {
                        "type": string;
                        "items": {
                            "properties": {
                                "referrer": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                };
                                "campaign": {
                                    "type": string;
                                    "description": string;
                                    "default": string;
                                };
                            };
                            "example": {
                                "referrer": string;
                                "campaign": string;
                            };
                            "additionalProperties": boolean;
                        };
                    };
                };
                "example": {
                    "campaignIds": {
                        "referrer": string;
                        "campaign": string;
                    }[];
                    "accessToken": string;
                    "projectId": number;
                };
                "additionalProperties": boolean;
            };
            "CampaignReferrers": {
                "properties": {
                    "referrer": {
                        "type": string;
                        "description": string;
                        "default": string;
                    };
                    "campaign": {
                        "type": string;
                        "description": string;
                        "default": string;
                    };
                };
                "example": {
                    "referrer": string;
                    "campaign": string;
                };
                "additionalProperties": boolean;
            };
            "CampaignReferrersUpdateParams": {
                "properties": {
                    "accessToken": {
                        "type": string;
                    };
                    "projectId": {
                        "type": string;
                    };
                    "campaignReferrers": {
                        "type": string;
                        "items": {
                            "type": string;
                        };
                    };
                };
                "example": {
                    "campaignReferrers": string[];
                    "accessToken": string;
                    "projectId": number;
                };
                "additionalProperties": boolean;
            };
            "Dashboard": {
                "properties": {
                    "name": {
                        "type": string;
                        "description": string;
                    };
                    "createdDate": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "params": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "createdDate": string;
                    "name": string;
                    "params": string;
                };
                "additionalProperties": boolean;
            };
            "DashboardsUpdateParams": {
                "properties": {
                    "accessToken": {
                        "type": string;
                    };
                    "projectId": {
                        "type": string;
                    };
                    "dashboards": {
                        "type": string;
                        "items": {
                            "properties": {
                                "name": {
                                    "type": string;
                                    "description": string;
                                };
                                "createdDate": {
                                    "type": string;
                                    "format": string;
                                    "description": string;
                                };
                                "params": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "createdDate": string;
                                "name": string;
                                "params": string;
                            };
                            "additionalProperties": boolean;
                        };
                    };
                };
                "example": {
                    "accessToken": string;
                    "projectId": number;
                    "dashboards": {
                        "createdDate": string;
                        "name": string;
                        "params": string;
                    }[];
                };
                "additionalProperties": boolean;
            };
            "QueryParams": {
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "query": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "query": string;
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
        };
    };
    DataServices: {
        "swagger": string;
        "info": {
            "description": string;
            "version": string;
            "title": string;
            "x-namespace": string;
        };
        "host": string;
        "basePath": string;
        "tags": {
            "name": string;
            "description": string;
        }[];
        "schemes": string[];
        "paths": {
            "/score": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "description": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "default"?: undefined;
                    } | {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "default": string;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
        };
        "definitions": {
            "APIResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "APIError": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "additionalProperties": boolean;
            };
        };
    };
    Monitoring: {
        "swagger": string;
        "info": {
            "description": string;
            "version": string;
            "title": string;
            "x-namespace": string;
        };
        "host": string;
        "basePath": string;
        "tags": {
            "name": string;
            "description": string;
        }[];
        "schemes": string[];
        "paths": {
            "/users": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "appId": {
                                    "type": string;
                                    "description": string;
                                };
                                "name": {
                                    "type": string;
                                    "format": string;
                                    "default": string;
                                };
                                "password": {
                                    "type": string;
                                };
                                "status": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "example": {
                                "password": string;
                                "appId": number;
                                "name": string;
                                "status": number;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "409": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/login": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "description": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "type": string;
                            "required": string[];
                            "properties": {
                                "name": {
                                    "type": string;
                                    "format": string;
                                    "default": string;
                                };
                                "password": {
                                    "type": string;
                                    "format": string;
                                };
                                "appId": {
                                    "type": string;
                                    "format": string;
                                    "description": string;
                                    "default": number;
                                };
                                "expiration": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "example": {
                                "password": string;
                                "appId": number;
                                "name": string;
                                "expiration": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "expiration": {
                                        "type": string;
                                    };
                                    "user": {
                                        "properties": {
                                            "id": {
                                                "type": string;
                                                "format": string;
                                            };
                                            "name": {
                                                "type": string;
                                            };
                                            "status": {
                                                "type": string;
                                            };
                                            "account": {
                                                "type": string;
                                                "properties": {};
                                            };
                                        };
                                        "example": {
                                            "name": string;
                                            "id": number;
                                            "account": string;
                                            "status": number;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "expiration": string;
                                    "user": {
                                        "name": string;
                                        "id": number;
                                        "account": string;
                                        "status": number;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/authorize": {
                "post": {
                    "tags": string[];
                    "summary": string;
                    "description": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                };
                            };
                            "example": {
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "expiration": {
                                        "type": string;
                                    };
                                    "user": {
                                        "properties": {
                                            "id": {
                                                "type": string;
                                                "format": string;
                                            };
                                            "name": {
                                                "type": string;
                                            };
                                            "status": {
                                                "type": string;
                                            };
                                            "account": {
                                                "type": string;
                                                "properties": {};
                                            };
                                        };
                                        "example": {
                                            "name": string;
                                            "id": number;
                                            "account": string;
                                            "status": number;
                                        };
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "expiration": string;
                                    "user": {
                                        "name": string;
                                        "id": number;
                                        "account": string;
                                        "status": number;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/monitoring/stations": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": any[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "items": {
                                    "properties": {
                                        "url": {
                                            "type": string;
                                        };
                                        "description": {
                                            "type": string;
                                        };
                                        "country": {
                                            "type": string;
                                        };
                                        "longitude": {
                                            "type": string;
                                        };
                                        "latitude": {
                                            "type": string;
                                        };
                                    };
                                    "example": {
                                        "country": string;
                                        "latitude": string;
                                        "description": string;
                                        "url": string;
                                        "longitude": string;
                                    };
                                    "additionalProperties": boolean;
                                };
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/monitoring/contacts": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "in": string;
                        "name": string;
                        "description": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "name": {
                                    "type": string;
                                    "description": string;
                                };
                                "type": {
                                    "type": string;
                                    "enum": string[];
                                };
                                "endpoint": {
                                    "type": string;
                                    "description": string;
                                };
                            };
                            "example": {
                                "endpoint": string;
                                "name": string;
                                "accessToken": string;
                                "type": string;
                            };
                            "additionalProperties": boolean;
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "409": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/monitoring/contacts/{id}": {
                "delete": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
        };
        "definitions": {
            "AccessTokenCreateParams": {
                "type": string;
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "permissions": {
                        "type": string;
                        "description": string;
                        "items": {
                            "type": string;
                            "enum": string[];
                        };
                    };
                };
                "additionalProperties": boolean;
            };
            "APIResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "example": {
                    "code": number;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "Login": {
                "properties": {
                    "accessToken": {
                        "type": string;
                    };
                    "expiration": {
                        "type": string;
                    };
                    "user": {
                        "properties": {
                            "id": {
                                "type": string;
                                "format": string;
                            };
                            "name": {
                                "type": string;
                            };
                            "status": {
                                "type": string;
                            };
                            "account": {
                                "type": string;
                                "properties": {};
                            };
                        };
                        "example": {
                            "name": string;
                            "id": number;
                            "account": string;
                            "status": number;
                        };
                        "additionalProperties": boolean;
                    };
                };
                "additionalProperties": boolean;
            };
            "APIError": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "example": {
                    "code": number;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "DuplicateError": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "Station": {
                "properties": {
                    "url": {
                        "type": string;
                    };
                    "description": {
                        "type": string;
                    };
                    "country": {
                        "type": string;
                    };
                    "longitude": {
                        "type": string;
                    };
                    "latitude": {
                        "type": string;
                    };
                };
                "example": {
                    "country": string;
                    "latitude": string;
                    "description": string;
                    "url": string;
                    "longitude": string;
                };
                "additionalProperties": boolean;
            };
            "AuthorizeParams": {
                "properties": {
                    "accessToken": {
                        "type": string;
                    };
                };
                "example": {
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
            "LoginParams": {
                "type": string;
                "required": string[];
                "properties": {
                    "name": {
                        "type": string;
                        "format": string;
                        "default": string;
                    };
                    "password": {
                        "type": string;
                        "format": string;
                    };
                    "appId": {
                        "type": string;
                        "format": string;
                        "description": string;
                        "default": number;
                    };
                    "expiration": {
                        "type": string;
                        "description": string;
                    };
                };
                "example": {
                    "password": string;
                    "appId": number;
                    "name": string;
                    "expiration": string;
                };
                "additionalProperties": boolean;
            };
            "UserParams": {
                "required": string[];
                "properties": {
                    "appId": {
                        "type": string;
                        "description": string;
                    };
                    "name": {
                        "type": string;
                        "format": string;
                        "default": string;
                    };
                    "password": {
                        "type": string;
                    };
                    "status": {
                        "type": string;
                        "description": string;
                    };
                };
                "example": {
                    "password": string;
                    "appId": number;
                    "name": string;
                    "status": number;
                };
                "additionalProperties": boolean;
            };
            "User": {
                "properties": {
                    "id": {
                        "type": string;
                        "format": string;
                    };
                    "name": {
                        "type": string;
                    };
                    "status": {
                        "type": string;
                    };
                    "account": {
                        "type": string;
                        "properties": {};
                    };
                };
                "example": {
                    "name": string;
                    "id": number;
                    "account": string;
                    "status": number;
                };
                "additionalProperties": boolean;
            };
            "Authorization": {
                "properties": {
                    "expiration": {
                        "type": string;
                    };
                    "user": {
                        "properties": {
                            "id": {
                                "type": string;
                                "format": string;
                            };
                            "name": {
                                "type": string;
                            };
                            "status": {
                                "type": string;
                            };
                            "account": {
                                "type": string;
                                "properties": {};
                            };
                        };
                        "example": {
                            "name": string;
                            "id": number;
                            "account": string;
                            "status": number;
                        };
                        "additionalProperties": boolean;
                    };
                };
                "example": {
                    "expiration": string;
                    "user": {
                        "name": string;
                        "id": number;
                        "account": string;
                        "status": number;
                    };
                };
                "additionalProperties": boolean;
            };
            "ContactCreateParams": {
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "name": {
                        "type": string;
                        "description": string;
                    };
                    "type": {
                        "type": string;
                        "enum": string[];
                    };
                    "endpoint": {
                        "type": string;
                        "description": string;
                    };
                };
                "example": {
                    "endpoint": string;
                    "name": string;
                    "accessToken": string;
                    "type": string;
                };
                "additionalProperties": boolean;
            };
        };
    };
    Partner: {
        "swagger": string;
        "info": {
            "description": string;
            "version": string;
            "title": string;
            "x-namespace": string;
        };
        "host": string;
        "basePath": string;
        "tags": {
            "name": string;
            "description": string;
        }[];
        "schemes": string[];
        "paths": {
            "/partners/profiles": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "default": string;
                        "enum": string[];
                        "items"?: undefined;
                        "collectionFormat"?: undefined;
                    } | {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "default": number;
                        "enum"?: undefined;
                        "items"?: undefined;
                        "collectionFormat"?: undefined;
                    } | {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "items": {
                            "type": string;
                        };
                        "collectionFormat": string;
                        "default": string;
                        "enum"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "currentPage": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "next": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "profiles": {
                                        "type": string;
                                        "description": string;
                                        "items": {
                                            "type": string;
                                            "properties": {};
                                        };
                                    };
                                };
                                "example": {
                                    "next": boolean;
                                    "profiles": string[];
                                    "currentPage": number;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/profile": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "data": string;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "put": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "profile": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "profile": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "description"?: undefined;
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "patch": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "profile": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "profile": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "description"?: undefined;
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/payee": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "data": string;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "put": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "payee": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "payee": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "description"?: undefined;
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "patch": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "payee": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "payee": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "description"?: undefined;
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/showcases/{showcaseId}": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "data": string;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "put": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "showcase": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "showcase": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "description"?: undefined;
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "delete": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "patch": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "showcase": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "showcase": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "description"?: undefined;
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/showcases": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                    "data": {
                                        "properties": {
                                            "showcases": {
                                                "type": string;
                                                "items": {
                                                    "type": string;
                                                    "properties": {};
                                                };
                                            };
                                        };
                                        "example": {
                                            "showcases": string[];
                                        };
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "data": {
                                        "showcases": string[];
                                    };
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "showcase": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "showcase": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "description"?: undefined;
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "data": string;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/testimonials/{testimonialId}": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "data": string;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "put": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "testimonial": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "testimonial": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "description"?: undefined;
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "delete": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "patch": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "testimonial": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "testimonial": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "description"?: undefined;
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/partners/{id}/testimonials": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                    "data": {
                                        "properties": {
                                            "testimonials": {
                                                "type": string;
                                                "items": {
                                                    "type": string;
                                                    "properties": {};
                                                };
                                            };
                                        };
                                        "example": {
                                            "testimonials": string[];
                                        };
                                        "additionalProperties": boolean;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "data": {
                                        "testimonials": string[];
                                    };
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
                "post": {
                    "tags": string[];
                    "summary": string;
                    "parameters": ({
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                        "schema"?: undefined;
                    } | {
                        "in": string;
                        "name": string;
                        "required": boolean;
                        "schema": {
                            "required": string[];
                            "properties": {
                                "accessToken": {
                                    "type": string;
                                    "description": string;
                                };
                                "testimonial": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "example": {
                                "testimonial": string;
                                "accessToken": string;
                            };
                            "additionalProperties": boolean;
                        };
                        "description"?: undefined;
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "data": string;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
            "/partners/slug/{slug}": {
                "get": {
                    "tags": string[];
                    "summary": string;
                    "parameters": {
                        "name": string;
                        "in": string;
                        "description": string;
                        "required": boolean;
                        "type": string;
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "message": string;
                                };
                                "additionalProperties": boolean;
                            };
                        };
                        "default": {
                            "description": string;
                            "schema": {
                                "properties": {
                                    "code": {
                                        "type": string;
                                        "format": string;
                                    };
                                    "message": {
                                        "type": string;
                                    };
                                };
                                "additionalProperties": boolean;
                            };
                        };
                    };
                };
            };
        };
        "definitions": {
            "ProfileResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "code": number;
                    "data": string;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "PayeeResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "code": number;
                    "data": string;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "ShowcaseResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "code": number;
                    "data": string;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "ShowcasePostResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "code": number;
                    "data": string;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "TestimonialResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "code": number;
                    "data": string;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "TestimonialsResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                    "data": {
                        "properties": {
                            "testimonials": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "properties": {};
                                };
                            };
                        };
                        "example": {
                            "testimonials": string[];
                        };
                        "additionalProperties": boolean;
                    };
                };
                "example": {
                    "code": number;
                    "data": {
                        "testimonials": string[];
                    };
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "ShowcasesResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                    "data": {
                        "properties": {
                            "showcases": {
                                "type": string;
                                "items": {
                                    "type": string;
                                    "properties": {};
                                };
                            };
                        };
                        "example": {
                            "showcases": string[];
                        };
                        "additionalProperties": boolean;
                    };
                };
                "example": {
                    "code": number;
                    "data": {
                        "showcases": string[];
                    };
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "Testimonials": {
                "properties": {
                    "testimonials": {
                        "type": string;
                        "items": {
                            "type": string;
                            "properties": {};
                        };
                    };
                };
                "example": {
                    "testimonials": string[];
                };
                "additionalProperties": boolean;
            };
            "ProfilesResponse": {
                "properties": {
                    "currentPage": {
                        "type": string;
                        "description": string;
                    };
                    "next": {
                        "type": string;
                        "description": string;
                    };
                    "profiles": {
                        "type": string;
                        "description": string;
                        "items": {
                            "type": string;
                            "properties": {};
                        };
                    };
                };
                "example": {
                    "next": boolean;
                    "profiles": string[];
                    "currentPage": number;
                };
                "additionalProperties": boolean;
            };
            "Showcases": {
                "properties": {
                    "showcases": {
                        "type": string;
                        "items": {
                            "type": string;
                            "properties": {};
                        };
                    };
                };
                "example": {
                    "showcases": string[];
                };
                "additionalProperties": boolean;
            };
            "TestimonialPostResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "code": number;
                    "data": string;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "APIResponse": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "example": {
                    "code": number;
                    "message": string;
                };
                "additionalProperties": boolean;
            };
            "APIError": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "DuplicateError": {
                "properties": {
                    "code": {
                        "type": string;
                        "format": string;
                    };
                    "message": {
                        "type": string;
                    };
                };
                "additionalProperties": boolean;
            };
            "ProfilePutParams": {
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "profile": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "profile": string;
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
            "ShowcasePutParams": {
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "showcase": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "showcase": string;
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
            "ShowcasePatchParams": {
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "showcase": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "showcase": string;
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
            "ShowcasePostParams": {
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "showcase": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "showcase": string;
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
            "TestimonialPutParams": {
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "testimonial": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "testimonial": string;
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
            "TestimonialPatchParams": {
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "testimonial": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "testimonial": string;
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
            "TestimonialPostParams": {
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "testimonial": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "testimonial": string;
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
            "PayeePutParams": {
                "required": string[];
                "properties": {
                    "accessToken": {
                        "type": string;
                        "description": string;
                    };
                    "payee": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "payee": string;
                    "accessToken": string;
                };
                "additionalProperties": boolean;
            };
        };
    };
};
export { Specs };
