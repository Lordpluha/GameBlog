import { IArticle } from '@interfaces/Article.interface'

import CategoryItem from './CategoryItem/CategoryItem'

const CategoryList = ({
	categories,
	className = ''
}: {
	categories: IArticle['tags']
	className: string
}) => {
	return (
		<div className={className}>
			{categories.map((item, idx) => (
				<div key={idx}>
					{idx > 0 && <div className='mx-1'>|</div>}
					<CategoryItem category={item} />
				</div>
			))}
		</div>
	)
}

export default CategoryList
