import { forwardRef } from 'react'
import type {
  MutableRefObject,
  Dispatch,
  PropsWithRef,
  SetStateAction
} from 'react'
import { X } from 'lucide-react'
// import { useGetCommentsQuery } from '@store/index'
// import CommentCard from '../../../../entities/Comment/ui/@CommentCard/CommentCard'
import styles from './CommentsSidebar.module.scss'

interface TCommentModalProps {
  setModal: Dispatch<SetStateAction<boolean>>
  closeButtonRef: MutableRefObject<HTMLButtonElement>
}

/**
 * Component popum modal with comments list.
 * Accepting props commentsList and boolean state setModal for close outside
 * @param setModal - react set state action typeof boolean
 */
const CommentsSidebar = forwardRef<
  HTMLDivElement,
  PropsWithRef<TCommentModalProps>
>(({ setModal, closeButtonRef }, ref) => {
  // const { isError, error, data, isLoading } = useGetCommentsQuery()
  return (
    <div
      className={styles.commentsBlock}
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
      <div className={styles.commentsBlockBody}></div>
    </div>
  )
})

export default CommentsSidebar
