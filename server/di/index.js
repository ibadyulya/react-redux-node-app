import config from 'config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Logger from 'noogger';
import { createContainer, asClass, asValue } from 'awilix';
import controllers from './controllers';
import services from './services';
import DbContext from '../dal/context/db';
import repositories from './repositories';


const logger = Logger.init(config.get('loggerParams'));
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
