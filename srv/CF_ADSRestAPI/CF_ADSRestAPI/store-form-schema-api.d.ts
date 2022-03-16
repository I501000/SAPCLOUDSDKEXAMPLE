import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { SchemaStoreInput, SchemaMetadata, SchemaStoreOutput, SchemaUpdateStoreInput } from './schema';
/**
 * Representation of the 'StoreFormSchemaApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
export declare const StoreFormSchemaApi: {
    /**
     * Store a schema of a form.
     * @param formName - Name of a form.
     * @param body - Request body.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    schemaPost: (formName: string, body: SchemaStoreInput) => OpenApiRequestBuilder<SchemaMetadata>;
    /**
     * Read a schema of a form.
     * @param formName - Name of a form.
     * @param schemaName - Name of a schema.
     * @param queryParameters - Object containing the following keys: select, isObjectId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    schemaGet: (formName: string, schemaName: string, queryParameters?: {
        select?: string[] | undefined;
        isObjectId?: boolean | undefined;
    } | undefined) => OpenApiRequestBuilder<SchemaStoreOutput>;
    /**
     * Update a schema of a form.
     * @param formName - Name of a form.
     * @param schemaName - Name of a schema.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: isObjectId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    schemaPut: (formName: string, schemaName: string, body: SchemaUpdateStoreInput, queryParameters?: {
        isObjectId?: boolean | undefined;
    } | undefined) => OpenApiRequestBuilder<SchemaMetadata>;
    /**
     * Delete a schema of a form using.
     * @param formName - Name of a form.
     * @param schemaName - Name of a schema.
     * @param queryParameters - Object containing the following keys: allVersions, isObjectId.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    schemaDelete: (formName: string, schemaName: string, queryParameters?: {
        allVersions?: boolean | undefined;
        isObjectId?: boolean | undefined;
    } | undefined) => OpenApiRequestBuilder<string>;
};
//# sourceMappingURL=store-form-schema-api.d.ts.map