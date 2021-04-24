import { createStore } from 'redux'



const initialState = {
    isLogged: false
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_LOG':
            return { isLogged: action.login } 
        default:
            return state 
    }
}
const store = createStore(reducer, initialState);
export default store;