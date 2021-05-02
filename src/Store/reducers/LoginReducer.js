let loginInitialState = {
    logged: false,
    role: null
};

const loginReducer = (loginState = loginInitialState, action) => {

    if (action.type === 'SET_LOG') {
        return {
            ...loginState,
            logged: action.payload
        }
    }
    if (action.type === 'SET_ROLE') {
        return {
            ...loginState,
            role: action.payload
        }
    }
    return loginState;
}

export default loginReducer;