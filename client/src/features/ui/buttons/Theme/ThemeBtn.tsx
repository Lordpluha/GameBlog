import { useRef } from 'react'

import useModal from '@hooks/useModal'
import useTheme from '@hooks/useTheme'

import ThemeModeModal from '@ui/Header/modals/Theme/ThemeModal'

import ThemeBtnIcon from '@icons/ThemeBtnIcon'

/**
 * Rendering component button for switch to app theme dark or light
 */
const ThemeBtn = () => {
	const { theme, setTheme } = useTheme()
	const refModal = useRef<HTMLUListElement>(null!)
	const { modal, setModal } = useModal(refModal)

	return (
		<>
			<button
				className='bg-[var(--default-dark-btn-color)] rounded-[10px] p-2 text-[10px]'
				onClick={() => setModal(!modal)}
			>
				<ThemeBtnIcon theme={theme} />
			</button>
			{modal && (
				<ThemeModeModal
					setModal={setModal}
					theme={theme}
					setTheme={setTheme}
					ref={refModal}
				/>
			)}
		</>
	)
}

export default ThemeBtn
