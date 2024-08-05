import { type FC } from 'react'
import Link from 'next/link'
import type IComment from '@entities/Comment/models/Comment.model'
import styles from './CommentCard.module.scss'

/**
 * Component for rendering one comment block
 * @param author - author short data
 * @param article - article short data
 * @param text - comment text
 */
const CommentCard: FC<IComment> = ({ text, article, author }) => (
  <Link href={`news/${article?.slug}`}>
    <div className={styles.commentItem}>
      <h6 className={styles.commentTitle}>{article.title}</h6>
      <div className='flex items-center text-[14px]'>
        <img
          alt={author.login}
          className='rounded-full'
          src={author.avatar}
        />
        <p className={styles.commentUserLogin}>{author.login}</p>
      </div>
      <p className={styles.commentText}>{text}</p>
    </div>
  </Link>
)

export default CommentCard
