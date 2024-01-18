import { Bookmark, Eye, MessageCircleMore } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './topinfo.module.scss'
import { ITopInfoInterface } from '@/components/interfaces/TopInfo.interface'
import { dateConverter } from '@/components/tools/DateConverter'
import ShareBtn from '../shareBtn/ShareBtn'

/**
 * Reused component for rendering the top part of the data of the full article
 * (date of publication, number of comments, shares, number of views),
 * used in the news, blog and a number of other pages of the site
 */
const TopInfo = ({date, totComments, totViews, title}:ITopInfoInterface) => {
  const publicDate = dateConverter(date)

  return (
    <>
      <div className={styles.topinfo}>
          <span>{publicDate}</span>
          <Link to="#comments"><MessageCircleMore /> {totComments}</Link>
          <span><Eye /> {totViews}</span>
          <button><Bookmark /></button>
          <ShareBtn />
      </div>
      <h1>{title}</h1>
    </>
  )
}

export default TopInfo