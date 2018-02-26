'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /styles
 */
module.exports = {
    /**
     * summary: Returs styles.
     * description: 
     * parameters: planId
     * produces: 
     * responses: 200, default
     * operationId: getStylesByPlanId
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/styles',
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
                path: '/styles',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
