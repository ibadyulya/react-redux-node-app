import ACTION_TYPES from '../constants/action-types';

export const createProduct = entity => ({ type: ACTION_TYPES.CREATE_PRODUCT_REQUEST, entity });

export const loadProductsList = () => ({ type: ACTION_TYPES.GET_PRODUCT_LIST_REQUEST });

export const getProduct = entityID => ({ type: ACTION_TYPES.GET_PRODUCT_REQUEST, entityID });

export const updateProduct = entity => ({ type: ACTION_TYPES.UPDATE_PRODUCT_REQUEST, entity });

export const deleteProduct = entityID => ({ type: ACTION_TYPES.DELETE_PRODUCT_REQUEST, entityID });

export const filterList = value => ({ type: ACTION_TYPES.FILTER_PRODUCT_REQUEST, value });
