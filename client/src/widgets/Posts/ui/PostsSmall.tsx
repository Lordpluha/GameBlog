import { FC, useState } from 'react'

import { useGetNewsListQuery } from '@store/index'

import { Pagination } from '@features/Pagination'

import PostSmall from './@PostSmall/PostSmall'

const PostsSmall: FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)
	const {
		data: resp,
		isLoading,
		isError,
		error
	} = useGetNewsListQuery(currentPage)

	if (isError)
		return (
			<h1>
				{error?.status} - {error?.message}
			</h1>
		)

	if (isLoading) return <h1>Loading...</h1>

	const { items: posts, count: totalPosts, pageCount: totalPages } = resp!

	return (
		<div className='flex flex-col'>
			{posts && totalPosts != 0 ? (
				<>
					<div>
						{posts.map(el => (
							<PostSmall post={el} to='news' key={el.slug} />
						))}
					</div>
					{totalPages != 1 && (
						<Pagination
							totalPages={totalPages}
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
						/>
					)}
				</>
			) : (
				<h1>Новостей нет</h1>
			)}
		</div>
	)
}

export default PostsSmall
