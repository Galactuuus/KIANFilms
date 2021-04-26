import './Dashboard.sass';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import store from '../../Store/store.js';
import Header from '../../Components/header/Header';
import fetchUserData from '../../Services/fetchUserData';
import fetchUserOrders from '../../Services/fetchUserOrders';

const Dashboard = () => {

    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const history = useHistory();

    useEffect(async () => {
        if (store.getState().isLogged === false) history.push('/');
        getUserData()
    }, [])

    const getUserData = async () => {

        try {
            const user = await fetchUserData();
            const orders = await fetchUserOrders();

            const userInfo = await user.json();
            const userOrders = await orders.json();

            const userData = { userInfo, userOrders };

            setUser(userData)

        } catch(e) {
            console.log(e);
            setError(0);
        }
    }

    return (
        <>
            <Header />
            <div>Dashboard</div>
        </>
    )

};

export default Dashboard;