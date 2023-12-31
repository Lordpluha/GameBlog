import { useState } from 'react'
import './header.scss'
import ThemeModeBtn from './themeModeBtn/ThemeModeBtn'
import SearchFormBtn from './searchFormBtn/SearchFormBtn'
import CommentsBtn from './commentsBtn/CommentsBtn'
import UserAuthBtn from './userAuthBtn/UserAuthBtn'
import Logo from '../logo/Logo'
import { Menu, X } from 'lucide-react'
import NavBar from './navbar/NavBar'
import { INewComment } from '../interfaces/NewComments.interface'

/**
 * Header component
 * @author @kiberchainik
 * @return ReactNode
 */
const Header = () => {
	const [toggleMenu, setToggleMenu] = useState<boolean>(false)
	const [newCommentsData, setNewCommentsData] = useState<INewComment[]>([])

	return (
		<header className='header'>
			<div className='headerLayout'>
				<Logo />
				<NavBar toggleMenu={toggleMenu} />
				<div className='headerRightButtonsBlock'>
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
