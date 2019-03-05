import { connect } from 'react-redux';
import { createProduct, createdFlagReset } from '../actions/productActions';

import CreateForm from '../components/CreateForm';

function mapStateToProps(state) {
    const { created } = state.productOperations;
    return {
        created,
    };
}


const mapDispatchToProps = dispatch => ({
    createProduct: entity => dispatch(
        createProduct(entity),
    ),
    createdFlagReset: () => dispatch(
        createdFlagReset(),
    ),
});

const CreateFormConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateForm);

export default CreateFormConnect;
