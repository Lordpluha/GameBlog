import { NavLink } from 'react-router-dom'

import clsx from 'clsx'

import styles from './Navbar.module.scss'

/**
 * Navigation adaptive bar
 * @param toggleMenu - boolean value for change icon menu/close for burger menu
 */
const NavBar = ({ toggleMenu }: { toggleMenu: boolean }) => {
	return (
		<nav
			className={clsx(
				styles.headerNav,
				toggleMenu ? styles.toggleMenuOpen : styles.toggleMenuClose
			)}
		>
			<ul className={styles.headerNavUl}>
				<li>
					<NavLink to='/news'>Новости</NavLink>
				</li>
				<li>
					<NavLink to='/read'>Читать</NavLink>
				</li>
				<li>
					<NavLink to='/watch'>Смотреть</NavLink>
				</li>
				<li>
					<NavLink to='/blogs'>Блоги</NavLink>
				</li>
				<li>
					<NavLink to='/streams'>Стримы</NavLink>
				</li>
				<li>
					<NavLink to='/games'>Игры</NavLink>
				</li>
				<li>
					<NavLink to='/cheats'>Читы</NavLink>
				</li>
				<li>
					<NavLink to='/support'>Помощь</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
