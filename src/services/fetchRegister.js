const fetchRegister = async (email, userName, password, age) => {

    try {

        const urlLogin = 'http://localhost:4000/user/signup;

        const res = await fetch(urlLogin, {
            method: 'POST',
            headers: { 'email': email, 'userName':userName, 'password': password, 'age':age }
        });


        const object = await res.json();

        return object;

    } catch (error) {
        console.log(error);
    }
}

export default fetchRegister;