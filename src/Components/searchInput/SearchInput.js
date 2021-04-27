import './SearchInput.sass';
import React, { useEffect } from 'react';
import fetchByTitle from '../../Services/fetchByTitle';
import fetchByGenre from '../../Services/fetchByGenre';
import fetchByPerformer from '../../Services/fetchByPerformer';
import fetchByDirector from '../../Services/fetchByDirector';

const SearchInput = () => {

    useEffect(() => {
        focusInput.current.focus();
    }, [])

    const focusInput = React.createRef();

    const SearchMovies = async (e) => {
        let dataByTitle = await fetchByTitle(e);
        let dataByGenre = await fetchByGenre(e);
        let dataByPerformer = await fetchByPerformer(e);
        let dataByDirector = await fetchByDirector(e);

        console.log(dataByTitle);
        console.log(dataByGenre);
        console.log(dataByPerformer);
        console.log(dataByDirector);
        
    }

    return (
        <div id="expand" className="searchBar">
            <input
                className="searchInput"
                type="search"
                name="search"
                placeholder="Buscar película"
                ref={focusInput}
                onChange={e => SearchMovies(e.target.value) }
            ></input>
        </div>
    )
}

export default SearchInput;