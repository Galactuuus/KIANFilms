import './Dashboard.sass';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DashboardHeader from '../../Components/dashboardHeader/DashboardHeader';
import OrderCard from '../../Components/orderCard/OrderCard';
import cookies from 'js-cookies';
import { useDispatch, useSelector } from 'react-redux';
import getUser from '../../Store/actions/actionGetUserProfile';
import getOrders from '../../Store/actions/actionGetUserOrders';
import dateFormatter from '../../util/dateFormatter';

const Dashboard = () => {

    const [current, setCurrent] = useState(1);
    const [results, setResults] = useState({ from: 0, to: 10 });

    const history = useHistory();

    useEffect(() => {
        if (!cookies.getItem('auth')) history.push('/');
        dispatch(getUser());
        dispatch(getOrders(0, 10));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [results])

    const user = useSelector(state => state.user);
    const orders = useSelector(state => state.orders);

    const dispatch = useDispatch();

    let msg;

    if (!user._id) msg = <h3>Error interno</h3>
    if (!orders.orders) msg = <h3>No hay ordenes</h3>

    const nextPage = (e) => {
        e.preventDefault();
        if (current < orders.pages) {
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

    const signOut = (e) => {
        e.preventDefault();
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
                            {user && <div>{user.date}</div>}
                            <div className="signOut" onClick={(e) => signOut(e)}>Sign out</div>
                        </div>
                    </div>
                    <h4>Historial de pedidos</h4>

                    {orders.orders && orders.orders.map((element) =>
                        <OrderCard key={orders.orders.indexOf(element)}
                            title={element.movie.title} date={dateFormatter(element.date)}
                            returnDate={dateFormatter(element.returnDate)}
                            poster={element.movie.poster}
                        />)}

                    {msg}

                    {!msg && <div className="pagination">
                        <i className="fas fa-angle-left" onClick={(e) => prevPage(e)}></i>
                        <div>page {current} of {orders.pages}</div>
                        <i className="fas fa-angle-right" onClick={(e) => nextPage(e)}></i>
                    </div>}
                </div>
            </div>
        </>
    )

};

export default Dashboard;