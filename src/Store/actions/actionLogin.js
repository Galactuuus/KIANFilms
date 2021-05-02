
export const setLog = (param) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_LOG',
            payload: param
        })
    }
};

export const setRole = (role) => {
    return (dispatch) => {
        dispatch(
            {
                type: 'SET_ROLE',
                payload: role
            }
        )
    } 
}