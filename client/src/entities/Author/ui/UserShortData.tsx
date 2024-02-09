import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { IUser } from '@model/interfaces'

import styles from './UserShortData.module.scss'

/**
 * Reused component for rendering short data of user
 * @param avatar - image of user,
 * @param firstName - name of user,
 * @param lastName - surname of user,
 * @param login - login of user in the site
 */
const UserShortData: FC<IUser> = ({ avatar, firstName, lastName, login }) => {
	const navigate = useNavigate()
	const handleUserProfile = () => {
		navigate(`https://stopgame.ru/user/${login}`)
	}

	return (
		<div className={styles.authorinfo}>
			<div className={styles.userShortData} onClick={handleUserProfile}>
				<picture>
					<img src={avatar} alt={login} />
				</picture>
				<p className={styles.userinfoname}>
					{firstName} {lastName}
				</p>
			</div>
		</div>
	)
}

export default UserShortData
