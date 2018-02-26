'use strict';
var dataProvider = require('../data/price-points.js');
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
     */
    get: function getPricePointsByDivisionId(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
