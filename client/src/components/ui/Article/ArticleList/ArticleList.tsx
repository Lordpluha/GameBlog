import { TArticleData } from '../../types/TArticleData'
import ArticleItem from './ArticleItem/ArticleItem'

const ArticleList = ({ articleList }: { articleList: TArticleData[] }) => {
	return (
		<div className='md:container flex flex-col md:w-6/12'>
			{articleList.map((el, i) => (
				<ArticleItem article={el} key={i} />
			))}
		</div>
	)
}

export default ArticleList