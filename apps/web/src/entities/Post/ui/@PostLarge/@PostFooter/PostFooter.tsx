import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircleMore } from 'lucide-react'
import type { IPost } from '@model/interfaces'
import { BookmarkBtn } from '@features/AddBookmark'

type TPostFooterProps = Pick<IPost, 'createdAt' | 'commentsCount'> & {
  addToBookmark: () => void
}

const PostFooter: FC<TPostFooterProps> = ({
  createdAt,
  addToBookmark,
  commentsCount
}) => {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-lg text-gray-400'>{createdAt}</p>
      <div className='flex items-center gap-5'>
        <BookmarkBtn onClick={addToBookmark} />
        <Link
          className='flex items-center gap-2 stroke-gray-400 text-gray-500 hover:stroke-red-500 hover:text-red-500'
          to="#"
        >
          <MessageCircleMore className='stroke-inherit stroke-1' />
          <p className='text-xl text-inherit'>{commentsCount}</p>
        </Link>
      </div>
    </div>
  )
}

export default PostFooter
