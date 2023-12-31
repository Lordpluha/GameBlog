import { Sun, Moon, MonitorSmartphone } from 'lucide-react'
import './themeModeBtn.scss'
import { useRef } from 'react'
import { useOnClickOutsideRef } from '../../../hooks/useOnClickOut'

type TProps = {
    theme: string,
    setToggleTheme: (val:boolean) => void,
    setTheme: (val:string) => void
}
/**
 * 
 * @param theme - string value dark or light
 * @param setToggleTheme - state popup with theme switch button accepting true or false
 * @param setTheme - state accepting theme mode
 * @returns ReactNode
 */
const ThemeModeModal = ({theme, setToggleTheme, setTheme}:TProps) => {
    const refModal = useRef(null)
    //hook for close popup whith click outside
    useOnClickOutsideRef(refModal, setToggleTheme)
    const isLight = theme === 'light' ? true : false

    const switchTheme = (val: string) => {
		setTheme(val)
		setToggleTheme(false)
	}

    const deviceTheme = () => {
		setToggleTheme(false)
		setTheme(
            window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        )
	}

  return (
    <ul className='headerToggleTheme' ref={refModal}>
        <li
            className='headerToggleThemeLi'
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
            className='headerToggleThemeLi'
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
            className='headerToggleThemeLi'
            onClick={deviceTheme}
        >
            <MonitorSmartphone className='text-white' />
            <span className='text-white'>Системная</span>
        </li>
    </ul>
  )
}

export default ThemeModeModal