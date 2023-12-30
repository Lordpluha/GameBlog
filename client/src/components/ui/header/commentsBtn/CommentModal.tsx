import CommentItem from './commentsItem/CommentItem'
import clsx from 'clsx'
import styles from './commentsBtn.module.scss'
import { X } from 'lucide-react'
import { INewComment } from '../../interfaces/NewComments.interface'
import { useRef } from 'react'
import { useOnClickOutsideRef } from '../../../hooks/useOnClickOut'

type TProps = {
    newComments: INewComment[],
    setOpenCom: (openCom:boolean) => void
}

const CommentModal = ({ newComments, setOpenCom }: TProps) => {
  const refCommentModal = useRef(null)
  useOnClickOutsideRef(refCommentModal, setOpenCom)

  return (
    <div className={clsx('dark:bg-[#1e2224]', styles.commentsBlock)} ref={refCommentModal}>
        <div
            className={clsx(
                'dark:text-zinc-200',
                styles.commentsBlockHeader
            )}
        >
            <span className='text-3xl font-semibold'>
                Новые комментарии
            </span>
            <span
                className='cursor-pointer'
                onClick={() => setOpenCom(false)}
            >
                <X />
            </span>
        </div>
        <div className={styles.commentsBlockBody}>
            {newComments ? (
                newComments.map((item, idx) => (
                    <CommentItem key={idx} {...item} />
                ))
            ) : (
                <p className='text-center text-gray-500 font-semibold text-2xl'>
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