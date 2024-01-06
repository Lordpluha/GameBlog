import { Link } from 'react-router-dom'
import styles from './tags.module.scss'
import { ITagsInterface } from '@/components/interfaces/Tags.interface'

/**
 * Reused component for rendering tags list of article or news or blog
 */
const Tags = (tags:ITagsInterface[]) => {
  return (
    <div className={styles.tags}>
        <span>Теги</span>
        <div className={styles.tagsWrapper}>
            {tags.map(tag => <Link to={tag.tagUrl} className={styles.tag}>{tag.title}</Link>)}
        </div>
    </div>
  )
}

export default Tags