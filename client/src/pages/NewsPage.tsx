import ArticleList from "@/components/ui/lists/ArticleList/ArticleList"
import { useEffect, useState } from "react"
import { IArticle } from "@/components/interfaces/Article.interface"

import dal from '../demoData/demoArticleList.json'
import Pagination from "@/components/ui/pagination/Pagination"
import { useNavigate, useLocation } from "react-router-dom"

const NewsPage = () => {
	const location = useLocation()
	const history = useNavigate()
	const pageNumber = +location.search.split('=')[1] | 1
	const [artList, setArtList] = useState<IArticle[]>([])
	const [currentPage, setCurrentPage] = useState<number>(pageNumber)
	const [pagesCount, setPagesCount] = useState<number>(0)
console.log(location);

	useEffect(() => {
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
		setPagesCount(Math.max(Math.ceil(dal.newsData.length / 5)))
	},[currentPage])

	const handlePageChange = ({selected}:{selected:number}) => {
		setCurrentPage(selected+1)
		if(selected+1 > 1) history(`/news?page=${selected+1}`)
	}

	return (
		<div>
			<ArticleList articleList={artList} />
			<Pagination 
				initPage={pageNumber - 1}
				pageRangeDisplayed={5}
				onChange={handlePageChange}
				pageCount={pagesCount}
				marginPagesDisplayed={3}
			/>
		</div>
	)
}

export default NewsPage