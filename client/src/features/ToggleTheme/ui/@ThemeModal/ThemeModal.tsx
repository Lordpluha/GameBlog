import {
	type Dispatch,
	type PropsWithRef,
	type SetStateAction,
	forwardRef,
	useState
} from 'react'

import { MonitorSmartphone } from 'lucide-react'

import { type TTheme } from '../../model'
import MoonEl from './@elements/MoonEl'
import SunEl from './@elements/SunEl'
import styles from './ThemeModal.module.scss'

interface TModalThemeProps {
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
	const [isActive, setIsActive] = useState<Boolean>(false)

	return (
		<ul className={styles.headerToggleTheme} ref={ref}>
			<li
				style={{
					color: isActive ? 'white' : 'var(--default-dark-text-color)'
				}}
				onClick={() => {
					switchTheme('light')
				}}
			>
				<SunEl theme={theme} />
			</li>
			<li
				style={{
					color: isActive ? 'white' : 'var(--default-dark-text-color)'
				}}
				onClick={() => {
					switchTheme('dark')
				}}
			>
				<MoonEl theme={theme} />
			</li>
			<li
				style={{
					color: isActive ? 'white' : 'var(--default-dark-text-color)'
				}}
				onClick={deviceTheme}
			>
				<MonitorSmartphone />
				<p>Системная</p>
			</li>
		</ul>
	)
})

export default ThemeModeModal
