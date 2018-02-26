const hdbClientModule = require('./../helpers/hdb-client');
const hdbClient = hdbClientModule.default;
const clientConnect = hdbClientModule.clientConnect;
const clientPrepare = hdbClientModule.clientPrepare;

const dataPlans = async () => {
    if (hdbClient.readyState !== 'connected'){
        await clientConnect();
    }

    const search = 'CALL "PA_PRICING_TRX"."SP_GET_PLAN"()';
    return await clientPrepare(search);
}

exports.getPlans = (req, res) => {
        dataPlans().then((data) =>{
            res.json({info: {status: 'OK'}, data: data});
        }
    ).catch((e)=>{
        res.status(500)
        res.json({message: 'Internal Server Error'})
        console.error(e)
    });
}