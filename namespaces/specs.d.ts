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
                                        };
                                        "userNameFormat": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
                                        };
                                        "data": {
                                            "type": string;
                                            "description": string;
                                            "properties": {};
                                        };
                                    };
                                    "description": string;
                                    "example": {
                                        "allowSignups": boolean;
                                        "website": string;
                                        "userNameFormat": string;
                                        "data": string;
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
                                        };
                                        "userNameFormat": {
                                            "type": string;
                                            "description": string;
                                            "default": string;
                                        };
                                        "data": {
                                            "type": string;
                                            "description": string;
                                            "properties": {};
                                        };
                                    };
                                    "description": string;
                                    "example": {
                                        "allowSignups": boolean;
                                        "website": string;
                                        "userNameFormat": string;
                                        "data": string;
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
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
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
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
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
                            };
                            "responseSchema": {
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
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                            "type": string;
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
                            "additionalProperties": {};
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
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
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
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
                            };
                            "responseSchema": {
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
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
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
                            };
                            "responseSchema": {
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
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
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
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
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
                                        "properties": {};
                                    };
                                };
                                "description": string;
                                "example": {
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "data": string;
                                    "appId": number;
                                    "id": number;
                                    "partnerId": number;
                                    "type": string;
                                    "userId": number;
                                    "status": number;
                                };
                            };
                            "responseSchema": {
                                "type": string;
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
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
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
                                        "properties": {};
                                    };
                                };
                                "description": string;
                                "example": {
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "data": string;
                                    "appId": number;
                                    "id": number;
                                    "partnerId": number;
                                    "type": string;
                                    "userId": number;
                                    "status": number;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                    "properties": {};
                                };
                            };
                            "description": string;
                            "example": {
                                "data": string;
                                "partnerId": number;
                                "type": string;
                                "status": number;
                            };
                        };
                        "type"?: undefined;
                    })[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
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
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
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
                                        "properties": {};
                                    };
                                };
                                "description": string;
                                "example": {
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "data": string;
                                    "appId": number;
                                    "id": number;
                                    "partnerId": number;
                                    "type": string;
                                    "userId": number;
                                    "status": number;
                                };
                            };
                            "responseSchema": {
                                "type": string;
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
                                    };
                                    "lastUpdated": {
                                        "type": string;
                                        "format": string;
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
                                        "properties": {};
                                    };
                                };
                                "description": string;
                                "example": {
                                    "lastUpdated": string;
                                    "createdDate": string;
                                    "data": string;
                                    "appId": number;
                                    "id": number;
                                    "partnerId": number;
                                    "type": string;
                                    "userId": number;
                                    "status": number;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        "userId": {
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
                                        };
                                        "sharedByUserId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "data": {
                                            "type": string;
                                            "description": string;
                                            "properties": {};
                                        };
                                    };
                                    "description": string;
                                    "example": {
                                        "accountId": number;
                                        "data": string;
                                        "permissions": {};
                                        "name": string;
                                        "implemented": boolean;
                                        "sharedByUserId": number;
                                        "id": number;
                                        "type": number;
                                        "isDemo": boolean;
                                        "userId": number;
                                        "enabled": boolean;
                                    };
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
                                        "userId": {
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
                                        };
                                        "sharedByUserId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "data": {
                                            "type": string;
                                            "description": string;
                                            "properties": {};
                                        };
                                    };
                                    "description": string;
                                    "example": {
                                        "accountId": number;
                                        "data": string;
                                        "permissions": {};
                                        "name": string;
                                        "implemented": boolean;
                                        "sharedByUserId": number;
                                        "id": number;
                                        "type": number;
                                        "isDemo": boolean;
                                        "userId": number;
                                        "enabled": boolean;
                                    };
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                            "properties": {
                                "accountId": {
                                    "description": string;
                                };
                                "name": {
                                    "type": string;
                                };
                                "type": {
                                    "description": string;
                                };
                            };
                            "description": string;
                            "example": {
                                "accountId": string;
                                "name": string;
                                "type": string;
                            };
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
                                    "userId": {
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
                                    };
                                    "sharedByUserId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "data": string;
                                    "permissions": {};
                                    "name": string;
                                    "implemented": boolean;
                                    "sharedByUserId": number;
                                    "id": number;
                                    "type": number;
                                    "isDemo": boolean;
                                    "userId": number;
                                    "enabled": boolean;
                                };
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
                                    "userId": {
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
                                    };
                                    "sharedByUserId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "data": string;
                                    "permissions": {};
                                    "name": string;
                                    "implemented": boolean;
                                    "sharedByUserId": number;
                                    "id": number;
                                    "type": number;
                                    "isDemo": boolean;
                                    "userId": number;
                                    "enabled": boolean;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                            };
                            "example": {
                                "name": string;
                                "enabled": boolean;
                            };
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
                                    "userId": {
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
                                    };
                                    "sharedByUserId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "data": string;
                                    "permissions": {};
                                    "name": string;
                                    "implemented": boolean;
                                    "sharedByUserId": number;
                                    "id": number;
                                    "type": number;
                                    "isDemo": boolean;
                                    "userId": number;
                                    "enabled": boolean;
                                };
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
                                    "userId": {
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
                                    };
                                    "sharedByUserId": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "description": string;
                                "example": {
                                    "accountId": number;
                                    "data": string;
                                    "permissions": {};
                                    "name": string;
                                    "implemented": boolean;
                                    "sharedByUserId": number;
                                    "id": number;
                                    "type": number;
                                    "isDemo": boolean;
                                    "userId": number;
                                    "enabled": boolean;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
                            };
                        };
                    };
                    "security": {
                        "Bearer": any[];
                    }[];
                    "x-rate-limit": number;
                };
            };
            "/projectshares": {
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
                                        };
                                        "sharedByUserId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "createdDate": {
                                            "description": string;
                                            "x-type": string;
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
                                        };
                                        "sharedByUserId": {
                                            "type": string;
                                            "description": string;
                                        };
                                        "createdDate": {
                                            "description": string;
                                            "x-type": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "expiration": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
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
                                    };
                                    "type": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "createdDate": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "expiration": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                            };
                                            "lastUpdated": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
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
                                    };
                                    "account": {
                                        "type": string;
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
                                            };
                                            "lastUpdated": {
                                                "type": string;
                                                "format": string;
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
                                                "properties": {};
                                            };
                                        };
                                        "description": string;
                                        "example": {
                                            "lastUpdated": string;
                                            "createdDate": string;
                                            "data": string;
                                            "appId": number;
                                            "id": number;
                                            "partnerId": number;
                                            "type": string;
                                            "userId": number;
                                            "status": number;
                                        };
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
                                                "userId": {
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
                                                };
                                                "sharedByUserId": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "data": {
                                                    "type": string;
                                                    "description": string;
                                                    "properties": {};
                                                };
                                            };
                                            "description": string;
                                            "example": {
                                                "accountId": number;
                                                "data": string;
                                                "permissions": {};
                                                "name": string;
                                                "implemented": boolean;
                                                "sharedByUserId": number;
                                                "id": number;
                                                "type": number;
                                                "isDemo": boolean;
                                                "userId": number;
                                                "enabled": boolean;
                                            };
                                        };
                                    };
                                };
                                "description": string;
                                "example": {
                                    "projects": {
                                        "accountId": number;
                                        "data": string;
                                        "permissions": {};
                                        "name": string;
                                        "implemented": boolean;
                                        "sharedByUserId": number;
                                        "id": number;
                                        "type": number;
                                        "isDemo": boolean;
                                        "userId": number;
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
                                        "data": string;
                                        "appId": number;
                                        "id": number;
                                        "partnerId": number;
                                        "type": string;
                                        "userId": number;
                                        "status": number;
                                    };
                                };
                            };
                            "responseSchema": {
                                "type": string;
                                "properties": {
                                    "user": {
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
                                            };
                                            "lastUpdated": {
                                                "type": string;
                                                "format": string;
                                                "description": string;
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
                                    };
                                    "account": {
                                        "type": string;
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
                                            };
                                            "lastUpdated": {
                                                "type": string;
                                                "format": string;
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
                                                "properties": {};
                                            };
                                        };
                                        "description": string;
                                        "example": {
                                            "lastUpdated": string;
                                            "createdDate": string;
                                            "data": string;
                                            "appId": number;
                                            "id": number;
                                            "partnerId": number;
                                            "type": string;
                                            "userId": number;
                                            "status": number;
                                        };
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
                                                "userId": {
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
                                                };
                                                "sharedByUserId": {
                                                    "type": string;
                                                    "description": string;
                                                };
                                                "data": {
                                                    "type": string;
                                                    "description": string;
                                                    "properties": {};
                                                };
                                            };
                                            "description": string;
                                            "example": {
                                                "accountId": number;
                                                "data": string;
                                                "permissions": {};
                                                "name": string;
                                                "implemented": boolean;
                                                "sharedByUserId": number;
                                                "id": number;
                                                "type": number;
                                                "isDemo": boolean;
                                                "userId": number;
                                                "enabled": boolean;
                                            };
                                        };
                                    };
                                };
                                "description": string;
                                "example": {
                                    "projects": {
                                        "accountId": number;
                                        "data": string;
                                        "permissions": {};
                                        "name": string;
                                        "implemented": boolean;
                                        "sharedByUserId": number;
                                        "id": number;
                                        "type": number;
                                        "isDemo": boolean;
                                        "userId": number;
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
                                        "data": string;
                                        "appId": number;
                                        "id": number;
                                        "partnerId": number;
                                        "type": string;
                                        "userId": number;
                                        "status": number;
                                    };
                                };
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                    "properties": {};
                                };
                            };
                            "description": string;
                            "example": {
                                "templateName": string;
                                "templateData": string;
                                "email": string;
                            };
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                };
                                "data": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "description": string;
                            "example": {
                                "expires": string;
                                "data": string;
                            };
                        };
                    }[];
                    "responses": {
                        "200": {
                            "description": string;
                            "schema": {
                                "type": string;
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "created": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "expires": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "expires": string;
                                    "data": string;
                                    "created": string;
                                    "id": string;
                                };
                            };
                            "responseSchema": {
                                "type": string;
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "created": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "expires": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "expires": string;
                                    "data": string;
                                    "created": string;
                                    "id": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "created": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "expires": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "expires": string;
                                    "data": string;
                                    "created": string;
                                    "id": string;
                                };
                            };
                            "responseSchema": {
                                "type": string;
                                "properties": {
                                    "id": {
                                        "type": string;
                                        "description": string;
                                    };
                                    "created": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "expires": {
                                        "type": string;
                                        "format": string;
                                        "description": string;
                                    };
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "expires": string;
                                    "data": string;
                                    "created": string;
                                    "id": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                    "properties": {};
                                };
                            };
                            "example": {
                                "data": string;
                                "templateName": string;
                                "email": string;
                            };
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "data": string;
                                };
                            };
                            "responseSchema": {
                                "properties": {
                                    "data": {
                                        "type": string;
                                        "description": string;
                                        "properties": {};
                                    };
                                };
                                "example": {
                                    "data": string;
                                };
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                                        };
                                    };
                                };
                                "description": string;
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
                    };
                    "type": {
                        "type": string;
                        "description": string;
                    };
                    "createdDate": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "expiration": {
                        "type": string;
                        "format": string;
                        "description": string;
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
            };
            "MFACreateParams": {
                "required": string[];
                "properties": {
                    "email": {
                        "type": string;
                        "format": string;
                    };
                };
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
            };
            "Account": {
                "type": string;
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
                    };
                    "lastUpdated": {
                        "type": string;
                        "format": string;
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
                        "properties": {};
                    };
                };
                "description": string;
                "example": {
                    "lastUpdated": string;
                    "createdDate": string;
                    "data": string;
                    "appId": number;
                    "id": number;
                    "partnerId": number;
                    "type": string;
                    "userId": number;
                    "status": number;
                };
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
                        "properties": {};
                    };
                };
                "description": string;
                "example": {
                    "data": string;
                    "partnerId": number;
                    "type": string;
                    "status": number;
                };
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
                    };
                    "userNameFormat": {
                        "type": string;
                        "description": string;
                        "default": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "description": string;
                "example": {
                    "allowSignups": boolean;
                    "website": string;
                    "userNameFormat": string;
                    "data": string;
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
            };
            "Authorization": {
                "type": string;
                "properties": {
                    "user": {
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
                            };
                            "lastUpdated": {
                                "type": string;
                                "format": string;
                                "description": string;
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
                    };
                    "account": {
                        "type": string;
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
                            };
                            "lastUpdated": {
                                "type": string;
                                "format": string;
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
                                "properties": {};
                            };
                        };
                        "description": string;
                        "example": {
                            "lastUpdated": string;
                            "createdDate": string;
                            "data": string;
                            "appId": number;
                            "id": number;
                            "partnerId": number;
                            "type": string;
                            "userId": number;
                            "status": number;
                        };
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
                                "userId": {
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
                                };
                                "sharedByUserId": {
                                    "type": string;
                                    "description": string;
                                };
                                "data": {
                                    "type": string;
                                    "description": string;
                                    "properties": {};
                                };
                            };
                            "description": string;
                            "example": {
                                "accountId": number;
                                "data": string;
                                "permissions": {};
                                "name": string;
                                "implemented": boolean;
                                "sharedByUserId": number;
                                "id": number;
                                "type": number;
                                "isDemo": boolean;
                                "userId": number;
                                "enabled": boolean;
                            };
                        };
                    };
                };
                "description": string;
                "example": {
                    "projects": {
                        "accountId": number;
                        "data": string;
                        "permissions": {};
                        "name": string;
                        "implemented": boolean;
                        "sharedByUserId": number;
                        "id": number;
                        "type": number;
                        "isDemo": boolean;
                        "userId": number;
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
                        "data": string;
                        "appId": number;
                        "id": number;
                        "partnerId": number;
                        "type": string;
                        "userId": number;
                        "status": number;
                    };
                };
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
                            };
                            "type": {
                                "type": string;
                                "description": string;
                            };
                            "createdDate": {
                                "type": string;
                                "format": string;
                                "description": string;
                            };
                            "expiration": {
                                "type": string;
                                "format": string;
                                "description": string;
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
                    };
                };
                "description": string;
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
                        "properties": {};
                    };
                };
                "description": string;
                "example": {
                    "templateName": string;
                    "templateData": string;
                    "email": string;
                };
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
            };
            "Permissions": {
                "type": string;
                "description": string;
                "items": {
                    "type": string;
                };
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
                    "userId": {
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
                    };
                    "sharedByUserId": {
                        "type": string;
                        "description": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "description": string;
                "example": {
                    "accountId": number;
                    "data": string;
                    "permissions": {};
                    "name": string;
                    "implemented": boolean;
                    "sharedByUserId": number;
                    "id": number;
                    "type": number;
                    "isDemo": boolean;
                    "userId": number;
                    "enabled": boolean;
                };
            };
            "ProjectCreateParams": {
                "type": string;
                "properties": {
                    "accountId": {
                        "description": string;
                    };
                    "name": {
                        "type": string;
                    };
                    "type": {
                        "description": string;
                    };
                };
                "description": string;
                "example": {
                    "accountId": string;
                    "name": string;
                    "type": string;
                };
            };
            "ProjectDefaultParams": {
                "type": string;
                "properties": {
                    "projectId": {
                        "type": string;
                        "description": string;
                    };
                };
            };
            "ProjectPermissions": {
                "type": string;
                "description": string;
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
                    };
                    "sharedByUserId": {
                        "type": string;
                        "description": string;
                    };
                    "createdDate": {
                        "description": string;
                        "x-type": string;
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
            };
            "ProjectUpdateParams": {
                "properties": {
                    "name": {
                        "type": string;
                    };
                    "enabled": {
                        "type": string;
                    };
                };
                "example": {
                    "name": string;
                    "enabled": boolean;
                };
            };
            "Stash": {
                "type": string;
                "properties": {
                    "id": {
                        "type": string;
                        "description": string;
                    };
                    "created": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "expires": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "expires": string;
                    "data": string;
                    "created": string;
                    "id": string;
                };
            };
            "StashCreateParams": {
                "type": string;
                "required": string[];
                "properties": {
                    "expires": {
                        "type": string;
                        "format": string;
                        "description": string;
                    };
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "description": string;
                "example": {
                    "expires": string;
                    "data": string;
                };
            };
            "User": {
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
                    };
                    "lastUpdated": {
                        "type": string;
                        "format": string;
                        "description": string;
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
            };
            "UserUpdateParams": {
                "type": string;
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
                "additionalProperties": {};
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
                        "properties": {};
                    };
                };
                "example": {
                    "data": string;
                    "templateName": string;
                    "email": string;
                };
            };
            "VerificationApprovedResponse": {
                "properties": {
                    "data": {
                        "type": string;
                        "description": string;
                        "properties": {};
                    };
                };
                "example": {
                    "data": string;
                };
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
                        };
                    };
                };
                "description": string;
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
                    };
                };
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
                    };
                };
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
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "data": {
                                        "showcases": string[];
                                    };
                                    "message": string;
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
                                    };
                                };
                                "example": {
                                    "code": number;
                                    "data": {
                                        "testimonials": string[];
                                    };
                                    "message": string;
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
                    };
                };
                "example": {
                    "code": number;
                    "data": {
                        "testimonials": string[];
                    };
                    "message": string;
                };
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
                    };
                };
                "example": {
                    "code": number;
                    "data": {
                        "showcases": string[];
                    };
                    "message": string;
                };
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
            };
        };
    };
};
export { Specs };
