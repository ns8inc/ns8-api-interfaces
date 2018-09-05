export declare module Analytics {
    class QueryResponse {
        query?: any;
        columns?: any;
        rows?: any;
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
        attributes?: Array<any>;
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
        campaignIds?: Array<undefined>;
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
        dashboards?: Array<undefined>;
    }
    class QueryParams {
        query: any;
    }
    class inline_response_200 {
        sessions?: any;
        pages?: any;
        events?: any;
        timings?: any;
        users?: any;
        people?: any;
    }
}
