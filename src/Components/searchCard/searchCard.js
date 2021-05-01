import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import MovieRentView from "../MovieRentView/MovieRentView";
import Modal from 'react-modal';
import './searchCard.sass';
const SearchCard = (props) => {

    const MovieSearched = useSelector((state) => state.movies);

    const [styleSass, setStyleSass] = useState('infoMovie');
    const [popUp, setPopUp] = useState(false)

    const history = useHistory();
    useEffect(() => {
        Modal.setAppElement('body');
    }, [])

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
    };

    return (
        <>
            <div className={styleSass}
                key={MovieSearched.indexOf(props.item)}
                onMouseEnter={() => setStyleSass('onHover')}
                onMouseLeave={() => setStyleSass('infoMovie')}
                onClick={() => setPopUp(true)}>
                <img className="imgMovie" src={process.env.PUBLIC_URL + "/img/" + props.item.poster} />
            </div>
            <Modal ariaHideApp={false} style={customStyles} isOpen={popUp}>
                <button className="leavePopUp" onClick={() => setPopUp(false)}>X</button>
                <MovieRentView movie={props.item} />
            </Modal>
        </>
    )
}

export default SearchCard;