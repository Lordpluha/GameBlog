import { Dispatch, PropsWithRef, SetStateAction, forwardRef } from 'react'

import { X } from 'lucide-react'

import { IComment } from '@model/interfaces'

import CommentCard from './CommentCard/CommentCard'
import styles from './CommentsModal.module.scss'

type TCommentModalProps = {
	commentsList: IComment[]
	setModal: Dispatch<SetStateAction<boolean>>
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
>(({ commentsList, setModal }, ref) => (
	<div className={styles.commentsBlock} ref={ref}>
		<div className={styles.commentsBlockHeader}>
			<p className='text-3xl font-semibold'>Новые комментарии</p>
			<div className='cursor-pointer' onClick={() => setModal(false)}>
				<X />
			</div>
		</div>
		<div className={styles.commentsBlockBody}>
			{commentsList.length ? (
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
