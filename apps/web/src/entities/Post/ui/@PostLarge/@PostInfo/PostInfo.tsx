import { type FC } from 'react'
import { Link, Zap } from 'lucide-react'
import type { ICategory, IPublication } from '@model/interfaces'

const PostInfo: FC<Pick<IPublication, 'author'> & { category: ICategory }> = ({
  author,
  category
}) => {
  console.log(author, category)
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <Zap size={20} />
        <p className='text-xl'>{category.title}</p>
      </div>
      <Link
        className='flex items-center gap-4'
        to="#"
      >
        <img
          alt={`${author.name} avatar image`}
          className='h-8 w-8 rounded-full object-cover outline outline-2 outline-red-800'
          src={author.avatar}
        />
        <p className='text-xl hover:text-red-700 hover:underline'>
          {author.name}
        </p>
      </Link>
    </div>
  )
}

export default PostInfo
