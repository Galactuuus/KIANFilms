import './Home.sass';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/header/Header'
import Carrousel from '../../Components/carrousel/Carrousel.js';
import { useSelector } from 'react-redux';
import cookies from 'js-cookies';
import { searchingTrue } from '../../Store/actions/actionSearching';


const Home = () => {

    const history = useHistory();
    const isLogged = useSelector((state) => state.isLogged);
    const searching = useSelector((state) => state.searching);
    const MovieSearched = useSelector((state) => state.movies);

    useEffect(() => {
        if(isLogged === false && !cookies.getItem('auth')) history.push('/');
    },[])

    return(
        <>
            <Header />
            {!searching && 
            <>
                <div className="home">HOME</div>
                <Carrousel />
            </>}
            {searching && MovieSearched.map(movie => {
                return (
                    <div>{movie.title}</div>
                )
            })}
        </>
    )
};

export default Home;