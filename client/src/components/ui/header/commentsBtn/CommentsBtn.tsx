import { useState } from 'react'
import './commentsBtn.scss'
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
				className='headerCommentsButton'
				onClick={() => setOpenCom(!openCom)}
			>
				<MessageCircleMore />
			</button>
			{openCom && <CommentModal newComments={newComments} setOpenCom={setOpenCom} />}
		</>
	)
}

export default CommentsBtn