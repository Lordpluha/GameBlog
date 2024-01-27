import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type CategoryItemProps = {
	linkTo: string
	title: string
}

const CategoryItem: FC<CategoryItemProps> = ({ linkTo, title }) => {
	const navigate = useNavigate()

	const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		e.stopPropagation()
		navigate(linkTo)
	}
	return (
		<a
			href='#'
			onClick={e => clickHandler(e)}
			className='cursor-pointer text-[14px] transition duration-500 ease-in-out hover:text-rose-600'
		>
			{title}
		</a>
	)
}

export default CategoryItem
