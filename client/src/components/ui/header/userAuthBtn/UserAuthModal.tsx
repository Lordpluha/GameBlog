import { X } from 'lucide-react'
import styles from './userAuthBtn.module.scss'
import { ForwardedRef, MutableRefObject, forwardRef } from 'react'
import SocialLinksComponent from '../../socialLinks/SocialLinksComponent'

type TUserAuthModal = {
    modal: boolean,
    refModal: MutableRefObject<HTMLDivElement>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}
/**
 * Component modal window for authorization user. 
 * Accepting props setModal for close popup on click outside
 * @param modal boolean value for change setModal value
 * @param setModal function for setup state of modal window open or close
 */
const UserAuthModel = forwardRef(({modal, setModal}:TUserAuthModal, refModal:ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={styles.userAuthBlockOverflow}>
        <div className={styles.userAuthBlockPosition} ref={refModal}>
            <div className={styles.userAuthBlockWrapper}>
                <div
                    className={styles.userAuthHeaderBtnClose}
                    onClick={() => setModal(!modal)}
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
})

export default UserAuthModel