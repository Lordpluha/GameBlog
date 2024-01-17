import { useState } from 'react'
import CommentForm from '@/components/shared/commentForm/CommentForm'
import { ModifiedCommentType } from '@/components/ui/interfaces/Comment.interface'
import { AlertCircle, Bookmark, CornerUpRight, Link } from 'lucide-react'
import Rating from './rating/Rating'

interface Props {
	comment: ModifiedCommentType
}

export default function Comment({ comment }: Props) {
	const { user, createdAt, content, rating, level } = comment

	const [isReply, setIsReply] = useState(false)

	const toggleReply = () => {
		setIsReply(state => !state)
	}

	return (
		<div className={`relative`} style={{ paddingLeft: `${level * 20}px` }}>
			{level > 0 && (
				<div
					className='absolute top-0 h-full'
					style={{ left: `${level * 12 + (level - 1) * 8}px` }}
				>
					<div className='h-12 border-solid border-l border-dark-gray-primary'></div>
					<div className='absolute top-12 left-0 h-2 w-2 border-solid border-l border-b border-dark-gray-primary'></div>
				</div>
			)}

			<article
				className={`group flex flex-col gap-4 p-4 mt-4 rounded-2xl bg-gray`}
			>
				<section className='flex justify-between items-center'>
					<a className='flex items-center gap-4' href='#'>
						<img
							className='rounded-full'
							src={user.avatar}
							alt='user avatar'
							width={32}
							height={32}
						/>
						<div className='flex flex-col'>
							<span className='font-bold'>{user.name}</span>
							<span>{createdAt}</span>
						</div>
					</a>
					<a href='#'>
						<Link
							className='text-light-gray'
							width={17}
							height={17}
						/>
					</a>
				</section>
				<p className='text-lg'>{content}</p>
				<div className='flex items-center gap-5 text-light-gray '>
					<button
						onClick={toggleReply}
						className='flex items-center gap-2 hover:text-light-gray-80'
					>
						<CornerUpRight width={20} height={20} />
						<span className='font-medium'>Ответить</span>
					</button>
					<button className='opacity-0 duration-300 group-hover:opacity-100'>
						<Bookmark width={20} height={20} />
					</button>

					<button className='opacity-0 duration-300 group-hover:opacity-100'>
						<AlertCircle width={20} height={20} />
					</button>

					<div className='flex justify-end grow'>
						<Rating rating={rating}></Rating>
					</div>
				</div>
			</article>

			{isReply && (
				<div className='pl-[20px] pt-4 relative'>
					<div className='absolute left-[12px] top-0 h-full'>
						<div className='h-12 border-solid border-l border-dark-gray-primary'></div>
						<div className='absolute top-12 left-0 h-2 w-2 border-solid border-l border-b border-dark-gray-primary'></div>
					</div>
					<CommentForm handleClose={toggleReply}></CommentForm>
				</div>
			)}
		</div>
	)
}
