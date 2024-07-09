import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextUIProvider } from '@gameblog/ui'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className='dark'
		>
			<NextUIProvider>
				<body className={inter.className}>{children}</body>
			</NextUIProvider>
		</html>
	)
}