import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { PDFInput, AttachmentsOutput, AttachmentsListOutput, FileOutput, SignaturesOutput, TemplateInput } from './schema';
/**
 * Representation of the 'ADSGetRequestsApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
export declare const ADSGetRequestsApi: {
    /**
     * Create a request builder for execution of post requests to the '/v1/pdf/adsGet/attachments' endpoint.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    pDfGetAttachmentsPost: (body: PDFInput, queryParameters?: {
        TraceLevel?: number | undefined;
    } | undefined) => OpenApiRequestBuilder<AttachmentsOutput>;
    /**
     * Create a request builder for execution of post requests to the '/v1/pdf/adsGet/attachmentsList' endpoint.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    pDfListAttachmentsPost: (body: PDFInput, queryParameters?: {
        TraceLevel?: number | undefined;
    } | undefined) => OpenApiRequestBuilder<AttachmentsListOutput>;
    /**
     * Create a request builder for execution of post requests to the '/v1/pdf/adsGet/data' endpoint.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    pDfGetDataPost: (body: PDFInput, queryParameters?: {
        TraceLevel?: number | undefined;
    } | undefined) => OpenApiRequestBuilder<FileOutput>;
    /**
     * Create a request builder for execution of post requests to the '/v1/pdf/adsGet/signatures' endpoint.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    pDfGetSignaturePost: (body: PDFInput, queryParameters?: {
        TraceLevel?: number | undefined;
    } | undefined) => OpenApiRequestBuilder<SignaturesOutput>;
    /**
     * Create a request builder for execution of post requests to the '/v1/template/adsGet/schema' endpoint.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    templateGetSchema: (body: TemplateInput, queryParameters?: {
        TraceLevel?: number | undefined;
    } | undefined) => OpenApiRequestBuilder<FileOutput>;
};
//# sourceMappingURL=ads-get-requests-api.d.ts.map