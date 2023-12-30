import { useState } from 'react'
import styles from './themeModeBtn.module.scss'
import { Sun, Moon } from 'lucide-react'
import ThemeModeModal from './ThemeModeModal'
import useTheme from '../../../hooks/useTheme'

/**
 * Toggle-button component for switch to app theme dark or lihgt
 */
const ThemeModeBtn = () => {
	const [toggleTheme, setToggleTheme] = useState<boolean>(false)
	const [theme, setTheme] = useTheme()

	return (
		<>
			<button
				className={styles.headerThemeButton}
				onClick={() => setToggleTheme(!toggleTheme)}
			>
				{theme === 'light' ? (
					<Sun className='text-[#e6d649]' />
				) : (
					<Moon className='text-[#5d5fef]' />
				)}
			</button>
			{toggleTheme && <ThemeModeModal theme={theme} setToggleTheme={setToggleTheme} setTheme={setTheme} />}
		</>
	)
}

export default ThemeModeBtn
