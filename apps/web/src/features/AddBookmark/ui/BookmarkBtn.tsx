import { type ButtonHTMLAttributes, type FC } from 'react'
import { Bookmark } from 'lucide-react'

/**
 * Button with a bookmark icon.
 */
const BookmarkBtn: FC<ButtonHTMLAttributes<HTMLButtonElement>> = props => (
  <button {...props}>
    <Bookmark className='stroke-gray-400 stroke-1 hover:stroke-red-600' />
  </button>
)

export default BookmarkBtn
