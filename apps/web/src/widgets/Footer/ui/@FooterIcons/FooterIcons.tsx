import { RightArrowIcon, SteamIcon, TelegramIcon, VKIcon, YoutubeIcon } from '@gameblog/ui'
import styles from './FooterIcons.module.scss'
import Link from 'next/link'

function FooterIcons() {
  return (
    <ul className={styles.footer__icons}>
      <li>
        <Link
          className={styles.social_icon}
          href='#'
        >
          <YoutubeIcon />
          <div className={styles.tooltip}>Группа StopGame на Youtube</div>
        </Link>
      </li>
      <li>
        <Link
          className={styles.social_icon}
          href='https://vk.com/'
        >
          <VKIcon />
          <div className={styles.tooltip}>Группа StopGame на VK</div>
        </Link>
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
        <Link
          className={styles.social_icon}
          href='#'
        >
          <SteamIcon />
          <div className={styles.tooltip}>Страница StopGame на Steam</div>
        </Link>
      </li>
    </ul>
  )
}

export default FooterIcons
