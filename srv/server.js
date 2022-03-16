const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const xsenv = require('@sap/xsenv');
xsenv.loadEnv();
const services = xsenv.getServices({
    uaa: { tag: 'xsuaa' }
});


const xssec = require('@sap/xssec');
const passport = require('passport');
passport.use('JWT', new xssec.JWTStrategy(services.uaa));
app.use(passport.initialize());
app.use(passport.authenticate('JWT', {
    session: false
}));


app.use(bodyParser.json());

app.get('/srv', function (req, res) {
    if (req.authInfo.checkScope('$XSAPPNAME.User')) {
        res.status(200).send('mymtaapp');
    } else {
        res.status(403).send('Forbidden');
    }
});

app.get('/srv/user', function (req, res) {
    if (req.authInfo.checkScope('$XSAPPNAME.User')) {
        res.status(200).json(req.user);
    } else {
        res.status(403).send('Forbidden');
    }
});

const core = require('@sap-cloud-sdk/core');
const { retrieveJwt } = require('@sap-cloud-sdk/core');
const { desc } = require('@sap-cloud-sdk/core');
const { salesOrderService } = require('@sap/cloud-sdk-vdm-sales-order-service');
const { outboundDeliveryV2Service, OutbDeliveryDocFlow, OutbDeliveryDocFlowApi } = require('@sap/cloud-sdk-vdm-outbound-delivery-v2-service')
const { outbDeliveryItemApi } = outboundDeliveryV2Service()
const { salesOrderApi, salesOrderItemApi } = salesOrderService();
const {ADSRenderRequestApi} = require('./CF_ADSRestAPI/CF_ADSRestAPI/ads-render-request-api')
const { StoreFormsApi } =require('./CF_ADSRestAPI/CF_ADSRestAPI/store-forms-api')
const {DocumentsApi} = require('./PRINTAPI/PRINTAPI/documents-api')
const {QueuesApi} = require('./PRINTAPI/PRINTAPI/queues-api')



// const{ renderinput } = require('./external/CF_ADSRestAPI/schema/render-input')


function getSalesOrders(req) {
    return salesOrderApi.requestBuilder()
        .getAll()
        .filter(salesOrderApi.schema.TOTAL_NET_AMOUNT.greaterThan(2000))
        .top(3)
        .orderBy(new desc(salesOrderApi.schema.LAST_CHANGE_DATE_TIME))
        .select(
            salesOrderApi.schema.SALES_ORDER,
            salesOrderApi.schema.SALES_ORGANIZATION,
            salesOrderApi.schema.LAST_CHANGE_DATE_TIME,
            salesOrderApi.schema.INCOTERMS_LOCATION_1,
            salesOrderApi.schema.TOTAL_NET_AMOUNT,
            salesOrderApi.schema.TO_ITEM.select(salesOrderItemApi.schema.MATERIAL, salesOrderItemApi.schema.NET_AMOUNT)
        )
        .execute({
            destinationName: 'O5P'
            ,
            jwt: retrieveJwt(req)
        });
}

function getDns(req) {
    
    return outbDeliveryItemApi.requestBuilder()
    .getAll().filter(outbDeliveryItemApi.schema.ACTUAL_DELIVERED_QTY_IN_BASE_UNIT.greaterOrEqual(20))
    .top(5)
    .select(outbDeliveryItemApi.schema.DELIVERY_DOCUMENT
        ,outbDeliveryItemApi.schema.DELIVERY_DOCUMENT_ITEM
        ,outbDeliveryItemApi.schema.DELIVERY_DOCUMENT_ITEM_TEXT,
        outbDeliveryItemApi.schema.ACTUAL_DELIVERY_QUANTITY,
        outbDeliveryItemApi.schema.DELIVERY_QUANTITY_UNIT,
        outbDeliveryItemApi.schema.PLANT
       )
    .execute({
        destinationName: 'O5P'
        ,
        jwt: retrieveJwt(req)
    })
 
}

