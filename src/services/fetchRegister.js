const fetchRegister = async (email, userName, password, born) => {

    try {

        const urlSignUp = 'http://localhost:4000/user/signup';

        const body = {
            "email": email,
            "userName": userName,
            "password": password,
            "born": born
        }

        let res = await fetch(urlSignUp, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        return res;

    } catch (error) {
        console.log(error);
    }
}

export default fetchRegister;