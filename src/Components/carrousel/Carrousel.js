import Card from '../card/Card'
import './Carrousel.sass'

const Carrousel = () => {

    return (
        <div className="carrousel">
            <div className="chevron chLeft">
                <i className="fas fa-chevron-left"></i>
            </div>
            <div className="cardContainer">
                <Card poster={"interstellar.jpg"}/>
            </div>
            <div className="chevron chRight">
                <i className="fas fa-chevron-right"></i>
            </div>
        </div>

    )
}

export default Carrousel;