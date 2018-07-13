export declare module Admin {
    class AccessToken {
        id: string;
        userId: number;
        appId: number;
        accountId?: number;
        projectId?: number;
        permissions?: Permissions;
        type?: string;
        createdDate?: Date;
        expiration?: Date;
        adminMode?: boolean;
    }
    class AccessTokenCreateParams {
        userId: number;
        appId: number;
        accountId?: number;
        projectId?: number;
        expiration?: Date;
        permissions: Permissions;
    }
    class AccessTokenString {
    }
    class Account {
        id?: number;
        userId?: number;
        appId?: number;
        status?: number;
        createdDate?: Date;
        lastUpdated?: Date;
        type?: string;
        partnerId?: number;
        data?: any;
    }
    class AccountCreateParams {
        appId: number;
        status?: number;
        type?: string;
        partnerId?: number;
        discountPct?: number;
    }
    class AccountUpdateParams {
        status?: number;
        type?: string;
        partnerId?: number;
        data?: any;
    }
    class Application {
        id?: number;
        name?: string;
        allowSignups?: boolean;
        minimumPrepay?: number;
        description?: string;
        host?: string;
        website?: string;
        consoleHost?: string;
        commissions?: boolean;
        permissions?: Array<ApplicationPermission>;
        supportEmail?: string;
        reporting?: ApplicationReporting;
        userNameFormat?: string;
        data?: any;
    }
    class ApplicationPermission {
        id: string;
        description: string;
    }
    class ApplicationReporting {
        apiEndpoint?: string;
    }
    class Authorization {
        accessToken?: AccessTokenString;
        expiration?: Date;
        user?: User;
        account?: Account;
        projects?: Array<Project>;
    }
    class AuthorizeParams {
        accessToken?: AccessTokenString;
    }
    class LoginParams {
        name: string;
        password: string;
        appId?: number;
        expiration?: Date;
    }
    class PasswordChangeParams {
        oldPassword: string;
        newPassword: string;
    }
    class PasswordResetParams {
        token?: string;
        password?: string;
    }
    class Payment {
        id?: string;
        currency?: string;
        created?: string;
        status?: string;
        description?: string;
        customer_id?: string;
        invoice?: string;
        amount?: number;
        refunded?: boolean;
        amount_refunded?: number;
    }
    class PaymentCard {
        id?: string;
        brand?: string;
        last4?: string;
        exp_month?: number;
        exp_year?: number;
        country?: string;
    }
    class PaymentCreateParams {
        amount?: number;
        description?: string;
    }
    class PaymentCustomer {
        default_source?: string;
        account_balance?: number;
        created?: string;
        email?: string;
        discount?: number;
        currency?: string;
    }
    class PaymentHistory {
        discount?: number;
        balance?: number;
        payments?: Array<Payment>;
    }
    class PaymentMethodCreateParams {
        stripeToken?: string;
    }
    class PaymentMethodPrimaryParams {
        id?: string;
    }
    class PaymentMethods {
        customer?: PaymentCustomer;
        cards?: Array<PaymentCard>;
    }
    class Permissions {
    }
    class Project {
        id: number;
        accountId: number;
        userId?: number;
        name: string;
        type?: undefined;
        enabled?: boolean;
        isDemo?: boolean;
        implemented?: boolean;
        permissions?: ProjectPermissions;
        sharedByUserId?: number;
        data?: any;
    }
    class ProjectCreateParams {
        accountId?: undefined;
        name?: string;
        type?: undefined;
    }
    class ProjectDefaultParams {
        projectId?: number;
    }
    class ProjectPermissions {
    }
    class ProjectShare {
        appId?: number;
        accountId?: number;
        projectId?: number;
        userId?: number;
        userName?: string;
        permissions?: ProjectPermissions;
        sharedByUserId?: number;
        createdDate?: Date;
    }
    class ProjectUpdateParams {
        name?: string;
        enabled?: boolean;
    }
    class User {
        id?: number;
        name?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        status?: number;
        createdDate?: Date;
        lastUpdated?: Date;
    }
    class UserCreateParams {
        name: string;
        email?: string;
        password: string;
        firstName?: string;
        lastName?: string;
        phone?: string;
        timezone?: string;
    }
    class UserNameParams {
        name: string;
    }
    class UserUpdateParams {
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        timezone?: string;
    }
    class VerificationCreateParams {
        email: string;
        templateName: string;
        data: any;
    }
    class VerificationApprovedResponse {
        data?: any;
    }
    class VerificationCreateResponse {
        key?: string;
    }
    class Error {
        code: number;
        message: string;
        errors?: Array<Error_errors>;
    }
    class Error_errors {
        name?: string;
        code?: number;
        message: string;
    }
}
