import type { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import { dateConverter } from '@shared/lib'
import type { INewsNavigation } from '../../../model/@interfaces'
import styles from '../NewsNavigation.module.scss'

const NextNews: FC<INewsNavigation> = nextNews => {
  return (
    <div className={styles.otherNewsBlock}>
      <Link
        className={clsx(
          styles.newsNavigationLink,
          styles.newsNavigationLinkNext
        )}
        to={`/newsdata/${nextNews.seo}`}
      >
        <p className={styles.newsNavigationText}>
          Следующая <ChevronRight />
        </p>
        <div className={styles.newsNavigationBlock}>
          <img
            className={styles.newsNavigationImage}
            src={nextNews.image}
          />
          <p className={styles.newsNavigationDate}>
            {dateConverter(nextNews.date)}
          </p>
          <p className={styles.newsNavigationTitle}>{nextNews.description}</p>
        </div>
      </Link>
    </div>
  )
}

export default NextNews
