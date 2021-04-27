import Card from '../card/Card'
import './Carrousel.sass'

const Carrousel = () => {

    return (
        <div className="carrousel">
            <div className="chevron chLeft">
                <i class="fas fa-chevron-left"></i>
            </div>
            <div className="cardContainer">
                <Card poster={"lord-of-the-rings-poster.jpg"}/>
            </div>
            <div className="chevron chRight">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>

    )
}

export default Carrousel;