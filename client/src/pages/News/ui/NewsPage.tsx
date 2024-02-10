import { useEffect, useState } from 'react'
import { IPublication } from '@model/interfaces'
import { useGetNewsListQuery } from '@store/api/newslist.api'
import { PostsSmall } from '@widgets/Posts'
import { Pagination, usePagination } from '@features/Pagination'

/**
 * The page news component for upload article list
 * artList - array article list from server
 * usePagination - custom hook for paginaton component.
 */
const NewsPage = () => {
	const [newsList, setNewsList] = useState<IPublication[]>([])
	const [totalItems, setTotalItems] = useState<number>()
	const [pageCount, setPageCount] = useState<number>()
	
	const {
		currentPage,
		btnDisabled,
		handleNextPageClick,
		handlePrevPageClick,
		onChangePage
	} = usePagination(pageCount)
	
	const { isLoading, data } = useGetNewsListQuery(currentPage)
	useEffect(() => {
		setTotalItems(data?.count)
		setNewsList(data?.items)
		setPageCount(data?.pageCount)
	}, [currentPage, data])

	return (
		<div>
			{newsList && <PostsSmall posts={newsList} to='news' />}
			<Pagination
				onNextPageClick={handleNextPageClick}
				onPrevPageClick={handlePrevPageClick}
				disable={btnDisabled}
				pageNum={pageCount}
				currentPage={currentPage}
				onChangePage={onChangePage}
			/>
		</div>
	)
}

export default NewsPage
