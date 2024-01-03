import { useRef } from 'react'
import styles from './themeModeBtn.module.scss'
import ThemeModeModal from './ThemeModeModal'
import useTheme from '../../../hooks/useTheme'
import ThemeBtnIcon from './btnIcon/ThemeBtnIcon'
import useModal from '../../../hooks/useModal'

/**
 * Rendering component button for switch to app theme dark or lihgt
 */
const ThemeModeBtn = () => {
	const {theme, setTheme} = useTheme()
	const refModal = useRef<HTMLUListElement>(null!)
  	const {modal, setModal} = useModal(refModal)

	return (
		<>
			<button
				className={styles.headerThemeButton}
				onClick={() => setModal(!modal)}
			>
				<ThemeBtnIcon theme={theme} /> 
			</button>
			{modal && <ThemeModeModal setModal={setModal} theme={theme} setTheme={setTheme} ref={refModal} />}
		</>
	)
}

export default ThemeModeBtn
