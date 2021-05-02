const userOrdersHistory = {};

const userOrdersReducer = (orders = userOrdersHistory, action) => {

    if (action.type === 'SET_ORDERS') {
        return orders = action.payload;
    }

    return orders;
}

export default userOrdersReducer;