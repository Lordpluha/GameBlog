import { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import { dateConverter } from '@/components/tools/DateConverter'
import { IOtherNewsNavigation } from '@/components/interfaces/OtherNewsNavigation.interface'
import styles from './newsnavigation.module.scss'

const NextNews:FC<IOtherNewsNavigation> = (nextNews) => {
  return (
    <div className={styles.otherNewsBlock}>
        <Link to={`/newsdata/${nextNews.seo}`} className={clsx(styles.newsNavigationLink, styles.newsNavigationLinkNext)}>
        <p className={styles.newsNavigationText}>
            Следующая <ChevronRight />
        </p>
        <div className={styles.newsNavigationBlock}>
            <img className={styles.newsNavigationImage} src={nextNews.image} />
            <p className={styles.newsNavigationDate}>{dateConverter(nextNews.date)}</p>
            <p className={styles.newsNavigationTitle}>{nextNews.description}</p>
        </div>
        </Link>
    </div>
  )
}

export default NextNews