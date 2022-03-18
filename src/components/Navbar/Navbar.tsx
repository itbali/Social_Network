import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from './Navbar.module.css'
import {faCog, faComment, faMusic, faNewspaper, faUser} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={s.nav}>


            <NavLink to="/profile" className={navData => navData.isActive ? s.active : ''}>
                <div className={s.item}>
                    <FontAwesomeIcon icon={faUser}/>
                    <span>Профиль</span>
                </div>
            </NavLink>

            <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : ''}>
                <div className={s.item}>
                    <FontAwesomeIcon icon={faComment}/>
                    <span>Разговоры</span>
                </div>
            </NavLink>

            <NavLink to="/news" className={navData => navData.isActive ? s.active : ''}>
                <div className={s.item}>
                    <FontAwesomeIcon icon={faNewspaper}/>
                    <span>Новости</span>
                </div>
            </NavLink>

            <NavLink to="/music" className={navData => navData.isActive ? s.active : ''}>
                <div className={s.item}>
                    <FontAwesomeIcon icon={faMusic}/>
                    <span>Музыка</span>
                </div>
            </NavLink>

            <NavLink to="/settings" className={navData => navData.isActive ? s.active : ''}>
                <div className={s.item}>
                    <FontAwesomeIcon icon={faCog}/>
                    <span>Настройки</span>
                </div>
            </NavLink>

        </nav>
    )
}
