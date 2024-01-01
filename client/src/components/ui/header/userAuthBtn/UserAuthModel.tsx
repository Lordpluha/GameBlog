import { X } from 'lucide-react'
import styles from './userAuthBtn.module.scss'
import { useRef } from 'react'
import { useOnClickOutsideRef } from '../../../hooks/useOnClickOutsideRef'
import SocialLinksComponent from '../../socialLinks/SocialLinksComponent'

type TBotton = {
    userBtn: boolean,
    openHandler:(val:boolean) => void
}
/**
 * Popup window for authorization user.
 * Accepting props openHandler for close popup on click outside
 */
const UserAuthModel = ({userBtn, openHandler}:TBotton) => {
  const refModal = useRef(null)
  //hook for close popup whith click outside
  useOnClickOutsideRef(refModal, openHandler)
  return (
    <div className={styles.userAuthBlockOverflow}>
        <div className={styles.userAuthBlockPosition} ref={refModal}>
            <div className={styles.userAuthBlockWrapper}>
                <div
                    className={styles.userAuthHeaderBtnClose}
                    onClick={() => openHandler(!userBtn)}
                >
                    <X />
                </div>
                <div className={styles.userAuthContent}>
                    <div className={styles.userAuthTitle}>Вход на GameBlog</div>
                    <div className='text-[var(--text-color)] pt-3 text-lg'>
                        Войти через аккаунт
                    </div>
                    <div className={styles.userAuthBtnSocialIcon}>
                        <SocialLinksComponent />
                    </div>
                    <button className={styles.userAuthBtnRegistration}>
                        Зарегистрироваться
                    </button>
                    <div className={styles.userAuthBtnPrivacy}>
                        Авторизуясь, ты соглашаешься с правилами
                        сайта и пользовательским соглашением.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserAuthModel