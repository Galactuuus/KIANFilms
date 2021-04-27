export const searchingTrue = (params) => {
    
    return {
        type: 'SET_SEARCH',
        payload: params
    }
}

export const searchingFalse = () => {
    return{
        type: 'STOP_SEARCH',
    }
}