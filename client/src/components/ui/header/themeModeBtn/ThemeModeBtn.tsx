import React from 'react'
import styles from './themeModeBtn.module.scss'

const ThemeModeBtn = () => {
  const [toggleTheme, setToggleTheme] = React.useState<boolean>(false)
  const [theme, setTheme] = React.useState<string>(() => {
    const mode = JSON.parse(localStorage.getItem('themeMode') || '[]')
    return mode || 'light'
  })

  const switchTheme = (val:string) => {
    setTheme(val)
    setToggleTheme(false)
  }

  /** If switch device theme */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    setTheme(e.matches ? "dark" : "light" )
  });

  const deviceTheme = () => {
    setToggleTheme(false)
    if( window.matchMedia('(prefers-color-scheme: dark)').matches ) {
        setTheme('dark')
    }

    if( window.matchMedia('(prefers-color-scheme: light)').matches ) {
        setTheme('light')
    }
  }

  React.useEffect(() => {
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
            {theme === 'light'&&<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun text-[#e6d649]">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
            </svg>}
            {theme === 'dark'&&<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-moon text-[#5d5fef]`}>
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
            </svg>}
        </button>
        {toggleTheme && <ul className={styles.headerToggleTheme}>
            <li className={styles.headerToggleThemeLi} onClick={() => switchTheme('light')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-sun ${theme === 'light'?'text-[#e6d649]':''}`}>
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/>
                    <path d="M12 20v2"/>
                    <path d="m4.93 4.93 1.41 1.41"/>
                    <path d="m17.66 17.66 1.41 1.41"/>
                    <path d="M2 12h2"/>
                    <path d="M20 12h2"/>
                    <path d="m6.34 17.66-1.41 1.41"/>
                    <path d="m19.07 4.93-1.41 1.41"/>
                </svg> <span className={`${theme === 'light'?'text-white':''}`}>Светлая тема</span>
            </li>
            <li className={styles.headerToggleThemeLi}  onClick={() => switchTheme('dark')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-moon ${theme === 'dark'?'text-[#5d5fef]':''}`}>
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg> <span className={`${theme === 'dark'?'text-white':''}`}>Тёмная тема</span>
            </li>
            <li className={styles.headerToggleThemeLi} onClick={deviceTheme}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-smartphone text-white">
                    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/>
                    <path d="M10 19v-3.96 3.15"/>
                    <path d="M7 19h5"/>
                    <rect width="6" height="10" x="16" y="12" rx="2"/>
                </svg> <span className='text-white'>Системная</span>
            </li>
        </ul>}
    </>
  )
}

export default ThemeModeBtn