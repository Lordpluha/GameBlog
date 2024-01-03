import { useNavigate } from 'react-router-dom'
import { ICategory } from '../../../interfaces/Category.interface'

const CategoryItem = ({ cat }: { cat: ICategory }) => {
	const navigate = useNavigate()

	const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation()
		navigate(`/news/${cat.seo}`)
	}
	return (
		<span
			onClick={e => clickHandler(e)}
			className='cursor-pointer text-[14px] transition duration-500 ease-in-out hover:text-rose-600'
		>
			{cat.title}
		</span>
	)
}

export default CategoryItem
