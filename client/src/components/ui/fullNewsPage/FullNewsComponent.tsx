import UserShortData from '../userShortData/UserShortData'
import Tags from '../tags/Tags'
import styles from './fullnews.module.scss'
import TopInfo from '../contentTopInfo/TopInfo'
import NewsNavigation from './newsNavigation/NewsNavigation'
import { IFullNews } from '@/components/interfaces/FullNews.interface'
import { IOtherNewsNavigation } from '@/components/interfaces/OtherNewsNavigation.interface'
import { FC } from 'react'

type TFullNewsProps = {
  fullNewsData: IFullNews,
  otherNews: IOtherNewsNavigation[]
}

/**
 * Reused component for rendering full article, news or blog page
 * fullNewsData - full data when opening an article
 * @param title - title of news, then transmitted in component TopInfo
 * @param fullText - full text on article,
 * @param publishedDate - date of publication of the article on the website, 
 * @param views - visits of article then transmitted in component TopInfo, 
 * @param comments - tottal count of comments then transmitted in component TopInfo, 
 * @param authorData - short data of author article then transmitted in coponent UserShortData, 
 * @param tags - tags data of article then transmitted in coponent Tags
 * otherNews - data for news navigation blocks (previous, next)
 */
const FullNewsComponent:FC<TFullNewsProps> = (props) => {
  const {title, fullText, publishedDate, views, comments, authorData, tags} = props.fullNewsData
  
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
      <NewsNavigation {...props.otherNews} />
    </section>
  )
}

export default FullNewsComponent