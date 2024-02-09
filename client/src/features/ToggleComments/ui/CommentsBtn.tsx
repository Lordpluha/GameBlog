import { useRef } from 'react'

import { MessageCircleMore } from 'lucide-react'

import { type IComment } from '@model/interfaces'

import { useModal } from '@entities/Modal'

import CommentsModal from './@Comments/CommentsModal'
import { CommentBtn } from '@entities/@buttons/CommentBtn';

/**
 * Modal component with a list of new comments
 * useModal is a custom hook for closing a modal window by clicking an outside
 * @param newComments - array
 */
const CommentsBtn = ({ newComments }: { newComments: IComment[] }) => {
	const refCommentModal = useRef<HTMLDivElement>(null!)
	const { modal, setModal } = useModal(refCommentModal)

	return (
		<>
			<CommentBtn
				onClick={() => {
					setModal(!modal)
				}}
				className='bg-[var(--default-dark-btn-color)]'
			/>
			{modal && (
				<CommentsModal
					commentsList={newComments}
					ref={refCommentModal}
					setModal={setModal}
				/>
			)}
		</>
	)
}

export default CommentsBtn
