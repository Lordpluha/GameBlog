import type { FC } from 'react'
import type { LinkProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { MessageCircleMore } from 'lucide-react'

type TCommentBtnProps = Omit<LinkProps, 'className'> & {
  commentsCount?: number
  className?: string | string[]
}

const CommentBtn: FC<TCommentBtnProps> = ({
  commentsCount = 0,
  className: ClassName,
  to,
  ...props
}) => (
  <Link
    className={clsx('rounded-[10px] p-2', ClassName)}
    {...props}
    to={`/news/${to}#comments`}
  >
    <MessageCircleMore />
    <p className='ml-1'>{commentsCount}</p>
  </Link>
)

export default CommentBtn
