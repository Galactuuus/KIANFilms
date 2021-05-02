const fetchLogin = async (email, password) => {

    try {
    let response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    if(response.ok){
        response = await response.json();
        return response;
    }else{
        response = await response.json();
        return response;
    }
    } catch (e) {
        console.log(e.message)
    }
}

export default fetchLogin;