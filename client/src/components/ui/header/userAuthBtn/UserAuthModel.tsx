import { X } from 'lucide-react'
import GoogleIcon from '../../icons/GoogleIcon'
import OkIcon from '../../icons/OkIcon'
import VKIcon from '../../icons/VKIcon'
import YandexIcon from '../../icons/YandexIcon'
import './userAuthBtn.scss'
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
    <div className='userAuthBlockOverflow'>
        <div className='userAuthBlockPosition' ref={refModal}>
            <div className='userAuthBlockWrapper'>
                <div
                    className='userAuthHeaderBtnClose'
                    onClick={() => setUserBtn(!userBtn)}
                >
                    <X />
                </div>
                <div className='userAuthContent'>
                    <div className='userAuthTitle'>Вход на GameBlog</div>
                    <div className='dark:text-zinc-200 text-zinc-700 pt-3 text-lg'>
                        Войти через аккаунт
                    </div>
                    <ul className='userAuthBtnSocialIcon'>
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
                    <button className='userAuthBtnRegistration'>
                        Зарегистрироваться
                    </button>
                    <div className='userAuthBtnPrivacy'>
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