import { memo } from 'react'

import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { TPagination } from '../model/@types'
import styles from './Pagination.module.scss'

/**
 * @param TPagination - the type of ppagination props
 * @param currentPage - current page
 * @param pageNum - an array of pagination pages formed from the first to the total number of all pages
 * @param btnDisabled - active or passive state of the next and previous buttons
 * @param handleNextPageClick - action handler when the button is clicked next
 * @param handlePrevPageClick - action handler when the button is clicked previus
 * @param onChangePage - action handler when a page button is clicked
 */
const Pagination = memo((props: TPagination) => {
	const {
		pageNum,
		currentPage,
		disable,
		onNextPageClick,
		onPrevPageClick,
		onChangePage
	} = props

	const handleNextPageClick = () => {
		onNextPageClick()
	}
	const handlePrevPageClick = () => {
		onPrevPageClick()
	}

	const handleChangePage = (page: number) => {
		onChangePage(page)
	}

	return (
		<div className={styles.pagination}>
			<div className={styles.buttons}>
				<button
					className={disable.left ? styles.btnHiden : ''}
					type='button'
					onClick={handlePrevPageClick}
				>
					<ChevronLeft className={styles.leftArrow} />
				</button>
				{pageNum?.map((page, idx) => (
					<div
						className={clsx(
							styles.page,
							currentPage === page ? styles.activePage : ''
						)}
						onClick={() => handleChangePage(page)}
						key={idx}
					>
						{page}
					</div>
				))}
				<button
					className={disable.right ? styles.btnHiden : ''}
					type='button'
					onClick={handleNextPageClick}
				>
					<ChevronRight className={styles.rightArrow} />
				</button>
			</div>
		</div>
	)
})

export default Pagination
