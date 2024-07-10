import { FC } from 'react'
import { Link } from 'react-router-dom'

import { TTagsProps } from '../../model/@types'
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
					<Link to={tag.url} key={tag.title} className={styles.tag}>
						{tag.title}
					</Link>
				))}
			</div>
		</div>
	)
}

export default TagsLarge
