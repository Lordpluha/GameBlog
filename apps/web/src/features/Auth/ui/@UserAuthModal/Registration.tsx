import Link from 'next/link'
import type { Dispatch, FC, SetStateAction } from 'react'
import { X } from 'lucide-react'
import { LeftArrowIcon } from '@gameblog/ui'
import captchaImg from '../../../../../../../../google.png'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/modal'
import styles from './UserAuthModal.module.scss'

interface TRegistrationProps {
  modal: boolean
  setModal: Dispatch<SetStateAction<boolean>>
}

const Registration: FC<TRegistrationProps> = ({ modal, setModal }) => {
  return (
    <Modal backdrop='blur'>
      <ModalContent>
        <div className={styles.headerOverlay}>
          <div className={styles.headerSlider}>
            <div className={styles.slider}>
              <div className={styles.fill}>
                <button
                  className={styles.back}
                  onClick={() => {
                    setModal(false)
                  }}
                >
                  <LeftArrowIcon />
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
                    <ModalHeader>
                      <h1>Регистрация</h1>
                    </ModalHeader>
                    <ModalBody>
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
                          <button className={styles.done}>
                            Зарегистрироваться
                          </button>
                        </div>
                      </form>
                    </ModalBody>
                  </div>
                </div>
                <ModalFooter className={styles.rules}>
                  <p>
                    Авторизуясь, ты соглашаешься с
                    <Link to=''>правилами сайта</Link> и
                    <Link to=''>пользовательским соглашением</Link>.
                  </p>
                </ModalFooter>
              </div>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}

export default Registration
