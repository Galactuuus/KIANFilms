let moviesState = [];

const moviesReducer = (movies = moviesState, action) => {

    if(action.type === 'ADD_MOVIES'){
        return movies.concat(action.payload);
    }
    if(action.type === 'REMOVE_MOVIES'){
        return movies = [];
    }
    return movies;
}

export default moviesReducer;