import { connect } from 'react-redux';
import { createProduct, loadProduct, updateProduct } from '../actions/productActions';

import CreateForm from '../components/CreateForm';

function mapStateToProps(state) {
    const {
        loadingProductCreate, loadingProductDisplay, loadingProductUpdate, product,
    } = state.productOperations;

    return {
        loadingProductCreate,
        loadingProductDisplay,
        loadingProductUpdate,
        product,
    };
}


const mapDispatchToProps = dispatch => ({
    createProduct: entity => dispatch(
        createProduct(entity),
    ),
    loadProduct: id => dispatch(
        loadProduct(id),
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
