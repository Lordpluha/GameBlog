import { useCallback, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 *
 * @param contentLength - the count of item recevied from server
 * @param ITEM_PER_PAGE - number of elements per page
 * currentPage - current page
 * btnDisabled - active or passive state of the next and previous buttons
 * handleNextPageClick - action handler when the button is clicked next
 * handlePrevPageClick - action handler when the button is clicked previus
 * onChangePage - action handler when a page button is clicked
 *
 * @returns currentPage, btnDisabled, handleNextPageClick, handlePrevPageClick, onChangePage
 */
const usePagination = (pageCount: number) => {
	const location = useLocation()
	const navigate = useNavigate()
	const urlPage = !location.search.split('=')[1] ? 1 : +location.search.split('=')[1]
	const [currentPage, setCurrentPage] = useState<number>(
		urlPage > pageCount ? pageCount : urlPage
	)

	const handleNextPageClick = useCallback(() => {
		const next = currentPage + 1
		const total = pageCount > 1 ? pageCount : currentPage
		navigate(`/news?page=${next}`)
		setCurrentPage(next <= total ? next : currentPage)
	}, [currentPage])

	const handlePrevPageClick = useCallback(() => {
		const prev = currentPage - 1
		navigate(`/news?page=${prev}`)
		setCurrentPage(prev > 0 ? prev : currentPage)
	}, [currentPage])

	const onChangePage = (page: number) => {
		setCurrentPage(page)
		navigate(`/news?page=${page}`)
	}

	const btnDisabled = {
		left: currentPage === 1,
		right: currentPage === pageCount
	}

	return {
		currentPage,
		btnDisabled,
		handleNextPageClick,
		handlePrevPageClick,
		onChangePage
	}
}

export default usePagination
