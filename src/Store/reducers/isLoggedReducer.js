let isLoggedState = false;

const isLoggedReducer = (isLogged = isLoggedState, action) => {

    if(action.type === 'SET_LOG'){
        return isLogged = action.payload;
    }
    return isLogged;
}

export default isLoggedReducer;