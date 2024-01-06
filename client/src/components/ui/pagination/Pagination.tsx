import ReactPaginate from 'react-paginate'
import styles from './pagination.module.scss'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface IPagination {
    initPage: number
    marginPagesDisplayed:number
    pageCount: number
    pageRangeDisplayed: number
    onChange: ({selected}:{selected:number}) => void
}

const Pagination = ({initPage, marginPagesDisplayed, pageCount, pageRangeDisplayed, onChange}:IPagination) => {
  return (
    <div>
        <ReactPaginate 
            initialPage={initPage} 
            marginPagesDisplayed={marginPagesDisplayed} 
            pageCount={pageCount} 
            pageRangeDisplayed={pageRangeDisplayed}
            onPageChange={onChange}
            containerClassName={styles.pagination}
            activeClassName={styles.pagination__active}
            pageLinkClassName={styles.pagination__pageLink}
            breakLinkClassName={styles.pagination__breakLink}
            nextLinkClassName={styles.pagination__nextLink}
            previousLinkClassName={styles.pagination__previousLink}
            pageClassName={styles.pagination__pageItem}
            breakClassName={styles.pagination__breakItem}
            nextClassName={styles.pagination__nextItem}
            previousClassName={styles.pagination__previousItem}
            previousLabel={<ChevronLeft />}
            nextLabel={<ChevronRight />}
        />
    </div>
  )
}

export default Pagination