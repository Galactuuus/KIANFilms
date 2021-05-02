import { useEffect } from "react";
import { useHistory } from "react-router"
import Header from "../../Components/header/Header"


const ChangeView = (props) => {

    const history = useHistory();
    const redirect = props.history.location;


    useEffect(() => {
        if(!redirect.email && !redirect.useName && !redirect.paswword) {
            history.push('/')
        }
    }, [])

    return (
        <>
            <Header/>
            <div>
                {redirect.email && <div>email</div>}
                {redirect.userName && <div>username</div>}
                {redirect.paswword && <div>password</div>}
            </div>
        </>
    )
}

export default ChangeView;