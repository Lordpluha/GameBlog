import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IPost } from '@model/interfaces'

const NewTitle: FC<Pick<IPost, 'content'>> = ({ content }) => {
	return (
		<Link
			to={'#'}
			className='text-2xl font-medium hover:text-red-700 hover:underline'
		>
			{content}
		</Link>
	)
}

export default NewTitle
