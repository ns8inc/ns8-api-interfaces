
/**
 * Declarations for the NS8 V2 API
 * This is a generated file, do not edit.
*/
declare module "ns8-api-interfaces" {
    
    /**
     * Declarations for: Administration API
     * User/account/project provisioning and authentication
    */
    export namespace Admin {
        
        /**
         * The API version for the namespace.
         * 
        */
        export const VERSION = '2.0';
        
        
        /**
         * Represents an access token's data.
         * 
        */
        export interface AccessToken {
            
            /**
             * A GUID used for authenticating API calls. Place this access token in the Authorization header when making API calls as described in  https://tools.ietf.org/html/rfc6750.  For example Authorization: 'Bearer: token'
            */
            "id": string,
            
            /**
             * The user id the token was issued to.
            */
            "userId": number,
            
            /**
             * The application id the token was issued for.
            */
            "appId": number,
            
            /**
             * The account id the token was issued for. If this is set, the token is restricted to this account.
            */
            "accountId"?: number,
            
            /**
             * The project id the token was issued for. If this is set, the token is restricted to this project.
            */
            "projectId"?: number,
            
            /**
             * An array of permissions.
             * 
            */
            "permissions"?: Permissions,
            
            /**
             * A description of the source of token, like 'api'.
            */
            "type"?: string,
            
            /**
             * Whether the token was generated for remote administration.
            */
            "adminMode"?: boolean,
        }
        
        
        /**
         * Parameters for creating an access token.
         * 
        */
        export interface AccessTokenCreateParams {
            
            /**
             * The id of the user requesting the access token.
            */
            "userId": number,
            
            /**
             * The id of the application the access token is for.
            */
            "appId": number,
            
            /**
             * The account id. If this is specified, access is restricted to this account.
            */
            "accountId"?: number,
            
            /**
             * The project id. If this is specified, access is restricted to this project.
            */
            "projectId"?: number,
            
            /**
             * An array of permissions.
             * 
            */
            "permissions": Permissions,
        }
        
        
        /**
         * The access token string used for authentication.
         * 
        */
        export type AccessTokenString = string;
        
        
        /**
         * Represents an account.  Users can have an account for each application.
         * 
        */
        export interface Account {
            
            /**
             * The account id. This is the primary key.
            */
            "id"?: number,
            
            /**
             * The id of the user that created the account.
            */
            "userId"?: number,
            
            /**
             * The application id of the account.  Call /v2/applications to see a list of applications supported.
            */
            "appId"?: number,
            
            /**
             * The status of the account.  0 is active, 3 is canceled.
            */
            "status"?: number,
            
            /**
             * The application specific account type.
            */
            "type"?: string,
            
            /**
             * The partner id credited with this account.
            */
            "partnerId"?: number,
            
            /**
             * Account specific metadata.
            */
            "data"?: any,
        }
        
        
        /**
         * Parameters to create an account
         * 
        */
        export interface AccountCreateParams {
            
            /**
             * The id of the user that is creating the account.
            */
            "userId": number,
            
            /**
             * The application id to user for the account.  Call /applications to see a list of applications supported.
            */
            "appId": number,
            
            /**
             * The status of the account.  0 is active, 3 is canceled.
            */
            "status"?: number,
            
            /**
             * The application specific account type.
            */
            "type"?: string,
            
            /**
             * The partner id credited with this account.
            */
            "partnerId"?: number,
            
            /**
             * The discount percentage for billing.
            */
            "discountPct"?: number,
        }
        
        
        /**
         * The set of attributes to update. Use the merge-patch format  https://tools.ietf.org/html/rfc7396
         * 
        */
        export interface AccountUpdateParams {
            
            /**
             * The status of the account.  0 is active, 3 is canceled.
            */
            "status"?: number,
            
            /**
             * The application specific account type.
            */
            "type"?: string,
            
            /**
             * The partner id credited with this account.
            */
            "partnerId"?: number,
            
            /**
             * Application specific data.
            */
            "data"?: any,
        }
        
        
        /**
         * Represents a product or service available by NS8.
         * 
        */
        export interface Application {
            
            /**
             * The application id. This is the primary key.
            */
            "id"?: number,
            
            /**
             * The name of the application.
            */
            "name"?: string,
            
            /**
             * Whether the application allows public signups.
            */
            "allowSignups"?: boolean,
            
            /**
             * For applications that support prepaying, this is the minimum amount.
            */
            "minimumPrepay"?: number,
            
            /**
             * The description of the application.
            */
            "description"?: string,
            
            /**
             * The host URL of the application.
             * format {uri}
            */
            "host"?: string,
            
            /**
             * The website URL for the application.
             * format {uri}
            */
            "website"?: string,
            
            /**
             * For applications that have a console separate from the main website, this is the URL of the console.
             * format {uri}
            */
            "consoleHost"?: string,
            
            /**
             * Whether this application supports commissions.
            */
            "commissions"?: boolean,
            
            /**
             * The available permissions supported the the application.
            */
            "permissions"?: Array<ApplicationPermission>,
            
            /**
             * The main support email for the application.
             * format {email}
            */
            "supportEmail"?: string,
            
            /**
             * The reporting configuration for the application.
             * 
            */
            "reporting"?: ApplicationReporting,
            
            /**
             * The required format for user names.
            */
            "userNameFormat"?: string,
            
            /**
             * Application specific metadata.
            */
            "data"?: any,
        }
        
        
        /**
         * An application role-based permission.
         * 
        */
        export interface ApplicationPermission {
            
            /**
             * The permission name.
            */
            "id": string,
            
            /**
             * The description of the permission.
            */
            "description": string,
        }
        
        
        /**
         * The reporting configuration for the application.
         * 
        */
        export interface ApplicationReporting {
            
            /**
             * For applications that support analytics, this is the path of the API endpoint for queries.
            */
            "apiEndpoint"?: string,
        }
        
        
        /**
         * Represents what an access token is authorized for. Authorizations include the user object that created the access token, an account and projects.
         * 
        */
        export interface Authorization {
            
            /**
             * The access token string used for authentication.
             * 
            */
            "accessToken"?: AccessTokenString,
            "user"?: User,
            
            /**
             * Represents an account.  Users can have an account for each application.
             * 
            */
            "account"?: Account,
            
            /**
             * An array of authorized projects.
            */
            "projects"?: Array<Project>,
        }
        
        
        /**
         * Parameters for creating an authorization.
         * 
        */
        export interface AuthorizeParams {
            
            /**
             * The access token string used for authentication.
             * 
            */
            "accessToken"?: AccessTokenString,
        }
        
        
        /**
         * Parameters for creating an authorization based on a user name and password. Pass the application id to authorize a specific account.
         * 
        */
        export interface LoginParams {
            
            /**
             * The user name
            */
            "name": string,
            
            /**
             * The user's password
             * format {password}
            */
            "password": string,
            
            /**
             * The id of the application to log into.
            */
            "appId"?: number,
        }
        
        
        /**
         * Parameters for changing a user's password.
         * 
        */
        export interface PasswordChangeParams {
            
            /**
             * The access token string used for authentication.
             * 
            */
            "accessToken"?: AccessTokenString,
            
            /**
             * The user's existing password.
             * format {password}
            */
            "oldPassword"?: string,
            
            /**
             * The new password for the user.
             * format {password}
            */
            "newPassword"?: string,
        }
        
        
        /**
         * Parameters to complete a password reset.
         * 
        */
        export interface PasswordResetParams {
            
            /**
             * The password reset token the was sent to the user.
            */
            "token"?: string,
            
            /**
             * The new password.
            */
            "password"?: string,
        }
        
        
        /**
         * Represents a Stripe payment.
         * 
        */
        export interface Payment {
            
            /**
             * The Stripe id of the payment.
            */
            "id"?: string,
            
            /**
             * The currency of the payment.
            */
            "currency"?: string,
            
            /**
             * format {timestamp}
            */
            "created"?: string,
            
            /**
             * The Stripe status code.
            */
            "status"?: string,
            
            /**
             * The description of the payment.
            */
            "description"?: string,
            
            /**
             * The Stripe customer id.
            */
            "customer_id"?: string,
            
            /**
             * The Stripe invoice id.
            */
            "invoice"?: string,
            
            /**
             * The discount for the account.
            */
            "amount"?: number,
            
            /**
             * The balance remaining for prepaid accounts.
            */
            "refunded"?: boolean,
            
            /**
             * The balance remaining for prepaid accounts.
            */
            "amount_refunded"?: number,
        }
        
        
        /**
         * Represents a Stripe payment card.
         * 
        */
        export interface PaymentCard {
            
            /**
             * The id of the card.
            */
            "id"?: string,
            
            /**
             * The card brand.
            */
            "brand"?: string,
            
            /**
             * The last four digits of the card.
            */
            "last4"?: string,
            
            /**
             * The expiration month of the card.
            */
            "exp_month"?: number,
            
            /**
             * The expiration year of the card.
            */
            "exp_year"?: number,
            
            /**
             * The 2-digit country code.
            */
            "country"?: string,
        }
        
        
        /**
         * Parameters for creating a payment for an account.
         * 
        */
        export interface PaymentCreateParams {
            
            /**
             * The amount of the payment.
            */
            "amount"?: number,
            
            /**
             * The description of the payment.
            */
            "description"?: string,
        }
        
        
        /**
         * The Stripe payment customer associated with the payment methods.
         * 
        */
        export interface PaymentCustomer {
            
            /**
             * The default card id to use for recurring payments.
            */
            "default_source"?: string,
            
            /**
             * The remaining balance for prepaid accounts.
            */
            "account_balance"?: number,
            
            /**
             * format {timestamp}
            */
            "created"?: string,
            
            /**
             * The email of the customer.
             * format {email}
            */
            "email"?: string,
            
            /**
             * The discount for the account.
            */
            "discount"?: number,
            
            /**
             * The currency to use.
            */
            "currency"?: string,
        }
        
        
        /**
         * The payment history for the account.
         * 
        */
        export interface PaymentHistory {
            
            /**
             * The discount for the account.
            */
            "discount"?: number,
            
            /**
             * The balance remaining for prepaid accounts.
            */
            "balance"?: number,
            
            /**
             * An array of payments.
            */
            "payments"?: Array<Payment>,
        }
        
        
        /**
         * Parameters for creating a Stripe payment method.
         * 
        */
        export interface PaymentMethodCreateParams {
            
            /**
             * The Stripe token generated by the Stripe client API.
            */
            "stripeToken"?: string,
        }
        
        
        /**
         * Parameters for setting the default payment method for an account.
         * 
        */
        export interface PaymentMethodPrimaryParams {
            
            /**
             * The id of the payment method.
            */
            "id"?: string,
        }
        
        
        /**
         * The payment methods for a customer.
         * 
        */
        export interface PaymentMethods {
            
            /**
             * The Stripe payment customer associated with the payment methods.
             * 
            */
            "customer"?: PaymentCustomer,
            
            /**
             * An array of cards
            */
            "cards"?: Array<PaymentCard>,
        }
        
        
        /**
         * An array of permissions.
         * 
        */
        export type Permissions = Array<string>;
        
        
        /**
         * Represents a website or other entity within an account. An account can have multiple projects. For example, the analytics product requires management of multiple websites. 
         * 
        */
        export interface Project {
            
            /**
             * The project id. This is the primary key.
            */
            "id": number,
            
            /**
             * The id of the account.
            */
            "accountId": number,
            
            /**
             * The id of the user that created the project.
            */
            "userId"?: number,
            
            /**
             * The name of the project. This must be unique to the account.
            */
            "name": string,
            
            /**
             * Whether the project is enabled.
            */
            "enabled"?: boolean,
            
            /**
             * Whether the project is for a demo account. Demo projects are generally read-only in the user interface.
            */
            "isDemo"?: boolean,
            
            /**
             * Application specific indicator of whether the project has been implemented. For example, whether a website project has tracked any data.
            */
            "implemented"?: boolean,
            
            /**
             * The application-specific permissions for a shared project.
             * 
            */
            "permissions"?: ProjectPermissions,
            
            /**
             * For shared project, the id of the user that shared the project.
            */
            "sharedByUserId"?: number,
            
            /**
             * Project specific metadata.
            */
            "data"?: any,
        }
        
        
        /**
         * Parameters to create a project.
         * 
        */
        export interface ProjectCreateParams {
            "name"?: string,
        }
        
        export interface ProjectDefaultParams {
            
            /**
             * The project id to set to the default for the account.
            */
            "projectId"?: number,
        }
        
        
        /**
         * The application-specific permissions for a shared project.
         * 
        */
        export type ProjectPermissions = string;
        
        export interface ProjectShare {
            
            /**
             * The application id the project is associated with.
            */
            "appId"?: number,
            
            /**
             * The account id that created the project.
            */
            "accountId"?: number,
            
            /**
             * The project id to share.
            */
            "projectId"?: number,
            
            /**
             * The id of the user the project is shared with.
            */
            "userId"?: number,
            
            /**
             * The user name the project is shared with.
            */
            "userName"?: string,
            
            /**
             * The application-specific permissions for a shared project.
             * 
            */
            "permissions"?: ProjectPermissions,
            
            /**
             * The id of the user that shared the project.
            */
            "sharedByUserId"?: number,
        }
        
        export interface ProjectUpdateParams {
            "name"?: string,
            "enabled"?: boolean,
        }
        
        export interface User {
            
            /**
             * The user id. This is the primary key.
            */
            "id"?: number,
            
            /**
             * The user name, which is the user's email address unless the application allows for other formats.
            */
            "name"?: string,
            "firstName"?: string,
            "lastName"?: string,
            
            /**
             * The email to use to communicate with the user.  If this is not provided, the user's name is used.
             * format {email}
            */
            "email"?: string,
            "status"?: number,
        }
        
        export interface UserCreateParams {
            
            /**
             * The name of the user, which is generally an email address unless if the  application's user name format allows other types.
            */
            "name": string,
            
            /**
             * ddd
             * format {email}
            */
            "email"?: string,
            
            /**
             * format {password}
            */
            "password": string,
            "firstName"?: string,
            "lastName"?: string,
            
            /**
             * format {phone}
            */
            "phone"?: string,
            "timezone"?: string,
        }
        
        export interface UserNameParams {
            
            /**
             * The new user name
            */
            "name": string,
        }
        
        
        /**
         * The set of attributes to update. Use the merge-patch format  https://tools.ietf.org/html/rfc7396
         * 
        */
        export interface UserUpdateParams {
            "firstName"?: string,
            "lastName"?: string,
            
            /**
             * format {email}
            */
            "email"?: string,
            
            /**
             * format {phone}
            */
            "phone"?: string,
            
            /**
             * format {timezone}
            */
            "timezone"?: string,
        }
        
        export interface VerificationCreateParams {
            
            /**
             * The email address to send the verification to.
             * format {email}
            */
            "email": string,
            
            /**
             * The internal email template name to use for the email sent.
            */
            "templateName": string,
            
            /**
             * An object containing data to store with the verification.
            */
            "data": any,
        }
        
        export interface VerificationApprovedResponse {
            
            /**
             * Any data sent with the validation request, like name.
            */
            "data"?: any,
        }
        
        export interface VerificationCreateResponse {
            
            /**
             * The validation key to send to the user.
            */
            "key"?: string,
        }
        
        
        /**
         * A REST error.
         * 
        */
        export interface Error {
            
            /**
             * HTTP status code for the error.
            */
            "code": number,
            
            /**
             * A high-level description of the error.
            */
            "message": string,
            
            /**
             * For API calls that need to return validation errors, this array contains a list of each failed validation.
            */
            "errors"?: Array<Error_errors>,
        }
        
        export interface Error_errors {
            
