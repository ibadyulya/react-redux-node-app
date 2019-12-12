import ProductApi from '../api/productApi';
import ACTION_TYPES from '../constants/action-types';
import ACTION_STATES from './actionStates';

export const createProduct = entity => async dispatch => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.CREATE_PRODUCT_REQUEST));

    try {
        const resData = await ProductApi.createProduct(entity);

        dispatch(
            ACTION_STATES.success(ACTION_TYPES.CREATE_PRODUCT_SUCCESS, resData)
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        dispatch(
            ACTION_STATES.failure(ACTION_TYPES.CREATE_PRODUCT_FAILURE, error)
        );
    }
};

export const getProduct = entityID => async dispatch => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.GET_PRODUCT_REQUEST));

    try {
        const resData = await ProductApi.getProduct(entityID);

        dispatch(
            ACTION_STATES.success(ACTION_TYPES.GET_PRODUCT_SUCCESS, resData)
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        dispatch(
            ACTION_STATES.failure(ACTION_TYPES.GET_PRODUCT_FAILURE, error)
        );
    }
};

export const getProductsList = () => async dispatch => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.GET_PRODUCT_LIST_REQUEST));

    try {
        const resData = await ProductApi.getProductsList();

        dispatch(
            ACTION_STATES.success(
                ACTION_TYPES.GET_PRODUCT_LIST_SUCCESS,
                resData
            )
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        dispatch(
            ACTION_STATES.failure(ACTION_TYPES.GET_PRODUCT_LIST_FAILURE, error)
        );
    }
};

export const updateProduct = entity => async dispatch => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.UPDATE_PRODUCT_REQUEST));

    try {
        const resData = await ProductApi.updateProduct(entity);

        dispatch(
            ACTION_STATES.success(ACTION_TYPES.UPDATE_PRODUCT_SUCCESS, resData)
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        dispatch(
            ACTION_STATES.failure(ACTION_TYPES.UPDATE_PRODUCT_FAILURE, error)
        );
    }
};

export const deleteProduct = entityID => async dispatch => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.DELETE_PRODUCT_REQUEST));

    try {
        const resData = await ProductApi.deleteProduct(entityID);

        dispatch(
            ACTION_STATES.success(ACTION_TYPES.DELETE_PRODUCT_SUCCESS, resData)
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        dispatch(
            ACTION_STATES.failure(ACTION_TYPES.DELETE_PRODUCT_FAILURE, error)
        );
    }
};

export const filterList = value => async dispatch => {
    dispatch(ACTION_STATES.request(ACTION_TYPES.FILTER_PRODUCT_REQUEST));

    try {
        const resData = await ProductApi.filterList(value);

        dispatch(
            ACTION_STATES.success(ACTION_TYPES.FILTER_PRODUCT_SUCCESS, resData)
        );
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        dispatch(
            ACTION_STATES.failure(ACTION_TYPES.FILTER_PRODUCT_FAILURE, error)
        );
    }
};
