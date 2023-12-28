import { INewsList } from '../../interfaces/NewsList.interface'
import { NewsItem } from '../../newsItem/NewsItem'

export function NewsList({ news }: INewsList) {
	return (
		<div className='flex flex-col gap-10'>
			{news.map(news => (
				<NewsItem {...news} key={news.id} />
			))}
		</div>
	)
}
