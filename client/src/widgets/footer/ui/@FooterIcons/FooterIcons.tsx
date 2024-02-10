import { Link } from 'react-router-dom'

import { Arrow, Steam, Telegram, VK, Youtube } from '@shared/ui'

import styles from './FooterIcons.module.scss'

const FooterIcons = () => {
	return (
		<ul className={styles.footer__icons}>
			<li>
				<Link className={styles.social_icon} to=''>
					<Youtube />
					<div className={styles.tooltip}>
						Группа StopGame на Youtube
					</div>
				</Link>
			</li>
			<li>
				<Link className={styles.social_icon} to=''>
					<VK />
					<div className={styles.tooltip}>Группа StopGame на VK</div>
				</Link>
			</li>
			<li>
				<div className={styles.dropdown}>
					<Telegram />
					<ul className={styles.dropdown_content}>
						<li>
							<Link to=''>StopGame.ru</Link>
							<Arrow />
						</li>
						<li>
							<Link to=''>StopGame.ru Новости</Link>
							<Arrow />
						</li>
					</ul>
				</div>
			</li>
			<li>
				<Link className={styles.social_icon} to=''>
					<Steam />
					<div className={styles.tooltip}>
						Страница StopGame на Steam
					</div>
				</Link>
			</li>
		</ul>
	)
}

export default FooterIcons
