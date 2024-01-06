import UserShortData from '../userShortData/UserShortData'
import Tags from '../tags/Tags'
import styles from './fullnews.module.scss'
import TopInfo from '../contentTopInfo/TopInfo'
import NewsNavigation from './newsNavigation/NewsNavigation'
import { IFullNewsInterface } from '@/components/interfaces/FullNews.interface'

/**
 * Reused component for rendering full article, news or blog page
 */
const FullNewsComponent = ({articleId, category, title, fullText, publishedDate, views, comments, authorData, otherNews, tags}:IFullNewsInterface) => {
  return (
    <section className={styles.contentBody}>
      <div className={styles.contentWrapper}>
        <div className={styles.contentBodyTop}>
          <TopInfo date={publishedDate} totComments={comments} totViews={views} title={title} />
          <div className={styles.authorinfo}>
            <UserShortData {...authorData} />
          </div>
        </div>
        <div className={styles.newsfulltext}>
          <p>{fullText}</p>
        </div>
        <div className={styles.contentWrapperBottom}>
          <div className={styles.authorinfo}>
            <UserShortData {...authorData} />
          </div>
          <Tags {...tags} />
        </div>
      </div>
      {otherNews && <NewsNavigation {...otherNews} />}
    </section>
  )
}

export default FullNewsComponent