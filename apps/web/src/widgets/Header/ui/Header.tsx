'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@gameblog/ui'
import { UserAuthBtn } from '@features/Auth'
import { CommentsBtn } from '@features/ToggleComments'
import { SearchBtn } from '@features/ToggleSearch'
import { ThemeBtn } from '@features/ToggleTheme'
import NavBar from './@Navbar/Navbar'
import styles from './Header.module.scss'

/**
 * Header component
 * @author @kiberchainik
 */
function Header() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <div className={styles.headerLayout}>
        <Logo />
        <NavBar toggleMenu={toggleMenu} />
        <div className={styles.headerRightButtonsBlock}>
          <SearchBtn />
          <div className='hidden md:block'>
            <ThemeBtn />
          </div>
          <CommentsBtn />
          <UserAuthBtn />
          {/* Burger btn */}
          <button
            className={styles.headerBurger}
            onClick={() => {
              setToggleMenu(prev => !prev)
            }}
          >
            {toggleMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
