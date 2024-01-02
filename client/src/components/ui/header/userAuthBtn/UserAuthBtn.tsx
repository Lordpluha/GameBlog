import { useRef } from 'react'
import styles from './userAuthBtn.module.scss'
import { UserRound } from 'lucide-react'
import UserAuthModal from './UserAuthModal'
import useModal from '../../../hooks/useModal'

/**
 * Rendering component user button for athorization
 */

const UserAuthBtn = () => {
	const refModal = useRef<HTMLDivElement>(null!)
  	const {modal, setModal} = useModal(refModal)
	
	return (
		<>
			<button
				className={styles.headerUserButton}
				onClick={() => setModal(!modal)}
			>
				<UserRound />
			</button>
			{modal && <UserAuthModal refModal={refModal} modal={modal} setModal={setModal} />}
		</>
	)
}

export default UserAuthBtn
