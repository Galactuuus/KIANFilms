import './Login.sass'
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import fetchLogin from '../../Services/fetchLogin.js';
import cookies from 'js-cookies';
import store from '../../Store/store';


const Login = () => {

    const [error, setError] = useState(0);
    const [isLogged, setIsLogged ] = useState(); 

    const focusEmail = React.createRef();
    const history = useHistory();

    useEffect(() => {
        focusEmail.current.focus();
        store.subscribe(() => {
            setIsLogged(store.getState().isLogged);
        })
    }, []);

    const Validation = async (e) => {
        e.preventDefault();

        setError(0)
        const email = e.target[0].value;
        const password = e.target[1].value;

        let response = await fetchLogin(email, password);
        if(response.token){
            cookies.setItem('auth', response.token);
            store.dispatch({
                type: 'SET_LOG',
                login: true
            });
            history.push('/home');
        }else{
            if(response.message === 'The email is incorrect') setError(1);
            else if(response.message === 'The password is incorrect') setError(2);
        }

    }



    return (
        <>
            <div className="logContainer">
                <form className="logForm" onSubmit={e => Validation(e)}>                    
                    <h1 className="logTitle">Identifícate</h1>
                    <div>
                        <input className="mainInput" name="email" type="email" placeholder="Introduce el email" required ref={focusEmail}/>
                    </div>
                    {error === 1 && 
                        <div>
                            <span className="errorLogForm">Email incorrecto</span>
                        </div>
                    }
                    <div>
                        <input className="mainInput" name="password" type="password" placeholder="Introduce la contraseña" required />
                    </div>
                    {error === 2 &&
                        <div> 
                            <span className="errorLogForm">Contraseña incorrecta</span>
                        </div>
                    }
                    <button className="mainBtn" name="submit" type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}

export default Login;