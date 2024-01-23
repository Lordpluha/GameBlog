import { useNavigate } from 'react-router-dom'
import styles from './userShortData.module.scss'
import { IUserData } from '@/components/interfaces/extras/UserShortData.interface'
import { FC } from 'react'

/**
 * Reused component for rendering short data of user
 * @param avatar - image of user, 
 * @param name - name of user, 
 * @param surname - surname of user,
 * @param login - login of user in the site
 */
const UserShortData:FC<IUserData> = ({avatar, name, surname, login}) => {
  const navigate = useNavigate()
  const handleUserProfile = (e: React.MouseEvent<HTMLElement>) => {
    navigate(`https://stopgame.ru/user/${login}`)
  }

  return (
    <div className={styles.userShortData} onClick={handleUserProfile}>
        <picture>
            <img src={avatar} alt={login} />
        </picture> 
        <p className={styles.userinfoname}>{name} {surname}</p>
    </div>
  )
}

export default UserShortData