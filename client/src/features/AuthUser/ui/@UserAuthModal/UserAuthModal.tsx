import {
	type Dispatch,
	type PropsWithRef,
	type SetStateAction,
	forwardRef,
	useState
} from 'react'
import { Link } from 'react-router-dom'

import { X } from 'lucide-react'

import { Socials } from '@entities/Socials'

import Registration from './Registration'
import styles from './UserAuthModal.module.scss'

/**
 * Component of user auth for modal window.
 */
const UserAuthModal = () => {
	return (
		<div className={styles.userAuthContent}>
			<h1 className={styles.userAuthTitle}>Вход на GameBlog</h1>
			<h4 className='text-[var(--text-color)] pt-3 text-lg'>
				Войти через аккаунт
			</h4>
			<div className={styles.userAuthBtnSocialIcon}>
				<Socials />
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
