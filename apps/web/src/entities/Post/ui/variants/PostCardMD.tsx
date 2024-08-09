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
import { dateConverter } from '@/shared/utils'
import { MessageCircleMore, Info } from 'lucide-react'

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
      <Card className='rounded-large shadow-none'>
        <Skeleton isLoaded={isLoaded}>
          <Image
						src={preview}
						isZoomed
						classNames={{
							zoomedWrapper: 'rounded-b-none',
							img: 'rounded-b-none'
						}}
					/>
        </Skeleton>
        <CardBody className='flex justify-between px-2 pb-1 pt-2'>
          <CardHeader>
            <Skeleton isLoaded={isLoaded}>
              <div className='flex flex-row justify-between'>
                <p>
                  {category?.icon} {category?.title}
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
              <p>{dateConverter(createdAt)}</p>
            </Skeleton>
            <Skeleton isLoaded={isLoaded}>
              <div className='flex flex-row gap-x-2'>
								<Info />
                <AddToBookmarkBtn />
								<p className='flex flex-row'>
									<MessageCircleMore />
									<span className='pl-1'>{comments}</span>
								</p>
              </div>
            </Skeleton>
          </CardFooter>
        </CardBody>
      </Card>
    </Link>
  )
}

export default PostCardMD
