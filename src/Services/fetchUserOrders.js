import jwt from 'jsonwebtoken';
import cookies from 'js-cookies';

const fetchUserOrders = async (skip, limit) => {

    try {

        const token = cookies.getItem('auth');
        const id = jwt.decode(token).id

        const res = await fetch(`http://localhost:4000/order/user/${id}?skip=${skip}&limit=${limit}`, {
            method: 'GET',
            headers:
            {
                "Content-Type": "application/json",
                "auth": token
            }
        });

        return res;

    } catch (error) {
        console.log(error);
    }
}

export default fetchUserOrders;