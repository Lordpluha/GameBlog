import {
	Dispatch,
	PropsWithChildren,
	PropsWithRef,
	SetStateAction,
	forwardRef
} from 'react'

import { X } from 'lucide-react'

import styles from './Modal.module.scss'

type TModal = {
	modal: boolean
	setModal: Dispatch<SetStateAction<boolean>>
} & PropsWithChildren

/**
 * Reused component modal window.
 * Accepting props setModal for close popup on click outside
 * @param {boolean} modal value for change setModal value
 * @param {Dispatch<SetStateAction<boolean>>} setModal function for setup state of modal window open or close
 * @param {PropsWithRef<HTMLDivElement>} ref reference for component container type of HTMLDivElement
 */
const Modal = forwardRef<PropsWithRef<HTMLDivElement>, TModal>(
	({ children, modal, setModal }, ref) => {
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
	}
)

export default Modal
