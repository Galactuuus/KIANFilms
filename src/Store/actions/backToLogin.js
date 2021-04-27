import store from '../store.js'

const backToLogin = (params) => {
    store.dispatch(
        {
            type: 'BACK_TO_LOGIN',
            payload: params
        }
    );
}

export default backToLogin;