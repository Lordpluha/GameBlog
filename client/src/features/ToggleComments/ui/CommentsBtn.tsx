import { useRef, useState } from 'react'

import modal from 'antd/es/modal'
import { MessageCircleMore } from 'lucide-react'

import { type IComment } from '@model/interfaces'

import { useModal } from '@shared/lib'

import CommentsModal from './@Comments/CommentsModal'
import styles from './CommentsBtn.module.scss'

/**
 * Modal component with a list of new comments
 * useModal is a custom hook for closing a modal window by clicking an outside
 * @param newComments - array
 */
const CommentsBtn = ({ newComments }: { newComments: IComment[] }) => {
	const refCommentModal = useRef<HTMLDivElement>(null!)
	const { modal, setModal } = useModal(refCommentModal)
	const [isHover, setIsHover] = useState<boolean>(false)

	return (
		<>
			<button
				style={{
					background: isHover
						? '#2F3437'
						: 'var(--default-dark-btn-color)'
				}}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				className={styles.commentBtn}
				onClick={() => {
					setModal(!modal)
				}}
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
