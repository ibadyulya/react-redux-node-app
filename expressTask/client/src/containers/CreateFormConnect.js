import { connect } from 'react-redux';
import productActions from '../actions/productActions';

import CreateForm from '../components/CreateForm';

function mapStateToProps(state) {
    const { created } = state.productOperations;
    return {
        created,
    };
}


const mapDispatchToProps = dispatch => ({
    createProduct: entity => dispatch(
        productActions.createProduct(entity),
    ),
    createdFlagReset: () => dispatch(
        productActions.createdFlagReset(),
    ),
});

const CreateFormConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CreateForm);

export default CreateFormConnect;
