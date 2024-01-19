import { Link } from 'react-router-dom'
import styles from './tags.module.scss'
import { ITagsInterface } from '@/components/interfaces/Tags.interface'

/**
 * Reused component for rendering tags list of article or news or blog
 */
const Tags = (tags:ITagsInterface[]) => {
  const arr = Object.values(tags);
  return (
    <div className={styles.tags}>
        <span>Теги</span>
        <div className={styles.tagsWrapper}>
            {arr.map((tag) => <Link to={tag.tagUrl} key={tag.title} className={styles.tag}>{tag.title}</Link>)}
        </div>
    </div>
  )
}

export default Tags