import { Dispatch, PropsWithRef, SetStateAction, forwardRef } from 'react'

import MoonIcon from '@/shared/ui/icons/MoonIcon'
import SunIcon from '@/shared/ui/icons/SunIcon'
import { MonitorSmartphone } from 'lucide-react'

import { TTheme } from '@entities/model/types/Theme.type'

import styles from './ThemeModal.module.scss'

type TModalThemeProps = {
	theme: TTheme
	setModal: Dispatch<SetStateAction<boolean>>
	setTheme: Dispatch<SetStateAction<TTheme>>
}

/**
 * Component modal window for change theme
 * @param theme - string value dark or light
 * @param setModal - state popup with theme switch button accepting true or false
 * @param setTheme - state accepting theme mode
 *
 * @param ref reference to ul list of switch buttons
 */
const ThemeModeModal = forwardRef<
	HTMLUListElement,
	PropsWithRef<TModalThemeProps>
>(({ theme, setTheme, setModal }, ref) => {
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
})

export default ThemeModeModal
