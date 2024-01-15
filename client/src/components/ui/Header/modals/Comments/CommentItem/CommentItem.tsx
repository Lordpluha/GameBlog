import { Link } from 'react-router-dom'

import { INewComment } from '@/interfaces/extras/NewComments.interface'

import styles from '../CommentsModal.module.scss'

/**
 * Component for rendering one comment block
 * @param link - link to the news for which the comment was created
 * @param title - news title
 * @param avatar - link to user avatar
 * @param login - user login
 * @param text - comment text
 */
const CommentItem = ({ link, title, avatar, login, text }: INewComment) => {
	return (
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
}

export default CommentItem
