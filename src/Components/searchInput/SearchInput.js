import './SearchInput.sass';
import React from 'react';
import { searchingTrue, searchingFalse } from '../../Store/actions/actionSearching.js';
import { useDispatch } from 'react-redux';

const SearchInput = () => {

    const dispatch = useDispatch();

    const SearchMovies = async (e) => {
        if(e !== "" ){
            dispatch(searchingTrue({ search: true, data: e } ));
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
                onChange={e => SearchMovies(e.target.value)}
            ></input>
        </div>
    )
}

export default SearchInput;