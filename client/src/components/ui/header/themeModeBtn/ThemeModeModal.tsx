import { MonitorSmartphone } from 'lucide-react'
import styles from './themeModeBtn.module.scss'
import { ForwardedRef, forwardRef } from 'react'
import { TTheme } from '../../TTheme.type'
import SunIcon from './btnIcon/SunIcon'
import MoonIcon from './btnIcon/MoonIcon'

type TModalThemeProps = {
    theme: TTheme,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    setTheme: React.Dispatch<React.SetStateAction<TTheme>>
}

type TRefModal = ForwardedRef<HTMLUListElement>

/**
 * Component modal window for change theme
 * @param theme - string value dark or light
 * @param setModal - state popup with theme switch button accepting true or false
 * @param setTheme - state accepting theme mode
 */
const ThemeModeModal = forwardRef(({theme, setTheme, setModal}:TModalThemeProps, ref:TRefModal) => {
    const switchTheme = (val:TTheme) => {
		setTheme(val)
		setModal(false)
	}

    const deviceTheme = () => {
		setModal(false)
		setTheme(
            window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        )
	}

  return (
    <ul className={styles.headerToggleTheme} ref={ref}>
        <li onClick={() => switchTheme('light')}>
            <SunIcon theme={theme} />
        </li>
        <li onClick={() => switchTheme('dark')}>
            <MoonIcon theme={theme} />
        </li>
        <li  onClick={deviceTheme}>
            <MonitorSmartphone className='text-white' />
            <p className='text-white'>Системная</p>
        </li>
    </ul>
  )
})

export default ThemeModeModal