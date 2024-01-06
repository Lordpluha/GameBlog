import { useNavigate } from 'react-router-dom'
import styles from './userShortData.module.scss'
import { IUserShortData } from '@/components/interfaces/extras/UserShortData.interface'

/**
 * Reused component for rendering short data of user
 * avatar, name, surname and login
 */
const UserShortData = ({avatar, name, surname, login}:IUserShortData) => {
  const navigate = useNavigate()
  const handleUserProfile = (e: React.MouseEvent<HTMLElement>) => {
    navigate(`https://stopgame.ru/user/${login}`)
  }

  return (
    <div className={styles.userShortData} onClick={handleUserProfile}>
        <picture>
            <img src={avatar} alt={login} />
        </picture> 
        <span className={styles.userinfoname}>{name} {surname}</span>
    </div>
  )
}

export default UserShortData