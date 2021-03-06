import './Home.sass';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/header/Header'
import Carrousel from '../../Components/carrousel/Carrousel.js';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'js-cookies';
import SearchCard from '../../Components/searchCard/searchCard';
import { fetchByGenre, resetMovies } from '../../Store/actions/actionsCarrousel';

const Home = () => {

    const history = useHistory();
    const isLogged = useSelector((state) => state.loginState.logged);
    const searching = useSelector((state) => state.searching);

    const MovieSearched = useSelector((state) => state.movies);

    const actionMovies = useSelector((state) => state.carrousel.actionMovies);
    const thrillerMovies = useSelector((state) => state.carrousel.thrillerMovies);
    const animationMovies = useSelector((state) => state.carrousel.animationMovies);
    const romanceMovies = useSelector((state) => state.carrousel.romanceMovies);
    const horrorMovies = useSelector((state) => state.carrousel.horrorMovies);
    const sciFiMovies = useSelector((state) => state.carrousel.sciFiMovies);
    const crimeMovies = useSelector((state) => state.carrousel.crimeMovies);

    const dispatch = useDispatch();

    useEffect(() => {
        if (isLogged === false && !cookies.getItem('auth')) history.push('/');
        dispatch(resetMovies());
        dispatch(fetchByGenre('action', 15));
        dispatch(fetchByGenre('thriller', 15));
        dispatch(fetchByGenre('animation', 15));
        dispatch(fetchByGenre('romance', 15));
        dispatch(fetchByGenre('horror', 15));
        dispatch(fetchByGenre('sci-fi', 15));
        dispatch(fetchByGenre('crime', 15));
    }, [dispatch, history, isLogged]);

    return (
        <>
            <Header />
            <div className="homeBody">
                {!searching &&
                    <>
                        <Carrousel movies={actionMovies} title={'Peliculas de Accion'} />
                        <Carrousel movies={thrillerMovies} title={'Thrillers'} />
                        <Carrousel movies={animationMovies} title={'Peliculas Animadas'} />
                        <Carrousel movies={romanceMovies} title={'Peliculas de Romance'} />
                        <Carrousel movies={horrorMovies} title={'Peliculas de Terror'} />
                        <Carrousel movies={sciFiMovies} title={'Peliculas de Ciencia Ficci??n'} />
                        <Carrousel movies={crimeMovies} title={'Peliculas de Crimen'} />
                    </>}
                {searching &&
                    <div className="searchedMovies">
                        {MovieSearched.map(movie => {
                            if (!movie) {
                                return (
                                    <div className="searchedMovies">
                                        <div className="movieContainer">Sugerencias:
                                            <div className="searchLi">
                                                <li>Busca por g??nero: Accion, deporte, drama, comedia.. etc</li>
                                                <li>Busca por reparto de Actores</li>
                                                <li>Busca por titulo de pelicula</li>
                                                <li>Busca por director</li>
                                            </div>
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