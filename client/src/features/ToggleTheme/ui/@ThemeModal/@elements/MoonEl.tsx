import { Moon } from 'lucide-react'

import { type TTheme } from '../../../model'

const MoonEl = ({ theme }: { theme: TTheme }) => {
	const isLight = theme === 'dark'
	return (
		<>
			<Moon
				className={
					isLight
						? 'text-[#5d5fef]'
						: 'text-[var(--default-dark-text-color)]'
				}
			/>
			<p className={isLight ? 'text-white' : ''}>Тёмная тема</p>
		</>
	)
}

export default MoonEl
