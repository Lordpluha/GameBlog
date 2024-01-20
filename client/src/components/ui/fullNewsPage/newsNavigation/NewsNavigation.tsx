import { Link } from 'react-router-dom'
import styles from './newsnavigation.module.scss'
import { clsx } from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { IOtherNewsNavigation } from '@/components/interfaces/OtherNewsNavigation.interface'
import { dateConverter } from '@/components/tools/DateConverter'

/**
 * Reused component thet is rendered if the user has other atricles in this category.
 * The component is navigation through the author's articles.
 * The component accepts only 2 values, these are the previous and next article from the current one
 */
const NewsNavigation = (otherNews:IOtherNewsNavigation[]) => {
  
  return (
    <div className={styles.newsNavigation}>
      <Link to={`/newsdata/${otherNews[0].seo}`} className={clsx(styles.newsNavigationLink, styles.newsNavigationLinkPrev)}>
        <span className={styles.newsNavigationText}>
          <ChevronLeft /> Предыдущая
        </span>
        <div className={styles.newsNavigationBlock}>
          <picture className={styles.newsNavigationImage}>
            <img src={otherNews[0].image} />
          </picture>
          <span className={styles.newsNavigationDate}>{dateConverter(otherNews[0].date)}</span>
          <span className={styles.newsNavigationTitle}>{otherNews[0].description}</span>
        </div>
      </Link>
      <Link to={`/newsdata/${otherNews[1].seo}`} className={clsx(styles.newsNavigationLink, styles.newsNavigationLinkNext)}>
        <span className={styles.newsNavigationText}>Следующая <ChevronRight />
        </span>
        <div className={styles.newsNavigationBlock}>
          <picture className={styles.newsNavigationImage}>
            <img src={otherNews[1].image} />
          </picture>
          <span className={styles.newsNavigationDate}>{dateConverter(otherNews[1].date)}</span>
          <span className={styles.newsNavigationTitle}>{otherNews[1].description}</span>
        </div>
      </Link>
    </div>
  )
}

export default NewsNavigation