import cookies from 'js-cookies';

const fetchUserByEmail = async (email) => {

    const token = cookies.getItem('auth');

    try {
        let users = await fetch(`http://localhost:4000/user/find?email=${email}`, {
            method: 'GET',
            headers:
            {
                "Content-Type": "application/json",
                "auth": token
            }
        });
        
        users = await users.json();

        return users;


    } catch (e) {
        console.log(e.message);
    }
}

export default fetchUserByEmail;