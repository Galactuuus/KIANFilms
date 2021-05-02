const userProfileInfo = {};

const userDataReducer = (user = userProfileInfo, action) => {
    
    if (action.type === 'SET_USER') {
        return  user = action.payload
    }

    return user;
}

export default userDataReducer;