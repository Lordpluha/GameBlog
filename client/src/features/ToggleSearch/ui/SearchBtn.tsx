import { useRef, useState } from 'react'

import { Search, X } from 'lucide-react'

import { useModal } from '@shared/lib'

import SearchModal from './@SearchModal/SearchModal'
import styles from './SearchBtn.module.scss'

/** Header search component included input field and search tags */
const SearchBtn = () => {
	const refModal = useRef<HTMLDivElement>(null!)
	const refButton = useRef<HTMLButtonElement>(null!)
	const { modal, setModal } = useModal(refModal, refButton)
	const [isHover, setIsHover] = useState<boolean>(false)

	return (
		<>
			<button
				ref={refButton}
				className={styles.searchBtn}
				onClick={() => {
					setModal(!modal)
				}}
			>
				{!modal ? (
					<Search
						style={{ color: isHover ? 'red' : 'white' }}
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
					/>
				) : (
					<X />
				)}
			</button>
			{modal && <SearchModal ref={refModal} />}
		</>
	)
}

export default SearchBtn
