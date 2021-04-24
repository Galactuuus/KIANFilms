import { createStore } from 'redux'

const initialState = {
    isLogged: false,
    pelis: []
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_LOG':
            return { isLogged: action.type }
        default:
            return state 
    }
}

export default createStore(reducer, initialState);