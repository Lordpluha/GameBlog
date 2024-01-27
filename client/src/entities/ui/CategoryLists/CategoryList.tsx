import { IArticle } from '@/entities/model/interfaces/Article.interface'

import CategoryItem from './CategoryItem/CategoryItem'

const CategoryList = ({
	categories,
	className = ''
}: {
	categories: IArticle['categories']
	className: string
}) => {
	return (
		<div className={className}>
			{categories.map((category, idx) => (
				<div key={idx}>
					{idx > 0 && <div className='mx-1'>|</div>}
					<CategoryItem
						linkTo={`news/${category.seo}`}
						title={category.title}
					/>
				</div>
			))}
		</div>
	)
}

export default CategoryList
