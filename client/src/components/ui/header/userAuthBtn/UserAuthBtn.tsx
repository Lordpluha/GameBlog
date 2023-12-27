import React from 'react'
import styles from './userAuthBtn.module.scss'

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
        {userBtn&&<div className={`dark:bg-[#1e2224] dark:border-zinc-800 ${styles.userAuthBlock}`}>
            <div className={styles.useAuthContent} onClick={e => e.stopPropagation()}>
                <span className={styles.userAuthHeaderBtnClose} onClick={() => setUserBtn(!userBtn)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                        <path d="M18 6 6 18"/>
                        <path d="m6 6 12 12"/>
                    </svg>
                </span>
                <div className={`dark:text-zinc-200 ${styles.userAuthTitle}`}>Вход на GameBlog</div>
                <div className={`dark:text-zinc-200`}>Вход на GameBlog</div>
            </div>
        </div>}
    </>
  )
}

export default UserAuthBtn