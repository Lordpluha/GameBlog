import { Link } from 'react-router-dom'
import '../commentsBtn.scss'
import { INewComment } from '../../../interfaces/NewComments.interface'

const CommentItem = ({ link, title, avatar, login, text }: INewComment) => {
	return (
		<Link to={link}>
			<div className='commentsTitle'>
				<h6 className='commentTitleH6'>
					{title}
				</h6>
				<div className='flex items-center text-[14px]'>
					<img
						alt={login}
						className='rounded-full'
						src={avatar}
						role='presentation'
					/>
					<p className='commentsUserLogin'>
						{login}
					</p>
				</div>
				<div className='commentsText'>
					<p>{text}</p>
				</div>
			</div>
		</Link>
	)
}

export default CommentItem