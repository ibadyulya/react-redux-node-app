import { connect } from 'react-redux';
import { getProduct, updateProduct, deleteProduct } from '../actions/productActions';

import ProductCard from '../components/ProductCard';

function mapStateToProps(state) {
    const { product, loadingProductDelete } = state.productOperations;
    return {
        product: {
            id: product ? product._id : null,
            name: product ? product.name : null,
            category: product ? product.category : null,
            price: product ? product.price : null,
            data: product ? product.created : null,
        },
        loadingProductDelete,
    };
}


const mapDispatchToProps = dispatch => ({
    getProduct: id => dispatch(
        getProduct(id),
    ),
    updateProduct: entity => dispatch(
        updateProduct(entity),
    ),
    deleteProduct: id => dispatch(
        deleteProduct(id),
    ),
});

const ProductCardConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductCard);

export default ProductCardConnect;
