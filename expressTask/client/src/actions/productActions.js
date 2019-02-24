import productService from '../services/productService';
import actionConstants from './actionConstants';
import alertActions from './alertActions';

function createProduct(entity) {
    function request(e) {
        return {
            type: actionConstants.PRODUCT_CREATE_REQUEST,
            e,
        };
    }
    function success() {
        return {
            type: actionConstants.PRODUCT_CREATE_SUCCESS,
        };
    }
    function failure(error) {
        return {
            type: actionConstants.PRODUCT_CREATE_FAILURE,
            error,
        };
    }
    return (dispatch) => {
        dispatch(request(entity));

        productService.createProduct(entity)
            .then(
                (e) => {
                    dispatch(success(e));
                    dispatch(alertActions.success('Survey creation is successful'));
                },
                (error) => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                },
            );
    };
}

function displayProduct(entityID) {
    function request(id) { return { type: actionConstants.PRODUCT_DISPLAY_REQUEST, id }; }
    function success(entity) { return { type: actionConstants.PRODUCT_DISPLAY_SUCCESS, entity }; }
    function failure(id, error) { return { type: actionConstants.PRODUCT_DISPLAY_FAILURE, id, error }; }

    return (dispatch) => {
        dispatch(request(entityID));

        productService.displayProduct(entityID)
            .then(
                (e) => {
                    dispatch(success(e));
                },
                (error) => {
                    dispatch(failure(entityID, error));
                },
            );
    };
}

function displayProductsList() {
    function request() { return { type: actionConstants.PRODUCT_DISPLAY_LIST_REQUEST }; }
    function success(entity) { return { type: actionConstants.PRODUCT_DISPLAY_LIST_SUCCESS, entity }; }
    function failure(error) { return { type: actionConstants.PRODUCT_DISPLAY_LIST_FAILURE, error }; }

    return (dispatch) => {
        dispatch(request());

        productService.displayProductsList()
            .then(
                (e) => {
                    dispatch(success(e));
                },
                (error) => {
                    dispatch(failure(error));
                },
            );
    };
}

function updateProduct(entity) {
    function request() {
        return {
            type: actionConstants.PRODUCT_UPDATE_REQUEST,
        };
    }
    function success() {
        return {
            type: actionConstants.PRODUCT_UPDATE_SUCCESS,
        };
    }
    function failure(error) {
        return {
            type: actionConstants.PRODUCT_UPDATE_FAILURE,
            error,
        };
    }
    return (dispatch) => {
        dispatch(request(entity));

        productService.updateProduct(entity)
            .then(
                (sTitle, sQuestions) => {
                    dispatch(success(sTitle, sQuestions));
                    dispatch(alertActions.success('Product update is successful'));
                },
                (error) => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                },
            );
    };
}

function deleteProduct(entityID) {
    function request(id) { return { type: actionConstants.PRODUCT_DELETE_REQUEST, id }; }
    function success(id) { return { type: actionConstants.PRODUCT_DELETE_SUCCESS, id }; }
    function failure(id, error) { return { type: actionConstants.PRODUCT_DELETE_FAILURE, id, error }; }

    return (dispatch) => {
        dispatch(request(entityID));

        productService.deleteProduct(entityID)
            .then(
                () => {
                    dispatch(success(entityID));
                },
                (error) => {
                    dispatch(failure(entityID, error));
                },
            );
    };
}

function searchProduct(entityID) {
    function request() { return { type: actionConstants.PRODUCT_SEARCH_REQUEST }; }
    function success(foundProduct) { return { type: actionConstants.PRODUCT_SEARCH_SUCCESS, foundProduct }; }
    function failure(id, error) { return { type: actionConstants.PRODUCT_SEARCH_FAILURE, id, error }; }

    return (dispatch) => {
        dispatch(request(entityID));

        productService.searchProduct(entityID)
            .then(
                (foundProduct) => {
                    dispatch(success(foundProduct));
                },
                (error) => {
                    dispatch(failure(entityID, error));
                },
            );
    };
}

function filterList(value) {
    function request() { return { type: actionConstants.PRODUCT_FILTER_REQUEST }; }
    function success(foundProducts) { return { type: actionConstants.PRODUCT_FILTER_SUCCESS, foundProducts }; }
    function failure(error) { return { type: actionConstants.PRODUCT_FILTER_FAILURE, error }; }

    return (dispatch) => {
        dispatch(request());

        productService.filterList(value)
            .then(
                (foundProducts) => {
                    dispatch(success(foundProducts));
                },
                (error) => {
                    dispatch(failure(error));
                },
            );
    };
}

function storeFilteredList(entity) {
    return { type: actionConstants.STORE_FILTERED_PRODUCTS, entity };
}
function foundFlagReset() {
    return { type: actionConstants.FOUND_FLAG_RESET };
}

function createdFlagReset() {
    return { type: actionConstants.CREATED_FLAG_RESET };
}

function updatedFlagReset() {
    return { type: actionConstants.UPDATED_FLAG_RESET };
}

function editedFlagReset() {
    return { type: actionConstants.DELETED_FLAG_RESET };
}
const productActions = {
    createProduct,
    displayProduct,
    displayProductsList,
    updateProduct,
    deleteProduct,
    searchProduct,
    storeFilteredList,
    foundFlagReset,
    filterList,
    createdFlagReset,
    updatedFlagReset,
    editedFlagReset,
};

export default productActions;
