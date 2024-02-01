import { FC, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { IArticle } from '@model/interfaces'

type CategoryItemProps = {
	linkTo: string
	title: IArticle['title']
}

/**
 * The CategoryItem component is a clickable link that navigates to a specified location when clicked.
 * @param  - - `linkTo`: The URL or path to navigate to when the category item is clicked.
 * @returns The CategoryItem component is returning an anchor element (<a>) with the specified props
 * and event handlers. The content of the anchor element is the value of the "title" prop.
 */
const CategoryItem: FC<CategoryItemProps> = ({ linkTo, title }) => {
	const navigate = useNavigate()

	const clickHandler = (e: MouseEvent<HTMLElement>) => {
		e.preventDefault()
		e.stopPropagation()
		navigate(linkTo)
	}
	return (
		<a
			href='#'
			onClick={clickHandler}
			className='cursor-pointer text-[14px] transition duration-500 ease-in-out hover:text-rose-600'
		>
			{title}
		</a>
	)
}

export default CategoryItem
