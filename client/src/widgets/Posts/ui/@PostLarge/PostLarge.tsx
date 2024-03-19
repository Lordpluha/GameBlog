import { FC } from 'react'

import { IPublication } from '@model/interfaces'

import { Cover } from '@shared/ui'

import PostFooter from './@PostFooter/PostFooter'
import PostInfo from './@PostInfo/PostInfo'
import PostTitle from './@PostTitle/PostTitle'

type TPostLargeProps = { post: IPublication }

/**
 * Renders a News component with the provided news data.
 * General usage in sidebar*
 *
 * @param {IPost} myNew - The new data to be rendered.
 * @return {JSX.Element} - The rendered News component.
 */
const PostLarge: FC<TPostLargeProps> = ({ post }) => {
	const { title, createdAt, preview, _count, author, categories } = post

	function addToBookmark() {}

	return (
		<div className='flex flex-col gap-4 bg-neutral-800 rounded-2xl overflow-hidden h-[40vh]'>
			<Cover height='50%' width='100%' src={preview} />
			<div className='flex flex-col gap-4 p-3'>
				{/* <PostInfo category={categories[0]} user={author} /> */}
				<PostTitle content={title} />
				<PostFooter
					createdAt={createdAt}
					addToBookmark={addToBookmark}
					commentsCount={_count.comments}
				/>
			</div>
		</div>
	)
}

export default PostLarge
