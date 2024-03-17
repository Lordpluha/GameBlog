import { Link } from 'react-router-dom'

import styles from './Navigation.module.scss'

const NavigationLeft = () => {
	return (
		<div className={styles.footer__list_left}>
			<div className={styles.list__part}>
				<h6>Новости</h6>
				<ul className={styles.list__fill}>
					<li>
						<Link to=''>Все</Link>
					</li>
					<li>
						<Link to=''>PC</Link>
					</li>
					<li>
						<Link to=''>Xbox</Link>
					</li>
					<li>
						<Link to=''>Xbox Series X|S</Link>
					</li>
					<li>
						<Link to=''>PlayStation 4</Link>
					</li>
					<li>
						<Link to=''>PlayStation 5</Link>
					</li>
					<li>
						<Link to=''>Stadia</Link>
					</li>
					<li>
						<Link to=''>Xbox</Link>
					</li>
				</ul>
			</div>

			<div className={styles.list__part}>
				<h6>Читать</h6>
				<ul className={styles.list__fill}>
					<li>
						<Link to=''>Главная</Link>
					</li>
					<li>
						<Link to=''>Статьи</Link>
					</li>
					<li>
						<Link to=''>Обзоры</Link>
					</li>
					<li>
						<Link to=''>Превью</Link>
					</li>
					<li>
						<Link to=''>Первая полоса</Link>
					</li>
					<li>
						<Link to=''>Интервью</Link>
					</li>
					<li>
						<Link to=''>Подборки</Link>
					</li>
				</ul>
			</div>

			<div className={styles.list__part}>
				<h6>Cмотреть</h6>
				<ul className={styles.list__fill}>
					<li>
						<Link to=''>Все</Link>
					</li>
					<li>
						<Link to=''>Главная</Link>
					</li>
					<li>
						<Link to=''>Видеообзоры</Link>
					</li>
					<li>
						<Link to=''>История серии</Link>
					</li>
					<li>
						<Link to=''>Рубрикатор</Link>
					</li>
					<li>
						<Link to=''>Авторские видео</Link>
					</li>
					<li>
						<Link to=''>Инфакт</Link>
					</li>
					<li>
						<Link to=''>Трейлеры</Link>
					</li>
					<li>
						<Link to=''>Все видео</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default NavigationLeft
