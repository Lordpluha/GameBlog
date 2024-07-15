import { useRef, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useModal } from '@entities/Modal'
import { useTheme } from '../lib'
import ThemeModeModal from './@ThemeModal/ThemeModal'

/**
 * Rendering component button for switch to app theme dark or light
 */
function ThemeBtn() {
  const { theme, setTheme } = useTheme()
  const refModal = useRef<HTMLUListElement>(null!)
  const { modal, setModal } = useModal(refModal)
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <>
      <button
        className='rounded-[10px] p-2 text-[10px]'
        onClick={() => {
          setModal(prev => !prev)
        }}
        onMouseEnter={() => { setIsHover(true); }}
        onMouseLeave={() => { setIsHover(false); }}
        style={{
          background: isHover ? '#2F3437' : 'var(--default-dark-btn-color)'
        }}
      >
        {theme === 'light' ? (
          <Sun className='text-[#e6d649]' />
        ) : (
          <Moon className='text-[#5d5fef]' />
        )}
      </button>
      {modal ? <ThemeModeModal
          ref={refModal}
          setModal={setModal}
          setTheme={setTheme}
          theme={theme}
        /> : null}
    </>
  )
}

export default ThemeBtn
