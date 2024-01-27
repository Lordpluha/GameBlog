import { IUserData } from '@/components/interfaces/extras/UserShortData.interface'
import TopInfo from '../contentTopInfo/TopInfo'
import UserShortData from '../userShortData/UserShortData'
import styles from './fullnews.module.scss'
import { FC } from 'react'

type TContentTopProps = {
    title: string
    publishedDate:number
    views:number
    comments:number
    authorData:IUserData
}

/**
 * Component for rendering top content of fullnews, blog page
 * @param title - title of news, then transmitted in component TopInfo
 * @param publishedDate - date of publication of the article on the website, 
 * @param views - visits of article then transmitted in component TopInfo, 
 * @param comments - tottal count of comments then transmitted in component TopInfo, 
 * @param authorData - short data of author article then transmitted in coponent UserShortData
 */

const ContentTop:FC<TContentTopProps> = ({title, publishedDate, views, comments, authorData}) => {
  return (
    <div className={styles.contentBodyTop}>
        <TopInfo date={publishedDate} totComments={comments} totViews={views} title={title} />
        <UserShortData {...authorData} />
    </div>
  )
}

export default ContentTop