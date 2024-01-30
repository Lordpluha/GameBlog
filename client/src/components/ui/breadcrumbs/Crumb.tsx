import { Link } from 'react-router-dom'

const Crumb = ({path, title}:{path:string, title:string}) => {
  title = title.replace('_', ' ')
  const titleUpp = title[0].toUpperCase() + title.slice(1)

  return (
    <Link to={'/'+path}>{titleUpp}</Link>
  )
}

export default Crumb