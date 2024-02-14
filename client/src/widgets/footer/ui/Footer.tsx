import { Link } from 'react-router-dom'

import { Logo } from '@shared/ui'

import FooterIcons from './@FooterIcons/FooterIcons'
import NavigationLeft from './@Navigation/NavigationLeft'
import NavigationRight from './@Navigation/NavigationRight'
import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer>
			<div className={styles.footer__information}>
				<div className={styles.footer__box}>
					<div className={styles.footer__logo}>
						<Logo />
						<p>Рассказываем вам о видеоиграх</p>
					</div>
					<FooterIcons />

					<NavigationLeft />

					<NavigationRight />
				</div>

				<div className={styles.footer__help}>
					<ul className={styles.footer__help_left}>
						<li>
							<Link to=''>Помощь</Link>
						</li>
						<li>
							<Link to=''>О проекте</Link>
						</li>
						<li>
							<Link to=''>Реклама на сайте</Link>
						</li>
						<li>
							<Link to=''>Помощь по сайту</Link>
						</li>
						<li>
							<Link to=''>Обратная связь</Link>
						</li>
						<li>
							<Link to=''>Соглашение о пользование</Link>
						</li>
					</ul>
					<div className={styles.footer__help_right}>
						<img src='/icon-age.png' alt='GameBlog' />
						<div className={styles.stopGame}>
							© 1999–2023 StopGame.ru
						</div>
						<span>
							Использование любых материалов сайта <br /> без
							согласования с администрацией запрещено
						</span>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
