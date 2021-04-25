import './SearchInput.sass';
import React, { useEffect } from 'react';

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
            ></input>
        </div>
    )
}

export default SearchInput;