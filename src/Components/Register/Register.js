import './Register.sass';
import DatePicker from "react-datepicker";
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import fetchRegister from '../../services/fetchRegister';
import { withRouter } from 'react-router-dom'


const Register = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [error, setError] = useState(null);
    const [msg, setMsg] = useState(null);

    const focusEmail = React.createRef();

    useEffect(() => {
        focusEmail.current.focus();
    }, []);

    const fetch = async (event) => {

        event.preventDefault();

        const email = event.target[0].value;
        const userName = event.target[1].value;
        const inputPw = event.target[2].value;
        const inputPwConfirm = event.target[3].value;
        const born = startDate;

        if (inputPw === inputPwConfirm) {
            try {

                const res = await fetchRegister(email, userName, inputPw, born)

                console.log(res)

                if (res.status === 201) {
                    setError(1)
                }

            } catch (e) {
                console.log(e)
                setError(0)
            }
        } else {
            setMsg("Passwords don't match");
        }

        switch (error) {
            case 0:
                setMsg("Internal server error");
                break;
            case 1:
                setMsg("Welcome to KIAN, you're now beign redirected");
                // props.history.push(/login);
                break;
            default:
                setMsg(null)
        }

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
                {msg && <div>{msg}</div>}
            </div>
        </>
    )
}

export default withRouter(Register);