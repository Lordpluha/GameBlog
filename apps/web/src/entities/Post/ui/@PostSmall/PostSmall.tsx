import type { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageCircleMore } from 'lucide-react'
import { type IPublication } from '@model/interfaces'
import { dateConverter } from '@shared/lib'
import TagsList from './@TagsList/TagsList'
import styles from './PostSmall.module.scss'

interface TPostSmallProps { post: IPublication; to: string }

/**
 * Item of PostsSmall component represent post element
 * @param {IPublication} IPost
 */
const PostSmall: FC<TPostSmallProps> = ({ post, to }) => {
  const navigate = useNavigate()

  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    // e.stopPropagation()
    navigate(`/${to}/${post.slug}`)
  }

  return (
    <article className={styles.articleItemBlock}>
      <div className={styles.articleItemImageBlock}>
        <img
          alt={`${post.title} article cover`}
          className={styles.articleItemImage}
          onMouseDown={clickHandler}
          src={post.preview}
        />
      </div>
      <div className={styles.articleItemDescription}>
        <h1
          className={styles.articleItemTitle}
          onMouseDown={clickHandler}
        >
          {post.title}
        </h1>

        <div className='pr-4'>
          <TagsList
            className={styles.articleItemCategory}
            tags={post.tags}
          />
          <div className='flex flex-row justify-between'>
            <p className='text-[17px] text-gray-500'>
              {dateConverter(post.createdAt)}
            </p>

            {/* Change to ToComment feature */}
            <div
              className={styles.articleItemComments}
              onMouseDown={clickHandler}
            >
              <MessageCircleMore />
              <p className='pl-1'>{post._count.comments}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostSmall
