import type { Certificate } from './certificate';
/**
 * Representation of the 'Signature' schema.
 */
export declare type Signature = {
    'certificates'?: Certificate[];
    'contactInfo'?: string;
    'date'?: string;
    'field'?: string;
    'legalAttestations'?: string;
    'location'?: string;
    'maxRevisions'?: string;
    'permissions'?: string;
    'reason'?: string;
    'revision'?: string;
    'signer'?: string;
    'status'?: string;
} | Record<string, any>;
//# sourceMappingURL=signature.d.ts.map