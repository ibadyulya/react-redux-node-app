const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('noogger').init(config.get('loggerParams'));

const app = express();

app.set('logger', logger);
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // res.header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));

const router = require('./api/router');
const registerDependencies = require('./di');

const container = registerDependencies();
const apiRouter = router(container.resolve('controllersMap'), logger);

app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.send(200);
    } else {
        next();
    }
});

app.use('/api', apiRouter);


app.listen(config.appSettings.port, async () => {
    const dbContext = container.resolve('dbContext');
    await dbContext.establishConnection();
    logger.info(`Application is listening on port ${config.appSettings.port}`);
    logger.info(`Environment: ${process.env.NODE_ENV}`);
});
