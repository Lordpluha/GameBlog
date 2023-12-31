import { useState } from 'react'
import styles from './themeModeBtn.module.scss'
import ThemeModeModal from './ThemeModeModal'
import useTheme from '../../../hooks/useTheme'
import ThemeBtnIcon from './ThemeBtnIcon'

/**
 * Toggle-button component for switch to app theme dark or lihgt
 */
const ThemeModeBtn = () => {
	const [toggleTheme, setToggleTheme] = useState<boolean>(false)
	const {theme, setTheme} = useTheme()

	return (
		<>
			<button
				className={styles.headerThemeButton}
				onClick={() => setToggleTheme(!toggleTheme)}
			>
				<ThemeBtnIcon theme={theme} /> 
			</button>
			{toggleTheme && <ThemeModeModal theme={theme} setToggleTheme={setToggleTheme} setTheme={setTheme} />}
		</>
	)
}

export default ThemeModeBtn
