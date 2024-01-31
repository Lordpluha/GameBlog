import { Outlet } from 'react-router-dom'

import Header from '@/widgets/Header/ui/Header'

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
