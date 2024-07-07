import { FC } from 'react'

import { useGetNewsByPopularityQuery } from '@store/index'

import { TagsLarge } from '@features/FilterByTag'

import PostLarge from './@PostLarge/PostLarge'

const PostsLarge: FC = () => {
	const {
		data: resp,
		isLoading,
		isError,
		error
	} = useGetNewsByPopularityQuery(8)

	if (isError)
		return (
			<h1>
				{error?.status} - {error?.message}
			</h1>
		)

	if (isLoading) return <h1>Loading...</h1>

	const { items: posts } = resp!

	return (
		<div>
			<TagsLarge tags={[]} />
			<div className='flex flex-col gap-y-8'>
				{posts && (
					<>
						{posts.map(el => (
							<PostLarge post={el} key={el.slug} />
						))}
					</>
				)}
			</div>
		</div>
	)
}

export default PostsLarge
