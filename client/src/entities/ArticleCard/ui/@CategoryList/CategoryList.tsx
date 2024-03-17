import { type IArticle } from '@model/interfaces'

import CategoryItem from './@CategoryItem/CategoryItem'

/**
 * The CategoryList component renders a list of categories with links to corresponding articles.
 * @param  - The `CategoryList` component takes in an object as its parameter with the following
 * properties:
 * @returns The CategoryList component is returning a div element with the specified className. Inside
 * the div, it is mapping over the categories array and rendering a div element for each category. Each
 * category div includes a CategoryItem component with a linkTo prop and a title prop.
 */
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
