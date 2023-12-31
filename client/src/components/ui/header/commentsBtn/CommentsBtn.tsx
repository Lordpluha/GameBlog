import { useState } from 'react'
import styles from './commentsBtn.module.scss'
import { INewComment } from '../../interfaces/NewComments.interface'
import { MessageCircleMore } from 'lucide-react'
import CommentModal from './CommentModal'

/**
 * Modal component with a list of new comments
 */
const CommentsBtn = ({ newComments }: { newComments: INewComment[] }) => {
	const [openCom, setOpenCom] = useState<boolean>(false)

	return (
		<>
			<button
				className={styles.headerCommentsButton}
				onClick={() => setOpenCom(!openCom)}
			>
				<MessageCircleMore />
			</button>
			{openCom && <CommentModal commentsList={newComments} openHandler={setOpenCom} />}
		</>
	)
}

export default CommentsBtn