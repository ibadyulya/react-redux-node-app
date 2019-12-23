import config from 'config';
// import bcrypt from 'bcrypt';
import Logger from 'noogger';

import {
    createContainer, asClass, asValue, asFunction,
} from 'awilix';

import resolvers from './resolvers';
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

const mapResolvers = (classesArray, transform) => (
    classesArray.map(({ name, instance }) => (transform ? transform(instance) : instance))
);



const awilixContainer = () => {
    const container = createContainer();
    container
        .register({ logger: asValue(logger) })
        .register(convertArrayToObject(services, asClass))
        .register(convertArrayToObject(repositories, asClass))
        .register(convertArrayToObject(resolvers, asFunction))
        .register({ resolversMap: asValue(mapResolvers(resolvers, container.build)) })
        .register({ dbContext: asClass(DbContext).singleton() });
    return container;
};

export default awilixContainer;
