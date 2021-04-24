import './Register.sass';
import DatePicker from "react-datepicker";
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import fetchRegister from '../../Services/fetchRegister';
import { withRouter } from 'react-router-dom';
import store from '../../Store/store'


const Register = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [error, setError] = useState(null);

    const focusEmail = React.createRef();

    useEffect(() => {
        focusEmail.current.focus();
    });


    const fetch = async (event) => {

        event.preventDefault();

        const email = event.target[0].value;
        const userName = event.target[1].value;
        const inputPw = event.target[2].value;
        const inputPwConfirm = event.target[3].value;
        const born = startDate;

        if (!email || !userName || !born || !inputPw || !inputPwConfirm) setError(5);

        if (inputPw === inputPwConfirm) {

            try {

                const res = await fetchRegister(email, userName, inputPw, born)

                if (res.status === 201) {
                    setError(1)
                } else {
                    const error = await res.json();
                    if (error.code === 3) {
                        setError(error.code);
                    } else if (error.code === 4) {
                        setError(error.code);
                    }
                }

            } catch (e) {
                console.log(e)
                setError(0)
            }
        } else {
            setError(2);
        }
    }

    const backToLogin = (boolean) => {
        store.dispatch(
            {
                type: 'BACK_TO_LOGIN',
                payload: boolean
            }
        );
    }

    let msg = null;

    switch (error) {
        case 0:
            msg = <div>Internal server error</div>
            break;
        case 1:
            msg = <div>Welcome to KIAN, you're now being redirected</div>
            // history.push('/');
            backToLogin(false);
            break;
        default:
            msg = null
    }

    return (
        <>
            <div className="registerContainer">
                <form className="registerForm" onSubmit={(e) => fetch(e)}>
                    <h1 className="registerTitle">Registro</h1>
                    {error === 0 && <div>Error Interno</div>}
                    {error === 5 && <div>Todos los campos deben ser rellenados</div>}
                    <div>
                        <input
                            className="mainInput"
                            type="email"
                            name="email"
                            placeholder="example@example.com"
                            required
                            ref={focusEmail}
                        ></input>
                    </div>
                    {error === 3 && <div>Este email ya está en uso</div>}
                    <div>
                        <input
                            className="mainInput"
                            type="text"
                            name="userName"
                            placeholder="user"
                            required
                        ></input>
                    </div>
                    {error === 4 && <div>Este usuario ya está en uso</div>}
                    <div>
                        <input
                            className="mainInput"
                            type="password"
                            name="password"
                            placeholder="password"
                            required
                        ></input>
                    </div>
                    <div>
                        <input
                            className="mainInput"
                            type="password"
                            name="password"
                            placeholder="confirm password"
                            required
                        ></input>
                    </div>
                    {error === 2 && <div>Las contraseñas no coinciden</div>}
                    <div>
                        <DatePicker className="mainInput" selected={startDate}
                            onChange={date => setStartDate(date)}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            dateFormat="MM/dd/yyyy" />
                    </div>
                    <button className="mainBtn" type="submit">Registrarse</button>
            </form>
            </div>
        </>
    )
}

export default withRouter(Register);