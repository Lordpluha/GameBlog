import {
  RightArrowIcon,
  SteamIcon,
  TelegramIcon,
  VKIcon,
  YoutubeIcon
} from '@gameblog/ui'
import styles from './FooterIcons.module.scss'
import Link from 'next/link'
import { Tooltip } from '@nextui-org/react'

function FooterIcons() {
  return (
    <ul className={styles.footer__icons}>
      <li>
        <Tooltip
          showArrow={true}
          content='Группа StopGame на Youtube'
        >
          <Link
            className={styles.social_icon}
            href='#'
          >
            <YoutubeIcon />
          </Link>
        </Tooltip>
      </li>
      <li>
        <Tooltip
          showArrow={true}
          content='Группа StopGame на VK'
        >
          <Link
            className={styles.social_icon}
            href='https://vk.com/'
          >
            <VKIcon />
          </Link>
        </Tooltip>
      </li>
      <li>
        <div className={styles.dropdown}>
          <TelegramIcon />
          <ul className={styles.dropdown_content}>
            <li>
              <Link href='#'>StopGame.ru</Link>
              <RightArrowIcon />
            </li>
            <li>
              <Link href='#'>StopGame.ru Новости</Link>
              <RightArrowIcon />
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Tooltip
          showArrow={true}
          content='Страница StopGame на Steam'
        >
          <Link
            className={styles.social_icon}
            href='#'
          >
            <SteamIcon />
          </Link>
        </Tooltip>
      </li>
    </ul>
  )
}

export default FooterIcons
