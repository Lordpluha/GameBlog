import { useState } from 'react'

import { Menu, X } from 'lucide-react'

import { type IComment } from '@model/interfaces'

import { UserAuthBtn } from '@features/AuthUser'
import { CommentsBtn } from '@features/ToggleComments'
import { SearchBtn } from '@features/ToggleSearch'
import { ThemeBtn } from '@features/ToggleTheme'

import { Logo } from '@shared/ui'

import NavBar from './@Navbar/Navbar'
import styles from './Header.module.scss'

/**
 * Header component
 * @author @kiberchainik
 */
const Header = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false)
	const [newCommentsData, _] = useState<IComment[]>([])

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
					<CommentsBtn newComments={newCommentsData} />
					<UserAuthBtn />
					<button
						className='md:hidden'
						onClick={() => {
							setToggleMenu(!toggleMenu)
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
