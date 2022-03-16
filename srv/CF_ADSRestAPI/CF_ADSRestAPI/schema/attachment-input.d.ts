/**
 * SetAttachment JSON. FileContent and PDF encoded in BASE64.
 */
export declare type AttachmentInput = {
    'description'?: string;
    /**
     * File encoded as Base64 string
     * Default: "Base64 String".
     */
    'fileContent': string;
    'fileName': string;
    'mimeType': string;
    /**
     * File encoded as Base64 string
     * Default: "Base64 String".
     */
    'pdf': string;
} | Record<string, any>;
//# sourceMappingURL=attachment-input.d.ts.map