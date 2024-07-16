import Link from 'next/link'
import styles from './Navigation.module.scss'

function NavigationLeft() {
  return (
    <div className={styles.footer__list_left}>
      <div className={styles.list__part}>
        <h6>Новости</h6>
        <ul className={styles.list__fill}>
          <li>
            <Link href=''>Все</Link>
          </li>
          <li>
            <Link href=''>PC</Link>
          </li>
          <li>
            <Link href=''>Xbox</Link>
          </li>
          <li>
            <Link href=''>Xbox Series X|S</Link>
          </li>
          <li>
            <Link href=''>PlayStation 4</Link>
          </li>
          <li>
            <Link href=''>PlayStation 5</Link>
          </li>
          <li>
            <Link href=''>Stadia</Link>
          </li>
          <li>
            <Link href=''>Xbox</Link>
          </li>
        </ul>
      </div>

      <div className={styles.list__part}>
        <h6>Читать</h6>
        <ul className={styles.list__fill}>
          <li>
            <Link href=''>Главная</Link>
          </li>
          <li>
            <Link href=''>Статьи</Link>
          </li>
          <li>
            <Link href=''>Обзоры</Link>
          </li>
          <li>
            <Link href=''>Превью</Link>
          </li>
          <li>
            <Link href=''>Первая полоса</Link>
          </li>
          <li>
            <Link href=''>Интервью</Link>
          </li>
          <li>
            <Link href=''>Подборки</Link>
          </li>
        </ul>
      </div>

      <div className={styles.list__part}>
        <h6>Cмотреть</h6>
        <ul className={styles.list__fill}>
          <li>
            <Link href=''>Все</Link>
          </li>
          <li>
            <Link href=''>Главная</Link>
          </li>
          <li>
            <Link href=''>Видеообзоры</Link>
          </li>
          <li>
            <Link href=''>История серии</Link>
          </li>
          <li>
            <Link href=''>Рубрикатор</Link>
          </li>
          <li>
            <Link href=''>Авторские видео</Link>
          </li>
          <li>
            <Link href=''>Инфакт</Link>
          </li>
          <li>
            <Link href=''>Трейлеры</Link>
          </li>
          <li>
            <Link href=''>Все видео</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationLeft
