import { combineReducers } from 'redux';
import entranceReducer from './entranceReducer';
import isLoggedReducer from './isLoggedReducer';
import moviesReducer from './moviesReducer';
import msgReducer from './msgReducer';
import searchingReducer from './searchingReducer';

const mainReducer = combineReducers({
    isLogged: isLoggedReducer,
    entrance: entranceReducer,
    msg: msgReducer,
    movies: moviesReducer,
    searching: searchingReducer
})

export default mainReducer;