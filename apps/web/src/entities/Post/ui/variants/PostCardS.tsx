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
		<Card className={'grid grid-cols-[clamp(110px,_30%,_196px)_1fr] grid-rows-[min-content_1fr_min-content] gap-x-4 gap-y-[4px] shadow-none'}>
			<Link href={`post/${id}/${slug}`} className='row-span-full col-span-1'>
				<Image
					src={preview}
					isZoomed
					classNames={{
						wrapper: '',
						img: 'object-cover block h-full'
					}}
				/>
			</Link>
			<CardHeader className='p-0 pt-1'>
				<Link href={`post/${id}/${slug}`}>
					{title}
				</Link>
			</CardHeader>
			{/* <TagsList
				className={styles.articleItemCategory}
				tags={post.tags}
			/> */}
			this is tags list placeholder
			<div className='flex flex-row justify-between pr-1 pb-1'>
				<p className='text-[17px] text-gray-500'>
					{dateConverter(createdAt)}
				</p>

				<p className={'flex flex-row'}>
					<MessageCircleMore />
					<span className='pl-1'>{comments}</span>
				</p>
			</div>
		</Card>
  )
}

export default PostCardS
