import cookies from 'js-cookies';
import jwt from 'jsonwebtoken';

const changeUserName = async (username) => {
    
    let token = cookies.getItem('auth');
    let user = jwt.decode(token);
    let id = user.id;

    let response = await fetch('http://127.0.0.1:4000/user/update/username', {
        method: 'PATCH',
        headers: { 
            "Content-Type": "application/json",
            auth: token 
        },
        body: JSON.stringify({
            id: id,
            username: username
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

export default changeUserName;