import { Dispatch, PropsWithRef, SetStateAction, forwardRef } from 'react'

import SocialLinksComponent from '@/entities/ui/Socials/Socials'
import { X } from 'lucide-react'

import styles from './UserAuthModal.module.scss'

type TUserAuthModal = {
	modal: boolean
	setModal: Dispatch<SetStateAction<boolean>>
}

/**
 * Component modal window for authorization user.
 * Accepting props setModal for close popup on click outside
 * @param modal boolean value for change setModal value
 * @param setModal function for setup state of modal window open or close
 * @param ref reference for component container type of HTMLDivElement
 */
const UserAuthModel = forwardRef<HTMLDivElement, PropsWithRef<TUserAuthModal>>(
	({ modal, setModal }, ref) => {
		return (
			<div className={styles.userAuthBlockOverflow}>
				<div className={styles.userAuthBlockPosition} ref={ref}>
					<div className={styles.userAuthBlockWrapper}>
						<div
							className={styles.userAuthHeaderBtnClose}
							onClick={() => setModal(!modal)}
						>
							<X />
						</div>
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
					</div>
				</div>
			</div>
		)
	}
)

export default UserAuthModel
