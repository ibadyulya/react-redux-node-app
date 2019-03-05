import { connect } from 'react-redux';
import { displayProduct, updateProduct, deleteProduct } from '../actions/productActions';

import DisplayForm from '../components/DisplayForm';

function mapStateToProps(state) {
    const { product, deleted } = state.productOperations;
    return {
        product: {
            id: (product && product[0] && product[0]._id) || '',
            name: (product && product[0] && product[0].name) || '',
            category: (product && product[0] && product[0].category) || '',
            price: (product && product[0] && product[0].price) || '',
            data: (product && product[0] && product[0].created) || '',
        },
        deleted,
    };
}


const mapDispatchToProps = dispatch => ({
    getProduct: id => dispatch(
        displayProduct(id),
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
