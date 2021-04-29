import getDate from '../../util/dateFormatter';
import jwt from 'jsonwebtoken';
import cookies from 'js-cookies';

const getUser = () => {
    return async (dispatch) => {
        try {
            const token = cookies.getItem('auth');
            const id = jwt.decode(token).id

            let res = await fetch(`http://localhost:4000/user/dashboard/${id}`, {
                method: 'GET',
                headers:
                {
                    "Content-Type": "application/json",
                    "auth": token
                }
            });

            res = await res.json();

            const dateFormatted = getDate(res.born)

            const userData = { ...res, date: dateFormatted };

            dispatch(
                {
                    type: 'SET_USER',
                    payload: userData
                }
            );

        } catch (e) {
            console.log(e);
        }
    }
}

export default getUser;