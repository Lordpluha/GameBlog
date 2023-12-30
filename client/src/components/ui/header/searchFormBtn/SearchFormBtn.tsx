import { useState } from 'react'
import { Search, X } from 'lucide-react'
import SearchModal from './SearchModal'

/** Header search componen included input field and search tags */
const SearchFormBtn = () => {
	// open - is const of state accepting boolean value for change icons search or close
	const [open, setOpen] = useState<boolean>(false)
	return (
		<>
			<button onClick={() => setOpen(!open)}>
				{!open ? <Search /> : <X />}
			</button>
			{open && <SearchModal setOpen={setOpen} />}
		</>
	)
}

export default SearchFormBtn
