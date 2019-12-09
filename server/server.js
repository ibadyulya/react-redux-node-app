import express from 'express';
import { urlencoded, json } from 'body-parser';
import Logger from 'noogger';
import cors from 'cors';

import config from 'config';
import router from './api/router';
import registerDependencies from './di';

const logger = Logger.init(config.get('loggerParams'));
const app = express();

const container = registerDependencies();
const apiRouter = router(container.resolve('controllersMap'), logger);

app
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(cors())
    .use('/api', apiRouter)
    .listen(config.appSettings.port, async () => {
        const dbContext = container.resolve('dbContext');
        await dbContext.establishConnection();
        logger.info(`Application is listening on port ${config.appSettings.port}`);
        logger.info(`Environment: ${process.env.NODE_ENV}`);
    });
