import { useRef } from 'react'
import { CommentBtn } from '@entities/@buttons/CommentBtn'
import { useModal } from '@entities/Modal'

import CommentsModal from './@Comments/CommentsModal'
import { useGetCommentsQuery } from '@store/@api/CommentsApi'

/**
 * Modal component with a list of new comments
 * useModal is a custom hook for closing a modal window by clicking an outside
 */
const CommentsBtn = () => {
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
					ref={refCommentModal}
					setModal={setModal}
				/>
			)}
		</>
	)
}

export default CommentsBtn
