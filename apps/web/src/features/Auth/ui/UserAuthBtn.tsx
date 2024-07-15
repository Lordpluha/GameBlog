import { useRef, useState } from 'react'
import { UserRound } from 'lucide-react'
import { Modal, useModal } from '@entities/Modal'
import UserAuthModal from './@UserAuthModal/UserAuthModal'

/**
 * User button for authorization
 */
function UserAuthBtn() {
  const refModal = useRef<HTMLDivElement>(null!)
  const { modal, setModal } = useModal(refModal)
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <>
      <button
        className='rounded-full p-2'
        onClick={() => {
          setModal(!modal)
        }}
        onMouseEnter={() => { setIsHover(true); }}
        onMouseLeave={() => { setIsHover(false); }}
        style={{
          background: isHover ? '#2F3437' : 'var(--default-dark-btn-color)'
        }}
      >
        <UserRound />
      </button>
      {modal ? <Modal
          modal={modal}
          ref={refModal}
          setModal={setModal}
        >
          <UserAuthModal />
        </Modal> : null}
    </>
  )
}

export default UserAuthBtn
