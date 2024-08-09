import { LinkProps } from '@nextui-org/react'
import IPostModel from './Post.model'
import EPostCardSizes from './PostCardSizes.enum'

type TPostCardProps = {
  post: IPostModel
  size: keyof typeof EPostCardSizes
} & LinkProps

export default TPostCardProps
