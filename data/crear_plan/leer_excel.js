'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /crear_plan/leer_excel
 */
module.exports = {
    /**
     * summary: Uploads a file.
     * description: 
     * parameters: upfile
     * produces: 
     * responses: 200, default
     * operationId: excel_reader
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/crear_plan/leer_excel',
                operation: 'post',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/crear_plan/leer_excel',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
