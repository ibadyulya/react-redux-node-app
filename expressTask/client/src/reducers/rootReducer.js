import { combineReducers } from 'redux';

import productOperations from './productOperations';


const rootReducer = combineReducers({
    productOperations,
});

export default rootReducer;
