import { Link } from 'react-router-dom'

import Steam from '@features/ToggleTheme/ui/@ThemeModal/@elements/socials/Steam'
import Telegram from '@features/ToggleTheme/ui/@ThemeModal/@elements/socials/Telegram'
import VK from '@features/ToggleTheme/ui/@ThemeModal/@elements/socials/VK'
import Youtube from '@features/ToggleTheme/ui/@ThemeModal/@elements/socials/Youtube'

import styles from './FooterIcons.module.scss'

const FooterIcons = () => {
	return (
		<ul className={styles.footer__icons}>
			<li>
				<Youtube />
			</li>
			<li>
				<VK />
				<div className={styles.tooltip}>Группа StopGame на VK</div>
			</li>
			<li>
				<div className={styles.dropdown}>
					<Telegram />
					<ul className={styles.dropdown_content}>
						<li>
							<Link to=''>StopGame.ru</Link>
						</li>
						<li>
							<Link to=''>StopGame.ru Новости</Link>
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
