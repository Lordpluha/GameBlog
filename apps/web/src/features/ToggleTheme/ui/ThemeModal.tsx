import { type FC } from 'react'
import { MonitorSmartphone, Sun, Moon } from 'lucide-react'
import { DropdownMenu, DropdownItem } from '@nextui-org/react'

type TTheme = 'dark' | 'light' | 'device'

interface TModalThemeProps {
  theme: string
  setTheme: (theme: TTheme) => void
}

/**
 * Component modal window for change theme
 * @param theme - string value dark or light
 * @param setTheme - state accepting theme mode
 *
 */
const ThemeModeDropdown: FC<TModalThemeProps> = ({
  theme,
  setTheme: setThemeGeneral
}) => {
  const deviceTheme = () => {
    setTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    )
  }

  const setTheme = (theme: TTheme) =>
    theme !== 'device' ? setThemeGeneral(theme) : deviceTheme()
  const isLight = theme === 'light'
  return (
    <DropdownMenu
      onAction={key => setTheme(key as unknown as TTheme)}
      classNames={{ list: 'gap-y-3' }}
      itemClasses={{
        base: 'cursor-pointer hover:text-white flex flex-row flex-nowrap gap-x-3 py-3 px-2',
        title: 'text-medium'
      }}
    >
      <DropdownItem
        key='light'
        className={isLight ? 'text-foreground' : 'text-content1'}
        startContent={
          <Sun className={isLight ? 'text-[#e6d649]' : 'text-content1'} />
        }
      >
        Светлая тема
      </DropdownItem>
      <DropdownItem
        key='dark'
        className={!isLight ? 'text-foreground' : 'text-content1'}
        startContent={
          <Moon className={!isLight ? 'text-[#5d5fef]' : 'text-content1'} />
        }
      >
        Тёмная тема
      </DropdownItem>
      <DropdownItem
        key='device'
        className={'text-content1'}
        startContent={<MonitorSmartphone className='text-content1' />}
      >
        Системная
      </DropdownItem>
    </DropdownMenu>
  )
}

export default ThemeModeDropdown
