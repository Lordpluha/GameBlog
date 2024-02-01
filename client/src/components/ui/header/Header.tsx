import { Menu, X } from 'lucide-react'
import { useState } from 'react'

import { INewComment } from '@interfaces/extras/NewComments.interface'

import Logo from '@ui/logo/Logo'

import NavBar from './navbar/NavBar'
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
					<div className='hidden lg2:block'>
						<ThemeModeBtn />
					</div>
					<CommentsBtn newComments={newCommentsData} />
					<UserAuthBtn />
					<button
						className='lg2:hidden'
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
