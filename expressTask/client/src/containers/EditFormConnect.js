import { connect } from 'react-redux';
import productActions from '../actions/productActions';

import EditForm from '../components/EditForm';

function mapStateToProps(state) {
    const {
        foundProduct, searching,
        found, updated,
    } = state.productOperations;
    return {
        foundProduct,
        searching,
        found,
        updated,
    };
}

const mapDispatchToProps = dispatch => ({
    searchProduct: id => dispatch(
        productActions.searchProduct(id),
    ),
    updateProduct: entity => dispatch(
        productActions.updateProduct(entity),
    ),
    foundFlagReset: () => dispatch(
        productActions.foundFlagReset(),
    ),
    updatedFlagReset: () => dispatch(
        productActions.createdFlagReset(),
    ),
    deletedFlagReset: () => dispatch(
        productActions.createdFlagReset(),
    ),
});

const EditFormConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditForm);

export default EditFormConnect;
