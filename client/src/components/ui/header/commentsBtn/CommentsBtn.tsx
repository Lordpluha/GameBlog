import { useState } from 'react'
import styles from './commentsBtn.module.scss'
import MessageCircleIcon from '../../icons/MessageCircleIcon'
import CloseXIcon from '../../icons/CloseXIcon'
import { INewComments } from '../../interfaces/NewComments.interface'
import CommentItem from './commentsItem/CommentItem'

/**
 * Modal component with a list of new comments
 * @param newComments - is response data from server
 * @param openCom boolean value for open or close modal windows with new comments
 * @interface INewComments interface describing of the response data from the server
 * 
 */
const CommentsBtn = ({newComments}:{newComments:INewComments[]}) => {
  const [openCom, setOpenCom] = useState<boolean>(false)

  return (
    <>
        <button className={styles.headerCommentsButton} onClick={() => setOpenCom(!openCom)}>
            <MessageCircleIcon />
        </button>
        {openCom&&<div className={`dark:bg-[#1e2224] ${styles.commentsBlock}`}>
            <div className={`dark:text-zinc-200 ${styles.commentsBlockHeader}`}>
                <span className="text-3xl font-semibold">Новые комментарии</span>
                <span className="cursor-pointer" onClick={() => setOpenCom(!openCom)}>
                    <CloseXIcon />
                </span>
            </div>
            <div className={styles.commentsBlockBody}>
                {newComments.map((item, idx) => (
                    <CommentItem key={idx} {...item} />
                ))}
            </div>
        </div>}
    </>
  )
}

export default CommentsBtn