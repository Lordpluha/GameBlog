import { useRef } from 'react'

import { Moon, Sun } from 'lucide-react'

import useModal from '@features/lib/hooks/useModal'
import useTheme from '@features/lib/hooks/useTheme'

import ThemeModeModal from '@entities/ui/modals/Theme/ThemeModal'

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
