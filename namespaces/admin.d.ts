export declare namespace Admin {
    class AccessToken {
        id: string;
        userId: number;
        appId: number;
        accountId?: number;
        projectId?: number;
        permissions?: Permissions;
        type?: string;
        createdDate?: string;
        expiration?: string;
    }
    class AccessTokenCreateParams {
        name: string;
        password: string;
        appId: number;
    }
    class Account {
        id: number;
        userId: number;
        appId: number;
        status?: number;
        createdDate?: string;
        lastUpdated?: string;
        type?: string;
        partnerId?: number;
    }
    class AccountCreateParams {
        appId: number;
        userId: number;
        status?: number;
        type?: string;
        partnerId?: number;
        discountPct?: number;
    }
    class AccountUpdateParams {
        status?: number;
        type?: string;
        partnerId?: number;
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
    }
    class ApplicationPermission {
        id: string;
        description: string;
    }
    class ApplicationReporting {
        apiEndpoint?: string;
    }
    class Authorization {
        user: User;
        account: Account;
        projects?: Array<Project>;
        expiration?: string;
        currentProjectId?: number;
        projectId?: number;
    }
    class AuthorizeParams {
        accessToken?: AccessToken;
    }
    class Notification {
        email: string;
        templateName: string;
        templateData: any;
    }
    class PasswordChangeParams {
        oldPassword: string;
        newPassword: string;
    }
    class UpdatePasswordParams {
        password: string;
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
        appId: number;
        name: string;
        type?: string;
        enabled?: boolean;
        isDemo?: boolean;
        implemented?: boolean;
        permissions?: ProjectPermissions;
        sharedByUserId?: number;
    }
    class ProjectCreateParams {
        name: string;
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
        createdDate?: string;
    }
    class ProjectUpdateParams {
        name?: string;
        enabled?: boolean;
        type?: string;
        implemented?: boolean;
    }
    class Stash {
        id: string;
        expires?: string;
        data?: any;
    }
    class StashCreateParams {
        expires?: string;
        data: any;
    }
    class User {
        id: number;
        name: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        status?: number;
        phone?: string;
        timezone?: string;
        createdDate?: string;
        lastUpdated?: string;
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
