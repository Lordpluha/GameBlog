import { useState } from 'react'

import { Menu, X } from 'lucide-react'

import SearchFormBtn from '@features/ui/buttons/SearchBtn/SearchBtn'
import UserAuthBtn from '@features/ui/buttons/UserAuthBtn/UserAuthBtn'

import IComment from '@entities/model/interfaces/Comment.interface'
import CommentsBtn from '@entities/ui/buttons/CommentsBtn/CommentsBtn'
import ThemeModeBtn from '@entities/ui/buttons/ThemeBtn/ThemeBtn'
import NavBar from '@entities/ui/lists/Navbar/Navbar'

import Logo from '@shared/ui/Logo/Logo'

import styles from './header.module.scss'

/**
 * Header component
 * @author @kiberchainik
 */
const Header = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false)
	const [newCommentsData, setNewCommentsData] = useState<IComment[]>([])

	return (
		<header className={styles.header}>
			<div className={styles.headerLayout}>
				<Logo />
				<NavBar toggleMenu={toggleMenu} />
				<div className={styles.headerRightButtonsBlock}>
					<SearchFormBtn />
					<div className='hidden md:block'>
						<ThemeModeBtn />
					</div>
					<CommentsBtn newComments={newCommentsData} />
					<UserAuthBtn />
					<button
						className='md:hidden'
						onClick={() => setToggleMenu(!toggleMenu)}
					>
						{toggleMenu ? <X /> : <Menu />}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
