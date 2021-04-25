import './Home.sass';
import store from '../../Store/store.js';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/header/Header'

const Home = () => {

    const [log, setLog] = useState(false);

    const history = useHistory();

    useEffect(() => {
        store.subscribe(() => {
            setLog(store.getState().isLogged)
            if (!log) history.push('/');
        })
    }, [])

    return (
        <>
            <Header />
            <div className="home">HOME</div>
        </>
    )
};

export default Home;