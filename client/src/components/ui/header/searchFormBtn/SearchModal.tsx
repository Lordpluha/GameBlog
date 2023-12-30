import styles from './searchFormBtn.module.scss'
import SearchTags from './SearchTags'
import { Search } from 'lucide-react'
import clsx from 'clsx'
import { useRef } from 'react'
import { useOnClickOutsideRef } from '../../../hooks/useOnClickOut'

const SearchModal = ({setOpen}:{setOpen:(val:boolean) => void}) => {
  const refModal = useRef(null)
  useOnClickOutsideRef(refModal, setOpen)
  return (
    <div className='fixed top-[79px] left-0 right-0' ref={refModal}>
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
  )
}

export default SearchModal