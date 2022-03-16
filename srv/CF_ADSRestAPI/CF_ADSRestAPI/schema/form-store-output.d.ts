import type { FormMetadata } from './form-metadata';
import type { SchemaStoreOutput } from './schema-store-output';
import type { TemplateStoreOutput } from './template-store-output';
/**
 * Representation of the 'FormStoreOutput' schema.
 */
export declare type FormStoreOutput = {
    'description'?: string;
    'formName'?: string;
    'metaData'?: FormMetadata;
    'note'?: string;
    'schema'?: SchemaStoreOutput;
    'templates'?: TemplateStoreOutput[];
} | Record<string, any>;
//# sourceMappingURL=form-store-output.d.ts.map