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
    const [pwColor, setPwColor] = useState('mainInput');
    const [pwInput, setPwInput] = useState(null);
    const [pwConfirmColor, setPwConfirmColor] = useState('mainInput');
    const [emailColor, setEmailColor] = useState('mainInput');
    const [usernameColor, setUsernameColor] = useState('mainInput');

    const focusEmail = React.createRef();

    useEffect(() => {
        focusEmail.current.focus();
    }, []);

    const checkPw = (pw) => {
        if (pw.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#<>$+@$!%*?&])[A-Za-z\d[#<>$+@$!%*?&]{8,}$/gm)) {
            setPwColor('okPw');
            setError(null);
            setPwInput(pw);
        } else {
            setPwColor('badPw');
            setError(6)
        }
    }

    const checkPwConfirm = (pw) => {
        if (pwInput === pw) {
            setPwConfirmColor('okPw');
            setError(null);
        } else {
            setPwConfirmColor('badPw');
            setError(2);
        }
    }

    const fetch = async (event) => {

        event.preventDefault();

        const email = event.target[0].value;
        const userName = event.target[1].value;
        const inputPw = event.target[2].value;
        const inputPwConfirm = event.target[3].value;
        const born = startDate;
        setUsernameColor('okPw');
        setEmailColor('okPw')

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
                        setEmailColor('badPw');
                    } else if (error.code === 4) {
                        setError(error.code);
                        setUsernameColor('badPw');
                    }
                }

            } catch (e) {
                console.log(e)
                setError(0)
            }
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
            backToLogin({ yesOrNo: false, msg: true });
            break;
        case 6:
            msg = <h6 className="badInput">Contraseña muy debil</h6>
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
                            className={emailColor}
                            type="email"
                            name="email"
                            placeholder="example@example.com"
                            required
                            ref={focusEmail}
                        ></input>
                    </div>
                    {error === 3 && <div className="badInput">Este email ya está en uso</div>}
                    <div>
                        <input
                            className={usernameColor}
                            type="text"
                            name="userName"
                            placeholder="user"
                            required
                        ></input>
                    </div>
                    {error === 4 && <div className="badInput">Este usuario ya está en uso</div>}
                    <div>
                        <input
                            className={pwColor}
                            type="password"
                            name="password"
                            placeholder="password"
                            required
                            onInput={(e) => checkPw(e.target.value)}
                        ></input>
                    </div>
                    {msg}
                    <div>
                        <input
                            className={pwConfirmColor}
                            type="password"
                            name="password"
                            placeholder="confirm password"
                            required
                            onInput={(e) => checkPwConfirm(e.target.value)}
                        ></input>
                    </div>
                    {error === 2 && <div className="badInput">Las contraseñas no coinciden</div>}
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