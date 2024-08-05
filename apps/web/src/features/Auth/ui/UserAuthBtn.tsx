import { useRef, useState } from 'react'
import { UserRound } from 'lucide-react'
import { useDisclosure } from '@nextui-org/react'
import UserAuthModal from './@UserAuthModal/UserAuthModal'

/**
 * User button for authorization
 */
function UserAuthBtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <>
      <button
        className='rounded-full p-2'
        onClick={onOpen}
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
        <UserRound />
      </button>
      <UserAuthModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  )
}

export default UserAuthBtn
