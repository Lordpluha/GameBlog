import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { type IComment } from '@model/interfaces'

import styles from './CommentCard.module.scss'

/**
 * Component for rendering one comment block
 * @param author - author short data
 * @param article - article short data
 * @param text - comment text
 */
const CommentCard: FC<IComment> = ({ text, article, author }) => (
	<Link to={`news/${article.slug}`}>
		<div className={styles.commentItem}>
			<h6 className={styles.commentTitle}>{article.title}</h6>
			<div className='flex items-center text-[14px]'>
				<img
					className='rounded-full'
					src={author.avatar}
					alt={author.login}
				/>
				<p className={styles.commentUserLogin}>{author.login}</p>
			</div>
			<p className={styles.commentText}>{text}</p>
		</div>
	</Link>
)

export default CommentCard
