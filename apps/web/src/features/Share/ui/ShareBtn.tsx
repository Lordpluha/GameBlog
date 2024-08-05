import { useRef } from 'react'
import { Share2 } from 'lucide-react'
import { Modal, useModal } from '@entities/Modal'
import { Socials } from '@entities/Socials'
import styles from './ShareBtn.module.scss'

function ShareBtn({ style }: { style: string }) {
  const refModal = useRef<HTMLDivElement>(null!)
  const { modal, setModal } = useModal(refModal)

  return (
    <>
      <button
        className={style}
        onClick={() => setModal(!modal)}
      >
        <Share2 /> Поделиться
      </button>
      {modal ? (
        <Modal
          modal={modal}
          ref={refModal}
          setModal={setModal}
        >
          <div className={styles.shareBtnContent}>
            <h2>Поделитесь с друзьями</h2>
            <Socials />
          </div>
        </Modal>
      ) : null}
    </>
  )
}

export default ShareBtn
