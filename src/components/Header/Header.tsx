import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ProfileType} from "../../redux/ProfileReducer";

type HeaderPropsType = {
    isAuth: boolean
    login: string
    ava: string
    SetAuthUserData?: (id: number, login: string, email: string) => void
    SetUserProfile?: (profile: ProfileType) => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <span className={s.logo}>У Лехи</span>
            <div className={s.loginBlock}>
                {props.isAuth
                    ?
                    <div>
                        <img src={props.ava} alt="ava"/>
                        <span>{props.login}</span>
                    </div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>
                }
            </div>
        </header>
    )
}

