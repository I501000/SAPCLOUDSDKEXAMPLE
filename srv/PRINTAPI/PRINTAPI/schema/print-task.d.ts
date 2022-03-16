import type { PrintContent } from './print-content';
/**
 * Representation of the 'PrintTask' schema.
 */
export declare type PrintTask = {
    /**
     * @example 1
     */
    'numberOfCopies'?: number;
    /**
     * @example "test user"
     */
    'username'?: string;
    /**
     * @example "pq01"
     */
    'qname'?: string;
    /**
     * @example [
     *   {
     *     "objectKey": "0adcfcae-4119-4225-b031-3d5718165798",
     *     "documentName": "main document name"
     *   },
     *   {
     *     "objectKey": "0adcfcae-4119-4225-b031-3d5718165854",
     *     "documentName": "attachment_document.pdf"
     *   }
     * ]
     */
    'printContents'?: PrintContent[];
} | Record<string, any>;
//# sourceMappingURL=print-task.d.ts.map