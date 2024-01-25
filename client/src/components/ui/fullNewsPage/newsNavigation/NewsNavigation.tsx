import { IOtherNewsNavigation } from '@/components/interfaces/OtherNewsNavigation.interface'
import PreviewNews from './PreviewNews'
import NextNews from './NextNews'
import styles from './newsnavigation.module.scss'

/**
 * Reused component thet is rendered if the user has other atricles in this category.
 * The component is navigation through the author's articles.
 * The component accepts only 2 values, these are the previous and next article from the current one
 */
const NewsNavigation = (otherNews:IOtherNewsNavigation[]) => {
  return (
    <div className={styles.newsNavigation}>
      <PreviewNews {...otherNews[0]} />
      <NextNews {...otherNews[1]} />
    </div>
  )
}

export default NewsNavigation