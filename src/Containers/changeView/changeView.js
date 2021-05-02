import { useEffect, useState } from "react";
import { useHistory } from "react-router"
import Header from "../../Components/header/Header"
import changeEmail from "../../Services/changeEmail";
import changePass from "../../Services/changePass";
import changeUserName from "../../Services/changeUserName";
import './changeView.sass'


const ChangeView = (props) => {

    const history = useHistory();
    const redirect = props.history.location;

    const [sended, setSended] = useState(false);

    let email = "";
    let oldPassword = "";
    let newPassword = "";
    let username = "";

    useEffect(() => {
        if (!redirect.email && !redirect.userName && !redirect.password) {
            history.push('/')
        }
    }, [])



    return (
        <>
            <Header />
            <div className="changeView">
                {!sended &&
                    <>
                        {redirect.email &&
                            <div className="emailChange">
                                <form className="emailChangeForm" onSubmit={() => { setSended(true); changeEmail(email); }}>
                                    <h1>Cambia el Email</h1>
                                    <div>
                                        <input onChange={(e) => email = e.target.value} className="changeInput" name="email" type="email" placeholder="Introduce el nuevo email" required />
                                    </div>
                                    <div>
                                        <input className="changeInput" name="email" type="email" placeholder="Introduce el email de nuevo" required />
                                    </div>
                                    <button className="mainBtn" name="submit" type="submit">Enviar</button>
                                </form>
                            </div>
                        }
                        {redirect.userName &&
                            <div className="emailChange">
                                <form className="emailChangeForm" onSubmit={() => { setSended(true); changeUserName(username); }}>
                                    <h1>Cambia el Usuario</h1>
                                    <div>
                                        <input onChange={(e) => username = e.target.value} className="changeInput" name="username" type="text" placeholder="Introduce el nuevo usuario" required />
                                    </div>
                                    <button className="mainBtn" name="submit" type="submit">Enviar</button>
                                </form>
                            </div>
                        }
                        {redirect.password &&
                            <div className="emailChange">
                                <form className="emailChangeForm" onSubmit={() => { setSended(true); changePass(oldPassword, newPassword); }}>
                                    <h1>Cambia la Contraseña</h1>
                                    <div>
                                        <input onChange={(e) => oldPassword = e.target.value} className="changeInput" name="oldPassword" type="password" placeholder="Introduce tu contraseña" required />
                                    </div>
                                    <div>
                                        <input className="changeInput" name="newPassword" type="password" placeholder="Introduce tu nueva contraseña" required />
                                    </div>
                                    <div>
                                        <input onChange={(e) => newPassword = e.target.value} className="changeInput" name="newPassword" type="password" placeholder="Introduce tu de nuevo la contraseña" required />
                                    </div>
                                    <button className="mainBtn" name="submit" type="submit">Enviar</button>
                                </form>
                            </div>
                        }
                    </>}
                {sended &&
                    <div className="changed">
                        <div>Se ha realizado el cambio correctamente!</div>
                        <button className="mainBtn" onClick={() => history.push('/dashboard')}>Dashboard</button>
                    </div>}
            </div>
        </>
    )
}

export default ChangeView;