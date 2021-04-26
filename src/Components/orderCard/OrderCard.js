import './OrderCard.sass';

const OrderCard = (props) => {
    return (
        <div className="orderCard">
            <div className="orderInfo">
                <div>{props.title}</div>
                <div>Alquilada</div>
                <div>{props.date}</div>
                <div>Entrega</div>
                <div>{props.returnDate}</div>
            </div>
            <div className="movieOrderCard">
                <img className="cardPoster" src={process.env.PUBLIC_URL + "/img/" + props.poster}></img>
            </div>
        </div>
    )
}

export default OrderCard;