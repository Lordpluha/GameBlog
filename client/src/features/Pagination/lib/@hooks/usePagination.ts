import { useCallback, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 *
 * @param contentLength - the count of item recevied from server
 * @param ITEM_PER_PAGE - number of elements per page
 * pageNum - an array of pagination pages formed from the first to the total number of all pages
 * currentPage - current page
 * btnDisabled - active or passive state of the next and previous buttons
 * handleNextPageClick - action handler when the button is clicked next
 * handlePrevPageClick - action handler when the button is clicked previus
 * onChangePage - action handler when a page button is clicked
 *
 * @returns pageNum, currentPage, btnDisabled, handleNextPageClick, handlePrevPageClick, onChangePage
 */
const usePagination = (totalItems: number /*, ITEM_PER_PAGE: number*/) => {
	/*const totalPageCount = Math.ceil(contentLength / ITEM_PER_PAGE)*/
	/*const pageNum = [...Array(totalPageCount + 1).keys()].slice(1)*/
	const location = useLocation()
	const navigate = useNavigate()
	const urlPage = +location.search.split('=')
	const [currentPage, setCurrentPage] = useState<number>(
		urlPage !== 0 ? (urlPage <= totalItems ? +urlPage : totalItems) : 1
	)

	const handleNextPageClick = useCallback(() => {
		const next = currentPage + 1
		const total = totalItems > 1 ? totalItems : currentPage
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
		right: currentPage === totalItems
	}

	return {
		/*pageNum,*/
		currentPage,
		btnDisabled,
		handleNextPageClick,
		handlePrevPageClick,
		onChangePage
	}
}

export default usePagination
