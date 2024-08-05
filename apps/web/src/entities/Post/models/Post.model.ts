import { ICategory } from '@entities/Category'
import { type ITag } from '@entities/Tag'
import { IUser } from '@entities/User/User.model'

// General inner interface for all type of publications
interface IPostModel {
  id: number
  title: string
  content: string
  views: number
  preview: string
  slug: string
  isVerif: boolean
  authorId: number
  createdAt: string
  category: ICategory
  tags: ITag[]
  author: IUser
  _count: {
    comments: number
  }
}

export default IPostModel
