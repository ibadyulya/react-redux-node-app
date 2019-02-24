const BaseRepository = require('../dal/repositories/base');
const ProductRepository = require('../dal/repositories/product');

module.exports = [
    {
        name: 'baseRepository',
        instance: BaseRepository,
    }, {
        name: 'productRepository',
        instance: ProductRepository,
    },
];
