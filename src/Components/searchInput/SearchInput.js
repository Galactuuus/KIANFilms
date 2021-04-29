import './SearchInput.sass';
import React, { useEffect, useRef } from 'react';
import fetchByParam from '../../Services/fetchByParam.js';
import { searchingTrue, searchingFalse } from '../../Store/actions/actionSearching.js';
import { addMovies, removeMovies } from '../../Store/actions/actionMovies.js'
import { useSelector, useDispatch } from 'react-redux';

const SearchInput = () => {

    const dispatch = useDispatch();
    const searching = useSelector((state) => state.searching)

    const SearchMovies = async (e) => {
        if(e !== "" ){
            if(searching === false) dispatch(searchingTrue({ search: true, data: e } ));
            let dataByParam = await fetchByParam(e);
            if (!dataByParam ) {
                dispatch(removeMovies());
            };
            
            dispatch(removeMovies());
            dispatch(addMovies(dataByParam));

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