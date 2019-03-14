
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import productSagas from '../sagas/productSagas';
import rootReducer from '../reducers/rootReducer';

// const loggerMiddleware = createLogger();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
            // loggerMiddleware,
        ),
    ),
);

sagaMiddleware.run(productSagas);

export default store;
