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
                <div>Dashboard</div>
            </div>
        </div>
    )
}

export default Header;