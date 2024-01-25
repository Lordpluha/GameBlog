import { FC } from 'react'
import { Eye, MessageCircleMore } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './topinfo.module.scss'
import { ITopInfo } from '@/components/interfaces/TopInfo.interface'
import { dateConverter } from '@/components/tools/DateConverter'
import ShareBtn from '../shareBtn/ShareBtn'
import BookmarkBtn from '../bookmark/BookmarBtn'

/**
 * Reused component for rendering the top part of the data of the full article
 * (date of publication, number of comments, shares, number of views),
 * used in the news, blog and a number of other pages of the site
 * @param date - date of pubblication
 * @param totComments - tottal count comments of news
 * @param totViews - tottal count views of news
 * @param title - title of news
 */
const TopInfo:FC<ITopInfo> = ({date, totComments, totViews, title}) => {
  const publicDate = dateConverter(date)

  return (
    <>
      <div className={styles.topinfo}>
          <p className={styles.topinfo_span}>{publicDate}</p>
          <Link to="#comments" className={styles.topinfo_a}><MessageCircleMore /> {totComments}</Link>
          <p className={styles.totalVews}><Eye /> {totViews}</p>
          <BookmarkBtn style={styles.topinfo_button} />
          <ShareBtn style={styles.topinfo_button} />
      </div>
      <h1>{title}</h1>
    </>
  )
}

export default TopInfo