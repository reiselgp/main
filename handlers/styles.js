'use strict';
var dataProvider = require('../data/styles.js');
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
     */
    get: function getStylesByPlanId(req, res, next) {
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
