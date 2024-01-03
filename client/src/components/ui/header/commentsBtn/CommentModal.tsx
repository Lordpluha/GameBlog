import CommentItem from './commentsItem/CommentItem'
import styles from './commentsBtn.module.scss'
import { X } from 'lucide-react'
import { INewComment } from '../../interfaces/NewComments.interface'
import { ForwardedRef, MutableRefObject, forwardRef } from 'react'

type TCommentModalProps = {
    commentsList: INewComment[],
    refCommentModal: MutableRefObject<HTMLDivElement>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Component popum modal with comments list.
 * Accepting props commentsList and boolean state setModal for close outside
 */
const CommentModal = forwardRef(({ commentsList, setModal }: TCommentModalProps, refCommentModal:ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.commentsBlock} ref={refCommentModal}>
        <div className={styles.commentsBlockHeader}>
            <p className='text-3xl font-semibold'>
                Новые комментарии
            </p>
            <div className='cursor-pointer' onClick={() => setModal(false)}>
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
})

export default CommentModal