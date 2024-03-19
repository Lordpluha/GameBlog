import {
	type Dispatch,
	MutableRefObject,
	type PropsWithRef,
	type SetStateAction,
	forwardRef
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
	refBtnThemeDark: MutableRefObject<HTMLLIElement>
	refBtnThemeSystem: MutableRefObject<HTMLLIElement>
	refBtnThemeLight: MutableRefObject<HTMLLIElement>
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
>(
	(
		{
			theme,
			setTheme,
			setModal,
			refBtnThemeSystem,
			refBtnThemeDark,
			refBtnThemeLight
		},
		ref
	) => {
		// const switchTheme = (val: TTheme) => {
		// 	setTheme(val)
		// 	setModal(false)
		// }

		// const deviceTheme = () => {
		// 	setModal(false)
		// 	setTheme(
		// 		window.matchMedia('(prefers-color-scheme: dark)').matches
		// 			? 'dark'
		// 			: 'light'
		// 	)
		// }

		return (
			<ul className={styles.headerToggleTheme} ref={ref}>
				<li
					ref={refBtnThemeLight}
					// onClick={() => handleButtonClick('light')}
					// onClick={() => {
					// 	switchTheme('light')
					// }}
				>
					<SunEl theme={theme} />
				</li>
				<li
					ref={refBtnThemeDark}
					// onClick={() => {
					// 	handleButtonClick('dark')
					// switchTheme('dark')
					// }}
				>
					<MoonEl theme={theme} />
				</li>
				<li
					ref={refBtnThemeSystem}
					// onClick={deviceTheme}
				>
					<MonitorSmartphone />
					<p>Системная</p>
				</li>
			</ul>
		)
	}
)

export default ThemeModeModal
