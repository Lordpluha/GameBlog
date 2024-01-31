import { TTheme } from '@model/types'
import { Sun } from 'lucide-react'

const SunIcon = ({ theme }: { theme: TTheme }) => {
	const isLight = theme === 'light' ? true : false
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

export default SunIcon
