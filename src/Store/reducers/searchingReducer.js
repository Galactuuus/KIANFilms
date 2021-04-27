let searchingState = false;

const searchingReducer = (searching = searchingState, action) => {

    if(action.type === 'SET_SEARCH'){
        return searching = action.payload;
    }
    if(action.type === 'STOP_SEARCH'){
        return searching = false;
    }
    return searching;
}

export default searchingReducer;