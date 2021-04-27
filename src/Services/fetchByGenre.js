import cookies from 'js-cookies';

const fetchByGenre = async (genre) => {
    
    let token = cookies.getItem('auth');

    let response = await fetch(`http://127.0.0.1:4000/movie/genre?genre=${genre}`, {
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

export default fetchByGenre;