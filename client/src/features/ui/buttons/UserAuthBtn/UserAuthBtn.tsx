import { useRef } from 'react'

import useModal from '@features/lib/hooks/useModal'
import UserAuthModal from '@entities/ui/modals/UserAuth/UserAuthModal'
import { UserRound } from 'lucide-react'

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
				<UserAuthModal
					modal={modal}
					setModal={setModal}
					ref={refModal}
				/>
			)}
		</>
	)
}

export default UserAuthBtn
