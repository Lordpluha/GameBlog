import { FC } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { ChevronLeft } from 'lucide-react'
import { dateConverter } from '@/components/tools/DateConverter'
import { IOtherNewsNavigation } from '@/components/interfaces/OtherNewsNavigation.interface'
import styles from './newsnavigation.module.scss'

const PreviewNews:FC<IOtherNewsNavigation> = (previewNews) => {
  return (
    <div className={styles.otherNewsBlock}>
        <Link to={`/newsdata/${previewNews.seo}`} className={clsx(styles.newsNavigationLink, styles.newsNavigationLinkPrev)}>
            <p className={styles.newsNavigationText}>
                <ChevronLeft /> Предыдущая
            </p>
            <div className={styles.newsNavigationBlock}>
                <img className={styles.newsNavigationImage} src={previewNews.image} />
                <p className={styles.newsNavigationDate}>{dateConverter(previewNews.date)}</p>
                <p className={styles.newsNavigationTitle}>{previewNews.description}</p>
            </div>
        </Link>
    </div>
  )
}

export default PreviewNews