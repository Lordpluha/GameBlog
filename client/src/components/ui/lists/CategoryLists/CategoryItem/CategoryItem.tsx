import { useNavigate } from 'react-router-dom'

import { TCategory } from '@type/Category.type'

const CategoryItem = ({ category }: { category: TCategory }) => {
	const navigate = useNavigate()

	const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		e.stopPropagation()
		navigate(`/news/${category.seo}`)
	}
	return (
		<a
			href='#'
			onClick={e => clickHandler(e)}
			className='cursor-pointer text-[14px] transition duration-500 ease-in-out hover:text-rose-600'
		>
			{category.title}
		</a>
	)
}

export default CategoryItem
