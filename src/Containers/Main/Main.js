import './Main.sass';
import { useState, useEffect } from 'react';
import Login from '../../Components/Login/Login.js'
import Register from '../../Components/Register/Register';

const Main = () => {

    const [entrance, setEntrance] = useState(false);

    return (
        <>
            <div className="main">
                <div className="logo"><img className="imgLogo" src=""></img></div>
                {!entrance && <Login/>}
                {entrance && <Register/>}
                {!entrance && <button onClick={() => setEntrance(true)}>Regístrate</button>}
            </div>
        </>
    )
};

export default Main;