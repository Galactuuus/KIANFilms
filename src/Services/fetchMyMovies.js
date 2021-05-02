import cookies from 'js-cookies';
import jwt from 'jsonwebtoken';

const fetchMyMovies = async () => {
    
    let token = cookies.getItem('auth');
    const user = jwt.decode(token);
    let response = await fetch(`http://127.0.0.1:4000/order/user?user=${user.id}`, {
        method: 'GET',
        headers: { 
            "Content-Type": "application/json",
            "auth": token 
        },
        
    })
    

    if(response.ok){
        let data = response.json();
        return data;
    }else{
        console.log(response.statusText);
        return false;
    }

}

export default fetchMyMovies;