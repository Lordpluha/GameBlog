import { useRef } from 'react'

import useModal from '@features/lib/hooks/useModal'
import CommentModal from '@entities/ui/modals/Comments/CommentsModal'
import { MessageCircleMore } from 'lucide-react'

/**
 * Modal component with a list of new comments
 * useModal is a custom hook for closing a modal window by clicking an outside
 * @param newComments - array
 */
const CommentsBtn = ({ newComments }: { newComments: INewComment[] }) => {
	const refCommentModal = useRef<HTMLDivElement>(null!)
	const { modal, setModal } = useModal(refCommentModal)

	return (
		<>
			<button
				className='bg-[var(--default-dark-btn-color)] rounded-[10px] p-2'
				onClick={() => setModal(!modal)}
			>
				<MessageCircleMore />
			</button>
			{modal && (
				<CommentModal
					commentsList={newComments}
					ref={refCommentModal}
					setModal={setModal}
				/>
			)}
		</>
	)
}

export default CommentsBtn
