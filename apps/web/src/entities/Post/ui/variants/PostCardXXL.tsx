'use client'

import { type FC } from 'react'
import { Card, CardHeader, CardFooter, Image, Link } from '@nextui-org/react'
import { TPostCardProps } from '@entities/Post/models'

const PostCardXXL: FC<Omit<TPostCardProps, 'size'>> = ({
  post: {
    title,
    preview,
    _count: { comments },
    author,
    id,
    slug
  }
}) => (
  <Link href={`posts/${id}/${slug}`}>
    <Card className='flex h-[40vh] flex-col gap-4 overflow-hidden rounded-2xl bg-neutral-800'>
      <CardHeader></CardHeader>
      <Image
        removeWrapper
        src={preview}
      />
      <CardFooter className='absolute bottom-0'>
        <h1>{title}</h1>
        <div className='flex flex-row justify-between'>
          <p>{author.name}</p>
          <p>{comments}</p>
        </div>
      </CardFooter>
    </Card>
  </Link>
)

export default PostCardXXL
