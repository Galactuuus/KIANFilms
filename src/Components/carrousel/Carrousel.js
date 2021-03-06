import { useRef } from 'react';
import CarrouselMovies from '../carrouselMovies/CarrouselMovies';
import './Carrousel.sass';

const Carrousel = (props) => {

    const fila = useRef();
    const flechaIzquierda = useRef();
    const flechaDerecha = useRef();

    const movies = props.movies;

    const slideRight = () => {
        fila.current.scrollLeft += fila.current.offsetWidth;
    }

    const slideLeft = () => {
        fila.current.scrollLeft -= fila.current.offsetWidth;
    }

    return (
        <>
            <div className="peliculas-recomendadas contenedor">
                <div className="contenedor-titulo-controles">
                    <h3 className="contenedor-titulo">{props.title}</h3>
                    <div className="indicadores"></div>
                </div>

                <div className="contenedor-principal">
                    <button type="button" onClick={slideLeft} ref={flechaIzquierda} className="flecha-izquierda"><i className="fas fa-angle-left"></i></button>

                    <div ref={fila} className="contenedor-carousel">
                        <div className="carousel">
                        {movies && movies.sort(() => Math.random() - 0.5).map(element => <CarrouselMovies key={movies.indexOf(element)} movie={element} poster={element.poster} title={element.title}/>)}
                        </div>
                    </div>

                    <button type="button" onClick={slideRight} ref={flechaDerecha} className="flecha-derecha"><i className="fas fa-angle-right"></i></button>
                </div>
            </div>

        </>

    )
}

export default Carrousel;