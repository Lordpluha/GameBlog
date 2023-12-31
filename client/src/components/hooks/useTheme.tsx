import { useEffect, useState } from 'react'
/**
 * Castom hook for switch theme mode. Accepting default theme = 'light' and return {theme, setTheme}
 */
const useTheme = (defaultTheme = 'light') => {
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
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('themeMode', theme)
	}, [theme])

	return {theme, setTheme}
}

export default useTheme