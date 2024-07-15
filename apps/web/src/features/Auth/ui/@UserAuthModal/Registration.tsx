import type { Dispatch, FC, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { BackArrow } from '@shared/ui'
import captchaImg from "../../../../../../../../google.png"
import styles from './UserAuthModal.module.scss'

interface TRegistrationProps {
  modal: boolean
  setModal: Dispatch<SetStateAction<boolean>>
}

const Registration: FC<TRegistrationProps> = ({ modal, setModal }) => {
  return (
    <div className={styles.headerOverlay}>
      <div className={styles.headerSlider}>
        <div className={styles.slider}>
          <div className={styles.fill}>
            <button
              className={styles.back}
              onClick={() => { setModal(false); }}
            >
              <BackArrow />
              <span>Назад</span>
            </button>
            <button
              className={styles.userAuthHeaderBtnClose}
              onClick={() => {
                setModal(false)
              }}
            >
              <X className={styles.icon} />
            </button>
            <div className='header__window'>
              <div className={styles.header__complete}>
                <h1>Регистрация</h1>
                <form>
                  <div className={styles.field}>
                    <input
                      name='login'
                      placeholder='Логин'
                      type='text'
                    />
                    <p className='header__no-error'>Нет ошибок</p>
                    <input
                      name='email'
                      placeholder='Email'
                      type='text'
                    />
                    <p className='header__no-error'>Нет ошибок</p>
                    <div className={styles.captcha}>
                      <div className={styles.spinner}>
                        <label>
                          <input type='checkbox' />
                          <span className={styles.checkmark} />
                        </label>
                      </div>
                      <h1 className={styles.headerText}>
                        I&apos;m not a robot
                      </h1>
                      <div className={styles.logoCaptcha}>
                        <img src={captchaImg} />
                        <span className='mb-1 mt-1.5 text-[10px] font-bold'>
                          reCAPTCHA
                        </span>
                        <span>Privacy - Terms</span>
                      </div>
                    </div>
                    <button className={styles.done}>Зарегистрироваться</button>
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.rules}>
              <p>
                Авторизуясь, ты соглашаешься с<Link to=''>правилами сайта</Link>{' '}
                и<Link to=''>пользовательским соглашением</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
