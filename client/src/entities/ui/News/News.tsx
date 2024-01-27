import { INews } from '@entities/model/interfaces/News.interface'

import Cover from '@shared/ui/Cover/Cover'

import NewsFooter from './NewsFooter/NewsFooter'
import NewsInfo from './NewsInfo/NewsInfo'
import NewsTitle from './NewsTitle/NewsTitle'

/**
 * Renders a News component with the provided news data.
 *
 * @param {INews} news - The news data to be rendered.
 * @return {JSX.Element} - The rendered News component.
 */
const News = (news: INews) => {
	const { categorie, content, createdAt, preview, commentsCount, user } = news

	// Логика отправки запроса на добавление в закладки
	function addToBookmark() {}

	return (
		<div className='flex flex-col gap-4 max-w-[350px] bg-neutral-800 rounded-2xl overflow-hidden'>
			<Cover height='56em' width='100%' />
			<div className='flex flex-col gap-4 p-3'>
				<NewsInfo categorie={categorie} user={user} />
				<NewsTitle content={content} />
				<NewsFooter
					createdAt={`${createdAt}`}
					addToBookmark={addToBookmark}
					commentsCount={commentsCount}
				/>
			</div>
		</div>
	)
}
