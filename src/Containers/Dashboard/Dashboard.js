import './Dashboard.sass';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import store from '../../Store/store.js';
import fetchUserData from '../../Services/fetchUserData';
import fetchUserOrders from '../../Services/fetchUserOrders';
import DashboardHeader from '../../Components/dashboardHeader/DashboardHeader';
import OrderCard from '../../Components/orderCard/OrderCard';
import cookies from 'js-cookies';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const [orderList, setOrderList] = useState(null);
    const [pages, setPages] = useState(null);
    const [error, setError] = useState(null);
    const [date, setDate] = useState(null);
    const [msg, setMsg] = useState(null);

    const history = useHistory();

    useEffect(() => {
        if (!cookies.getItem('auth')) history.push('/');
        getUser();
        getOrders(0, 10);
    }, []);

    const getUser = async () => {

        try {
            const user = await fetchUserData();
            const userInfo = await user.json();

            if (!user) return setError(0);
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

    if (error === 0) setMsg(<h3>Error interno</h3>)
    if (error === 1) setMsg(<h3>No hay ordenes</h3>)

    const getDate = (element) => {
        const date = new Date (element);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const dateFormatted = `${day}-${month}-${year}`;

        return dateFormatted
    }

    const signOut = () => {
        cookies.removeItem('auth');
        history.push('/');
    }


    return (
        <>
            <DashboardHeader />
            <div className="dashboard">
                <div className="dashboardInfo">
                    <h3 className="dashboardTitle">Dashboard</h3>
                    <div className="userInfo">
                        <div className="iconsColumn">
                            <i className="far fa-address-card"></i>
                            <i className="far fa-envelope"></i>
                            <i className="far fa-calendar-alt"></i>
                            <i className="fas fa-door-open"></i>
                        </div>
                        <div className="infoColumn">
                            {user && <div>{user.userName}</div>}
                            {user && <div>{user.email}</div>}
                            {user && <div>{date}</div>}
                            <div className="signOut" /*onClick={signOut()}*/>Sign out</div>
                        </div>
                    </div>
                    <h4>Historial de pedidos</h4>

                    {orderList && orderList.map((element) =>
                        <OrderCard key={orderList.indexOf(element)}
                            title={element.movie.title} date={getDate(element.date)}
                            returnDate={getDate(element.returnDate)}
                            poster={element.movie.poster}
                        />)}

                    {msg}
                    <div className="userOrders"></div>
                </div>
            </div>
        </>
    )

};

export default Dashboard;