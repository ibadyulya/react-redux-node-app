export default `
    type Product {
        _id: ID
        name: String
        category: String
        price: String
        created: String
    }

    type Query {
        product(id: ID!): Product
        productList: [Product]
        filterProductList(value: String!): [Product]
    }

    type Mutation {
        createProduct(product: Product): Product!
        updateProduct(product: Product): Product!
        deleteProduct(id: ID): Product!
    }
`;
