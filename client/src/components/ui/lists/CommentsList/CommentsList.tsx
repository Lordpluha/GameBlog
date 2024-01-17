import Checkbox from '../../checkbox/Checkbox'
import { ModifiedCommentType } from '../../interfaces/Comment.interface'
import Comment from './comment/Comment'
import InputForm from './inputForm/InputForm'

interface Props {
	comments: ModifiedCommentType[]
}

export default function CommentsList({ comments }: Props) {
	return (
		<div className='flex flex-col gap-4'>
			<div className='flex justify-between items-center'>
				<h2 className='text-2xl font-medium'>
					{comments.length}{' '}
					{comments.length === 1 ? 'Комментарий' : 'Комментариев'}
				</h2>

				<label className='flex items-center gap-4 cursor-pointer'>
					<Checkbox></Checkbox>
					<span className='text-lg font-medium'>
						Сворачивать ветки
					</span>
				</label>
			</div>

			<InputForm></InputForm>

			<div className='flex flex-col'>
				{comments.map(comment => (
					<Comment key={comment.id} comment={comment} />
				))}
			</div>
		</div>
	)
}
