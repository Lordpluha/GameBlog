import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

function NavigationRight() {
  return (
    <div className={styles.footer__list_right}>
      <div className={styles.list__part}>
        <h6>Игры</h6>
        <ul className={styles.list__fill}>
          <li>
            <Link to=''>Лучшие игры</Link>
          </li>
          <li>
            <Link to=''>Календарь</Link>
          </li>
          <li>
            <Link to=''>Каталог</Link>
          </li>
          <li>
            <Link to=''>Отзывы</Link>
          </li>
          <li>
            <Link to=''>Подборки игр</Link>
          </li>
          <li>
            <Link to=''>Факты</Link>
          </li>
        </ul>
      </div>
      <div className={styles.list__part}>
        <h6>Блоги</h6>
        <ul className={styles.list__fill}>
          <li>
            <Link to=''>Все</Link>
          </li>
          <li>
            <Link to=''>Лучшие за неделю</Link>
          </li>
          <li>
            <Link to=''>Победители косарей</Link>
          </li>
          <li>
            <Link to=''>+5</Link>
          </li>
          <li>
            <Link to=''>+100</Link>
          </li>
          <li>
            <Link to=''>StopGame</Link>
          </li>
        </ul>
      </div>
      <div className={styles.list__part}>
        <h6>Стримы</h6>
        <ul className={styles.list__fill}>
          <li>
            <Link to=''>Расписание</Link>
          </li>
          <li>
            <Link to=''>Записи</Link>
          </li>
          <li>
            <Link to=''>Кек</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavigationRight
