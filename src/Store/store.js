import { createStore } from 'redux'

const initialState = {
    isLogged: false,
    pelis: [],
    entrance: false,
    msg: false,
    searching: false
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'SET_LOG':
            return { ...state, isLogged: action.payload }
        case 'BACK_TO_LOGIN':
            return {
                ...state,
                entrance: action.payload.yesOrNo,
                msg: action.payload.msg
            }    
        default:
            return state 
    }
}

const store = createStore(reducer, initialState)

export default store;