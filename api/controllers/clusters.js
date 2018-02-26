const hdbClientModule = require('./../helpers/hdb-client');
const hdbClient = hdbClientModule.default;
const clientConnect = hdbClientModule.clientConnect;
const clientPrepare = hdbClientModule.clientPrepare;

const dataClustersAndStores = async () => {
    if (hdbClient.readyState !== 'connected'){
        await clientConnect();
    }
    const search = 'CALL "PA_PRICING_TRX"."SP_CLUSTER"()';
    return await clientPrepare(search);
}

exports.getClustersAndStores = (req, res) => {
    dataClustersAndStores().then((data) =>{
            let resp = [];
            let target;
            let stores;

            for(let row of data){
                stores = {};
                stores[row.LOCATION_ID] = row.LOCATION_NAME;
                target = resp.find(resp => resp.codigo === row.CLUSTER_ID);

                if(target){
                    target.tiendas.push(stores);
                }else{
                    resp.push({"nombre": row.CLUSTER_DESC, "codigo": row.CLUSTER_ID,
                        "tiendas": [stores] });
                }
            }
            res.json({info: {status: 'OK'}, data: resp});
        }
    ).catch((e)=>{
        res.status(500)
        res.json({message: 'Internal Server Error'})
        console.error(e)
    });
}