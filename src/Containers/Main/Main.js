import './Main.sass';
import React, { useState, useEffect } from 'react';
import Login from '../../Components/Login/Login.js'
import Register from '../../Components/Register/Register';
import store from '../../Store/store'
import logo from '../../logo3.png'

const Main = () => {

    const [entrance, setEntrance] = useState(false);
    const [msg, setMsg] = useState(false);

    useEffect(() => {
        store.subscribe(() => {
            setEntrance(store.getState().entrance);
            setMsg(store.getState().msg);
        })
    }, []);

    return (
        <>
            <div className="main">
                <div className="logo"><img className="imgLogo" src={logo}></img></div>
                {msg && <div className="welcome">🥳  Gracias por registrarte, inicia sesión y comienza a disfrutar 🥳</div>}
                <div className="logForm">
                    {!entrance && <Login />}
                    {entrance && <Register />}
                    {!entrance &&
                        <button className="mainBtnRegister" onClick={() => {
                            setEntrance(true);
                            setMsg(false)
                        }}>
                            Regístrate</button>}
                </div>
            </div>
        </>
    )
};

export default Main;