import { UserType } from './User.interface'

export interface ModifiedCommentType {
	id: number
	content: string
	createdAt: string
	updatedAt: string
	user: UserType
	rating: number
	reply: number | null
	level: number
}

export interface CommentType {
	id: number
	content: string
	createdAt: number
	updatedAt: number
	user: UserType
	rating: number
	reply: number | null
}

export type CommentsListType = Record<number, CommentType>
