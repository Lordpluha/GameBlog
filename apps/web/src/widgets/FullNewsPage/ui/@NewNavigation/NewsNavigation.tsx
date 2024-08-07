//import { IOtherNewsNavigation } from '@/components/interfaces/OtherNewsNavigation.interface'
import type { INew } from '@model/interfaces'
import NextNews from './@NextNew/NextNews'
import PreviewNews from './@PreviousNew/PreviousNew'
import styles from './NewsNavigation.module.scss'

/**
 * Reused component thet is rendered if the user has other atricles in this category.
 * The component is navigation through the author's articles.
 * The component accepts only 2 values, these are the previous and next article from the current one
 */
function NewsNavigation(otherNews: INew[]) {
  return (
    <div className={styles.newsNavigation}>
      <PreviewNews {...otherNews[0]} />
      <NextNews {...otherNews[1]} />
    </div>
  )
}

export default NewsNavigation
