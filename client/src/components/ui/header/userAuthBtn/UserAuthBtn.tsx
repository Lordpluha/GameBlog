import React from 'react'
import styles from './userAuthBtn.module.scss'
import CloseXIcon from '../../icons/CloseXIcon'

const UserAuthBtn = () => {
  const [userBtn, setUserBtn] = React.useState<boolean>(false)
  return (
    <>
        <button className={styles.headerUserButton} onClick={() => setUserBtn(!userBtn)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>
        </button>
        {userBtn&&<div className={`dark:bg-[#2f3233] dark:bg-opacity-45 dark:border-zinc-800 ${styles.userAuthBlockOverflow}`}>
            <div className={styles.userAuthBlockPosition}>
                <div className={`dark:bg-zinc-800 ${styles.userAuthBlockWrapper}`}>
                    <div className={styles.userAuthHeaderBtnClose} onClick={() => setUserBtn(!userBtn)}>
                        <CloseXIcon />
                    </div>
                    <div className={styles.useAuthContent}>
                        <div className={`dark:text-zinc-200 ${styles.userAuthTitle}`}>Вход на GameBlog</div>
                        <div className={`dark:text-zinc-200 pt-3 text-lg`}>Войти через аккаунт</div>
                        <ul className={styles.userAuthBtnSocialIcon}>
                            <li>SlSocialVkontakte</li>
                            <li>SlSocialGoogle</li>
                            <li>SlSocialLinkedin</li>
                        </ul>
                        <button className={styles.userAuthBtnRegistration}>
                            Зарегистрироваться
                        </button>
                        <div className={styles.userAuthBtnPrivacy}>Авторизуясь, ты соглашаешься с правилами сайта и пользовательским соглашением.</div>
                    </div>
                </div>
            </div>
        </div>}
    </>
  )
}

export default UserAuthBtn