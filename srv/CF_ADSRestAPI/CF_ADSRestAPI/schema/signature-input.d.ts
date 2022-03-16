/**
 * SetSignature JSON. PDF encoded in BASE64.
 */
export declare type SignatureInput = {
    'contactInfo': string;
    'credentialAlias': string;
    'locationInfo': string;
    /**
     * File encoded as Base64 string
     * Default: "Base64 String".
     */
    'pdf': string;
    'reasonInfo': string;
    'signatureFieldName': string;
} | Record<string, any>;
//# sourceMappingURL=signature-input.d.ts.map