import { Outlet } from 'react-router-dom'
import { Footer } from '../components/ui/footer/Footer'

const Layout = () => {
	return (
		<div>
			<h2>GameBlog</h2>
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
