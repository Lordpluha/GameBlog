import type { FC } from 'react'
import { Link } from 'react-router-dom'
import type { IPost } from '@model/interfaces'

const NewTitle: FC<Pick<IPost, 'content'>> = ({ content }) => {
  return (
    <Link
      className='text-2xl font-medium hover:text-red-700 hover:underline'
      to="#"
    >
      {content}
    </Link>
  )
}

export default NewTitle
