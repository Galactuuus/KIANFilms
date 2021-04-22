import { createStore } from 'redux'

const initialState = {
    isLogged: false,
    pelis: []
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_LOG':
            return { ...state, isLogged: (state.isLogged) ? false : true }
        default:
            return state 
    }
}

export default createStore(reducer, initialState);