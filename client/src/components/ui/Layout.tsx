import { Outlet } from 'react-router-dom'
import Header from './header/Header'

const Layout = () => {
	return (
		<div className='mx-auto h-screen bg-white text-[#1c2c38] dark:text-white dark:bg-[#1c2124] flex flex-col'>
			<Header />
			<div className='container mt-[90px]'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
