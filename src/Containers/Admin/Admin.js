import cookies from 'js-cookies';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DashboardHeader from '../../Components/dashboardHeader/DashboardHeader';
import fetchUserByEmail from '../../Services/fetchUserByEmail';
import getUserOrders from '../../Services/fetchUserOrders';
import getOrders from '../../Store/actions/actionGetUserOrders';
import getUser from '../../Store/actions/actionGetUserProfile';
import dateFormatter from '../../util/dateFormatter'
import './Admin.sass'

const Admin = () => {

    const [current, setCurrent] = useState(1);
    const [results, setResults] = useState({ from: 0, limit: 10 });
    const [usersList, setUsersList] = useState([]);
    const [orders, setOrders] = useState([])

    const user = useSelector(state => state.user);

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!cookies.getItem('auth')) history.push('/');
        dispatch(getUser());
    }, []);

    let msg;

    if (!user._id) msg = <h3>Error interno</h3>
    // if (usersList.length < 1) msg = <h3>No existen usuarios con ese email</h3>

    const findByEmail = async (event) => {
        event.preventDefault();

        let email = event.target.value;
        let fetchedUsers

        // if (!fetchedUsers) setUsersList([]);
        if (email !== '') {
            fetchedUsers = await fetchUserByEmail(email);
            setUsersList(fetchedUsers);
        }
        if (email === '') setUsersList([]);
    }

    const selectUser = async (id) => {

        const userOrders = await getUserOrders(id, results.from, results.limit);

        setOrders(userOrders.orders);
    }

    const nextPage = (e) => {
        e.preventDefault();
        if (current < usersList.pages) {
            setResults({
                from: results.from + 10,
                limit: 10
            });
            dispatch(getOrders(results.from + 10, results.limit));
            setCurrent(current + 1);

        }
    }

    const prevPage = (e) => {
        e.preventDefault();
        if (current > 1) {
            setResults({
                from: results.from - 10,
                limit: 10
            });
            dispatch(getOrders(results.from - 10, results.limit));
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
                <div className="adminDashboardInfo">
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
                        <div className="changeColumn">
                            {user && <div><button className="changeBtn">Cambiar</button></div>}
                            {user && <div><button className="changeBtn">Cambiar</button></div>}
                        </div>
                    </div>

                        <h4>Búsqueda de clientes</h4>
                        <form>
                            <div>
                                <input
                                    className="mainInput"
                                    type="email"
                                    name="email"
                                    placeholder="example@example.com"
                                    onInput={(e) => findByEmail(e)}
                                ></input>
                            </div>
                        </form>
                        
                    {orders.length === 0 && <div className="searchingClients">
                        <div className="usersList">
                            {usersList.users && usersList.users.map(element => <div className="user" key={usersList.users.indexOf(element)}>
                                <div>{element.email}</div>
                                <button className="selectUser" onClick={() => selectUser(element._id)}>Select</button>
                            </div>)}
                        </div>
                    </div>}

                    {orders.length >= 1 && <div className="searchingClients">
                        <h4>Historial del cliente</h4>
                        <div className="ordersList">
                            <div className="clientOrders">
                                <strong>Título</strong>
                                <div className="orderDates">
                                    <strong>Alquilada</strong>
                                    <strong>Devolución</strong>
                                </div>
                            </div>
                            {orders.map(order => <div className="clientOrders">
                                <div>{order.movie.title}</div>
                                <div className="orderDates">
                                    <div>{dateFormatter(order.date)}</div>
                                    <div>{dateFormatter(order.returnDate)}</div>
                                </div>
                            </div>)}
                        </div>
                    </div>}

                    {msg}

                    {!msg && <div className="pagination">
                        <i className="fas fa-angle-left" onClick={(e) => prevPage(e)}></i>
                        <div>page {current} of {usersList.pages ? usersList.pages : 1}</div>
                        <i className="fas fa-angle-right" onClick={(e) => nextPage(e)}></i>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Admin;