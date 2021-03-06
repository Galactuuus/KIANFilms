import cookies from 'js-cookies';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import DashboardHeader from '../../Components/dashboardHeader/DashboardHeader';
import fetchUserByEmail from '../../Services/fetchUserByEmail';
import getUserOrders from '../../Services/fetchUserOrders';
import getUser from '../../Store/actions/actionGetUserProfile';
import dateFormatter from '../../util/dateFormatter'
import './Admin.sass'

const Admin = () => {

    const [usersList, setUsersList] = useState({});
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    const user = useSelector(state => state.user);

    let role
    role = useSelector(state => state.loginState.role);
    role = useSelector(state => state.user.role);

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
        if (role !== 'admin') history.push('/home');
    }, []);

    useEffect(() => {
        if (!user._id) setError(0);
    }, [user]);

    const findByEmail = async (event) => {
        event.preventDefault();
        if (user._id && error !== 0) {
            setOrders([]);

            let inputEmail = event.target.value;
            let fetchedUsers;

            if (inputEmail !== '') {
                fetchedUsers = await fetchUserByEmail(inputEmail)
                setUsersList(fetchedUsers);
            }

            if (inputEmail !== '' && fetchedUsers.users.length >= 1) setError(3);
            if (inputEmail !== '' && fetchedUsers.users.length < 1) setError(1);
            if (inputEmail === '') {
                setUsersList({});
                setError(null);
            }
        }
    }

    const selectUser = async (id) => {

        const userOrders = await getUserOrders(id);

        if (userOrders.orders.length <= 0) setError(2);

        setOrders(userOrders.orders);
    }

    const signOut = (e) => {
        e.preventDefault();
        cookies.removeItem('auth');
        history.push('/');
    }

    let msg;

    switch (error) {
        case 0:
            msg = <h3>Error interno</h3>
            break;
        case 1:
            msg = <h3>No hay usuarios con este email</h3>
            break;
        case 2:
            msg = <h3>El cliente seleccionado no tiene pedidos</h3>
            break;
        default:
            msg = null
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

                    <h4>B??squeda de clientes</h4>
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
                                <div className="emailsList">{element.email}</div>
                                <button className="selectUser" onClick={() => selectUser(element._id)}>Select</button>
                            </div>)}
                        </div>
                    </div>}

                    {orders.length >= 1 && <div className="searchingClients">
                        <h4>Historial del cliente</h4>
                        <div className="ordersList">
                            <div className="clientOrders">
                                <strong>T??tulo</strong>
                                <div className="orderDates">
                                    <strong>Alquilada</strong>
                                    <strong>Devoluci??n</strong>
                                </div>
                            </div>
                            {orders.map(order => <div className="clientOrders" key={orders.indexOf(order)}>
                                <div>{order.movie.title}</div>
                                <div className="orderDates">
                                    <div>{dateFormatter(order.date)}</div>
                                    <div>{dateFormatter(order.returnDate)}</div>
                                </div>
                            </div>)}
                        </div>
                    </div>}

                    {msg}

                </div>
            </div>
        </>
    )
}

export default Admin;