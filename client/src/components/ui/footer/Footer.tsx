import { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../Logo/Logo'
import styles from '../footer/Footer.module.scss'
import Steam from '../icons/socials/Steam'
import Telegram from '../icons/socials/Telegram'
import VK from '../icons/socials/VK'
import Youtube from '../icons/socials/Youtube'

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__information}>
				<div className={styles.footer__box}>
					<div className={styles.footer__logo}>
						<Logo />
						<p className='text-[#8B8D8E]'>
							Рассказываем вам о видеоиграх
						</p>
					</div>
					<div className={styles.footer__icons}>
						<ul className={styles.footer__icons}>
							<li>
								<Youtube />
							</li>
							<li>
								<VK />
								<div className={styles.tooltip}>
									Группа StopGame на VK
								</div>
							</li>
							<li>
								<div className={styles.dropdown}>
									<Telegram />
									<ul className={styles.dropdown_content}>
										<li>
											<Link to=''>StopGame.ru</Link>
										</li>
										<li>
											<Link to=''>
												StopGame.ru Новости
											</Link>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<Steam />
								<div className={styles.tooltip}>
									Страница StopGame на Steam
								</div>
							</li>
						</ul>
					</div>

					<div className={styles.footer__list_left}>
						<div className={styles.list__part}>
							<h6>Новости</h6>
							{/* ul или div? */}
							<div className={styles.list__fill}>
								<Link to=''>Все</Link>
								<Link to=''>PC</Link>
								<Link to=''>Xbox</Link>
								<Link to=''>Xbox Series X|S</Link>
								<Link to=''>PlayStation 4</Link>
								<Link to=''>PlayStation 5</Link>
								<Link to=''>Stadia</Link>
								<Link to=''>Xbox</Link>
							</div>
						</div>

						<div className={styles.list__part}>
							<h6>Читать</h6>
							<ul className={styles.list__fill}>
								<Link to=''>Главная</Link>
								<Link to=''>Статьи</Link>
								<Link to=''>Обзоры</Link>
								<Link to=''>Превью</Link>
								<Link to=''>Первая полоса</Link>
								<Link to=''>Интервью</Link>
								<Link to=''>Подборки</Link>
							</ul>
						</div>
						<div className={styles.list__part}>
							<h6>Cмотреть</h6>
							<ul className={styles.list__fill}>
								<Link to=''>Все</Link>
								<Link to=''>Главная</Link>
								<Link to=''>Видеообзоры</Link>
								<Link to=''>История серии</Link>
								<Link to=''>Рубрикатор</Link>
								<Link to=''>Авторские видео</Link>
								<Link to=''>Инфакт</Link>
								<Link to=''>Трейлеры</Link>
								<Link to=''>Все видео</Link>
							</ul>
						</div>
					</div>
					<div className={styles.footer__list_right}>
						<div className={styles.list__part}>
							<h6>Игры</h6>
							<ul className={styles.list__fill}>
								<Link to=''>Лучшие игры</Link>
								<Link to=''>Календарь</Link>
								<Link to=''>Каталог</Link>
								<Link to=''>Отзывы</Link>
								<Link to=''>Подборки игр</Link>
								<Link to=''>Факты</Link>
							</ul>
						</div>
						<div className={styles.list__part}>
							<h6>Блоги</h6>
							<ul className={styles.list__fill}>
								<Link to=''>Все</Link>
								<Link to=''>Лучшие за неделю</Link>
								<Link to=''>Победители косарей</Link>
								<Link to=''>+5</Link>
								<Link to=''>+100</Link>
								<Link to=''>StopGame</Link>
							</ul>
						</div>
						<div className={styles.list__part}>
							<h6>Стримы</h6>
							<ul className={styles.list__fill}>
								<Link to=''>Расписание</Link>
								<Link to=''>Записи</Link>
								<Link to=''>Кек</Link>
							</ul>
						</div>
					</div>
				</div>

				<div className={styles.footer__help}>
					<div className={styles.footer__help_left}>
						<Link to=''>Помощь</Link>
						<Link to=''>О проекте</Link>
						<Link to=''>Реклама на сайте</Link>
						<Link to=''>Помощь по сайту</Link>
						<Link to=''>Обратная связь</Link>
						<Link to=''>Соглашение о пользование</Link>
					</div>
					<div className={styles.footer__help_right}>
						<img
							src='/src/stories/assets/icon-age.png'
							alt='GameBlog'
						/>
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
		</div>
	)
}
