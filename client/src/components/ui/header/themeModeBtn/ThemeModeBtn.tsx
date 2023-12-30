import { useState } from 'react'
import styles from './themeModeBtn.module.scss'
import SunIcon from '../../icons/SunIcon'
import MoonIcon from '../../icons/MoonIcon'
import DeviceIcon from '../../icons/DeviceIcon'
import useTheme from '../../../hooks/useTheme'

/**
 * Toggle-button component for switch to app theme dark or lihgt
 */
const ThemeModeBtn = () => {
	const [toggleTheme, setToggleTheme] = useState<boolean>(false)
	const [theme, setTheme] = useTheme()

	const switchTheme = (val: string) => {
		setTheme(val)
		setToggleTheme(false)
	}

	const deviceTheme = () => {
		setToggleTheme(false)
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
		}

		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			setTheme('light')
		}
	}

	const isLight = theme === 'light'

	return (
		<>
			<button
				className={styles.headerThemeButton}
				onClick={() => setToggleTheme(!toggleTheme)}
			>
				{theme === 'light' ? (
					<span className='text-[#e6d649]'>
						<SunIcon />
					</span>
				) : (
					<span className='text-[#5d5fef]'>
						<MoonIcon />
					</span>
				)}
			</button>
			{toggleTheme && (
				<ul className={styles.headerToggleTheme}>
					<li
						className={styles.headerToggleThemeLi}
						onClick={() => switchTheme('light')}
					>
						<span
							className={
								isLight ? 'text-[#e6d649]' : 'text-[#6d7479]'
							}
						>
							<SunIcon />
						</span>
						<span className={theme === 'light' ? 'text-white' : ''}>
							Светлая тема
						</span>
					</li>
					<li
						className={styles.headerToggleThemeLi}
						onClick={() => switchTheme('dark')}
					>
						<span
							className={
								!isLight ? 'text-[#5d5fef]' : 'text-[#6d7479]'
							}
						>
							<MoonIcon />
						</span>
						<span className={theme === 'dark' ? 'text-white' : ''}>
							Тёмная тема
						</span>
					</li>
					<li
						className={styles.headerToggleThemeLi}
						onClick={deviceTheme}
					>
						<span className='text-white'>
							<DeviceIcon />
						</span>
						<span className='text-white'>Системная</span>
					</li>
				</ul>
			)}
		</>
	)
}

export default ThemeModeBtn
