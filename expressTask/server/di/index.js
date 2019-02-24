const config = require('config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logger = require('noogger').init(config.get('loggerParams'));
const { createContainer, asClass, asValue } = require('awilix');
const controllers = require('./controllers');
const services = require('./services');
const DbContext = require('../dal/context/db');
const repositories = require('./repositories');

const convertArrayToObject = (classesArray, transform) => {
    const resultConfigObject = classesArray.reduce((result, { name, instance }) => ({
        ...result,
        [name]: transform ? transform(instance) : instance,
    }), {});
    return resultConfigObject;
};

module.exports = () => {
    const container = createContainer();
    container.register({
        logger: asValue(logger),
    });
    container.register({
        bcrypt: asValue(bcrypt),
    });
    container.register({
        jwt: asValue(jwt),
    });

    container.register(convertArrayToObject(controllers, asClass));
    container.register(convertArrayToObject(services, asClass));
    container.register(convertArrayToObject(repositories, asClass));
    container.register({ controllersMap: asValue(convertArrayToObject(controllers, container.build)) });
    container.register({ dbContext: asClass(DbContext).singleton() });

    return container;
};
