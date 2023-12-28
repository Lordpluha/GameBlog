import { Bookmark, MessageCircleMore, Zap } from 'lucide-react'
import { INewsItem } from '../interfaces/NewsItem.interface'

export function NewsItem(news: INewsItem) {
	const { categorie, content, createdAt, preview, commentsCount, user } = news

	return (
		<div className='flex flex-col gap-4 max-w-[350px] bg-neutral-800 rounded-2xl overflow-hidden'>
			<a className='h-56 overflow-hidden' href='#'>
				<img
					className='w-full h-full object-cover hover:scale-110 duration-500'
					src={preview}
					alt='image'
				/>
			</a>
			<div className='flex flex-col gap-4 p-3'>
				<div className='flex justify-between items-center'>
					<div className='flex gap-2 items-center'>
						<Zap size={20}></Zap>
						<p className='text-xl'>{categorie}</p>
					</div>
					<a href='#' className='flex gap-4 items-center'>
						<img
							className='w-8 h-8 rounded-full object-cover outline-red-800 outline-2 outline'
							src={user.avatar}
							alt='avatar'
						/>
						<p className='hover:text-red-700 hover:underline text-xl'>
							{user.name}
						</p>
					</a>
				</div>
				<a
					href='#'
					className='text-2xl font-medium hover:text-red-700 hover:underline'
				>
					{content}
				</a>
				<div className='flex justify-between items-center'>
					<p className='text-lg text-gray-400'>{createdAt}</p>
					<div className='flex gap-5 items-center'>
						<button>
							<Bookmark className='stroke-gray-400 stroke-1 hover:stroke-red-600'></Bookmark>
						</button>
						<a
							href='#'
							className='flex gap-2 items-center text-gray-500 hover:text-red-500 hover:stroke-red-500 stroke-gray-400'
						>
							<MessageCircleMore className=' stroke-inherit stroke-1 ' />
							<p className='text-xl text-inherit'>
								{commentsCount}
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
