import { type FC } from 'react'
import { Link } from 'react-router-dom'

import { MessageCircleMore } from 'lucide-react'

import { BookmarkBtn } from '@shared/ui'

interface NewFooterProps {
	createdAt: string
	addToBookmark: () => unknown
	commentsCount: number
}

const NewFooter: FC<NewFooterProps> = ({
	createdAt,
	addToBookmark,
	commentsCount
}) => {
	return (
		<div className='flex justify-between items-center'>
			<p className='text-lg text-gray-400'>{createdAt}</p>
			<div className='flex gap-5 items-center'>
				<BookmarkBtn onClick={addToBookmark} />
				<Link
					to={'#'}
					className='flex gap-2 items-center text-gray-500 hover:text-red-500 hover:stroke-red-500 stroke-gray-400'
				>
					<MessageCircleMore className='stroke-inherit stroke-1' />
					<p className='text-xl text-inherit'>{commentsCount}</p>
				</Link>
			</div>
		</div>
	)
}

export default NewFooter
