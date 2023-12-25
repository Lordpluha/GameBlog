import { TArticleData } from '../../types/ArticleData.type'
import ArticleItem from './ArticleItem/ArticleItem'

const ArticleList = ({ articleList }: { articleList: TArticleData[] }) => {
	return (
		<div className='md:container flex flex-col'>
			{articleList.map((el, i) => (
				<ArticleItem article={el} key={i} />
			))}
		</div>
	)
}

export default ArticleList
