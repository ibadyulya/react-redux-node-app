const debug = require('debug')('app:product-service');
const BaseService = require('./base');

class ProductService extends BaseService {
    constructor({ productRepository }) {
        super(productRepository);
    }

    async create(product) {
        if (!product) {
            throw Error('User object shouldn\'t be empty');
        }
        const result = await super.create(product);
        debug(result);
    }

    async update(product) {
        if (!product) {
            throw Error('User object shouldn\'t be empty');
        }
        const result = await this.updateById(product);
        debug(result);
    }

    async getAll() {
        // if (!id) {
        //     throw Error('User object shouldn\'t be empty');
        // }

        const result = await super.getAll();
        debug(result);
        return result;
    }

    async filter(value) {
        if (!value) {
            throw Error('User object shouldn\'t be empty');
        }
        const result = await super.getAll();
        let filteringList = [...result.docs];
        filteringList = filteringList.filter(
            item => ((item.name.toLowerCase().search(value.value) !== -1)
                || (item.category.toLowerCase().search(value.value)) !== -1),
        );
        result.docs = [...filteringList];
        debug(result);
        return result;
    }

    async getOne(id) {
        if (!id) {
            throw Error('User object shouldn\'t be empty');
        }

        const result = await this.getById(id);
        debug(result);
        return result;
    }

    async delete(id) {
        if (!id) {
            throw Error('User object shouldn\'t be empty');
        }

        debug(`productID: ${id}`);
        const result = await this.deleteById(id);
        debug(result);
        return result;
    }
}

module.exports = ProductService;
