import { Sun, Moon } from 'lucide-react'

export type TBtnIconProps = {
  theme:'light'|'dark'
}

/**
 * Component return selected icon for button which switch theme
 */
const ThemeBtnIcon = ({theme}:TBtnIconProps) => {
  return (
    <>
        {
            theme === 'light' ? (
                <Sun className='text-[#e6d649]' />
            ) : (
                <Moon className='text-[#5d5fef]' />
            )
        }
    </>
  )
}

export default ThemeBtnIcon