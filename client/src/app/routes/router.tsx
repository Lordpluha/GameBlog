import { createBrowserRouter } from 'react-router-dom'

import { BlogsPage } from '@pages/Blogs'
import { CheatsPage } from '@pages/Cheats'
import { ErrorPage } from '@pages/Error'
import { GamesPage } from '@pages/Games'
import { HomePage } from '@pages/Home'
import { NewsPage, AboutNewPage } from '@pages/News'
import { ReadPage } from '@pages/Read'
import { StreamsPage } from '@pages/Streams'
import { SupportPage } from '@pages/Support'
import { WatchPage } from '@pages/Watch'

import Layout from '@pages/Layout'

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
				path: '/newsdata/:seo',
				element: <AboutNewPage />
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
