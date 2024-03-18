import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import clsx from 'clsx'
import { MessageCircleMore } from 'lucide-react'

type TCommentBtnProps = LinkProps & {
	commentsCount: number
}

const CommentBtn: FC<TCommentBtnProps> = ({
	commentsCount,
	className: ClassName,
	...props
}) => (
	<Link className={clsx('rounded-[10px] p-2', ClassName)} {...props}>
		<MessageCircleMore />
		<p className='ml-1'>{commentsCount}</p>
	</Link>
)

export default CommentBtn
