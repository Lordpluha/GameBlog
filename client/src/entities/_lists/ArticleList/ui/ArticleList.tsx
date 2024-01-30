import IArticle from '@/model/interfaces/Article.interface'

import ArticleItem from './ArticleCard/ArticleCard'

/**
 * General ui component, which represent article list
 * general usage in news page
 * @param articleList typeof IArticle[]
 */
const ArticleList = ({ articleList }: { articleList: IArticle[] }) => {
	return (
		<section className='md:container flex flex-col'>
			{articleList.map((el, i) => (
				<ArticleItem article={el} key={i} />
			))}
		</section>
	)
}

export default ArticleList