            /**
             * The attribute or field name that failed validation.
            */
            "name"?: string,
            "code"?: number,
            "message": string,
        }
    }
    
    /**
     * Declarations for: Analytics API
     * Query interface and application data maintenance
    */
    export namespace Analytics {
        
        /**
         * The API version for the namespace.
         * 
        */
        export const VERSION = '2.0';
        
        export interface QueryResult {
            "columns"?: Array<any>,
            "rows"?: Array<any>,
        }
        
        export interface QueryResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
            "data"?: QueryResult,
        }
        
        export interface APIResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
        
        export interface APIError {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
        
        export interface DuplicateError {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
        
        export interface Entity {
            "name"?: string,
            "description"?: string,
            "attributes"?: Attribute,
        }
        
        export interface Attribute {
            "name"?: string,
            "title"?: string,
            "description"?: string,
            "dataType"?: string,
            "isElement"?: boolean,
            "isMetric"?: boolean,
        }
        
        export interface SegmentCreateParams {
            "accessToken"?: string,
            "name"?: string,
            "query"?: any,
            "appliesTo"?: string,
            "projectIds"?: Array<number>,
        }
        
        export interface CampaignIdsUpdateParams {
            "accessToken"?: string,
            "projectId"?: number,
            "campaignIds"?: Array<CampaignReferrers>,
        }
        
        export interface CampaignReferrers {
            
            /**
             * A referrer to assign a campaign to
            */
            "referrer"?: string,
            
            /**
             * A campaign name
            */
            "campaign"?: string,
        }
        
        export interface CampaignReferrersUpdateParams {
            "accessToken"?: string,
            "projectId"?: number,
            "campaignReferrers"?: Array<string>,
        }
        
        export interface Dashboard {
            
            /**
             * The dashboard name
            */
            "name"?: string,
            
            /**
             * The date the dashboard was created
             * format {date}
            */
            "createdDate"?: string,
            
            /**
             * The dashboard definition parameters
            */
            "params"?: any,
        }
        
        export interface DashboardsUpdateParams {
            "accessToken"?: string,
            "projectId"?: number,
            "dashboards"?: Array<Dashboard>,
        }
        
        export interface QueryParams {
            
            /**
             * The access token for the request
            */
            "accessToken"?: string,
            
            /**
             * The query.  See the main site for help on query syntax.
            */
            "query": any,
        }
    }
    
    /**
     * Declarations for: NS8 Data Services
     * Query interface for realtime user scoring and profiling
    */
    export namespace DataServices {
        
        /**
         * The API version for the namespace.
         * 
        */
        export const VERSION = '2.0';
        
        export interface APIResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
        
        export interface APIError {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
    }
    
    /**
     * Declarations for: Monitoring API
     * Monitoring API
    */
    export namespace Monitoring {
        
        /**
         * The API version for the namespace.
         * 
        */
        export const VERSION = '2.0';
        
        export interface AccessTokenCreateParams {
            
            /**
             * The access token from the owner of the account.  This can be generated from the /login call.
            */
            "accessToken": string,
            
            /**
             * The permissions to grant.
            */
            "permissions": Array<string>,
        }
        
        export interface APIResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
        
        export interface Login {
            "accessToken"?: string,
            "expiration"?: string,
            "user"?: User,
        }
        
        export interface APIError {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
        
        export interface DuplicateError {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
        
        export interface Station {
            "url"?: string,
            "description"?: string,
            "country"?: string,
            "longitude"?: string,
            "latitude"?: string,
        }
        
        export interface AuthorizeParams {
            "accessToken"?: string,
        }
        
        export interface LoginParams {
            
            /**
             * format {email}
            */
            "name": string,
            
            /**
             * format {password}
            */
            "password": string,
            
            /**
             * Monitoring uses appId of 6
             * format {int32}
            */
            "appId"?: number,
            
            /**
             * The UTC date of when the token should expire
            */
            "expiration"?: string,
        }
        
        export interface UserParams {
            
            /**
             * The application id.  Use 6 for monitoring.
            */
            "appId": number,
            
