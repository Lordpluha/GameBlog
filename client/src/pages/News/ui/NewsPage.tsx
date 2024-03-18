import { PostsLarge, PostsSmall } from '@widgets/Posts'

/**
 * The page news component for upload article list
 * artList - array article list from server
 * usePagination - custom hook for paginaton component.
 */
const NewsPage = () => {
	return (
		<div className='flex'>
			<PostsSmall />
			<aside className='md:block min-w-[10vw] hidden'>
				<PostsLarge />
			</aside>
		</div>
	)
}

export default NewsPage
