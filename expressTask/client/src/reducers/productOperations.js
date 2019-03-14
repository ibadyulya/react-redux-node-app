import ACTION_TYPES from '../constants/action-types';
import { LOADING_STATUSES } from '../constants/index';

const initialState = {
    productsList: '',
    product: [],
    foundProduct: null,
    loadingProductCreate: LOADING_STATUSES.NONE,
    loadingProductDisplay: LOADING_STATUSES.NONE,
    loadingProductListDisplay: LOADING_STATUSES.NONE,
    loadingProductSearch: LOADING_STATUSES.NONE,
    loadingProductUpdate: LOADING_STATUSES.NONE,
    loadingProductFilter: LOADING_STATUSES.NONE,
    loadingProductDelete: LOADING_STATUSES.NONE,
};

export default function productOperations(state = initialState, action) {
    switch (action.type) {
    case ACTION_TYPES.CREATE_PRODUCT_REQUEST:
        return {
            ...initialState,
            loadingProductCreate: LOADING_STATUSES.LOADING,
        };
    case ACTION_TYPES.CREATE_PRODUCT_SUCCESS:
        return {
            ...initialState,
            loadingProductCreate: LOADING_STATUSES.VALID,
        };
    case ACTION_TYPES.CREATE_PRODUCT_FAILURE:
        return {
            ...initialState,
            error: action.message,
            loadingProductCreate: LOADING_STATUSES.INVALID,
        };
    case ACTION_TYPES.GET_PRODUCT_REQUEST:
        return {
            ...initialState,
            loadingProductDisplay: LOADING_STATUSES.LOADING,
        };
    case ACTION_TYPES.GET_PRODUCT_SUCCESS:
        return {
            ...initialState,
            product: action.payload,
            loadingProductDisplay: LOADING_STATUSES.VALID,
        };
    case ACTION_TYPES.GET_PRODUCT_FAILURE:
        return {
            ...initialState,
            error: action.message,
            loadingProductDisplay: LOADING_STATUSES.INVALID,
        };
    case ACTION_TYPES.GET_PRODUCT_LIST_REQUEST:
        return {
            ...initialState,
            productsList: action.payload,
            loadingProductListDisplay: LOADING_STATUSES.LOADING,
        };
    case ACTION_TYPES.GET_PRODUCT_LIST_SUCCESS:
        return {
            ...initialState,
            productsList: action.payload,
            loadingProductListDisplay: LOADING_STATUSES.VALID,
        };
    case ACTION_TYPES.GET_PRODUCT_LIST_FAILURE:
        return {
            ...initialState,
            error: action.message,
            loadingProductListDisplay: LOADING_STATUSES.INVALID,
        };
    case ACTION_TYPES.PRODUCT_SEARCH_FAILURE:
        return {
            ...initialState,
            error: action.message,
            loadingProductSearch: LOADING_STATUSES.INVALID,
        };
    // Updating
    case ACTION_TYPES.UPDATE_PRODUCT_REQUEST:
        return {
            ...initialState,
            loadingProductUpdate: LOADING_STATUSES.LOADING,
        };
    case ACTION_TYPES.UPDATE_PRODUCT_SUCCESS:
        return {
            ...initialState,
            loadingProductUpdate: LOADING_STATUSES.VALID,
        };
    case ACTION_TYPES.UPDATE_PRODUCT_FAILURE:
        return {
            ...initialState,
            error: action.message,
            loadingProductUpdate: LOADING_STATUSES.INVALID,
        };
    // Deleting
    case ACTION_TYPES.DELETE_PRODUCT_REQUEST:
        return {
            ...initialState,
            loadingProductDelete: LOADING_STATUSES.LOADING,
        };
    case ACTION_TYPES.DELETE_PRODUCT_SUCCESS:
        return {
            ...initialState,
            loadingProductDelete: LOADING_STATUSES.VALID,
        };
    case ACTION_TYPES.DELETE_PRODUCT_FAILURE:
        return {
            ...initialState,
            error: action.message,
            loadingProductDelete: LOADING_STATUSES.INVALID,
        };
    // filter products
    case ACTION_TYPES.FILTER_PRODUCT_REQUEST:
        return {
            ...initialState,
            loadingProductFilter: LOADING_STATUSES.LOADING,
        };
    case ACTION_TYPES.FILTER_PRODUCT_SUCCESS:
        return {
            ...initialState,
            productsList: action.payload,
            loadingProductFilter: LOADING_STATUSES.VALID,
        };
    case ACTION_TYPES.FILTER_PRODUCT_FAILURE:
        return {
            ...initialState,
            error: action.message,
            loadingProductFilter: LOADING_STATUSES.INVALID,
        };
    default:
        return state;
    }
}
