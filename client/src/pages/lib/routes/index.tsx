import { createBrowserRouter } from 'react-router-dom'

import BlogsPage from '@pages/ui/BlogsPage'
import CheatsPage from '@pages/ui/CheatsPage'
import ErrorPage from '@pages/ui/ErrorPage'
import GamesPage from '@pages/ui/GamesPage'
import HomePage from '@pages/ui/HomePage'
import Layout from '@pages/ui/Layout'
import NewsPage from '@pages/ui/NewsPage'
import ReadPage from '@pages/ui/ReadPage'
import StreamsPage from '@pages/ui/StreamsPage'
import SupportPage from '@pages/ui/SupportPage'
import WatchPage from '@pages/ui/WatchPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <HomePage />
			},
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
