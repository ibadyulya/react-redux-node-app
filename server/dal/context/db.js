const config = require('config');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

class DbContext {
    constructor({ logger }) {
        this.database = mongoose;
        this.logger = logger;
    }

    async establishConnection() {
        try {
            this.init();
            this.attachListeners();
            await this.connect();
        } catch (error) {
            this.logger.error(`Error while establishing db connection. ${error.message}`);
        }
    }

    disconnect() {
        try {
            this.database.disconnect();
            this.logger.info('MongoDB has been disconnected manually.');
        } catch (error) {
            this.logger.error(`Error while disconnecting. ${error.message}`);
        }
    }

    init() {
        this.database.Promise = Promise;
        this.database.plugin(mongoosePaginate);
    }

    attachListeners() {
        const { connection } = this.database;

        connection.on('connecting', () => {
            this.logger.info('Connecting to MongoDB...');
        });

        connection.on('error', (err) => {
            this.logger.error(`MongoDB connection error: ${err}`);
            mongoose.disconnect();
        });

        connection.on('connected', () => {
            this.logger.info('Connected to MongoDB!');
        });

        connection.once('open', () => {
            this.logger.info('MongoDB connection opened!');
        });

        connection.on('reconnected', () => {
            this.logger.info('MongoDB reconnected!');
        });
        const reconnectTimeout = config.get('db.TIMEOUT');
        connection.on('disconnected', () => {
            this.logger.error(`MongoDB disconnected! Reconnecting in ${reconnectTimeout / 1000}s...`);
            setTimeout(() => this.connect(), reconnectTimeout);
        });
    }

    connect() {
        const uri = this.getMongoDbUri();
        return this.database.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true }).catch(() => {});
    }

    getMongoDbUri() {
        const {
            PASSWORD: password, USER_NAME: userName,
            HOST: host, PORT: port, NAME: name,
        } = config.get('db');

        let uri = `mongodb://${userName}:${password}@${host}:${port}/${name}`;
        if (!password && !userName) {
            uri = `mongodb://${host}:${port}/${name}`;
        }
        return uri;
    }
}

module.exports = DbContext;
