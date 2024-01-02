import styles from './searchFormBtn.module.scss'
import SearchTags from './SearchTags'
import { Search } from 'lucide-react'
import { ForwardedRef, forwardRef, MutableRefObject } from 'react'

type TModalProps = {
    modal: boolean
    refModal: MutableRefObject<HTMLDivElement>
}

/**
 * Component search form modal with tags
 */

const SearchModal = forwardRef(({modal}:TModalProps, refModal:ForwardedRef<HTMLDivElement>) => {
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
                        autoFocus={modal}
                    />
                </div>
                <SearchTags />
            </div>
        </div>
    </div>
  )
})

export default SearchModal