import { useState } from 'react'
import styles from './userAuthBtn.module.scss'
import CloseXIcon from '../../icons/CloseXIcon'
import clsx from 'clsx'
import VKIcon from '../../icons/VKIcon'
import GoogleIcon from '../../icons/GoogleIcon'
import YandexIcon from '../../icons/YandexIcon'
import OkIcon from '../../icons/OkIcon'

const UserAuthBtn = () => {
	const [userBtn, setUserBtn] = useState<boolean>(false)
	return (
		<>
			<button
				className={styles.headerUserButton}
				onClick={() => setUserBtn(!userBtn)}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='lucide lucide-user'
				>
					<path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
					<circle cx='12' cy='7' r='4' />
				</svg>
			</button>
			{userBtn && (
				<div
					className={clsx(
						'dark:bg-[#2f3233] dark:bg-opacity-45 dark:border-zinc-800',
						styles.userAuthBlockOverflow
					)}
				>
					<div className={styles.userAuthBlockPosition}>
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
								<CloseXIcon />
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
			)}
		</>
	)
}

export default UserAuthBtn
