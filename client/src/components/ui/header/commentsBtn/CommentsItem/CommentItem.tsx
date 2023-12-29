import { Link } from 'react-router-dom'
import styles from '../commentsBtn.module.scss'
import { INewComments } from '../../../interfaces/NewComments.interface'
import clsx from 'clsx'

const CommentItem = ({link, title, avatar, login, text}:INewComments) => {
  return (
    <Link to={link}>
        <div className={
            clsx('dark:bg-[#2f3437]', styles.commentsTitle)
        }>
            <span className="font-semibold text-[14px] text-[#747c81]">{title}</span>
            <span className="flex items-center text-[14px]">
                <img alt={login} className="rounded-full" src={avatar} role="presentation" />
                <span className="pl-3 font-bold text-[#2f3437] dark:text-white">{login}</span>
            </span>
            <div className={
                clsx('dark:text-white', styles.commentsText)
            }>
                <p>{text}</p>
            </div>
        </div>
    </Link>
  )
}

export default CommentItem