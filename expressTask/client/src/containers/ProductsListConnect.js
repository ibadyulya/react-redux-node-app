import { connect } from 'react-redux';
import { loadProductsList, filterList } from '../actions/productActions';

import ProductsList from '../components/ProductsList';

function mapStateToProps(state) {
    const { productsList } = state.productOperations;
    return {
        productsList: (productsList && productsList.docs) || [],
        page: (productsList && productsList.page) || ''
    };
}

const mapDispatchToProps = dispatch => ({
    getProductList: () => dispatch(loadProductsList()),
    filterList: filteringValue => dispatch(filterList(filteringValue))
});

const ProductsListConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsList);

export default ProductsListConnect;
