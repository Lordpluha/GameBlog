import { useEffect, useRef, useState } from 'react'

import modal from 'antd/es/modal'
import { MessageCircleMore } from 'lucide-react'

import { type IComment } from '@model/interfaces'

import CommentsModal from './@Comments/CommentsModal'
import styles from './CommentsBtn.module.scss'
import useModal from '../lib/useModal'

/**
 * Modal component with a list of new comments
 * useModal is a custom hook for closing a modal window by clicking an outside
 * @param newComments - array
 */
const CommentsBtn = ({ newComments }: { newComments: IComment[] }) => {
	const refCommentModal = useRef<HTMLDivElement>(null!)
	const refButton1 = useRef<HTMLButtonElement>(null!)
	const refButton2 = useRef<HTMLButtonElement>(null!)
	// console.log(refButton)
	const { modal, setModal } = useModal(refCommentModal, [refButton1, refButton2])
	const [isHover, setIsHover] = useState<boolean>(false)
	// console.log(modal)
	return (
		<>
			<button
				ref={refButton1}
				style={{
					background: isHover
						? '#2F3437'
						: 'var(--default-dark-btn-color)'
				}}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				className={styles.commentBtn}
				onClick={() => {
					setModal(prev => !prev)
				}}
			>
				<MessageCircleMore />
			</button>
			{modal && (
				<CommentsModal
					commentsList={newComments}
					ref={refCommentModal}
					setModal={setModal}
					closeButtonRef={refButton2}
				/>
			)}
		</>
	)
}

export default CommentsBtn
