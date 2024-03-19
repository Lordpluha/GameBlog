import { PostsLarge, PostsSmall } from '@widgets/Posts'

/**
 * The page news component for upload article list
 * artList - array article list from server
 * usePagination - custom hook for paginaton component.
 */
const NewsPage = () => {
	return (
		<div className='flex flex-row gap-x-16 shrink-0 grow-1'>
			<PostsSmall />
			<aside className='lg:block min-w-[10vw] hidden max-w-[30vw] shrink-1 grow-0'>
				<PostsLarge />
			</aside>
		</div>
	)
}

export default NewsPage
