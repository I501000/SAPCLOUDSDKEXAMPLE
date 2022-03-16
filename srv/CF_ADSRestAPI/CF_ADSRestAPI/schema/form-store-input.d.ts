/**
 * Form JSON Input.<br /><br /><br />**FormName Options:** `Required` Limited to 30 characters. Only alphanumeric characters allowed and '_' character.<br /><br />**Description Options:**  `Optional` Limited to 280 characters.<br /><br />**Note Options:** `Optional` Limited to 280 characters.
 */
export declare type FormStoreInput = {
    /**
     * Max Length: 280.
     */
    'description'?: string;
    /**
     * Form naming restricted to unicode letters or digits.
     * Max Length: 30.
     */
    'formName': string;
    /**
     * Max Length: 280.
     */
    'note'?: string;
} | Record<string, any>;
//# sourceMappingURL=form-store-input.d.ts.map