import { combineReducers } from 'redux';
import entranceReducer from './entranceReducer';
import loginReducer from './LoginReducer';
import moviesReducer from './moviesReducer';
import msgReducer from './msgReducer';
import searchingReducer from './searchingReducer';
import userDataReducer from './userDataReducer';
import userOrdersReducer from './userOrdersReducer';
import carrouselReducer from '../reducers/carrouselReducer'

const mainReducer = combineReducers({
    loginState: loginReducer,
    entrance: entranceReducer,
    msg: msgReducer,
    movies: moviesReducer,
    searching: searchingReducer,
    user: userDataReducer,
    orders: userOrdersReducer,
    carrousel: carrouselReducer
})

export default mainReducer;