import productResolver from '../api/graphql/product/product.resolver';

module.exports = [
    {
        name: 'productResolver',
        instance: productResolver,
    },
    {
        name: 'userResolver',
        instance: productResolver,
    },
];
