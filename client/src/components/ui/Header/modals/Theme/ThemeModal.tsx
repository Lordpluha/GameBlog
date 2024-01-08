import { ForwardedRef, forwardRef } from 'react'

import { MonitorSmartphone } from 'lucide-react'

import { TTheme } from '@type/Theme.type'

import MoonIcon from '@icons/MoonIcon'
import SunIcon from '@icons/SunIcon'

import styles from './ThemeModal.module.scss'

type TModalThemeProps = {
	theme: TTheme
	setModal: React.Dispatch<React.SetStateAction<boolean>>
	setTheme: React.Dispatch<React.SetStateAction<TTheme>>
}

type TModalRef = ForwardedRef<HTMLUListElement>

/**
 * Component modal window for change theme
 * @param theme - string value dark or light
 * @param setModal - state popup with theme switch button accepting true or false
 * @param setTheme - state accepting theme mode
 *
 * @param ref reference to ul list of switch buttons
 */
const ThemeModeModal = forwardRef(
	({ theme, setTheme, setModal }: TModalThemeProps, ref: TModalRef) => {
		const switchTheme = (val: TTheme) => {
			setTheme(val)
			setModal(false)
		}

		const deviceTheme = () => {
			setModal(false)
			setTheme(
				window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light'
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
				<li onClick={deviceTheme}>
					<MonitorSmartphone className='text-white' />
					<p className='text-white'>Системная</p>
				</li>
			</ul>
		)
	}
)

export default ThemeModeModal
