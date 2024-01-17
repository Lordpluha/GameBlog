import { dateConverter } from '../tools/ArticleDateConverter'
import {
	CommentType,
	CommentsListType,
	ModifiedCommentType
} from '../ui/interfaces/Comment.interface'

interface ListComponentPropsType {
	comments: ModifiedCommentType[]
}
type ListComponentType = (props: ListComponentPropsType) => JSX.Element

export function withModifiedComments(ListComponent: ListComponentType) {
	return ({ comments }: { comments: CommentsListType }) => {
		function getCommentLevel(comment: CommentType) {
			const reply = comment.reply

			if (!reply) return 0

			let result = 1

			result += getCommentLevel(comments[reply])

			return result
		}

		const modifiedComments: ModifiedCommentType[] = Object.keys(
			comments
		).map(key => {
			const comment = comments[+key]

			const createdAt = dateConverter(comment.createdAt)
			const updatedAt = dateConverter(comment.updatedAt)

			const level = getCommentLevel(comment)

			return { ...comment, createdAt, updatedAt, level }
		})

		return ListComponent({ comments: modifiedComments })
	}
}
