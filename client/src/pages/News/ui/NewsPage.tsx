import { useEffect, useState } from 'react'

import dal from '@/data/demoData.json'

import { PostsSmall } from '@widgets/Posts'

import { Pagination, usePagination } from '@features/Pagination'

import { INew } from '@model/interfaces'

/**
 * The page news component for upload article list
 * artList - array article list from server
 * usePagination - custom hook for paginaton component.
 */
const NewsPage = () => {
	const [newsList, setNewsList] = useState<INew[]>([])
	const {
		pageNum,
		currentPage,
		btnDisabled,
		handleNextPageClick,
		handlePrevPageClick,
		onChangePage
	} = usePagination(dal.newsData.length, 5)

	useEffect(() => {
		setNewsList([])
		dal.newsData
			/* select data for current page */
			.filter(
				(data, idx) => idx >= currentPage - 1 && idx <= currentPage + 3
			)
			.map(item => {
				setNewsList(prev => [
					...prev,
					{
						id: +item.id,
						slug: item.slug,
						title: item.title,
						commentsCount: +item.commentsCount,
						preview: item.preview,
						tags: item.tags,
						createdAt: +item.createdAt
					}
				])
			})
	}, [currentPage])
	return (
		<div>
			<PostsSmall posts={newsList} to='news' />
			<Pagination
				onNextPageClick={handleNextPageClick}
				onPrevPageClick={handlePrevPageClick}
				disable={btnDisabled}
				pageNum={pageNum}
				currentPage={currentPage}
				onChangePage={onChangePage}
			/>
		</div>
	)
}

export default NewsPage
