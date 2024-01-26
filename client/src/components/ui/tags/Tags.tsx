import { Link } from 'react-router-dom'
import styles from './tags.module.scss'
import { ITags } from '@/components/interfaces/Tags.interface'
import { FC } from 'react';

/**
 * Reused component for rendering tags list of article or news or blog
 */
const Tags:FC<ITags[]> = (tags) => {
  const arr = Object.values(tags);
  return (
    <div className={styles.tags}>
        <p className={styles.tags__p}>Теги</p>
        <div className={styles.tagsWrapper}>
            {arr.map((tag) => <Link to={tag.tagUrl} key={tag.title} className={styles.tag}>{tag.title}</Link>)}
        </div>
    </div>
  )
}

export default Tags