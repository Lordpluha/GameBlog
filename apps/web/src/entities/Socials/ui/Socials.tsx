import { Link } from 'react-router-dom'

import { GoogleIcon, OkIcon, VKIcon, YandexIcon } from '@shared/ui'

import styles from './Social.module.scss'

const Socials = () => {
	return (
		<ul className={styles.list}>
			<li>
				<Link to='vk.com'>
					<VKIcon />
				</Link>
			</li>
			<li>
				<Link to='google.com'>
					<GoogleIcon />
				</Link>
			</li>
			<li>
				<Link to='#'>
					<YandexIcon />
				</Link>
			</li>
			<li>
				<Link to='#'>
					<OkIcon />
				</Link>
			</li>
		</ul>
	)
}

export default Socials
