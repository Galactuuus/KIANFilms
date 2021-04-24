import './Main.sass';
import React, { useState, useEffect } from 'react';
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
                {!entrance && 
                    <div className="registerBtn">
                        <button onClick={() => setEntrance(true)}>Regístrate</button>
                    </div>}
            </div>
        </>
    )
};

export default Main;