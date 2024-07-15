import type { FC } from 'react'
import { Link } from 'react-router-dom'
import type { TTagsProps } from '../../model/@types'
import styles from './TagsLarge.module.scss'

/**
 * Reused component for rendering tags list of article or news or blog
 */
const TagsLarge: FC<TTagsProps> = ({ tags }) => {
  return (
    <div className={styles.tags}>
      <p className={styles.tags__p}>Теги</p>
      <div className={styles.tagsWrapper}>
        {tags.map(tag => (
          <PillLarge />
        ))}
      </div>
    </div>
  )
}

export default TagsLarge
