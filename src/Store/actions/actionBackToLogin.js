

const backToLogin = (params) => {
    return{
        type: 'BACK_TO_LOGIN',
        payload: params
    }
};

export default backToLogin;