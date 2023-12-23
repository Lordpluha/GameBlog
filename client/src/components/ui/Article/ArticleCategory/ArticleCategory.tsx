import { TArticleCategory } from '../../types/TArticleCategory'
import { useNavigate } from 'react-router-dom'

const ArticleCategory = ({cat}:{cat:TArticleCategory}) => {
  const navigate = useNavigate()

  const clickHandler = (e:React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    navigate(`/news/${cat.seo}`)
  }
  return (
    <div onClick={(e) => clickHandler(e)} className='cursor-pointer text-[14px] pb-2'>
        {cat.title}
    </div>
  )
}

export default ArticleCategory