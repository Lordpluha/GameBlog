import { ButtonHTMLAttributes, FC, useState } from 'react'
import { LucideProps, Search, X } from 'lucide-react'
import SearchModal, { TSearchModalProps } from './@SearchModal/SearchModal'
import { useDisclosure } from '@nextui-org/react'

/** Header search component included input field and search tags */
type TSearchBtnProps = {
  modalProps: TSearchModalProps
} & ButtonHTMLAttributes<HTMLButtonElement>

const SearchBtn: FC<TSearchBtnProps> = ({ modalProps, ...buttonProps }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isHover, setIsHover] = useState<boolean>(false)

  const iconProps: Omit<LucideProps, 'ref'> = {
    onMouseEnter: () => {
      setIsHover(true)
    },
    onMouseLeave: () => {
      setIsHover(false)
    },
    style: { color: isHover ? 'red' : 'white' }
  }

  return (
    <>
      <button
        onClick={onOpen}
        {...buttonProps}
      >
        {!isOpen ? <Search {...iconProps} /> : <X {...iconProps} />}
      </button>
      <SearchModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        {...modalProps}
      />
    </>
  )
}

export default SearchBtn
