import { FC } from 'react'
import { Link } from 'react-router-dom'

import IComment from '@entities/model/interfaces/Comment.interface'

import styles from './CommentCard.module.scss'

/**
 * Component for rendering one comment block
 * @param link - link to the news for which the comment was created
 * @param title - news title
 * @param avatar - link to user avatar
 * @param login - user login
 * @param text - comment text
 */
const CommentCard: FC<IComment> = ({ link, title, avatar, login, text }) => (
	<Link to={link}>
		<div className={styles.commentItem}>
			<h6 className={styles.commentTitle}>{title}</h6>
			<div className='flex items-center text-[14px]'>
				<img className='rounded-full' src={avatar} alt={login} />
				<p className={styles.commentUserLogin}>{login}</p>
			</div>
			<p className={styles.commentText}>{text}</p>
		</div>
	</Link>
)

export default CommentCard
