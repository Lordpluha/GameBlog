import { Link } from 'react-router-dom'

import { Arrow, Steam, Telegram, VKIcon, Youtube } from '@shared/ui'

import styles from './FooterIcons.module.scss'

const FooterIcons = () => {
	return (
		<ul className={styles.footer__icons}>
			<li>
				<Youtube />
				<div className={styles.tooltip}>Группа StopGame на Youtube</div>
			</li>
			<li>
				<VKIcon />
				<div className={styles.tooltip}>Группа StopGame на VK</div>
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
				<Steam />
				<div className={styles.tooltip}>Страница StopGame на Steam</div>
			</li>
		</ul>
	)
}

export default FooterIcons
