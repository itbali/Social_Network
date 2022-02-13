import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from './Navbar.module.css'
import {faCog, faComment, faMusic, faNewspaper, faUser} from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div className={`${s.item} ${s.active}`}>
                <FontAwesomeIcon icon={faUser}/>
                <a href="/profile">Профиль</a>
            </div>
            <div className={s.item}>
                <FontAwesomeIcon icon={faComment}/>
                <a href="/dialogs">Разговоры</a>
            </div>
            <div className={s.item}>
                <FontAwesomeIcon icon={faNewspaper}/>
                <a href="/news">Новости</a>
            </div>
            <div className={s.item}>
                <FontAwesomeIcon icon={faMusic}/>
                <a href="/music">Музыка</a>
            </div>
            <div className={s.item}>
                <FontAwesomeIcon icon={faCog}/>
                <a href="/settings">Настройки</a>
            </div>
        </nav>
    )
}
