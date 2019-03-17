import { connect } from 'react-redux';
import { createProduct, getProduct, updateProduct } from '../actions/productActions';

import CreateForm from '../components/CreateForm';

function mapStateToProps(state) {
    const {
        loadingProductCreate, loadingProductGet, product,
    } = state.productOperations;

    return {
        loadingProductCreate,
        loadingProductGet,
        product,
    };
}


const mapDispatchToProps = dispatch => ({
    createProduct: entity => dispatch(
        createProduct(entity),
    ),
    getProduct: id => dispatch(
        getProduct(id),
    ),
    updateProduct: entity => dispatch(
        updateProduct(entity),
    ),
});

const CreateFormConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateForm);

export default CreateFormConnect;
