import { createStore } from 'redux'
import mainReducer from './reducers/mainReducer';
import { devToolsEnhancer } from 'redux-devtools-extension'

const store = createStore(mainReducer, {}, devToolsEnhancer({ trace: true }));

export default store;