import { connect } from 'react-redux';
import productActions from '../actions/productActions';

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
        productActions.displayProductsList(),
    ),
    storeFilteredList: updatedList => dispatch(
        productActions.storeFilteredList(updatedList),
    ),
    filterList: filteringValue => dispatch(
        productActions.filterList(filteringValue),
    ),
    getPreviousPage: page => dispatch(
        productActions.getPreviousPage(page),
    ),
    getNextPage: page => dispatch(
        productActions.getPreviousPage(page),
    ),
});

const ProductsListConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductsList);

export default ProductsListConnect;
