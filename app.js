const SwaggerConnect = require('swagger-connect');
const app = require('connect')();
const Cors = require('cors')
app.use(Cors())

/*import SwaggerConnect from 'swagger-connect'
import Connect from 'connect'
import Cors from 'cors'
const app = Connect()*/

exports = app; // for testing

const config = {
  appRoot: __dirname // required config
}

SwaggerConnect.create(config, function(err, swaggerConnect) {
  if (err) { throw err }

  // install middleware
  swaggerConnect.register(app)

  const port = process.env.PORT || 10010;
  app.listen(port)

  if (swaggerConnect.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
})
