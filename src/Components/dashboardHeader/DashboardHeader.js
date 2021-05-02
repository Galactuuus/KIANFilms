import './DashboardHeader.sass';
import { Link } from "react-router-dom";
import logo from '../../logo2.png';

const DashboardHeader = () => {
    return (
        <div className="header">
            <div className="headerLogo"><img className="imgLogo" src={logo} alt="KIANFilms logo"/></div>
            <div className="actionPanel">
                <Link to="/home"><i className="fas fa-film fa-2x"></i></Link>
            </div>
        </div>
    )
}

export default DashboardHeader;