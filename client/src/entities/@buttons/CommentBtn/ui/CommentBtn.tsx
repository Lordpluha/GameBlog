import { ButtonHTMLAttributes, FC } from 'react'

import clsx from 'clsx'
import { MessageCircleMore } from 'lucide-react'

type TCommentBtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	totalCount: number
}

const CommentBtn: FC<TCommentBtnProps> = props => (
	<button {...props} className={clsx('rounded-[10px] p-2', props.className)}>
		<MessageCircleMore />
		{props.totalCount && props.totalCount}
	</button>
)

export default CommentBtn
