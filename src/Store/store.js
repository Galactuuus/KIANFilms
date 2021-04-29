import { applyMiddleware, createStore } from 'redux';
import mainReducer from './reducers/mainReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const composeEnhancers = composeWithDevTools({ trace: true })

const store = createStore(mainReducer, {}, applyMiddleware(thunk));

export default store;