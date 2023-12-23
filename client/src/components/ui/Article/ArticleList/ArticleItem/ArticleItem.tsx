import { useNavigate } from 'react-router-dom'
import { TArticleData } from '../../../types/TArticleData'
import { CommentOutlined } from '@ant-design/icons';
import { dateConverter } from '../../../tools/ArticleDateConverter';
import ArticleCategory from '../../ArticleCategory/ArticleCategory';
import styles from '../../../scss.module/articleItem.module.scss'
import React from 'react';

// SCSS modules 'ArticleItem.module.scss'
const ArticleItem = ({ article }: { article: TArticleData }) => {
    const navigate = useNavigate()

    const clickHandler = (e:React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        navigate(`/newsdata/${article.id}/${article.seo}`)
    }

	return (
        <div onClick={(e) => clickHandler(e)} className={styles.articleItemBlock}>
            <img className={styles.articleItemImage} src={article.image} />
            <div className={styles.articleItemDescription}>
                <div onClick={(e) => clickHandler(e)} className={styles.articleItemTitle}>
                    {article.title}
                </div>

                <div className='mt-9 pr-4'>
                    <div className={styles.articleItemCategory}>
                        {article.category.map((item, idx) => <ArticleCategory cat={item} key={idx} />)}
                    </div>
                    <div className='flex flex-row justify-between'>
                        <span className='text-gray-500 text-[17px]'>
                            {dateConverter(article.releaseDate)}
                        </span>
                        <div className={styles.articleItemComments} onClick={(e) => clickHandler(e)}>
                            <CommentOutlined />
                            <span className='pl-1'>{article.commentsNum}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default ArticleItem