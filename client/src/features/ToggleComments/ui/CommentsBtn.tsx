import { useRef } from 'react'

import useModal from '@/entities/hooks/lib/useModal'
import IComment from '@/model/interfaces/Comment.interface'
import { MessageCircleMore } from 'lucide-react'

import CommentsModal from './Comments/CommentsModal'

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
			<button
				className='bg-[var(--default-dark-btn-color)] rounded-[10px] p-2'
				onClick={() => setModal(!modal)}
			>
				<MessageCircleMore />
			</button>
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
