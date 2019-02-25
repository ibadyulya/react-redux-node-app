import ACTION_TYPES from '../constants/action-types';

const initialState = {
    productsList: '',
    product: '',
    foundProduct: null,
};

export default function productOperations(state = initialState, action) {
    switch (action.type) {
    // Creating
    case ACTION_TYPES.PRODUCT_CREATE_REQUEST:
        return {
            ...initialState,
            creating: true,
        };
    case ACTION_TYPES.PRODUCT_CREATE_SUCCESS:
        return {
            ...initialState,
            creating: false,
            created: true,
        };
    case ACTION_TYPES.PRODUCT_CREATE_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Display product
    case ACTION_TYPES.PRODUCT_DISPLAY_REQUEST:
        return {
            ...initialState,
            productExtracting: true,
        };
    case ACTION_TYPES.PRODUCT_DISPLAY_SUCCESS:
        return {
            ...initialState,
            product: action.entity,
            productExtracting: false,
            productExtracted: true,
        };
    case ACTION_TYPES.PRODUCT_DISPLAY_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Display products list
    case ACTION_TYPES.PRODUCT_DISPLAY_LIST_REQUEST:
        return {
            ...initialState,
            productsList: action.entity,
            listExtracting: true,
        };
    case ACTION_TYPES.PRODUCT_DISPLAY_LIST_SUCCESS:
        return {
            ...initialState,
            productsList: action.entity,
            listExtracting: false,
            listExtracted: true,
        };
    case ACTION_TYPES.PRODUCT_DISPLAY_LIST_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Searching
    case ACTION_TYPES.PRODUCT_SEARCH_REQUEST:
        return {
            ...initialState,
            searching: true,
        };
    case ACTION_TYPES.PRODUCT_SEARCH_SUCCESS:
        return {
            ...initialState,
            foundProduct: action.foundProduct,
            searching: false,
            found: true,
        };
    case ACTION_TYPES.PRODUCT_SEARCH_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Updating
    case ACTION_TYPES.PRODUCT_UPDATE_REQUEST:
        return {
            ...initialState,
            updating: true,
        };
    case ACTION_TYPES.PRODUCT_UPDATE_SUCCESS:
        return {
            ...initialState,
            updating: false,
            updated: true,
        };
    case ACTION_TYPES.PRODUCT_UPDATE_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Deleting
    case ACTION_TYPES.PRODUCT_DELETE_REQUEST:
        return {
            ...initialState,
            deleting: true,
        };
    case ACTION_TYPES.PRODUCT_DELETE_SUCCESS:
        return {
            ...initialState,
            deleting: false,
            deleted: true,
        };
    case ACTION_TYPES.PRODUCT_DELETE_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // filter products
    case ACTION_TYPES.PRODUCT_FILTER_REQUEST:
        return {
            ...initialState,
            filtering: true,
        };
    case ACTION_TYPES.PRODUCT_FILTER_SUCCESS:
        return {
            ...initialState,
            productsList: action.foundProducts,
            filtering: false,
            filtered: true,
        };
    case ACTION_TYPES.PRODUCT_FILTER_FAILURE:
        return {
            ...initialState,
            error: action.error,
        };
    // Flags reset;
    case ACTION_TYPES.FOUND_FLAG_RESET:
        return {
            ...initialState,
            found: false,
        };
    case ACTION_TYPES.CREATED_FLAG_RESET:
        return {
            ...initialState,
            created: false,
        };
    case ACTION_TYPES.DELETED_FLAG_RESET:
        return {
            ...initialState,
            deleted: false,
        };
    case ACTION_TYPES.UPDATED_FLAG_RESET:
        return {
            ...initialState,
            updated: false,
        };

    default:
        return state;
    }
}
