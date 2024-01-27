import { Link } from 'react-router-dom'

const NewsTitle = ({ content }: { content: string }) => {
	return (
		<Link
			to={'#'}
			className='text-2xl font-medium hover:text-red-700 hover:underline'
		>
			{content}
		</Link>
	)
}

export default NewsTitle
