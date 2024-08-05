'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import ThemeModeDropdown from './ThemeModal'
import { useTheme } from 'next-themes'
import { Dropdown, DropdownTrigger, Switch } from '@nextui-org/react'

type TThemeBtn = {
  isMobile?: boolean
}

/**
 * Rendering component button for switch to app theme dark or light
 */
const ThemeBtn: FC<TThemeBtn> = ({ isMobile = false }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isHover, setIsHover] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (isMobile)
    return (
      <Switch
        isSelected={theme === 'dark'}
        onValueChange={isSelected =>
          isSelected ? setTheme('dark') : setTheme('light')
        }
        size='lg'
        color='secondary'
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <Moon className={className} />
          ) : (
            <Sun className={className} />
          )
        }
      />
    )

  return (
    <Dropdown
      classNames={{
        base: 'flex flex-col',
        content: 'dark rounded-2x1 bg-[#262A2C] p-5'
      }}
    >
      <DropdownTrigger>
        <button
          className='rounded-[10px] p-2 text-[10px]'
          onMouseEnter={() => {
            setIsHover(true)
          }}
          onMouseLeave={() => {
            setIsHover(false)
          }}
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
      </DropdownTrigger>
      <ThemeModeDropdown
        setTheme={setTheme}
        theme={theme!}
      />
    </Dropdown>
  )
}

export default ThemeBtn
