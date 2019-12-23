import express from 'express';

import { ApolloServer } from 'apollo-server-express';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import { urlencoded, json } from 'body-parser';
import Logger from 'noogger';
import cors from 'cors';

import config from 'config';

import registerDependencies from './di';
import schemas from './api/graphql/collector.schemas';


// const dbContext = registerDependencies().resolve('dbContext');
// console.log(registerDependencies().resolve('resolversMap'));

const server = new ApolloServer({
    typeDefs: mergeTypes(schemas, { all: true }),
    resolvers: mergeResolvers(registerDependencies().resolve('resolversMap')),
    // context: { db: dbContext },
});

const app = express();

server.applyMiddleware({ app, path: '/api/v1/product/graphql' });

const logger = Logger.init(config.get('loggerParams'));

app
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .disable('x-powered-by')
    .listen(config.appSettings.port, async () => {
        // await dbContext.establishConnection();
        logger.info(`Application is listening on port ${config.appSettings.port}`);
        logger.info(`Environment: ${process.env.NODE_ENV}`);
    });
