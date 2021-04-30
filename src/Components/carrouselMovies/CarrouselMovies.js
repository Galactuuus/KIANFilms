import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './CarrouselMovies.sass'

const CarrouselMovies = (props) => {

    const movie = useRef()

    const zoomIn = (e) => {

        e.preventDefault();
        movie.current.classList.add('hover');
    }

    const undoZoom = (e) => {

        e.preventDefault();
        movie.current.classList.remove('hover')
    }

    return (

        <div className="pelicula" ref={movie} onMouseEnter={(e) => zoomIn(e)} onMouseLeave={(e) => undoZoom(e)}>
            <Link to={props.link}>
                <img className="cardPoster" src={process.env.PUBLIC_URL + "/img/" + props.poster} alt="movie poster"></img>
            </Link>
        </div>
    )
}

export default CarrouselMovies;