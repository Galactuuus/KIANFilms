import './Dashboard.sass';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import store from '../../Store/store.js';
import fetchUserData from '../../Services/fetchUserData';
import fetchUserOrders from '../../Services/fetchUserOrders';
import DashboardHeader from '../../Components/dashboardHeader/DashboardHeader';
import OrderCard from '../../Components/orderCard/OrderCard';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const [orderList, setOrderList] = useState(null);
    const [pages, setPages] = useState(null);
    const [error, setError] = useState(null);
    const [date, setDate] = useState(null);

    const history = useHistory();

    useEffect(() => {
        if (store.getState().isLogged === false) history.push('/');
        getUser();
        getOrders(0, 10);
    }, []);

    const getUser = async () => {

        try {
            const user = await fetchUserData();
            const userInfo = await user.json();

            if (userInfo) setUser(userInfo);

            const birthday = new Date(userInfo.born);
            const day = birthday.getDate();
            const month = birthday.getMonth() + 1;
            const year = birthday.getFullYear();

            setDate(`${month}-${day}-${year}`);

        } catch (e) {
            console.log(e);
            setError(0);
        }
    }

    const getOrders = async (skip, limit) => {

        try {
            const orderHistory = await fetchUserOrders(skip, limit);
            const userOrders = await orderHistory.json();

            const { orders } = userOrders
            const { pages } = userOrders

            if (userOrders) setOrderList(orders);
            if (!userOrders) setError(1);

        } catch (e) {
            console.log(e);
            setError(0);
        }
    }

    let msg = null;
    if (error === 0) msg = <h3>Error interno</h3>
    if (error === 1) msg = <h3>No hay ordenes</h3>


    return (
        <>
            <DashboardHeader />
            <div className="dashboard">
                <div className="dashboardInfo">
                    <h3 className="dashboardTitle">Dashboard</h3>
                    <div className="userInfo">
                        <div className="iconsColumn">
                            <i class="far fa-address-card"></i>
                            <i class="far fa-envelope"></i>
                            <i class="far fa-calendar-alt"></i>
                        </div>
                        <div className="infoColumn">
                            {user && <div>{user.userName}</div>}
                            {user && <div>{user.email}</div>}
                            {user && <div>{date}</div>}
                        </div>
                    </div>
                    <h4>Historial de pedidos</h4>

                    {orderList && orderList.map((element) => <OrderCard key={element}
                        title={element.movie.title} date={
                            new Date(element.date).getDate() + '-' +
                            new Date(element.date).getMonth() + 1 + '-' +
                            new Date(element.date).getFullYear()
                        }
                        returnDate={
                            new Date(element.date).getDate() + '-' +
                            new Date(element.date).getMonth() + 1 + '-' +
                            new Date(element.date).getFullYear()
                        }
                        poster={element.movie.poster}
                    />)}

                    {msg && { msg }}
                    <div className="userOrders"></div>
                </div>
            </div>
        </>
    )

};

export default Dashboard;