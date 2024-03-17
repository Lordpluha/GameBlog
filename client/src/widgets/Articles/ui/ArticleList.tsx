import { type IArticle } from '@model/interfaces'

import { ArticleCard } from '@entities/ArticleCard'

/**
 * General ui component, which represent article list
 * general usage in news page
 * @param articleList typeof IArticle[]
 */
const ArticleList = ({ articleList }: { articleList: IArticle[] }) => {
	return (
		<section className='md:container flex flex-col'>
			{articleList.map((el, i) => (
				<ArticleCard article={el} key={i} />
			))}
		</section>
	)
}

export default ArticleList
