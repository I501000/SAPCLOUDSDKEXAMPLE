import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { FormStoreOutput, FormStoreInput, FormMetadata } from './schema';
/**
 * Representation of the 'StoreFormsApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
export declare const StoreFormsApi: {
    /**
     * Retrieve all forms. Use query params to filter the result.
     * @param queryParameters - Object containing the following keys: limit, offset, select.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    formsGet: (queryParameters?: {
        limit?: number | undefined;
        offset?: number | undefined;
        select?: string[] | undefined;
    } | undefined) => OpenApiRequestBuilder<FormStoreOutput[]>;
    /**
     * Create a form first to store templates and schema.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    formPost: (body: FormStoreInput) => OpenApiRequestBuilder<FormMetadata>;
    /**
     * Retrieve a form using 'formName' path param. Use query params to filter the result.
     * @param formName - Name of a form.
     * @param queryParameters - Object containing the following keys: select.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    formGet: (formName: string, queryParameters?: {
        select?: string[] | undefined;
    } | undefined) => OpenApiRequestBuilder<FormStoreOutput>;
    /**
     * Update a form using 'formName' path param.
     * @param formName - Name of a form.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    formPut: (formName: string, body: FormStoreInput) => OpenApiRequestBuilder<FormMetadata>;
    /**
     * Delete a form including all related files, templates and schema.
     * @param formName - Name of a form.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    formDelete: (formName: string) => OpenApiRequestBuilder<string>;
};
//# sourceMappingURL=store-forms-api.d.ts.map