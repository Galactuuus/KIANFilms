import './Register.sass';
import DatePicker from "react-datepicker";
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import fetchRegister from '../../services/fetchRegister';
import { withRouter } from 'react-router-dom'
import Msg from '../Msg/Msg';


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
                    const error = await res.json()
                    console.log(error)
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

    let msg = null;

    switch (error) {
        case 0:
            msg = <Msg>Internal server error</Msg>
            break;
        case 1:
            msg = <Msg>Welcome to KIAN, you're now being redirected</Msg>
            // props.history.push(/login);
            break;
        case 2:
            msg = <Msg>Passwords don't match</Msg>
            break;
        case 3:
            msg = <Msg>Email already exist</Msg>
            break;
        case 4:
            msg = <Msg>User name already exist</Msg>
            break;
        case 5:
            msg = <Msg>All fields are required</Msg>
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
                        className=""
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
                        className=""
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