import { useEffect, useState } from 'react'
import styles from './themeModeBtn.module.scss'
import SunIcon from '../../icons/SunIcon'
import MoonIcon from '../../icons/MoonIcon'
import DeviceIcon from '../../icons/DeviceIcon'
/**
 * Toggle-button component for switch to app theme dark or lihgt 
 * @param toggleTheme - is const of state accepting boolean value for switch theme
 * @param theme - is const of state accepting default value app theme
 * @function switchTheme - function changes the app theme on click
 * @function deviceTheme - function changes the app theme based on the device theme
 */
const ThemeModeBtn = () => {
  const [toggleTheme, setToggleTheme] = useState<boolean>(false)
  const [theme, setTheme] = useState<string>(() => {
    return JSON.parse(localStorage.getItem('themeMode') || '[]') || 'light'
  })

  const switchTheme = (val:string) => {
    setTheme(val)
    setToggleTheme(false)
  }

  /** If switch device theme */
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        setTheme(e.matches ? "dark" : "light" )
    });
  }, [])

  const deviceTheme = () => {
    setToggleTheme(false)
    if( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
        setTheme('dark')
    }

    if( window.matchMedia('(prefers-color-scheme: light)').matches ) {
        setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('themeMode', JSON.stringify(theme))
    if(theme === 'dark') {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <>
        <button className={styles.headerThemeButton} onClick={() => setToggleTheme(!toggleTheme)}>
            {theme === 'light' ?
                <span className="text-[#e6d649]"><SunIcon /></span>
              :
                <span className="text-[#5d5fef]"><MoonIcon /></span>}
        </button>
        {toggleTheme && <ul className={styles.headerToggleTheme}>
            <li className={styles.headerToggleThemeLi} onClick={() => switchTheme('light')}>
                <span className={theme === 'light'?'text-[#e6d649]':'text-[#6d7479]'}>
                  <SunIcon />
                </span>    
                <span className={theme === 'light'?'text-white':''}>
                  Светлая тема
                </span>
            </li>
            <li className={styles.headerToggleThemeLi}  onClick={() => switchTheme('dark')}>
                <span className={theme === 'dark'?'text-[#5d5fef]':'text-[#6d7479]'}>
                  <MoonIcon />
                </span>
                <span className={theme === 'dark'?'text-white':''}>
                  Тёмная тема
                </span>
            </li>
            <li className={styles.headerToggleThemeLi} onClick={deviceTheme}>
                <span className='text-white'>
                  <DeviceIcon />
                </span>
                <span className='text-white'>Системная</span>
            </li>
        </ul>}
    </>
  )
}

export default ThemeModeBtn