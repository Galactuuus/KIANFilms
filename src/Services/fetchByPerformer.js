import cookies from 'js-cookies';

const fetchByPerformer = async (performer) => {
    
    let token = cookies.getItem('auth');

    let response = await fetch(`http://127.0.0.1:4000/movie/performer?performer=${performer}`, {
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

export default fetchByPerformer;