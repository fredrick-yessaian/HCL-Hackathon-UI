import { combineReducers } from 'redux'

import foodReducers from './foodReducers';

const rootReducer = combineReducers({
    reducerReturn: foodReducers,
})

export default rootReducer;
