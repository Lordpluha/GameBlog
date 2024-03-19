import { useRef, useState } from 'react'
import { UserRound } from 'lucide-react'

import { Modal, useModal } from '@entities/Modal'

import UserAuthModal from './@UserAuthModal/UserAuthModal'

/**
 * User button for authorization
 */
const UserAuthBtn = () => {
	const refModal = useRef<HTMLDivElement>(null!)
	const { modal, setModal } = useModal(refModal)
	const [isHover, setIsHover] = useState<boolean>(false)

	return (
		<>
			<button
				style={{
					background: isHover
						? '#2F3437'
						: 'var(--default-dark-btn-color)'
				}}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				className='rounded-full p-2'
				onClick={() => {
					setModal(!modal)
				}}
			>
				<UserRound />
			</button>
			{modal && (
				<Modal modal={modal} setModal={setModal} ref={refModal}>
					<UserAuthModal />
				</Modal>
			)}
		</>
	)
}

export default UserAuthBtn
