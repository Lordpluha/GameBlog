import { Outlet } from 'react-router-dom'
import { Footer } from '../components/ui/footer/Footer'

import { Header } from '@widgets/Header'

const Layout = () => {
	return (
		<div className='layoutComponent'>
			<Header />
			<div className='container mt-[90px]'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
