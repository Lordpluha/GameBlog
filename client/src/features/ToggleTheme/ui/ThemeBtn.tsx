import { useRef, useState } from 'react'

import { Moon, Sun } from 'lucide-react'

import { useModal } from '@entities/Modal'

import { useTheme } from '../lib'
import ThemeModeModal from './@ThemeModal/ThemeModal'

/**
 * Rendering component button for switch to app theme dark or light
 */
const ThemeBtn = () => {
	const { theme, setTheme } = useTheme()
	const refModal = useRef<HTMLUListElement>(null!)
	const { modal, setModal } = useModal(refModal)
	const [isHover, setIsHover] = useState<boolean>(false)

	return (
		<>
			<button
				style={{
					background: isHover
						? '#2F3437'
						: 'var(--default-dark-btn-color)'
				}}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				className='rounded-[10px] p-2 text-[10px]'
				onClick={() => {
					setModal(!modal)
				}}
			>
				{theme === 'light' ? (
					<Sun className='text-[#e6d649]' />
				) : (
					<Moon className='text-[#5d5fef]' />
				)}
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
