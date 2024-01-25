import { useRef } from 'react'
import useModal from '@hooks/useModal'
import { Share2 } from 'lucide-react'
import ModalComponent from '../modal/ModalComponent'
import SocialLinksComponent from '@ui/lists/Socials/Socials'
import styles from './shareBtn.module.scss'

const ShareBtn = ({style}:{style:string}) => {
  const refModal = useRef<HTMLDivElement>(null!)
  const { modal, setModal } = useModal(refModal)

  return (
    <>
        <button className={style} onClick={() => setModal(!modal)}><Share2 /> Поделиться</button>
        {modal && (
            <ModalComponent
                modal={modal}
                setModal={setModal}
                ref={refModal}
            >
                <div className={styles.shareBtnContent}>
                    <h2>Поделитесь с друзьями</h2>
                    <SocialLinksComponent />
                </div>
            </ModalComponent>
        )}
    </>
  )
}

export default ShareBtn