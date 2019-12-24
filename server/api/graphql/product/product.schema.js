export default `
    type Product {
        _id: ID
        name: String
        category: String
        price: String
        created: String
    }

    input ProductInput {
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
        createProduct(product: ProductInput): Product!
        updateProduct(product: ProductInput): Product!
        deleteProduct(id: ID): Product!
    }
`;
