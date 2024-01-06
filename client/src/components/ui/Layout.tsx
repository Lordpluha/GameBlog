import { Outlet } from 'react-router-dom'

import Header from './Header/Header'
import Breadcrumbs from './breadcrumbs/Breadcrumbs'

const Layout = () => {
	return (
		<div className='layoutComponent'>
			<Header />
			<Breadcrumbs />
			<div className='container mt-[20px]'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
