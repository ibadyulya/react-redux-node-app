import actionConstants from '../actions/actionConstants';

const initialState = {
    productsList: '',
    product: '',
    foundProduct: null,
};

export default function productOperations(state = initialState, action) {
    switch (action.type) {
    // Creating
    case actionConstants.PRODUCT_CREATE_REQUEST:
        return {
            ...initialState,
            creating: true,
        };
    case actionConstants.PRODUCT_CREATE_SUCCESS:
        return {
            ...initialState,
            creating: false,
            created: true,
        };
    case actionConstants.PRODUCT_CREATE_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Display product
    case actionConstants.PRODUCT_DISPLAY_REQUEST:
        return {
            ...initialState,
            productExtracting: true,
        };
    case actionConstants.PRODUCT_DISPLAY_SUCCESS:
        return {
            ...initialState,
            product: action.entity,
            productExtracting: false,
            productExtracted: true,
        };
    case actionConstants.PRODUCT_DISPLAY_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Display products list
    case actionConstants.PRODUCT_DISPLAY_LIST_REQUEST:
        return {
            ...initialState,
            productsList: action.entity,
            listExtracting: true,
        };
    case actionConstants.PRODUCT_DISPLAY_LIST_SUCCESS:
        return {
            ...initialState,
            productsList: action.entity,
            listExtracting: false,
            listExtracted: true,
        };
    case actionConstants.PRODUCT_DISPLAY_LIST_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Searching
    case actionConstants.PRODUCT_SEARCH_REQUEST:
        return {
            ...initialState,
            searching: true,
        };
    case actionConstants.PRODUCT_SEARCH_SUCCESS:
        return {
            ...initialState,
            foundProduct: action.foundProduct,
            searching: false,
            found: true,
        };
    case actionConstants.PRODUCT_SEARCH_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Updating
    case actionConstants.PRODUCT_UPDATE_REQUEST:
        return {
            ...initialState,
            updating: true,
        };
    case actionConstants.PRODUCT_UPDATE_SUCCESS:
        return {
            ...initialState,
            updating: false,
            updated: true,
        };
    case actionConstants.PRODUCT_UPDATE_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Deleting
    case actionConstants.PRODUCT_DELETE_REQUEST:
        return {
            ...initialState,
            deleting: true,
        };
    case actionConstants.PRODUCT_DELETE_SUCCESS:
        return {
            ...initialState,
            deleting: false,
            deleted: true,
        };
    case actionConstants.PRODUCT_DELETE_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // filter products
    case actionConstants.PRODUCT_FILTER_REQUEST:
        return {
            ...initialState,
            filtering: true,
        };
    case actionConstants.PRODUCT_FILTER_SUCCESS:
        return {
            ...initialState,
            productsList: action.foundProducts,
            filtering: false,
            filtered: true,
        };
    case actionConstants.PRODUCT_FILTER_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Flags reset;
    case actionConstants.FOUND_FLAG_RESET:
        return {
            ...initialState,
            found: false,
        };
    case actionConstants.CREATED_FLAG_RESET:
        return {
            ...initialState,
            created: false,
        };
    case actionConstants.DELETED_FLAG_RESET:
        return {
            ...initialState,
            deleted: false,
        };
    case actionConstants.UPDATED_FLAG_RESET:
        return {
            ...initialState,
            updated: false,
        };

    default:
        return state;
    }
}
