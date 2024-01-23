import { ForwardedRef, PropsWithChildren, forwardRef } from 'react'
import styles from './modal.module.scss'
import { X } from 'lucide-react'

type TModal = {
	modal: boolean
	setModal: React.Dispatch<React.SetStateAction<boolean>>
}

type TRefModal = ForwardedRef<HTMLDivElement>

/**
 * Reused component modal window.
 * Accepting props setModal for close popup on click outside
 * @param modal boolean value for change setModal value
 * @param setModal function for setup state of modal window open or close
 * @param ref reference for component container type of HTMLDivElement
 */
const ModalComponent = forwardRef(({ children, modal, setModal }:PropsWithChildren<TModal>, ref: TRefModal) => {
  return (
    <div className={styles.userAuthBlockOverflow}>
        <div className={styles.userAuthBlockPosition} ref={ref}>
            <div className={styles.userAuthBlockWrapper}>
                <div
                    className={styles.userAuthHeaderBtnClose}
                    onClick={() => setModal(!modal)}
                >
                    <X />
                </div>
                {children}
            </div>
        </div>
    </div>
  )
})

export default ModalComponent