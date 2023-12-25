import { IArticle } from '../../interfaces/Article.interface'
import ArticleItem from './ArticleItem/ArticleItem'

const ArticleList = ({ articleList }: { articleList: IArticle[] }) => {
	return (
		<div className='md:container flex flex-col'>
			{articleList.map((el, i) => (
				<ArticleItem article={el} key={i} />
			))}
		</div>
	)
}

export default ArticleList
