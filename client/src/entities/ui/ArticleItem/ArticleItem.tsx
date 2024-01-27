import React from 'react'
import { useNavigate } from 'react-router-dom'

import CategoryList from '@entities/ui/CategoryLists/CategoryList'
import { CommentOutlined } from '@ant-design/icons'

import { dateConverter } from '@entities/lib/ArticleDateConverter'
import { IArticle } from '@entities/model/interfaces/Article.interface'

import styles from './ArticleItem.module.scss'

/**
 * Item of ArticleList component represent article element
 * @param article typeof IArticle
 */
const ArticleItem = ({ article }: { article: IArticle }) => {
	const navigate = useNavigate()

	const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		navigate(`/newsdata/${article.id}/${article.seo}`)
	}

	return (
		<article
			onClick={e => clickHandler(e)}
			className={styles.articleItemBlock}
		>
			<div className={styles.articleItemImageBlock}>
				<img
					className={styles.articleItemImage}
					src={article.image}
					alt={`${article.title} article cover`}
				/>
			</div>
			<div className={styles.articleItemDescription}>
				<h1
					onClick={e => clickHandler(e)}
					className={styles.articleItemTitle}
				>
					{article.title}
				</h1>

				<div className='pr-4'>
					<CategoryList
						categories={article.categories}
						className={styles.articleItemCategory}
					/>
					<div className='flex flex-row justify-between'>
						<p className='text-gray-500 text-[17px]'>
							{dateConverter(article.releaseDate)}
						</p>
						<div
							className={styles.articleItemComments}
							onClick={e => clickHandler(e)}
						>
							<CommentOutlined />
							<p className='pl-1'>{article.commentsNum}</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	)
}

export default ArticleItem
