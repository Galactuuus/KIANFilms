import store from '../store.js'

const setLog = (param) => {
    store.dispatch({
        type: 'SET_LOG',
        payload: param
    });
}
export default setLog;