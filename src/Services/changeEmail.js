import cookies from 'js-cookies';
import jwt from 'jsonwebtoken';

const changeEmail = async (email) => {
    
    let token = cookies.getItem('auth');
    let user = jwt.decode(token);
    let id = user.id;

    let response = await fetch('http://127.0.0.1:4000/user/update/email', {
        method: 'PATCH',
        headers: { 
            "Content-Type": "application/json",
            auth: token 
        },
        body: JSON.stringify({
            id: id,
            email: email
        })
        
    })

    if(response.ok){
        let data = response.json();
        return data;
    }else{
        console.log(response.statusText);
        return false;
    }

}

export default changeEmail;