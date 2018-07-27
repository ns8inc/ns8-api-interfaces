export declare module Monitoring {
    class AccessTokenCreateParams {
        accessToken: string;
        permissions: Array<string>;
    }
    class APIResponse {
        code?: number;
        message?: string;
    }
    class Login {
        accessToken?: string;
        expiration?: string;
        user?: undefined;
    }
    class APIError {
        code?: number;
        message?: string;
    }
    class DuplicateError {
        code?: number;
        message?: string;
    }
    class Station {
        url?: string;
        description?: string;
        country?: string;
        longitude?: string;
        latitude?: string;
    }
    class AuthorizeParams {
        accessToken?: string;
    }
    class LoginParams {
        name: string;
        password: string;
        appId?: number;
        expiration?: string;
    }
    class UserParams {
        appId: number;
        name: string;
        password: string;
        status?: number;
    }
    class User {
        id?: number;
        name?: string;
        status?: number;
        account?: any;
    }
    class Authorization {
        expiration?: string;
        user?: undefined;
    }
    class ContactCreateParams {
        accessToken?: string;
        name: string;
        type: string;
        endpoint: string;
    }
}
