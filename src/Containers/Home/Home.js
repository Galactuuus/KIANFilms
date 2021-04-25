import './Home.sass';
import store from '../../Store/store.js';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

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


    console.log(log, 2);

    return(
        <>
            <div>HOME</div>
        </>
    )
};

export default Home;