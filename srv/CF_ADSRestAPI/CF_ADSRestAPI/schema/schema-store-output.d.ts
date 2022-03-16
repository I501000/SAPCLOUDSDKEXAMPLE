import type { SchemaMetadata } from './schema-metadata';
import type { FileVersionInfo } from './file-version-info';
/**
 * Representation of the 'SchemaStoreOutput' schema.
 */
export declare type SchemaStoreOutput = {
    'metaData'?: SchemaMetadata;
    'note'?: string;
    'schemaName'?: string;
    'versions'?: FileVersionInfo[];
    /**
     * Schema file encoded as Base64 string
     * Default: "Base64 String".
     */
    'xsdSchema'?: string;
} | Record<string, any>;
//# sourceMappingURL=schema-store-output.d.ts.map