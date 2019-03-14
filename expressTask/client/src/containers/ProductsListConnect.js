import { connect } from 'react-redux';
import { loadProductsList, filterList } from '../actions/productActions';

import ProductsList from '../components/ProductsList';

function mapStateToProps(state) {
    const { productsList, listExtracted } = state.productOperations;
    return {
        productsList: (productsList && productsList.docs) || [],
        page: (productsList && productsList.page) || '',
        listExtracted,
    };
}


const mapDispatchToProps = dispatch => ({
    getProduct: () => dispatch(
        loadProductsList(),
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
