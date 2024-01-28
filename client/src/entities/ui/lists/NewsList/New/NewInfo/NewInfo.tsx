import { FC } from 'react'

import INew from '@entities/model/interfaces/New.interface'
import { Link, Zap } from 'lucide-react'

type NewInfoProps = Pick<INew, 'categorie' | 'user'>

const NewInfo: FC<NewInfoProps> = ({ categorie, user }) => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex gap-2 items-center'>
				<Zap size={20} />
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
	)
}

export default NewInfo
