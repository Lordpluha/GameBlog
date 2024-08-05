import type { Dispatch, ReactNode, SetStateAction } from 'react'
import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { usePagination } from '../lib/@hooks'
import styles from './Pagination.module.scss'

/**
 *
 */
function Pagination({
  totalPages,
  setCurrentPage,
  currentPage
}: {
  totalPages: number
  setCurrentPage: Dispatch<SetStateAction<number>>
  currentPage: number
}) {
  const {
    btnDisabled,
    handleNextPageClick,
    handlePrevPageClick,
    onChangePage
  } = usePagination(totalPages, setCurrentPage, currentPage)

  const pagination: ReactNode[] = []
  for (let page = 1; page <= totalPages; page++) {
    pagination.push(
      <div
        className={clsx(styles.page, currentPage == page && styles.activePage)}
        key={page}
        onMouseDown={() => {
          onChangePage(page)
        }}
      >
        {page}
      </div>
    )
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.buttons}>
        <button
          className={clsx(btnDisabled.left && styles.btnHiden)}
          onMouseDown={() => {
            handlePrevPageClick()
          }}
        >
          <ChevronLeft className={styles.leftArrow} />
        </button>
        {...pagination}
        <button
          className={clsx(btnDisabled.right && styles.btnHiden)}
          onMouseDown={() => {
            handleNextPageClick()
          }}
        >
          <ChevronRight className={styles.rightArrow} />
        </button>
      </div>
    </div>
  )
}

export default Pagination
