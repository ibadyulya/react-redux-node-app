import { fork, all } from 'redux-saga/effects';

import {
    watchСreateProduct,
    watchProductList,
    watchLoadProduct,
    watchUpdateProduct,
    watchDeleteProduct,
    watchFilterList
} from './productSagas';

function* rootSagas() {
    yield all([
        fork(watchСreateProduct),
        fork(watchProductList),
        fork(watchLoadProduct),
        fork(watchUpdateProduct),
        fork(watchDeleteProduct),
        fork(watchFilterList)
    ]);
}

export default rootSagas;
