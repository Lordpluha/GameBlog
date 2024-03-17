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
	const { modal, setModal } = useModal(refModal, [refButton1, refButton2])
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
