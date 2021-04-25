import './Home.sass';
import store from '../../Store/store.js';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Components/header/Header'
import SearchMovies from '../../Services/fetchSearchInput';

const Home = () => {

    const [log, setLog] = useState(false);

    const history = useHistory();

    useEffect(() => {
        console.log(1);
        store.subscribe(() => {
            setLog(store.getState().isLogged);
        })
        console.log(log, 1);
    },[])



    return(
        <>
            <Header />
            <div className="home">HOME</div>
        </>
    )
};

export default Home;