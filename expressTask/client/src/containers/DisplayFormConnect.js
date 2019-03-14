import { connect } from 'react-redux';
import { loadProduct, updateProduct, deleteProduct } from '../actions/productActions';

import DisplayForm from '../components/DisplayForm';

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
    loadProduct: id => dispatch(
        loadProduct(id),
    ),
    updateProduct: entity => dispatch(
        updateProduct(entity),
    ),
    deleteProduct: id => dispatch(
        deleteProduct(id),
    ),
});

const DisplayFormConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(DisplayForm);

export default DisplayFormConnect;
