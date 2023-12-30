import clsx from 'clsx'
import { X } from 'lucide-react'
import GoogleIcon from '../../icons/GoogleIcon'
import OkIcon from '../../icons/OkIcon'
import VKIcon from '../../icons/VKIcon'
import YandexIcon from '../../icons/YandexIcon'
import styles from './userAuthBtn.module.scss'
import { useRef } from 'react'
import { useOnClickOutsideRef } from '../../../hooks/useOnClickOut'

type TBotton = {
    userBtn: boolean,
    setUserBtn:(val:boolean) => void
}

const UserAuthModel = ({userBtn, setUserBtn}:TBotton) => {
  const refModal = useRef(null)
  //hook for close popup whith click outside
  useOnClickOutsideRef(refModal, setUserBtn)
  return (
    <div
        className={clsx(
            'dark:bg-[#2f3233] dark:bg-opacity-45 dark:border-zinc-800',
            styles.userAuthBlockOverflow
        )}
    >
        <div className={styles.userAuthBlockPosition} ref={refModal}>
            <div
                className={clsx(
                    'dark:bg-zinc-800',
                    styles.userAuthBlockWrapper
                )}
            >
                <div
                    className={styles.userAuthHeaderBtnClose}
                    onClick={() => setUserBtn(!userBtn)}
                >
                    <X />
                </div>
                <div className={styles.useAuthContent}>
                    <div
                        className={clsx(
                            'dark:text-zinc-200',
                            styles.userAuthTitle
                        )}
                    >
                        Вход на GameBlog
                    </div>
                    <div className='dark:text-zinc-200 pt-3 text-lg'>
                        Войти через аккаунт
                    </div>
                    <ul className={styles.userAuthBtnSocialIcon}>
                        <li>
                            <VKIcon />
                        </li>
                        <li>
                            <GoogleIcon />
                        </li>
                        <li>
                            <YandexIcon />
                        </li>
                        <li>
                            <OkIcon />
                        </li>
                    </ul>
                    <button
                        className={styles.userAuthBtnRegistration}
                    >
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