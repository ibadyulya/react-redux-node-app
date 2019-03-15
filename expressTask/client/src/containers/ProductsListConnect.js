import { connect } from 'react-redux';
import { displayProductsList, filterList } from '../actions/productActions';

import ProductsList from '../components/ProductsList';

function mapStateToProps(state) {
    const { productsList } = state.productOperations;
    return {
        productsList: (productsList && productsList.docs) || [],
        page: (productsList && productsList.page) || '',
    };
}


const mapDispatchToProps = dispatch => ({
    getProduct: () => dispatch(
        displayProductsList(),
    ),
    filterList: filteringValue => dispatch(
        filterList(filteringValue),
    ),
});

const ProductsListConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsList);

export default ProductsListConnect;
