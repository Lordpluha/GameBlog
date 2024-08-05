import type { FC } from 'react'
import type { ITag, IUser } from '@model/interfaces'
import { Author } from '@entities/Author'
import { TagsSmall } from '@features/FilterByTag'
import styles from '../FullNews.module.scss'

interface TContentWrapperProps {
  authorData: IUser
  tags: ITag[]
}

/**
 * Component for rendering tags of article, news or blog page
 * @param authorData - short data of author article then transmitted in coponent UserShortData,
 * @param tags - tags data of article then transmitted in coponent Tags
 * otherNews - data for news navigation blocks (previous, next)
 */
const ContentWrapperBottom: FC<TContentWrapperProps> = ({
  authorData,
  tags
}) => {
  return (
    <div className={styles.contentWrapperBottom}>
      <Author {...authorData} />
      <TagsSmall tags={tags} />
    </div>
  )
}

export default ContentWrapperBottom
