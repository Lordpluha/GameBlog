import { Outlet } from 'react-router-dom'

import { Header } from '@widgets/Header'
import { Footer } from '@widgets/footer'

const Layout = () => {
	return (
		<div className='layoutComponent'>
			<Header />
			<div className='container mt-[90px]'>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Layout
