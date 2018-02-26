const jsonIdentifierHDB = require('./../../.identifier-hdb.json')
const hdbClient = require('hdb').createClient(jsonIdentifierHDB)
exports.default = hdbClient

exports.clientConnect = () => new Promise((pass,fail) => {
  hdbClient.connect((err) => {
    if(err) fail(err)
    else pass()
  })
})

exports.clientExec = (query) => new Promise((pass, fail) =>{
  hdbClient.exec(query, (err, result) =>{
    if(err) fail(err)
    else pass(result)
  })
})

exports.clientPrepare = (procedure) => new Promise((pass, fail) =>{
    hdbClient.prepare(procedure, function(err, statement){

        if (err) {
            console.error('Prepare error:', err);
            return fail(err);
        }

        statement.exec({}, function(err, parameters, result) {
            if (err) {
                console.error('Exec error:', err);
                return fail(err);
            }
            return pass(result)
        });

    });
});
