import { combineReducers } from 'redux';
import entranceReducer from './entranceReducer';
import isLoggedReducer from './isLoggedReducer';
import msgReducer from './msgReducer';

const mainReducer = combineReducers({
    isLogged: isLoggedReducer,
    entrance: entranceReducer,
    msg: msgReducer
})

export default mainReducer;