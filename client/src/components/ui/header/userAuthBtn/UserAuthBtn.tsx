import { useState } from 'react'
import styles from './userAuthBtn.module.scss'
import { UserRound } from 'lucide-react'
import UserAuthModel from './UserAuthModel'

const UserAuthBtn = () => {
	const [userBtn, setUserBtn] = useState<boolean>(false)
	return (
		<>
			<button
				className={styles.headerUserButton}
				onClick={() => setUserBtn(!userBtn)}
			>
				<UserRound />
			</button>
			{userBtn && <UserAuthModel userBtn openHandler={setUserBtn} />}
		</>
	)
}

export default UserAuthBtn
