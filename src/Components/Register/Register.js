import './Register.sass';
import DatePicker from "react-datepicker";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import fetchRegister from '../../services/fetchRegister';
import { withRouter } from 'react-router-dom';
import store from '../../Store/store'


const Register = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [error, setError] = useState(null);

    const focusEmail = React.createRef();
    const history = useHistory();

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
        case 2:
            msg = <div>Passwords don't match</div>
            break;
        case 3:
            msg = <div>Email already exist</div>
            break;
        case 4:
            msg = <div>User name already exist</div>
            break;
        case 5:
            msg = <div>All fields are required</div>
            break;
        default:
            msg = null
    }

    return (
        <>
            <h1>Registro</h1>
            <div className="register">
                <form className="registerForm" onSubmit={(e) => fetch(e)}>
                    <label htmlFor="email"></label>
                    <input
                        className="email"
                        type="email"
                        name="email"
                        placeholder="example@example.com"
                        required
                        ref={focusEmail}
                    ></input>
                    <label htmlFor="userName"></label>
                    <input
                        className=""
                        type="text"
                        name="userName"
                        placeholder="user"
                        required
                    ></input>
                    <label htmlFor="password"></label>
                    <input
                        className="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                    ></input>
                    <label htmlFor="confirmPassword"></label>
                    <input
                        className=""
                        type="password"
                        name="password"
                        placeholder="confirm password"
                        required
                    ></input>
                    <label htmlFor="date"></label>
                    <DatePicker selected={startDate}
                        onChange={date => setStartDate(date)}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        dateFormat="MM/dd/yyyy" />
                    <button className="" type="submit">Submit</button>
                </form>
                {msg}
            </div>
        </>
    )
}

export default withRouter(Register);