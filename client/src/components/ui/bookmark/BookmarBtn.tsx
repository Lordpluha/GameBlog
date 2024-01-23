import { Bookmark } from 'lucide-react'

const BookmarkBtn = ({style}:{style:string}) => {
  return (
    <button className={style}><Bookmark /></button>
  )
}

export default BookmarkBtn