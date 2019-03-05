import { connect } from 'react-redux';

import {
    searchProduct, updateProduct, foundFlagReset, createdFlagReset,
} from '../actions/productActions';

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
        searchProduct(id),
    ),
    updateProduct: entity => dispatch(
        updateProduct(entity),
    ),
    foundFlagReset: () => dispatch(
        foundFlagReset(),
    ),
    updatedFlagReset: () => dispatch(
        createdFlagReset(),
    ),
    deletedFlagReset: () => dispatch(
        createdFlagReset(),
    ),
});

const EditFormConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditForm);

export default EditFormConnect;
