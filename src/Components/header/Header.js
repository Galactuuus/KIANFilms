import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getUser from "../../Store/actions/actionGetUserProfile";
import SearchInput from "../searchInput/SearchInput";
import './Header.sass';
import logo from '../../logo2.png'

const Header = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [])

    let role

    role = useSelector(state => state.loginState.role);
    role = useSelector(state => state.user.role);

    let userPanel;

    if (role !== 'admin') userPanel = <Link to="/dashboard"><i className="fas fa-user-circle fa-2x"></i></Link>
    if (role === 'admin') userPanel = <Link to="/admin"><i className="fas fa-users-cog fa-2x"></i></Link>

    return (
        <div className="header">
            <div className="headerLogo">
                <Link to="/home">
                    <img className="imgLogoHeader" src={logo} />
                </Link>
            </div>
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