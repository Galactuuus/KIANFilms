import './Card.sass';

const Card = (props) => {
    return (
        <div className="movieCard">
            <img className="cardPoster" src={process.env.PUBLIC_URL + "/img/" + props.poster}></img>
        </div>
    )
}

export default Card;