import { Outlet } from 'react-router-dom'

import Header from '@widgets/ui/Header/Header'

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
