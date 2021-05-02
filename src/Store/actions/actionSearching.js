import fetchByParam from "../../Services/fetchByParam";

export const searchingTrue = (params) => {
    return async (dispatch)=>{
        dispatch({ type: 'SET_SEARCH', payload: params.search })     
        let dataByParam = await fetchByParam(params.data);

        if (!dataByParam ) {
            dispatch({ type: 'REMOVE_MOVIES' })
        };
        
        dispatch({ type: 'REMOVE_MOVIES' })
        dispatch({ type: 'ADD_MOVIES', payload: dataByParam })
    }
}

export const searchingFalse = () => {
    return (dispatch) => {
        dispatch({
            type: 'STOP_SEARCH'
        })
    }
}