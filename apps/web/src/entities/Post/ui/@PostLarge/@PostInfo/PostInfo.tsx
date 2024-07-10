import { type FC } from 'react'

import { Link, Zap } from 'lucide-react'

import { ICategory, IPublication } from '@model/interfaces'

const PostInfo: FC<Pick<IPublication, 'author'> & { category: ICategory }> = ({
	author,
	category
}) => {
	console.log(author, category)
	return (
		<div className='flex justify-between items-center'>
			<div className='flex gap-2 items-center'>
				<Zap size={20} />
				<p className='text-xl'>{category.title}</p>
			</div>
			<Link to={'#'} className='flex gap-4 items-center'>
				<img
					className='w-8 h-8 rounded-full object-cover outline-red-800 outline-2 outline'
					src={author.avatar}
					alt={`${author.name} avatar image`}
				/>
				<p className='hover:text-red-700 hover:underline text-xl'>
					{author.name}
				</p>
			</Link>
		</div>
	)
}

export default PostInfo
