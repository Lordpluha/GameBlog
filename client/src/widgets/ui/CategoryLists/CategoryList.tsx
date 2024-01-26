import { IArticle } from '@/interfaces/Article.interface'

import CategoryItem from '../../../entities/ui/CategoryItem/CategoryItem'

const CategoryList = ({
	categories,
	className = ''
}: {
	categories: IArticle['categories']
	className: string
}) => {
	return (
		<section className={className}>
			{categories.map((item, idx) => (
				<div key={idx}>
					{idx > 0 && <div className='mx-1'>|</div>}
					<CategoryItem category={item} />
				</div>
			))}
		</section>
	)
}

export default CategoryList
