import './SearchInput.sass';
import React, { useEffect } from 'react';
import SearchMovies from '../../Services/fetchSearchInput.js'

const SearchInput = () => {

    useEffect(() => {
        focusInput.current.focus();
    }, [])

    const focusInput = React.createRef();

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