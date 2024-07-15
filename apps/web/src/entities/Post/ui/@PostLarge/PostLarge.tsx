import type { FC } from 'react'
import type { IPublication } from '@model/interfaces'
import { Cover } from '@shared/ui'
import PostFooter from './@PostFooter/PostFooter'
import PostInfo from './@PostInfo/PostInfo'
import PostTitle from './@PostTitle/PostTitle'

interface TPostLargeProps { post: IPublication }

/**
 * Renders a News component with the provided news data.
 * General usage in sidebar*
 *
 * @param {IPost} myNew - The new data to be rendered.
 * @return {JSX.Element} - The rendered News component.
 */
const PostLarge: FC<TPostLargeProps> = ({ post }) => {
  const { title, createdAt, preview, _count, author, categories } = post

  function addToBookmark() {}

  return (
    <div className='flex h-[40vh] flex-col gap-4 overflow-hidden rounded-2xl bg-neutral-800'>
      <Cover
        height='50%'
        src={preview}
        width='100%'
      />
      <div className='flex flex-col gap-4 p-3'>
        {/* <PostInfo category={categories[0]} user={author} /> */}
        <PostTitle content={title} />
        <PostFooter
          addToBookmark={addToBookmark}
          commentsCount={_count.comments}
          createdAt={createdAt}
        />
      </div>
    </div>
  )
}

export default PostLarge
