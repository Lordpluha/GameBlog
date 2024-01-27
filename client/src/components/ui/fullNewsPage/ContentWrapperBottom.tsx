import UserShortData from '../userShortData/UserShortData'
import { IUserData } from '@/components/interfaces/extras/UserShortData.interface'
import { ITags } from '@/components/interfaces/Tags.interface'
import { FC } from 'react'
import Tags from '../tags/Tags'
import styles from './fullnews.module.scss'

type TContentWrapperProps = {
    authorData: IUserData,
    tags: ITags[]
}

/**
 * Component for rendering tags of article, news or blog page 
 * @param authorData - short data of author article then transmitted in coponent UserShortData, 
 * @param tags - tags data of article then transmitted in coponent Tags
 * otherNews - data for news navigation blocks (previous, next)
 */
const ContentWrapperBottom:FC<TContentWrapperProps> = ({authorData, tags}) => {
  return (
    <div className={styles.contentWrapperBottom}>
        <UserShortData {...authorData} />
        <Tags {...tags} />
    </div>
  )
}

export default ContentWrapperBottom