import { type FC } from 'react'
import PostCardVariants from './variants'
import { type TPostCardProps, EPostCardSizes } from '../models'

const PostCard: FC<TPostCardProps> = ({ size, ...props }) => {
  const PostCardSized = PostCardVariants[`PostCard${EPostCardSizes[size]}`]
  return <PostCardSized {...props} />
}

export default PostCard
