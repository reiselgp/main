'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /subdeparments
 */
module.exports = {
    /**
     * summary: Returs subdeparments associated to plan.
     * description: 
     * parameters: planId
     * produces: 
     * responses: 200, default
     * operationId: getSubDeparmentsByPlanId
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/subdeparments',
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
                path: '/subdeparments',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
