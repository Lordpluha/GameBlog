import type IUser from './User.interface'

interface INew {
	id: number
	preview: string
	content: string
	slug: string
	createdAt: number
	updatedAt: number
	category: string
	commentsCount: number
	user: IUser
}

export default INew
