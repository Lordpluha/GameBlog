import IPostModel from './Post.model'
import EPostCardSizes from './PostCardSizes.enum'

type TPostCardProps = {
  post: IPostModel
  size: keyof typeof EPostCardSizes
}

export default TPostCardProps
