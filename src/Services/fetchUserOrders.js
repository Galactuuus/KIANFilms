import cookies from 'js-cookies';

const getUserOrders = async (id, skip, limit) => {

    try {
        const token = cookies.getItem('auth');

        let res = await fetch(`http://localhost:4000/order/user/${id}?skip=${skip}&limit=${limit}`, {
            method: 'GET',
            headers:
            {
                "Content-Type": "application/json",
                "auth": token
            }
        });
        
        res = await res.json();
        console.log(res)
        
    } catch (e) {
        console.log(e);
    }
}

export default getUserOrders;