app.get('/srv/dns', function (req, res) {
    if (req.authInfo.checkScope('$XSAPPNAME.User')) {        
        getDns(req)
        .then(dns => {
            res.status(200).json(dns)
        });
    } else {
        res.status(403).send('Forbidden');
    }
});


function renderpdf(req){
    const data = "<form1><LabelForm><DeliveryId>8000311</DeliveryId> <Position>0010</Position> <MaterialNo>M100001</MaterialNo><Quantity>123456.321</Quantity> <Package>P111111</Package><QRCode>01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</QRCode></LabelForm></form1>"

    const bodyE = new Buffer(data).toString('base64')
    
    renderinput = {
        "embedFont": 0,
        "formLocale": "en_US",
        "formType": "print",
        "taggedPdf": 1,
        "xdpTemplate": "labelprint/PrintLabel",
        "xmlData": bodyE
          }
        const queryP =  { templateSource: 'storageName', TraceLevel: 1 }

    
            
     ADSRenderRequestApi.renderingPdfPost(renderinput,queryP).execute({destinationName:'ads-rest-api' }).then(data=>{return data}).catch(err=>{return err})
}
app.get('/srv/salesorders', function (req, res) {
    if (req.authInfo.checkScope('$XSAPPNAME.User')) {
        
        getSalesOrders(req)
        .then(salesOrders => {
            res.status(200).json(salesOrders);
        });
    } else {
        res.status(403).send('Forbidden');
    }
});



app.get('/srv/adsforms', function (req, res) {
    if (req.authInfo.checkScope('$XSAPPNAME.User')) {
        // res.setHeader()
        
        
      StoreFormsApi.formGet('labelprint').execute({ destinationName:'ads-rest-api' }).then(data=>{res.status(200).json(data)}).catch(err=>{res.status(200).json(err)});
        
       
    } else {
        res.status(403).send('Forbidden');
    }
});
app.get('/srv/render',function(req,res){
    if (req.authInfo.checkScope('$XSAPPNAME.User')){

    const data = "<form1><LabelForm><DeliveryId>8000311</DeliveryId> <Position>0010</Position> <MaterialNo>M100001</MaterialNo><Quantity>123456.321</Quantity> <Package>P111111</Package><QRCode>01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789</QRCode></LabelForm></form1>"

    const bodyE = new Buffer(data).toString('base64')
    
    renderinput = {
        "embedFont": 0,
        "formLocale": "en_US",
        "formType": "print",
        "taggedPdf": 1,
        "xdpTemplate": "labelprint/PrintLabel",
        "xmlData": bodyE
          }
        const queryP =  { templateSource: 'storageName', TraceLevel: 1 }
        ADSRenderRequestApi.renderingPdfPost(renderinput,queryP).execute({destinationName:'ads-rest-api' }).then(pdf=>{res.status(200).json(pdf.fileContent)}).catch(err=>{res.status(500).send(err)})



    }else{
        res.status(403).send('Forbidden');

    }

})


app.get('/srv/print', async function (req, res) {
    if (req.authInfo.checkScope('$XSAPPNAME.User')) {
       QueuesApi.getQmApiV1RestQueues().execute({destinationName:'printServiceApi' }).then(data=>{res.status(200).send(data)}).catch(err=>{res.status(500).json(err)})
    } else {
        res.status(403).send('Forbidden');
    }
});


app.get('/srv/dest', async function (req, res) {
    if (req.authInfo.checkScope('$XSAPPNAME.User')) {
        try {
            let res1 = await core.executeHttpRequest(
                {
                    destinationName: req.query.destination || 'mymtaapp-nw'
                    ,
                    jwt: retrieveJwt(req)
                },
                {
                    method: 'GET',
                    url: req.query.path || ''
                }
            );
            res.status(200).json(res1.data);
        } catch (err) {
            console.log(err.stack);
            res.status(500).send(err.message);
        }
    } else {
        res.status(403).send('Forbidden');
    }
});


const port = process.env.PORT || 5001;
app.listen(port, function () {
    console.info('Listening on http://localhost:' + port);
});