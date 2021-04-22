import './Login.sass'

const Login = () => {



    return (
        <>
            <form className="formContainer">
                <input name="email" type="email" />
                <input name="password" type="password" />
                <button name="submit" type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Login;


/*   si quieres ir tocando algo hazlo   */

/* ahora aquí habrá que poner el dispatch y mandar la acción al reducer de que está logueado

el usuario */