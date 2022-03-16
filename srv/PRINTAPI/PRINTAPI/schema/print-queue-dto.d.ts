/**
 * Representation of the 'PrintQueueDTO' schema.
 */
export declare type PrintQueueDTO = {
    /**
     * @example "pq01"
     */
    'qname'?: string;
    /**
     * @example "Example Print Queue"
     */
    'qdescription'?: string;
    /**
     * @example "R"
     */
    'qstatus'?: string;
    /**
     * @example "PDF"
     */
    'qformat'?: string;
    /**
     * @example 1
     */
    'cleanupPrd'?: number;
    /**
     * @example "tech_user"
     */
    'techUserName'?: string;
} | Record<string, any>;
//# sourceMappingURL=print-queue-dto.d.ts.map