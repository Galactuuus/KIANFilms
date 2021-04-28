import { Link } from "react-router-dom";
import SearchInput from "../searchInput/SearchInput";
import './Header.sass';

const Header = () => {

    return (
        <div className="header">
            <div className="headerLogo">KIANFILMS</div>
            <div className="actionPanel">
                <input id="toggle" type="checkbox"></input>
                <label id="searchBarLabel" htmlFor="toggle"><i className="fas fa-search"></i></label>
                <SearchInput />
                <Link to="/dashboard"><i className="fas fa-user-circle fa-2x"></i></Link>
            </div>
        </div>
    )
}

export default Header;