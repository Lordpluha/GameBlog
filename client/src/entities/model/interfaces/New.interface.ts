import IUser from './User.interface'

interface INew {
	id: number
	preview: string
	content: string
	slug: string
	createdAt: number
	updatedAt: number
	categorie: string
	commentsCount: number
	user: IUser
}

export default INew
