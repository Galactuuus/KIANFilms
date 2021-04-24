import './Home.sass';
import store from '../../Store/store.js';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

const Home = () => {

    const [log, setLog] = useState(false);

    const history = useHistory();

    useEffect(() => {
        store.subscribe(() => {
            setLog(store.getState().isLogged)
            if(log === false) history.push('/');
        })
    },[])

    return(
        <>
            <div>HOME</div>
        </>
    )
};

export default Home;