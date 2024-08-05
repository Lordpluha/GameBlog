import Link from 'next/link'
import styles from './Navbar.module.scss'
import { NavbarMenu, NavbarMenuItem } from '@nextui-org/react'
import { UserAuthBtn } from '@features/Auth'
import { CommentsBtn } from '@features/ToggleComments'
import { ThemeBtn } from '@features/ToggleTheme'

/**
 * Navigation adaptive bar
 */
function NavBar() {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link href='/news'>Новости</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/read'>Читать</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/watch'>Смотреть</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/blogs'>Блоги</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/streams'>Стримы</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/games'>Игры</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/cheats'>Читы</Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href='/support'>Помощь</Link>
      </NavbarMenuItem>

      <NavbarMenuItem className='block flex flex-row md:hidden'>
        <ThemeBtn isMobile={true} />
        <CommentsBtn />
        <UserAuthBtn />
      </NavbarMenuItem>
    </NavbarMenu>
  )
}

export default NavBar
