import { useRef, useState } from 'react'

import modal from 'antd/es/modal'
import { UserRound } from 'lucide-react'

import useModal from '../lib/useModal'
import UserAuthModal from './@UserAuthModal/UserAuthModal'

/**
 * User button for authorization
 */
const UserAuthBtn = () => {
	const refModal = useRef<HTMLDivElement>(null!)
	const refButton1 = useRef<HTMLButtonElement>(null!)
	const refButton2 = useRef<HTMLButtonElement>(null!)
	const refBtnRegistration = useRef<HTMLButtonElement>(null!)
	const refBack = useRef<HTMLButtonElement>(null!)
	const { modal, setModal, modalOpened, setModalOpened } = useModal(
		refModal,
		[refButton1, refButton2],
		refBtnRegistration,
		refBack
	)
	const [isHover, setIsHover] = useState<boolean>(false)

	return (
		<>
			<button
				ref={refButton1}
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
				<UserAuthModal
					refBack={refBack}
					modalOpened={modalOpened}
					refBtnRegistration={refBtnRegistration}
					setModalOpened={setModalOpened}
					modal={modal}
					setModal={setModal}
					closeButtonRef={refButton2}
					ref={refModal}
				/>
			)}
		</>
	)
}

export default UserAuthBtn
