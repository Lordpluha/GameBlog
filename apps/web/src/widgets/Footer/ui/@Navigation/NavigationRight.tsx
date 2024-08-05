import Link from 'next/link'
import styles from './Navigation.module.scss'

function NavigationRight() {
  return (
    <div className={styles.footer__list_right}>
      <div className={styles.list__part}>
        <h6>Игры</h6>
        <ul className={styles.list__fill}>
          <li>
            <Link href=''>Лучшие игры</Link>
          </li>
          <li>
            <Link href=''>Календарь</Link>
          </li>
          <li>
            <Link href=''>Каталог</Link>
          </li>
          <li>
            <Link href=''>Отзывы</Link>
          </li>
          <li>
            <Link href=''>Подборки игр</Link>
          </li>
          <li>
            <Link href=''>Факты</Link>
          </li>
        </ul>
      </div>
      <div className={styles.list__part}>
        <h6>Блоги</h6>
        <ul className={styles.list__fill}>
          <li>
            <Link href=''>Все</Link>
          </li>
          <li>
            <Link href=''>Лучшие за неделю</Link>
          </li>
          <li>
            <Link href=''>Победители косарей</Link>
          </li>
          <li>
            <Link href=''>+5</Link>
          </li>
          <li>
            <Link href=''>+100</Link>
          </li>
          <li>
            <Link href=''>StopGame</Link>
          </li>
        </ul>
      </div>
      <div className={styles.list__part}>
        <h6>Стримы</h6>
        <ul className={styles.list__fill}>
          <li>
            <Link href=''>Расписание</Link>
          </li>
          <li>
            <Link href=''>Записи</Link>
          </li>
          <li>
            <Link href=''>Кек</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationRight
