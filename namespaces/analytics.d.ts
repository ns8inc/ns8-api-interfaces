export declare namespace Analytics {
    class QueryResponse {
        query?: any;
        columns?: Array<any>;
        rows?: Array<any>;
    }
    class APIResponse {
        code?: number;
        message?: string;
    }
    class APIError {
        code?: number;
        message?: string;
    }
    class DuplicateError {
        code?: number;
        message?: string;
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
    class SegmentCreateParams {
        accessToken?: string;
        name?: string;
        query?: any;
        appliesTo?: string;
        projectIds?: Array<number>;
    }
    class CampaignIdsUpdateParams {
        accessToken?: string;
        projectId?: number;
        campaignIds?: Array<CampaignReferrers>;
    }
    class CampaignReferrers {
        referrer?: string;
        campaign?: string;
    }
    class CampaignReferrersUpdateParams {
        accessToken?: string;
        projectId?: number;
        campaignReferrers?: Array<string>;
    }
    class Dashboard {
        name?: string;
        createdDate?: string;
        params?: any;
    }
    class DashboardsUpdateParams {
        accessToken?: string;
        projectId?: number;
        dashboards?: Array<Dashboard>;
    }
    class QueryParams {
        query: any;
    }
    class Order {
        platformOrderId: string;
        name: string;
        shopId?: number;
        platform: string;
        tax: number;
        currency: string;
        email: string;
        billingAddress?: Address;
        shippingAddress?: Address;
        createdAt: string;
        updatedAt?: string;
        customer: Customer;
        status?: string;
        processingMethod?: string;
        sourceName?: SourceName;
        totalPrice: number;
        transctions?: Array<Transaction>;
        lineItems?: Array<LineItem>;
        canceledAt?: string;
        canceledBy?: string;
        cancelReason?: string;
        approvedAt?: string;
        approvedBy?: string;
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
        phone?: string;
        createdAt?: string;
        updatedAt?: string;
        gender?: string;
        birthday?: string;
        company?: string;
        ordersCount?: number;
        totalSpent?: number;
        isEmailVerified?: boolean;
        isPayingCustomer?: boolean;
    }
    class Transaction {
        platformTransactionId?: string;
        amount: number;
        createdAt: string;
        gateway?: string;
        sourceName?: SourceName;
        paymentDetails?: PaymentDetails;
        kind?: string;
        status?: string;
        currency?: string;
        test?: boolean;
    }
    class PaymentDetails {
        creditCardNumber?: string;
        creditCardCompany?: string;
        cardExpiration?: string;
        cardHolder?: string;
        avsResultCode?: string;
        cvvResultCode?: string;
        creditCardBin?: string;
        method?: string;
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
    class SourceName {
    }
    class inline_response_200 {
        sessions?: Entity;
        pages?: Entity;
        events?: Entity;
        timings?: Entity;
        users?: Entity;
        people?: Entity;
    }
}
