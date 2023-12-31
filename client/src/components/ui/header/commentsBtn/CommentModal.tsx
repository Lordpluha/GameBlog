import CommentItem from './commentsItem/CommentItem'
import './commentsBtn.scss'
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
    <div className='commentsBlock' ref={refCommentModal}>
        <div className='commentsBlockHeader'>
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
        <div className='commentsBlockBody'>
            {newComments.length ? (
                newComments.map((item, idx) => (
                    <CommentItem key={idx} {...item} />
                ))
            ) : (
                <p className='blockWithoutComment'>
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