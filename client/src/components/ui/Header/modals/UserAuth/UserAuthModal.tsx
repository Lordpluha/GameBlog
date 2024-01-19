import SocialLinksComponent from '@ui/lists/Socials/Socials'

import styles from './UserAuthModal.module.scss'

/**
 * Component of user auth for modal window.
 */
const UserAuthModal = () => {
		return (
			<div className={styles.userAuthContent}>
				<h1 className={styles.userAuthTitle}>
					Вход на GameBlog
				</h1>
				<h4 className='text-[var(--text-color)] pt-3 text-lg'>
					Войти через аккаунт
				</h4>
				<div className={styles.userAuthBtnSocialIcon}>
					<SocialLinksComponent />
				</div>
				<button className={styles.userAuthBtnRegistration}>
					Зарегистрироваться
				</button>
				<p className={styles.userAuthBtnPrivacy}>
					Авторизуясь, ты соглашаешься с правилами сайта и
					пользовательским соглашением.
				</p>
			</div>
		)
	}

export default UserAuthModal