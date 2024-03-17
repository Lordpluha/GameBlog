import { Sun } from 'lucide-react'

import { type TTheme } from '../../../model'

const SunEl = ({ theme }: { theme: TTheme }) => {
	const isLight = theme === 'light'
	return (
		<>
			<Sun
				className={
					isLight
						? 'text-[#e6d649]'
						: 'text-[var(--default-dark-text-color)]'
				}
			/>
			<p className={isLight ? 'text-white' : ''}>Светлая тема</p>
		</>
	)
}

export default SunEl
