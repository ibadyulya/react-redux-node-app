import { connect } from 'react-redux';
import { createProduct, searchProduct, updateProduct } from '../actions/productActions';

import CreateForm from '../components/CreateForm';

function mapStateToProps(state) {
    const { loadingProductCreate, loadingProductSearch, product } = state.productOperations;
    return {
        loadingProductCreate,
        loadingProductSearch,
        product,
    };
}


const mapDispatchToProps = dispatch => ({
    createProduct: entity => dispatch(
        createProduct(entity),
    ),
    searchProduct: id => dispatch(
        searchProduct(id),
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
