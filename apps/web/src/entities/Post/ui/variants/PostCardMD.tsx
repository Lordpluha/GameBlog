'use client'

import { useState, useEffect, type FC } from 'react'
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  CardBody,
  Link,
  Skeleton
} from '@nextui-org/react'
import type { TPostCardProps } from '@entities/Post/models'
import { AddToBookmarkBtn } from '@features/AddToBookmark'

const PostCardMD: FC<Omit<TPostCardProps, 'size'>> = ({
  post: {
    category,
    author,
    title,
    id,
    slug,
    createdAt,
    _count: { comments },
    preview
  }
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Link href={`/post/${id}/${slug}`}>
      <Card className='rounded-small'>
        <Skeleton isLoaded={isLoaded}>
          <Image src={preview} />
        </Skeleton>
        <CardBody className='flex justify-between px-2 pb-1 pt-2'>
          <CardHeader>
            <Skeleton isLoaded={isLoaded}>
              <div>
                <p>
                  {category?.icon} {category?.name}
                </p>
                <p>
                  {author?.avatar} {author.name}
                </p>
              </div>
              {title}
            </Skeleton>
          </CardHeader>
          <CardFooter className='flex flex-row justify-between'>
            <Skeleton isLoaded={isLoaded}>
              <p>{createdAt}</p>
            </Skeleton>
            <Skeleton isLoaded={isLoaded}>
              <div className='flex flex-row gap-x-2'>
                <AddToBookmarkBtn />
              </div>
            </Skeleton>
          </CardFooter>
        </CardBody>
      </Card>
    </Link>
  )
}

export default PostCardMD
