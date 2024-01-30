import { Bookmark } from 'lucide-react'
import { ButtonHTMLAttributes, FC } from 'react'


/**
 * Button with a bookmark icon.
 */
const BookmarkBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => (
	<button {...props}>
		<Bookmark className='stroke-gray-400 stroke-1 hover:stroke-red-600' />
	</button>
)

export default BookmarkBtn
