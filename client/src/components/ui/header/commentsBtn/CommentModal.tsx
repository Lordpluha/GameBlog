import CommentItem from './commentsItem/CommentItem'
import styles from './commentsBtn.module.scss'
import { X } from 'lucide-react'
import { INewComment } from '../../interfaces/NewComments.interface'
import { useRef } from 'react'
import { useOnClickOutsideRef } from '../../../hooks/useOnClickOutsideRef'
type TProps = {
    commentsList: INewComment[],
    openHandler: (openCom:boolean) => void
}
/**
 * Component popum modal with comments list.
 * Accepting props commentsList and boolean state openHandler for close outside.
 * useOnClickOutsideRef - custom hook for close popup on click outside
 */
const CommentModal = ({ commentsList, openHandler }: TProps) => {
  const refCommentModal = useRef<HTMLDivElement>(null)
  useOnClickOutsideRef(refCommentModal, openHandler)

  return (
    <div className={styles.commentsBlock} ref={refCommentModal}>
        <div className={styles.commentsBlockHeader}>
            <span className='text-3xl font-semibold'>
                Новые комментарии
            </span>
            <span
                className='cursor-pointer'
                onClick={() => openHandler(false)}
            >
                <X />
            </span>
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

export default CommentModal