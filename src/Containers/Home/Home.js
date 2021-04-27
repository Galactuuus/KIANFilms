import './Home.sass';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/header/Header'
import Carrousel from '../../Components/carrousel/Carrousel.js';
import { useSelector } from 'react-redux';
import cookies from 'js-cookies';


const Home = () => {

    const history = useHistory();
    const isLogged = useSelector((state) => state.isLogged);

    useEffect(() => {
        if(isLogged === false && !cookies.getItem('auth')) history.push('/');
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