import './SearchInput.sass';
import React, { useEffect } from 'react';
import fetchByTitle from '../../Services/fetchByTitle';
import fetchByGenre from '../../Services/fetchByGenre';
import fetchByPerformer from '../../Services/fetchByPerformer';
import fetchByDirector from '../../Services/fetchByDirector';
import { searchingTrue, searchingFalse } from '../../Store/actions/actionSearching.js';
import { addMovies, removeMovies } from '../../Store/actions/actionMovies.js'
import { useSelector, useDispatch } from 'react-redux';

const SearchInput = () => {

    useEffect(() => {
        focusInput.current.focus();
    }, [])

    const focusInput = React.createRef();
    const dispatch = useDispatch();
    const searching = useSelector((state) => state.searching)

    const SearchMovies = async (e) => {
        if(e !== "" ){
            if(searching === false) dispatch(searchingTrue(true));
            let dataByTitle = await fetchByTitle(e);
            let dataByGenre = await fetchByGenre(e);
            let dataByPerformer = await fetchByPerformer(e);
            let dataByDirector = await fetchByDirector(e);

            if (!dataByTitle && !dataByGenre && !dataByPerformer && !dataByDirector ) return console.log('No se ha encontrado ninguna Pelicula');

            dispatch(removeMovies());
            if(dataByTitle) dispatch(addMovies(dataByTitle));
            if(dataByGenre) dispatch(addMovies(dataByGenre));
            if(dataByPerformer) dispatch(addMovies(dataByPerformer));
            if(dataByDirector) dispatch(addMovies(dataByDirector));

        }else{
            dispatch(searchingFalse());
        }
        
    }

    return (
        <div id="expand" className="searchBar">
            <input
                className="searchInput"
                type="search"
                name="search"
                placeholder="Buscar película"
                ref={focusInput}
                onChange={e => SearchMovies(e.target.value)}
            ></input>
        </div>
    )
}

export default SearchInput;