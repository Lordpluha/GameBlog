import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type TUseThemeHook = (
	defaultTheme?: 'light' | 'dark'
) => [theme: string, setTheme: Dispatch<SetStateAction<string>>]

const useTheme: TUseThemeHook = (defaultTheme = 'light') => {
	const [theme, setTheme] = useState<string>(
		localStorage.getItem('themeMode') || defaultTheme
	)
	
	/** If switch device theme */
	useEffect(() => {
		const handler = (e:MediaQueryListEventInit) => {
			setTheme(e.matches ? 'dark' : 'light')
		}
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', handler)
		return () => {
			window.removeEventListener('change', handler)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('themeMode', theme)
		if (theme === 'dark') {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	}, [theme])

	return [theme, setTheme]
}

export default useTheme
