import ProductApi from '../api/productApi';
import ACTION_TYPES from '../constants/action-types';
import ACTION_STATES from './actionStates';

export const createProduct = entity => async (dispatch) => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.PRODUCT_CREATE_REQUEST));

    try {
        const resData = await ProductApi.createProduct(entity);

        dispatch(ACTION_STATES.success(ACTION_TYPES.PRODUCT_CREATE_SUCCESS, resData));
    } catch (error) {
        console.error(error);
        dispatch(ACTION_STATES.failure(ACTION_TYPES.PRODUCT_CREATE_FAILURE, error));
    }
};

export const displayProduct = entityID => async (dispatch) => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.PRODUCT_DISPLAY_REQUEST));

    try {
        const resData = await ProductApi.displayProduct(entityID);

        dispatch(ACTION_STATES.success(ACTION_TYPES.PRODUCT_DISPLAY_SUCCESS, resData));
    } catch (error) {
        console.error(error);
        dispatch(ACTION_STATES.failure(ACTION_TYPES.PRODUCT_DISPLAY_FAILURE, error));
    }
};

export const displayProductsList = () => async (dispatch) => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.PRODUCT_DISPLAY_LIST_REQUEST));

    try {
        const resData = await ProductApi.displayProductsList();

        dispatch(ACTION_STATES.success(ACTION_TYPES.PRODUCT_DISPLAY_LIST_SUCCESS, resData));
    } catch (error) {
        console.error(error);
        dispatch(ACTION_STATES.failure(ACTION_TYPES.PRODUCT_DISPLAY_LIST_FAILURE, error));
    }
};

export const updateProduct = entity => async (dispatch) => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.PRODUCT_UPDATE_REQUEST));

    try {
        const resData = await ProductApi.updateProduct(entity);

        dispatch(ACTION_STATES.success(ACTION_TYPES.PRODUCT_UPDATE_SUCCESS, resData));
    } catch (error) {
        console.error(error);
        dispatch(ACTION_STATES.failure(ACTION_TYPES.PRODUCT_UPDATE_FAILURE, error));
    }
};

export const deleteProduct = entityID => async (dispatch) => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.PRODUCT_DELETE_REQUEST));

    try {
        const resData = await ProductApi.deleteProduct(entityID);

        dispatch(ACTION_STATES.success(ACTION_TYPES.PRODUCT_DELETE_SUCCESS, resData));
    } catch (error) {
        console.error(error);
        dispatch(ACTION_STATES.failure(ACTION_TYPES.PRODUCT_DELETE_FAILURE, error));
    }
};

export const searchProduct = entityID => async (dispatch) => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.PRODUCT_SEARCH_REQUEST));

    try {
        const resData = await ProductApi.searchProduct(entityID);

        dispatch(ACTION_STATES.success(ACTION_TYPES.PRODUCT_SEARCH_SUCCESS, resData));
    } catch (error) {
        console.error(error);
        dispatch(ACTION_STATES.failure(ACTION_TYPES.PRODUCT_SEARCH_FAILURE, error));
    }
};

export const filterList = value => async (dispatch) => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.PRODUCT_FILTER_REQUEST));

    try {
        const resData = await ProductApi.filterList(value);

        dispatch(ACTION_STATES.success(ACTION_TYPES.PRODUCT_FILTER_SUCCESS, resData));
    } catch (error) {
        console.error(error);
        dispatch(ACTION_STATES.failure(ACTION_TYPES.PRODUCT_FILTER_FAILURE, error));
    }
};

export function storeFilteredList(entity) {
    return { type: ACTION_TYPES.STORE_FILTERED_PRODUCTS, entity };
}

export function foundFlagReset() {
    return { type: ACTION_TYPES.FOUND_FLAG_RESET };
}

export function createdFlagReset() {
    return { type: ACTION_TYPES.CREATED_FLAG_RESET };
}

export function updatedFlagReset() {
    return { type: ACTION_TYPES.UPDATED_FLAG_RESET };
}

export function editedFlagReset() {
    return { type: ACTION_TYPES.DELETED_FLAG_RESET };
}
