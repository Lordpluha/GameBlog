import { useRef, useState } from 'react'
import { MessageCircleMore } from 'lucide-react'
import { useModal } from '../lib'
import CommentsSidebar from './@CommentsSidebar/CommentsSidebar'
import styles from './CommentsBtn.module.scss'

/**
 * Modal component with a list of new comments
 * useModal is a custom hook for closing a modal window by clicking an outside
 */
function CommentsBtn() {
  const [isCommentsOpen, setIsCommentsOpen] = useState<boolean>(false)
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <>
      <button
        className={styles.commentBtn}
        onClick={() => {
          setIsCommentsOpen(prev => !prev)
        }}
        onMouseEnter={() => {
          setIsHover(true)
        }}
        onMouseLeave={() => {
          setIsHover(false)
        }}
        style={{
          background: isHover ? '#2F3437' : 'var(--default-dark-btn-color)'
        }}
      >
        <MessageCircleMore />
      </button>
      {isCommentsOpen && <CommentsSidebar onClose={setIsCommentsOpen(false)} />}
    </>
  )
}

export default CommentsBtn
