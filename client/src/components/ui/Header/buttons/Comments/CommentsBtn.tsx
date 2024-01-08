import { useRef } from 'react'

import { MessageCircleMore } from 'lucide-react'

import { INewComment } from '@interfaces/extras/NewComments.interface'

import useModal from '@hooks/useModal'

import CommentModal from '@ui/Header/modals/Comments/CommentsModal'

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
