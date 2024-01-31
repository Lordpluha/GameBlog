import { TTheme } from '@/model/types/Theme.type'
import { Moon } from 'lucide-react'

const MoonIcon = ({ theme }: { theme: TTheme }) => {
	const isLight = theme === 'dark' ? true : false
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

export default MoonIcon
