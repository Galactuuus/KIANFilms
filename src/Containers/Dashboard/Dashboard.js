import './Dashboard.sass';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import store from '../../Store/store.js';
import fetchUserData from '../../Services/fetchUserData';
import fetchUserOrders from '../../Services/fetchUserOrders';
import DashboardHeader from '../../Components/dashboardHeader/DashboardHeader';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState(null);
    const [error, setError] = useState(null);

    const history = useHistory();

    useEffect(async () => {
        if (store.getState().isLogged === false) history.push('/');
        getUser();
        getOrders(0, 10);
    }, []);

    const getUser = async () => {

        try {
            const user = await fetchUserData();
            const userInfo = await user.json();
            
            setUser(userInfo);

            console.log(userInfo)
            
        } catch (e) {
            console.log(e);
            setError(0);
        }
    }
    
    const getOrders = async (skip, limit) => {
        
        try {
            const orders = await fetchUserOrders(skip, limit);
            const userOrders = await orders.json();

            setOrders(userOrders);

            console.log(userOrders)

        } catch(e) {
            console.log(e);
            setError(0);
        }
    }



    return (
        <>
            <DashboardHeader />
            <div className="dashboard">
                DASHBOARD
            </div>
        </>
    )

};

export default Dashboard;