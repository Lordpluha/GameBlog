import { Sun, Moon, MonitorSmartphone } from 'lucide-react'
import styles from './themeModeBtn.module.scss'

type TProps = {
    theme: string,
    setToggleTheme: (val:boolean) => void,
    setTheme: (val:string) => void
}

const ThemeModeModal = ({theme, setToggleTheme, setTheme}:TProps) => {
    const isLight = theme === 'light' ? true : false

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

  return (
    <ul className={styles.headerToggleTheme}>
        <li
            className={styles.headerToggleThemeLi}
            onClick={() => switchTheme('light')}
        >
            <Sun className={
                isLight ? 'text-[#e6d649]' : 'text-[#6d7479]'
            } />
            <span className={isLight ? 'text-white' : ''}>
                Светлая тема
            </span>
        </li>
        <li
            className={styles.headerToggleThemeLi}
            onClick={() => switchTheme('dark')}
        >
            <Moon className={
                !isLight ? 'text-[#5d5fef]' : 'text-[#6d7479]'
            } />
            <span className={!isLight ? 'text-white' : ''}>
                Тёмная тема
            </span>
        </li>
        <li
            className={styles.headerToggleThemeLi}
            onClick={deviceTheme}
        >
            <MonitorSmartphone className='text-white' />
            <span className='text-white'>Системная</span>
        </li>
    </ul>
  )
}

export default ThemeModeModal