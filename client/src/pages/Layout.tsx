import { Outlet } from 'react-router-dom'

import { Header } from '@widgets/Header'
import { Footer } from '@widgets/Footer'

const Layout = () => {
	return (
		<div className='layoutComponent'>
			<Header />
			<div className='container'>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Layout
