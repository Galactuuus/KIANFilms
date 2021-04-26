let entranceState = false;

const entranceReducer = (entrance = entranceState, action) => {

    if(action.type === 'BACK_TO_LOGIN'){
        return entrance = action.payload.yesOrNo;
    }
    return entrance;
}

export default entranceReducer;