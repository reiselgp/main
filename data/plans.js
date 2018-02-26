'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /plans
 */
module.exports = {
    /**
     * summary: Returs plans.
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, default
     * operationId: getPlans
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/plans',
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
                path: '/plans',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
