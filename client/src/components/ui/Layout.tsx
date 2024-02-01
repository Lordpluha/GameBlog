import { Outlet } from 'react-router-dom'

import Header from './Header/Header'
import Breadcrumbs from './breadcrumbs/Breadcrumbs'

const Layout = () => {
	return (
		<div className='layoutComponent'>
			<Header />
			<div className='container px-5 mx-auto mt-5'>
				<Breadcrumbs />
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
