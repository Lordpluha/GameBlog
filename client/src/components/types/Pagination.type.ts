export type TPagination = {
    onNextPageClick: () => void
    onPrevPageClick: () => void
    onChangePage: (page:number) => void
    currentPage: number
    disable: {
      left: boolean
      right: boolean
    };
    pageNum: number[]
}