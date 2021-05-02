import React, { useEffect, useState } from "react";
import './MovieRentView.sass'
import fetchRentMovie from '../../Services/fetchRentMovie'
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import fetchMyMovies from '../../Services/fetchMyMovies'

const MovieRentView = (props) => {

    const [myMovies, setMyMovies] = useState([]);
    const [bought, setBought] = useState(false)

    const history = useHistory();

    useEffect(async () => {
        let movies = await fetchMyMovies();
        setMyMovies(movies);
    }, [])

    return (
        <>
            {myMovies.map(movie => { if(movie.movie === props.movie._id && bought === false) setBought(true)})}
            <div className="movieRent">
                <div className="movieRentUp">
                    <div className="titleSide">
                        <div className="titleTop"></div>
                        <div className="titleDiv"><h1>{props.movie.title}</h1></div>
                        <div className="titleMid"><p>{props.movie.synopsis}</p></div>
                        <div className="titleButtons">
                            {!bought && <button onClick={() => { fetchRentMovie(props.movie._id); setBought(true) }}>Alquilar Ya!</button>}
                            {bought && <button>Ver Ya!</button>}
                            <button onClick={() => history.push('/dashboard')}>Mis Peliculas</button>
                        </div>
                    </div>
                    <div className="posterSide">
                        <div className="posterTop"></div>
                        <div className="posterImg">
                            <img src={process.env.PUBLIC_URL + "/img/" + props.movie.poster} />
                        </div>
                        <div className="posterDirector">
                            <h4>Director</h4><h4>:  {props.movie.director}</h4>
                        </div>
                    </div>
                </div>
                <div className="movieRentDown">
                    <div className="sameDirector"></div>
                    <div className="sameGenre"></div>
                </div>
            </div>
        </>
    )
}

export default MovieRentView;