'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /price-points
 */
module.exports = {
    /**
     * summary: Returs price points associated to the division.
     * description: 
     * parameters: divisionId
     * produces: 
     * responses: 200, default
     * operationId: getPricePointsByDivisionId
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/price-points',
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
                path: '/price-points',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
