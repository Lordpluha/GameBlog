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
      <Card className='flex flex-col'>
        <div className='rounded-small'>
          {category}
          <Image src={preview} />
        </div>
        <p>{createdAt}</p>
        <CardHeader>{title}</CardHeader>
        <CardFooter>
          <p>{author.name}</p>

          <p className=''>
            <MessageCircleMore />
            <span className='pl-1'>{comments}</span>
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default PostCardM
