
export const addMovies = (params) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_MOVIES',
            payload: params
        })
    }
}

export const removeMovies = () => {
    return (dispatch) => {
        dispatch({
            type: 'REMOVE_MOVIES'
        })
    }
}
