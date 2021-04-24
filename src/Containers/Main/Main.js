import './Main.sass';
import React, { useState, useEffect } from 'react';
import Login from '../../Components/Login/Login.js'
import Register from '../../Components/Register/Register';
import store from '../../Store/store'

const Main = () => {

    const [entrance, setEntrance] = useState(false);

    useEffect(() => {
        store.subscribe(() => {
            setEntrance(store.getState().entrance)
            console.log(entrance)
        })
    }, []);

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