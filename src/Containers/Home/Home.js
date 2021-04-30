import './Home.sass';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/header/Header'
import Carrousel from '../../Components/carrousel/Carrousel.js';
import { useSelector } from 'react-redux';
import cookies from 'js-cookies';
import Slider from "react-slick";
import SearchCard from '../../Components/searchCard/searchCard';

const Home = () => {

    const history = useHistory();
    const isLogged = useSelector((state) => state.isLogged);
    const searching = useSelector((state) => state.searching);
    const MovieSearched = useSelector((state) => state.movies);

    useEffect(() => {
        if (isLogged === false && !cookies.getItem('auth')) history.push('/');
    }, [])


    return (
        <>
            <Header />
            <div className="homeBody">
                {!searching &&
                    <>
                    </>}
                {searching &&
                    <div className="searchedMovies">
                        {MovieSearched.map(movie => {
                            if (!movie) {
                                return (
                                    <div className="searchedMovies">
                                        <div className="movieContainer">No se han encontrado peliculas!</div>
                                        <div className="movieContainer">Sugerencias:
                                            <li>Busca por género: Accion, deporte, drama, comedia.. etc</li>
                                            <li>Busca por reparto de Actores</li>
                                            <li>Busca por titulo de pelicula</li>
                                            <li>Busca por director</li>
                                        </div>
                                    </div>
                                )
                            }
                            return <SearchCard item={movie} />
                        })}
                    </div>
                }
            </div>
        </>
    )
};

export default Home;