'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /clusters
 */
module.exports = {
    /**
     * summary: Returs clusters and stores.
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, default
     * operationId: getClustersAndStores
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/clusters',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/clusters',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
