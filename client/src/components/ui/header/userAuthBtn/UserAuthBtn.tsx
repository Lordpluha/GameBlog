import { useState } from 'react'
import './userAuthBtn.scss'
import { UserRound } from 'lucide-react'
import UserAuthModel from './UserAuthModel'

const UserAuthBtn = () => {
	const [userBtn, setUserBtn] = useState<boolean>(false)
	return (
		<>
			<button
				className='headerUserButton'
				onClick={() => setUserBtn(!userBtn)}
			>
				<UserRound />
			</button>
			{userBtn && <UserAuthModel userBtn setUserBtn={setUserBtn} />}
		</>
	)
}

export default UserAuthBtn
