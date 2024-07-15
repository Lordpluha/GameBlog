import type { FC} from 'react';
import { useState } from 'react'
import { useGetNewsListQuery } from '@store/index'
import { Pagination } from '@features/Pagination'
import PostSmall from './@PostSmall/PostSmall'

const PostsSmall: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const {
    data: resp,
    isLoading,
    isError,
    error
  } = useGetNewsListQuery(currentPage)

  if (isError)
    return (
      <h1>
        {error?.status} - {error?.message}
      </h1>
    )

  if (isLoading) return <h1>Loading...</h1>

  const { items: posts, count: totalPosts, pageCount: totalPages } = resp!

  return (
    <div className='flex flex-col'>
      {posts && totalPosts != 0 ? (
        <>
          <div>
            {posts.map(el => (
              <PostSmall
                key={el.slug}
                post={el}
                to='news'
              />
            ))}
          </div>
          {totalPages != 1 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          )}
        </>
      ) : (
        <h1>Новостей нет</h1>
      )}
    </div>
  )
}

export default PostsSmall
