import { createBrowserRouter } from 'react-router-dom'
import BlogsPage from '../pages/BlogsPage'
import CheatsPage from '../pages/CheatsPage'
import GamesPage from '../pages/GamesPage'
import NewsPage from '../pages/NewsPage'
import ReadPage from '../pages/ReadPage'
import StreamsPage from '../pages/StreamsPage'
import SupportPage from '../pages/SupportPage'
import WatchPage from '../pages/WatchPage'
import Layout from '../pages/Layout'
import ErrorPage from '../pages/ErrorPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/blogs',
				element: <BlogsPage />
			},
			{
				path: '/cheats',
				element: <CheatsPage />
			},
			{
				path: '/games',
				element: <GamesPage />
			},
			{
				path: '/news',
				element: <NewsPage />
			},
			{
				path: '/read',
				element: <ReadPage />
			},
			{
				path: '/streams',
				element: <StreamsPage />
			},
			{
				path: '/support',
				element: <SupportPage />
			},
			{
				path: '/watch',
				element: <WatchPage />
			}
		]
	}
])
