

const backToLogin = (params) => {
    return (dispatch) => {
        dispatch({
            type: 'BACK_TO_LOGIN',
            payload: params
        })
    }
};

export default backToLogin;