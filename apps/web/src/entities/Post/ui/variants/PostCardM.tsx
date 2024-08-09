'use client'

import { type FC } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link
} from '@nextui-org/react'
import { TPostCardProps } from '@entities/Post/models'
import { MessageCircleMore } from 'lucide-react'
import { dateConverter } from '@/shared/utils'

const PostCardM: FC<Omit<TPostCardProps, 'size'>> = ({
  post: {
    id,
    slug,
    _count: { comments },
    createdAt,
    title,
    author,
    category,
    preview
  }
}) => {
  return (
    <Link href={`posts/${id}/${slug}`}>
      <Card className='flex flex-col p-4 gap-y-4 w-1/3 shadow-none'>
        <div className='relative'>
          <p className='absolute'>{category?.icon} {category?.title}</p>
          <Image src={preview} isZoomed />
        </div>
        <p>{dateConverter(createdAt)}</p>
        <CardHeader className='grow p-0 rounded-none'>{title}</CardHeader>
        <CardFooter className='flex flex-row justify-between p-0 rounded-none'>
          <p>{author.name}</p>

          <p className='flex flex-row'>
            <MessageCircleMore />
            <span className='pl-1'>{comments}</span>
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default PostCardM
