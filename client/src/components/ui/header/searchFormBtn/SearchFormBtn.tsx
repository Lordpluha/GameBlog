import { Search, X } from 'lucide-react'
import SearchModal from './SearchModal'
import { useRef } from 'react'
import useModal from '../../../hooks/useModal'

/** Header search componen included input field and search tags */
const SearchFormBtn = () => {
	const refModal = useRef<HTMLDivElement>(null!)
  	const {modal, setModal} = useModal(refModal)

	return (
		<>
			<button onClick={() => setModal(!modal)}>
				{!modal ? <Search /> : <X />}
			</button>
			{modal && <SearchModal modal={modal} refModal={refModal} />}
		</>
	)
}

export default SearchFormBtn
