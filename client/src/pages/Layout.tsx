import { Outlet } from 'react-router-dom'

import { Footer } from '@widgets/Footer'
import { Header } from '@widgets/Header'

const Layout = () => {
	return (
		<div className='layoutComponent'>
			<Header />
			<div className='w-full py-5 md:px-5 bg-transparent'>
				<div className='p-5 w-full bg-[var(--body-bg-color)] rounded-xl shadow-md'>
					<Outlet />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Layout
