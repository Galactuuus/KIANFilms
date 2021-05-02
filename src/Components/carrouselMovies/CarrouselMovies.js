import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import MovieRentView from '../MovieRentView/MovieRentView'
import './CarrouselMovies.sass'

const CarrouselMovies = (props) => {

    const movie = useRef()
    const [popUp, setPopUp] = useState(false);

    const zoomIn = (e) => {

        e.preventDefault();
        movie.current.classList.add('hover');
    }

    const undoZoom = (e) => {

        e.preventDefault();
        movie.current.classList.remove('hover')
    }

    const customStyles = {
        content: {
            width: '60%',
            height: '80%',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            borderRadius: '2em',
            background: '#181a1b',
            transform: 'translate(-50%, -50%)'
        }
    }


    return (
        <>
            <div className="pelicula" ref={movie} onMouseEnter={(e) => zoomIn(e)} onClick={() => setPopUp(true)} onMouseLeave={(e) => undoZoom(e)}>
                <Link to={props.link}>
                    <img className="cardPoster" src={process.env.PUBLIC_URL + "/img/" + props.poster} alt="movie poster"></img>
                </Link>
            </div>


            <Modal ariaHideApp={false} style={customStyles} isOpen={popUp}>
                <button className="leavePopUp" onClick={() => setPopUp(false)}>X</button>
                <MovieRentView movie={props.movie} />
            </Modal>
        </>
    )
}

export default CarrouselMovies;