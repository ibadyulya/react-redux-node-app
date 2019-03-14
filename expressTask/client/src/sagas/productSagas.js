import {
    call, put, fork, all, takeEvery,
} from 'redux-saga/effects';
import ProductApi from '../api/productApi';
import ACTION_TYPES from '../constants/action-types';

function* createProduct(action) {
    try {
        const resData = yield call(ProductApi.createProduct, action.entity);
        yield put({ type: ACTION_TYPES.CREATE_PRODUCT_SUCCESS, payload: resData });
    } catch (e) {
        yield put({ type: ACTION_TYPES.CREATE_PRODUCT_FAILURE, message: e.message });
    }
}

function* loadProductList() {
    try {
        const resData = yield call(ProductApi.getProductsList);
        yield put({ type: ACTION_TYPES.GET_PRODUCT_LIST_SUCCESS, payload: resData });
    } catch (e) {
        yield put({ type: ACTION_TYPES.GET_PRODUCT_LIST_FAILURE, message: e.message });
    }
}

function* loadProduct(action) {
    try {
        const resData = yield call(ProductApi.getProduct, action.entityID);
        yield put({ type: ACTION_TYPES.GET_PRODUCT_SUCCESS, payload: resData });
    } catch (e) {
        yield put({ type: ACTION_TYPES.GET_PRODUCT_FAILURE, message: e.message });
    }
}

function* updateProduct(action) {
    try {
        const resData = yield call(ProductApi.updateProduct, action.entity);
        yield put({ type: ACTION_TYPES.UPDATE_PRODUCT_SUCCESS, payload: resData });
    } catch (e) {
        yield put({ type: ACTION_TYPES.UPDATE_PRODUCT_FAILURE, message: e.message });
    }
}

function* deleteProduct(action) {
    try {
        const resData = yield call(ProductApi.deleteProduct, action.entityID);
        yield put({ type: ACTION_TYPES.DELETE_PRODUCT_SUCCESS, payload: resData });
    } catch (e) {
        yield put({ type: ACTION_TYPES.DELETE_PRODUCT_FAILURE, message: e.message });
    }
}

function* filterList(action) {
    try {
        const resData = yield call(ProductApi.filterList, action.value);
        yield put({ type: ACTION_TYPES.FILTER_PRODUCT_SUCCESS, payload: resData });
    } catch (e) {
        yield put({ type: ACTION_TYPES.FILTER_PRODUCT_FAILURE, message: e.message });
    }
}

function* watchcreateProduct() {
    yield takeEvery(ACTION_TYPES.CREATE_PRODUCT_REQUEST, createProduct);
}

function* watchProuctList() {
    yield takeEvery(ACTION_TYPES.GET_PRODUCT_LIST_REQUEST, loadProductList);
}

function* watchLoadProduct() {
    yield takeEvery(ACTION_TYPES.GET_PRODUCT_REQUEST, loadProduct);
}

function* watchUpdateProduct() {
    yield takeEvery(ACTION_TYPES.UPDATE_PRODUCT_REQUEST, updateProduct);
}

function* watchDeleteProduct() {
    yield takeEvery(ACTION_TYPES.DELETE_PRODUCT_REQUEST, deleteProduct);
}

function* watchfilterList() {
    yield takeEvery(ACTION_TYPES.FILTER_PRODUCT_REQUEST, filterList);
}

export default function* root() {
    yield all([
        fork(watchcreateProduct),
        fork(watchProuctList),
        fork(watchLoadProduct),
        fork(watchUpdateProduct),
        fork(watchDeleteProduct),
        fork(watchfilterList),
    ]);
}
