'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@gameblog/ui'
// import { UserAuthBtn } from '@features/Auth'
// import { CommentsBtn } from '@features/ToggleComments'
// import { SearchBtn } from '@features/ToggleSearch'
import { ThemeBtn } from '@features/ToggleTheme'
import NavBarItems from './@Navbar/Navbar'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarBrand
} from '@nextui-org/react'
import Link from 'next/link'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className='py-[17px] dark'
    >
      <NavbarBrand>
        <Link href='/'>
          <Logo />
        </Link>
      </NavbarBrand>

      <NavbarContent
        className='hidden flex-row lg:flex'
        justify='center'
      >
        <NavbarItem>
          <Link href='/news'>Новости</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/read'>Читать</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/watch'>Смотреть</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/blogs'>Блоги</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/streams'>Стримы</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/games'>Игры</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/cheats'>Читы</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/support'>Помощь</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        {/* <NavbarItem>
					<SearchBtn />
				</NavbarItem> */}
        <NavbarItem className='hidden md:block'>
          <ThemeBtn />
        </NavbarItem>
        {/* <NavbarItem className='hidden md:block'>
					<CommentsBtn />
				</NavbarItem> */}
        {/* <NavbarItem className='hidden md:block'>
					<UserAuthBtn />
				</NavbarItem> */}
        <NavbarMenuToggle
          className='block lg:hidden'
          icon={isMenuOpen ? <X /> : <Menu />}
          aria-label={isMenuOpen ? 'close menu' : 'open menu'}
          srOnlyText={' '}
        />
      </NavbarContent>
      <NavBarItems />
    </Navbar>
  )
}

export default Header