            /**
             * format {email}
            */
            "name": string,
            "password": string,
            
            /**
             * 0 = enabled
            */
            "status"?: number,
        }
        
        export interface User {
            
            /**
             * format {int32}
            */
            "id"?: number,
            "name"?: string,
            "status"?: number,
            "account"?: any,
        }
        
        export interface Authorization {
            "expiration"?: string,
            "user"?: User,
        }
        
        export interface ContactCreateParams {
            
            /**
             * The access token for the request.  The access token must have the 'manage' permission.
            */
            "accessToken"?: string,
            
            /**
             * The contact's name.
            */
            "name": string,
            "type": string,
            
            /**
             * The email address of SMS number of the contact, depending on the type selected.
            */
            "endpoint": string,
        }
    }
    
    /**
     * Declarations for: Partner API
     * Partner API
    */
    export namespace Partner {
        
        /**
         * The API version for the namespace.
         * 
        */
        export const VERSION = '2.0';
        
        export interface ProfileResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
            
            /**
             * The partner profile
            */
            "data"?: any,
        }
        
        export interface PayeeResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
            
            /**
             * The partner's payee
            */
            "data"?: any,
        }
        
        export interface ShowcaseResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
            
            /**
             * The partner showcase
            */
            "data"?: any,
        }
        
        export interface ShowcasePostResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
            
            /**
             * The showcase id
            */
            "data"?: any,
        }
        
        export interface TestimonialResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
            
            /**
             * The partner testimonial
            */
            "data"?: any,
        }
        
        export interface TestimonialsResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
            "data"?: Testimonials,
        }
        
        export interface ShowcasesResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
            "data"?: Showcases,
        }
        
        export interface Testimonials {
            "testimonials"?: Array<any>,
        }
        
        export interface ProfilesResponse {
            
            /**
             * The page number of the results.
            */
            "currentPage"?: number,
            
            /**
             * Whether there is a next page of results.
            */
            "next"?: boolean,
            
            /**
             * An array of partner profiles.
            */
            "profiles"?: Array<any>,
        }
        
        export interface Showcases {
            "showcases"?: Array<any>,
        }
        
        export interface TestimonialPostResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
            
            /**
             * The testimonial id
            */
            "data"?: any,
        }
        
        export interface APIResponse {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
        
        export interface APIError {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
        
        export interface DuplicateError {
            
            /**
             * format {int32}
            */
            "code"?: number,
            "message"?: string,
        }
        
        export interface ProfilePutParams {
            
            /**
             * The access token for the request
            */
            "accessToken"?: string,
            
            /**
             * The partner profile.
            */
            "profile": any,
        }
        
        export interface ShowcasePutParams {
            
            /**
             * The access token for the request
            */
            "accessToken"?: string,
            
            /**
             * The partner showcase.
            */
            "showcase": any,
        }
        
        export interface ShowcasePatchParams {
            
            /**
             * The access token for the request
            */
            "accessToken"?: string,
            
            /**
             * The partner showcase.
            */
            "showcase": any,
        }
        
        export interface ShowcasePostParams {
            
            /**
             * The access token for the request
            */
            "accessToken"?: string,
            
            /**
             * The partner showcase.
            */
            "showcase": any,
        }
        
        export interface TestimonialPutParams {
            
            /**
             * The access token for the request
            */
            "accessToken"?: string,
            
            /**
             * The partner testimonial.
            */
            "testimonial": any,
        }
        
        export interface TestimonialPatchParams {
            
            /**
             * The access token for the request
            */
            "accessToken"?: string,
            
            /**
             * The partner testimonial.
            */
            "testimonial": any,
        }
        
        export interface TestimonialPostParams {
            
            /**
             * The access token for the request
            */
            "accessToken"?: string,
            
            /**
             * The partner testimonial.
            */
            "testimonial": any,
        }
        
        export interface PayeePutParams {
            
            /**
             * The access token for the request
            */
            "accessToken"?: string,
            
            /**
             * The partner payee.
            */
            "payee": any,
        }
    }
}
