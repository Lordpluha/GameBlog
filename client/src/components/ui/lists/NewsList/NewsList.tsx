import { INews } from '../../interfaces/News.interface'
import { News } from './news/News'

interface Props {
	news: INews[]
}
export function NewsList({ news }: Props) {
	return (
		<div className='flex flex-col gap-10'>
			{news.map(news => (
				<News {...news} key={news.id} />
			))}
		</div>
	)
}
