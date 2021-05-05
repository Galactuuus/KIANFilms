import { useState } from 'react';
import Modal from 'react-modal';
import InfoMovie from '../infoMovie/infoMovie';
import './OrderCard.sass';

const OrderCard = (props) => {

    const [popUp, setPopUp] = useState(false)

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
            <div className="orderCard">
                <div className="orderInfo">
                    <div>{props.title}</div>
                    <div>Alquilada</div>
                    <div>{props.date}</div>
                    <div>Hasta</div>
                    <div>{props.returnDate}</div>
                </div>
                <div className="orderButtons">
                    <button onClick={() => setPopUp(true)}>+ Informacion</button>

                </div>
                <div className="posterSection">
                    <div className="movieOrderCard">
                        <img className="DashboardCardPoster" src={process.env.PUBLIC_URL + "/img/" + props.poster} alt="movie poster"></img>
                    </div>
                </div>
            </div>

            <Modal ariaHideApp={false} style={customStyles} isOpen={popUp}>
                <button className="leavePopUp" onClick={() => setPopUp(false)}>X</button>
                <InfoMovie movie={props.movie.movie} returnDate={props.returnDate}/>
            </Modal>
        </>
    )
}

export default OrderCard;