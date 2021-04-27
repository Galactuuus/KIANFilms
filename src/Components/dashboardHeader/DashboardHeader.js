import './DashboardHeader.sass';
import { Link } from "react-router-dom";

const dashboardHeader = () => {
    return (
        <div className="header">
            <div className="headerLogo">KIANFILMS</div>
            <div className="actionPanel">
                <Link to="/home"><i className="fas fa-film fa-2x"></i></Link>
            </div>
        </div>
    )
}

export default dashboardHeader;