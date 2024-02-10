import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { MessageCircleMore } from 'lucide-react'

import { type IPublication } from '@model/interfaces'

import { dateConverter } from '@shared/lib'

import TagsList from './@TagsList/TagsList'
import styles from './PostSmall.module.scss'

type TPostSmallProps = { post: IPublication; to: string }

/**
 * Item of PostsSmall component represent post element
 * @param {IPublication} IPost
 */
const PostSmall: FC<TPostSmallProps> = ({ post, to }) => {
	const navigate = useNavigate()

	const clickHandler = (e: MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		navigate(`/${to}/${post.slug}`)
	}

	return (
		<article
			onClick={e => {
				clickHandler(e)
			}}
			className={styles.articleItemBlock}
		>
			<div className={styles.articleItemImageBlock}>
				<img
					className={styles.articleItemImage}
					src={post.preview}
					alt={`${post.title} article cover`}
				/>
			</div>
			<div className={styles.articleItemDescription}>
				<h1
					onClick={e => {
						clickHandler(e)
					}}
					className={styles.articleItemTitle}
				>
					{post.title}
				</h1>

				<div className='pr-4'>
					<TagsList
						tags={post.tags}
						className={styles.articleItemCategory}
					/>
					<div className='flex flex-row justify-between'>
						<p className='text-gray-500 text-[17px]'>
							{dateConverter(post.createdAt)}
						</p>
						<div
							className={styles.articleItemComments}
							onClick={e => {
								clickHandler(e)
							}}
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
