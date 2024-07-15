import type { Dispatch, SetStateAction } from 'react'

const usePagination = (
  totalPages: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  currentPage: number
) => {
  const handleNextPageClick = () => {
    console.log('Next page')
    const next = currentPage + 1
    const total = totalPages > 1 ? totalPages : currentPage
    setCurrentPage(next <= total ? next : currentPage)
  }

  const handlePrevPageClick = () => {
    console.log('Prev page')
    const prev = currentPage - 1
    setCurrentPage(prev > 0 ? prev : currentPage)
  }

  const onChangePage = (page: number) => {
    console.log('Change page to ', page)
    setCurrentPage(page)
  }

  const btnDisabled = {
    left: currentPage === 1,
    right: currentPage === totalPages
  }

  return {
    btnDisabled,
    handleNextPageClick,
    handlePrevPageClick,
    onChangePage
  }
}

export default usePagination
