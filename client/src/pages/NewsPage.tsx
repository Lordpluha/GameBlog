import ArticleList from "@/components/ui/lists/ArticleList/ArticleList"
import { useEffect, useState } from "react"
import { IArticle } from "@/components/interfaces/Article.interface"

import dal from '../demoData/demoArticleList.json'
import Pagination from "@/components/ui/pagination/Pagination"
import usePagination from "@/components/hooks/usePagination"

/**
 * The page news component for upload article list
 * artList - array article list from server
 * usePagination - custom hook for paginaton component. 
 */
const NewsPage = () => {
	const [artList, setArtList] = useState<IArticle[]>([])
	const {
		pageNum,
		currentPage,
		btnDisabled,
		handleNextPageClick,
		handlePrevPageClick,
		onChangePage
	} = usePagination(
		dal.newsData.length,
		5
	)
	
	useEffect(() => {
		setArtList([])
		dal.newsData
		/* select data for current page */
		.filter((data, idx) => idx >= (currentPage-1) && idx <= (currentPage+3))
		.map(item => {
			setArtList(prev => [...prev,
				{
					id: +item.id,
					seo: item.seo,
					title: item.title,
					commentsNum: +item.commentsNum,
					image: item.image,
					tags: item.tags,
					releaseDate: +item.releaseDate
				}]
				)
			})
		},[currentPage])
	return (
		<div>
			<ArticleList articleList={artList} />
			<Pagination
				onNextPageClick={handleNextPageClick}
				onPrevPageClick={handlePrevPageClick}
				disable={btnDisabled}
				pageNum = {pageNum}
				currentPage={currentPage}
				onChangePage={onChangePage}
			/>
		</div>
	)
}

export default NewsPage