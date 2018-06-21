export declare module Analytics {
    class QueryResult {
        columns?: Array<any>;
        rows?: Array<any>;
    }
    class QueryResponse {
        code?: number;
        message?: string;
        data?: QueryResult;
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
        attributes?: Attribute;
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
        accessToken?: string;
        query: any;
    }
}
