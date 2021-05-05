import React, { useState, useEffect } from "react";
import './infoMovie.sass'
import fetchMyMovies from '../../Services/fetchMyMovies'

const InfoMovie = (props) => {

    const [expired, setExpired] = useState(false);

    let expireDate = new Date(props.returnDate);
    let today = Date.now();
    let date = new Date(today);

    useEffect(() => {
        if((date.getTime()/1000) > (expireDate.getTime()/1000)) {
            setExpired(true);
        }
    }, [])
    
    return (
        <div className="infoMovie">
            <div className="infoMovieTitle">
                <h1>{props.movie.title}</h1>
            </div>
            <div className="infoMoviePoster">
                <img src={process.env.PUBLIC_URL + "/img/" + props.movie.poster}></img>
            </div>
            <div className="infoMovieParragraph">
                <p className="infoMovieSynopsis">{props.movie.synopsis}</p>
            </div>
            <div className="infoMovieTime">
                <h4>Tu pelicula expira el:</h4>
                {expired && <h5>CADUCADA!</h5>}
                {!expired && <h5>{props.returnDate}</h5>}
            </div>
        </div>
    )
}

export default InfoMovie;