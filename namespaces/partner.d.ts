export declare namespace Partner {
    class ProfileResponse {
        code?: number;
        message?: string;
        data?: any;
    }
    class PayeeResponse {
        code?: number;
        message?: string;
        data?: any;
    }
    class ShowcaseResponse {
        code?: number;
        message?: string;
        data?: any;
    }
    class ShowcasePostResponse {
        code?: number;
        message?: string;
        data?: any;
    }
    class TestimonialResponse {
        code?: number;
        message?: string;
        data?: any;
    }
    class TestimonialsResponse {
        code?: number;
        message?: string;
        data?: Testimonials;
    }
    class ShowcasesResponse {
        code?: number;
        message?: string;
        data?: Showcases;
    }
    class Testimonials {
        testimonials?: Array<any>;
    }
    class ProfilesResponse {
        currentPage?: number;
        next?: boolean;
        profiles?: Array<any>;
    }
    class Showcases {
        showcases?: Array<any>;
    }
    class TestimonialPostResponse {
        code?: number;
        message?: string;
        data?: any;
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
    class ProfilePutParams {
        accessToken?: string;
        profile: any;
    }
    class ShowcasePutParams {
        accessToken?: string;
        showcase: any;
    }
    class ShowcasePatchParams {
        accessToken?: string;
        showcase: any;
    }
    class ShowcasePostParams {
        accessToken?: string;
        showcase: any;
    }
    class TestimonialPutParams {
        accessToken?: string;
        testimonial: any;
    }
    class TestimonialPatchParams {
        accessToken?: string;
        testimonial: any;
    }
    class TestimonialPostParams {
        accessToken?: string;
        testimonial: any;
    }
    class PayeePutParams {
        accessToken?: string;
        payee: any;
    }
}
