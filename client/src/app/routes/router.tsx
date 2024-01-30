import { createBrowserRouter } from 'react-router-dom'

import BlogsPage from '@pages/BlogsPage'
import CheatsPage from '@pages/CheatsPage'
import ErrorPage from '@pages/ErrorPage'
import GamesPage from '@pages/GamesPage'
import HomePage from '@pages/HomePage'
import Layout from '@pages/Layout'
import NewsPage from '@pages/NewsPage'
import ReadPage from '@pages/ReadPage'
import StreamsPage from '@pages/StreamsPage'
import SupportPage from '@pages/SupportPage'
import WatchPage from '@pages/WatchPage'

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