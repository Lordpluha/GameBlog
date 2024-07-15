import { PostsLarge, PostsSmall } from '@entities/Post'

/**
 * The page news component for upload article list
 * artList - array article list from server
 * usePagination - custom hook for paginaton component.
 */
function NewsPage() {
  return (
    <div className='grow-1 flex shrink-0 flex-row gap-x-16'>
      <PostsSmall />
      <aside className='shrink-1 hidden min-w-[10vw] max-w-[30vw] grow-0 lg:block'>
        <PostsLarge />
      </aside>
    </div>
  )
}

export default NewsPage
