import { useRef, useState } from 'react'
import { MessageCircleMore } from 'lucide-react'
import { useModal } from '../lib'
import CommentsModal from './@Comments/CommentsModal'
import styles from './CommentsBtn.module.scss'

/**
 * Modal component with a list of new comments
 * useModal is a custom hook for closing a modal window by clicking an outside
 */
function CommentsBtn() {
  const refCommentModal = useRef<HTMLDivElement>(null!)
  const refButton1 = useRef<HTMLButtonElement>(null!)
  const refButton2 = useRef<HTMLButtonElement>(null!)
  const { modal, setModal } = useModal(refCommentModal, [
    refButton1,
    refButton2
  ])
  const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <>
      <button
        className={styles.commentBtn}
        onClick={() => {
          setModal(prev => !prev)
        }}
        onMouseEnter={() => { setIsHover(true); }}
        onMouseLeave={() => { setIsHover(false); }}
        ref={refButton1}
        style={{
          background: isHover ? '#2F3437' : 'var(--default-dark-btn-color)'
        }}
      >
        <MessageCircleMore />
      </button>
      {modal ? <CommentsModal
          closeButtonRef={refButton2}
          ref={refCommentModal}
          setModal={setModal}
        /> : null}
    </>
  )
}

export default CommentsBtn
