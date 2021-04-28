import './OrderCard.sass';

const OrderCard = (props) => {
    return (
        <div className="orderCard">
            <div className="orderInfo">
                <div>{props.title}</div>
                <div>Alquilada</div>
                <div>{props.date}</div>
                <div>Hasta</div>
                <div>{props.returnDate}</div>
            </div>
            <div className="posterSection">
                <div className="movieOrderCard">
                    <img className="DashboardCardPoster" src={process.env.PUBLIC_URL + "/img/" + props.poster}></img>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;