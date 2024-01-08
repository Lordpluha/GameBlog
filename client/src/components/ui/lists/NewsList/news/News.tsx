import { Link } from 'react-router-dom'

import { Bookmark, MessageCircleMore, Zap } from 'lucide-react'

import { INews } from '../../../interfaces/News.interface'

/**
 * Renders a News component with the provided news data.
 *
 * @param {INews} news - The news data to be rendered.
 * @return {JSX.Element} - The rendered News component.
 */
export default function News(news: INews) {
	const { categorie, content, createdAt, preview, commentsCount, user } = news

	// Логика отправки запроса на добавление в закладки
	function addToBookmark() {}

	return (
		<div className='flex flex-col gap-4 max-w-[350px] bg-neutral-800 rounded-2xl overflow-hidden'>
			<Link to={'#'} className='h-56 overflow-hidden'>
				<img
					className='w-full h-full object-cover hover:scale-110 duration-500'
					src={preview}
					alt='preview image'
				/>
			</Link>
			<div className='flex flex-col gap-4 p-3'>
				<div className='flex justify-between items-center'>
					<div className='flex gap-2 items-center'>
						<Zap size={20}></Zap>
						<p className='text-xl'>{categorie}</p>
					</div>
					<Link to={'#'} className='flex gap-4 items-center'>
						<img
							className='w-8 h-8 rounded-full object-cover outline-red-800 outline-2 outline'
							src={user.avatar}
							alt={`${user.name} avatar image`}
						/>
						<p className='hover:text-red-700 hover:underline text-xl'>
							{user.name}
						</p>
					</Link>
				</div>
				<Link
					to={'#'}
					className='text-2xl font-medium hover:text-red-700 hover:underline'
				>
					{content}
				</Link>
				<div className='flex justify-between items-center'>
					<p className='text-lg text-gray-400'>{createdAt}</p>
					<div className='flex gap-5 items-center'>
						<button onClick={addToBookmark}>
							<Bookmark className='stroke-gray-400 stroke-1 hover:stroke-red-600'></Bookmark>
						</button>
						<Link
							to={'#'}
							className='flex gap-2 items-center text-gray-500 hover:text-red-500 hover:stroke-red-500 stroke-gray-400'
						>
							<MessageCircleMore className=' stroke-inherit stroke-1 ' />
							<p className='text-xl text-inherit'>
								{commentsCount}
							</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
