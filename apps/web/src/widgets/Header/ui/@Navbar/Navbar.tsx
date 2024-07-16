import Link from 'next/link'
import clsx from 'clsx'
import styles from './Navbar.module.scss'

/**
 * Navigation adaptive bar
 * @param toggleMenu - boolean value for change icon menu/close for burger menu
 */
function NavBar({ toggleMenu }: { toggleMenu: boolean }) {
  return (
    <nav
      className={clsx(
        styles.headerNav,
        toggleMenu ? styles.toggleMenuOpen : styles.toggleMenuClose
      )}
    >
      <ul className={styles.headerNavUl}>
        <li>
          <Link href='/news'>Новости</Link>
        </li>
        <li>
          <Link href='/read'>Читать</Link>
        </li>
        <li>
          <Link href='/watch'>Смотреть</Link>
        </li>
        <li>
          <Link href='/blogs'>Блоги</Link>
        </li>
        <li>
          <Link href='/streams'>Стримы</Link>
        </li>
        <li>
          <Link href='/games'>Игры</Link>
        </li>
        <li>
          <Link href='/cheats'>Читы</Link>
        </li>
        <li>
          <Link href='/support'>Помощь</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
