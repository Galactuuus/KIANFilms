import './Main.sass';
import React, { useState, useEffect } from 'react';
import Login from '../../Components/Login/Login.js'
import Register from '../../Components/Register/Register';
import store from '../../Store/store'

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
                <div className="logo"><img className="imgLogo" src=""></img></div>
                {msg && <div className="welcome">🥳  Gracias por registrarte, inicia sesión y comienza a disfrutar 🥳</div>}
                {!entrance && <Login/>}
                {entrance && <Register/>}
                {!entrance && 
                    <div className="registerBtn">
                        <button onClick={() => { 
                            setEntrance(true);
                            setMsg(false)}}>
                            Regístrate</button>
                    </div>}
            </div>
        </>
    )
};

export default Main;