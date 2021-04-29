import { combineReducers } from 'redux';
import entranceReducer from './entranceReducer';
import isLoggedReducer from './isLoggedReducer';
import moviesReducer from './moviesReducer';
import msgReducer from './msgReducer';
import searchingReducer from './searchingReducer';
import userDataReducer from './userDataReducer';
import userOrdersReducer from './userOrdersReducer';

const mainReducer = combineReducers({
    isLogged: isLoggedReducer,
    entrance: entranceReducer,
    msg: msgReducer,
    movies: moviesReducer,
    searching: searchingReducer,
    user: userDataReducer,
    orders: userOrdersReducer
})

export default mainReducer;