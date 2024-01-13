import { Link } from 'react-router-dom'

const Crumb = (crumb:string) => {
  return (
    <Link to={`/${crumb}`}>{crumb}</Link>
  )
}

export default Crumb