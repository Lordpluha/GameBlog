import { useNavigate } from 'react-router-dom'
import { ICategory } from '../interfaces/Category.interface'

const CategoryItem = ({ cat }: { cat: ICategory }) => {
	const navigate = useNavigate()

	const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
		navigate(`/news/${cat.seo}`)
	}
	return (
		<span
			onClick={e => clickHandler(e)}
			className='cursor-pointer text-[14px]'
		>
			{cat.title}
		</span>
	)
}

export default CategoryItem
