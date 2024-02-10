import { useEffect, useState } from 'react'

import { useGetNewsListQuery } from '@/api/newslist.api'

import { IPublication } from '@model/interfaces'

import { PostsSmall } from '@widgets/Posts'

import { Pagination, usePagination } from '@features/Pagination'

/**
 * The page news component for upload article list
 * artList - array article list from server
 * usePagination - custom hook for paginaton component.
 */
const NewsPage = () => {
	const [newsList, setNewsList] = useState<IPublication[]>([])
	const [totalItems, setTotalItems] = useState<number>(0)
	const [pageNum, setPageNum] = useState<number>(0)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	if (!isLoading) return <p>Loading .... </p>

	const {
		currentPage,
		btnDisabled,
		handleNextPageClick,
		handlePrevPageClick,
		onChangePage
	} = usePagination(totalItems)

	useEffect(() => {
		const { isLoading, data } = useGetNewsListQuery(currentPage)
		setIsLoading(isLoading)
		setNewsList(data?.items)
		setTotalItems(data?.count)
		setPageNum(data?.pageCount)
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
