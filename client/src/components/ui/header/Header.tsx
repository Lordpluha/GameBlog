import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './header.module.scss'
import ThemeModeBtn from './themeModeBtn/ThemeModeBtn'
import SearchFormBtn from './searchFormBtn/SearchFormBtn'
import CommentsBtn from './commentsBtn/CommentsBtn'
import UserAuthBtn from './userAuthBtn/UserAuthBtn'

const Header = () => {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false)

  return (
    <header className={styles.header}>
        <div className={styles.headerLayout}>
            <Link className={styles.headerLogo} to="/">
                <h3>GameBlog</h3>
            </Link>
            <nav className={`${styles.headerNav} ${toggleMenu ? styles.toggleMenuOpen : styles.toggleMenuClose}`}>
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
            <div className={styles.headerRightButtonsBlock}>
                <SearchFormBtn />
                <div className="hidden md:block">
                    <ThemeModeBtn />
                </div>
                <CommentsBtn />
                <UserAuthBtn />
                <button className="md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
                    {!toggleMenu && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                        <line x1="4" x2="20" y1="12" y2="12"/>
                        <line x1="4" x2="20" y1="6" y2="6"/>
                        <line x1="4" x2="20" y1="18" y2="18"/>
                    </svg>}
                    {toggleMenu && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                        <path d="M18 6 6 18"/>
                        <path d="m6 6 12 12"/>
                    </svg>}
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header