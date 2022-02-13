import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from './Navbar.module.css'
import {faCog, faComment, faMusic, faNewspaper, faUser} from "@fortawesome/free-solid-svg-icons";


export const Navbar = () => {
    return (
        <nav className={s.nav}>

            <div className={`${s.item} ${s.active}`}>
                <FontAwesomeIcon icon={faUser}/>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.item}>
                <FontAwesomeIcon icon={faComment}/>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={s.item}>
                <FontAwesomeIcon icon={faNewspaper}/>
                <a href="/news">News</a>
            </div>
            <div className={s.item}>
                <FontAwesomeIcon icon={faMusic}/>
                <a href="/music">Music</a>
            </div>
            <div className={s.item}>
                <FontAwesomeIcon icon={faCog}/>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}
