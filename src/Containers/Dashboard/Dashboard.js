import './Dashboard.sass';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
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
    const [current, setCurrent] = useState(1);
    const [results, setResults] = useState({ from: 0, to: 10});

    const history = useHistory();

    useEffect(() => {
        if (!cookies.getItem('auth')) history.push('/');
        getUser();
        getOrders(0, 10);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [results])

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
            let userOrders = await fetchUserOrders(skip, limit);
            const { orders } = userOrders
            const { pages } = userOrders

            if (userOrders.orders.length >= 1) {
                setOrderList(orders);
                setPages(pages);
            } else {
                setError(1);
            }

        } catch (e) {
            console.log(e);
            setError(0);
        }
    }

    let msg;

    if (error === 0) msg = <h3>Error interno</h3>
    if (error === 1) msg = <h3>No hay ordenes</h3>

    const getDate = (element) => {
        const date = new Date(element);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const dateFormatted = `${day}-${month}-${year}`;

        return dateFormatted
    }

    const signOut = (e) => {
        e.preventDefault();
        cookies.removeItem('auth');
        history.push('/');
    }

    const nextPage = (e) => {
        e.preventDefault();
        if (current < pages) {
            setResults({
                from: results.from + 10,
                to: results.to + 10
            });
            getOrders(results.from + 10, results.to + 10);
            setCurrent(current + 1);
        }

    }

    const prevPage = (e) => {
        e.preventDefault();
        if (current > 1) {
            setResults({
                from: results.from - 10,
                to: results.to - 10
            });
            getOrders(results.from - 10, results.to - 10);
            setCurrent(current - 1);
        }

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
                            <div className="signOut" onClick={(e) => signOut(e)}>Sign out</div>
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
                    
                    {!msg && <div className="pagination">
                        <i className="fas fa-angle-left" onClick={(e) => prevPage(e)}></i>
                        <div>page {current} of {pages}</div>
                        <i className="fas fa-angle-right" onClick={(e) => nextPage(e)}></i>
                    </div>}
                </div>
            </div>
        </>
    )

};

export default Dashboard;