import { type FC } from 'react'

import { Link, Zap } from 'lucide-react'

import { type INew } from '@model/interfaces'

type NewInfoProps = Pick<INew, 'category' | 'user'>

const NewInfo: FC<NewInfoProps> = ({ category, user }) => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex gap-2 items-center'>
				<Zap size={20} />
				<p className='text-xl'>{category}</p>
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
	)
}

export default NewInfo