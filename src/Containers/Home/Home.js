import './Home.sass';
import store from '../../Store/store.js';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/header/Header'
import Carrousel from '../../Components/carrousel/Carrousel.js';

const Home = () => {

    const [log, setLog] = useState(false);

    const history = useHistory();

    useEffect(() => {
        if( store.getState().isLogged === false ) history.push('/');
    },[])



    return(
        <>
            <Header />
            <div className="home">HOME</div>
            <Carrousel />
        </>
    )
};

export default Home;