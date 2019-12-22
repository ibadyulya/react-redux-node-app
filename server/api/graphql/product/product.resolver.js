const productResolver = ({ productService }) => ({
    Query: {
        product: (parent, { id }, context) => productService.getOne(id),
        productList: () => productService.getAll(),
        filterProductList: (parent, { value }, context) => productService.getAll(value),
    },
    Mutation: {
        createProduct: (parent, { product }, context) => productService.create(product),
        updateProduct: (parent, { product }, context) => productService.update(product),
        deleteProduct: (parent, { id }, context) => productService.delete(id),
    },
});

export default productResolver;
