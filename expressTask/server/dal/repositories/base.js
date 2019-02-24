const _ = require('lodash');
const config = require('config');
const mongoose = require('mongoose');
const debug = require('debug')('app:base-repository');

class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(query = {}, paginationOptions = {}) {
        const defaultPaginationParams = config.get('dbQueryDefaultParams.pagination');
        const customPaginationParams = this.getPaginationParams();
        const sort = this.getSortingParams();
        const paginationParams = Object.assign({}, defaultPaginationParams, customPaginationParams, paginationOptions);
        const options = { sort, ...paginationParams };
        return this.model.paginate(query, options);
    }

    async getById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            const errorMessage = `${config.get('errors.INVALID_OBJECT_ID')}, id : ${id}`;
            throw Error(errorMessage);
        }
        return this.model.find({ _id: id });
    }

    async create(entity) {
        if (_.isEmpty(entity)) {
            throw Error(config.get('errors.CANNOT_CREATE_EMPTY_RECORD'));
        }
        return this.model(entity).save();
    }

    async updateById(entity) {
        debug(entity);
        if (_.isEmpty(entity)) {
            const errorMessage = `${config.get('errors.CANNOT_UPDATE_TO_EMPTY')}, entity : ${entity}`;
            throw Error(errorMessage);
        }
        return this.model.findOneAndUpdate({ _id: entity._id }, entity, { new: true });
    }

    async deleteById(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            const errorMessage = `${config.get('errors.INVALID_OBJECT_ID')}, id : ${id}`;
            throw Error(errorMessage);
        }
        return this.model.findOneAndRemove({ _id: id });
    }

    getSortingParams() {
        return {};
    }

    getPaginationParams() {
        return {};
    }
}

module.exports = BaseRepository;
