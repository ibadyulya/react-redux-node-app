import config from 'config';
// import bcrypt from 'bcrypt';
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

const awilixContainer = () => {
    const container = createContainer();
    container
        .register({ logger: asValue(logger) })
        // .register({ bcrypt: asValue(bcrypt) })
        .register({ jwt: asValue(jwt) })
        .register(convertArrayToObject(controllers, asClass))
        .register(convertArrayToObject(services, asClass))
        .register(convertArrayToObject(repositories, asClass))
        .register({ controllersMap: asValue(convertArrayToObject(controllers, container.build)) })
        .register({ dbContext: asClass(DbContext).singleton() });

    return container;
};

export default awilixContainer;
