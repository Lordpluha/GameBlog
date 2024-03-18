import ICategory from './Category.interface'
import ITag from './Tag.interface'
import type IUser from './User.interface'

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
