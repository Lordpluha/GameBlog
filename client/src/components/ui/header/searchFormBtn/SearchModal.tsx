import styles from './searchFormBtn.module.scss'
import SearchTags from './SearchTags'
import { Search } from 'lucide-react'
import { useRef } from 'react'
import { useOnClickOutsideRef } from '../../../hooks/useOnClickOutsideRef'

const SearchModal = ({setOpen}:{setOpen:(val:boolean) => void}) => {
  const refModal = useRef(null)
  useOnClickOutsideRef(refModal, setOpen)
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
                <SearchTags />
            </div>
        </div>
    </div>
  )
}

export default SearchModal