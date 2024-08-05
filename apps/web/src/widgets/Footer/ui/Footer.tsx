import Link from 'next/link'
import { Logo } from '@gameblog/ui'
import FooterIcons from './@FooterIcons/FooterIcons'
import NavigationLeft from './@Navigation/NavigationLeft'
import NavigationRight from './@Navigation/NavigationRight'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__information}>
        <div className={styles.footer__box}>
          <div className={styles.footer__logo}>
            <Logo subtitle />
          </div>
          <FooterIcons />

          <NavigationLeft />

          <NavigationRight />
        </div>

        <div className={styles.footer__help}>
          <ul className={styles.footer__help_left}>
            <li>
              <Link href=''>Помощь</Link>
            </li>
            <li>
              <Link href=''>О проекте</Link>
            </li>
            <li>
              <Link href=''>Реклама на сайте</Link>
            </li>
            <li>
              <Link href=''>Помощь по сайту</Link>
            </li>
            <li>
              <Link href=''>Обратная связь</Link>
            </li>
            <li>
              <Link href=''>Соглашение о пользование</Link>
            </li>
          </ul>
          <div className={styles.footer__help_right}>
            <img
              alt='GameBlog'
              src='/icon-age.png'
            />
            <div className={styles.stopGame}>© 1999–2023 StopGame.ru</div>
            <span>
              Использование любых материалов сайта <br /> без согласования с
              администрацией запрещено
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
