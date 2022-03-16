/**
 * PDF file encoded in BASE64.
 */
export declare type PDFInput = {
    /**
     * File encoded as Base64 string
     * Default: "Base64 String".
     * Pattern: "^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$".
     */
    'pdf': string;
} | Record<string, any>;
//# sourceMappingURL=pdf-input.d.ts.map