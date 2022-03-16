/**
 * XdpTemplate file and XmlData file are encoded in BASE64. "
 * 					+ "<br /><br />**For rendering, templates can be retrieved directly from the data storage:**"
 * 					+ "<br />As value field of key field 'xdpTemplate' include either `{your formName}/{your templateName}` + as QueryParam add `?templateSource = storageName`"
 * 					+ "<br /><br />or `{your formName}/{your templateObjectId}` + as QueryParam add `?templateSource = storageId`.<br />"
 * 					+ "<br /><br />**FormType Options:** [Print] - `default`, [Interactive], [DynamicInteractive]."
 * 					+ "<br /><br />**FormLocale Options:**  Combination of ISO-639 language code and ISO-3166 country code (language_country)., [en_US] - `default`."
 * 					+ "<br /><br />**TaggedPDF Options:** [1] - `default`, [0]."
 * 					+ "<br /><br />**EmbedFont Options:** [1], [0] - `default`.
 */
export declare type RenderInput = {
    /**
     * Format: "int32".
     */
    'embedFont'?: 0 | 1;
    /**
     * Default: "en_US".
     */
    'formLocale'?: string;
    /**
     * Default: "print".
     */
    'formType'?: 'interactive' | 'print' | 'dynamicInteractive';
    /**
     * Format: "int32".
     * Default: 1.
     */
    'taggedPdf'?: 0 | 1;
    /**
     * File encoded as Base64 string
     * Default: "Base64 String".
     */
    'xdpTemplate': string;
    /**
     * File encoded as Base64 string
     * Default: "Base64 String".
     */
    'xmlData': string;
} | Record<string, any>;
//# sourceMappingURL=render-input.d.ts.map