import { NavLink } from 'react-router-dom'
import styles from './navBar.module.scss'
import clsx from 'clsx'

/**
 * Navigation adaptive bar
 * @param toggleMenu - boolean value for change icon menu/close for burger menu
 * @param toggleMenuOpen - scss stiles of menu when menu is open
 * @param toggleMenuClose - scss stiles of menu when menu is close
 */
const NavBar = ({toggleMenu}:{toggleMenu:boolean}) => {  
  return (
    <nav className={
        clsx(styles.headerNav, toggleMenu ? styles.toggleMenuOpen : styles.toggleMenuClose)
    }>
        <ul className={styles.headerNavUl}>
            <li><NavLink to="/news">Новости</NavLink></li>
            <li><NavLink to="/read">Читать</NavLink></li>
            <li><NavLink to="/watch">Смотреть</NavLink></li>
            <li><NavLink to="/blogs">Блоги</NavLink></li>
            <li><NavLink to="/streams">Стримы</NavLink></li>
            <li><NavLink to="/games">Игры</NavLink></li>
            <li><NavLink to="/cheats">Читы</NavLink></li>
            <li><NavLink to="/support">Помощь</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar