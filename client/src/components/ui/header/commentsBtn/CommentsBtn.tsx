import { useRef } from 'react'
import styles from './commentsBtn.module.scss'
import { INewComment } from '../../interfaces/NewComments.interface'
import { MessageCircleMore } from 'lucide-react'
import CommentModal from './CommentModal'
import useModal from '../../../hooks/useModal'

/**
 * Modal component with a list of new comments
 * useModal is a castom hook for closing a modal window by clicking an outside
 */
const CommentsBtn = ({ newComments }: { newComments: INewComment[] }) => {
	const refCommentModal = useRef<HTMLDivElement>(null!)
  	const {modal, setModal} = useModal(refCommentModal)

	return (
		<>
			<button
				className={styles.headerCommentsButton}
				onClick={() => setModal(!modal)}
			>
				<MessageCircleMore />
			</button>
			{modal && <CommentModal commentsList={newComments} refCommentModal={refCommentModal} setModal={setModal} />}
		</>
	)
}

export default CommentsBtn