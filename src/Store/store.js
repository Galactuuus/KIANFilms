import { createStore } from 'redux'

const initialState = {
    isLogged: false,
    pelis: [],
    entrance: false
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_LOG':
            return {
                ...state,
                isLogged: action.payload
            }
        case 'BACK_TO_LOGIN':
            return {
                ...state,
                entrance: action.payload
            }    
        default:
            return state 
    }
}

export default createStore(reducer, initialState);