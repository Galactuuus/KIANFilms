import cookies from 'js-cookies';
import jwt from 'jsonwebtoken';

const fetchRentMovie = async (movie) => {
    
    let token = cookies.getItem('auth');
    let user = jwt.decode(token);
    let response = await fetch('http://127.0.0.1:4000/order/new', {
        method: 'POST',
        headers: { 
            "auth": token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "user": user.id,
            "movie": movie,
            "status": "created"
        })
        
    })

    if(response.ok){
        let data = response.json();
        return data;
    }else{
        return false;
    }

}

export default fetchRentMovie;