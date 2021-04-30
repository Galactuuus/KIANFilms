import jwt from 'jsonwebtoken';
import cookies from 'js-cookies';

const getOrders = (skip, limit) => {
    return async (dispatch) => {
        try {
            const token = cookies.getItem('auth');
            const id = jwt.decode(token).id

            let res = await fetch(`http://localhost:4000/order/user/${id}?skip=${skip}&limit=${limit}`, {
                method: 'GET',
                headers:
                {
                    "Content-Type": "application/json",
                    "auth": token
                }
            });

            res = await res.json();

            dispatch(
                {
                    type: 'SET_ORDERS',
                    payload: res
                }
            );

        } catch (e) {
            console.log(e);
        }
    }
}

export default getOrders;