import {
	type Dispatch,
	MutableRefObject,
	type PropsWithRef,
	type SetStateAction,
	forwardRef
} from 'react'

import { X } from 'lucide-react'

import { useGetCommentsQuery } from '@store/@api/CommentsApi'

import CommentCard from './@CommentCard/CommentCard'
import styles from './CommentsModal.module.scss'

interface TCommentModalProps {
	setModal: Dispatch<SetStateAction<boolean>>
	closeButtonRef: MutableRefObject<HTMLButtonElement>
}

/**
 * Component popum modal with comments list.
 * Accepting props commentsList and boolean state setModal for close outside
 * @param setModal - react set state action typeof boolean
 */
const CommentsModal = forwardRef<
	HTMLDivElement,
	PropsWithRef<TCommentModalProps>
>(({ commentsList, setModal, closeButtonRef }, ref) => (
	<div className={styles.commentsBlock} ref={ref}>
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
			{data?.items ? (
				data?.items.map((item, idx) => (
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
