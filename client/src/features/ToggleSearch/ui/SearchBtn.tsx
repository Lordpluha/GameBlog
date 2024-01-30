import { Search, X } from 'lucide-react'
import { useRef } from 'react'

import useModal from '@/hooks/useModal'

import SearchModal from './SearchModal/SearchModal'

/** Header search component included input field and search tags */
const SearchBtn = () => {
	const refModal = useRef<HTMLDivElement>(null!)
	const { modal, setModal } = useModal(refModal)

	return (
		<>
			<button onClick={() => setModal(!modal)}>
				{!modal ? <Search /> : <X />}
			</button>
			{modal && <SearchModal ref={refModal} />}
		</>
	)
}

export default SearchBtn
