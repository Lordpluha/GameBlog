import { type PropsWithRef, forwardRef } from 'react'
import { Search } from 'lucide-react'
import SearchTags from '../../../../entities/Tag/@SearchTags/SearchTags'
import styles from './SearchModal.module.scss'

const tags = [
  { name: 'Игры' },
  { name: 'Пользователи' },
  { name: 'Новости' },
  { name: 'Блоги' },
  { name: 'Статьи' },
  { name: 'Видео' },
  { name: 'Читы' },
  { name: 'Комментарии' },
  { name: 'Помощь' }
]

const SearchModal = forwardRef<HTMLDivElement, PropsWithRef<object>>(
  (_, refModal) => (
    <div
      className={styles.searchModal}
      ref={refModal}
    >
      <div className='bg-[var(--modal-bg-color)] py-10'>
        <div className='mx-auto flex max-w-3xl flex-col'>
          <div className={styles.searchInputBlock}>
            <div className={styles.searchInputIcon}>
              <Search />
            </div>
            <input
              className={styles.searchInput}
              placeholder='ПОИСК'
              type='text'
            />
          </div>
          <SearchTags tags={tags} />
        </div>
      </div>
    </div>
  )
)

export default SearchModal
