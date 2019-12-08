const config = require('config');
const express = require('express');
const routes = require('./routes.json');

module.exports = (controllersMap, logger) => {
    const router = express.Router();
    const controllers = {};
    if (routes && !Array.isArray(routes)) {
        throw Error(config.errors.REG_ROUTES_ERROR);
    }

    routes.forEach((route) => {
        const httpMethod = route.method;
        try {
            controllers[route.controller] = controllers[route.controller] || controllersMap[route.controller];
            const controller = controllers[route.controller];
            if (!controller[route.action]) {
                throw Error(config.errors.NO_ENDPOINTS_FOUND);
            }
            const action = (req, res, next) => Promise.resolve(controller[route.action].call(controller, req, res, next)).catch(next);
            router[httpMethod](route.url, action);
        } catch (err) {
            logger.error(`Register route - ${JSON.stringify(route)}. Reason: ${err.message}`);
        }
    });
    return router;
};
