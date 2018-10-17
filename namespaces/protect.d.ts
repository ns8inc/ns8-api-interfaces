export declare namespace Protect {
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
    class Authorization {
        user: User;
        account: Account;
        projects?: Array<Project>;
        expiration?: string;
        currentProjectId?: number;
        projectId?: number;
    }
    class Notification {
        email: string;
        templateName: string;
        templateData: any;
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
    class ProjectPermissions {
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
    class UserUpdateParams {
        firstName?: string;
        lastName?: string;
        email?: string;
        phone?: string;
        timezone?: string;
    }
    class PasswordChangeParams {
        oldPassword: string;
        newPassword: string;
    }
    class UpdatePasswordParams {
        password: string;
    }
    class QueryResponse {
        query?: any;
        columns?: Array<any>;
        rows?: Array<any>;
    }
    class Entity {
        name?: string;
        description?: string;
        attributes?: Array<Attribute>;
    }
    class Attribute {
        name?: string;
        title?: string;
        description?: string;
        dataType?: string;
        isElement?: boolean;
        isMetric?: boolean;
    }
    class QueryParams {
        query: any;
    }
    class Order {
        platformOrderId: string;
        name: string;
        shopId?: number;
        currency: string;
        billingAddress?: Address;
        shippingAddress?: Address;
        customer: Customer;
        status?: string;
        totalPrice: number;
        payments?: Array<Payment>;
        lineItems?: Array<LineItem>;
        hasGiftCard?: boolean;
    }
    class Address {
        name?: string;
        company?: string;
        address1?: string;
        address2?: string;
        city?: string;
        zip?: string;
        region?: string;
        regionCode?: string;
        country?: string;
        countryCode?: string;
    }
    class Customer {
        platformCustomerId?: string;
        firstName: string;
        lastName: string;
        email: string;
        phone?: string;
        gender?: string;
        birthday?: string;
        company?: string;
        ordersCount?: number;
        totalSpent?: number;
        isEmailVerified?: boolean;
        isPayingCustomer?: boolean;
    }
    class Payment {
        platformPaymentId?: string;
        method?: string;
        amount: number;
        currency: string;
        creditCard?: CreditCard;
    }
    class CreditCard {
        transactionType: string;
        creditCardNumber?: string;
        creditCardCompany?: string;
        cardExpiration?: string;
        cardHolder?: string;
        avsResultCode?: string;
        cvvResultCode?: string;
        creditCardBin?: string;
        gateway?: string;
    }
    class LineItem {
        platformId?: string;
        title?: string;
        name: string;
        quantity: number;
        price: number;
        sku?: string;
        isbn?: string;
        ean13?: string;
        upc?: string;
        variantId?: string;
        variantTitle?: string;
        vendor?: string;
        platformProductId?: string;
        giftCard?: boolean;
        totalDiscount?: number;
        manufacturer?: string;
    }
    class Error {
        code: number;
        message: string;
        errors?: Array<Error_errors>;
    }
    class inline_response_200 {
        sessions?: Entity;
        pages?: Entity;
        events?: Entity;
        timings?: Entity;
        users?: Entity;
        people?: Entity;
    }
    class Error_errors {
        name?: string;
        code?: number;
        message: string;
    }
}
