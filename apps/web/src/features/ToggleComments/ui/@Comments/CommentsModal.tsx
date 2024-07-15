import {
  forwardRef
} from 'react';
import type {
  MutableRefObject,
  type Dispatch,
  type PropsWithRef,
  type SetStateAction
} from 'react';
import { X } from 'lucide-react'
import { useGetCommentsQuery } from '@store/index'
import CommentCard from '../../../../entities/Comment/ui/@CommentCard/CommentCard'
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
>(({ setModal, closeButtonRef }, ref) => {
  const { isError, error, data, isLoading } = useGetCommentsQuery()
  console.log(data)
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
      <div className={styles.commentsBlockBody}>
        {isLoading ? <h1 className={styles.blockWithoutComment}>Loading...</h1> : null}
        {isError ? <h1 className={styles.blockWithoutComment}>
            Error: {error?.status}.{error?.data}
          </h1> : null}
        {data?.items && data?.items.length != 0
          ? data.items.map((item, idx) => (
              <CommentCard
                key={idx}
                {...item}
              />
            ))
          : !isLoading &&
            !isError && (
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

export default CommentsModal
