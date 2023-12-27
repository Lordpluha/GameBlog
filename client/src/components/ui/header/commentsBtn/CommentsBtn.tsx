import React from 'react'
import styles from './commentsBtn.module.scss'
import { Link } from 'react-router-dom'

const CommentsBtn = () => {
  const [openCom, setOpenCom] = React.useState<boolean>(false)

  return (
    <>
        <button className={styles.headerCommentsButton} onClick={() => setOpenCom(!openCom)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-more">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                <path d="M8 12h.01"/><path d="M12 12h.01"/>
                <path d="M16 12h.01"/>
            </svg>
        </button>
        {openCom&&<div className={`dark:bg-[#1e2224] ${styles.commentsBlock}`}>
            <div className={`dark:text-zinc-200 ${styles.commentsBlockHeader}`}>
                <span className="text-3xl font-semibold">Новые комментарии</span>
                <span className="cursor-pointer" onClick={() => setOpenCom(!openCom)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                        <path d="M18 6 6 18"/>
                        <path d="m6 6 12 12"/>
                    </svg>
                </span>
            </div>
            <div className={styles.commentsBlockBody}>
                <Link to="/newsdata/61087/dsogaming_vykatil_spisok_samyh_neoptimizirovannyh_igr_2023_goda_na_pk#comment_5707642">
                    <div className={`dark:bg-[#2f3437] ${styles.commentsTitle}`}>
                        <span className="font-semibold text-[14px] text-[#747c81]">DSOGaming выкатил список самых неоптимизированных игр 2023 года на ПК</span>
                        <span className="flex items-center text-[14px]">
                            <img alt="" className="rounded-full" src="https://images.stopgame.ru/avatars/2023/06/07/c24x24/9ZTGkh6vrHeqxd-e_fR3vA/d7ZTFji.jpg" role="presentation" />
                            <span className="pl-3 font-bold text-[#2f3437] dark:text-white">BeDaLeK</span>
                        </span>
                        <div className={`dark:text-white ${styles.commentsText}`}>
                            <p>Да как бы всё с ним не так. Сколько раз в него не заходил — нормальные настройки он никогда не рекомендует.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/newsdata/61087/dsogaming_vykatil_spisok_samyh_neoptimizirovannyh_igr_2023_goda_na_pk#comment_5707642">
                    <div className={`dark:bg-[#2f3437] ${styles.commentsTitle}`}>
                        <span className="font-semibold text-[14px] text-[#747c81]">DSOGaming выкатил список самых неоптимизированных игр 2023 года на ПК</span>
                        <span className="flex items-center text-[14px]">
                            <img alt="" className="rounded-full" src="https://images.stopgame.ru/avatars/2023/06/07/c24x24/9ZTGkh6vrHeqxd-e_fR3vA/d7ZTFji.jpg" role="presentation" />
                            <span className="pl-3 font-bold text-[#2f3437] dark:text-white">BeDaLeK</span>
                        </span>
                        <div className={`dark:text-white ${styles.commentsText}`}>
                            <p>Да как бы всё с ним не так. Сколько раз в него не заходил — нормальные настройки он никогда не рекомендует. Для игры, которая у меня нормально идёт на около-высоких настройках, он может советовать выключить всё в ноль и наоборот.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/newsdata/61087/dsogaming_vykatil_spisok_samyh_neoptimizirovannyh_igr_2023_goda_na_pk#comment_5707642">
                    <div className={`dark:bg-[#2f3437] ${styles.commentsTitle}`}>
                        <span className="font-semibold text-[14px] text-[#747c81]">DSOGaming выкатил список самых неоптимизированных игр 2023 года на ПК</span>
                        <span className="flex items-center text-[14px]">
                            <img alt="" className="rounded-full" src="https://images.stopgame.ru/avatars/2023/06/07/c24x24/9ZTGkh6vrHeqxd-e_fR3vA/d7ZTFji.jpg" role="presentation" />
                            <span className="pl-3 font-bold text-[#2f3437] dark:text-white">BeDaLeK</span>
                        </span>
                        <div className={`dark:text-white ${styles.commentsText}`}>
                            <p>Да как бы всё с ним не так. Сколько раз в него не заходил — нормальные настройки он никогда не рекомендует. Для игры, которая у меня нормально идёт на около-высоких настройках, он может советовать выключить всё в ноль и наоборот.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/newsdata/61087/dsogaming_vykatil_spisok_samyh_neoptimizirovannyh_igr_2023_goda_na_pk#comment_5707642">
                    <div className={`dark:bg-[#2f3437] ${styles.commentsTitle}`}>
                        <span className="font-semibold text-[14px] text-[#747c81]">DSOGaming выкатил список самых неоптимизированных игр 2023 года на ПК</span>
                        <span className="flex items-center text-[14px]">
                            <img alt="" className="rounded-full" src="https://images.stopgame.ru/avatars/2023/06/07/c24x24/9ZTGkh6vrHeqxd-e_fR3vA/d7ZTFji.jpg" role="presentation" />
                            <span className="pl-3 font-bold text-[#2f3437] dark:text-white">BeDaLeK</span>
                        </span>
                        <div className={`dark:text-white ${styles.commentsText}`}>
                            <p>Да как бы всё с ним не так. Сколько раз в него не заходил — нормальные настройки он никогда не рекомендует. Для игры, которая у меня нормально идёт на около-высоких настройках, он может советовать выключить всё в ноль и наоборот.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>}
    </>
  )
}

export default CommentsBtn