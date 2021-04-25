import cookies from 'js-cookies';

const SearchMovies = async (title) => {

        let token = cookies.getItem('auth');

        // SEARCH MOVIE BY TITLE

        let byTitle = await fetch(`http://127.0.0.1:4000/movie/title?title=${title}`, {
            method: 'GET',
            headers: { 
                "Content-Type": "application/json",
                auth: token 
            },
            
        })

        if(byTitle.ok){
            byTitle = byTitle.json();
            console.log(byTitle);
        }else{
            console.log(byTitle.statusText);
        }

        // SEARCH MOVIE BY GENRE

        let byGenre = await fetch(`http://127.0.0.1:4000/movie/genre?genre=${title}`, {
            method: 'GET',
            headers: { 
                "Content-Type": "application/json",
                auth: token 
            },
        })

        if(byGenre.ok){
            byGenre = byGenre.json();
            console.log(byGenre);
        }else{
            console.log(byGenre.statusText);
        }

        // SEARCH MOVIE BY PERFORMER

        let byPerformer = await fetch(`http://127.0.0.1:4000/movie/performer?performer=${title}`, {
            method: 'GET',
            headers: { 
                "Content-Type": "application/json",
                auth: token 
            },
        })

        if(byPerformer.ok){
            byPerformer = byPerformer.json();
            console.log(byPerformer);
        }else{
            console.log(byPerformer.statusText);
        }

        // SEARCH MOVIE BY DIRECTOR

        let byDirector = await fetch(`http://127.0.0.1:4000/movie/director?director=${title}`, {
            method: 'GET',
            headers: { 
                "Content-Type": "application/json",
                auth: token 
            },
        })

        if(byDirector.ok){
            byDirector = byDirector.json();
            console.log(byDirector);
        }else{
            console.log(byDirector.statusText);
        }
} 

export default SearchMovies;