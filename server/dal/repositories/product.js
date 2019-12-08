const mongoose = require('mongoose');
const config = require('config');
// const debug = require('debug')('app:base-repository');

const Product = require('../models/product');
const BaseRepository = require('./base');

class ProductRepository extends BaseRepository {
    constructor() {
        super(Product);
    }

    async getById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            const errorMessage = `${config.get('errors.INVALID_OBJECT_ID')}, id : ${id}`;
            throw Error(errorMessage);
        }

        const extractedData = await this.model.find({ _id: id });

        return extractedData[0];
    }

    async getAllById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            const errorMessage = `${config.get('errors.INVALID_OBJECT_ID')}, id : ${id}`;
            throw Error(errorMessage);
        }
        return this.model.find({ _id: id });
    }
}

module.exports = ProductRepository;
