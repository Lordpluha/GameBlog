import { useState } from 'react'
import styles from './header.module.scss'
import ThemeModeBtn from './themeModeBtn/ThemeModeBtn'
import SearchFormBtn from './searchFormBtn/SearchFormBtn'
import CommentsBtn from './commentsBtn/CommentsBtn'
import UserAuthBtn from './userAuthBtn/UserAuthBtn'
import Logo from '../logo/Logo'
import CloseXIcon from '../icons/CloseXIcon'
import MenuIcon from '../icons/MenuIcon'
import NavBar from './navbar/NavBar'
import { INewComments } from '../interfaces/NewComments.interface'

/**
 * Header component
 * @author @kiberchainik
 * @return ReactNode
 */
const Header = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false)
	const [newCommentsData, setNewCommentsData] = useState<INewComments[]>([])

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
						{toggleMenu ? <CloseXIcon /> : <MenuIcon />}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
