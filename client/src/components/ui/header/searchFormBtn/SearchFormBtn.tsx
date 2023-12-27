import React from 'react'
import styles from './searchFormBtn.module.scss'

const SearchFormBtn = () => {
  const [open, setOpen] = React.useState<boolean>(false)
  return (
    <>
        <button onClick={() => setOpen(!open)}>
            {!open && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
            </svg>}
            {open && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
            </svg>}
        </button>
        {open&&<div className="fixed top-[79px] left-0 right-0">
            <div className="bg-[#f6f6f6] dark:bg-[#1c2225] py-10">
                <div className="flex flex-col max-w-3xl mx-auto">
                    <div className={styles.searchInputBlock}>
                        <svg className="lucide lucide-search text-[#747c81] dark:text-[#71797e] absolute ml-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.3-4.3"/>
                        </svg>
                        <input type="text" className={styles.searchInput} placeholder="ПОИСК" />
                    </div>
                    <div className="flex gap-3 text-[16px] flex-wrap">
                        <button className="px-4 py-3 dark:bg-[#262a2c] dark:text-white bg-[#babdbe] text-[#24282b] rounded-xl" type="button">
                            <span>Игры</span>
                        </button>
                        <button className="px-4 py-3 dark:bg-[#262a2c] dark:text-white bg-white text-[#24282b] rounded-xl" type="button">
                            <span>Пользователи</span>
                        </button>
                        <button className="px-4 py-3 dark:bg-[#262a2c] dark:text-white bg-white text-[#24282b] rounded-xl" type="button">
                            <span>Новости</span>
                        </button>
                        <button className="px-4 py-3 dark:bg-[#262a2c] dark:text-white bg-white text-[#24282b] rounded-xl" type="button">
                            <span>Блоги</span>
                        </button>
                        <button className="px-4 py-3 dark:bg-[#262a2c] dark:text-white bg-white text-[#24282b] rounded-xl" type="button">
                            <span>Статьи</span>
                        </button>
                        <button className="px-4 py-3 dark:bg-[#262a2c] dark:text-white bg-white text-[#24282b] rounded-xl" type="button">
                            <span>Видео</span>
                        </button>
                        <button className="px-4 py-3 dark:bg-[#262a2c] dark:text-white bg-white text-[#24282b] rounded-xl" type="button">
                            <span>Читы</span>
                        </button>
                        <button className="px-4 py-3 dark:bg-[#262a2c] dark:text-white bg-white text-[#24282b] rounded-xl" type="button">
                            <span>Комментарии</span>
                        </button>
                        <button className="px-4 py-3 dark:bg-[#262a2c] dark:text-white bg-white text-[#24282b] rounded-xl" type="button">
                            <span>Помощь</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>}
    </>
  )
}

export default SearchFormBtn