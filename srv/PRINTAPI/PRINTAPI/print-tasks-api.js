"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintTasksApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const openapi_1 = require("@sap-cloud-sdk/openapi");
/**
 * Representation of the 'PrintTasksApi'.
 * This API is part of the 'PRINTAPI' service.
 */
exports.PrintTasksApi = {
    /**
     * You can use the following request to send the business document to the particular print queue that is created in SAP Print service. You can specify information, for example, numberOfCopies, username, etc.
     * @param itemId - The itemId should be the same as the objectKey in body
     * @param body - This API is used to create a print task. The field itemId should be identical to one of the documentId from printContents. The documentId should be created successfully via API /dm/api/v1/rest/print-documents. The field qname should be included in the response of API qm/api/v1/rest/queues. If you want to print the attached document that is associated with the specific main document, the documentName should include the extension, for example, attachment.pdf.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    updateQmApiV1RestPrintTasksByItemId: (itemId, body) => new openapi_1.OpenApiRequestBuilder('put', '/qm/api/v1/rest/print-tasks/{itemId}', {
        pathParameters: { itemId },
        body
    })
};
//# sourceMappingURL=print-tasks-api.js.map