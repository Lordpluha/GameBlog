import {
	type Dispatch,
	MutableRefObject,
	type PropsWithRef,
	type SetStateAction,
	forwardRef
} from 'react'

import modal from 'antd/es/modal'
import { X } from 'lucide-react'

import { type IComment } from '@model/interfaces'

import CommentCard from './@CommentCard/CommentCard'
import styles from './CommentsModal.module.scss'

interface TCommentModalProps {
	commentsList: IComment[]
	setModal: Dispatch<SetStateAction<boolean>>
	closeButtonRef: MutableRefObject<HTMLButtonElement>
	modal: boolean
}

/**
 * Component popum modal with comments list.
 * Accepting props commentsList and boolean state setModal for close outside
 * @param commentList - array of INewComment elements
 * @param setModal - react set state action typeof boolean
 */
const CommentsModal = forwardRef<
	HTMLDivElement,
	PropsWithRef<TCommentModalProps>
>(({ commentsList, setModal, closeButtonRef, modal }, ref) => (
	<div
		className={!modal ? styles.commentsBlockClose : styles.commentsBlock} //не работает
		ref={ref}
	>
		<div className={styles.commentsBlockHeader}>
			<p className='text-3xl font-semibold'>Новые комментарии</p>
			<button
				className='cursor-pointer'
				onClick={() => {
					setModal(false)
				}}
				ref={closeButtonRef}
			>
				<X className={styles.icon} />
			</button>
		</div>
		<div className={styles.commentsBlockBody}>
			{commentsList.length > 0 ? (
				commentsList.map((item, idx) => (
					<CommentCard key={idx} {...item} />
				))
			) : (
				<p className={styles.blockWithoutComment}>
					Комментариев еще нет!
					<br />
					Будь первым!
				</p>
			)}
		</div>
	</div>
))

export default CommentsModal
