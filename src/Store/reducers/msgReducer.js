let msgState = false;

const msgReducer = (msg = msgState, action) => {

    if(action.type === 'BACK_TO_LOGIN'){
        return msg = action.payload.msg;
    }
    return msg;
}

export default msgReducer;