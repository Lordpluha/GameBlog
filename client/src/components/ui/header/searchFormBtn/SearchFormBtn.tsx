import { useState } from 'react'
import styles from './searchFormBtn.module.scss'
import SearchTags from './SearchTags'
import clsx from 'clsx'
import { Search, X } from 'lucide-react'

/** Header search componen included input field and search tags */
const SearchFormBtn = () => {
	// open - is const of state accepting boolean value for change icons search or close
	const [open, setOpen] = useState<boolean>(false)
	return (
		<>
			<button onClick={() => setOpen(!open)}>
				{!open ? <Search /> : <X />}
			</button>
			{open && (
				<div className='fixed top-[79px] left-0 right-0'>
					<div className='bg-[#f6f6f6] dark:bg-[#1c2225] py-10'>
						<div className='flex flex-col max-w-3xl mx-auto'>
							<div className={styles.searchInputBlock}>
								<div className='text-[#747c81] dark:text-[#71797e] absolute ml-3'>
								<Search />
								</div>
								<input
									type='text'
									className={clsx(
										'dark:bg-[#262a2c] dark:text-[#71797e]',
										styles.searchInput
									)}
									placeholder='ПОИСК'
								/>
							</div>
							<SearchTags />
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default SearchFormBtn
