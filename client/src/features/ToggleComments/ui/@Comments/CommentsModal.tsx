import {
	type Dispatch,
	type PropsWithRef,
	type SetStateAction,
	forwardRef} from 'react'

import { X } from 'lucide-react'

import CommentCard from './@CommentCard/CommentCard'
import styles from './CommentsModal.module.scss'
import { useGetCommentsQuery } from '@store/@api/CommentsApi'

interface TCommentModalProps {
	setModal: Dispatch<SetStateAction<boolean>>
}

/**
 * Component popum modal with comments list.
 * Accepting props commentsList and boolean state setModal for close outside
 * @param setModal - react set state action typeof boolean
 */
const CommentsModal = forwardRef<
	HTMLDivElement,
	PropsWithRef<TCommentModalProps>
>(({ setModal }, ref) => {
	const {data} = useGetCommentsQuery()

	return (
	<div className={styles.commentsBlock} ref={ref}>
		<div className={styles.commentsBlockHeader}>
			<p className='text-3xl font-semibold'>Новые комментарии</p>
			<div
				className='cursor-pointer'
				onClick={() => {
					setModal(false)
				}}
			>
				<X />
			</div>
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
)})

export default CommentsModal