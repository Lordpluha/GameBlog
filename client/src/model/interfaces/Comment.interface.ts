import IUser from "./User.interface"

interface IArtisle {
	title: string
	createdAt: string
	slug: string
}

interface IComment {
	text: string
	createdAt: string
	articleId?: number
	blogId?: number,
	authorId: number,
	parentId: number,
	level: number
	author: IUser
	article?: IArtisle
	_count: {
			children: 0
	}
}

export default IComment
