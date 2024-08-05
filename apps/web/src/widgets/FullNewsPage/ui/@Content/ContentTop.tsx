import type { FC } from 'react'
import type { IUser } from '@model/interfaces'
import { Author } from '@entities/Author'
import styles from '../FullNews.module.scss'
import TopInfo from './@TopInfo/TopInfo'

interface TContentTopProps {
  title: string
  createdAt: string
  views: number
  comments: number
  authorData: IUser
}

/**
 * Component for rendering top content of fullnews, blog page
 * @param title - title of news, then transmitted in component TopInfo
 * @param createdAt - date of publication of the article on the website,
 * @param views - visits of article then transmitted in component TopInfo,
 * @param comments - tottal count of comments then transmitted in component TopInfo,
 * @param authorData - short data of author article then transmitted in coponent UserShortData
 */

const ContentTop: FC<TContentTopProps> = ({
  title,
  createdAt,
  views,
  comments,
  authorData
}) => {
  return (
    <div className={styles.contentBodyTop}>
      <TopInfo
        date={createdAt}
        title={title}
        totComments={comments}
        totViews={views}
      />
      <Author {...authorData} />
    </div>
  )
}

export default ContentTop
