import { UserRound } from 'lucide-react'
import { useRef } from 'react'

import useModal from '@hooks/useModal'

import ModalComponent from '@/components/ui/modal/ModalComponent'
import UserAuthModal from '@ui/header/modals/UserAuth/UserAuthModal'

/**
 * User button for authorization
 */
const UserAuthBtn = () => {
	const refModal = useRef<HTMLDivElement>(null!)
	const { modal, setModal } = useModal(refModal)

	return (
		<>
			<button
				className='bg-[var(--default-dark-btn-color)] rounded-full p-2'
				onClick={() => setModal(!modal)}
			>
				<UserRound />
			</button>
			{modal && (
				<ModalComponent
					modal={modal}
					setModal={setModal}
					ref={refModal}
				>
					<UserAuthModal />
				</ModalComponent>
			)}
		</>
	)
}

export default UserAuthBtn
