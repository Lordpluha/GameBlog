import { Sun, Moon } from 'lucide-react'

const ThemeBtnIcon = ({theme}:{theme:string}) => {
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