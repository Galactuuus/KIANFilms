import cookies from 'js-cookies';

const fetchByDirector = async (director) => {
    
    let token = cookies.getItem('auth');

    let response = await fetch(`http://127.0.0.1:4000/movie/director?director=${director}`, {
        method: 'GET',
        headers: { 
            "Content-Type": "application/json",
            auth: token 
        },
        
    })

    if(response.ok){
        let data = response.json();
        return data;
    }else{
        console.log(response.statusText);
    }

}

export default fetchByDirector;