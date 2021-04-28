
export const addMovies = (params) => {
    return {
        type: 'ADD_MOVIES',
        payload: params
    };
}

export const removeMovies = () => {
    return {
        type: 'REMOVE_MOVIES'
    };
}
