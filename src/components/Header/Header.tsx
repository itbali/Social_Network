import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ProfileType} from "../../redux/profileReducer";
import {useDispatch} from "react-redux";
import {logout} from "../../redux/authReducer";

type HeaderPropsType = {
    isAuth: boolean
    login: string
    ava: string
    SetAuthUserData?: (id: number, login: string, email: string) => void
    SetUserProfile?: (profile: ProfileType) => void
}

export const Header = (props: HeaderPropsType) => {
    let dispatch = useDispatch()

    let logoutClickHandler = () => {
        dispatch(logout())
    }

    return (
        <header className={s.header}>
            <span className={s.logo}>У Лехи</span>
            <div className={s.loginBlock}>
                {props.isAuth
                    ?
                    <div>
                        <img src={props.ava} alt="ava"/>
                        <span>{props.login}</span>
                        <button onClick={logoutClickHandler}>LOGOUT</button>
                    </div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>
                }
            </div>
        </header>
    )
}

