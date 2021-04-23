import './Register.sass';
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Register = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [password, setPassword] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState(null);

    const fetch = (event) => {

        event.preventDefaul();

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
                    ></input>
                    <label htmlFor="userName"></label>
                    <input
                        className=""
                        type="text"
                        name="userName"
                        placeholder="user"
                        required
                    ></input>
                    <input
                        className=""
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                    ></input>
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
                        dropdownMode="select" />
                    <button className="" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Register;