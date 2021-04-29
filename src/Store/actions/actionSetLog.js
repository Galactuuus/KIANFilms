
const setLog = (param) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_LOG',
            payload: param
        })
    }
};

export default setLog;
