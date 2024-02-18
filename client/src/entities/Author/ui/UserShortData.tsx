import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { IUser } from '@model/interfaces'

import styles from './UserShortData.module.scss'

/**
 * Reused component for rendering short data of user
 * @param avatar - image of user,
 * @param email - name of user,
 * @param name - surname of user,
 * @param role - login of user in the site
 */
const UserShortData: FC<IUser> = ({ avatar, email, name, role }) => {
	const navigate = useNavigate()
	const handleUserProfile = () => {
		navigate(`/user/${name}`)
	}

	return (
		<div className={styles.authorinfo}>
			<div className={styles.userShortData} onClick={handleUserProfile}>
				<picture>
					<img src={avatar} alt={email} />
				</picture>
				<p className={styles.userinfoname}>
					{name} ({role})
				</p>
			</div>
		</div>
	)
}

export default UserShortData
