import type ICategory from '../Category.model'
import type ITag from '../../Tag/Tag.model'
import type IUser from '../../User/User.model'

// General inner interface for all type of publications
interface IPublication {
  id: number
  title: string
  content: string
  views: number
  preview: string
  slug: string
  isVerif: boolean
  authorId: number
  createdAt: string
  categories: ICategory[]
  tags: ITag[]
  author: IUser
  _count: {
    comments: number
  }
}

export default IPublication
