import { X } from 'lucide-react'
import { ForwardedRef, forwardRef } from 'react'

import { INewComment } from '@interfaces/extras/NewComments.interface'

import CommentItem from './CommentItem/CommentItem'
import styles from './CommentsModal.module.scss'

type TCommentModalProps = {
	commentsList: INewComment[]
	setModal: React.Dispatch<React.SetStateAction<boolean>>
}

type TRefModal = ForwardedRef<HTMLDivElement>

/**
 * Component popum modal with comments list.
 * Accepting props commentsList and boolean state setModal for close outside
 * @param commentList - array of INewComment elements
 * @param setModal - react set state action typeof boolean
 */
const CommentsModal = forwardRef(
	({ commentsList, setModal }: TCommentModalProps, ref: TRefModal) => {
		return (
			<div className={styles.commentsBlock} ref={ref}>
				<div className={styles.commentsBlockHeader}>
					<p className='text-3xl font-semibold'>Новые комментарии</p>
					<div
						className='cursor-pointer'
						onClick={() => setModal(false)}
					>
						<X />
					</div>
				</div>
				<div className={styles.commentsBlockBody}>
					{commentsList.length ? (
						commentsList.map((item, idx) => (
							<CommentItem key={idx} {...item} />
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
		)
	}
)

export default CommentsModal
