import {
	type Dispatch,
	MutableRefObject,
	type PropsWithRef,
	type SetStateAction,
	forwardRef,
	useState
} from 'react'
import { Link } from 'react-router-dom'

import { X } from 'lucide-react'

import Socials from './@Socials/Socials'
import Registration from './Registration'
import styles from './UserAuthModal.module.scss'

interface TUserAuthModal {
	modal: boolean
	setModal: Dispatch<SetStateAction<boolean>>
	closeButtonRef: MutableRefObject<HTMLButtonElement>
	refBtnRegistration: MutableRefObject<HTMLButtonElement>
	setModalOpened: Dispatch<SetStateAction<boolean>>
	modalOpened: boolean
	refBack: MutableRefObject<HTMLButtonElement>
}

/**
 * Component modal window for authorization user.
 * Accepting props setModal for close popup on click outside
 * @param modal boolean value for change setModal value
 * @param setModal function for setup state of modal window open or close
 * @param ref reference for component container type of HTMLDivElement
 */
const UserAuthModel = forwardRef<HTMLDivElement, PropsWithRef<TUserAuthModal>>(
	(
		{
			setModal,
			closeButtonRef,
			refBtnRegistration,
			setModalOpened,
			modalOpened,
			refBack
		},
		ref
	) => {
		return (
			<div className={styles.userAuthBlockOverflow}>
				<div className={styles.userAuthBlockPosition} ref={ref}>
					<div className={styles.userAuthBlockWrapper}>
						<button
							ref={closeButtonRef}
							className={styles.userAuthHeaderBtnClose}
							// onClick={() => {
							// 	setModal(false)
							// }}
						>
							<X className={styles.icon} />
						</button>
						<div className={styles.userAuthContent}>
							<h1 className={styles.userAuthTitle}>
								Вход на GameBlog
							</h1>
							<h4 className='text-[var(--text-color)] pt-3 text-[18px]'>
								Войти через аккаунт
							</h4>
							<div className={styles.userAuthBtnSocialIcon}>
								<Socials />
							</div>
							<button
								ref={refBtnRegistration}
								className={styles.userAuthBtnRegistration}
								// onClick={() => setModalOpened(true)}
							>
								Зарегистрироваться
							</button>
							{modalOpened && (
								<Registration
									refBack={refBack}
									closeButtonRef={closeButtonRef}
									setModal={setModal}
									setModalOpened={setModalOpened}
								/>
							)}
							<p className={styles.userAuthBtnPrivacy}>
								Авторизуясь, ты соглашаешься с
								<Link to='#'>правилами сайта</Link> и
								<Link to='#'>пользовательским соглашением</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
)

export default UserAuthModel
