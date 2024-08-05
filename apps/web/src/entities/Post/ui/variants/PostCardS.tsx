'use client'

import type { FC } from 'react'
import { MessageCircleMore } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Link
} from '@nextui-org/react'
import type { TPostCardProps } from '@entities/Post/models'
import { dateConverter } from '@/shared/utils'

const PostCardS: FC<Omit<TPostCardProps, 'size'>> = ({
  post: {
    _count: { comments },
    title,
    tags,
    preview,
    createdAt,
    id,
    slug
  }
}) => {
  return (
    <Link href={`post/${id}/${slug}`}>
      <Card className={'flex flex-row'}>
        <Image src={preview} />
        <div className={'flex flex-col justify-between'}>
          <CardHeader className={''}>{title}</CardHeader>

          <CardFooter className=''>
            {/* <TagsList
	            className={styles.articleItemCategory}
	            tags={post.tags}
	          /> */}
            <div className='flex flex-row justify-between'>
              <p className='text-[17px] text-gray-500'>
                {dateConverter(createdAt)}
              </p>

              <p className={''}>
                <MessageCircleMore />
                <span className='pl-1'>{comments}</span>
              </p>
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  )
}

export default PostCardS
