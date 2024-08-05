import type { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ChevronLeft } from 'lucide-react'
import { dateConverter } from '@shared/lib'
import type { INewsNavigation } from '../../../model/@interfaces'
import styles from '../NewsNavigation.module.scss'

const PreviewNews: FC<INewsNavigation> = previewNews => {
  return (
    <div className={styles.otherNewsBlock}>
      <Link
        className={clsx(
          styles.newsNavigationLink,
          styles.newsNavigationLinkPrev
        )}
        to={`/newsdata/${previewNews.seo}`}
      >
        <p className={styles.newsNavigationText}>
          <ChevronLeft /> Предыдущая
        </p>
        <div className={styles.newsNavigationBlock}>
          <img
            className={styles.newsNavigationImage}
            src={previewNews.image}
          />
          <p className={styles.newsNavigationDate}>
            {dateConverter(previewNews.date)}
          </p>
          <p className={styles.newsNavigationTitle}>
            {previewNews.description}
          </p>
        </div>
      </Link>
    </div>
  )
}

export default PreviewNews
