import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchInput from "../searchInput/SearchInput";
import './Header.sass';

const Header = () => {

    const role = useSelector(state => state.loginState.role);

    let userPanel;

    if (role !== 'admin') userPanel = <Link to="/dashboard"><i className="fas fa-user-circle fa-2x"></i></Link>
    if (role === 'admin') userPanel = <Link to="/admin"><i className="fas fa-users-cog fa-2x"></i></Link>

    return (
        <div className="header">
            <div className="headerLogo">KIANFILMS</div>
            <div className="actionPanel">
                <input id="toggle" type="checkbox"></input>
                <label id="searchBarLabel" htmlFor="toggle"><i className="fas fa-search"></i></label>
                <SearchInput />
                {userPanel}
            </div>
        </div>
    )
}

export default Header;