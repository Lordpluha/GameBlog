import { useState } from 'react'

import { INewComment } from '@/interfaces/extras/NewComments.interface'
import { Menu, X } from 'lucide-react'

import Logo from '@ui/Logo/Logo'

import NavBar from './Navbar/Navbar'
import CommentsBtn from './buttons/Comments/CommentsBtn'
import SearchFormBtn from './buttons/Search/SearchBtn'
import ThemeModeBtn from './buttons/Theme/ThemeBtn'
import UserAuthBtn from './buttons/UserAuth/UserAuthBtn'
import styles from './header.module.scss'

/**
 * Header component
 * @author @kiberchainik
 */
const Header = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false)
	const [newCommentsData, setNewCommentsData] = useState<INewComment[]>([])

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
