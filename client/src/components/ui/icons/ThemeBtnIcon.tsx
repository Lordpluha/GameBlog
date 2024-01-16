import { Moon, Sun } from 'lucide-react'

import { TTheme } from '../../types/Theme.type'

/**
 * Component return selected icon for button which switch theme
 */
const ThemeBtnIcon = ({ theme }: { theme: TTheme }) => {
	return (
		<>
			{theme === 'light' ? (
				<Sun className='text-[#e6d649]' />
			) : (
				<Moon className='text-[#5d5fef]' />
			)}
		</>
	)
}

export default ThemeBtnIcon
