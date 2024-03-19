import { useRef, useState } from 'react'

import { Moon, Sun } from 'lucide-react'

// import { useTheme } from '../lib'
import useModal from '../lib/@hooks/useModal'
import ThemeModeModal from './@ThemeModal/ThemeModal'

/**
 * Rendering component button for switch to app theme dark or light
 */
const ThemeBtn = () => {
	// const { theme, setTheme } = useTheme()
	const refModal = useRef<HTMLUListElement>(null!)
	const refButton1 = useRef<HTMLButtonElement>(null!)
	const refBtnThemeSystem = useRef<HTMLLIElement>(null!)
	const refBtnThemeDark = useRef<HTMLLIElement>(null!)
	const refBtnThemeLight = useRef<HTMLLIElement>(null!)
	const { modal, setModal, theme, setTheme } = useModal(
		refModal,
		[refButton1],
		[refBtnThemeSystem, refBtnThemeDark],
		refBtnThemeLight
	)
	const [isHover, setIsHover] = useState<boolean>(false)

	return (
		<>
			<button
				ref={refButton1}
				style={{
					background: isHover
						? '#2F3437'
						: 'var(--default-dark-btn-color)'
				}}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				className='rounded-[10px] p-2 text-[10px]'
			>
				{theme === 'light' ? (
					<Sun className='text-[#e6d649]' />
				) : (
					<Moon className='text-[#5d5fef]' />
				)}
			</button>
			{modal && (
				<ThemeModeModal
					refBtnThemeLight={refBtnThemeLight}
					refBtnThemeSystem={refBtnThemeSystem}
					refBtnThemeDark={refBtnThemeDark}
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
