import ICategory from './Category.interface'
import IComment from './Comment.interface'
import ITag from './Tag.interface'
import type IUser from './User.interface'

// General inner interface for all type of publications
interface IPublication {
	id: number
	slug: string

	// Image for cards components
	preview: string
	title: string
	// MD formatted content
	content: string
	// comments: IComment[] | null

	// Автор поста
	author: IUser

	category: ICategory
	tags: ITag[]

	// Comments count number
	commentsCount: number
	// Views Count
	views: number

	createdAt: number
}

export default IPublication
