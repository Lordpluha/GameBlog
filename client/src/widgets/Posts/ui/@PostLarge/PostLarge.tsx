import { FC } from 'react'

import { type IPost } from '@model/interfaces'

import { Cover } from '@shared/ui'

import PostFooter from './@PostFooter/PostFooter'
import PostInfo from './@PostInfo/PostInfo'
import PostTitle from './@PostTitle/PostTitle'

type TPostLargeProps = { post: IPost }

/**
 * Renders a News component with the provided news data.
 * General usage in sidebar*
 *
 * @param {IPost} myNew - The new data to be rendered.
 * @return {JSX.Element} - The rendered News component.
 */
const PostLarge: FC<TPostLargeProps> = ({ post }) => {
	const { category, content, createdAt, preview, commentsCount, user } = post

	function addToBookmark() {}

	return (
		<div className='flex flex-col gap-4 max-w-[350px] bg-neutral-800 rounded-2xl overflow-hidden'>
			<Cover height='56em' width='100%' src={preview} />
			<div className='flex flex-col gap-4 p-3'>
				<PostInfo category={category} user={user} />
				<PostTitle content={content} />
				<PostFooter
					createdAt={createdAt}
					addToBookmark={addToBookmark}
					commentsCount={commentsCount}
				/>
			</div>
		</div>
	)
}

export default PostLarge
