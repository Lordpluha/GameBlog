import { type IPost } from '@model/interfaces'
import Tag from './@Tag/Tag'

/**
 * The CategoryList component renders a list of categories with links to corresponding articles.
 * @param  - The `CategoryList` component takes in an object as its parameter with the following
 * properties:
 * @returns The CategoryList component is returning a div element with the specified className. Inside
 * the div, it is mapping over the categories array and rendering a div element for each category. Each
 * category div includes a CategoryItem component with a linkTo prop and a title prop.
 */
function TagsList({
  tags,
  className
}: {
  tags: IPost['tags']
  className?: string
}) {
  return (
    <div className={className}>
      {tags.map((tag, idx) => (
        <div key={idx}>
          {idx > 0 && <div className='mx-1'>|</div>}
          <Tag
            title={tag.title}
            url={`news/${tag.url}`}
          />
        </div>
      ))}
    </div>
  )
}

export default TagsList
