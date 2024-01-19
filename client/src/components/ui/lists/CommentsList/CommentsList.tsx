import { ModifiedCommentType } from '../../interfaces/Comment.interface'
import Comment from './comment/Comment'
import Header from './header/Header'
import InputForm from './inputForm/InputForm'

interface Props {
	comments: ModifiedCommentType[]
}

export default function CommentsList({ comments }: Props) {
	return (
		<div className='flex flex-col gap-4'>
			<Header commentsLength={comments.length}></Header>

			<InputForm></InputForm>

			<div className='flex flex-col'>
				{comments.map(comment => (
					<Comment key={comment.id} comment={comment} />
				))}
			</div>
		</div>
	)
}
