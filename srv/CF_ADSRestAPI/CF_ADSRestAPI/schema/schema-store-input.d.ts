/**
 * Schema JSON Input to store a schema. There is only one single schema per form entity.<br /><br /><br />**XsdSchema Options:** `Required` Schema file encoded in BASE64 string.<br /><br />**SchemaName Options:** `Required` Limited to 30 characters. Only alphanumeric characters allowed and '_' character.<br /><br />**Note Options:** `Optional` Limited to 280 characters.
 */
export declare type SchemaStoreInput = {
    /**
     * Max Length: 280.
     */
    'note'?: string;
    /**
     * Schema naming restricted to unicode letters or digits.
     * Max Length: 30.
     */
    'schemaName': string;
    /**
     * Schema file encoded as Base64 string
     * Default: "Base64 String".
     */
    'xsdSchema': string;
} | Record<string, any>;
//# sourceMappingURL=schema-store-input.d.ts.map