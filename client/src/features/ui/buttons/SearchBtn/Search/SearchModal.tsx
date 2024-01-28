import { forwardRef } from 'react'

import { Search } from 'lucide-react'

import styles from './SearchModal.module.scss'
import SearchTags from './SearchTags/SearchTags'

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

/**
 * Component search form modal with tags
 * @param refModal reference to div container of SearchModal component
 */
const SearchModal = forwardRef<HTMLDivElement, null>((_, refModal) => {
	return (
		<div className='fixed top-[79px] left-0 right-0' ref={refModal}>
			<div className='bg-[var(--modal-bg-color)] py-10'>
				<div className='flex flex-col max-w-3xl mx-auto'>
					<div className={styles.searchInputBlock}>
						<div className={styles.searchInputIcon}>
							<Search />
						</div>
						<input
							type='text'
							className={styles.searchInput}
							placeholder='ПОИСК'
						/>
					</div>
					<SearchTags tags={tags} />
				</div>
			</div>
		</div>
	)
})

export default SearchModal
